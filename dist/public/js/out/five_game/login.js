// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('five_game.login');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('five_game.firebase');
goog.require('accountant.core');
goog.require('reagent.core');
five_game.login.on_login = (function five_game$login$on_login(email,password){
return five_game.firebase.login_BANG_(email,password).then((function (){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/");
}),(function (p1__18508_SHARP_){
return alert(p1__18508_SHARP_);
}));
});
five_game.login.on_signup = (function five_game$login$on_signup(email,password){
return five_game.firebase.signup_BANG_(email,password).then((function (){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/");
}),(function (p1__18509_SHARP_){
return alert(p1__18509_SHARP_);
}));
});
five_game.login.sign_in_form = (function five_game$login$sign_in_form(){
var email = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var password = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Login"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,((function (email,password){
return (function (e){
e.preventDefault();

five_game.login.on_login((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(email) : cljs.core.deref.call(null,email)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(password) : cljs.core.deref.call(null,password)));

return e.target.reset();
});})(email,password))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$on_DASH_change,((function (email,password){
return (function (p1__18510_SHARP_){
var G__18516 = email;
var G__18517 = p1__18510_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18516,G__18517) : cljs.core.reset_BANG_.call(null,G__18516,G__18517));
});})(email,password))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$on_DASH_change,((function (email,password){
return (function (p1__18511_SHARP_){
var G__18518 = password;
var G__18519 = p1__18511_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18518,G__18519) : cljs.core.reset_BANG_.call(null,G__18518,G__18519));
});})(email,password))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"submit"], null),"Login"], null)], null)], null);
});
five_game.login.sign_up_form = (function five_game$login$sign_up_form(){
var email = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var password = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Signup"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,((function (email,password){
return (function (e){
e.preventDefault();

five_game.login.on_signup((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(email) : cljs.core.deref.call(null,email)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(password) : cljs.core.deref.call(null,password)));

return e.target.reset();
});})(email,password))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$on_DASH_change,((function (email,password){
return (function (p1__18520_SHARP_){
var G__18526 = email;
var G__18527 = p1__18520_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18526,G__18527) : cljs.core.reset_BANG_.call(null,G__18526,G__18527));
});})(email,password))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$on_DASH_change,((function (email,password){
return (function (p1__18521_SHARP_){
var G__18528 = password;
var G__18529 = p1__18521_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18528,G__18529) : cljs.core.reset_BANG_.call(null,G__18528,G__18529));
});})(email,password))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"submit"], null),"Login"], null)], null)], null);
});
five_game.login.login = (function five_game$login$login(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,five_game.login.sign_in_form(),five_game.login.sign_up_form()], null);
});
