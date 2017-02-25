(ns five-game.game-board
    (:require [reagent.core :as r]))
(defonce n 5)
(defonce red "red")
(defonce none "none")
(defonce black "black")

(defonce number-rows 6)
(defonce number-cols 7)
(defonce rows (range number-rows))
(defonce cols (range number-cols))

(def moves-dummy
  [{:color "black" :column 1},
    {:color "red" :column 1},
    {:color "black" :column 1},
    {:color "red" :column 1},
    {:color "black" :column 1},
    {:color "red" :column 1},
    {:color "black" :column 1},
    {:color "red" :column 1}])

(def empty-column (vec (take number-cols (repeat none))))
(defn last-index-of [col element]
    (let [length (count col)
          reversed (reverse col)
          indexof (.indexOf reversed element)]
        (if (= indexof -1)
            -1
            (- length 1 indexof))))

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
          click-handler (fn []
                         (.add (.-classList @ref) (str "fall-" (inc fall-count)))
                         (.add (.-classList @ref) "fall")
                         (js/setTimeout
                           (fn []
                            (.remove (.-classList @ref) (str "fall-" (inc fall-count)))
                            (.remove (.-classList @ref) "fall")
                            (on-toss idx))
                          1500))]
        [:div {:on-click click-handler
               :ref #(reset! ref %)
               :class (classname {"slot" true "filled" (filled? column)})
               :key idx}]))

(defn board-dumb [columns current-turn on-toss]
    [
     :div {:class "board"}
        [:h1 (str rows cols)]
        [:div {:class (classname {"coin-tosser" true current-turn true})}
          (map-indexed (partial coin-slot on-toss) columns)]
        [:div {:class "playground"}
          (map-indexed get-column-markup columns)]      
        [:div {:class "leg right"}]
        [:div {:class "leg left"}]])

(defn toggle-turn
    [value]
    (if (= value black) red black))
(defn board
  []
  (let [moves (r/atom moves-dummy)
        current-turn (r/atom "black")
        add-move (fn [idx]
                    (swap! moves #(conj % {:column idx :color @current-turn}))
                    (swap! current-turn toggle-turn))
        on-toss (fn [idx] (add-move idx))]
    #(board-dumb (moves->state @moves) @current-turn on-toss)))    
