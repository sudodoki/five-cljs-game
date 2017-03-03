(ns five-game.core
    (:require [clojure.string :as str]
              [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]
              [five-game.game-board :refer [board]]
              [five-game.home :refer [home]]
              [five-game.firebase :as fb]
              [five-game.login :refer [login]]))
;; -------------------------
;; Views

(defn with-layout
  [component]
  [:div
    [:h1 "Five Game"]
    [component]
    [:a {:href "/five-cljs-game/about"} "About"]])
(defn home-page []
  ((partial with-layout home)))

(defn game-page [id]
  (partial board id))

(defn login-page []
  ((partial with-layout login)))

(defn about-page []
  [:div 
    [:h2 "About five-game"]
    [:a {:href "/five-cljs-game/"} "go to the home page"]
    [:p "The goal is to get five coins of same color in a row while preventing your opponent from getting five in a row of his own. Horizontal, vertical and diagonal rows are all allowed."]
    [:p 
      "This thing was written by "
      [:a {:href "https://github.com/busatov" :target "_blank"} "@busatov"]
      " and "
      [:a {:href "https://github.com/sudodoki" :target "_blank"} "@sudodoki"]]])

(defn current-page []
  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes

; TODO: consider naming these and using helper fn instead of str'ing urls
(secretary/defroute "/five-cljs-game/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/five-cljs-game/games/:id" [id]
  (session/put! :current-page (#'game-page id)))

(secretary/defroute "/five-cljs-game/login" []
  (session/put! :current-page #'login-page))

(secretary/defroute "/five-cljs-game/about" []
  (session/put! :current-page #'about-page))


;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn add-auth-change-handler []
  (fb/auth-changed
    fb/auth
    #(if-not % (accountant/navigate! "/five-cljs-game/login"))))

(defn init!
  []
  (accountant/configure-navigation!
      {:nav-handler
        (fn [path]
          (secretary/dispatch! path))
       :path-exists?
        (fn [path]
          (secretary/locate-route path))})
  (if-let [path (as->
                    (.-search js/location) match
                    (subs match 1)
                    (str/split match #"=")
                    (last match))]
      (accountant/navigate! path))
  (accountant/dispatch-current!)
  (add-auth-change-handler)
  (mount-root))