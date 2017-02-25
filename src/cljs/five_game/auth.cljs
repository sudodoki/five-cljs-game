(ns five-game.auth
  (:require [five-game.common :as common]
            [five-game.core :refer [home-page login-page]]
            [reagent.session :as session]
    		[firebase-cljs.core :as fb]
            [firebase-cljs.auth :as fbauth]))

(defn handle-login [] 
  (session/put! :current-page #'home-page))
(defn handle-logout [] (session/put! :current-page #'login-page))

(def auth-changed fbauth/auth-changed)

(defn login! [email password] (fbauth/login-userpass common/auth email password))
(defn logout! [] (fbauth/logout common/auth))
(defn signup! [email password] (fbauth/login-userpass common/auth email password))

 