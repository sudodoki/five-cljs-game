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
(defn get-current-user-uid [] (.-uid (fbauth/current-user auth)))
; DATABASE
(defn reset-state-fn [state] #(reset! state (fb->clj %)))
(defn listen-val [korks f] 
  (fbdb/listen (get-ref [:games]) korks "value" f))

(defn create-game! [name] 
  (.-key (fbdb/conj! (get-ref [:games]) {:players { :player1 (get-current-user-uid) } :moves [] :current-turn "black"})))
(defn update-player2 [game-id current-user] 
  (fbdb/reset! (get-ref [:games game-id :players :player2]) current-user))
(defn update-moves! [game-id moves]
  (fbdb/reset! (get-ref [:games game-id :moves]) moves))
(defn update-current-turn [game-id turn]
  (fbdb/reset! (get-ref [:games game-id :current-turn]) turn))


(defn listen-moves [game-id state]
  (listen-val [game-id :moves] (reset-state-fn state)))
(defn listen-current-turn [game-id state]
  (listen-val [game-id :current-turn] (reset-state-fn state)))
(defn listen-players [game-id state]
  (listen-val [game-id :current-turn] (fn [new-players]
                                        (let [current-user (get-current-user-uid)]
                                          (if (and (nil? (:player2 new-players)) (not= current-user (:player1 new-players)))
                                            (update-player2 game-id current-user)
                                            ((reset-state-fn state) new-players))))))

