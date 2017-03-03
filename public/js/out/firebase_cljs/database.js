// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('firebase_cljs.database');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('firebase_cljs.promise');
goog.require('firebase_cljs.database.datasnapshot');
goog.require('firebase_cljs.database.query');
goog.require('firebase_cljs.database.reference');

/**
 * @interface
 */
firebase_cljs.database.FirebaseDatabase = function(){};

/**
 * The App associated with the Database service instance.
 */
firebase_cljs.database.get_app = (function firebase_cljs$database$get_app(_){
if((!((_ == null))) && (!((_.firebase_cljs$database$FirebaseDatabase$get_app$arity$1 == null)))){
return _.firebase_cljs$database$FirebaseDatabase$get_app$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.get_app[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.get_app["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseDatabase.get-app",_);
}
}
}
});

/**
 * Disconnect from the server (all database operations will be completed offline).
 */
firebase_cljs.database.offline = (function firebase_cljs$database$offline(_){
if((!((_ == null))) && (!((_.firebase_cljs$database$FirebaseDatabase$offline$arity$1 == null)))){
return _.firebase_cljs$database$FirebaseDatabase$offline$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.offline[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.offline["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseDatabase.offline",_);
}
}
}
});

/**
 * (Re)connect to the server and synchronize the offline database state with the server state.
 */
firebase_cljs.database.online = (function firebase_cljs$database$online(_){
if((!((_ == null))) && (!((_.firebase_cljs$database$FirebaseDatabase$online$arity$1 == null)))){
return _.firebase_cljs$database$FirebaseDatabase$online$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.online[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.online["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseDatabase.online",_);
}
}
}
});

/**
 * Returns a reference to the root or the specified path.
 */
firebase_cljs.database.get_ref = (function firebase_cljs$database$get_ref(var_args){
var args13339 = [];
var len__7924__auto___13345 = arguments.length;
var i__7925__auto___13346 = (0);
while(true){
if((i__7925__auto___13346 < len__7924__auto___13345)){
args13339.push((arguments[i__7925__auto___13346]));

var G__13347 = (i__7925__auto___13346 + (1));
i__7925__auto___13346 = G__13347;
continue;
} else {
}
break;
}

var G__13341 = args13339.length;
switch (G__13341) {
case 1:
return firebase_cljs.database.get_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return firebase_cljs.database.get_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13339.length)].join('')));

}
});

firebase_cljs.database.get_ref.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.firebase_cljs$database$FirebaseDatabase$get_ref$arity$1 == null)))){
return _.firebase_cljs$database$FirebaseDatabase$get_ref$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.get_ref[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.get_ref["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseDatabase.get-ref",_);
}
}
}
});

firebase_cljs.database.get_ref.cljs$core$IFn$_invoke$arity$2 = (function (_,path){
if((!((_ == null))) && (!((_.firebase_cljs$database$FirebaseDatabase$get_ref$arity$2 == null)))){
return _.firebase_cljs$database$FirebaseDatabase$get_ref$arity$2(_,path);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.get_ref[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,path) : m__7480__auto__.call(null,_,path));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.get_ref["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,path) : m__7480__auto____$1.call(null,_,path));
} else {
throw cljs.core.missing_protocol("FirebaseDatabase.get-ref",_);
}
}
}
});

firebase_cljs.database.get_ref.cljs$lang$maxFixedArity = 2;


/**
 * Returns a reference to the root or the path specified in url. An exception is thrown if the url is not in the same domain as the current database.
 */
firebase_cljs.database.get_ref_url = (function firebase_cljs$database$get_ref_url(var_args){
var args13342 = [];
var len__7924__auto___13349 = arguments.length;
var i__7925__auto___13350 = (0);
while(true){
if((i__7925__auto___13350 < len__7924__auto___13349)){
args13342.push((arguments[i__7925__auto___13350]));

var G__13351 = (i__7925__auto___13350 + (1));
i__7925__auto___13350 = G__13351;
continue;
} else {
}
break;
}

var G__13344 = args13342.length;
switch (G__13344) {
case 1:
return firebase_cljs.database.get_ref_url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return firebase_cljs.database.get_ref_url.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13342.length)].join('')));

}
});

firebase_cljs.database.get_ref_url.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.firebase_cljs$database$FirebaseDatabase$get_ref_url$arity$1 == null)))){
return _.firebase_cljs$database$FirebaseDatabase$get_ref_url$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.get_ref_url[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.get_ref_url["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseDatabase.get-ref-url",_);
}
}
}
});

firebase_cljs.database.get_ref_url.cljs$core$IFn$_invoke$arity$2 = (function (_,url){
if((!((_ == null))) && (!((_.firebase_cljs$database$FirebaseDatabase$get_ref_url$arity$2 == null)))){
return _.firebase_cljs$database$FirebaseDatabase$get_ref_url$arity$2(_,url);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.get_ref_url[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,url) : m__7480__auto__.call(null,_,url));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.get_ref_url["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,url) : m__7480__auto____$1.call(null,_,url));
} else {
throw cljs.core.missing_protocol("FirebaseDatabase.get-ref-url",_);
}
}
}
});

firebase_cljs.database.get_ref_url.cljs$lang$maxFixedArity = 2;


firebase.database.Database.prototype.firebase_cljs$database$FirebaseDatabase$ = cljs.core.PROTOCOL_SENTINEL;

