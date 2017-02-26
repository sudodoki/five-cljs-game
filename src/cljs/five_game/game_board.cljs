(ns five-game.game-board
    (:require [reagent.core :as r]))

; COMMON CONSTANTS
(defonce red "red")
(defonce none "none")
(defonce black "black")

(defonce number-rows 6)
(defonce number-cols 7)
(defonce rows (range number-rows))
(defonce cols (range number-cols))
(defonce animation-timeout 1005)

; UTILS
(defn last-index-of [col element]
    (let [length (count col)
          reversed (reverse col)
          indexof (.indexOf reversed element)]
        (if (= indexof -1)
            -1
            (- length 1 indexof))))

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

; Presentational
(defn classname
    [classes]
    (clojure.string/join " " (map first (filter (fn [[k v]] (true? v)) classes))))

(defn get-cell
    [idx color]
    (let [class (classname {"cell" true color true})]
        [:div {:class class :key idx}]))

(defn get-column-markup 
    [idx column]
    [:div {:class "column" :key idx} (map-indexed get-cell column)])

(defn coin-slot
    [on-toss idx column]
    (let [fall-count (empty-spot column)
          ref (atom nil)
          click-handler
          (fn []
            (.add (.-classList (.-parentNode @ref)) "block")
            (.add (.-classList @ref) (str "fall-" (inc fall-count)))
            (.add (.-classList @ref) "fall")
            (js/setTimeout
                (fn []
                 (.remove (.-classList (.-parentNode @ref)) "block")
                 (.remove (.-classList @ref) (str "fall-" (inc fall-count)))
                 (.remove (.-classList @ref) "fall")
                 (on-toss idx)) 
             animation-timeout))]
        [:div {:on-click (if (filled? column) noop click-handler)
               :ref #(reset! ref %)
               :class (classname {"slot" true "filled" (filled? column)})
               :key idx}]))

(defn status [red-won? black-won?]
    (when (or red-won? black-won?)
        [:h1
            {:class (classname {"status" true "red" red-won? "black" black-won?})}
            (if red-won? "Red" "Black") " wins! :)"]))

(defn board-dumb [{:keys [columns current-turn on-toss game-ended]}]
    [:div {:class "board"}
        [:div
            {:class (classname {"coin-tosser" true current-turn true "block" game-ended})}
            (map-indexed (partial coin-slot on-toss) columns)]
        [:div
            {:class "playground"}
            (map-indexed get-column-markup columns)]      
        [:div {:class "leg right"}]
        [:div {:class "leg left"}]])

(defonce moves (r/atom []))
(defn board
  []
  (let [
        current-turn (r/atom "black")
        add-move (fn [idx]
                    (swap! moves #(conj % {:column idx :color @current-turn}))
                    (swap! current-turn toggle-turn))
        on-toss (fn [idx] (add-move idx))]
    (fn []
        (let [red-won (has-won? moves red)
              black-won (has-won? moves black)
              game-ended (or red-won black-won)]
            [:div
                [status red-won black-won]
                [board-dumb {:columns (moves->state @moves)
                              :current-turn @current-turn
                              :on-toss on-toss
                              :game-ended game-ended}]]))))    

