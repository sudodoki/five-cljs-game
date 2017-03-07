// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('five_game.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('accountant.core');
goog.require('five_game.game_board');
goog.require('five_game.home');
goog.require('five_game.firebase');
goog.require('five_game.login');
five_game.core.with_layout = (function five_game$core$with_layout(component){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header$header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$logo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/five-cljs-game/"], null),"Five Game"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$buttons,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/five-cljs-game/about"], null),"About"], null),(cljs.core.truth_(five_game.firebase.get_current_user())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$logout_DASH_btn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return five_game.firebase.logout_BANG_();
})], null),"Logout"], null):null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null)], null)], null);
});
five_game.core.home_page = (function five_game$core$home_page(){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(five_game.core.with_layout,five_game.home.home).call(null);
});
five_game.core.game_page = (function five_game$core$game_page(id){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(five_game.core.with_layout,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(five_game.game_board.board,id));
});
five_game.core.login_page = (function five_game$core$login_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [five_game.login.login], null)], null);
});
five_game.core.about_page = (function five_game$core$about_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"About five-game"], null),(cljs.core.truth_(five_game.firebase.get_current_user())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/five-cljs-game/"], null),"go to the home page"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/five-cljs-game/login"], null),"go to the login page"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The goal is to get five coins of same color in a row while preventing your opponent from getting five in a row of his own. Horizontal, vertical and diagonal rows are all allowed."], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"This thing was written by ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://github.com/busatov",cljs.core.cst$kw$target,"_blank"], null),"@busatov"], null)," and ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://github.com/sudodoki",cljs.core.cst$kw$target,"_blank"], null),"@sudodoki"], null)], null)], null)], null);
});
five_game.core.current_page = (function five_game$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get(cljs.core.cst$kw$current_DASH_page)], null)], null);
});
var action__18314__auto___18594 = (function (params__18315__auto__){
if(cljs.core.map_QMARK_(params__18315__auto__)){
var map__18589 = params__18315__auto__;
var map__18589__$1 = ((((!((map__18589 == null)))?((((map__18589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18589.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18589):map__18589);
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return five_game.core.home_page;},cljs.core.cst$sym$five_DASH_game$core_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$five_DASH_game$core,cljs.core.cst$sym$home_DASH_page,"/Users/sudodoki/Projects/clj_cljs/five-game/src/cljs/five_game/core.cljs",16,1,26,26,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(five_game.core.home_page)?five_game.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__18315__auto__)){
var vec__18591 = params__18315__auto__;
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return five_game.core.home_page;},cljs.core.cst$sym$five_DASH_game$core_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$five_DASH_game$core,cljs.core.cst$sym$home_DASH_page,"/Users/sudodoki/Projects/clj_cljs/five-game/src/cljs/five_game/core.cljs",16,1,26,26,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(five_game.core.home_page)?five_game.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/five-cljs-game/",action__18314__auto___18594);

var action__18314__auto___18600 = (function (params__18315__auto__){
if(cljs.core.map_QMARK_(params__18315__auto__)){
var map__18595 = params__18315__auto__;
var map__18595__$1 = ((((!((map__18595 == null)))?((((map__18595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18595):map__18595);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18595__$1,cljs.core.cst$kw$id);
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return five_game.core.game_page;},cljs.core.cst$sym$five_DASH_game$core_SLASH_game_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$five_DASH_game$core,cljs.core.cst$sym$game_DASH_page,"/Users/sudodoki/Projects/clj_cljs/five-game/src/cljs/five_game/core.cljs",16,1,29,29,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$id], null)),null,(cljs.core.truth_(five_game.core.game_page)?five_game.core.game_page.cljs$lang$test:null)])).call(null,id));
} else {
if(cljs.core.vector_QMARK_(params__18315__auto__)){
var vec__18597 = params__18315__auto__;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18597,(0),null);
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return five_game.core.game_page;},cljs.core.cst$sym$five_DASH_game$core_SLASH_game_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$five_DASH_game$core,cljs.core.cst$sym$game_DASH_page,"/Users/sudodoki/Projects/clj_cljs/five-game/src/cljs/five_game/core.cljs",16,1,29,29,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$id], null)),null,(cljs.core.truth_(five_game.core.game_page)?five_game.core.game_page.cljs$lang$test:null)])).call(null,id));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/five-cljs-game/games/:id",action__18314__auto___18600);