firebase.database.Database.prototype.firebase_cljs$database$FirebaseDatabase$get_app$arity$1 = (function (db){
var db__$1 = this;
return db__$1.app;
});

firebase.database.Database.prototype.firebase_cljs$database$FirebaseDatabase$offline$arity$1 = (function (db){
var db__$1 = this;
return db__$1.goOffline();
});

firebase.database.Database.prototype.firebase_cljs$database$FirebaseDatabase$online$arity$1 = (function (db){
var db__$1 = this;
return db__$1.goOnline();
});

firebase.database.Database.prototype.firebase_cljs$database$FirebaseDatabase$get_ref$arity$1 = (function (db){
var db__$1 = this;
return db__$1.ref();
});

firebase.database.Database.prototype.firebase_cljs$database$FirebaseDatabase$get_ref$arity$2 = (function (db,path){
var db__$1 = this;
return db__$1.ref(path);
});

firebase.database.Database.prototype.firebase_cljs$database$FirebaseDatabase$get_ref_url$arity$1 = (function (db){
var db__$1 = this;
return db__$1.refFromURL();
});

firebase.database.Database.prototype.firebase_cljs$database$FirebaseDatabase$get_ref_url$arity$2 = (function (db,url){
var db__$1 = this;
return db__$1.refFromURL(url);
});

/**
 * @interface
 */
firebase_cljs.database.MatchboxDatabase = function(){};

/**
 * Get child reference as input type.
 */
firebase_cljs.database.get_in = (function firebase_cljs$database$get_in(_,korks){
if((!((_ == null))) && (!((_.firebase_cljs$database$MatchboxDatabase$get_in$arity$2 == null)))){
return _.firebase_cljs$database$MatchboxDatabase$get_in$arity$2(_,korks);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.get_in[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,korks) : m__7480__auto__.call(null,_,korks));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.get_in["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,korks) : m__7480__auto____$1.call(null,_,korks));
} else {
throw cljs.core.missing_protocol("MatchboxDatabase.get-in",_);
}
}
}
});

/**
 * Set a reference value. Accepts reference and promises.
 */
firebase_cljs.database.reset_BANG_ = (function firebase_cljs$database$reset_BANG_(var_args){
var args13353 = [];
var len__7924__auto___13380 = arguments.length;
var i__7925__auto___13381 = (0);
while(true){
if((i__7925__auto___13381 < len__7924__auto___13380)){
args13353.push((arguments[i__7925__auto___13381]));

var G__13382 = (i__7925__auto___13381 + (1));
i__7925__auto___13381 = G__13382;
continue;
} else {
}
break;
}

var G__13355 = args13353.length;
switch (G__13355) {
case 2:
return firebase_cljs.database.reset_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return firebase_cljs.database.reset_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13353.length)].join('')));

}
});

firebase_cljs.database.reset_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,val){
if((!((_ == null))) && (!((_.firebase_cljs$database$MatchboxDatabase$reset_BANG_$arity$2 == null)))){
return _.firebase_cljs$database$MatchboxDatabase$reset_BANG_$arity$2(_,val);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.reset_BANG_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,val) : m__7480__auto__.call(null,_,val));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.reset_BANG_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,val) : m__7480__auto____$1.call(null,_,val));
} else {
throw cljs.core.missing_protocol("MatchboxDatabase.reset!",_);
}
}
}
});

firebase_cljs.database.reset_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,val,callback){
if((!((_ == null))) && (!((_.firebase_cljs$database$MatchboxDatabase$reset_BANG_$arity$3 == null)))){
return _.firebase_cljs$database$MatchboxDatabase$reset_BANG_$arity$3(_,val,callback);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.reset_BANG_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,val,callback) : m__7480__auto__.call(null,_,val,callback));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.reset_BANG_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,val,callback) : m__7480__auto____$1.call(null,_,val,callback));
} else {
throw cljs.core.missing_protocol("MatchboxDatabase.reset!",_);
}
}
}
});

firebase_cljs.database.reset_BANG_.cljs$lang$maxFixedArity = 3;


/**
 * Swap a reference value. Accepts reference and promises.
 */
firebase_cljs.database.swap_BANG_ = (function firebase_cljs$database$swap_BANG_(var_args){
var args13356 = [];
var len__7924__auto___13384 = arguments.length;
var i__7925__auto___13385 = (0);
while(true){
if((i__7925__auto___13385 < len__7924__auto___13384)){
args13356.push((arguments[i__7925__auto___13385]));

var G__13386 = (i__7925__auto___13385 + (1));
i__7925__auto___13385 = G__13386;
continue;
} else {
}
break;
}

var G__13358 = args13356.length;
switch (G__13358) {
case 2:
return firebase_cljs.database.swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return firebase_cljs.database.swap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13356.length)].join('')));

}
});

firebase_cljs.database.swap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,fn){
if((!((_ == null))) && (!((_.firebase_cljs$database$MatchboxDatabase$swap_BANG_$arity$2 == null)))){
return _.firebase_cljs$database$MatchboxDatabase$swap_BANG_$arity$2(_,fn);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.swap_BANG_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,fn) : m__7480__auto__.call(null,_,fn));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.swap_BANG_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,fn) : m__7480__auto____$1.call(null,_,fn));
} else {
throw cljs.core.missing_protocol("MatchboxDatabase.swap!",_);
}
}
}
});

