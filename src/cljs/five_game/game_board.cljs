(ns five-game.game-board
    (:require [reagent.core :as r]
              [reagent.session :as session]
              [accountant.core :as accountant]
              [five-game.firebase :as fb]))

; COMMON CONSTANTS
(defonce red "red")
(defonce none "none")
(defonce black "black")

(defonce number-rows 6)
(defonce number-cols 7)
(defonce rows (range number-rows))
(defonce cols (range number-cols))
(defonce animation-timeout 1005)
(defonce player-color-mapping {black :player1 red :player2})

; UTILS
(defn last-index-of [col element]
    (let [length (count col)
          reversed (reverse col)
          indexof (.indexOf reversed element)]
        (if (= indexof -1)
            -1
            (- length 1 indexof))))

; STATE
(defonce moves (r/atom []))
(defonce current-turn (r/atom black))
(defonce previous-game-turn (r/atom red))
(defonce players (r/atom {}))

; GAME LOGIC 
(def noop #())
(def empty-column (vec (take number-rows (repeat none))))
(defn empty-spot [column]
    (last-index-of column none))
(defn filled? [column]
    (= (empty-spot column) -1))

(defn new-column-state
    [color column]
    (let [to-change (empty-spot column)]
      (if (= -1 to-change)
        column
        (assoc column to-change color))))

(defn put-in-column
    [whole-state {:keys [column color]}]
    (assoc whole-state column (new-column-state color (nth whole-state column))))

(defn moves->state
    [moves]
    (let [initial (into [] (repeat number-cols empty-column))]
      (reduce put-in-column initial moves)))

(defn toggle-turn
    [value]
    (if (= value black) red black))

(defn is-winning-subset
    [subset color]
    (and (= 4 (count subset)) (every? #(= color %) subset)))

(defn has-4-vertical?
    [columns x y color]
    (let [column (nth columns x)
          subset (take 4  (drop y column))]
      (is-winning-subset subset color)))

(defn has-4-horizontal?
    [columns x y color]
    (let [subset-columns (take 4 (drop x columns))
          subset (map #(nth % y) subset-columns)]
        (is-winning-subset subset color)))

(defn has-4-right-diagonal?
    [columns x y color]
    (let [subset-columns (take 4 (drop x columns))
          subset (map-indexed
                    (fn [idx col]
                        (when (< (+ y idx) number-rows)
                            (nth col (+ y idx))))
                    subset-columns)]
      (is-winning-subset subset color)))

(defn has-4-left-diagonal?
    [columns x y color]
    (let [start-column (- x 3)
          subset-columns (take 4 (drop start-column columns))
          subset (map-indexed 
                    (fn [idx col]
                        (when (< (- (+ y 3) idx) number-rows)
                            (nth col (- (+ y 3) idx))))
                    subset-columns)]
      (is-winning-subset subset color)))

(defn has-4-connected?
    [columns x y color]
    (and
        (= color (get-in columns [x y]))
        (do
            (or
                (has-4-vertical? columns x y color)
                (has-4-horizontal? columns x y color)
                (has-4-right-diagonal? columns x y color)
                (has-4-left-diagonal? columns x y color)))))

(defn has-won?
    [moves color]
    (if (< (count @moves) 6)
        false
        (let [state (moves->state @moves)]
            (some true? (for [x cols y rows] (has-4-connected? state x y color))))))

(defn current-users-turn? [current-turn players]
  (let [player-key (get player-color-mapping current-turn)]
    (and
      (= 2 (-> players vals count))
      (= (player-key players) (fb/get-current-user-email)))))

(defn update-player2 [game-id new-players]
  (let [current-user (fb/get-current-user-email)
        player1 (:player1 new-players)
        player2 (:player2 new-players)]
    (when (and (nil? player2) (not= current-user player1))
      (fb/update-entity! [:games game-id :players :player2] current-user))))

; Presentational
(defn classname
    [classes]
    (clojure.string/join " " (map first (filter (fn [[k v]] (true? v)) classes))))

(defn get-cell
    [idx color]
    (let [class (classname {"cell" true color true (str "fall-" idx) (not= color none)})]
        [:div {:class class :key idx}]))

(defn get-column-markup 
    [idx column]
    [:div {:class "column" :key idx} (map-indexed get-cell column)])

(def slots (atom []))

(defn coin-slot
    [on-toss idx column]
    (let [fall-count (empty-spot column)
          ref (atom nil)
          click-handler #(on-toss idx)]
        [:div {:on-click (if (filled? column) noop click-handler)
               :ref (fn [ref] (swap! slots #(assoc % idx ref)))
               :class (classname {"slot" true "filled" (filled? column)})
               :key idx}]))

(defn status [red-won? black-won?]
    (when (or red-won? black-won?)
        [:h1
            {:class (classname {"status" true "red" red-won? "black" black-won?})}
            (if red-won? "Red" "Black") " wins! :)"]))

(defn finish-game-panel [game-ended game-id]
  (when game-ended
    (let [previous-game-turn @previous-game-turn]
      [:div
       [:button {:on-click #(do 
                              (fb/update-entity! [:games game-id :moves] [])
                              (fb/update-entity! [:games game-id :previous-game-turn] (toggle-turn previous-game-turn))
                              (fb/update-entity! [:games game-id :current-turn] previous-game-turn))} "Reset Game"]
       [:button {:on-click #(accountant/navigate! "/")} "Back to main menu"]])))

(defn turn-indicator [{:keys [player2] :as players} current-turn]
  (if (nil? player2)
    [:h2 "Waiting for players to join..."]
    [:h2 (if (current-users-turn? current-turn players) "Your turn" "Your opponent's turn")]))

(defn info-panel [game-id players]
  (let [host (session/get :host)]
    [:div {:class "info-panel"}
        [:div "Game ID: "]
        [:span {:class "bold"} game-id]
        [:p [:a {:href (str host "/games/" game-id)} "Link to this game"]]
        [:div "Player 1: "]
        [:span {:class "bold"} (:player1 players)]
        [:div "Player 2: "]
        [:span {:class "bold"} (:player2 players)]]))

(defn board-dumb [{:keys [columns current-turn players on-toss game-ended]}]
    [:div {:class "board"}
        [:div
            {:class (classname {"coin-tosser" true 
                                current-turn true 
                                "block" (or game-ended (not (current-users-turn? current-turn players)))})}
            (map-indexed (partial coin-slot on-toss) columns)]
        [:div.playground
            [:div.grid]
            (map-indexed get-column-markup columns)]      
        [:div.leg.right]
        [:div.leg.left]])

(defn board
  [game-id]
  (let [add-move (fn [idx]
                    (fb/update-entity! [:games game-id :moves] (conj @moves {:column idx :color @current-turn}))
                    (fb/update-entity! [:games game-id :current-turn] (toggle-turn @current-turn)))
        on-toss (fn [idx] (add-move idx))]
        
    (fb/listen-to game-id :moves #(reset! moves %))
    (fb/listen-to game-id :current-turn #(reset! current-turn %))
    (fb/listen-to game-id :previous-game-turn #(reset! previous-game-turn %))
    (fb/listen-to game-id :players #(reset! players %))
    (fb/listen-to game-id :players (partial update-player2 game-id))
    (fn []
        (let [red-won (has-won? moves red)
              black-won (has-won? moves black)
              game-ended (or red-won black-won)
              players @players]
            [:div
                [turn-indicator players @current-turn]
                [status red-won black-won]
                [finish-game-panel game-ended game-id]
                [info-panel game-id players]
                [board-dumb {:columns (moves->state @moves)
                              :current-turn @current-turn
                              :players players
                              :on-toss on-toss
                              :game-ended game-ended}]]))))    

