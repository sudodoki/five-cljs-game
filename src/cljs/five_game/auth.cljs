(ns five-game.auth
  (:require [five-game.common :as common]
            [reagent.session :as session]
    		[firebase-cljs.core :as fb]
            [firebase-cljs.auth :as fbauth]))

(def auth-changed fbauth/auth-changed)

(defn login! [email password] (fbauth/login-userpass common/auth email password))
(defn logout! [] (fbauth/logout common/auth))
(defn signup! [email password] (fbauth/create-user common/auth email password))

 