firebase_cljs.database.swap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,fn,callback){
if((!((_ == null))) && (!((_.firebase_cljs$database$MatchboxDatabase$swap_BANG_$arity$3 == null)))){
return _.firebase_cljs$database$MatchboxDatabase$swap_BANG_$arity$3(_,fn,callback);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.swap_BANG_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,fn,callback) : m__7480__auto__.call(null,_,fn,callback));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.swap_BANG_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,fn,callback) : m__7480__auto____$1.call(null,_,fn,callback));
} else {
throw cljs.core.missing_protocol("MatchboxDatabase.swap!",_);
}
}
}
});

firebase_cljs.database.swap_BANG_.cljs$lang$maxFixedArity = 3;


/**
 * Merge object into reference.
 */
firebase_cljs.database.merge_BANG_ = (function firebase_cljs$database$merge_BANG_(var_args){
var args13359 = [];
var len__7924__auto___13388 = arguments.length;
var i__7925__auto___13389 = (0);
while(true){
if((i__7925__auto___13389 < len__7924__auto___13388)){
args13359.push((arguments[i__7925__auto___13389]));

var G__13390 = (i__7925__auto___13389 + (1));
i__7925__auto___13389 = G__13390;
continue;
} else {
}
break;
}

var G__13361 = args13359.length;
switch (G__13361) {
case 2:
return firebase_cljs.database.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return firebase_cljs.database.merge_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13359.length)].join('')));

}
});

firebase_cljs.database.merge_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,obj){
if((!((_ == null))) && (!((_.firebase_cljs$database$MatchboxDatabase$merge_BANG_$arity$2 == null)))){
return _.firebase_cljs$database$MatchboxDatabase$merge_BANG_$arity$2(_,obj);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.merge_BANG_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,obj) : m__7480__auto__.call(null,_,obj));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.merge_BANG_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,obj) : m__7480__auto____$1.call(null,_,obj));
} else {
throw cljs.core.missing_protocol("MatchboxDatabase.merge!",_);
}
}
}
});

firebase_cljs.database.merge_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,obj,callback){
if((!((_ == null))) && (!((_.firebase_cljs$database$MatchboxDatabase$merge_BANG_$arity$3 == null)))){
return _.firebase_cljs$database$MatchboxDatabase$merge_BANG_$arity$3(_,obj,callback);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.merge_BANG_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,obj,callback) : m__7480__auto__.call(null,_,obj,callback));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.merge_BANG_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,obj,callback) : m__7480__auto____$1.call(null,_,obj,callback));
} else {
throw cljs.core.missing_protocol("MatchboxDatabase.merge!",_);
}
}
}
});

firebase_cljs.database.merge_BANG_.cljs$lang$maxFixedArity = 3;


/**
 * Conjoin value onto reference.
 */
firebase_cljs.database.conj_BANG_ = (function firebase_cljs$database$conj_BANG_(var_args){
var args13362 = [];
var len__7924__auto___13392 = arguments.length;
var i__7925__auto___13393 = (0);
while(true){
if((i__7925__auto___13393 < len__7924__auto___13392)){
args13362.push((arguments[i__7925__auto___13393]));

var G__13394 = (i__7925__auto___13393 + (1));
i__7925__auto___13393 = G__13394;
continue;
} else {
}
break;
}

var G__13364 = args13362.length;
switch (G__13364) {
case 2:
return firebase_cljs.database.conj_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return firebase_cljs.database.conj_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13362.length)].join('')));

}
});

firebase_cljs.database.conj_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,val){
if((!((_ == null))) && (!((_.firebase_cljs$database$MatchboxDatabase$conj_BANG_$arity$2 == null)))){
return _.firebase_cljs$database$MatchboxDatabase$conj_BANG_$arity$2(_,val);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.conj_BANG_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,val) : m__7480__auto__.call(null,_,val));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.conj_BANG_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,val) : m__7480__auto____$1.call(null,_,val));
} else {
throw cljs.core.missing_protocol("MatchboxDatabase.conj!",_);
}
}
}
});

firebase_cljs.database.conj_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,val,callback){
if((!((_ == null))) && (!((_.firebase_cljs$database$MatchboxDatabase$conj_BANG_$arity$3 == null)))){
return _.firebase_cljs$database$MatchboxDatabase$conj_BANG_$arity$3(_,val,callback);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.conj_BANG_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,val,callback) : m__7480__auto__.call(null,_,val,callback));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.conj_BANG_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,val,callback) : m__7480__auto____$1.call(null,_,val,callback));
} else {
throw cljs.core.missing_protocol("MatchboxDatabase.conj!",_);
}
}
}
});

firebase_cljs.database.conj_BANG_.cljs$lang$maxFixedArity = 3;


/**
 * Remove reference.
 */
firebase_cljs.database.remove_BANG_ = (function firebase_cljs$database$remove_BANG_(var_args){
var args13365 = [];
var len__7924__auto___13396 = arguments.length;
var i__7925__auto___13397 = (0);
while(true){
if((i__7925__auto___13397 < len__7924__auto___13396)){
args13365.push((arguments[i__7925__auto___13397]));

var G__13398 = (i__7925__auto___13397 + (1));
i__7925__auto___13397 = G__13398;
continue;
} else {
}
break;
}

var G__13367 = args13365.length;
switch (G__13367) {
case 1:
return firebase_cljs.database.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return firebase_cljs.database.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13365.length)].join('')));

}
});

