// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('five_game.firebase');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('firebase_cljs.core');
goog.require('firebase_cljs.auth');
goog.require('firebase_cljs.database');
goog.require('firebase_cljs.database.datasnapshot');
firebase_cljs.core.init.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$apiKey,"AIzaSyCV86Tv1EHJH9XUsFUxJ0VMC0pJnS7DRxM",cljs.core.cst$kw$authDomain,"five-cljs-game.firebaseapp.com",cljs.core.cst$kw$databaseURL,"https://five-cljs-game.firebaseio.com",cljs.core.cst$kw$storageBucket,"five-cljs-game.appspot.com"], null));
five_game.firebase.auth = firebase_cljs.core.get_auth.cljs$core$IFn$_invoke$arity$0();
five_game.firebase.db = firebase_cljs.core.get_db.cljs$core$IFn$_invoke$arity$0();
five_game.firebase.auth_changed = firebase_cljs.auth.auth_changed;
five_game.firebase.get_ref = (function five_game$firebase$get_ref(korks){
return firebase_cljs.database.get_in(five_game.firebase.db,korks);
});
five_game.firebase.games = firebase_cljs.database.get_in(five_game.firebase.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$games], null));
five_game.firebase.fb__GT_clj = (function five_game$firebase$fb__GT_clj(fb){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(firebase_cljs.database.datasnapshot.val(fb),cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
});
five_game.firebase.login_BANG_ = (function five_game$firebase$login_BANG_(email,password){
return firebase_cljs.auth.login_userpass(five_game.firebase.auth,email,password);
});
five_game.firebase.logout_BANG_ = (function five_game$firebase$logout_BANG_(){
return firebase_cljs.auth.logout(five_game.firebase.auth);
});
five_game.firebase.signup_BANG_ = (function five_game$firebase$signup_BANG_(email,password){
return firebase_cljs.auth.create_user(five_game.firebase.auth,email,password);
});
five_game.firebase.get_current_user = (function five_game$firebase$get_current_user(){
return firebase_cljs.auth.current_user(five_game.firebase.auth);
});
five_game.firebase.get_current_user_email = (function five_game$firebase$get_current_user_email(){
return five_game.firebase.get_current_user().email;
});
five_game.firebase.listen_val = (function five_game$firebase$listen_val(korks,f){
return firebase_cljs.database.listen.cljs$core$IFn$_invoke$arity$4(five_game.firebase.get_ref(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$games], null)),korks,"value",f);
});
five_game.firebase.create_game_BANG_ = (function five_game$firebase$create_game_BANG_(name){
return firebase_cljs.database.conj_BANG_.cljs$core$IFn$_invoke$arity$2(five_game.firebase.get_ref(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$games], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$players,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$player1,five_game.firebase.get_current_user_email()], null),cljs.core.cst$kw$moves,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$current_DASH_turn,"black",cljs.core.cst$kw$previous_DASH_game_DASH_turn,"red"], null)).key;
});
five_game.firebase.update_entity_BANG_ = (function five_game$firebase$update_entity_BANG_(entity_ref,entity){
return firebase_cljs.database.reset_BANG_.cljs$core$IFn$_invoke$arity$2(five_game.firebase.get_ref(entity_ref),entity);
});
five_game.firebase.listen_to = (function five_game$firebase$listen_to(game_id,what,cb){
return five_game.firebase.listen_val(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [game_id,what], null),(function (p1__13466_SHARP_){
var G__13468 = five_game.firebase.fb__GT_clj(p1__13466_SHARP_);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__13468) : cb.call(null,G__13468));
}));
});
