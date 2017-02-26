(ns five-game.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]
              [five-game.game-board :refer [board]]
              [five-game.home :refer [home]]
              [five-game.firebase :as fb]
              [five-game.login :refer [login]]))
;; -------------------------
;; Views

(defn home-page []
  (home))

(defn game-page [id]
  (board id))

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

(secretary/defroute "/game" []
  (session/put! :current-page #'game-page))

(secretary/defroute "/games/:id" [id]
  (session/put! :current-page (#'game-page id)))

(secretary/defroute "/login" []
  (session/put! :current-page #'login-page))

(secretary/defroute "/about" []
  (session/put! :current-page #'about-page))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn handle-login [] 
  (session/put! :current-page #'home-page))

(defn handle-logout [] (session/put! :current-page #'login-page))

(fb/auth-changed
    fb/auth
    #(if % (handle-login) (handle-logout)))

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