firebase_cljs.database.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.firebase_cljs$database$MatchboxDatabase$remove_BANG_$arity$1 == null)))){
return _.firebase_cljs$database$MatchboxDatabase$remove_BANG_$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.remove_BANG_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.remove_BANG_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("MatchboxDatabase.remove!",_);
}
}
}
});

firebase_cljs.database.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,callback){
if((!((_ == null))) && (!((_.firebase_cljs$database$MatchboxDatabase$remove_BANG_$arity$2 == null)))){
return _.firebase_cljs$database$MatchboxDatabase$remove_BANG_$arity$2(_,callback);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.remove_BANG_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,callback) : m__7480__auto__.call(null,_,callback));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.remove_BANG_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,callback) : m__7480__auto____$1.call(null,_,callback));
} else {
throw cljs.core.missing_protocol("MatchboxDatabase.remove!",_);
}
}
}
});

firebase_cljs.database.remove_BANG_.cljs$lang$maxFixedArity = 2;


/**
 * Listen to reference by event 'type'.
 */
firebase_cljs.database.listen = (function firebase_cljs$database$listen(var_args){
var args13368 = [];
var len__7924__auto___13400 = arguments.length;
var i__7925__auto___13401 = (0);
while(true){
if((i__7925__auto___13401 < len__7924__auto___13400)){
args13368.push((arguments[i__7925__auto___13401]));

var G__13402 = (i__7925__auto___13401 + (1));
i__7925__auto___13401 = G__13402;
continue;
} else {
}
break;
}

var G__13370 = args13368.length;
switch (G__13370) {
case 3:
return firebase_cljs.database.listen.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return firebase_cljs.database.listen.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return firebase_cljs.database.listen.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13368.length)].join('')));

}
});

firebase_cljs.database.listen.cljs$core$IFn$_invoke$arity$3 = (function (_,type,callback){
if((!((_ == null))) && (!((_.firebase_cljs$database$MatchboxDatabase$listen$arity$3 == null)))){
return _.firebase_cljs$database$MatchboxDatabase$listen$arity$3(_,type,callback);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.listen[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,type,callback) : m__7480__auto__.call(null,_,type,callback));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.listen["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,type,callback) : m__7480__auto____$1.call(null,_,type,callback));
} else {
throw cljs.core.missing_protocol("MatchboxDatabase.listen",_);
}
}
}
});

firebase_cljs.database.listen.cljs$core$IFn$_invoke$arity$4 = (function (_,korks,type,callback){
if((!((_ == null))) && (!((_.firebase_cljs$database$MatchboxDatabase$listen$arity$4 == null)))){
return _.firebase_cljs$database$MatchboxDatabase$listen$arity$4(_,korks,type,callback);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.listen[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$4(_,korks,type,callback) : m__7480__auto__.call(null,_,korks,type,callback));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.listen["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$4(_,korks,type,callback) : m__7480__auto____$1.call(null,_,korks,type,callback));
} else {
throw cljs.core.missing_protocol("MatchboxDatabase.listen",_);
}
}
}
});

firebase_cljs.database.listen.cljs$core$IFn$_invoke$arity$5 = (function (_,korks,type,callback,failure){
if((!((_ == null))) && (!((_.firebase_cljs$database$MatchboxDatabase$listen$arity$5 == null)))){
return _.firebase_cljs$database$MatchboxDatabase$listen$arity$5(_,korks,type,callback,failure);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.listen[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$5 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$5(_,korks,type,callback,failure) : m__7480__auto__.call(null,_,korks,type,callback,failure));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.listen["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$5(_,korks,type,callback,failure) : m__7480__auto____$1.call(null,_,korks,type,callback,failure));
} else {
throw cljs.core.missing_protocol("MatchboxDatabase.listen",_);
}
}
}
});

firebase_cljs.database.listen.cljs$lang$maxFixedArity = 5;


/**
 * Listen to a promise reference by event 'type'.
 */
firebase_cljs.database.listen_promise = (function firebase_cljs$database$listen_promise(var_args){
var args13371 = [];
var len__7924__auto___13404 = arguments.length;
var i__7925__auto___13405 = (0);
while(true){
if((i__7925__auto___13405 < len__7924__auto___13404)){
args13371.push((arguments[i__7925__auto___13405]));

var G__13406 = (i__7925__auto___13405 + (1));
i__7925__auto___13405 = G__13406;
continue;
} else {
}
break;
}

var G__13373 = args13371.length;
switch (G__13373) {
case 3:
return firebase_cljs.database.listen_promise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return firebase_cljs.database.listen_promise.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13371.length)].join('')));

}
});

firebase_cljs.database.listen_promise.cljs$core$IFn$_invoke$arity$3 = (function (_,type,callback){
if((!((_ == null))) && (!((_.firebase_cljs$database$MatchboxDatabase$listen_promise$arity$3 == null)))){
return _.firebase_cljs$database$MatchboxDatabase$listen_promise$arity$3(_,type,callback);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.listen_promise[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,type,callback) : m__7480__auto__.call(null,_,type,callback));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.listen_promise["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,type,callback) : m__7480__auto____$1.call(null,_,type,callback));
} else {
throw cljs.core.missing_protocol("MatchboxDatabase.listen-promise",_);
}
}
}
});

