// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('five_game.home');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('five_game.firebase');
goog.require('accountant.core');
goog.require('reagent.core');
five_game.home.go_to_game = (function five_game$home$go_to_game(game_key){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("/games/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_key)].join(''));
});
five_game.home.create_new_game = (function five_game$home$create_new_game(){
var new_game_id = five_game.firebase.create_game_BANG_("new room");
return five_game.home.go_to_game(new_game_id);
});
five_game.home.on_game_join = (function five_game$home$on_game_join(game_id){
return five_game.home.go_to_game(game_id);
});
five_game.home.new_game_form = (function five_game$home$new_game_form(){
var game_key = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,((function (game_key){
return (function (e){
e.preventDefault();

five_game.home.on_game_join((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(game_key) : cljs.core.deref.call(null,game_key)));

return e.target.reset();
});})(game_key))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$on_DASH_change,((function (game_key){
return (function (p1__18235_SHARP_){
var G__18238 = game_key;
var G__18239 = p1__18235_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18238,G__18239) : cljs.core.reset_BANG_.call(null,G__18238,G__18239));
});})(game_key))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"submit"], null),"Join"], null)], null);
});
five_game.home.home = (function five_game$home$home(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"-text-center"], null),"Five Game"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"-text-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"button",cljs.core.cst$kw$on_DASH_click,five_game.home.create_new_game], null),"Create New Game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"or"], null),five_game.home.new_game_form()], null)], null);
});
