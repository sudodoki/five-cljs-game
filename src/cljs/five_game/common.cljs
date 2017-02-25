(ns five-game.common
  (:require [firebase-cljs.core :as fb]))

(fb/init
  {:apiKey "AIzaSyCV86Tv1EHJH9XUsFUxJ0VMC0pJnS7DRxM"
   :authDomain "five-cljs-game.firebaseapp.com"
   :databaseURL "https://five-cljs-game.firebaseio.com"
   :storageBucket "five-cljs-game.appspot.com"})

(def auth (fb/get-auth))

(def db (fb/get-db))