firebase_cljs.database.listen_promise.cljs$core$IFn$_invoke$arity$4 = (function (_,korks,type,callback){
if((!((_ == null))) && (!((_.firebase_cljs$database$MatchboxDatabase$listen_promise$arity$4 == null)))){
return _.firebase_cljs$database$MatchboxDatabase$listen_promise$arity$4(_,korks,type,callback);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.listen_promise[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$4(_,korks,type,callback) : m__7480__auto__.call(null,_,korks,type,callback));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.listen_promise["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$4(_,korks,type,callback) : m__7480__auto____$1.call(null,_,korks,type,callback));
} else {
throw cljs.core.missing_protocol("MatchboxDatabase.listen-promise",_);
}
}
}
});

firebase_cljs.database.listen_promise.cljs$lang$maxFixedArity = 4;


/**
 * Listen to reference event 'type' once.
 */
firebase_cljs.database.listen_once = (function firebase_cljs$database$listen_once(var_args){
var args13374 = [];
var len__7924__auto___13408 = arguments.length;
var i__7925__auto___13409 = (0);
while(true){
if((i__7925__auto___13409 < len__7924__auto___13408)){
args13374.push((arguments[i__7925__auto___13409]));

var G__13410 = (i__7925__auto___13409 + (1));
i__7925__auto___13409 = G__13410;
continue;
} else {
}
break;
}

var G__13376 = args13374.length;
switch (G__13376) {
case 3:
return firebase_cljs.database.listen_once.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return firebase_cljs.database.listen_once.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13374.length)].join('')));

}
});

firebase_cljs.database.listen_once.cljs$core$IFn$_invoke$arity$3 = (function (_,type,callback){
if((!((_ == null))) && (!((_.firebase_cljs$database$MatchboxDatabase$listen_once$arity$3 == null)))){
return _.firebase_cljs$database$MatchboxDatabase$listen_once$arity$3(_,type,callback);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.listen_once[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,type,callback) : m__7480__auto__.call(null,_,type,callback));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.listen_once["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,type,callback) : m__7480__auto____$1.call(null,_,type,callback));
} else {
throw cljs.core.missing_protocol("MatchboxDatabase.listen-once",_);
}
}
}
});

firebase_cljs.database.listen_once.cljs$core$IFn$_invoke$arity$4 = (function (_,korks,type,callback){
if((!((_ == null))) && (!((_.firebase_cljs$database$MatchboxDatabase$listen_once$arity$4 == null)))){
return _.firebase_cljs$database$MatchboxDatabase$listen_once$arity$4(_,korks,type,callback);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.listen_once[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$4(_,korks,type,callback) : m__7480__auto__.call(null,_,korks,type,callback));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.listen_once["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$4(_,korks,type,callback) : m__7480__auto____$1.call(null,_,korks,type,callback));
} else {
throw cljs.core.missing_protocol("MatchboxDatabase.listen-once",_);
}
}
}
});

firebase_cljs.database.listen_once.cljs$lang$maxFixedArity = 4;


/**
 * Disable listener by event (or event and callback).
 */
firebase_cljs.database.disable_listener_BANG_ = (function firebase_cljs$database$disable_listener_BANG_(var_args){
var args13377 = [];
var len__7924__auto___13412 = arguments.length;
var i__7925__auto___13413 = (0);
while(true){
if((i__7925__auto___13413 < len__7924__auto___13412)){
args13377.push((arguments[i__7925__auto___13413]));

var G__13414 = (i__7925__auto___13413 + (1));
i__7925__auto___13413 = G__13414;
continue;
} else {
}
break;
}

var G__13379 = args13377.length;
switch (G__13379) {
case 2:
return firebase_cljs.database.disable_listener_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return firebase_cljs.database.disable_listener_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13377.length)].join('')));

}
});

firebase_cljs.database.disable_listener_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,event){
if((!((_ == null))) && (!((_.firebase_cljs$database$MatchboxDatabase$disable_listener_BANG_$arity$2 == null)))){
return _.firebase_cljs$database$MatchboxDatabase$disable_listener_BANG_$arity$2(_,event);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.disable_listener_BANG_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,event) : m__7480__auto__.call(null,_,event));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.disable_listener_BANG_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,event) : m__7480__auto____$1.call(null,_,event));
} else {
throw cljs.core.missing_protocol("MatchboxDatabase.disable-listener!",_);
}
}
}
});

firebase_cljs.database.disable_listener_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,event,callback){
if((!((_ == null))) && (!((_.firebase_cljs$database$MatchboxDatabase$disable_listener_BANG_$arity$3 == null)))){
return _.firebase_cljs$database$MatchboxDatabase$disable_listener_BANG_$arity$3(_,event,callback);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.disable_listener_BANG_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,event,callback) : m__7480__auto__.call(null,_,event,callback));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.disable_listener_BANG_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,event,callback) : m__7480__auto____$1.call(null,_,event,callback));
} else {
throw cljs.core.missing_protocol("MatchboxDatabase.disable-listener!",_);
}
}
}
});

firebase_cljs.database.disable_listener_BANG_.cljs$lang$maxFixedArity = 3;


firebase_cljs.database.korks__GT_path = (function firebase_cljs$database$korks__GT_path(korks){
if(cljs.core.vector_QMARK_(korks)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__13416_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__13416_SHARP_))].join('');
}),korks));
} else {
return korks;
}
});
firebase.database.Database.prototype.firebase_cljs$database$MatchboxDatabase$ = cljs.core.PROTOCOL_SENTINEL;

