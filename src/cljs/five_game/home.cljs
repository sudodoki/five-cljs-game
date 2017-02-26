(ns five-game.home
  (:require [five-game.firebase :as fb]
            [secretary.core :as secretary :include-macros true]))

(defn create-new-game []
  (let [new-game-id (fb/create-game! "new room")]
    (secretary/dispatch! (str "/games/" new-game-id))))


(defn home []
  [:button {:on-click create-new-game} "Create New Game"])