// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__13100__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13100 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13101__i = 0, G__13101__a = new Array(arguments.length -  0);
while (G__13101__i < G__13101__a.length) {G__13101__a[G__13101__i] = arguments[G__13101__i + 0]; ++G__13101__i;}
  args = new cljs.core.IndexedSeq(G__13101__a,0);
} 
return G__13100__delegate.call(this,args);};
G__13100.cljs$lang$maxFixedArity = 0;
G__13100.cljs$lang$applyTo = (function (arglist__13102){
var args = cljs.core.seq(arglist__13102);
return G__13100__delegate(args);
});
G__13100.cljs$core$IFn$_invoke$arity$variadic = G__13100__delegate;
return G__13100;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__13103__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13103 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13104__i = 0, G__13104__a = new Array(arguments.length -  0);
while (G__13104__i < G__13104__a.length) {G__13104__a[G__13104__i] = arguments[G__13104__i + 0]; ++G__13104__i;}
  args = new cljs.core.IndexedSeq(G__13104__a,0);
} 
return G__13103__delegate.call(this,args);};
G__13103.cljs$lang$maxFixedArity = 0;
G__13103.cljs$lang$applyTo = (function (arglist__13105){
var args = cljs.core.seq(arglist__13105);
return G__13103__delegate(args);
});
G__13103.cljs$core$IFn$_invoke$arity$variadic = G__13103__delegate;
return G__13103;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.debug.warnings) : cljs.core.deref.call(null,reagent.debug.warnings));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

reagent.debug.tracking = false;

return warns;
});