firebase.database.Database.prototype.firebase_cljs$database$MatchboxDatabase$get_in$arity$2 = (function (db,korks){
var db__$1 = this;
return firebase_cljs.database.get_ref.cljs$core$IFn$_invoke$arity$2(db__$1,firebase_cljs.database.korks__GT_path(korks));
});

firebase.database.Database.prototype.firebase_cljs$database$MatchboxDatabase$reset_BANG_$arity$2 = (function (db,val){
var db__$1 = this;
return firebase_cljs.database.reset_BANG_.cljs$core$IFn$_invoke$arity$2(firebase_cljs.database.get_ref.cljs$core$IFn$_invoke$arity$1(db__$1),val);
});

firebase.database.Database.prototype.firebase_cljs$database$MatchboxDatabase$reset_BANG_$arity$3 = (function (db,val,callback){
var db__$1 = this;
return firebase_cljs.database.reset_BANG_.cljs$core$IFn$_invoke$arity$3(firebase_cljs.database.get_ref.cljs$core$IFn$_invoke$arity$1(db__$1),val,callback);
});

firebase.database.Database.prototype.firebase_cljs$database$MatchboxDatabase$swap_BANG_$arity$2 = (function (db,fn){
var db__$1 = this;
return firebase_cljs.database.reset_BANG_.cljs$core$IFn$_invoke$arity$2(firebase_cljs.database.get_ref.cljs$core$IFn$_invoke$arity$1(db__$1),fn);
});

firebase.database.Database.prototype.firebase_cljs$database$MatchboxDatabase$swap_BANG_$arity$3 = (function (db,fn,callback){
var db__$1 = this;
return firebase_cljs.database.reset_BANG_.cljs$core$IFn$_invoke$arity$3(firebase_cljs.database.get_ref.cljs$core$IFn$_invoke$arity$1(db__$1),fn,callback);
});

firebase.database.Database.prototype.firebase_cljs$database$MatchboxDatabase$merge_BANG_$arity$2 = (function (db,obj){
var db__$1 = this;
return firebase_cljs.database.merge_BANG_.cljs$core$IFn$_invoke$arity$2(firebase_cljs.database.get_ref.cljs$core$IFn$_invoke$arity$1(db__$1),obj);
});

firebase.database.Database.prototype.firebase_cljs$database$MatchboxDatabase$merge_BANG_$arity$3 = (function (db,obj,callback){
var db__$1 = this;
return firebase_cljs.database.merge_BANG_.cljs$core$IFn$_invoke$arity$3(firebase_cljs.database.get_ref.cljs$core$IFn$_invoke$arity$1(db__$1),obj,callback);
});

firebase.database.Database.prototype.firebase_cljs$database$MatchboxDatabase$conj_BANG_$arity$2 = (function (db,val){
var db__$1 = this;
return firebase_cljs.database.conj_BANG_.cljs$core$IFn$_invoke$arity$2(firebase_cljs.database.get_ref.cljs$core$IFn$_invoke$arity$1(db__$1),val);
});

firebase.database.Database.prototype.firebase_cljs$database$MatchboxDatabase$conj_BANG_$arity$3 = (function (db,val,callback){
var db__$1 = this;
return firebase_cljs.database.conj_BANG_.cljs$core$IFn$_invoke$arity$3(firebase_cljs.database.get_ref.cljs$core$IFn$_invoke$arity$1(db__$1),val,callback);
});

firebase.database.Database.prototype.firebase_cljs$database$MatchboxDatabase$remove_BANG_$arity$1 = (function (db){
var db__$1 = this;
return firebase_cljs.database.remove_BANG_.cljs$core$IFn$_invoke$arity$1(firebase_cljs.database.get_ref.cljs$core$IFn$_invoke$arity$1(db__$1));
});

firebase.database.Database.prototype.firebase_cljs$database$MatchboxDatabase$remove_BANG_$arity$2 = (function (db,callback){
var db__$1 = this;
return firebase_cljs.database.remove_BANG_.cljs$core$IFn$_invoke$arity$2(firebase_cljs.database.get_ref.cljs$core$IFn$_invoke$arity$1(db__$1),callback);
});

firebase.database.Database.prototype.firebase_cljs$database$MatchboxDatabase$listen$arity$3 = (function (db,type,callback){
var db__$1 = this;
return firebase_cljs.database.listen.cljs$core$IFn$_invoke$arity$3(firebase_cljs.database.get_ref.cljs$core$IFn$_invoke$arity$1(db__$1),type,callback);
});

firebase.database.Database.prototype.firebase_cljs$database$MatchboxDatabase$listen$arity$4 = (function (db,korks,type,callback){
var db__$1 = this;
return firebase_cljs.database.listen.cljs$core$IFn$_invoke$arity$4(firebase_cljs.database.get_ref.cljs$core$IFn$_invoke$arity$1(db__$1),korks,type,callback);
});

firebase.database.Database.prototype.firebase_cljs$database$MatchboxDatabase$listen$arity$5 = (function (db,korks,type,callback,failure){
var db__$1 = this;
return firebase_cljs.database.listen.cljs$core$IFn$_invoke$arity$5(firebase_cljs.database.get_ref.cljs$core$IFn$_invoke$arity$1(db__$1),korks,type,callback,failure);
});

firebase.database.Database.prototype.firebase_cljs$database$MatchboxDatabase$listen_promise$arity$3 = (function (db,type,callback){
var db__$1 = this;
return firebase_cljs.promise.then.cljs$core$IFn$_invoke$arity$2(firebase_cljs.database.query.once.cljs$core$IFn$_invoke$arity$2(firebase_cljs.database.get_ref.cljs$core$IFn$_invoke$arity$1(db__$1),type),callback);
});

