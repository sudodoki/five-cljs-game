(ns five-game.login
  (:require [five-game.firebase :as fb]
            [accountant.core :as accountant]
            [reagent.core :as r]))

(defn on-login [email password]
  (.then
    (fb/login! email password)
    #(accountant/navigate! "/five-cljs-game/")
    #(js/alert %)))    

(defn on-signup [email password]
  (.then
    (fb/signup! email password)
    #(accountant/navigate! "/five-cljs-game/")
    #(js/alert %)))

(defn sign-in-form []
  (let [email (r/atom "")
         password (r/atom "")]
    [:div
     [:h1 "Login"]
     [:form {:on-submit (fn [e]
                          (.preventDefault e)
                          (on-login @email @password)
                          (.reset (.-target e)))}
      [:input {:type "text" :placeholder "Email" :on-change #(reset! email (-> % .-target .-value))}]
      [:input {:type "password" :placeholder "Password" :on-change #(reset! password (-> % .-target .-value))}]
      [:button.btn.-with-margin {:type "submit"} "Login"]]]))
  
(defn sign-up-form []
  (let [email (r/atom "")
         password (r/atom "")]
    [:div
     [:h1 "Signup"]
     [:form {:on-submit (fn [e]
                          (.preventDefault e)
                          (on-signup @email @password)
                          (.reset (.-target e)))}
      [:input {:type "text" :placeholder "Email" :on-change #(reset! email (-> % .-target .-value))}]
      [:input {:type "password" :placeholder "Password" :on-change #(reset! password (-> % .-target .-value))}]
      [:button.btn.-with-margin {:type "submit"} "Register"]]]))

(defn login []
  [:div
    (sign-in-form)
    (sign-up-form)
    [:a.login-about-btn {:href "/five-cljs-game/about"} "About"]]) 
 