var action__18314__auto___18606 = (function (params__18315__auto__){
if(cljs.core.map_QMARK_(params__18315__auto__)){
var map__18601 = params__18315__auto__;
var map__18601__$1 = ((((!((map__18601 == null)))?((((map__18601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18601):map__18601);
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return five_game.core.login_page;},cljs.core.cst$sym$five_DASH_game$core_SLASH_login_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$five_DASH_game$core,cljs.core.cst$sym$login_DASH_page,"/Users/sudodoki/Projects/clj_cljs/five-game/src/cljs/five_game/core.cljs",17,1,32,32,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(five_game.core.login_page)?five_game.core.login_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__18315__auto__)){
var vec__18603 = params__18315__auto__;
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return five_game.core.login_page;},cljs.core.cst$sym$five_DASH_game$core_SLASH_login_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$five_DASH_game$core,cljs.core.cst$sym$login_DASH_page,"/Users/sudodoki/Projects/clj_cljs/five-game/src/cljs/five_game/core.cljs",17,1,32,32,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(five_game.core.login_page)?five_game.core.login_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/five-cljs-game/login",action__18314__auto___18606);

var action__18314__auto___18612 = (function (params__18315__auto__){
if(cljs.core.map_QMARK_(params__18315__auto__)){
var map__18607 = params__18315__auto__;
var map__18607__$1 = ((((!((map__18607 == null)))?((((map__18607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18607.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18607):map__18607);
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return five_game.core.about_page;},cljs.core.cst$sym$five_DASH_game$core_SLASH_about_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$five_DASH_game$core,cljs.core.cst$sym$about_DASH_page,"/Users/sudodoki/Projects/clj_cljs/five-game/src/cljs/five_game/core.cljs",17,1,36,36,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(five_game.core.about_page)?five_game.core.about_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__18315__auto__)){
var vec__18609 = params__18315__auto__;
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return five_game.core.about_page;},cljs.core.cst$sym$five_DASH_game$core_SLASH_about_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$five_DASH_game$core,cljs.core.cst$sym$about_DASH_page,"/Users/sudodoki/Projects/clj_cljs/five-game/src/cljs/five_game/core.cljs",17,1,36,36,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(five_game.core.about_page)?five_game.core.about_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/five-cljs-game/about",action__18314__auto___18612);

five_game.core.mount_root = (function five_game$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [five_game.core.current_page], null),document.getElementById("app"));
});
five_game.core.add_auth_change_handler = (function five_game$core$add_auth_change_handler(){
var G__18616 = five_game.firebase.auth;
var G__18617 = ((function (G__18616){
return (function (p1__18613_SHARP_){
if(cljs.core.not(p1__18613_SHARP_)){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/five-cljs-game/login");
} else {
return null;
}
});})(G__18616))
;
return (five_game.firebase.auth_changed.cljs$core$IFn$_invoke$arity$2 ? five_game.firebase.auth_changed.cljs$core$IFn$_invoke$arity$2(G__18616,G__18617) : five_game.firebase.auth_changed.call(null,G__18616,G__18617));
});
five_game.core.init_BANG_ = (function five_game$core$init_BANG_(){
accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nav_DASH_handler,(function (path){
return secretary.core.dispatch_BANG_(path);
}),cljs.core.cst$kw$path_DASH_exists_QMARK_,(function (path){
return secretary.core.locate_route(path);
})], null));

var temp__4655__auto___18618 = (function (){var match = location.search;
var match__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(match,(1));
var match__$2 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(match__$1,/=/);
return cljs.core.last(match__$2);
})();
if(cljs.core.truth_(temp__4655__auto___18618)){
var path_18619 = temp__4655__auto___18618;
accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1(path_18619);
} else {
}

accountant.core.dispatch_current_BANG_();

five_game.core.add_auth_change_handler();

return five_game.core.mount_root();
});