firebase.database.Database.prototype.firebase_cljs$database$MatchboxDatabase$listen_promise$arity$4 = (function (db,korks,type,callback){
var db__$1 = this;
return firebase_cljs.promise.then.cljs$core$IFn$_invoke$arity$2(firebase_cljs.database.query.once.cljs$core$IFn$_invoke$arity$2(firebase_cljs.database.get_in(db__$1,korks),type),callback);
});

firebase.database.Database.prototype.firebase_cljs$database$MatchboxDatabase$listen_once$arity$3 = (function (db,type,callback){
var db__$1 = this;
return firebase_cljs.database.listen_once.cljs$core$IFn$_invoke$arity$3(firebase_cljs.database.get_ref.cljs$core$IFn$_invoke$arity$1(db__$1),type,callback);
});

firebase.database.Database.prototype.firebase_cljs$database$MatchboxDatabase$listen_once$arity$4 = (function (db,korks,type,callback){
var db__$1 = this;
return firebase_cljs.database.listen_once.cljs$core$IFn$_invoke$arity$3(firebase_cljs.database.get_in(firebase_cljs.database.get_ref.cljs$core$IFn$_invoke$arity$1(db__$1),korks),type,callback);
});

firebase.database.Database.prototype.firebase_cljs$database$MatchboxDatabase$disable_listener_BANG_$arity$2 = (function (db,event){
var db__$1 = this;
return firebase_cljs.database.disable_listener_BANG_.cljs$core$IFn$_invoke$arity$2(firebase_cljs.database.get_ref.cljs$core$IFn$_invoke$arity$1(db__$1),event);
});

firebase.database.Database.prototype.firebase_cljs$database$MatchboxDatabase$disable_listener_BANG_$arity$3 = (function (db,event,callback){
var db__$1 = this;
return firebase_cljs.database.disable_listener_BANG_.cljs$core$IFn$_invoke$arity$3(firebase_cljs.database.get_ref.cljs$core$IFn$_invoke$arity$1(db__$1),event,callback);
});

(firebase_cljs.database.MatchboxDatabase["object"] = true);

(firebase_cljs.database.get_in["object"] = (function (ref,korks){
return firebase_cljs.database.reference.get_child(ref,firebase_cljs.database.korks__GT_path(korks));
}));

