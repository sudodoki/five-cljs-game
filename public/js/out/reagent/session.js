// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor(reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__7931__auto__ = [];
var len__7924__auto___18248 = arguments.length;
var i__7925__auto___18249 = (0);
while(true){
if((i__7925__auto___18249 < len__7924__auto___18248)){
args__7931__auto__.push((arguments[i__7925__auto___18249]));

var G__18250 = (i__7925__auto___18249 + (1));
i__7925__auto___18249 = G__18250;
continue;
} else {
}
break;
}

var argseq__7932__auto__ = ((((1) < args__7931__auto__.length))?(new cljs.core.IndexedSeq(args__7931__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7932__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__18244){
var vec__18245 = p__18244;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18245,(0),null);
var temp_a = reagent.session.cursor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(temp_a) : cljs.core.deref.call(null,temp_a)) == null))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(temp_a) : cljs.core.deref.call(null,temp_a));
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq18242){
var G__18243 = cljs.core.first(seq18242);
var seq18242__$1 = cljs.core.next(seq18242);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__18243,seq18242__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__7931__auto__ = [];
var len__7924__auto___18259 = arguments.length;
var i__7925__auto___18260 = (0);
while(true){
if((i__7925__auto___18260 < len__7924__auto___18259)){
args__7931__auto__.push((arguments[i__7925__auto___18260]));

var G__18261 = (i__7925__auto___18260 + (1));
i__7925__auto___18260 = G__18261;
continue;
} else {
}
break;
}

var argseq__7932__auto__ = ((((1) < args__7931__auto__.length))?(new cljs.core.IndexedSeq(args__7931__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7932__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__18253){
var vec__18254 = p__18253;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18254,(0),null);
var or__6811__auto__ = (function (){var G__18258 = reagent.session.cursor(ks);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18258) : cljs.core.deref.call(null,G__18258));
})();
if(cljs.core.truth_(or__6811__auto__)){
return or__6811__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq18251){
var G__18252 = cljs.core.first(seq18251);
var seq18251__$1 = cljs.core.next(seq18251);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__18252,seq18251__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__7931__auto__ = [];
var len__7924__auto___18264 = arguments.length;
var i__7925__auto___18265 = (0);
while(true){
if((i__7925__auto___18265 < len__7924__auto___18264)){
args__7931__auto__.push((arguments[i__7925__auto___18265]));

var G__18266 = (i__7925__auto___18265 + (1));
i__7925__auto___18265 = G__18266;
continue;
} else {
}
break;
}

var argseq__7932__auto__ = ((((1) < args__7931__auto__.length))?(new cljs.core.IndexedSeq(args__7931__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7932__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq18262){
var G__18263 = cljs.core.first(seq18262);
var seq18262__$1 = cljs.core.next(seq18262);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18263,seq18262__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
var G__18269 = reagent.session.state;
var G__18270 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18269,G__18270) : cljs.core.reset_BANG_.call(null,G__18269,G__18270));
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,m) : cljs.core.reset_BANG_.call(null,reagent.session.state,m));
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__7931__auto__ = [];
var len__7924__auto___18277 = arguments.length;
var i__7925__auto___18278 = (0);
while(true){
if((i__7925__auto___18278 < len__7924__auto___18277)){
args__7931__auto__.push((arguments[i__7925__auto___18278]));

var G__18279 = (i__7925__auto___18278 + (1));
i__7925__auto___18278 = G__18279;
continue;
} else {
}
break;
}

var argseq__7932__auto__ = ((((1) < args__7931__auto__.length))?(new cljs.core.IndexedSeq(args__7931__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7932__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__18273){
var vec__18274 = p__18273;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18274,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.array_seq([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq18271){
var G__18272 = cljs.core.first(seq18271);
var seq18271__$1 = cljs.core.next(seq18271);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18272,seq18271__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__7931__auto__ = [];
var len__7924__auto___18286 = arguments.length;
var i__7925__auto___18287 = (0);
while(true){
if((i__7925__auto___18287 < len__7924__auto___18286)){
args__7931__auto__.push((arguments[i__7925__auto___18287]));

var G__18288 = (i__7925__auto___18287 + (1));
i__7925__auto___18287 = G__18288;
continue;
} else {
}
break;
}

var argseq__7932__auto__ = ((((1) < args__7931__auto__.length))?(new cljs.core.IndexedSeq(args__7931__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7932__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__18282){
var vec__18283 = p__18282;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18283,(0),null);
var cur = reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(ks,cljs.core.array_seq([default$], 0));
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq18280){
var G__18281 = cljs.core.first(seq18280);
var seq18280__$1 = cljs.core.next(seq18280);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18281,seq18280__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__7931__auto__ = [];
var len__7924__auto___18293 = arguments.length;
var i__7925__auto___18294 = (0);
while(true){
if((i__7925__auto___18294 < len__7924__auto___18293)){
args__7931__auto__.push((arguments[i__7925__auto___18294]));

var G__18295 = (i__7925__auto___18294 + (1));
i__7925__auto___18294 = G__18295;
continue;
} else {
}
break;
}

var argseq__7932__auto__ = ((((2) < args__7931__auto__.length))?(new cljs.core.IndexedSeq(args__7931__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7932__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__18289_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__18289_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq18290){
var G__18291 = cljs.core.first(seq18290);
var seq18290__$1 = cljs.core.next(seq18290);
var G__18292 = cljs.core.first(seq18290__$1);
var seq18290__$2 = cljs.core.next(seq18290__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18291,G__18292,seq18290__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__7931__auto__ = [];
var len__7924__auto___18300 = arguments.length;
var i__7925__auto___18301 = (0);
while(true){
if((i__7925__auto___18301 < len__7924__auto___18300)){
args__7931__auto__.push((arguments[i__7925__auto___18301]));

var G__18302 = (i__7925__auto___18301 + (1));
i__7925__auto___18301 = G__18302;
continue;
} else {
}
break;
}

var argseq__7932__auto__ = ((((2) < args__7931__auto__.length))?(new cljs.core.IndexedSeq(args__7931__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7932__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__18296_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__18296_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq18297){
var G__18298 = cljs.core.first(seq18297);
var seq18297__$1 = cljs.core.next(seq18297);
var G__18299 = cljs.core.first(seq18297__$1);
var seq18297__$2 = cljs.core.next(seq18297__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18298,G__18299,seq18297__$2);
});

