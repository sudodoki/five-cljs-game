(ns five-game.firebase
  (:require [firebase-cljs.core :as fb]
            [firebase-cljs.auth :as fbauth]
            [firebase-cljs.database :as fbdb]
            [firebase-cljs.database.datasnapshot :as fbsnap])) 

(fb/init
  {:apiKey "AIzaSyCV86Tv1EHJH9XUsFUxJ0VMC0pJnS7DRxM"
   :authDomain "five-cljs-game.firebaseapp.com"
   :databaseURL "https://five-cljs-game.firebaseio.com"
   :storageBucket "five-cljs-game.appspot.com"})

(def auth (fb/get-auth))
(def db (fb/get-db))
(def auth-changed fbauth/auth-changed)
(defn get-ref [korks] (fbdb/get-in db korks))
(def games (fbdb/get-in db [:games]))
(defn fb->clj [fb] (-> fb fbsnap/val (js->clj :keywordize-keys true)))

; AUTH
(defn login! [email password] (fbauth/login-userpass auth email password))
(defn logout! [] (fbauth/logout auth))
(defn signup! [email password] (fbauth/create-user auth email password))
(defn get-current-user [] (fbauth/current-user auth))
(defn get-current-user-email [] (.-email (get-current-user)))
; DATABASE
(defn listen-val [korks f] 
  (fbdb/listen (get-ref [:games]) korks "value" f))
(defn create-game! [name]
  (.-key (fbdb/conj! (get-ref [:games]) {:players {:player1 (get-current-user-email)} 
                                         :moves [] 
                                         :current-turn "black"
                                         :previous-game-turn "red"})))
(defn update-entity! [entity-ref entity]
  (fbdb/reset! (get-ref entity-ref) entity))
(defn listen-to [game-id what cb]
  (listen-val [game-id what] #(cb (fb->clj %))))