(firebase_cljs.database.reset_BANG_["object"] = (function() {
var G__13417 = null;
var G__13417__2 = (function (ref,val){
return firebase_cljs.database.reference.set_BANG_.cljs$core$IFn$_invoke$arity$2(ref,cljs.core.clj__GT_js(val));
});
var G__13417__3 = (function (ref,val,callback){
return firebase_cljs.database.reference.set_BANG_.cljs$core$IFn$_invoke$arity$3(ref,cljs.core.clj__GT_js(val),callback);
});
G__13417 = function(ref,val,callback){
switch(arguments.length){
case 2:
return G__13417__2.call(this,ref,val);
case 3:
return G__13417__3.call(this,ref,val,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13417.cljs$core$IFn$_invoke$arity$2 = G__13417__2;
G__13417.cljs$core$IFn$_invoke$arity$3 = G__13417__3;
return G__13417;
})()
);

(firebase_cljs.database.swap_BANG_["object"] = (function() {
var G__13418 = null;
var G__13418__2 = (function (ref,fn){
return firebase_cljs.database.reference.transaction.cljs$core$IFn$_invoke$arity$2(ref,fn);
});
var G__13418__3 = (function (ref,fn,callback){
return firebase_cljs.database.reference.transaction.cljs$core$IFn$_invoke$arity$3(ref,fn,callback);
});
G__13418 = function(ref,fn,callback){
switch(arguments.length){
case 2:
return G__13418__2.call(this,ref,fn);
case 3:
return G__13418__3.call(this,ref,fn,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13418.cljs$core$IFn$_invoke$arity$2 = G__13418__2;
G__13418.cljs$core$IFn$_invoke$arity$3 = G__13418__3;
return G__13418;
})()
);

(firebase_cljs.database.merge_BANG_["object"] = (function() {
var G__13419 = null;
var G__13419__2 = (function (ref,obj){
return firebase_cljs.database.reference.update_BANG_.cljs$core$IFn$_invoke$arity$2(ref,cljs.core.clj__GT_js(obj));
});
var G__13419__3 = (function (ref,obj,callback){
return firebase_cljs.database.reference.update_BANG_.cljs$core$IFn$_invoke$arity$3(ref,cljs.core.clj__GT_js(obj),callback);
});
G__13419 = function(ref,obj,callback){
switch(arguments.length){
case 2:
return G__13419__2.call(this,ref,obj);
case 3:
return G__13419__3.call(this,ref,obj,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13419.cljs$core$IFn$_invoke$arity$2 = G__13419__2;
G__13419.cljs$core$IFn$_invoke$arity$3 = G__13419__3;
return G__13419;
})()
);

(firebase_cljs.database.conj_BANG_["object"] = (function() {
var G__13420 = null;
var G__13420__2 = (function (ref,val){
return firebase_cljs.database.reference.push_BANG_.cljs$core$IFn$_invoke$arity$2(ref,cljs.core.clj__GT_js(val));
});
var G__13420__3 = (function (ref,val,callback){
return firebase_cljs.database.reference.push_BANG_.cljs$core$IFn$_invoke$arity$3(ref,cljs.core.clj__GT_js(val),callback);
});
G__13420 = function(ref,val,callback){
switch(arguments.length){
case 2:
return G__13420__2.call(this,ref,val);
case 3:
return G__13420__3.call(this,ref,val,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13420.cljs$core$IFn$_invoke$arity$2 = G__13420__2;
G__13420.cljs$core$IFn$_invoke$arity$3 = G__13420__3;
return G__13420;
})()
);

(firebase_cljs.database.remove_BANG_["object"] = (function() {
var G__13421 = null;
var G__13421__1 = (function (ref){
return firebase_cljs.database.reference.remove_BANG_.cljs$core$IFn$_invoke$arity$1(ref);
});
var G__13421__2 = (function (ref,callback){
return firebase_cljs.database.reference.remove_BANG_.cljs$core$IFn$_invoke$arity$2(ref,callback);
});
G__13421 = function(ref,callback){
switch(arguments.length){
case 1:
return G__13421__1.call(this,ref);
case 2:
return G__13421__2.call(this,ref,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13421.cljs$core$IFn$_invoke$arity$1 = G__13421__1;
G__13421.cljs$core$IFn$_invoke$arity$2 = G__13421__2;
return G__13421;
})()
);

(firebase_cljs.database.listen["object"] = (function() {
var G__13422 = null;
var G__13422__3 = (function (ref,type,callback){
return firebase_cljs.database.query.on.cljs$core$IFn$_invoke$arity$3(ref,type,callback);
});
var G__13422__4 = (function (ref,korks,type,callback){
return firebase_cljs.database.query.on.cljs$core$IFn$_invoke$arity$3(firebase_cljs.database.get_in(ref,korks),type,callback);
});
var G__13422__5 = (function (ref,korks,type,callback,failure){
return firebase_cljs.database.query.on.cljs$core$IFn$_invoke$arity$4(firebase_cljs.database.get_in(ref,korks),type,callback,failure);
});
G__13422 = function(ref,korks,type,callback,failure){
switch(arguments.length){
case 3:
return G__13422__3.call(this,ref,korks,type);
case 4:
return G__13422__4.call(this,ref,korks,type,callback);
case 5:
return G__13422__5.call(this,ref,korks,type,callback,failure);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13422.cljs$core$IFn$_invoke$arity$3 = G__13422__3;
G__13422.cljs$core$IFn$_invoke$arity$4 = G__13422__4;
G__13422.cljs$core$IFn$_invoke$arity$5 = G__13422__5;
return G__13422;
})()
);

(firebase_cljs.database.listen_promise["object"] = (function() {
var G__13423 = null;
var G__13423__3 = (function (ref,type,callback){
return firebase_cljs.promise.then.cljs$core$IFn$_invoke$arity$2(firebase_cljs.database.query.once.cljs$core$IFn$_invoke$arity$2(ref,type),callback);
});
var G__13423__4 = (function (ref,korks,type,callback){
return firebase_cljs.promise.then.cljs$core$IFn$_invoke$arity$2(firebase_cljs.database.query.once.cljs$core$IFn$_invoke$arity$2(firebase_cljs.database.get_in(ref,korks),type),callback);
});
G__13423 = function(ref,korks,type,callback){
switch(arguments.length){
case 3:
return G__13423__3.call(this,ref,korks,type);
case 4:
return G__13423__4.call(this,ref,korks,type,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13423.cljs$core$IFn$_invoke$arity$3 = G__13423__3;
G__13423.cljs$core$IFn$_invoke$arity$4 = G__13423__4;
return G__13423;
})()
);

(firebase_cljs.database.listen_once["object"] = (function() {
var G__13424 = null;
var G__13424__3 = (function (ref,type,callback){
return firebase_cljs.database.query.once.cljs$core$IFn$_invoke$arity$3(ref,type,callback);
});
var G__13424__4 = (function (ref,korks,type,callback){
return firebase_cljs.database.query.once.cljs$core$IFn$_invoke$arity$3(firebase_cljs.database.get_in(ref,korks),type,callback);
});
G__13424 = function(ref,korks,type,callback){
switch(arguments.length){
case 3:
return G__13424__3.call(this,ref,korks,type);
case 4:
return G__13424__4.call(this,ref,korks,type,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13424.cljs$core$IFn$_invoke$arity$3 = G__13424__3;
G__13424.cljs$core$IFn$_invoke$arity$4 = G__13424__4;
return G__13424;
})()
);

(firebase_cljs.database.disable_listener_BANG_["object"] = (function() {
var G__13425 = null;
var G__13425__2 = (function (ref,event){
return firebase_cljs.database.query.off.cljs$core$IFn$_invoke$arity$2(ref,event);
});
var G__13425__3 = (function (ref,event,callback){
return firebase_cljs.database.query.off.cljs$core$IFn$_invoke$arity$3(ref,event,callback);
});
G__13425 = function(ref,event,callback){
switch(arguments.length){
case 2:
return G__13425__2.call(this,ref,event);
case 3:
return G__13425__3.call(this,ref,event,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13425.cljs$core$IFn$_invoke$arity$2 = G__13425__2;
G__13425.cljs$core$IFn$_invoke$arity$3 = G__13425__3;
return G__13425;
})()
);
