// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('five_game.prod');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('five_game.core');
cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18622__delegate = function (_){
return null;
};
var G__18622 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__18623__i = 0, G__18623__a = new Array(arguments.length -  0);
while (G__18623__i < G__18623__a.length) {G__18623__a[G__18623__i] = arguments[G__18623__i + 0]; ++G__18623__i;}
  _ = new cljs.core.IndexedSeq(G__18623__a,0);
} 
return G__18622__delegate.call(this,_);};
G__18622.cljs$lang$maxFixedArity = 0;
G__18622.cljs$lang$applyTo = (function (arglist__18624){
var _ = cljs.core.seq(arglist__18624);
return G__18622__delegate(_);
});
G__18622.cljs$core$IFn$_invoke$arity$variadic = G__18622__delegate;
return G__18622;
})()
;
five_game.core.init_BANG_("https://sudodoki.github.io/five-cljs-game");
