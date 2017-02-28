(ns five-game.home
  (:require [five-game.firebase :as fb]
            [secretary.core :as secretary :include-macros true]
            [reagent.core :as r]))

(defn go-to-game [game-key] (secretary/dispatch! (str "/games/" game-key)))

(defn create-new-game []
  (let [new-game-id (fb/create-game! "new room")]
    (go-to-game new-game-id)))

(defn on-game-join [game-id]
  (go-to-game game-id))

(defn new-game-form []
  (let [game-key (r/atom "")]
    [:form {:on-submit (fn [e]
                          (.preventDefault e)
                          (on-game-join @game-key)
                          (.reset (.-target e)))}
      [:input {:type "text" :on-change #(reset! game-key (-> % .-target .-value))}]
      [:button {:type "submit"} "Join"]]))

(defn home []
  [:div
   [:h1 {:class "-text-center"} "Five Game"]
   [:div {:class "-text-center"}
     [:button {:class "button" :on-click create-new-game} "Create New Game"]
     [:h4 "or"]
     (new-game-form)]]) 
