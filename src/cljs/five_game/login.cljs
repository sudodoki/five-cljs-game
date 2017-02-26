(ns five-game.login
  (:require [five-game.firebase :as fb]
            [reagent.core :as r]))

(defn on-login [email password]
  (.catch
    (fb/login! email password)
    (fn [err]
     (js/alert err))))    

(defn on-signup [email password]
  (.catch
    (fb/signup! email password)
    (fn [err]
     (js/alert err))))

(defn sign-in-form []
  (let [email (r/atom "")
         password (r/atom "")]
    [:div
     [:h1 "Login"]
     [:form {:on-submit (fn [e]
                          (.preventDefault e)
                          (on-login @email @password)
                          (.reset (.-target e)))}
      [:input {:type "text" :on-change #(reset! email (-> % .-target .-value))}]
      [:input {:type "text" :on-change #(reset! password (-> % .-target .-value))}]
      [:button {:type "submit"} "Login"]]]))
  
(defn sign-up-form []
  (let [email (r/atom "")
         password (r/atom "")]
    [:div
     [:h1 "Signup"]
     [:form {:on-submit (fn [e]
                          (.preventDefault e)
                          (on-signup @email @password)
                          (.reset (.-target e)))}
      [:input {:type "text" :on-change #(reset! email (-> % .-target .-value))}]
      [:input {:type "text" :on-change #(reset! password (-> % .-target .-value))}]
      [:button {:type "submit"} "Login"]]]))

(defn login []
  [:div
    (sign-in-form)
    (sign-up-form)]) 
 