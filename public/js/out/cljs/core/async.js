// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async15392 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15392 = (function (f,meta15393){
this.f = f;
this.meta15393 = meta15393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15394,meta15393__$1){
var self__ = this;
var _15394__$1 = this;
return (new cljs.core.async.t_cljs$core$async15392(self__.f,meta15393__$1));
});

cljs.core.async.t_cljs$core$async15392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15394){
var self__ = this;
var _15394__$1 = this;
return self__.meta15393;
});

cljs.core.async.t_cljs$core$async15392.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15392.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15392.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15392.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$meta15393], null);
});

cljs.core.async.t_cljs$core$async15392.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15392";

cljs.core.async.t_cljs$core$async15392.cljs$lang$ctorPrWriter = (function (this__7422__auto__,writer__7423__auto__,opt__7424__auto__){
return cljs.core._write(writer__7423__auto__,"cljs.core.async/t_cljs$core$async15392");
});

cljs.core.async.__GT_t_cljs$core$async15392 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async15392(f__$1,meta15393){
return (new cljs.core.async.t_cljs$core$async15392(f__$1,meta15393));
});

}

return (new cljs.core.async.t_cljs$core$async15392(f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args15397 = [];
var len__7924__auto___15400 = arguments.length;
var i__7925__auto___15401 = (0);
while(true){
if((i__7925__auto___15401 < len__7924__auto___15400)){
args15397.push((arguments[i__7925__auto___15401]));

var G__15402 = (i__7925__auto___15401 + (1));
i__7925__auto___15401 = G__15402;
continue;
} else {
}
break;
}

var G__15399 = args15397.length;
switch (G__15399) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15397.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args15404 = [];
var len__7924__auto___15407 = arguments.length;
var i__7925__auto___15408 = (0);
while(true){
if((i__7925__auto___15408 < len__7924__auto___15407)){
args15404.push((arguments[i__7925__auto___15408]));

var G__15409 = (i__7925__auto___15408 + (1));
i__7925__auto___15408 = G__15409;
continue;
} else {
}
break;
}

var G__15406 = args15404.length;
switch (G__15406) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15404.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_15411 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15411) : fn1.call(null,val_15411));
} else {
cljs.core.async.impl.dispatch.run(((function (val_15411,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15411) : fn1.call(null,val_15411));
});})(val_15411,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args15412 = [];
var len__7924__auto___15415 = arguments.length;
var i__7925__auto___15416 = (0);
while(true){
if((i__7925__auto___15416 < len__7924__auto___15415)){
args15412.push((arguments[i__7925__auto___15416]));

var G__15417 = (i__7925__auto___15416 + (1));
i__7925__auto___15416 = G__15417;
continue;
} else {
}
break;
}

var G__15414 = args15412.length;
switch (G__15414) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15412.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7734__auto___15419 = n;
var x_15420 = (0);
while(true){
if((x_15420 < n__7734__auto___15419)){
(a[x_15420] = (0));

var G__15421 = (x_15420 + (1));
x_15420 = G__15421;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__15422 = (i + (1));
i = G__15422;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async15426 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15426 = (function (flag,meta15427){
this.flag = flag;
this.meta15427 = meta15427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15428,meta15427__$1){
var self__ = this;
var _15428__$1 = this;
return (new cljs.core.async.t_cljs$core$async15426(self__.flag,meta15427__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15426.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15428){
var self__ = this;
var _15428__$1 = this;
return self__.meta15427;
});})(flag))
;

cljs.core.async.t_cljs$core$async15426.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15426.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async15426.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15426.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15427], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15426.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15426.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15426";

cljs.core.async.t_cljs$core$async15426.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7422__auto__,writer__7423__auto__,opt__7424__auto__){
return cljs.core._write(writer__7423__auto__,"cljs.core.async/t_cljs$core$async15426");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async15426 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15426(flag__$1,meta15427){
return (new cljs.core.async.t_cljs$core$async15426(flag__$1,meta15427));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15426(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15432 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15432 = (function (flag,cb,meta15433){
this.flag = flag;
this.cb = cb;
this.meta15433 = meta15433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15434,meta15433__$1){
var self__ = this;
var _15434__$1 = this;
return (new cljs.core.async.t_cljs$core$async15432(self__.flag,self__.cb,meta15433__$1));
});

cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15434){
var self__ = this;
var _15434__$1 = this;
return self__.meta15433;
});

cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15433], null);
});

cljs.core.async.t_cljs$core$async15432.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15432";

cljs.core.async.t_cljs$core$async15432.cljs$lang$ctorPrWriter = (function (this__7422__auto__,writer__7423__auto__,opt__7424__auto__){
return cljs.core._write(writer__7423__auto__,"cljs.core.async/t_cljs$core$async15432");
});

cljs.core.async.__GT_t_cljs$core$async15432 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15432(flag__$1,cb__$1,meta15433){
return (new cljs.core.async.t_cljs$core$async15432(flag__$1,cb__$1,meta15433));
});

}

