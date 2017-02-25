(ns five-game.game-board)

(defonce n 5)
(defonce rows (range n))
(defonce columns (range n))
(defn board []
    [:div [:h2 (str "hi" rows columns)]])
