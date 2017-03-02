(ns five-game.prod
  (:require [five-game.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init! "https://sudodoki.github.io/five-cljs-game")