return (new cljs.core.async.t_cljs$core$async15432(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15435_SHARP_){
var G__15439 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15435_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15439) : fret.call(null,G__15439));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15436_SHARP_){
var G__15440 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15436_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15440) : fret.call(null,G__15440));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6811__auto__ = wport;
if(cljs.core.truth_(or__6811__auto__)){
return or__6811__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15441 = (i + (1));
i = G__15441;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6811__auto__ = ret;
if(cljs.core.truth_(or__6811__auto__)){
return or__6811__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6799__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6799__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6799__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7931__auto__ = [];
var len__7924__auto___15447 = arguments.length;
var i__7925__auto___15448 = (0);
while(true){
if((i__7925__auto___15448 < len__7924__auto___15447)){
args__7931__auto__.push((arguments[i__7925__auto___15448]));

var G__15449 = (i__7925__auto___15448 + (1));
i__7925__auto___15448 = G__15449;
continue;
} else {
}
break;
}

var argseq__7932__auto__ = ((((1) < args__7931__auto__.length))?(new cljs.core.IndexedSeq(args__7931__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7932__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15444){
var map__15445 = p__15444;
var map__15445__$1 = ((((!((map__15445 == null)))?((((map__15445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15445.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15445):map__15445);
var opts = map__15445__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15442){
var G__15443 = cljs.core.first(seq15442);
var seq15442__$1 = cljs.core.next(seq15442);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15443,seq15442__$1);
});

/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args15450 = [];
var len__7924__auto___15500 = arguments.length;
var i__7925__auto___15501 = (0);
while(true){
if((i__7925__auto___15501 < len__7924__auto___15500)){
args15450.push((arguments[i__7925__auto___15501]));

var G__15502 = (i__7925__auto___15501 + (1));
i__7925__auto___15501 = G__15502;
continue;
} else {
}
break;
}

var G__15452 = args15450.length;
switch (G__15452) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15450.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15344__auto___15504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15344__auto___15504){
return (function (){
var f__15345__auto__ = (function (){var switch__15220__auto__ = ((function (c__15344__auto___15504){
return (function (state_15476){
var state_val_15477 = (state_15476[(1)]);
if((state_val_15477 === (7))){
var inst_15472 = (state_15476[(2)]);
var state_15476__$1 = state_15476;
var statearr_15478_15505 = state_15476__$1;
(statearr_15478_15505[(2)] = inst_15472);

(statearr_15478_15505[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15477 === (1))){
var state_15476__$1 = state_15476;
var statearr_15479_15506 = state_15476__$1;
(statearr_15479_15506[(2)] = null);

(statearr_15479_15506[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15477 === (4))){
var inst_15455 = (state_15476[(7)]);
var inst_15455__$1 = (state_15476[(2)]);
var inst_15456 = (inst_15455__$1 == null);
var state_15476__$1 = (function (){var statearr_15480 = state_15476;
(statearr_15480[(7)] = inst_15455__$1);

return statearr_15480;
})();
if(cljs.core.truth_(inst_15456)){
var statearr_15481_15507 = state_15476__$1;
(statearr_15481_15507[(1)] = (5));

} else {
var statearr_15482_15508 = state_15476__$1;
(statearr_15482_15508[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15477 === (13))){
var state_15476__$1 = state_15476;
var statearr_15483_15509 = state_15476__$1;
(statearr_15483_15509[(2)] = null);

(statearr_15483_15509[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15477 === (6))){
var inst_15455 = (state_15476[(7)]);
var state_15476__$1 = state_15476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15476__$1,(11),to,inst_15455);
} else {
if((state_val_15477 === (3))){
var inst_15474 = (state_15476[(2)]);
var state_15476__$1 = state_15476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15476__$1,inst_15474);
} else {
if((state_val_15477 === (12))){
var state_15476__$1 = state_15476;
var statearr_15484_15510 = state_15476__$1;
(statearr_15484_15510[(2)] = null);

(statearr_15484_15510[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15477 === (2))){
var state_15476__$1 = state_15476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15476__$1,(4),from);
} else {
if((state_val_15477 === (11))){
var inst_15465 = (state_15476[(2)]);
var state_15476__$1 = state_15476;
if(cljs.core.truth_(inst_15465)){
var statearr_15485_15511 = state_15476__$1;
(statearr_15485_15511[(1)] = (12));

} else {
var statearr_15486_15512 = state_15476__$1;
(statearr_15486_15512[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15477 === (9))){
var state_15476__$1 = state_15476;
var statearr_15487_15513 = state_15476__$1;
(statearr_15487_15513[(2)] = null);

(statearr_15487_15513[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15477 === (5))){
var state_15476__$1 = state_15476;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15488_15514 = state_15476__$1;
(statearr_15488_15514[(1)] = (8));

} else {
var statearr_15489_15515 = state_15476__$1;
(statearr_15489_15515[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15477 === (14))){
var inst_15470 = (state_15476[(2)]);
var state_15476__$1 = state_15476;
var statearr_15490_15516 = state_15476__$1;
(statearr_15490_15516[(2)] = inst_15470);

(statearr_15490_15516[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15477 === (10))){
var inst_15462 = (state_15476[(2)]);
var state_15476__$1 = state_15476;
var statearr_15491_15517 = state_15476__$1;
(statearr_15491_15517[(2)] = inst_15462);

(statearr_15491_15517[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15477 === (8))){
var inst_15459 = cljs.core.async.close_BANG_(to);
var state_15476__$1 = state_15476;
var statearr_15492_15518 = state_15476__$1;
(statearr_15492_15518[(2)] = inst_15459);

(statearr_15492_15518[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15344__auto___15504))
;
return ((function (switch__15220__auto__,c__15344__auto___15504){
return (function() {
var cljs$core$async$state_machine__15221__auto__ = null;
var cljs$core$async$state_machine__15221__auto____0 = (function (){
var statearr_15496 = [null,null,null,null,null,null,null,null];
(statearr_15496[(0)] = cljs$core$async$state_machine__15221__auto__);

(statearr_15496[(1)] = (1));

return statearr_15496;
});
var cljs$core$async$state_machine__15221__auto____1 = (function (state_15476){
while(true){
var ret_value__15222__auto__ = (function (){try{while(true){
var result__15223__auto__ = switch__15220__auto__(state_15476);
if(cljs.core.keyword_identical_QMARK_(result__15223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15223__auto__;
}
break;
}
}catch (e15497){if((e15497 instanceof Object)){
var ex__15224__auto__ = e15497;
var statearr_15498_15519 = state_15476;
(statearr_15498_15519[(5)] = ex__15224__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15476);

return cljs.core.cst$kw$recur;
} else {
throw e15497;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15222__auto__,cljs.core.cst$kw$recur)){
var G__15520 = state_15476;
state_15476 = G__15520;
continue;
} else {
return ret_value__15222__auto__;
}
break;
}
});
cljs$core$async$state_machine__15221__auto__ = function(state_15476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15221__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15221__auto____1.call(this,state_15476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15221__auto____0;
cljs$core$async$state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15221__auto____1;
return cljs$core$async$state_machine__15221__auto__;
})()
;})(switch__15220__auto__,c__15344__auto___15504))
})();
var state__15346__auto__ = (function (){var statearr_15499 = (f__15345__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15345__auto__.cljs$core$IFn$_invoke$arity$0() : f__15345__auto__.call(null));
(statearr_15499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15344__auto___15504);

return statearr_15499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15346__auto__);
});})(c__15344__auto___15504))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__15708){
var vec__15709 = p__15708;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15709,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15709,(1),null);
var job = vec__15709;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15344__auto___15895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15344__auto___15895,res,vec__15709,v,p,job,jobs,results){
return (function (){
var f__15345__auto__ = (function (){var switch__15220__auto__ = ((function (c__15344__auto___15895,res,vec__15709,v,p,job,jobs,results){
return (function (state_15716){
var state_val_15717 = (state_15716[(1)]);
if((state_val_15717 === (1))){
var state_15716__$1 = state_15716;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15716__$1,(2),res,v);
} else {
if((state_val_15717 === (2))){
var inst_15713 = (state_15716[(2)]);
var inst_15714 = cljs.core.async.close_BANG_(res);
var state_15716__$1 = (function (){var statearr_15718 = state_15716;
(statearr_15718[(7)] = inst_15713);

return statearr_15718;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15716__$1,inst_15714);
} else {
return null;
}
}
});})(c__15344__auto___15895,res,vec__15709,v,p,job,jobs,results))
;
return ((function (switch__15220__auto__,c__15344__auto___15895,res,vec__15709,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____0 = (function (){
var statearr_15722 = [null,null,null,null,null,null,null,null];
(statearr_15722[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__);

(statearr_15722[(1)] = (1));

return statearr_15722;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____1 = (function (state_15716){
while(true){
var ret_value__15222__auto__ = (function (){try{while(true){
var result__15223__auto__ = switch__15220__auto__(state_15716);
if(cljs.core.keyword_identical_QMARK_(result__15223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15223__auto__;
}
break;
}
}catch (e15723){if((e15723 instanceof Object)){
var ex__15224__auto__ = e15723;
var statearr_15724_15896 = state_15716;
(statearr_15724_15896[(5)] = ex__15224__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15716);

return cljs.core.cst$kw$recur;
} else {
throw e15723;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15222__auto__,cljs.core.cst$kw$recur)){
var G__15897 = state_15716;
state_15716 = G__15897;
continue;
} else {
return ret_value__15222__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__ = function(state_15716){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____1.call(this,state_15716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__;
})()
;})(switch__15220__auto__,c__15344__auto___15895,res,vec__15709,v,p,job,jobs,results))
})();
var state__15346__auto__ = (function (){var statearr_15725 = (f__15345__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15345__auto__.cljs$core$IFn$_invoke$arity$0() : f__15345__auto__.call(null));
(statearr_15725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15344__auto___15895);

return statearr_15725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15346__auto__);
});})(c__15344__auto___15895,res,vec__15709,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15726){
var vec__15727 = p__15726;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15727,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15727,(1),null);
var job = vec__15727;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__7734__auto___15898 = n;
var __15899 = (0);
while(true){
if((__15899 < n__7734__auto___15898)){
var G__15730_15900 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15730_15900) {
case "compute":
var c__15344__auto___15902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15899,c__15344__auto___15902,G__15730_15900,n__7734__auto___15898,jobs,results,process,async){
return (function (){
var f__15345__auto__ = (function (){var switch__15220__auto__ = ((function (__15899,c__15344__auto___15902,G__15730_15900,n__7734__auto___15898,jobs,results,process,async){
return (function (state_15743){
var state_val_15744 = (state_15743[(1)]);
if((state_val_15744 === (1))){
var state_15743__$1 = state_15743;
var statearr_15745_15903 = state_15743__$1;
(statearr_15745_15903[(2)] = null);

(statearr_15745_15903[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15744 === (2))){
var state_15743__$1 = state_15743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15743__$1,(4),jobs);
} else {
if((state_val_15744 === (3))){
var inst_15741 = (state_15743[(2)]);
var state_15743__$1 = state_15743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15743__$1,inst_15741);
} else {
if((state_val_15744 === (4))){
var inst_15733 = (state_15743[(2)]);
var inst_15734 = process(inst_15733);
var state_15743__$1 = state_15743;
if(cljs.core.truth_(inst_15734)){
var statearr_15746_15904 = state_15743__$1;
(statearr_15746_15904[(1)] = (5));

} else {
var statearr_15747_15905 = state_15743__$1;
(statearr_15747_15905[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15744 === (5))){
var state_15743__$1 = state_15743;
var statearr_15748_15906 = state_15743__$1;
(statearr_15748_15906[(2)] = null);

(statearr_15748_15906[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15744 === (6))){
var state_15743__$1 = state_15743;
var statearr_15749_15907 = state_15743__$1;
(statearr_15749_15907[(2)] = null);

(statearr_15749_15907[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15744 === (7))){
var inst_15739 = (state_15743[(2)]);
var state_15743__$1 = state_15743;
var statearr_15750_15908 = state_15743__$1;
(statearr_15750_15908[(2)] = inst_15739);

(statearr_15750_15908[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15899,c__15344__auto___15902,G__15730_15900,n__7734__auto___15898,jobs,results,process,async))
;
return ((function (__15899,switch__15220__auto__,c__15344__auto___15902,G__15730_15900,n__7734__auto___15898,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____0 = (function (){
var statearr_15754 = [null,null,null,null,null,null,null];
(statearr_15754[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__);

(statearr_15754[(1)] = (1));

return statearr_15754;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____1 = (function (state_15743){
while(true){
var ret_value__15222__auto__ = (function (){try{while(true){
var result__15223__auto__ = switch__15220__auto__(state_15743);
if(cljs.core.keyword_identical_QMARK_(result__15223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15223__auto__;
}
break;
}
}catch (e15755){if((e15755 instanceof Object)){
var ex__15224__auto__ = e15755;
var statearr_15756_15909 = state_15743;
(statearr_15756_15909[(5)] = ex__15224__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15743);

return cljs.core.cst$kw$recur;
} else {
throw e15755;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15222__auto__,cljs.core.cst$kw$recur)){
var G__15910 = state_15743;
state_15743 = G__15910;
continue;
} else {
return ret_value__15222__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__ = function(state_15743){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____1.call(this,state_15743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__;
})()
;})(__15899,switch__15220__auto__,c__15344__auto___15902,G__15730_15900,n__7734__auto___15898,jobs,results,process,async))
})();
var state__15346__auto__ = (function (){var statearr_15757 = (f__15345__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15345__auto__.cljs$core$IFn$_invoke$arity$0() : f__15345__auto__.call(null));
(statearr_15757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15344__auto___15902);

return statearr_15757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15346__auto__);
});})(__15899,c__15344__auto___15902,G__15730_15900,n__7734__auto___15898,jobs,results,process,async))
);


break;
case "async":
var c__15344__auto___15911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15899,c__15344__auto___15911,G__15730_15900,n__7734__auto___15898,jobs,results,process,async){
return (function (){
var f__15345__auto__ = (function (){var switch__15220__auto__ = ((function (__15899,c__15344__auto___15911,G__15730_15900,n__7734__auto___15898,jobs,results,process,async){
return (function (state_15770){
var state_val_15771 = (state_15770[(1)]);
if((state_val_15771 === (1))){
var state_15770__$1 = state_15770;
var statearr_15772_15912 = state_15770__$1;
(statearr_15772_15912[(2)] = null);

(statearr_15772_15912[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15771 === (2))){
var state_15770__$1 = state_15770;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15770__$1,(4),jobs);
} else {
if((state_val_15771 === (3))){
var inst_15768 = (state_15770[(2)]);
var state_15770__$1 = state_15770;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15770__$1,inst_15768);
} else {
if((state_val_15771 === (4))){
var inst_15760 = (state_15770[(2)]);
var inst_15761 = async(inst_15760);
var state_15770__$1 = state_15770;
if(cljs.core.truth_(inst_15761)){
var statearr_15773_15913 = state_15770__$1;
(statearr_15773_15913[(1)] = (5));

} else {
var statearr_15774_15914 = state_15770__$1;
(statearr_15774_15914[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15771 === (5))){
var state_15770__$1 = state_15770;
var statearr_15775_15915 = state_15770__$1;
(statearr_15775_15915[(2)] = null);

(statearr_15775_15915[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15771 === (6))){
var state_15770__$1 = state_15770;
var statearr_15776_15916 = state_15770__$1;
(statearr_15776_15916[(2)] = null);

(statearr_15776_15916[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15771 === (7))){
var inst_15766 = (state_15770[(2)]);
var state_15770__$1 = state_15770;
var statearr_15777_15917 = state_15770__$1;
(statearr_15777_15917[(2)] = inst_15766);

(statearr_15777_15917[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15899,c__15344__auto___15911,G__15730_15900,n__7734__auto___15898,jobs,results,process,async))
;
return ((function (__15899,switch__15220__auto__,c__15344__auto___15911,G__15730_15900,n__7734__auto___15898,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____0 = (function (){
var statearr_15781 = [null,null,null,null,null,null,null];
(statearr_15781[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__);

(statearr_15781[(1)] = (1));

return statearr_15781;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____1 = (function (state_15770){
while(true){
var ret_value__15222__auto__ = (function (){try{while(true){
var result__15223__auto__ = switch__15220__auto__(state_15770);
if(cljs.core.keyword_identical_QMARK_(result__15223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15223__auto__;
}
break;
}
}catch (e15782){if((e15782 instanceof Object)){
var ex__15224__auto__ = e15782;
var statearr_15783_15918 = state_15770;
(statearr_15783_15918[(5)] = ex__15224__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15770);

return cljs.core.cst$kw$recur;
} else {
throw e15782;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15222__auto__,cljs.core.cst$kw$recur)){
var G__15919 = state_15770;
state_15770 = G__15919;
continue;
} else {
return ret_value__15222__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__ = function(state_15770){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____1.call(this,state_15770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__;
})()
;})(__15899,switch__15220__auto__,c__15344__auto___15911,G__15730_15900,n__7734__auto___15898,jobs,results,process,async))
})();
var state__15346__auto__ = (function (){var statearr_15784 = (f__15345__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15345__auto__.cljs$core$IFn$_invoke$arity$0() : f__15345__auto__.call(null));
(statearr_15784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15344__auto___15911);

return statearr_15784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15346__auto__);
});})(__15899,c__15344__auto___15911,G__15730_15900,n__7734__auto___15898,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__15920 = (__15899 + (1));
__15899 = G__15920;
continue;
} else {
}
break;
}

var c__15344__auto___15921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15344__auto___15921,jobs,results,process,async){
return (function (){
var f__15345__auto__ = (function (){var switch__15220__auto__ = ((function (c__15344__auto___15921,jobs,results,process,async){
return (function (state_15806){
var state_val_15807 = (state_15806[(1)]);
if((state_val_15807 === (1))){
var state_15806__$1 = state_15806;
var statearr_15808_15922 = state_15806__$1;
(statearr_15808_15922[(2)] = null);

(statearr_15808_15922[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15807 === (2))){
var state_15806__$1 = state_15806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15806__$1,(4),from);
} else {
if((state_val_15807 === (3))){
var inst_15804 = (state_15806[(2)]);
var state_15806__$1 = state_15806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15806__$1,inst_15804);
} else {
if((state_val_15807 === (4))){
var inst_15787 = (state_15806[(7)]);
var inst_15787__$1 = (state_15806[(2)]);
var inst_15788 = (inst_15787__$1 == null);
var state_15806__$1 = (function (){var statearr_15809 = state_15806;
(statearr_15809[(7)] = inst_15787__$1);

return statearr_15809;
})();
if(cljs.core.truth_(inst_15788)){
var statearr_15810_15923 = state_15806__$1;
(statearr_15810_15923[(1)] = (5));

} else {
var statearr_15811_15924 = state_15806__$1;
(statearr_15811_15924[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15807 === (5))){
var inst_15790 = cljs.core.async.close_BANG_(jobs);
var state_15806__$1 = state_15806;
var statearr_15812_15925 = state_15806__$1;
(statearr_15812_15925[(2)] = inst_15790);

(statearr_15812_15925[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15807 === (6))){
var inst_15792 = (state_15806[(8)]);
var inst_15787 = (state_15806[(7)]);
var inst_15792__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15793 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15794 = [inst_15787,inst_15792__$1];
var inst_15795 = (new cljs.core.PersistentVector(null,2,(5),inst_15793,inst_15794,null));
var state_15806__$1 = (function (){var statearr_15813 = state_15806;
(statearr_15813[(8)] = inst_15792__$1);

return statearr_15813;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15806__$1,(8),jobs,inst_15795);
} else {
if((state_val_15807 === (7))){
var inst_15802 = (state_15806[(2)]);
var state_15806__$1 = state_15806;
var statearr_15814_15926 = state_15806__$1;
(statearr_15814_15926[(2)] = inst_15802);

(statearr_15814_15926[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15807 === (8))){
var inst_15792 = (state_15806[(8)]);
var inst_15797 = (state_15806[(2)]);
var state_15806__$1 = (function (){var statearr_15815 = state_15806;
(statearr_15815[(9)] = inst_15797);

return statearr_15815;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15806__$1,(9),results,inst_15792);
} else {
if((state_val_15807 === (9))){
var inst_15799 = (state_15806[(2)]);
var state_15806__$1 = (function (){var statearr_15816 = state_15806;
(statearr_15816[(10)] = inst_15799);

return statearr_15816;
})();
var statearr_15817_15927 = state_15806__$1;
(statearr_15817_15927[(2)] = null);

(statearr_15817_15927[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__15344__auto___15921,jobs,results,process,async))
;
return ((function (switch__15220__auto__,c__15344__auto___15921,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____0 = (function (){
var statearr_15821 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15821[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__);

(statearr_15821[(1)] = (1));

return statearr_15821;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____1 = (function (state_15806){
while(true){
var ret_value__15222__auto__ = (function (){try{while(true){
var result__15223__auto__ = switch__15220__auto__(state_15806);
if(cljs.core.keyword_identical_QMARK_(result__15223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15223__auto__;
}
break;
}
}catch (e15822){if((e15822 instanceof Object)){
var ex__15224__auto__ = e15822;
var statearr_15823_15928 = state_15806;
(statearr_15823_15928[(5)] = ex__15224__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15806);

return cljs.core.cst$kw$recur;
} else {
throw e15822;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15222__auto__,cljs.core.cst$kw$recur)){
var G__15929 = state_15806;
state_15806 = G__15929;
continue;
} else {
return ret_value__15222__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__ = function(state_15806){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____1.call(this,state_15806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__;
})()
;})(switch__15220__auto__,c__15344__auto___15921,jobs,results,process,async))
})();
var state__15346__auto__ = (function (){var statearr_15824 = (f__15345__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15345__auto__.cljs$core$IFn$_invoke$arity$0() : f__15345__auto__.call(null));
(statearr_15824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15344__auto___15921);

return statearr_15824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15346__auto__);
});})(c__15344__auto___15921,jobs,results,process,async))
);


var c__15344__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15344__auto__,jobs,results,process,async){
return (function (){
var f__15345__auto__ = (function (){var switch__15220__auto__ = ((function (c__15344__auto__,jobs,results,process,async){
return (function (state_15862){
var state_val_15863 = (state_15862[(1)]);
if((state_val_15863 === (7))){
var inst_15858 = (state_15862[(2)]);
var state_15862__$1 = state_15862;
var statearr_15864_15930 = state_15862__$1;
(statearr_15864_15930[(2)] = inst_15858);

(statearr_15864_15930[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15863 === (20))){
var state_15862__$1 = state_15862;
var statearr_15865_15931 = state_15862__$1;
(statearr_15865_15931[(2)] = null);

(statearr_15865_15931[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15863 === (1))){
var state_15862__$1 = state_15862;
var statearr_15866_15932 = state_15862__$1;
(statearr_15866_15932[(2)] = null);

(statearr_15866_15932[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15863 === (4))){
var inst_15827 = (state_15862[(7)]);
var inst_15827__$1 = (state_15862[(2)]);
var inst_15828 = (inst_15827__$1 == null);
var state_15862__$1 = (function (){var statearr_15867 = state_15862;
(statearr_15867[(7)] = inst_15827__$1);

return statearr_15867;
})();
if(cljs.core.truth_(inst_15828)){
var statearr_15868_15933 = state_15862__$1;
(statearr_15868_15933[(1)] = (5));

} else {
var statearr_15869_15934 = state_15862__$1;
(statearr_15869_15934[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15863 === (15))){
var inst_15840 = (state_15862[(8)]);
var state_15862__$1 = state_15862;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15862__$1,(18),to,inst_15840);
} else {
if((state_val_15863 === (21))){
var inst_15853 = (state_15862[(2)]);
var state_15862__$1 = state_15862;
var statearr_15870_15935 = state_15862__$1;
(statearr_15870_15935[(2)] = inst_15853);

(statearr_15870_15935[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15863 === (13))){
var inst_15855 = (state_15862[(2)]);
var state_15862__$1 = (function (){var statearr_15871 = state_15862;
(statearr_15871[(9)] = inst_15855);

return statearr_15871;
})();
var statearr_15872_15936 = state_15862__$1;
(statearr_15872_15936[(2)] = null);

(statearr_15872_15936[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15863 === (6))){
var inst_15827 = (state_15862[(7)]);
var state_15862__$1 = state_15862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15862__$1,(11),inst_15827);
} else {
if((state_val_15863 === (17))){
var inst_15848 = (state_15862[(2)]);
var state_15862__$1 = state_15862;
if(cljs.core.truth_(inst_15848)){
var statearr_15873_15937 = state_15862__$1;
(statearr_15873_15937[(1)] = (19));

} else {
var statearr_15874_15938 = state_15862__$1;
(statearr_15874_15938[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15863 === (3))){
var inst_15860 = (state_15862[(2)]);
var state_15862__$1 = state_15862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15862__$1,inst_15860);
} else {
if((state_val_15863 === (12))){
var inst_15837 = (state_15862[(10)]);
var state_15862__$1 = state_15862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15862__$1,(14),inst_15837);
} else {
if((state_val_15863 === (2))){
var state_15862__$1 = state_15862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15862__$1,(4),results);
} else {
if((state_val_15863 === (19))){
var state_15862__$1 = state_15862;
var statearr_15875_15939 = state_15862__$1;
(statearr_15875_15939[(2)] = null);

(statearr_15875_15939[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15863 === (11))){
var inst_15837 = (state_15862[(2)]);
var state_15862__$1 = (function (){var statearr_15876 = state_15862;
(statearr_15876[(10)] = inst_15837);

return statearr_15876;
})();
var statearr_15877_15940 = state_15862__$1;
(statearr_15877_15940[(2)] = null);

(statearr_15877_15940[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15863 === (9))){
var state_15862__$1 = state_15862;
var statearr_15878_15941 = state_15862__$1;
(statearr_15878_15941[(2)] = null);

(statearr_15878_15941[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15863 === (5))){
var state_15862__$1 = state_15862;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15879_15942 = state_15862__$1;
(statearr_15879_15942[(1)] = (8));

} else {
var statearr_15880_15943 = state_15862__$1;
(statearr_15880_15943[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15863 === (14))){
var inst_15842 = (state_15862[(11)]);
var inst_15840 = (state_15862[(8)]);
var inst_15840__$1 = (state_15862[(2)]);
var inst_15841 = (inst_15840__$1 == null);
var inst_15842__$1 = cljs.core.not(inst_15841);
var state_15862__$1 = (function (){var statearr_15881 = state_15862;
(statearr_15881[(11)] = inst_15842__$1);

(statearr_15881[(8)] = inst_15840__$1);

return statearr_15881;
})();
if(inst_15842__$1){
var statearr_15882_15944 = state_15862__$1;
(statearr_15882_15944[(1)] = (15));

} else {
var statearr_15883_15945 = state_15862__$1;
(statearr_15883_15945[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15863 === (16))){
var inst_15842 = (state_15862[(11)]);
var state_15862__$1 = state_15862;
var statearr_15884_15946 = state_15862__$1;
(statearr_15884_15946[(2)] = inst_15842);

(statearr_15884_15946[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15863 === (10))){
var inst_15834 = (state_15862[(2)]);
var state_15862__$1 = state_15862;
var statearr_15885_15947 = state_15862__$1;
(statearr_15885_15947[(2)] = inst_15834);

(statearr_15885_15947[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15863 === (18))){
var inst_15845 = (state_15862[(2)]);
var state_15862__$1 = state_15862;
var statearr_15886_15948 = state_15862__$1;
(statearr_15886_15948[(2)] = inst_15845);

(statearr_15886_15948[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15863 === (8))){
var inst_15831 = cljs.core.async.close_BANG_(to);
var state_15862__$1 = state_15862;
var statearr_15887_15949 = state_15862__$1;
(statearr_15887_15949[(2)] = inst_15831);

(statearr_15887_15949[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15344__auto__,jobs,results,process,async))
;
return ((function (switch__15220__auto__,c__15344__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____0 = (function (){
var statearr_15891 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15891[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__);

(statearr_15891[(1)] = (1));

return statearr_15891;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____1 = (function (state_15862){
while(true){
var ret_value__15222__auto__ = (function (){try{while(true){
var result__15223__auto__ = switch__15220__auto__(state_15862);
if(cljs.core.keyword_identical_QMARK_(result__15223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15223__auto__;
}
break;
}
}catch (e15892){if((e15892 instanceof Object)){
var ex__15224__auto__ = e15892;
var statearr_15893_15950 = state_15862;
(statearr_15893_15950[(5)] = ex__15224__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15862);

return cljs.core.cst$kw$recur;
} else {
throw e15892;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15222__auto__,cljs.core.cst$kw$recur)){
var G__15951 = state_15862;
state_15862 = G__15951;
continue;
} else {
return ret_value__15222__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__ = function(state_15862){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____1.call(this,state_15862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15221__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15221__auto__;
})()
;})(switch__15220__auto__,c__15344__auto__,jobs,results,process,async))
})();
var state__15346__auto__ = (function (){var statearr_15894 = (f__15345__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15345__auto__.cljs$core$IFn$_invoke$arity$0() : f__15345__auto__.call(null));
(statearr_15894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15344__auto__);

return statearr_15894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15346__auto__);
});})(c__15344__auto__,jobs,results,process,async))
);

return c__15344__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args15952 = [];
var len__7924__auto___15955 = arguments.length;
var i__7925__auto___15956 = (0);
while(true){
if((i__7925__auto___15956 < len__7924__auto___15955)){
args15952.push((arguments[i__7925__auto___15956]));

var G__15957 = (i__7925__auto___15956 + (1));
i__7925__auto___15956 = G__15957;
continue;
} else {
}
break;
}

var G__15954 = args15952.length;
switch (G__15954) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15952.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args15959 = [];
var len__7924__auto___15962 = arguments.length;
var i__7925__auto___15963 = (0);
while(true){
if((i__7925__auto___15963 < len__7924__auto___15962)){
args15959.push((arguments[i__7925__auto___15963]));

var G__15964 = (i__7925__auto___15963 + (1));
i__7925__auto___15963 = G__15964;
continue;
} else {
}
break;
}

var G__15961 = args15959.length;
switch (G__15961) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15959.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args15966 = [];
var len__7924__auto___16019 = arguments.length;
var i__7925__auto___16020 = (0);
while(true){
if((i__7925__auto___16020 < len__7924__auto___16019)){
args15966.push((arguments[i__7925__auto___16020]));

var G__16021 = (i__7925__auto___16020 + (1));
i__7925__auto___16020 = G__16021;
continue;
} else {
}
break;
}

var G__15968 = args15966.length;
switch (G__15968) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15966.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15344__auto___16023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15344__auto___16023,tc,fc){
return (function (){
var f__15345__auto__ = (function (){var switch__15220__auto__ = ((function (c__15344__auto___16023,tc,fc){
return (function (state_15994){
var state_val_15995 = (state_15994[(1)]);
if((state_val_15995 === (7))){
var inst_15990 = (state_15994[(2)]);
var state_15994__$1 = state_15994;
var statearr_15996_16024 = state_15994__$1;
(statearr_15996_16024[(2)] = inst_15990);

(statearr_15996_16024[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15995 === (1))){
var state_15994__$1 = state_15994;
var statearr_15997_16025 = state_15994__$1;
(statearr_15997_16025[(2)] = null);

(statearr_15997_16025[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15995 === (4))){
var inst_15971 = (state_15994[(7)]);
var inst_15971__$1 = (state_15994[(2)]);
var inst_15972 = (inst_15971__$1 == null);
var state_15994__$1 = (function (){var statearr_15998 = state_15994;
(statearr_15998[(7)] = inst_15971__$1);

return statearr_15998;
})();
if(cljs.core.truth_(inst_15972)){
var statearr_15999_16026 = state_15994__$1;
(statearr_15999_16026[(1)] = (5));

} else {
var statearr_16000_16027 = state_15994__$1;
(statearr_16000_16027[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15995 === (13))){
var state_15994__$1 = state_15994;
var statearr_16001_16028 = state_15994__$1;
(statearr_16001_16028[(2)] = null);

(statearr_16001_16028[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15995 === (6))){
var inst_15971 = (state_15994[(7)]);
var inst_15977 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15971) : p.call(null,inst_15971));
var state_15994__$1 = state_15994;
if(cljs.core.truth_(inst_15977)){
var statearr_16002_16029 = state_15994__$1;
(statearr_16002_16029[(1)] = (9));

} else {
var statearr_16003_16030 = state_15994__$1;
(statearr_16003_16030[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15995 === (3))){
var inst_15992 = (state_15994[(2)]);
var state_15994__$1 = state_15994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15994__$1,inst_15992);
} else {
if((state_val_15995 === (12))){
var state_15994__$1 = state_15994;
var statearr_16004_16031 = state_15994__$1;
(statearr_16004_16031[(2)] = null);

(statearr_16004_16031[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15995 === (2))){
var state_15994__$1 = state_15994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15994__$1,(4),ch);
} else {
if((state_val_15995 === (11))){
var inst_15971 = (state_15994[(7)]);
var inst_15981 = (state_15994[(2)]);
var state_15994__$1 = state_15994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15994__$1,(8),inst_15981,inst_15971);
} else {
if((state_val_15995 === (9))){
var state_15994__$1 = state_15994;
var statearr_16005_16032 = state_15994__$1;
(statearr_16005_16032[(2)] = tc);

(statearr_16005_16032[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15995 === (5))){
var inst_15974 = cljs.core.async.close_BANG_(tc);
var inst_15975 = cljs.core.async.close_BANG_(fc);
var state_15994__$1 = (function (){var statearr_16006 = state_15994;
(statearr_16006[(8)] = inst_15974);

return statearr_16006;
})();
var statearr_16007_16033 = state_15994__$1;
(statearr_16007_16033[(2)] = inst_15975);

(statearr_16007_16033[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15995 === (14))){
var inst_15988 = (state_15994[(2)]);
var state_15994__$1 = state_15994;
var statearr_16008_16034 = state_15994__$1;
(statearr_16008_16034[(2)] = inst_15988);

(statearr_16008_16034[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15995 === (10))){
var state_15994__$1 = state_15994;
var statearr_16009_16035 = state_15994__$1;
(statearr_16009_16035[(2)] = fc);

(statearr_16009_16035[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15995 === (8))){
var inst_15983 = (state_15994[(2)]);
var state_15994__$1 = state_15994;
if(cljs.core.truth_(inst_15983)){
var statearr_16010_16036 = state_15994__$1;
(statearr_16010_16036[(1)] = (12));

} else {
var statearr_16011_16037 = state_15994__$1;
(statearr_16011_16037[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15344__auto___16023,tc,fc))
;
return ((function (switch__15220__auto__,c__15344__auto___16023,tc,fc){
return (function() {
var cljs$core$async$state_machine__15221__auto__ = null;
var cljs$core$async$state_machine__15221__auto____0 = (function (){
var statearr_16015 = [null,null,null,null,null,null,null,null,null];
(statearr_16015[(0)] = cljs$core$async$state_machine__15221__auto__);

(statearr_16015[(1)] = (1));

return statearr_16015;
});
var cljs$core$async$state_machine__15221__auto____1 = (function (state_15994){
while(true){
var ret_value__15222__auto__ = (function (){try{while(true){
var result__15223__auto__ = switch__15220__auto__(state_15994);
if(cljs.core.keyword_identical_QMARK_(result__15223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15223__auto__;
}
break;
}
}catch (e16016){if((e16016 instanceof Object)){
var ex__15224__auto__ = e16016;
var statearr_16017_16038 = state_15994;
(statearr_16017_16038[(5)] = ex__15224__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15994);

return cljs.core.cst$kw$recur;
} else {
throw e16016;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15222__auto__,cljs.core.cst$kw$recur)){
var G__16039 = state_15994;
state_15994 = G__16039;
continue;
} else {
return ret_value__15222__auto__;
}
break;
}
});
cljs$core$async$state_machine__15221__auto__ = function(state_15994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15221__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15221__auto____1.call(this,state_15994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15221__auto____0;
cljs$core$async$state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15221__auto____1;
return cljs$core$async$state_machine__15221__auto__;
})()
;})(switch__15220__auto__,c__15344__auto___16023,tc,fc))
})();
var state__15346__auto__ = (function (){var statearr_16018 = (f__15345__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15345__auto__.cljs$core$IFn$_invoke$arity$0() : f__15345__auto__.call(null));
(statearr_16018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15344__auto___16023);

return statearr_16018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15346__auto__);
});})(c__15344__auto___16023,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15344__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15344__auto__){
return (function (){
var f__15345__auto__ = (function (){var switch__15220__auto__ = ((function (c__15344__auto__){
return (function (state_16086){
var state_val_16087 = (state_16086[(1)]);
if((state_val_16087 === (1))){
var inst_16072 = init;
var state_16086__$1 = (function (){var statearr_16088 = state_16086;
(statearr_16088[(7)] = inst_16072);

return statearr_16088;
})();
var statearr_16089_16104 = state_16086__$1;
(statearr_16089_16104[(2)] = null);

(statearr_16089_16104[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16087 === (2))){
var state_16086__$1 = state_16086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16086__$1,(4),ch);
} else {
if((state_val_16087 === (3))){
var inst_16084 = (state_16086[(2)]);
var state_16086__$1 = state_16086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16086__$1,inst_16084);
} else {
if((state_val_16087 === (4))){
var inst_16075 = (state_16086[(8)]);
var inst_16075__$1 = (state_16086[(2)]);
var inst_16076 = (inst_16075__$1 == null);
var state_16086__$1 = (function (){var statearr_16090 = state_16086;
(statearr_16090[(8)] = inst_16075__$1);

return statearr_16090;
})();
if(cljs.core.truth_(inst_16076)){
var statearr_16091_16105 = state_16086__$1;
(statearr_16091_16105[(1)] = (5));

} else {
var statearr_16092_16106 = state_16086__$1;
(statearr_16092_16106[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16087 === (5))){
var inst_16072 = (state_16086[(7)]);
var state_16086__$1 = state_16086;
var statearr_16093_16107 = state_16086__$1;
(statearr_16093_16107[(2)] = inst_16072);

(statearr_16093_16107[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16087 === (6))){
var inst_16072 = (state_16086[(7)]);
var inst_16075 = (state_16086[(8)]);
var inst_16079 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16072,inst_16075) : f.call(null,inst_16072,inst_16075));
var inst_16072__$1 = inst_16079;
var state_16086__$1 = (function (){var statearr_16094 = state_16086;
(statearr_16094[(7)] = inst_16072__$1);

return statearr_16094;
})();
var statearr_16095_16108 = state_16086__$1;
(statearr_16095_16108[(2)] = null);

(statearr_16095_16108[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16087 === (7))){
var inst_16082 = (state_16086[(2)]);
var state_16086__$1 = state_16086;
var statearr_16096_16109 = state_16086__$1;
(statearr_16096_16109[(2)] = inst_16082);

(statearr_16096_16109[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__15344__auto__))
;
return ((function (switch__15220__auto__,c__15344__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15221__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15221__auto____0 = (function (){
var statearr_16100 = [null,null,null,null,null,null,null,null,null];
(statearr_16100[(0)] = cljs$core$async$reduce_$_state_machine__15221__auto__);

(statearr_16100[(1)] = (1));

return statearr_16100;
});
var cljs$core$async$reduce_$_state_machine__15221__auto____1 = (function (state_16086){
while(true){
var ret_value__15222__auto__ = (function (){try{while(true){
var result__15223__auto__ = switch__15220__auto__(state_16086);
if(cljs.core.keyword_identical_QMARK_(result__15223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15223__auto__;
}
break;
}
}catch (e16101){if((e16101 instanceof Object)){
var ex__15224__auto__ = e16101;
var statearr_16102_16110 = state_16086;
(statearr_16102_16110[(5)] = ex__15224__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16086);

return cljs.core.cst$kw$recur;
} else {
throw e16101;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15222__auto__,cljs.core.cst$kw$recur)){
var G__16111 = state_16086;
state_16086 = G__16111;
continue;
} else {
return ret_value__15222__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15221__auto__ = function(state_16086){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15221__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15221__auto____1.call(this,state_16086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15221__auto____0;
cljs$core$async$reduce_$_state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15221__auto____1;
return cljs$core$async$reduce_$_state_machine__15221__auto__;
})()
;})(switch__15220__auto__,c__15344__auto__))
})();
var state__15346__auto__ = (function (){var statearr_16103 = (f__15345__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15345__auto__.cljs$core$IFn$_invoke$arity$0() : f__15345__auto__.call(null));
(statearr_16103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15344__auto__);

return statearr_16103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15346__auto__);
});})(c__15344__auto__))
);

return c__15344__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args16112 = [];
var len__7924__auto___16164 = arguments.length;
var i__7925__auto___16165 = (0);
while(true){
if((i__7925__auto___16165 < len__7924__auto___16164)){
args16112.push((arguments[i__7925__auto___16165]));

var G__16166 = (i__7925__auto___16165 + (1));
i__7925__auto___16165 = G__16166;
continue;
} else {
}
break;
}

var G__16114 = args16112.length;
switch (G__16114) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16112.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15344__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15344__auto__){
return (function (){
var f__15345__auto__ = (function (){var switch__15220__auto__ = ((function (c__15344__auto__){
return (function (state_16139){
var state_val_16140 = (state_16139[(1)]);
if((state_val_16140 === (7))){
var inst_16121 = (state_16139[(2)]);
var state_16139__$1 = state_16139;
var statearr_16141_16168 = state_16139__$1;
(statearr_16141_16168[(2)] = inst_16121);

(statearr_16141_16168[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16140 === (1))){
var inst_16115 = cljs.core.seq(coll);
var inst_16116 = inst_16115;
var state_16139__$1 = (function (){var statearr_16142 = state_16139;
(statearr_16142[(7)] = inst_16116);

return statearr_16142;
})();
var statearr_16143_16169 = state_16139__$1;
(statearr_16143_16169[(2)] = null);

(statearr_16143_16169[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16140 === (4))){
var inst_16116 = (state_16139[(7)]);
var inst_16119 = cljs.core.first(inst_16116);
var state_16139__$1 = state_16139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16139__$1,(7),ch,inst_16119);
} else {
if((state_val_16140 === (13))){
var inst_16133 = (state_16139[(2)]);
var state_16139__$1 = state_16139;
var statearr_16144_16170 = state_16139__$1;
(statearr_16144_16170[(2)] = inst_16133);

(statearr_16144_16170[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16140 === (6))){
var inst_16124 = (state_16139[(2)]);
var state_16139__$1 = state_16139;
if(cljs.core.truth_(inst_16124)){
var statearr_16145_16171 = state_16139__$1;
(statearr_16145_16171[(1)] = (8));

} else {
var statearr_16146_16172 = state_16139__$1;
(statearr_16146_16172[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16140 === (3))){
var inst_16137 = (state_16139[(2)]);
var state_16139__$1 = state_16139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16139__$1,inst_16137);
} else {
if((state_val_16140 === (12))){
var state_16139__$1 = state_16139;
var statearr_16147_16173 = state_16139__$1;
(statearr_16147_16173[(2)] = null);

(statearr_16147_16173[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16140 === (2))){
var inst_16116 = (state_16139[(7)]);
var state_16139__$1 = state_16139;
if(cljs.core.truth_(inst_16116)){
var statearr_16148_16174 = state_16139__$1;
(statearr_16148_16174[(1)] = (4));

} else {
var statearr_16149_16175 = state_16139__$1;
(statearr_16149_16175[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16140 === (11))){
var inst_16130 = cljs.core.async.close_BANG_(ch);
var state_16139__$1 = state_16139;
var statearr_16150_16176 = state_16139__$1;
(statearr_16150_16176[(2)] = inst_16130);

(statearr_16150_16176[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16140 === (9))){
var state_16139__$1 = state_16139;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16151_16177 = state_16139__$1;
(statearr_16151_16177[(1)] = (11));

} else {
var statearr_16152_16178 = state_16139__$1;
(statearr_16152_16178[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16140 === (5))){
var inst_16116 = (state_16139[(7)]);
var state_16139__$1 = state_16139;
var statearr_16153_16179 = state_16139__$1;
(statearr_16153_16179[(2)] = inst_16116);

(statearr_16153_16179[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16140 === (10))){
var inst_16135 = (state_16139[(2)]);
var state_16139__$1 = state_16139;
var statearr_16154_16180 = state_16139__$1;
(statearr_16154_16180[(2)] = inst_16135);

(statearr_16154_16180[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16140 === (8))){
var inst_16116 = (state_16139[(7)]);
var inst_16126 = cljs.core.next(inst_16116);
var inst_16116__$1 = inst_16126;
var state_16139__$1 = (function (){var statearr_16155 = state_16139;
(statearr_16155[(7)] = inst_16116__$1);

return statearr_16155;
})();
var statearr_16156_16181 = state_16139__$1;
(statearr_16156_16181[(2)] = null);

(statearr_16156_16181[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15344__auto__))
;
return ((function (switch__15220__auto__,c__15344__auto__){
return (function() {
var cljs$core$async$state_machine__15221__auto__ = null;
var cljs$core$async$state_machine__15221__auto____0 = (function (){
var statearr_16160 = [null,null,null,null,null,null,null,null];
(statearr_16160[(0)] = cljs$core$async$state_machine__15221__auto__);

(statearr_16160[(1)] = (1));

return statearr_16160;
});
var cljs$core$async$state_machine__15221__auto____1 = (function (state_16139){
while(true){
var ret_value__15222__auto__ = (function (){try{while(true){
var result__15223__auto__ = switch__15220__auto__(state_16139);
if(cljs.core.keyword_identical_QMARK_(result__15223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15223__auto__;
}
break;
}
}catch (e16161){if((e16161 instanceof Object)){
var ex__15224__auto__ = e16161;
var statearr_16162_16182 = state_16139;
(statearr_16162_16182[(5)] = ex__15224__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16139);

return cljs.core.cst$kw$recur;
} else {
throw e16161;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15222__auto__,cljs.core.cst$kw$recur)){
var G__16183 = state_16139;
state_16139 = G__16183;
continue;
} else {
return ret_value__15222__auto__;
}
break;
}
});
cljs$core$async$state_machine__15221__auto__ = function(state_16139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15221__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15221__auto____1.call(this,state_16139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15221__auto____0;
cljs$core$async$state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15221__auto____1;
return cljs$core$async$state_machine__15221__auto__;
})()
;})(switch__15220__auto__,c__15344__auto__))
})();
var state__15346__auto__ = (function (){var statearr_16163 = (f__15345__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15345__auto__.cljs$core$IFn$_invoke$arity$0() : f__15345__auto__.call(null));
(statearr_16163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15344__auto__);

return statearr_16163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15346__auto__);
});})(c__15344__auto__))
);

return c__15344__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7479__auto__ = (((m == null))?null:m);
var m__7480__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7480__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__7480__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7480__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7479__auto__ = (((m == null))?null:m);
var m__7480__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7480__auto__.call(null,m,ch));
} else {
var m__7480__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7480__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7479__auto__ = (((m == null))?null:m);
var m__7480__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7480__auto__.call(null,m));
} else {
var m__7480__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7480__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__16412 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16412) : cljs.core.atom.call(null,G__16412));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16413 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16413 = (function (ch,cs,meta16414){
this.ch = ch;
this.cs = cs;
this.meta16414 = meta16414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16415,meta16414__$1){
var self__ = this;
var _16415__$1 = this;
return (new cljs.core.async.t_cljs$core$async16413(self__.ch,self__.cs,meta16414__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16413.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16415){
var self__ = this;
var _16415__$1 = this;
return self__.meta16414;
});})(cs))
;

cljs.core.async.t_cljs$core$async16413.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16413.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16413.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16413.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16413.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16413.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16416_16640 = self__.cs;
var G__16417_16641 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16416_16640,G__16417_16641) : cljs.core.reset_BANG_.call(null,G__16416_16640,G__16417_16641));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16413.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16414], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16413.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16413.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16413";

cljs.core.async.t_cljs$core$async16413.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7422__auto__,writer__7423__auto__,opt__7424__auto__){
return cljs.core._write(writer__7423__auto__,"cljs.core.async/t_cljs$core$async16413");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async16413 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16413(ch__$1,cs__$1,meta16414){
return (new cljs.core.async.t_cljs$core$async16413(ch__$1,cs__$1,meta16414));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16413(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15344__auto___16642 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15344__auto___16642,cs,m,dchan,dctr,done){
return (function (){
var f__15345__auto__ = (function (){var switch__15220__auto__ = ((function (c__15344__auto___16642,cs,m,dchan,dctr,done){
return (function (state_16552){
var state_val_16553 = (state_16552[(1)]);
if((state_val_16553 === (7))){
var inst_16548 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
var statearr_16554_16643 = state_16552__$1;
(statearr_16554_16643[(2)] = inst_16548);

(statearr_16554_16643[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (20))){
var inst_16451 = (state_16552[(7)]);
var inst_16463 = cljs.core.first(inst_16451);
var inst_16464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16463,(0),null);
var inst_16465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16463,(1),null);
var state_16552__$1 = (function (){var statearr_16555 = state_16552;
(statearr_16555[(8)] = inst_16464);

return statearr_16555;
})();
if(cljs.core.truth_(inst_16465)){
var statearr_16556_16644 = state_16552__$1;
(statearr_16556_16644[(1)] = (22));

} else {
var statearr_16557_16645 = state_16552__$1;
(statearr_16557_16645[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (27))){
var inst_16493 = (state_16552[(9)]);
var inst_16500 = (state_16552[(10)]);
var inst_16420 = (state_16552[(11)]);
var inst_16495 = (state_16552[(12)]);
var inst_16500__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16493,inst_16495);
var inst_16501 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16500__$1,inst_16420,done);
var state_16552__$1 = (function (){var statearr_16558 = state_16552;
(statearr_16558[(10)] = inst_16500__$1);

return statearr_16558;
})();
if(cljs.core.truth_(inst_16501)){
var statearr_16559_16646 = state_16552__$1;
(statearr_16559_16646[(1)] = (30));

} else {
var statearr_16560_16647 = state_16552__$1;
(statearr_16560_16647[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (1))){
var state_16552__$1 = state_16552;
var statearr_16561_16648 = state_16552__$1;
(statearr_16561_16648[(2)] = null);

(statearr_16561_16648[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (24))){
var inst_16451 = (state_16552[(7)]);
var inst_16470 = (state_16552[(2)]);
var inst_16471 = cljs.core.next(inst_16451);
var inst_16429 = inst_16471;
var inst_16430 = null;
var inst_16431 = (0);
var inst_16432 = (0);
var state_16552__$1 = (function (){var statearr_16562 = state_16552;
(statearr_16562[(13)] = inst_16431);

(statearr_16562[(14)] = inst_16430);

(statearr_16562[(15)] = inst_16470);

(statearr_16562[(16)] = inst_16432);

(statearr_16562[(17)] = inst_16429);

return statearr_16562;
})();
var statearr_16563_16649 = state_16552__$1;
(statearr_16563_16649[(2)] = null);

(statearr_16563_16649[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (39))){
var state_16552__$1 = state_16552;
var statearr_16567_16650 = state_16552__$1;
(statearr_16567_16650[(2)] = null);

(statearr_16567_16650[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (4))){
var inst_16420 = (state_16552[(11)]);
var inst_16420__$1 = (state_16552[(2)]);
var inst_16421 = (inst_16420__$1 == null);
var state_16552__$1 = (function (){var statearr_16568 = state_16552;
(statearr_16568[(11)] = inst_16420__$1);

return statearr_16568;
})();
if(cljs.core.truth_(inst_16421)){
var statearr_16569_16651 = state_16552__$1;
(statearr_16569_16651[(1)] = (5));

} else {
var statearr_16570_16652 = state_16552__$1;
(statearr_16570_16652[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (15))){
var inst_16431 = (state_16552[(13)]);
var inst_16430 = (state_16552[(14)]);
var inst_16432 = (state_16552[(16)]);
var inst_16429 = (state_16552[(17)]);
var inst_16447 = (state_16552[(2)]);
var inst_16448 = (inst_16432 + (1));
var tmp16564 = inst_16431;
var tmp16565 = inst_16430;
var tmp16566 = inst_16429;
var inst_16429__$1 = tmp16566;
var inst_16430__$1 = tmp16565;
var inst_16431__$1 = tmp16564;
var inst_16432__$1 = inst_16448;
var state_16552__$1 = (function (){var statearr_16571 = state_16552;
(statearr_16571[(13)] = inst_16431__$1);

(statearr_16571[(14)] = inst_16430__$1);

(statearr_16571[(18)] = inst_16447);

(statearr_16571[(16)] = inst_16432__$1);

(statearr_16571[(17)] = inst_16429__$1);

return statearr_16571;
})();
var statearr_16572_16653 = state_16552__$1;
(statearr_16572_16653[(2)] = null);

(statearr_16572_16653[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (21))){
var inst_16474 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
var statearr_16576_16654 = state_16552__$1;
(statearr_16576_16654[(2)] = inst_16474);

(statearr_16576_16654[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (31))){
var inst_16500 = (state_16552[(10)]);
var inst_16504 = done(null);
var inst_16505 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16500);
var state_16552__$1 = (function (){var statearr_16577 = state_16552;
(statearr_16577[(19)] = inst_16504);

return statearr_16577;
})();
var statearr_16578_16655 = state_16552__$1;
(statearr_16578_16655[(2)] = inst_16505);

(statearr_16578_16655[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (32))){
var inst_16492 = (state_16552[(20)]);
var inst_16494 = (state_16552[(21)]);
var inst_16493 = (state_16552[(9)]);
var inst_16495 = (state_16552[(12)]);
var inst_16507 = (state_16552[(2)]);
var inst_16508 = (inst_16495 + (1));
var tmp16573 = inst_16492;
var tmp16574 = inst_16494;
var tmp16575 = inst_16493;
var inst_16492__$1 = tmp16573;
var inst_16493__$1 = tmp16575;
var inst_16494__$1 = tmp16574;
var inst_16495__$1 = inst_16508;
var state_16552__$1 = (function (){var statearr_16579 = state_16552;
(statearr_16579[(20)] = inst_16492__$1);

(statearr_16579[(21)] = inst_16494__$1);

(statearr_16579[(9)] = inst_16493__$1);

(statearr_16579[(22)] = inst_16507);

(statearr_16579[(12)] = inst_16495__$1);

return statearr_16579;
})();
var statearr_16580_16656 = state_16552__$1;
(statearr_16580_16656[(2)] = null);

(statearr_16580_16656[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (40))){
var inst_16520 = (state_16552[(23)]);
var inst_16524 = done(null);
var inst_16525 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16520);
var state_16552__$1 = (function (){var statearr_16581 = state_16552;
(statearr_16581[(24)] = inst_16524);

return statearr_16581;
})();
var statearr_16582_16657 = state_16552__$1;
(statearr_16582_16657[(2)] = inst_16525);

(statearr_16582_16657[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (33))){
var inst_16511 = (state_16552[(25)]);
var inst_16513 = cljs.core.chunked_seq_QMARK_(inst_16511);
var state_16552__$1 = state_16552;
if(inst_16513){
var statearr_16583_16658 = state_16552__$1;
(statearr_16583_16658[(1)] = (36));

} else {
var statearr_16584_16659 = state_16552__$1;
(statearr_16584_16659[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (13))){
var inst_16441 = (state_16552[(26)]);
var inst_16444 = cljs.core.async.close_BANG_(inst_16441);
var state_16552__$1 = state_16552;
var statearr_16585_16660 = state_16552__$1;
(statearr_16585_16660[(2)] = inst_16444);

(statearr_16585_16660[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (22))){
var inst_16464 = (state_16552[(8)]);
var inst_16467 = cljs.core.async.close_BANG_(inst_16464);
var state_16552__$1 = state_16552;
var statearr_16586_16661 = state_16552__$1;
(statearr_16586_16661[(2)] = inst_16467);

(statearr_16586_16661[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (36))){
var inst_16511 = (state_16552[(25)]);
var inst_16515 = cljs.core.chunk_first(inst_16511);
var inst_16516 = cljs.core.chunk_rest(inst_16511);
var inst_16517 = cljs.core.count(inst_16515);
var inst_16492 = inst_16516;
var inst_16493 = inst_16515;
var inst_16494 = inst_16517;
var inst_16495 = (0);
var state_16552__$1 = (function (){var statearr_16587 = state_16552;
(statearr_16587[(20)] = inst_16492);

(statearr_16587[(21)] = inst_16494);

(statearr_16587[(9)] = inst_16493);

(statearr_16587[(12)] = inst_16495);

return statearr_16587;
})();
var statearr_16588_16662 = state_16552__$1;
(statearr_16588_16662[(2)] = null);

(statearr_16588_16662[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (41))){
var inst_16511 = (state_16552[(25)]);
var inst_16527 = (state_16552[(2)]);
var inst_16528 = cljs.core.next(inst_16511);
var inst_16492 = inst_16528;
var inst_16493 = null;
var inst_16494 = (0);
var inst_16495 = (0);
var state_16552__$1 = (function (){var statearr_16589 = state_16552;
(statearr_16589[(20)] = inst_16492);

(statearr_16589[(21)] = inst_16494);

(statearr_16589[(27)] = inst_16527);

(statearr_16589[(9)] = inst_16493);

(statearr_16589[(12)] = inst_16495);

return statearr_16589;
})();
var statearr_16590_16663 = state_16552__$1;
(statearr_16590_16663[(2)] = null);

(statearr_16590_16663[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (43))){
var state_16552__$1 = state_16552;
var statearr_16591_16664 = state_16552__$1;
(statearr_16591_16664[(2)] = null);

(statearr_16591_16664[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (29))){
var inst_16536 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
var statearr_16592_16665 = state_16552__$1;
(statearr_16592_16665[(2)] = inst_16536);

(statearr_16592_16665[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (44))){
var inst_16545 = (state_16552[(2)]);
var state_16552__$1 = (function (){var statearr_16593 = state_16552;
(statearr_16593[(28)] = inst_16545);

return statearr_16593;
})();
var statearr_16594_16666 = state_16552__$1;
(statearr_16594_16666[(2)] = null);

(statearr_16594_16666[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (6))){
var inst_16484 = (state_16552[(29)]);
var inst_16483 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16484__$1 = cljs.core.keys(inst_16483);
var inst_16485 = cljs.core.count(inst_16484__$1);
var inst_16486 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_16485) : cljs.core.reset_BANG_.call(null,dctr,inst_16485));
var inst_16491 = cljs.core.seq(inst_16484__$1);
var inst_16492 = inst_16491;
var inst_16493 = null;
var inst_16494 = (0);
var inst_16495 = (0);
var state_16552__$1 = (function (){var statearr_16595 = state_16552;
(statearr_16595[(20)] = inst_16492);

(statearr_16595[(21)] = inst_16494);

(statearr_16595[(9)] = inst_16493);

(statearr_16595[(30)] = inst_16486);

(statearr_16595[(29)] = inst_16484__$1);

(statearr_16595[(12)] = inst_16495);

return statearr_16595;
})();
var statearr_16596_16667 = state_16552__$1;
(statearr_16596_16667[(2)] = null);

(statearr_16596_16667[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (28))){
var inst_16492 = (state_16552[(20)]);
var inst_16511 = (state_16552[(25)]);
var inst_16511__$1 = cljs.core.seq(inst_16492);
var state_16552__$1 = (function (){var statearr_16597 = state_16552;
(statearr_16597[(25)] = inst_16511__$1);

return statearr_16597;
})();
if(inst_16511__$1){
var statearr_16598_16668 = state_16552__$1;
(statearr_16598_16668[(1)] = (33));

} else {
var statearr_16599_16669 = state_16552__$1;
(statearr_16599_16669[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (25))){
var inst_16494 = (state_16552[(21)]);
var inst_16495 = (state_16552[(12)]);
var inst_16497 = (inst_16495 < inst_16494);
var inst_16498 = inst_16497;
var state_16552__$1 = state_16552;
if(cljs.core.truth_(inst_16498)){
var statearr_16600_16670 = state_16552__$1;
(statearr_16600_16670[(1)] = (27));

} else {
var statearr_16601_16671 = state_16552__$1;
(statearr_16601_16671[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (34))){
var state_16552__$1 = state_16552;
var statearr_16602_16672 = state_16552__$1;
(statearr_16602_16672[(2)] = null);

(statearr_16602_16672[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (17))){
var state_16552__$1 = state_16552;
var statearr_16603_16673 = state_16552__$1;
(statearr_16603_16673[(2)] = null);

(statearr_16603_16673[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (3))){
var inst_16550 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16552__$1,inst_16550);
} else {
if((state_val_16553 === (12))){
var inst_16479 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
var statearr_16604_16674 = state_16552__$1;
(statearr_16604_16674[(2)] = inst_16479);

(statearr_16604_16674[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (2))){
var state_16552__$1 = state_16552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16552__$1,(4),ch);
} else {
if((state_val_16553 === (23))){
var state_16552__$1 = state_16552;
var statearr_16605_16675 = state_16552__$1;
(statearr_16605_16675[(2)] = null);

(statearr_16605_16675[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (35))){
var inst_16534 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
var statearr_16606_16676 = state_16552__$1;
(statearr_16606_16676[(2)] = inst_16534);

(statearr_16606_16676[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (19))){
var inst_16451 = (state_16552[(7)]);
var inst_16455 = cljs.core.chunk_first(inst_16451);
var inst_16456 = cljs.core.chunk_rest(inst_16451);
var inst_16457 = cljs.core.count(inst_16455);
var inst_16429 = inst_16456;
var inst_16430 = inst_16455;
var inst_16431 = inst_16457;
var inst_16432 = (0);
var state_16552__$1 = (function (){var statearr_16607 = state_16552;
(statearr_16607[(13)] = inst_16431);

(statearr_16607[(14)] = inst_16430);

(statearr_16607[(16)] = inst_16432);

(statearr_16607[(17)] = inst_16429);

return statearr_16607;
})();
var statearr_16608_16677 = state_16552__$1;
(statearr_16608_16677[(2)] = null);

(statearr_16608_16677[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (11))){
var inst_16451 = (state_16552[(7)]);
var inst_16429 = (state_16552[(17)]);
var inst_16451__$1 = cljs.core.seq(inst_16429);
var state_16552__$1 = (function (){var statearr_16609 = state_16552;
(statearr_16609[(7)] = inst_16451__$1);

return statearr_16609;
})();
if(inst_16451__$1){
var statearr_16610_16678 = state_16552__$1;
(statearr_16610_16678[(1)] = (16));

} else {
var statearr_16611_16679 = state_16552__$1;
(statearr_16611_16679[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (9))){
var inst_16481 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
var statearr_16612_16680 = state_16552__$1;
(statearr_16612_16680[(2)] = inst_16481);

(statearr_16612_16680[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (5))){
var inst_16427 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16428 = cljs.core.seq(inst_16427);
var inst_16429 = inst_16428;
var inst_16430 = null;
var inst_16431 = (0);
var inst_16432 = (0);
var state_16552__$1 = (function (){var statearr_16613 = state_16552;
(statearr_16613[(13)] = inst_16431);

(statearr_16613[(14)] = inst_16430);

(statearr_16613[(16)] = inst_16432);

(statearr_16613[(17)] = inst_16429);

return statearr_16613;
})();
var statearr_16614_16681 = state_16552__$1;
(statearr_16614_16681[(2)] = null);

(statearr_16614_16681[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (14))){
var state_16552__$1 = state_16552;
var statearr_16615_16682 = state_16552__$1;
(statearr_16615_16682[(2)] = null);

(statearr_16615_16682[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (45))){
var inst_16542 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
var statearr_16616_16683 = state_16552__$1;
(statearr_16616_16683[(2)] = inst_16542);

(statearr_16616_16683[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (26))){
var inst_16484 = (state_16552[(29)]);
var inst_16538 = (state_16552[(2)]);
var inst_16539 = cljs.core.seq(inst_16484);
var state_16552__$1 = (function (){var statearr_16617 = state_16552;
(statearr_16617[(31)] = inst_16538);

return statearr_16617;
})();
if(inst_16539){
var statearr_16618_16684 = state_16552__$1;
(statearr_16618_16684[(1)] = (42));

} else {
var statearr_16619_16685 = state_16552__$1;
(statearr_16619_16685[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (16))){
var inst_16451 = (state_16552[(7)]);
var inst_16453 = cljs.core.chunked_seq_QMARK_(inst_16451);
var state_16552__$1 = state_16552;
if(inst_16453){
var statearr_16620_16686 = state_16552__$1;
(statearr_16620_16686[(1)] = (19));

} else {
var statearr_16621_16687 = state_16552__$1;
(statearr_16621_16687[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (38))){
var inst_16531 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
var statearr_16622_16688 = state_16552__$1;
(statearr_16622_16688[(2)] = inst_16531);

(statearr_16622_16688[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (30))){
var state_16552__$1 = state_16552;
var statearr_16623_16689 = state_16552__$1;
(statearr_16623_16689[(2)] = null);

(statearr_16623_16689[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (10))){
var inst_16430 = (state_16552[(14)]);
var inst_16432 = (state_16552[(16)]);
var inst_16440 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16430,inst_16432);
var inst_16441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16440,(0),null);
var inst_16442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16440,(1),null);
var state_16552__$1 = (function (){var statearr_16624 = state_16552;
(statearr_16624[(26)] = inst_16441);

return statearr_16624;
})();
if(cljs.core.truth_(inst_16442)){
var statearr_16625_16690 = state_16552__$1;
(statearr_16625_16690[(1)] = (13));

} else {
var statearr_16626_16691 = state_16552__$1;
(statearr_16626_16691[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (18))){
var inst_16477 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
var statearr_16627_16692 = state_16552__$1;
(statearr_16627_16692[(2)] = inst_16477);

(statearr_16627_16692[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (42))){
var state_16552__$1 = state_16552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16552__$1,(45),dchan);
} else {
if((state_val_16553 === (37))){
var inst_16511 = (state_16552[(25)]);
var inst_16420 = (state_16552[(11)]);
var inst_16520 = (state_16552[(23)]);
var inst_16520__$1 = cljs.core.first(inst_16511);
var inst_16521 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16520__$1,inst_16420,done);
var state_16552__$1 = (function (){var statearr_16628 = state_16552;
(statearr_16628[(23)] = inst_16520__$1);

return statearr_16628;
})();
if(cljs.core.truth_(inst_16521)){
var statearr_16629_16693 = state_16552__$1;
(statearr_16629_16693[(1)] = (39));

} else {
var statearr_16630_16694 = state_16552__$1;
(statearr_16630_16694[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (8))){
var inst_16431 = (state_16552[(13)]);
var inst_16432 = (state_16552[(16)]);
var inst_16434 = (inst_16432 < inst_16431);
var inst_16435 = inst_16434;
var state_16552__$1 = state_16552;
if(cljs.core.truth_(inst_16435)){
var statearr_16631_16695 = state_16552__$1;
(statearr_16631_16695[(1)] = (10));

} else {
var statearr_16632_16696 = state_16552__$1;
(statearr_16632_16696[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15344__auto___16642,cs,m,dchan,dctr,done))
;
return ((function (switch__15220__auto__,c__15344__auto___16642,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15221__auto__ = null;
var cljs$core$async$mult_$_state_machine__15221__auto____0 = (function (){
var statearr_16636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16636[(0)] = cljs$core$async$mult_$_state_machine__15221__auto__);

(statearr_16636[(1)] = (1));

return statearr_16636;
});
var cljs$core$async$mult_$_state_machine__15221__auto____1 = (function (state_16552){
while(true){
var ret_value__15222__auto__ = (function (){try{while(true){
var result__15223__auto__ = switch__15220__auto__(state_16552);
if(cljs.core.keyword_identical_QMARK_(result__15223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15223__auto__;
}
break;
}
}catch (e16637){if((e16637 instanceof Object)){
var ex__15224__auto__ = e16637;
var statearr_16638_16697 = state_16552;
(statearr_16638_16697[(5)] = ex__15224__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16552);

return cljs.core.cst$kw$recur;
} else {
throw e16637;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15222__auto__,cljs.core.cst$kw$recur)){
var G__16698 = state_16552;
state_16552 = G__16698;
continue;
} else {
return ret_value__15222__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15221__auto__ = function(state_16552){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15221__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15221__auto____1.call(this,state_16552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15221__auto____0;
cljs$core$async$mult_$_state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15221__auto____1;
return cljs$core$async$mult_$_state_machine__15221__auto__;
})()
;})(switch__15220__auto__,c__15344__auto___16642,cs,m,dchan,dctr,done))
})();
var state__15346__auto__ = (function (){var statearr_16639 = (f__15345__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15345__auto__.cljs$core$IFn$_invoke$arity$0() : f__15345__auto__.call(null));
(statearr_16639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15344__auto___16642);

return statearr_16639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15346__auto__);
});})(c__15344__auto___16642,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args16699 = [];
var len__7924__auto___16702 = arguments.length;
var i__7925__auto___16703 = (0);
while(true){
if((i__7925__auto___16703 < len__7924__auto___16702)){
args16699.push((arguments[i__7925__auto___16703]));

var G__16704 = (i__7925__auto___16703 + (1));
i__7925__auto___16703 = G__16704;
continue;
} else {
}
break;
}

var G__16701 = args16699.length;
switch (G__16701) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16699.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7479__auto__ = (((m == null))?null:m);
var m__7480__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7480__auto__.call(null,m,ch));
} else {
var m__7480__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7480__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7479__auto__ = (((m == null))?null:m);
var m__7480__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7480__auto__.call(null,m,ch));
} else {
var m__7480__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7480__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7479__auto__ = (((m == null))?null:m);
var m__7480__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7480__auto__.call(null,m));
} else {
var m__7480__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7480__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7479__auto__ = (((m == null))?null:m);
var m__7480__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7480__auto__.call(null,m,state_map));
} else {
var m__7480__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7480__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7479__auto__ = (((m == null))?null:m);
var m__7480__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7480__auto__.call(null,m,mode));
} else {
var m__7480__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7480__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7931__auto__ = [];
var len__7924__auto___16716 = arguments.length;
var i__7925__auto___16717 = (0);
while(true){
if((i__7925__auto___16717 < len__7924__auto___16716)){
args__7931__auto__.push((arguments[i__7925__auto___16717]));

var G__16718 = (i__7925__auto___16717 + (1));
i__7925__auto___16717 = G__16718;
continue;
} else {
}
break;
}

var argseq__7932__auto__ = ((((3) < args__7931__auto__.length))?(new cljs.core.IndexedSeq(args__7931__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7932__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16710){
var map__16711 = p__16710;
var map__16711__$1 = ((((!((map__16711 == null)))?((((map__16711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16711.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16711):map__16711);
var opts = map__16711__$1;
var statearr_16713_16719 = state;
(statearr_16713_16719[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__16711,map__16711__$1,opts){
return (function (val){
var statearr_16714_16720 = state;
(statearr_16714_16720[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__16711,map__16711__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_16715_16721 = state;
(statearr_16715_16721[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16706){
var G__16707 = cljs.core.first(seq16706);
var seq16706__$1 = cljs.core.next(seq16706);
var G__16708 = cljs.core.first(seq16706__$1);
var seq16706__$2 = cljs.core.next(seq16706__$1);
var G__16709 = cljs.core.first(seq16706__$2);
var seq16706__$3 = cljs.core.next(seq16706__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16707,G__16708,G__16709,seq16706__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__16893 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16893) : cljs.core.atom.call(null,G__16893));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__16894 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16894) : cljs.core.atom.call(null,G__16894));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16895 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16895 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta16896){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta16896 = meta16896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16897,meta16896__$1){
var self__ = this;
var _16897__$1 = this;
return (new cljs.core.async.t_cljs$core$async16895(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta16896__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16895.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16897){
var self__ = this;
var _16897__$1 = this;
return self__.meta16896;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16895.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16895.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16895.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16895.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16895.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16895.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16898_17064 = self__.cs;
var G__16899_17065 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16898_17064,G__16899_17065) : cljs.core.reset_BANG_.call(null,G__16898_17064,G__16899_17065));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16895.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16895.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16895.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta16896], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16895.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16895.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16895";

cljs.core.async.t_cljs$core$async16895.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7422__auto__,writer__7423__auto__,opt__7424__auto__){
return cljs.core._write(writer__7423__auto__,"cljs.core.async/t_cljs$core$async16895");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async16895 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16895(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16896){
return (new cljs.core.async.t_cljs$core$async16895(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16896));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16895(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15344__auto___17066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15344__auto___17066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15345__auto__ = (function (){var switch__15220__auto__ = ((function (c__15344__auto___17066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17001){
var state_val_17002 = (state_17001[(1)]);
if((state_val_17002 === (7))){
var inst_16916 = (state_17001[(2)]);
var state_17001__$1 = state_17001;
var statearr_17003_17067 = state_17001__$1;
(statearr_17003_17067[(2)] = inst_16916);

(statearr_17003_17067[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (20))){
var inst_16928 = (state_17001[(7)]);
var state_17001__$1 = state_17001;
var statearr_17004_17068 = state_17001__$1;
(statearr_17004_17068[(2)] = inst_16928);

(statearr_17004_17068[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (27))){
var state_17001__$1 = state_17001;
var statearr_17005_17069 = state_17001__$1;
(statearr_17005_17069[(2)] = null);

(statearr_17005_17069[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (1))){
var inst_16903 = (state_17001[(8)]);
var inst_16903__$1 = calc_state();
var inst_16905 = (inst_16903__$1 == null);
var inst_16906 = cljs.core.not(inst_16905);
var state_17001__$1 = (function (){var statearr_17006 = state_17001;
(statearr_17006[(8)] = inst_16903__$1);

return statearr_17006;
})();
if(inst_16906){
var statearr_17007_17070 = state_17001__$1;
(statearr_17007_17070[(1)] = (2));

} else {
var statearr_17008_17071 = state_17001__$1;
(statearr_17008_17071[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (24))){
var inst_16961 = (state_17001[(9)]);
var inst_16952 = (state_17001[(10)]);
var inst_16975 = (state_17001[(11)]);
var inst_16975__$1 = (inst_16952.cljs$core$IFn$_invoke$arity$1 ? inst_16952.cljs$core$IFn$_invoke$arity$1(inst_16961) : inst_16952.call(null,inst_16961));
var state_17001__$1 = (function (){var statearr_17009 = state_17001;
(statearr_17009[(11)] = inst_16975__$1);

return statearr_17009;
})();
if(cljs.core.truth_(inst_16975__$1)){
var statearr_17010_17072 = state_17001__$1;
(statearr_17010_17072[(1)] = (29));

} else {
var statearr_17011_17073 = state_17001__$1;
(statearr_17011_17073[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (4))){
var inst_16919 = (state_17001[(2)]);
var state_17001__$1 = state_17001;
if(cljs.core.truth_(inst_16919)){
var statearr_17012_17074 = state_17001__$1;
(statearr_17012_17074[(1)] = (8));

} else {
var statearr_17013_17075 = state_17001__$1;
(statearr_17013_17075[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (15))){
var inst_16946 = (state_17001[(2)]);
var state_17001__$1 = state_17001;
if(cljs.core.truth_(inst_16946)){
var statearr_17014_17076 = state_17001__$1;
(statearr_17014_17076[(1)] = (19));

} else {
var statearr_17015_17077 = state_17001__$1;
(statearr_17015_17077[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (21))){
var inst_16951 = (state_17001[(12)]);
var inst_16951__$1 = (state_17001[(2)]);
var inst_16952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16951__$1,cljs.core.cst$kw$solos);
var inst_16953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16951__$1,cljs.core.cst$kw$mutes);
var inst_16954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16951__$1,cljs.core.cst$kw$reads);
var state_17001__$1 = (function (){var statearr_17016 = state_17001;
(statearr_17016[(12)] = inst_16951__$1);

(statearr_17016[(13)] = inst_16953);

(statearr_17016[(10)] = inst_16952);

return statearr_17016;
})();
return cljs.core.async.ioc_alts_BANG_(state_17001__$1,(22),inst_16954);
} else {
if((state_val_17002 === (31))){
var inst_16983 = (state_17001[(2)]);
var state_17001__$1 = state_17001;
if(cljs.core.truth_(inst_16983)){
var statearr_17017_17078 = state_17001__$1;
(statearr_17017_17078[(1)] = (32));

} else {
var statearr_17018_17079 = state_17001__$1;
(statearr_17018_17079[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (32))){
var inst_16960 = (state_17001[(14)]);
var state_17001__$1 = state_17001;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17001__$1,(35),out,inst_16960);
} else {
if((state_val_17002 === (33))){
var inst_16951 = (state_17001[(12)]);
var inst_16928 = inst_16951;
var state_17001__$1 = (function (){var statearr_17019 = state_17001;
(statearr_17019[(7)] = inst_16928);

return statearr_17019;
})();
var statearr_17020_17080 = state_17001__$1;
(statearr_17020_17080[(2)] = null);

(statearr_17020_17080[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (13))){
var inst_16928 = (state_17001[(7)]);
var inst_16935 = inst_16928.cljs$lang$protocol_mask$partition0$;
var inst_16936 = (inst_16935 & (64));
var inst_16937 = inst_16928.cljs$core$ISeq$;
var inst_16938 = (cljs.core.PROTOCOL_SENTINEL === inst_16937);
var inst_16939 = (inst_16936) || (inst_16938);
var state_17001__$1 = state_17001;
if(cljs.core.truth_(inst_16939)){
var statearr_17021_17081 = state_17001__$1;
(statearr_17021_17081[(1)] = (16));

} else {
var statearr_17022_17082 = state_17001__$1;
(statearr_17022_17082[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (22))){
var inst_16961 = (state_17001[(9)]);
var inst_16960 = (state_17001[(14)]);
var inst_16959 = (state_17001[(2)]);
var inst_16960__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16959,(0),null);
var inst_16961__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16959,(1),null);
var inst_16962 = (inst_16960__$1 == null);
var inst_16963 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16961__$1,change);
var inst_16964 = (inst_16962) || (inst_16963);
var state_17001__$1 = (function (){var statearr_17023 = state_17001;
(statearr_17023[(9)] = inst_16961__$1);

(statearr_17023[(14)] = inst_16960__$1);

return statearr_17023;
})();
if(cljs.core.truth_(inst_16964)){
var statearr_17024_17083 = state_17001__$1;
(statearr_17024_17083[(1)] = (23));

} else {
var statearr_17025_17084 = state_17001__$1;
(statearr_17025_17084[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (36))){
var inst_16951 = (state_17001[(12)]);
var inst_16928 = inst_16951;
var state_17001__$1 = (function (){var statearr_17026 = state_17001;
(statearr_17026[(7)] = inst_16928);

return statearr_17026;
})();
var statearr_17027_17085 = state_17001__$1;
(statearr_17027_17085[(2)] = null);

(statearr_17027_17085[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (29))){
var inst_16975 = (state_17001[(11)]);
var state_17001__$1 = state_17001;
var statearr_17028_17086 = state_17001__$1;
(statearr_17028_17086[(2)] = inst_16975);

(statearr_17028_17086[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (6))){
var state_17001__$1 = state_17001;
var statearr_17029_17087 = state_17001__$1;
(statearr_17029_17087[(2)] = false);

(statearr_17029_17087[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (28))){
var inst_16971 = (state_17001[(2)]);
var inst_16972 = calc_state();
var inst_16928 = inst_16972;
var state_17001__$1 = (function (){var statearr_17030 = state_17001;
(statearr_17030[(7)] = inst_16928);

(statearr_17030[(15)] = inst_16971);

return statearr_17030;
})();
var statearr_17031_17088 = state_17001__$1;
(statearr_17031_17088[(2)] = null);

(statearr_17031_17088[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (25))){
var inst_16997 = (state_17001[(2)]);
var state_17001__$1 = state_17001;
var statearr_17032_17089 = state_17001__$1;
(statearr_17032_17089[(2)] = inst_16997);

(statearr_17032_17089[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (34))){
var inst_16995 = (state_17001[(2)]);
var state_17001__$1 = state_17001;
var statearr_17033_17090 = state_17001__$1;
(statearr_17033_17090[(2)] = inst_16995);

(statearr_17033_17090[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (17))){
var state_17001__$1 = state_17001;
var statearr_17034_17091 = state_17001__$1;
(statearr_17034_17091[(2)] = false);

(statearr_17034_17091[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (3))){
var state_17001__$1 = state_17001;
var statearr_17035_17092 = state_17001__$1;
(statearr_17035_17092[(2)] = false);

(statearr_17035_17092[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (12))){
var inst_16999 = (state_17001[(2)]);
var state_17001__$1 = state_17001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17001__$1,inst_16999);
} else {
if((state_val_17002 === (2))){
var inst_16903 = (state_17001[(8)]);
var inst_16908 = inst_16903.cljs$lang$protocol_mask$partition0$;
var inst_16909 = (inst_16908 & (64));
var inst_16910 = inst_16903.cljs$core$ISeq$;
var inst_16911 = (cljs.core.PROTOCOL_SENTINEL === inst_16910);
var inst_16912 = (inst_16909) || (inst_16911);
var state_17001__$1 = state_17001;
if(cljs.core.truth_(inst_16912)){
var statearr_17036_17093 = state_17001__$1;
(statearr_17036_17093[(1)] = (5));

} else {
var statearr_17037_17094 = state_17001__$1;
(statearr_17037_17094[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (23))){
var inst_16960 = (state_17001[(14)]);
var inst_16966 = (inst_16960 == null);
var state_17001__$1 = state_17001;
if(cljs.core.truth_(inst_16966)){
var statearr_17038_17095 = state_17001__$1;
(statearr_17038_17095[(1)] = (26));

} else {
var statearr_17039_17096 = state_17001__$1;
(statearr_17039_17096[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (35))){
var inst_16986 = (state_17001[(2)]);
var state_17001__$1 = state_17001;
if(cljs.core.truth_(inst_16986)){
var statearr_17040_17097 = state_17001__$1;
(statearr_17040_17097[(1)] = (36));

} else {
var statearr_17041_17098 = state_17001__$1;
(statearr_17041_17098[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (19))){
var inst_16928 = (state_17001[(7)]);
var inst_16948 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16928);
var state_17001__$1 = state_17001;
var statearr_17042_17099 = state_17001__$1;
(statearr_17042_17099[(2)] = inst_16948);

(statearr_17042_17099[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (11))){
var inst_16928 = (state_17001[(7)]);
var inst_16932 = (inst_16928 == null);
var inst_16933 = cljs.core.not(inst_16932);
var state_17001__$1 = state_17001;
if(inst_16933){
var statearr_17043_17100 = state_17001__$1;
(statearr_17043_17100[(1)] = (13));

} else {
var statearr_17044_17101 = state_17001__$1;
(statearr_17044_17101[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (9))){
var inst_16903 = (state_17001[(8)]);
var state_17001__$1 = state_17001;
var statearr_17045_17102 = state_17001__$1;
(statearr_17045_17102[(2)] = inst_16903);

(statearr_17045_17102[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (5))){
var state_17001__$1 = state_17001;
var statearr_17046_17103 = state_17001__$1;
(statearr_17046_17103[(2)] = true);

(statearr_17046_17103[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (14))){
var state_17001__$1 = state_17001;
var statearr_17047_17104 = state_17001__$1;
(statearr_17047_17104[(2)] = false);

(statearr_17047_17104[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (26))){
var inst_16961 = (state_17001[(9)]);
var inst_16968 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16961);
var state_17001__$1 = state_17001;
var statearr_17048_17105 = state_17001__$1;
(statearr_17048_17105[(2)] = inst_16968);

(statearr_17048_17105[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (16))){
var state_17001__$1 = state_17001;
var statearr_17049_17106 = state_17001__$1;
(statearr_17049_17106[(2)] = true);

(statearr_17049_17106[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (38))){
var inst_16991 = (state_17001[(2)]);
var state_17001__$1 = state_17001;
var statearr_17050_17107 = state_17001__$1;
(statearr_17050_17107[(2)] = inst_16991);

(statearr_17050_17107[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (30))){
var inst_16961 = (state_17001[(9)]);
var inst_16953 = (state_17001[(13)]);
var inst_16952 = (state_17001[(10)]);
var inst_16978 = cljs.core.empty_QMARK_(inst_16952);
var inst_16979 = (inst_16953.cljs$core$IFn$_invoke$arity$1 ? inst_16953.cljs$core$IFn$_invoke$arity$1(inst_16961) : inst_16953.call(null,inst_16961));
var inst_16980 = cljs.core.not(inst_16979);
var inst_16981 = (inst_16978) && (inst_16980);
var state_17001__$1 = state_17001;
var statearr_17051_17108 = state_17001__$1;
(statearr_17051_17108[(2)] = inst_16981);

(statearr_17051_17108[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (10))){
var inst_16903 = (state_17001[(8)]);
var inst_16924 = (state_17001[(2)]);
var inst_16925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16924,cljs.core.cst$kw$solos);
var inst_16926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16924,cljs.core.cst$kw$mutes);
var inst_16927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16924,cljs.core.cst$kw$reads);
var inst_16928 = inst_16903;
var state_17001__$1 = (function (){var statearr_17052 = state_17001;
(statearr_17052[(7)] = inst_16928);

(statearr_17052[(16)] = inst_16926);

(statearr_17052[(17)] = inst_16927);

(statearr_17052[(18)] = inst_16925);

return statearr_17052;
})();
var statearr_17053_17109 = state_17001__$1;
(statearr_17053_17109[(2)] = null);

(statearr_17053_17109[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (18))){
var inst_16943 = (state_17001[(2)]);
var state_17001__$1 = state_17001;
var statearr_17054_17110 = state_17001__$1;
(statearr_17054_17110[(2)] = inst_16943);

(statearr_17054_17110[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (37))){
var state_17001__$1 = state_17001;
var statearr_17055_17111 = state_17001__$1;
(statearr_17055_17111[(2)] = null);

(statearr_17055_17111[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17002 === (8))){
var inst_16903 = (state_17001[(8)]);
var inst_16921 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16903);
var state_17001__$1 = state_17001;
var statearr_17056_17112 = state_17001__$1;
(statearr_17056_17112[(2)] = inst_16921);

(statearr_17056_17112[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15344__auto___17066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15220__auto__,c__15344__auto___17066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15221__auto__ = null;
var cljs$core$async$mix_$_state_machine__15221__auto____0 = (function (){
var statearr_17060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17060[(0)] = cljs$core$async$mix_$_state_machine__15221__auto__);

(statearr_17060[(1)] = (1));

return statearr_17060;
});
var cljs$core$async$mix_$_state_machine__15221__auto____1 = (function (state_17001){
while(true){
var ret_value__15222__auto__ = (function (){try{while(true){
var result__15223__auto__ = switch__15220__auto__(state_17001);
if(cljs.core.keyword_identical_QMARK_(result__15223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15223__auto__;
}
break;
}
}catch (e17061){if((e17061 instanceof Object)){
var ex__15224__auto__ = e17061;
var statearr_17062_17113 = state_17001;
(statearr_17062_17113[(5)] = ex__15224__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17001);

return cljs.core.cst$kw$recur;
} else {
throw e17061;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15222__auto__,cljs.core.cst$kw$recur)){
var G__17114 = state_17001;
state_17001 = G__17114;
continue;
} else {
return ret_value__15222__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15221__auto__ = function(state_17001){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15221__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15221__auto____1.call(this,state_17001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15221__auto____0;
cljs$core$async$mix_$_state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15221__auto____1;
return cljs$core$async$mix_$_state_machine__15221__auto__;
})()
;})(switch__15220__auto__,c__15344__auto___17066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15346__auto__ = (function (){var statearr_17063 = (f__15345__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15345__auto__.cljs$core$IFn$_invoke$arity$0() : f__15345__auto__.call(null));
(statearr_17063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15344__auto___17066);

return statearr_17063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15346__auto__);
});})(c__15344__auto___17066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7479__auto__ = (((p == null))?null:p);
var m__7480__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7480__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__7480__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7480__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7479__auto__ = (((p == null))?null:p);
var m__7480__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7480__auto__.call(null,p,v,ch));
} else {
var m__7480__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7480__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args17115 = [];
var len__7924__auto___17118 = arguments.length;
var i__7925__auto___17119 = (0);
while(true){
if((i__7925__auto___17119 < len__7924__auto___17118)){
args17115.push((arguments[i__7925__auto___17119]));

var G__17120 = (i__7925__auto___17119 + (1));
i__7925__auto___17119 = G__17120;
continue;
} else {
}
break;
}

var G__17117 = args17115.length;
switch (G__17117) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17115.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7479__auto__ = (((p == null))?null:p);
var m__7480__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__7480__auto__.call(null,p));
} else {
var m__7480__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__7480__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7479__auto__ = (((p == null))?null:p);
var m__7480__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__7480__auto__.call(null,p,v));
} else {
var m__7480__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__7480__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args17123 = [];
var len__7924__auto___17251 = arguments.length;
var i__7925__auto___17252 = (0);
while(true){
if((i__7925__auto___17252 < len__7924__auto___17251)){
args17123.push((arguments[i__7925__auto___17252]));

var G__17253 = (i__7925__auto___17252 + (1));
i__7925__auto___17252 = G__17253;
continue;
} else {
}
break;
}

var G__17125 = args17123.length;
switch (G__17125) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17123.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__17126 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17126) : cljs.core.atom.call(null,G__17126));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6811__auto__)){
return or__6811__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6811__auto__,mults){
return (function (p1__17122_SHARP_){
if(cljs.core.truth_((p1__17122_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17122_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17122_SHARP_.call(null,topic)))){
return p1__17122_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17122_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6811__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17127 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17127 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17128){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17128 = meta17128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17129,meta17128__$1){
var self__ = this;
var _17129__$1 = this;
return (new cljs.core.async.t_cljs$core$async17127(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17128__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17129){
var self__ = this;
var _17129__$1 = this;
return self__.meta17128;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17130 = self__.mults;
var G__17131 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17130,G__17131) : cljs.core.reset_BANG_.call(null,G__17130,G__17131));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17127.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17128], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17127";

cljs.core.async.t_cljs$core$async17127.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7422__auto__,writer__7423__auto__,opt__7424__auto__){
return cljs.core._write(writer__7423__auto__,"cljs.core.async/t_cljs$core$async17127");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async17127 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17127(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17128){
return (new cljs.core.async.t_cljs$core$async17127(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17128));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17127(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15344__auto___17255 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15344__auto___17255,mults,ensure_mult,p){
return (function (){
var f__15345__auto__ = (function (){var switch__15220__auto__ = ((function (c__15344__auto___17255,mults,ensure_mult,p){
return (function (state_17203){
var state_val_17204 = (state_17203[(1)]);
if((state_val_17204 === (7))){
var inst_17199 = (state_17203[(2)]);
var state_17203__$1 = state_17203;
var statearr_17205_17256 = state_17203__$1;
(statearr_17205_17256[(2)] = inst_17199);

(statearr_17205_17256[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17204 === (20))){
var state_17203__$1 = state_17203;
var statearr_17206_17257 = state_17203__$1;
(statearr_17206_17257[(2)] = null);

(statearr_17206_17257[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17204 === (1))){
var state_17203__$1 = state_17203;
var statearr_17207_17258 = state_17203__$1;
(statearr_17207_17258[(2)] = null);

(statearr_17207_17258[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17204 === (24))){
var inst_17182 = (state_17203[(7)]);
var inst_17191 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17182);
var state_17203__$1 = state_17203;
var statearr_17208_17259 = state_17203__$1;
(statearr_17208_17259[(2)] = inst_17191);

(statearr_17208_17259[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17204 === (4))){
var inst_17134 = (state_17203[(8)]);
var inst_17134__$1 = (state_17203[(2)]);
var inst_17135 = (inst_17134__$1 == null);
var state_17203__$1 = (function (){var statearr_17209 = state_17203;
(statearr_17209[(8)] = inst_17134__$1);

return statearr_17209;
})();
if(cljs.core.truth_(inst_17135)){
var statearr_17210_17260 = state_17203__$1;
(statearr_17210_17260[(1)] = (5));

} else {
var statearr_17211_17261 = state_17203__$1;
(statearr_17211_17261[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17204 === (15))){
var inst_17176 = (state_17203[(2)]);
var state_17203__$1 = state_17203;
var statearr_17212_17262 = state_17203__$1;
(statearr_17212_17262[(2)] = inst_17176);

(statearr_17212_17262[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17204 === (21))){
var inst_17196 = (state_17203[(2)]);
var state_17203__$1 = (function (){var statearr_17213 = state_17203;
(statearr_17213[(9)] = inst_17196);

return statearr_17213;
})();
var statearr_17214_17263 = state_17203__$1;
(statearr_17214_17263[(2)] = null);

(statearr_17214_17263[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17204 === (13))){
var inst_17158 = (state_17203[(10)]);
var inst_17160 = cljs.core.chunked_seq_QMARK_(inst_17158);
var state_17203__$1 = state_17203;
if(inst_17160){
var statearr_17215_17264 = state_17203__$1;
(statearr_17215_17264[(1)] = (16));

} else {
var statearr_17216_17265 = state_17203__$1;
(statearr_17216_17265[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17204 === (22))){
var inst_17188 = (state_17203[(2)]);
var state_17203__$1 = state_17203;
if(cljs.core.truth_(inst_17188)){
var statearr_17217_17266 = state_17203__$1;
(statearr_17217_17266[(1)] = (23));

} else {
var statearr_17218_17267 = state_17203__$1;
(statearr_17218_17267[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17204 === (6))){
var inst_17134 = (state_17203[(8)]);
var inst_17184 = (state_17203[(11)]);
var inst_17182 = (state_17203[(7)]);
var inst_17182__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17134) : topic_fn.call(null,inst_17134));
var inst_17183 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17184__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17183,inst_17182__$1);
var state_17203__$1 = (function (){var statearr_17219 = state_17203;
(statearr_17219[(11)] = inst_17184__$1);

(statearr_17219[(7)] = inst_17182__$1);

return statearr_17219;
})();
if(cljs.core.truth_(inst_17184__$1)){
var statearr_17220_17268 = state_17203__$1;
(statearr_17220_17268[(1)] = (19));

} else {
var statearr_17221_17269 = state_17203__$1;
(statearr_17221_17269[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17204 === (25))){
var inst_17193 = (state_17203[(2)]);
var state_17203__$1 = state_17203;
var statearr_17222_17270 = state_17203__$1;
(statearr_17222_17270[(2)] = inst_17193);

(statearr_17222_17270[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17204 === (17))){
var inst_17158 = (state_17203[(10)]);
var inst_17167 = cljs.core.first(inst_17158);
var inst_17168 = cljs.core.async.muxch_STAR_(inst_17167);
var inst_17169 = cljs.core.async.close_BANG_(inst_17168);
var inst_17170 = cljs.core.next(inst_17158);
var inst_17144 = inst_17170;
var inst_17145 = null;
var inst_17146 = (0);
var inst_17147 = (0);
var state_17203__$1 = (function (){var statearr_17223 = state_17203;
(statearr_17223[(12)] = inst_17147);

(statearr_17223[(13)] = inst_17169);

(statearr_17223[(14)] = inst_17146);

(statearr_17223[(15)] = inst_17145);

(statearr_17223[(16)] = inst_17144);

return statearr_17223;
})();
var statearr_17224_17271 = state_17203__$1;
(statearr_17224_17271[(2)] = null);

(statearr_17224_17271[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17204 === (3))){
var inst_17201 = (state_17203[(2)]);
var state_17203__$1 = state_17203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17203__$1,inst_17201);
} else {
if((state_val_17204 === (12))){
var inst_17178 = (state_17203[(2)]);
var state_17203__$1 = state_17203;
var statearr_17225_17272 = state_17203__$1;
(statearr_17225_17272[(2)] = inst_17178);

(statearr_17225_17272[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17204 === (2))){
var state_17203__$1 = state_17203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17203__$1,(4),ch);
} else {
if((state_val_17204 === (23))){
var state_17203__$1 = state_17203;
var statearr_17226_17273 = state_17203__$1;
(statearr_17226_17273[(2)] = null);

(statearr_17226_17273[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17204 === (19))){
var inst_17134 = (state_17203[(8)]);
var inst_17184 = (state_17203[(11)]);
var inst_17186 = cljs.core.async.muxch_STAR_(inst_17184);
var state_17203__$1 = state_17203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17203__$1,(22),inst_17186,inst_17134);
} else {
if((state_val_17204 === (11))){
var inst_17144 = (state_17203[(16)]);
var inst_17158 = (state_17203[(10)]);
var inst_17158__$1 = cljs.core.seq(inst_17144);
var state_17203__$1 = (function (){var statearr_17227 = state_17203;
(statearr_17227[(10)] = inst_17158__$1);

return statearr_17227;
})();
if(inst_17158__$1){
var statearr_17228_17274 = state_17203__$1;
(statearr_17228_17274[(1)] = (13));

} else {
var statearr_17229_17275 = state_17203__$1;
(statearr_17229_17275[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17204 === (9))){
var inst_17180 = (state_17203[(2)]);
var state_17203__$1 = state_17203;
var statearr_17230_17276 = state_17203__$1;
(statearr_17230_17276[(2)] = inst_17180);

(statearr_17230_17276[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17204 === (5))){
var inst_17141 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17142 = cljs.core.vals(inst_17141);
var inst_17143 = cljs.core.seq(inst_17142);
var inst_17144 = inst_17143;
var inst_17145 = null;
var inst_17146 = (0);
var inst_17147 = (0);
var state_17203__$1 = (function (){var statearr_17231 = state_17203;
(statearr_17231[(12)] = inst_17147);

(statearr_17231[(14)] = inst_17146);

(statearr_17231[(15)] = inst_17145);

(statearr_17231[(16)] = inst_17144);

return statearr_17231;
})();
var statearr_17232_17277 = state_17203__$1;
(statearr_17232_17277[(2)] = null);

(statearr_17232_17277[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17204 === (14))){
var state_17203__$1 = state_17203;
var statearr_17236_17278 = state_17203__$1;
(statearr_17236_17278[(2)] = null);

(statearr_17236_17278[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17204 === (16))){
var inst_17158 = (state_17203[(10)]);
var inst_17162 = cljs.core.chunk_first(inst_17158);
var inst_17163 = cljs.core.chunk_rest(inst_17158);
var inst_17164 = cljs.core.count(inst_17162);
var inst_17144 = inst_17163;
var inst_17145 = inst_17162;
var inst_17146 = inst_17164;
var inst_17147 = (0);
var state_17203__$1 = (function (){var statearr_17237 = state_17203;
(statearr_17237[(12)] = inst_17147);

(statearr_17237[(14)] = inst_17146);

(statearr_17237[(15)] = inst_17145);

(statearr_17237[(16)] = inst_17144);

return statearr_17237;
})();
var statearr_17238_17279 = state_17203__$1;
(statearr_17238_17279[(2)] = null);

(statearr_17238_17279[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17204 === (10))){
var inst_17147 = (state_17203[(12)]);
var inst_17146 = (state_17203[(14)]);
var inst_17145 = (state_17203[(15)]);
var inst_17144 = (state_17203[(16)]);
var inst_17152 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17145,inst_17147);
var inst_17153 = cljs.core.async.muxch_STAR_(inst_17152);
var inst_17154 = cljs.core.async.close_BANG_(inst_17153);
var inst_17155 = (inst_17147 + (1));
var tmp17233 = inst_17146;
var tmp17234 = inst_17145;
var tmp17235 = inst_17144;
var inst_17144__$1 = tmp17235;
var inst_17145__$1 = tmp17234;
var inst_17146__$1 = tmp17233;
var inst_17147__$1 = inst_17155;
var state_17203__$1 = (function (){var statearr_17239 = state_17203;
(statearr_17239[(12)] = inst_17147__$1);

(statearr_17239[(14)] = inst_17146__$1);

(statearr_17239[(15)] = inst_17145__$1);

(statearr_17239[(16)] = inst_17144__$1);

(statearr_17239[(17)] = inst_17154);

return statearr_17239;
})();
var statearr_17240_17280 = state_17203__$1;
(statearr_17240_17280[(2)] = null);

(statearr_17240_17280[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17204 === (18))){
var inst_17173 = (state_17203[(2)]);
var state_17203__$1 = state_17203;
var statearr_17241_17281 = state_17203__$1;
(statearr_17241_17281[(2)] = inst_17173);

(statearr_17241_17281[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17204 === (8))){
var inst_17147 = (state_17203[(12)]);
var inst_17146 = (state_17203[(14)]);
var inst_17149 = (inst_17147 < inst_17146);
var inst_17150 = inst_17149;
var state_17203__$1 = state_17203;
if(cljs.core.truth_(inst_17150)){
var statearr_17242_17282 = state_17203__$1;
(statearr_17242_17282[(1)] = (10));

} else {
var statearr_17243_17283 = state_17203__$1;
(statearr_17243_17283[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15344__auto___17255,mults,ensure_mult,p))
;
return ((function (switch__15220__auto__,c__15344__auto___17255,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15221__auto__ = null;
var cljs$core$async$state_machine__15221__auto____0 = (function (){
var statearr_17247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17247[(0)] = cljs$core$async$state_machine__15221__auto__);

(statearr_17247[(1)] = (1));

return statearr_17247;
});
var cljs$core$async$state_machine__15221__auto____1 = (function (state_17203){
while(true){
var ret_value__15222__auto__ = (function (){try{while(true){
var result__15223__auto__ = switch__15220__auto__(state_17203);
if(cljs.core.keyword_identical_QMARK_(result__15223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15223__auto__;
}
break;
}
}catch (e17248){if((e17248 instanceof Object)){
var ex__15224__auto__ = e17248;
var statearr_17249_17284 = state_17203;
(statearr_17249_17284[(5)] = ex__15224__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17203);

return cljs.core.cst$kw$recur;
} else {
throw e17248;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15222__auto__,cljs.core.cst$kw$recur)){
var G__17285 = state_17203;
state_17203 = G__17285;
continue;
} else {
return ret_value__15222__auto__;
}
break;
}
});
cljs$core$async$state_machine__15221__auto__ = function(state_17203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15221__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15221__auto____1.call(this,state_17203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15221__auto____0;
cljs$core$async$state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15221__auto____1;
return cljs$core$async$state_machine__15221__auto__;
})()
;})(switch__15220__auto__,c__15344__auto___17255,mults,ensure_mult,p))
})();
var state__15346__auto__ = (function (){var statearr_17250 = (f__15345__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15345__auto__.cljs$core$IFn$_invoke$arity$0() : f__15345__auto__.call(null));
(statearr_17250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15344__auto___17255);

return statearr_17250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15346__auto__);
});})(c__15344__auto___17255,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args17286 = [];
var len__7924__auto___17289 = arguments.length;
var i__7925__auto___17290 = (0);
while(true){
if((i__7925__auto___17290 < len__7924__auto___17289)){
args17286.push((arguments[i__7925__auto___17290]));

var G__17291 = (i__7925__auto___17290 + (1));
i__7925__auto___17290 = G__17291;
continue;
} else {
}
break;
}

var G__17288 = args17286.length;
switch (G__17288) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17286.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args17293 = [];
var len__7924__auto___17296 = arguments.length;
var i__7925__auto___17297 = (0);
while(true){
if((i__7925__auto___17297 < len__7924__auto___17296)){
args17293.push((arguments[i__7925__auto___17297]));

var G__17298 = (i__7925__auto___17297 + (1));
i__7925__auto___17297 = G__17298;
continue;
} else {
}
break;
}

var G__17295 = args17293.length;
switch (G__17295) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17293.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args17300 = [];
var len__7924__auto___17371 = arguments.length;
var i__7925__auto___17372 = (0);
while(true){
if((i__7925__auto___17372 < len__7924__auto___17371)){
args17300.push((arguments[i__7925__auto___17372]));

var G__17373 = (i__7925__auto___17372 + (1));
i__7925__auto___17372 = G__17373;
continue;
} else {
}
break;
}

var G__17302 = args17300.length;
switch (G__17302) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17300.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__15344__auto___17375 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15344__auto___17375,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15345__auto__ = (function (){var switch__15220__auto__ = ((function (c__15344__auto___17375,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17341){
var state_val_17342 = (state_17341[(1)]);
if((state_val_17342 === (7))){
var state_17341__$1 = state_17341;
var statearr_17343_17376 = state_17341__$1;
(statearr_17343_17376[(2)] = null);

(statearr_17343_17376[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17342 === (1))){
var state_17341__$1 = state_17341;
var statearr_17344_17377 = state_17341__$1;
(statearr_17344_17377[(2)] = null);

(statearr_17344_17377[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17342 === (4))){
var inst_17305 = (state_17341[(7)]);
var inst_17307 = (inst_17305 < cnt);
var state_17341__$1 = state_17341;
if(cljs.core.truth_(inst_17307)){
var statearr_17345_17378 = state_17341__$1;
(statearr_17345_17378[(1)] = (6));

} else {
var statearr_17346_17379 = state_17341__$1;
(statearr_17346_17379[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17342 === (15))){
var inst_17337 = (state_17341[(2)]);
var state_17341__$1 = state_17341;
var statearr_17347_17380 = state_17341__$1;
(statearr_17347_17380[(2)] = inst_17337);

(statearr_17347_17380[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17342 === (13))){
var inst_17330 = cljs.core.async.close_BANG_(out);
var state_17341__$1 = state_17341;
var statearr_17348_17381 = state_17341__$1;
(statearr_17348_17381[(2)] = inst_17330);

(statearr_17348_17381[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17342 === (6))){
var state_17341__$1 = state_17341;
var statearr_17349_17382 = state_17341__$1;
(statearr_17349_17382[(2)] = null);

(statearr_17349_17382[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17342 === (3))){
var inst_17339 = (state_17341[(2)]);
var state_17341__$1 = state_17341;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17341__$1,inst_17339);
} else {
if((state_val_17342 === (12))){
var inst_17327 = (state_17341[(8)]);
var inst_17327__$1 = (state_17341[(2)]);
var inst_17328 = cljs.core.some(cljs.core.nil_QMARK_,inst_17327__$1);
var state_17341__$1 = (function (){var statearr_17350 = state_17341;
(statearr_17350[(8)] = inst_17327__$1);

return statearr_17350;
})();
if(cljs.core.truth_(inst_17328)){
var statearr_17351_17383 = state_17341__$1;
(statearr_17351_17383[(1)] = (13));

} else {
var statearr_17352_17384 = state_17341__$1;
(statearr_17352_17384[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17342 === (2))){
var inst_17304 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_17305 = (0);
var state_17341__$1 = (function (){var statearr_17353 = state_17341;
(statearr_17353[(7)] = inst_17305);

(statearr_17353[(9)] = inst_17304);

return statearr_17353;
})();
var statearr_17354_17385 = state_17341__$1;
(statearr_17354_17385[(2)] = null);

(statearr_17354_17385[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17342 === (11))){
var inst_17305 = (state_17341[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17341,(10),Object,null,(9));
var inst_17314 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17305) : chs__$1.call(null,inst_17305));
var inst_17315 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17305) : done.call(null,inst_17305));
var inst_17316 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17314,inst_17315);
var state_17341__$1 = state_17341;
var statearr_17355_17386 = state_17341__$1;
(statearr_17355_17386[(2)] = inst_17316);


cljs.core.async.impl.ioc_helpers.process_exception(state_17341__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17342 === (9))){
var inst_17305 = (state_17341[(7)]);
var inst_17318 = (state_17341[(2)]);
var inst_17319 = (inst_17305 + (1));
var inst_17305__$1 = inst_17319;
var state_17341__$1 = (function (){var statearr_17356 = state_17341;
(statearr_17356[(7)] = inst_17305__$1);

(statearr_17356[(10)] = inst_17318);

return statearr_17356;
})();
var statearr_17357_17387 = state_17341__$1;
(statearr_17357_17387[(2)] = null);

(statearr_17357_17387[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17342 === (5))){
var inst_17325 = (state_17341[(2)]);
var state_17341__$1 = (function (){var statearr_17358 = state_17341;
(statearr_17358[(11)] = inst_17325);

return statearr_17358;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17341__$1,(12),dchan);
} else {
if((state_val_17342 === (14))){
var inst_17327 = (state_17341[(8)]);
var inst_17332 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17327);
var state_17341__$1 = state_17341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17341__$1,(16),out,inst_17332);
} else {
if((state_val_17342 === (16))){
var inst_17334 = (state_17341[(2)]);
var state_17341__$1 = (function (){var statearr_17359 = state_17341;
(statearr_17359[(12)] = inst_17334);

return statearr_17359;
})();
var statearr_17360_17388 = state_17341__$1;
(statearr_17360_17388[(2)] = null);

(statearr_17360_17388[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17342 === (10))){
var inst_17309 = (state_17341[(2)]);
var inst_17310 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17341__$1 = (function (){var statearr_17361 = state_17341;
(statearr_17361[(13)] = inst_17309);

return statearr_17361;
})();
var statearr_17362_17389 = state_17341__$1;
(statearr_17362_17389[(2)] = inst_17310);


cljs.core.async.impl.ioc_helpers.process_exception(state_17341__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17342 === (8))){
var inst_17323 = (state_17341[(2)]);
var state_17341__$1 = state_17341;
var statearr_17363_17390 = state_17341__$1;
(statearr_17363_17390[(2)] = inst_17323);

(statearr_17363_17390[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15344__auto___17375,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15220__auto__,c__15344__auto___17375,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15221__auto__ = null;
var cljs$core$async$state_machine__15221__auto____0 = (function (){
var statearr_17367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17367[(0)] = cljs$core$async$state_machine__15221__auto__);

(statearr_17367[(1)] = (1));

return statearr_17367;
});
var cljs$core$async$state_machine__15221__auto____1 = (function (state_17341){
while(true){
var ret_value__15222__auto__ = (function (){try{while(true){
var result__15223__auto__ = switch__15220__auto__(state_17341);
if(cljs.core.keyword_identical_QMARK_(result__15223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15223__auto__;
}
break;
}
}catch (e17368){if((e17368 instanceof Object)){
var ex__15224__auto__ = e17368;
var statearr_17369_17391 = state_17341;
(statearr_17369_17391[(5)] = ex__15224__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17341);

return cljs.core.cst$kw$recur;
} else {
throw e17368;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15222__auto__,cljs.core.cst$kw$recur)){
var G__17392 = state_17341;
state_17341 = G__17392;
continue;
} else {
return ret_value__15222__auto__;
}
break;
}
});
cljs$core$async$state_machine__15221__auto__ = function(state_17341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15221__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15221__auto____1.call(this,state_17341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15221__auto____0;
cljs$core$async$state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15221__auto____1;
return cljs$core$async$state_machine__15221__auto__;
})()
;})(switch__15220__auto__,c__15344__auto___17375,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15346__auto__ = (function (){var statearr_17370 = (f__15345__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15345__auto__.cljs$core$IFn$_invoke$arity$0() : f__15345__auto__.call(null));
(statearr_17370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15344__auto___17375);

return statearr_17370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15346__auto__);
});})(c__15344__auto___17375,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args17394 = [];
var len__7924__auto___17452 = arguments.length;
var i__7925__auto___17453 = (0);
while(true){
if((i__7925__auto___17453 < len__7924__auto___17452)){
args17394.push((arguments[i__7925__auto___17453]));

var G__17454 = (i__7925__auto___17453 + (1));
i__7925__auto___17453 = G__17454;
continue;
} else {
}
break;
}

var G__17396 = args17394.length;
switch (G__17396) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17394.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15344__auto___17456 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15344__auto___17456,out){
return (function (){
var f__15345__auto__ = (function (){var switch__15220__auto__ = ((function (c__15344__auto___17456,out){
return (function (state_17428){
var state_val_17429 = (state_17428[(1)]);
if((state_val_17429 === (7))){
var inst_17407 = (state_17428[(7)]);
var inst_17408 = (state_17428[(8)]);
var inst_17407__$1 = (state_17428[(2)]);
var inst_17408__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17407__$1,(0),null);
var inst_17409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17407__$1,(1),null);
var inst_17410 = (inst_17408__$1 == null);
var state_17428__$1 = (function (){var statearr_17430 = state_17428;
(statearr_17430[(7)] = inst_17407__$1);

(statearr_17430[(8)] = inst_17408__$1);

(statearr_17430[(9)] = inst_17409);

return statearr_17430;
})();
if(cljs.core.truth_(inst_17410)){
var statearr_17431_17457 = state_17428__$1;
(statearr_17431_17457[(1)] = (8));

} else {
var statearr_17432_17458 = state_17428__$1;
(statearr_17432_17458[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17429 === (1))){
var inst_17397 = cljs.core.vec(chs);
var inst_17398 = inst_17397;
var state_17428__$1 = (function (){var statearr_17433 = state_17428;
(statearr_17433[(10)] = inst_17398);

return statearr_17433;
})();
var statearr_17434_17459 = state_17428__$1;
(statearr_17434_17459[(2)] = null);

(statearr_17434_17459[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17429 === (4))){
var inst_17398 = (state_17428[(10)]);
var state_17428__$1 = state_17428;
return cljs.core.async.ioc_alts_BANG_(state_17428__$1,(7),inst_17398);
} else {
if((state_val_17429 === (6))){
var inst_17424 = (state_17428[(2)]);
var state_17428__$1 = state_17428;
var statearr_17435_17460 = state_17428__$1;
(statearr_17435_17460[(2)] = inst_17424);

(statearr_17435_17460[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17429 === (3))){
var inst_17426 = (state_17428[(2)]);
var state_17428__$1 = state_17428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17428__$1,inst_17426);
} else {
if((state_val_17429 === (2))){
var inst_17398 = (state_17428[(10)]);
var inst_17400 = cljs.core.count(inst_17398);
var inst_17401 = (inst_17400 > (0));
var state_17428__$1 = state_17428;
if(cljs.core.truth_(inst_17401)){
var statearr_17437_17461 = state_17428__$1;
(statearr_17437_17461[(1)] = (4));

} else {
var statearr_17438_17462 = state_17428__$1;
(statearr_17438_17462[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17429 === (11))){
var inst_17398 = (state_17428[(10)]);
var inst_17417 = (state_17428[(2)]);
var tmp17436 = inst_17398;
var inst_17398__$1 = tmp17436;
var state_17428__$1 = (function (){var statearr_17439 = state_17428;
(statearr_17439[(10)] = inst_17398__$1);

(statearr_17439[(11)] = inst_17417);

return statearr_17439;
})();
var statearr_17440_17463 = state_17428__$1;
(statearr_17440_17463[(2)] = null);

(statearr_17440_17463[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17429 === (9))){
var inst_17408 = (state_17428[(8)]);
var state_17428__$1 = state_17428;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17428__$1,(11),out,inst_17408);
} else {
if((state_val_17429 === (5))){
var inst_17422 = cljs.core.async.close_BANG_(out);
var state_17428__$1 = state_17428;
var statearr_17441_17464 = state_17428__$1;
(statearr_17441_17464[(2)] = inst_17422);

(statearr_17441_17464[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17429 === (10))){
var inst_17420 = (state_17428[(2)]);
var state_17428__$1 = state_17428;
var statearr_17442_17465 = state_17428__$1;
(statearr_17442_17465[(2)] = inst_17420);

(statearr_17442_17465[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17429 === (8))){
var inst_17407 = (state_17428[(7)]);
var inst_17398 = (state_17428[(10)]);
var inst_17408 = (state_17428[(8)]);
var inst_17409 = (state_17428[(9)]);
var inst_17412 = (function (){var cs = inst_17398;
var vec__17403 = inst_17407;
var v = inst_17408;
var c = inst_17409;
return ((function (cs,vec__17403,v,c,inst_17407,inst_17398,inst_17408,inst_17409,state_val_17429,c__15344__auto___17456,out){
return (function (p1__17393_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17393_SHARP_);
});
;})(cs,vec__17403,v,c,inst_17407,inst_17398,inst_17408,inst_17409,state_val_17429,c__15344__auto___17456,out))
})();
var inst_17413 = cljs.core.filterv(inst_17412,inst_17398);
var inst_17398__$1 = inst_17413;
var state_17428__$1 = (function (){var statearr_17443 = state_17428;
(statearr_17443[(10)] = inst_17398__$1);

return statearr_17443;
})();
var statearr_17444_17466 = state_17428__$1;
(statearr_17444_17466[(2)] = null);

(statearr_17444_17466[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15344__auto___17456,out))
;
return ((function (switch__15220__auto__,c__15344__auto___17456,out){
return (function() {
var cljs$core$async$state_machine__15221__auto__ = null;
var cljs$core$async$state_machine__15221__auto____0 = (function (){
var statearr_17448 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17448[(0)] = cljs$core$async$state_machine__15221__auto__);

(statearr_17448[(1)] = (1));

return statearr_17448;
});
var cljs$core$async$state_machine__15221__auto____1 = (function (state_17428){
while(true){
var ret_value__15222__auto__ = (function (){try{while(true){
var result__15223__auto__ = switch__15220__auto__(state_17428);
if(cljs.core.keyword_identical_QMARK_(result__15223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15223__auto__;
}
break;
}
}catch (e17449){if((e17449 instanceof Object)){
var ex__15224__auto__ = e17449;
var statearr_17450_17467 = state_17428;
(statearr_17450_17467[(5)] = ex__15224__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17428);

return cljs.core.cst$kw$recur;
} else {
throw e17449;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15222__auto__,cljs.core.cst$kw$recur)){
var G__17468 = state_17428;
state_17428 = G__17468;
continue;
} else {
return ret_value__15222__auto__;
}
break;
}
});
cljs$core$async$state_machine__15221__auto__ = function(state_17428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15221__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15221__auto____1.call(this,state_17428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15221__auto____0;
cljs$core$async$state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15221__auto____1;
return cljs$core$async$state_machine__15221__auto__;
})()
;})(switch__15220__auto__,c__15344__auto___17456,out))
})();
var state__15346__auto__ = (function (){var statearr_17451 = (f__15345__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15345__auto__.cljs$core$IFn$_invoke$arity$0() : f__15345__auto__.call(null));
(statearr_17451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15344__auto___17456);

return statearr_17451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15346__auto__);
});})(c__15344__auto___17456,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args17469 = [];
var len__7924__auto___17518 = arguments.length;
var i__7925__auto___17519 = (0);
while(true){
if((i__7925__auto___17519 < len__7924__auto___17518)){
args17469.push((arguments[i__7925__auto___17519]));

var G__17520 = (i__7925__auto___17519 + (1));
i__7925__auto___17519 = G__17520;
continue;
} else {
}
break;
}

var G__17471 = args17469.length;
switch (G__17471) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17469.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15344__auto___17522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15344__auto___17522,out){
return (function (){
var f__15345__auto__ = (function (){var switch__15220__auto__ = ((function (c__15344__auto___17522,out){
return (function (state_17495){
var state_val_17496 = (state_17495[(1)]);
if((state_val_17496 === (7))){
var inst_17477 = (state_17495[(7)]);
var inst_17477__$1 = (state_17495[(2)]);
var inst_17478 = (inst_17477__$1 == null);
var inst_17479 = cljs.core.not(inst_17478);
var state_17495__$1 = (function (){var statearr_17497 = state_17495;
(statearr_17497[(7)] = inst_17477__$1);

return statearr_17497;
})();
if(inst_17479){
var statearr_17498_17523 = state_17495__$1;
(statearr_17498_17523[(1)] = (8));

} else {
var statearr_17499_17524 = state_17495__$1;
(statearr_17499_17524[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17496 === (1))){
var inst_17472 = (0);
var state_17495__$1 = (function (){var statearr_17500 = state_17495;
(statearr_17500[(8)] = inst_17472);

return statearr_17500;
})();
var statearr_17501_17525 = state_17495__$1;
(statearr_17501_17525[(2)] = null);

(statearr_17501_17525[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17496 === (4))){
var state_17495__$1 = state_17495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17495__$1,(7),ch);
} else {
if((state_val_17496 === (6))){
var inst_17490 = (state_17495[(2)]);
var state_17495__$1 = state_17495;
var statearr_17502_17526 = state_17495__$1;
(statearr_17502_17526[(2)] = inst_17490);

(statearr_17502_17526[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17496 === (3))){
var inst_17492 = (state_17495[(2)]);
var inst_17493 = cljs.core.async.close_BANG_(out);
var state_17495__$1 = (function (){var statearr_17503 = state_17495;
(statearr_17503[(9)] = inst_17492);

return statearr_17503;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17495__$1,inst_17493);
} else {
if((state_val_17496 === (2))){
var inst_17472 = (state_17495[(8)]);
var inst_17474 = (inst_17472 < n);
var state_17495__$1 = state_17495;
if(cljs.core.truth_(inst_17474)){
var statearr_17504_17527 = state_17495__$1;
(statearr_17504_17527[(1)] = (4));

} else {
var statearr_17505_17528 = state_17495__$1;
(statearr_17505_17528[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17496 === (11))){
var inst_17472 = (state_17495[(8)]);
var inst_17482 = (state_17495[(2)]);
var inst_17483 = (inst_17472 + (1));
var inst_17472__$1 = inst_17483;
var state_17495__$1 = (function (){var statearr_17506 = state_17495;
(statearr_17506[(8)] = inst_17472__$1);

(statearr_17506[(10)] = inst_17482);

return statearr_17506;
})();
var statearr_17507_17529 = state_17495__$1;
(statearr_17507_17529[(2)] = null);

(statearr_17507_17529[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17496 === (9))){
var state_17495__$1 = state_17495;
var statearr_17508_17530 = state_17495__$1;
(statearr_17508_17530[(2)] = null);

(statearr_17508_17530[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17496 === (5))){
var state_17495__$1 = state_17495;
var statearr_17509_17531 = state_17495__$1;
(statearr_17509_17531[(2)] = null);

(statearr_17509_17531[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17496 === (10))){
var inst_17487 = (state_17495[(2)]);
var state_17495__$1 = state_17495;
var statearr_17510_17532 = state_17495__$1;
(statearr_17510_17532[(2)] = inst_17487);

(statearr_17510_17532[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17496 === (8))){
var inst_17477 = (state_17495[(7)]);
var state_17495__$1 = state_17495;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17495__$1,(11),out,inst_17477);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15344__auto___17522,out))
;
return ((function (switch__15220__auto__,c__15344__auto___17522,out){
return (function() {
var cljs$core$async$state_machine__15221__auto__ = null;
var cljs$core$async$state_machine__15221__auto____0 = (function (){
var statearr_17514 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17514[(0)] = cljs$core$async$state_machine__15221__auto__);

(statearr_17514[(1)] = (1));

return statearr_17514;
});
var cljs$core$async$state_machine__15221__auto____1 = (function (state_17495){
while(true){
var ret_value__15222__auto__ = (function (){try{while(true){
var result__15223__auto__ = switch__15220__auto__(state_17495);
if(cljs.core.keyword_identical_QMARK_(result__15223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15223__auto__;
}
break;
}
}catch (e17515){if((e17515 instanceof Object)){
var ex__15224__auto__ = e17515;
var statearr_17516_17533 = state_17495;
(statearr_17516_17533[(5)] = ex__15224__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17495);

return cljs.core.cst$kw$recur;
} else {
throw e17515;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15222__auto__,cljs.core.cst$kw$recur)){
var G__17534 = state_17495;
state_17495 = G__17534;
continue;
} else {
return ret_value__15222__auto__;
}
break;
}
});
cljs$core$async$state_machine__15221__auto__ = function(state_17495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15221__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15221__auto____1.call(this,state_17495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15221__auto____0;
cljs$core$async$state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15221__auto____1;
return cljs$core$async$state_machine__15221__auto__;
})()
;})(switch__15220__auto__,c__15344__auto___17522,out))
})();
var state__15346__auto__ = (function (){var statearr_17517 = (f__15345__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15345__auto__.cljs$core$IFn$_invoke$arity$0() : f__15345__auto__.call(null));
(statearr_17517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15344__auto___17522);

return statearr_17517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15346__auto__);
});})(c__15344__auto___17522,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17544 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17544 = (function (f,ch,meta17545){
this.f = f;
this.ch = ch;
this.meta17545 = meta17545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17546,meta17545__$1){
var self__ = this;
var _17546__$1 = this;
return (new cljs.core.async.t_cljs$core$async17544(self__.f,self__.ch,meta17545__$1));
});

cljs.core.async.t_cljs$core$async17544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17546){
var self__ = this;
var _17546__$1 = this;
return self__.meta17545;
});

cljs.core.async.t_cljs$core$async17544.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17544.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17544.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17544.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17544.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17547 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17547 = (function (f,ch,meta17545,_,fn1,meta17548){
this.f = f;
this.ch = ch;
this.meta17545 = meta17545;
this._ = _;
this.fn1 = fn1;
this.meta17548 = meta17548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17549,meta17548__$1){
var self__ = this;
var _17549__$1 = this;
return (new cljs.core.async.t_cljs$core$async17547(self__.f,self__.ch,self__.meta17545,self__._,self__.fn1,meta17548__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17547.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17549){
var self__ = this;
var _17549__$1 = this;
return self__.meta17548;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17547.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17547.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17547.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17535_SHARP_){
var G__17550 = (((p1__17535_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17535_SHARP_) : self__.f.call(null,p1__17535_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17550) : f1.call(null,G__17550));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17547.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17545,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async17544], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta17548], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17547.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17547.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17547";

cljs.core.async.t_cljs$core$async17547.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7422__auto__,writer__7423__auto__,opt__7424__auto__){
return cljs.core._write(writer__7423__auto__,"cljs.core.async/t_cljs$core$async17547");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async17547 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17547(f__$1,ch__$1,meta17545__$1,___$2,fn1__$1,meta17548){
return (new cljs.core.async.t_cljs$core$async17547(f__$1,ch__$1,meta17545__$1,___$2,fn1__$1,meta17548));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17547(self__.f,self__.ch,self__.meta17545,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6799__auto__ = ret;
if(cljs.core.truth_(and__6799__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6799__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17551 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17551) : self__.f.call(null,G__17551));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17544.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17544.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17545], null);
});

cljs.core.async.t_cljs$core$async17544.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17544";

cljs.core.async.t_cljs$core$async17544.cljs$lang$ctorPrWriter = (function (this__7422__auto__,writer__7423__auto__,opt__7424__auto__){
return cljs.core._write(writer__7423__auto__,"cljs.core.async/t_cljs$core$async17544");
});

cljs.core.async.__GT_t_cljs$core$async17544 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17544(f__$1,ch__$1,meta17545){
return (new cljs.core.async.t_cljs$core$async17544(f__$1,ch__$1,meta17545));
});

}

return (new cljs.core.async.t_cljs$core$async17544(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17555 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17555 = (function (f,ch,meta17556){
this.f = f;
this.ch = ch;
this.meta17556 = meta17556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17557,meta17556__$1){
var self__ = this;
var _17557__$1 = this;
return (new cljs.core.async.t_cljs$core$async17555(self__.f,self__.ch,meta17556__$1));
});

cljs.core.async.t_cljs$core$async17555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17557){
var self__ = this;
var _17557__$1 = this;
return self__.meta17556;
});

cljs.core.async.t_cljs$core$async17555.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17555.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17555.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17555.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17555.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17555.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17556], null);
});

cljs.core.async.t_cljs$core$async17555.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17555";

cljs.core.async.t_cljs$core$async17555.cljs$lang$ctorPrWriter = (function (this__7422__auto__,writer__7423__auto__,opt__7424__auto__){
return cljs.core._write(writer__7423__auto__,"cljs.core.async/t_cljs$core$async17555");
});

cljs.core.async.__GT_t_cljs$core$async17555 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17555(f__$1,ch__$1,meta17556){
return (new cljs.core.async.t_cljs$core$async17555(f__$1,ch__$1,meta17556));
});

}

return (new cljs.core.async.t_cljs$core$async17555(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17561 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17561 = (function (p,ch,meta17562){
this.p = p;
this.ch = ch;
this.meta17562 = meta17562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17563,meta17562__$1){
var self__ = this;
var _17563__$1 = this;
return (new cljs.core.async.t_cljs$core$async17561(self__.p,self__.ch,meta17562__$1));
});

cljs.core.async.t_cljs$core$async17561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17563){
var self__ = this;
var _17563__$1 = this;
return self__.meta17562;
});

cljs.core.async.t_cljs$core$async17561.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17561.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17561.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17561.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17561.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17561.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17561.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17562], null);
});

cljs.core.async.t_cljs$core$async17561.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17561";

cljs.core.async.t_cljs$core$async17561.cljs$lang$ctorPrWriter = (function (this__7422__auto__,writer__7423__auto__,opt__7424__auto__){
return cljs.core._write(writer__7423__auto__,"cljs.core.async/t_cljs$core$async17561");
});

cljs.core.async.__GT_t_cljs$core$async17561 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17561(p__$1,ch__$1,meta17562){
return (new cljs.core.async.t_cljs$core$async17561(p__$1,ch__$1,meta17562));
});

}

return (new cljs.core.async.t_cljs$core$async17561(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args17564 = [];
var len__7924__auto___17608 = arguments.length;
var i__7925__auto___17609 = (0);
while(true){
if((i__7925__auto___17609 < len__7924__auto___17608)){
args17564.push((arguments[i__7925__auto___17609]));

var G__17610 = (i__7925__auto___17609 + (1));
i__7925__auto___17609 = G__17610;
continue;
} else {
}
break;
}

var G__17566 = args17564.length;
switch (G__17566) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17564.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15344__auto___17612 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15344__auto___17612,out){
return (function (){
var f__15345__auto__ = (function (){var switch__15220__auto__ = ((function (c__15344__auto___17612,out){
return (function (state_17587){
var state_val_17588 = (state_17587[(1)]);
if((state_val_17588 === (7))){
var inst_17583 = (state_17587[(2)]);
var state_17587__$1 = state_17587;
var statearr_17589_17613 = state_17587__$1;
(statearr_17589_17613[(2)] = inst_17583);

(statearr_17589_17613[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17588 === (1))){
var state_17587__$1 = state_17587;
var statearr_17590_17614 = state_17587__$1;
(statearr_17590_17614[(2)] = null);

(statearr_17590_17614[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17588 === (4))){
var inst_17569 = (state_17587[(7)]);
var inst_17569__$1 = (state_17587[(2)]);
var inst_17570 = (inst_17569__$1 == null);
var state_17587__$1 = (function (){var statearr_17591 = state_17587;
(statearr_17591[(7)] = inst_17569__$1);

return statearr_17591;
})();
if(cljs.core.truth_(inst_17570)){
var statearr_17592_17615 = state_17587__$1;
(statearr_17592_17615[(1)] = (5));

} else {
var statearr_17593_17616 = state_17587__$1;
(statearr_17593_17616[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17588 === (6))){
var inst_17569 = (state_17587[(7)]);
var inst_17574 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17569) : p.call(null,inst_17569));
var state_17587__$1 = state_17587;
if(cljs.core.truth_(inst_17574)){
var statearr_17594_17617 = state_17587__$1;
(statearr_17594_17617[(1)] = (8));

} else {
var statearr_17595_17618 = state_17587__$1;
(statearr_17595_17618[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17588 === (3))){
var inst_17585 = (state_17587[(2)]);
var state_17587__$1 = state_17587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17587__$1,inst_17585);
} else {
if((state_val_17588 === (2))){
var state_17587__$1 = state_17587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17587__$1,(4),ch);
} else {
if((state_val_17588 === (11))){
var inst_17577 = (state_17587[(2)]);
var state_17587__$1 = state_17587;
var statearr_17596_17619 = state_17587__$1;
(statearr_17596_17619[(2)] = inst_17577);

(statearr_17596_17619[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17588 === (9))){
var state_17587__$1 = state_17587;
var statearr_17597_17620 = state_17587__$1;
(statearr_17597_17620[(2)] = null);

(statearr_17597_17620[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17588 === (5))){
var inst_17572 = cljs.core.async.close_BANG_(out);
var state_17587__$1 = state_17587;
var statearr_17598_17621 = state_17587__$1;
(statearr_17598_17621[(2)] = inst_17572);

(statearr_17598_17621[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17588 === (10))){
var inst_17580 = (state_17587[(2)]);
var state_17587__$1 = (function (){var statearr_17599 = state_17587;
(statearr_17599[(8)] = inst_17580);

return statearr_17599;
})();
var statearr_17600_17622 = state_17587__$1;
(statearr_17600_17622[(2)] = null);

(statearr_17600_17622[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17588 === (8))){
var inst_17569 = (state_17587[(7)]);
var state_17587__$1 = state_17587;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17587__$1,(11),out,inst_17569);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15344__auto___17612,out))
;
return ((function (switch__15220__auto__,c__15344__auto___17612,out){
return (function() {
var cljs$core$async$state_machine__15221__auto__ = null;
var cljs$core$async$state_machine__15221__auto____0 = (function (){
var statearr_17604 = [null,null,null,null,null,null,null,null,null];
(statearr_17604[(0)] = cljs$core$async$state_machine__15221__auto__);

(statearr_17604[(1)] = (1));

return statearr_17604;
});
var cljs$core$async$state_machine__15221__auto____1 = (function (state_17587){
while(true){
var ret_value__15222__auto__ = (function (){try{while(true){
var result__15223__auto__ = switch__15220__auto__(state_17587);
if(cljs.core.keyword_identical_QMARK_(result__15223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15223__auto__;
}
break;
}
}catch (e17605){if((e17605 instanceof Object)){
var ex__15224__auto__ = e17605;
var statearr_17606_17623 = state_17587;
(statearr_17606_17623[(5)] = ex__15224__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17587);

return cljs.core.cst$kw$recur;
} else {
throw e17605;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15222__auto__,cljs.core.cst$kw$recur)){
var G__17624 = state_17587;
state_17587 = G__17624;
continue;
} else {
return ret_value__15222__auto__;
}
break;
}
});
cljs$core$async$state_machine__15221__auto__ = function(state_17587){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15221__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15221__auto____1.call(this,state_17587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15221__auto____0;
cljs$core$async$state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15221__auto____1;
return cljs$core$async$state_machine__15221__auto__;
})()
;})(switch__15220__auto__,c__15344__auto___17612,out))
})();
var state__15346__auto__ = (function (){var statearr_17607 = (f__15345__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15345__auto__.cljs$core$IFn$_invoke$arity$0() : f__15345__auto__.call(null));
(statearr_17607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15344__auto___17612);

return statearr_17607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15346__auto__);
});})(c__15344__auto___17612,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args17625 = [];
var len__7924__auto___17628 = arguments.length;
var i__7925__auto___17629 = (0);
while(true){
if((i__7925__auto___17629 < len__7924__auto___17628)){
args17625.push((arguments[i__7925__auto___17629]));

var G__17630 = (i__7925__auto___17629 + (1));
i__7925__auto___17629 = G__17630;
continue;
} else {
}
break;
}

var G__17627 = args17625.length;
switch (G__17627) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17625.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15344__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15344__auto__){
return (function (){
var f__15345__auto__ = (function (){var switch__15220__auto__ = ((function (c__15344__auto__){
return (function (state_17797){
var state_val_17798 = (state_17797[(1)]);
if((state_val_17798 === (7))){
var inst_17793 = (state_17797[(2)]);
var state_17797__$1 = state_17797;
var statearr_17799_17840 = state_17797__$1;
(statearr_17799_17840[(2)] = inst_17793);

(statearr_17799_17840[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (20))){
var inst_17763 = (state_17797[(7)]);
var inst_17774 = (state_17797[(2)]);
var inst_17775 = cljs.core.next(inst_17763);
var inst_17749 = inst_17775;
var inst_17750 = null;
var inst_17751 = (0);
var inst_17752 = (0);
var state_17797__$1 = (function (){var statearr_17800 = state_17797;
(statearr_17800[(8)] = inst_17752);

(statearr_17800[(9)] = inst_17750);

(statearr_17800[(10)] = inst_17751);

(statearr_17800[(11)] = inst_17774);

(statearr_17800[(12)] = inst_17749);

return statearr_17800;
})();
var statearr_17801_17841 = state_17797__$1;
(statearr_17801_17841[(2)] = null);

(statearr_17801_17841[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (1))){
var state_17797__$1 = state_17797;
var statearr_17802_17842 = state_17797__$1;
(statearr_17802_17842[(2)] = null);

(statearr_17802_17842[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (4))){
var inst_17738 = (state_17797[(13)]);
var inst_17738__$1 = (state_17797[(2)]);
var inst_17739 = (inst_17738__$1 == null);
var state_17797__$1 = (function (){var statearr_17803 = state_17797;
(statearr_17803[(13)] = inst_17738__$1);

return statearr_17803;
})();
if(cljs.core.truth_(inst_17739)){
var statearr_17804_17843 = state_17797__$1;
(statearr_17804_17843[(1)] = (5));

} else {
var statearr_17805_17844 = state_17797__$1;
(statearr_17805_17844[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (15))){
var state_17797__$1 = state_17797;
var statearr_17809_17845 = state_17797__$1;
(statearr_17809_17845[(2)] = null);

(statearr_17809_17845[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (21))){
var state_17797__$1 = state_17797;
var statearr_17810_17846 = state_17797__$1;
(statearr_17810_17846[(2)] = null);

(statearr_17810_17846[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (13))){
var inst_17752 = (state_17797[(8)]);
var inst_17750 = (state_17797[(9)]);
var inst_17751 = (state_17797[(10)]);
var inst_17749 = (state_17797[(12)]);
var inst_17759 = (state_17797[(2)]);
var inst_17760 = (inst_17752 + (1));
var tmp17806 = inst_17750;
var tmp17807 = inst_17751;
var tmp17808 = inst_17749;
var inst_17749__$1 = tmp17808;
var inst_17750__$1 = tmp17806;
var inst_17751__$1 = tmp17807;
var inst_17752__$1 = inst_17760;
var state_17797__$1 = (function (){var statearr_17811 = state_17797;
(statearr_17811[(8)] = inst_17752__$1);

(statearr_17811[(9)] = inst_17750__$1);

(statearr_17811[(10)] = inst_17751__$1);

(statearr_17811[(12)] = inst_17749__$1);

(statearr_17811[(14)] = inst_17759);

return statearr_17811;
})();
var statearr_17812_17847 = state_17797__$1;
(statearr_17812_17847[(2)] = null);

(statearr_17812_17847[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (22))){
var state_17797__$1 = state_17797;
var statearr_17813_17848 = state_17797__$1;
(statearr_17813_17848[(2)] = null);

(statearr_17813_17848[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (6))){
var inst_17738 = (state_17797[(13)]);
var inst_17747 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17738) : f.call(null,inst_17738));
var inst_17748 = cljs.core.seq(inst_17747);
var inst_17749 = inst_17748;
var inst_17750 = null;
var inst_17751 = (0);
var inst_17752 = (0);
var state_17797__$1 = (function (){var statearr_17814 = state_17797;
(statearr_17814[(8)] = inst_17752);

(statearr_17814[(9)] = inst_17750);

(statearr_17814[(10)] = inst_17751);

(statearr_17814[(12)] = inst_17749);

return statearr_17814;
})();
var statearr_17815_17849 = state_17797__$1;
(statearr_17815_17849[(2)] = null);

(statearr_17815_17849[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (17))){
var inst_17763 = (state_17797[(7)]);
var inst_17767 = cljs.core.chunk_first(inst_17763);
var inst_17768 = cljs.core.chunk_rest(inst_17763);
var inst_17769 = cljs.core.count(inst_17767);
var inst_17749 = inst_17768;
var inst_17750 = inst_17767;
var inst_17751 = inst_17769;
var inst_17752 = (0);
var state_17797__$1 = (function (){var statearr_17816 = state_17797;
(statearr_17816[(8)] = inst_17752);

(statearr_17816[(9)] = inst_17750);

(statearr_17816[(10)] = inst_17751);

(statearr_17816[(12)] = inst_17749);

return statearr_17816;
})();
var statearr_17817_17850 = state_17797__$1;
(statearr_17817_17850[(2)] = null);

(statearr_17817_17850[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (3))){
var inst_17795 = (state_17797[(2)]);
var state_17797__$1 = state_17797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17797__$1,inst_17795);
} else {
if((state_val_17798 === (12))){
var inst_17783 = (state_17797[(2)]);
var state_17797__$1 = state_17797;
var statearr_17818_17851 = state_17797__$1;
(statearr_17818_17851[(2)] = inst_17783);

(statearr_17818_17851[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (2))){
var state_17797__$1 = state_17797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17797__$1,(4),in$);
} else {
if((state_val_17798 === (23))){
var inst_17791 = (state_17797[(2)]);
var state_17797__$1 = state_17797;
var statearr_17819_17852 = state_17797__$1;
(statearr_17819_17852[(2)] = inst_17791);

(statearr_17819_17852[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (19))){
var inst_17778 = (state_17797[(2)]);
var state_17797__$1 = state_17797;
var statearr_17820_17853 = state_17797__$1;
(statearr_17820_17853[(2)] = inst_17778);

(statearr_17820_17853[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (11))){
var inst_17763 = (state_17797[(7)]);
var inst_17749 = (state_17797[(12)]);
var inst_17763__$1 = cljs.core.seq(inst_17749);
var state_17797__$1 = (function (){var statearr_17821 = state_17797;
(statearr_17821[(7)] = inst_17763__$1);

return statearr_17821;
})();
if(inst_17763__$1){
var statearr_17822_17854 = state_17797__$1;
(statearr_17822_17854[(1)] = (14));

} else {
var statearr_17823_17855 = state_17797__$1;
(statearr_17823_17855[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (9))){
var inst_17785 = (state_17797[(2)]);
var inst_17786 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17797__$1 = (function (){var statearr_17824 = state_17797;
(statearr_17824[(15)] = inst_17785);

return statearr_17824;
})();
if(cljs.core.truth_(inst_17786)){
var statearr_17825_17856 = state_17797__$1;
(statearr_17825_17856[(1)] = (21));

} else {
var statearr_17826_17857 = state_17797__$1;
(statearr_17826_17857[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (5))){
var inst_17741 = cljs.core.async.close_BANG_(out);
var state_17797__$1 = state_17797;
var statearr_17827_17858 = state_17797__$1;
(statearr_17827_17858[(2)] = inst_17741);

(statearr_17827_17858[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (14))){
var inst_17763 = (state_17797[(7)]);
var inst_17765 = cljs.core.chunked_seq_QMARK_(inst_17763);
var state_17797__$1 = state_17797;
if(inst_17765){
var statearr_17828_17859 = state_17797__$1;
(statearr_17828_17859[(1)] = (17));

} else {
var statearr_17829_17860 = state_17797__$1;
(statearr_17829_17860[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (16))){
var inst_17781 = (state_17797[(2)]);
var state_17797__$1 = state_17797;
var statearr_17830_17861 = state_17797__$1;
(statearr_17830_17861[(2)] = inst_17781);

(statearr_17830_17861[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (10))){
var inst_17752 = (state_17797[(8)]);
var inst_17750 = (state_17797[(9)]);
var inst_17757 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17750,inst_17752);
var state_17797__$1 = state_17797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17797__$1,(13),out,inst_17757);
} else {
if((state_val_17798 === (18))){
var inst_17763 = (state_17797[(7)]);
var inst_17772 = cljs.core.first(inst_17763);
var state_17797__$1 = state_17797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17797__$1,(20),out,inst_17772);
} else {
if((state_val_17798 === (8))){
var inst_17752 = (state_17797[(8)]);
var inst_17751 = (state_17797[(10)]);
var inst_17754 = (inst_17752 < inst_17751);
var inst_17755 = inst_17754;
var state_17797__$1 = state_17797;
if(cljs.core.truth_(inst_17755)){
var statearr_17831_17862 = state_17797__$1;
(statearr_17831_17862[(1)] = (10));

} else {
var statearr_17832_17863 = state_17797__$1;
(statearr_17832_17863[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15344__auto__))
;
return ((function (switch__15220__auto__,c__15344__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15221__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15221__auto____0 = (function (){
var statearr_17836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17836[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15221__auto__);

(statearr_17836[(1)] = (1));

return statearr_17836;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15221__auto____1 = (function (state_17797){
while(true){
var ret_value__15222__auto__ = (function (){try{while(true){
var result__15223__auto__ = switch__15220__auto__(state_17797);
if(cljs.core.keyword_identical_QMARK_(result__15223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15223__auto__;
}
break;
}
}catch (e17837){if((e17837 instanceof Object)){
var ex__15224__auto__ = e17837;
var statearr_17838_17864 = state_17797;
(statearr_17838_17864[(5)] = ex__15224__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17797);

return cljs.core.cst$kw$recur;
} else {
throw e17837;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15222__auto__,cljs.core.cst$kw$recur)){
var G__17865 = state_17797;
state_17797 = G__17865;
continue;
} else {
return ret_value__15222__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15221__auto__ = function(state_17797){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15221__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15221__auto____1.call(this,state_17797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15221__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15221__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15221__auto__;
})()
;})(switch__15220__auto__,c__15344__auto__))
})();
var state__15346__auto__ = (function (){var statearr_17839 = (f__15345__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15345__auto__.cljs$core$IFn$_invoke$arity$0() : f__15345__auto__.call(null));
(statearr_17839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15344__auto__);

return statearr_17839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15346__auto__);
});})(c__15344__auto__))
);

return c__15344__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args17866 = [];
var len__7924__auto___17869 = arguments.length;
var i__7925__auto___17870 = (0);
while(true){
if((i__7925__auto___17870 < len__7924__auto___17869)){
args17866.push((arguments[i__7925__auto___17870]));

var G__17871 = (i__7925__auto___17870 + (1));
i__7925__auto___17870 = G__17871;
continue;
} else {
}
break;
}

var G__17868 = args17866.length;
switch (G__17868) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17866.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args17873 = [];
var len__7924__auto___17876 = arguments.length;
var i__7925__auto___17877 = (0);
while(true){
if((i__7925__auto___17877 < len__7924__auto___17876)){
args17873.push((arguments[i__7925__auto___17877]));

var G__17878 = (i__7925__auto___17877 + (1));
i__7925__auto___17877 = G__17878;
continue;
} else {
}
break;
}

var G__17875 = args17873.length;
switch (G__17875) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17873.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args17880 = [];
var len__7924__auto___17931 = arguments.length;
var i__7925__auto___17932 = (0);
while(true){
if((i__7925__auto___17932 < len__7924__auto___17931)){
args17880.push((arguments[i__7925__auto___17932]));

var G__17933 = (i__7925__auto___17932 + (1));
i__7925__auto___17932 = G__17933;
continue;
} else {
}
break;
}

var G__17882 = args17880.length;
switch (G__17882) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17880.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15344__auto___17935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15344__auto___17935,out){
return (function (){
var f__15345__auto__ = (function (){var switch__15220__auto__ = ((function (c__15344__auto___17935,out){
return (function (state_17906){
var state_val_17907 = (state_17906[(1)]);
if((state_val_17907 === (7))){
var inst_17901 = (state_17906[(2)]);
var state_17906__$1 = state_17906;
var statearr_17908_17936 = state_17906__$1;
(statearr_17908_17936[(2)] = inst_17901);

(statearr_17908_17936[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17907 === (1))){
var inst_17883 = null;
var state_17906__$1 = (function (){var statearr_17909 = state_17906;
(statearr_17909[(7)] = inst_17883);

return statearr_17909;
})();
var statearr_17910_17937 = state_17906__$1;
(statearr_17910_17937[(2)] = null);

(statearr_17910_17937[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17907 === (4))){
var inst_17886 = (state_17906[(8)]);
var inst_17886__$1 = (state_17906[(2)]);
var inst_17887 = (inst_17886__$1 == null);
var inst_17888 = cljs.core.not(inst_17887);
var state_17906__$1 = (function (){var statearr_17911 = state_17906;
(statearr_17911[(8)] = inst_17886__$1);

return statearr_17911;
})();
if(inst_17888){
var statearr_17912_17938 = state_17906__$1;
(statearr_17912_17938[(1)] = (5));

} else {
var statearr_17913_17939 = state_17906__$1;
(statearr_17913_17939[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17907 === (6))){
var state_17906__$1 = state_17906;
var statearr_17914_17940 = state_17906__$1;
(statearr_17914_17940[(2)] = null);

(statearr_17914_17940[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17907 === (3))){
var inst_17903 = (state_17906[(2)]);
var inst_17904 = cljs.core.async.close_BANG_(out);
var state_17906__$1 = (function (){var statearr_17915 = state_17906;
(statearr_17915[(9)] = inst_17903);

return statearr_17915;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17906__$1,inst_17904);
} else {
if((state_val_17907 === (2))){
var state_17906__$1 = state_17906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17906__$1,(4),ch);
} else {
if((state_val_17907 === (11))){
var inst_17886 = (state_17906[(8)]);
var inst_17895 = (state_17906[(2)]);
var inst_17883 = inst_17886;
var state_17906__$1 = (function (){var statearr_17916 = state_17906;
(statearr_17916[(10)] = inst_17895);

(statearr_17916[(7)] = inst_17883);

return statearr_17916;
})();
var statearr_17917_17941 = state_17906__$1;
(statearr_17917_17941[(2)] = null);

(statearr_17917_17941[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17907 === (9))){
var inst_17886 = (state_17906[(8)]);
var state_17906__$1 = state_17906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17906__$1,(11),out,inst_17886);
} else {
if((state_val_17907 === (5))){
var inst_17886 = (state_17906[(8)]);
var inst_17883 = (state_17906[(7)]);
var inst_17890 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17886,inst_17883);
var state_17906__$1 = state_17906;
if(inst_17890){
var statearr_17919_17942 = state_17906__$1;
(statearr_17919_17942[(1)] = (8));

} else {
var statearr_17920_17943 = state_17906__$1;
(statearr_17920_17943[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17907 === (10))){
var inst_17898 = (state_17906[(2)]);
var state_17906__$1 = state_17906;
var statearr_17921_17944 = state_17906__$1;
(statearr_17921_17944[(2)] = inst_17898);

(statearr_17921_17944[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17907 === (8))){
var inst_17883 = (state_17906[(7)]);
var tmp17918 = inst_17883;
var inst_17883__$1 = tmp17918;
var state_17906__$1 = (function (){var statearr_17922 = state_17906;
(statearr_17922[(7)] = inst_17883__$1);

return statearr_17922;
})();
var statearr_17923_17945 = state_17906__$1;
(statearr_17923_17945[(2)] = null);

(statearr_17923_17945[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15344__auto___17935,out))
;
return ((function (switch__15220__auto__,c__15344__auto___17935,out){
return (function() {
var cljs$core$async$state_machine__15221__auto__ = null;
var cljs$core$async$state_machine__15221__auto____0 = (function (){
var statearr_17927 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17927[(0)] = cljs$core$async$state_machine__15221__auto__);

(statearr_17927[(1)] = (1));

return statearr_17927;
});
var cljs$core$async$state_machine__15221__auto____1 = (function (state_17906){
while(true){
var ret_value__15222__auto__ = (function (){try{while(true){
var result__15223__auto__ = switch__15220__auto__(state_17906);
if(cljs.core.keyword_identical_QMARK_(result__15223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15223__auto__;
}
break;
}
}catch (e17928){if((e17928 instanceof Object)){
var ex__15224__auto__ = e17928;
var statearr_17929_17946 = state_17906;
(statearr_17929_17946[(5)] = ex__15224__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17906);

return cljs.core.cst$kw$recur;
} else {
throw e17928;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15222__auto__,cljs.core.cst$kw$recur)){
var G__17947 = state_17906;
state_17906 = G__17947;
continue;
} else {
return ret_value__15222__auto__;
}
break;
}
});
cljs$core$async$state_machine__15221__auto__ = function(state_17906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15221__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15221__auto____1.call(this,state_17906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15221__auto____0;
cljs$core$async$state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15221__auto____1;
return cljs$core$async$state_machine__15221__auto__;
})()
;})(switch__15220__auto__,c__15344__auto___17935,out))
})();
var state__15346__auto__ = (function (){var statearr_17930 = (f__15345__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15345__auto__.cljs$core$IFn$_invoke$arity$0() : f__15345__auto__.call(null));
(statearr_17930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15344__auto___17935);

return statearr_17930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15346__auto__);
});})(c__15344__auto___17935,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args17948 = [];
var len__7924__auto___18018 = arguments.length;
var i__7925__auto___18019 = (0);
while(true){
if((i__7925__auto___18019 < len__7924__auto___18018)){
args17948.push((arguments[i__7925__auto___18019]));

var G__18020 = (i__7925__auto___18019 + (1));
i__7925__auto___18019 = G__18020;
continue;
} else {
}
break;
}

var G__17950 = args17948.length;
switch (G__17950) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17948.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15344__auto___18022 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15344__auto___18022,out){
return (function (){
var f__15345__auto__ = (function (){var switch__15220__auto__ = ((function (c__15344__auto___18022,out){
return (function (state_17988){
var state_val_17989 = (state_17988[(1)]);
if((state_val_17989 === (7))){
var inst_17984 = (state_17988[(2)]);
var state_17988__$1 = state_17988;
var statearr_17990_18023 = state_17988__$1;
(statearr_17990_18023[(2)] = inst_17984);

(statearr_17990_18023[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17989 === (1))){
var inst_17951 = (new Array(n));
var inst_17952 = inst_17951;
var inst_17953 = (0);
var state_17988__$1 = (function (){var statearr_17991 = state_17988;
(statearr_17991[(7)] = inst_17953);

(statearr_17991[(8)] = inst_17952);

return statearr_17991;
})();
var statearr_17992_18024 = state_17988__$1;
(statearr_17992_18024[(2)] = null);

(statearr_17992_18024[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17989 === (4))){
var inst_17956 = (state_17988[(9)]);
var inst_17956__$1 = (state_17988[(2)]);
var inst_17957 = (inst_17956__$1 == null);
var inst_17958 = cljs.core.not(inst_17957);
var state_17988__$1 = (function (){var statearr_17993 = state_17988;
(statearr_17993[(9)] = inst_17956__$1);

return statearr_17993;
})();
if(inst_17958){
var statearr_17994_18025 = state_17988__$1;
(statearr_17994_18025[(1)] = (5));

} else {
var statearr_17995_18026 = state_17988__$1;
(statearr_17995_18026[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17989 === (15))){
var inst_17978 = (state_17988[(2)]);
var state_17988__$1 = state_17988;
var statearr_17996_18027 = state_17988__$1;
(statearr_17996_18027[(2)] = inst_17978);

(statearr_17996_18027[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17989 === (13))){
var state_17988__$1 = state_17988;
var statearr_17997_18028 = state_17988__$1;
(statearr_17997_18028[(2)] = null);

(statearr_17997_18028[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17989 === (6))){
var inst_17953 = (state_17988[(7)]);
var inst_17974 = (inst_17953 > (0));
var state_17988__$1 = state_17988;
if(cljs.core.truth_(inst_17974)){
var statearr_17998_18029 = state_17988__$1;
(statearr_17998_18029[(1)] = (12));

} else {
var statearr_17999_18030 = state_17988__$1;
(statearr_17999_18030[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17989 === (3))){
var inst_17986 = (state_17988[(2)]);
var state_17988__$1 = state_17988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17988__$1,inst_17986);
} else {
if((state_val_17989 === (12))){
var inst_17952 = (state_17988[(8)]);
var inst_17976 = cljs.core.vec(inst_17952);
var state_17988__$1 = state_17988;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17988__$1,(15),out,inst_17976);
} else {
if((state_val_17989 === (2))){
var state_17988__$1 = state_17988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17988__$1,(4),ch);
} else {
if((state_val_17989 === (11))){
var inst_17968 = (state_17988[(2)]);
var inst_17969 = (new Array(n));
var inst_17952 = inst_17969;
var inst_17953 = (0);
var state_17988__$1 = (function (){var statearr_18000 = state_17988;
(statearr_18000[(10)] = inst_17968);

(statearr_18000[(7)] = inst_17953);

(statearr_18000[(8)] = inst_17952);

return statearr_18000;
})();
var statearr_18001_18031 = state_17988__$1;
(statearr_18001_18031[(2)] = null);

(statearr_18001_18031[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17989 === (9))){
var inst_17952 = (state_17988[(8)]);
var inst_17966 = cljs.core.vec(inst_17952);
var state_17988__$1 = state_17988;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17988__$1,(11),out,inst_17966);
} else {
if((state_val_17989 === (5))){
var inst_17961 = (state_17988[(11)]);
var inst_17953 = (state_17988[(7)]);
var inst_17952 = (state_17988[(8)]);
var inst_17956 = (state_17988[(9)]);
var inst_17960 = (inst_17952[inst_17953] = inst_17956);
var inst_17961__$1 = (inst_17953 + (1));
var inst_17962 = (inst_17961__$1 < n);
var state_17988__$1 = (function (){var statearr_18002 = state_17988;
(statearr_18002[(11)] = inst_17961__$1);

(statearr_18002[(12)] = inst_17960);

return statearr_18002;
})();
if(cljs.core.truth_(inst_17962)){
var statearr_18003_18032 = state_17988__$1;
(statearr_18003_18032[(1)] = (8));

} else {
var statearr_18004_18033 = state_17988__$1;
(statearr_18004_18033[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17989 === (14))){
var inst_17981 = (state_17988[(2)]);
var inst_17982 = cljs.core.async.close_BANG_(out);
var state_17988__$1 = (function (){var statearr_18006 = state_17988;
(statearr_18006[(13)] = inst_17981);

return statearr_18006;
})();
var statearr_18007_18034 = state_17988__$1;
(statearr_18007_18034[(2)] = inst_17982);

(statearr_18007_18034[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17989 === (10))){
var inst_17972 = (state_17988[(2)]);
var state_17988__$1 = state_17988;
var statearr_18008_18035 = state_17988__$1;
(statearr_18008_18035[(2)] = inst_17972);

(statearr_18008_18035[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17989 === (8))){
var inst_17961 = (state_17988[(11)]);
var inst_17952 = (state_17988[(8)]);
var tmp18005 = inst_17952;
var inst_17952__$1 = tmp18005;
var inst_17953 = inst_17961;
var state_17988__$1 = (function (){var statearr_18009 = state_17988;
(statearr_18009[(7)] = inst_17953);

(statearr_18009[(8)] = inst_17952__$1);

return statearr_18009;
})();
var statearr_18010_18036 = state_17988__$1;
(statearr_18010_18036[(2)] = null);

(statearr_18010_18036[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15344__auto___18022,out))
;
return ((function (switch__15220__auto__,c__15344__auto___18022,out){
return (function() {
var cljs$core$async$state_machine__15221__auto__ = null;
var cljs$core$async$state_machine__15221__auto____0 = (function (){
var statearr_18014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18014[(0)] = cljs$core$async$state_machine__15221__auto__);

(statearr_18014[(1)] = (1));

return statearr_18014;
});
var cljs$core$async$state_machine__15221__auto____1 = (function (state_17988){
while(true){
var ret_value__15222__auto__ = (function (){try{while(true){
var result__15223__auto__ = switch__15220__auto__(state_17988);
if(cljs.core.keyword_identical_QMARK_(result__15223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15223__auto__;
}
break;
}
}catch (e18015){if((e18015 instanceof Object)){
var ex__15224__auto__ = e18015;
var statearr_18016_18037 = state_17988;
(statearr_18016_18037[(5)] = ex__15224__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17988);

return cljs.core.cst$kw$recur;
} else {
throw e18015;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15222__auto__,cljs.core.cst$kw$recur)){
var G__18038 = state_17988;
state_17988 = G__18038;
continue;
} else {
return ret_value__15222__auto__;
}
break;
}
});
cljs$core$async$state_machine__15221__auto__ = function(state_17988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15221__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15221__auto____1.call(this,state_17988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15221__auto____0;
cljs$core$async$state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15221__auto____1;
return cljs$core$async$state_machine__15221__auto__;
})()
;})(switch__15220__auto__,c__15344__auto___18022,out))
})();
var state__15346__auto__ = (function (){var statearr_18017 = (f__15345__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15345__auto__.cljs$core$IFn$_invoke$arity$0() : f__15345__auto__.call(null));
(statearr_18017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15344__auto___18022);

return statearr_18017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15346__auto__);
});})(c__15344__auto___18022,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args18039 = [];
var len__7924__auto___18113 = arguments.length;
var i__7925__auto___18114 = (0);
while(true){
if((i__7925__auto___18114 < len__7924__auto___18113)){
args18039.push((arguments[i__7925__auto___18114]));

var G__18115 = (i__7925__auto___18114 + (1));
i__7925__auto___18114 = G__18115;
continue;
} else {
}
break;
}

var G__18041 = args18039.length;
switch (G__18041) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18039.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15344__auto___18117 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15344__auto___18117,out){
return (function (){
var f__15345__auto__ = (function (){var switch__15220__auto__ = ((function (c__15344__auto___18117,out){
return (function (state_18083){
var state_val_18084 = (state_18083[(1)]);
if((state_val_18084 === (7))){
var inst_18079 = (state_18083[(2)]);
var state_18083__$1 = state_18083;
var statearr_18085_18118 = state_18083__$1;
(statearr_18085_18118[(2)] = inst_18079);

(statearr_18085_18118[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18084 === (1))){
var inst_18042 = [];
var inst_18043 = inst_18042;
var inst_18044 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_18083__$1 = (function (){var statearr_18086 = state_18083;
(statearr_18086[(7)] = inst_18043);

(statearr_18086[(8)] = inst_18044);

return statearr_18086;
})();
var statearr_18087_18119 = state_18083__$1;
(statearr_18087_18119[(2)] = null);

(statearr_18087_18119[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18084 === (4))){
var inst_18047 = (state_18083[(9)]);
var inst_18047__$1 = (state_18083[(2)]);
var inst_18048 = (inst_18047__$1 == null);
var inst_18049 = cljs.core.not(inst_18048);
var state_18083__$1 = (function (){var statearr_18088 = state_18083;
(statearr_18088[(9)] = inst_18047__$1);

return statearr_18088;
})();
if(inst_18049){
var statearr_18089_18120 = state_18083__$1;
(statearr_18089_18120[(1)] = (5));

} else {
var statearr_18090_18121 = state_18083__$1;
(statearr_18090_18121[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18084 === (15))){
var inst_18073 = (state_18083[(2)]);
var state_18083__$1 = state_18083;
var statearr_18091_18122 = state_18083__$1;
(statearr_18091_18122[(2)] = inst_18073);

(statearr_18091_18122[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18084 === (13))){
var state_18083__$1 = state_18083;
var statearr_18092_18123 = state_18083__$1;
(statearr_18092_18123[(2)] = null);

(statearr_18092_18123[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18084 === (6))){
var inst_18043 = (state_18083[(7)]);
var inst_18068 = inst_18043.length;
var inst_18069 = (inst_18068 > (0));
var state_18083__$1 = state_18083;
if(cljs.core.truth_(inst_18069)){
var statearr_18093_18124 = state_18083__$1;
(statearr_18093_18124[(1)] = (12));

} else {
var statearr_18094_18125 = state_18083__$1;
(statearr_18094_18125[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18084 === (3))){
var inst_18081 = (state_18083[(2)]);
var state_18083__$1 = state_18083;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18083__$1,inst_18081);
} else {
if((state_val_18084 === (12))){
var inst_18043 = (state_18083[(7)]);
var inst_18071 = cljs.core.vec(inst_18043);
var state_18083__$1 = state_18083;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18083__$1,(15),out,inst_18071);
} else {
if((state_val_18084 === (2))){
var state_18083__$1 = state_18083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18083__$1,(4),ch);
} else {
if((state_val_18084 === (11))){
var inst_18047 = (state_18083[(9)]);
var inst_18051 = (state_18083[(10)]);
var inst_18061 = (state_18083[(2)]);
var inst_18062 = [];
var inst_18063 = inst_18062.push(inst_18047);
var inst_18043 = inst_18062;
var inst_18044 = inst_18051;
var state_18083__$1 = (function (){var statearr_18095 = state_18083;
(statearr_18095[(7)] = inst_18043);

(statearr_18095[(11)] = inst_18063);

(statearr_18095[(8)] = inst_18044);

(statearr_18095[(12)] = inst_18061);

return statearr_18095;
})();
var statearr_18096_18126 = state_18083__$1;
(statearr_18096_18126[(2)] = null);

(statearr_18096_18126[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18084 === (9))){
var inst_18043 = (state_18083[(7)]);
var inst_18059 = cljs.core.vec(inst_18043);
var state_18083__$1 = state_18083;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18083__$1,(11),out,inst_18059);
} else {
if((state_val_18084 === (5))){
var inst_18047 = (state_18083[(9)]);
var inst_18051 = (state_18083[(10)]);
var inst_18044 = (state_18083[(8)]);
var inst_18051__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18047) : f.call(null,inst_18047));
var inst_18052 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18051__$1,inst_18044);
var inst_18053 = cljs.core.keyword_identical_QMARK_(inst_18044,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_18054 = (inst_18052) || (inst_18053);
var state_18083__$1 = (function (){var statearr_18097 = state_18083;
(statearr_18097[(10)] = inst_18051__$1);

return statearr_18097;
})();
if(cljs.core.truth_(inst_18054)){
var statearr_18098_18127 = state_18083__$1;
(statearr_18098_18127[(1)] = (8));

} else {
var statearr_18099_18128 = state_18083__$1;
(statearr_18099_18128[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18084 === (14))){
var inst_18076 = (state_18083[(2)]);
var inst_18077 = cljs.core.async.close_BANG_(out);
var state_18083__$1 = (function (){var statearr_18101 = state_18083;
(statearr_18101[(13)] = inst_18076);

return statearr_18101;
})();
var statearr_18102_18129 = state_18083__$1;
(statearr_18102_18129[(2)] = inst_18077);

(statearr_18102_18129[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18084 === (10))){
var inst_18066 = (state_18083[(2)]);
var state_18083__$1 = state_18083;
var statearr_18103_18130 = state_18083__$1;
(statearr_18103_18130[(2)] = inst_18066);

(statearr_18103_18130[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18084 === (8))){
var inst_18047 = (state_18083[(9)]);
var inst_18043 = (state_18083[(7)]);
var inst_18051 = (state_18083[(10)]);
var inst_18056 = inst_18043.push(inst_18047);
var tmp18100 = inst_18043;
var inst_18043__$1 = tmp18100;
var inst_18044 = inst_18051;
var state_18083__$1 = (function (){var statearr_18104 = state_18083;
(statearr_18104[(7)] = inst_18043__$1);

(statearr_18104[(8)] = inst_18044);

(statearr_18104[(14)] = inst_18056);

return statearr_18104;
})();
var statearr_18105_18131 = state_18083__$1;
(statearr_18105_18131[(2)] = null);

(statearr_18105_18131[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15344__auto___18117,out))
;
return ((function (switch__15220__auto__,c__15344__auto___18117,out){
return (function() {
var cljs$core$async$state_machine__15221__auto__ = null;
var cljs$core$async$state_machine__15221__auto____0 = (function (){
var statearr_18109 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18109[(0)] = cljs$core$async$state_machine__15221__auto__);

(statearr_18109[(1)] = (1));

return statearr_18109;
});
var cljs$core$async$state_machine__15221__auto____1 = (function (state_18083){
while(true){
var ret_value__15222__auto__ = (function (){try{while(true){
var result__15223__auto__ = switch__15220__auto__(state_18083);
if(cljs.core.keyword_identical_QMARK_(result__15223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15223__auto__;
}
break;
}
}catch (e18110){if((e18110 instanceof Object)){
var ex__15224__auto__ = e18110;
var statearr_18111_18132 = state_18083;
(statearr_18111_18132[(5)] = ex__15224__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18083);

return cljs.core.cst$kw$recur;
} else {
throw e18110;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15222__auto__,cljs.core.cst$kw$recur)){
var G__18133 = state_18083;
state_18083 = G__18133;
continue;
} else {
return ret_value__15222__auto__;
}
break;
}
});
cljs$core$async$state_machine__15221__auto__ = function(state_18083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15221__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15221__auto____1.call(this,state_18083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15221__auto____0;
cljs$core$async$state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15221__auto____1;
return cljs$core$async$state_machine__15221__auto__;
})()
;})(switch__15220__auto__,c__15344__auto___18117,out))
})();
var state__15346__auto__ = (function (){var statearr_18112 = (f__15345__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15345__auto__.cljs$core$IFn$_invoke$arity$0() : f__15345__auto__.call(null));
(statearr_18112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15344__auto___18117);

return statearr_18112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15346__auto__);
});})(c__15344__auto___18117,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

