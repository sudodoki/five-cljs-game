(ns five-game.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]
              [five-game.game-board :refer [board]]
              [five-game.common :as common]
              [five-game.auth :as auth]
              [firebase-cljs.core :as fb]
              [five-game.login :refer [login]]))
;; -------------------------
;; Views

(defn home-page []
  (board))

(defn login-page []
  (login))

(defn about-page []
  [:div [:h2 "About five-game"]
   [:div [:a {:href "/"} "go to the home page"]]])

(defn current-page []
  [:div [(session/get :current-page)]])


;; -------------------------
;; Routes

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/login" []
  (session/put! :current-page #'login-page))

(secretary/defroute "/about" []
  (session/put! :current-page #'about-page))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(auth/auth-changed
    common/auth
    #(if % (auth/handle-login) (auth/handle-logout)))

(defn init! []
  (accountant/configure-navigation!
    {:nav-handler
     (fn [path]
       (secretary/dispatch! path))
     :path-exists?
     (fn [path]
       (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (mount-root))
