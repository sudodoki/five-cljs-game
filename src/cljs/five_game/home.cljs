(ns five-game.home
  (:require [firebase-cljs.database :as fbd]
            [five-game.common :as common]))

(defn create-new-game []
  (fbd/merge! common/db {:moves []} (fn [e] js/console.log e)))

(defn home []
  [:button {:on-click create-new-game} "Create New Game"])