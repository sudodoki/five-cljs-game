// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('firebase_cljs.database.reference');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('firebase_cljs.database.query');

/**
 * @interface
 */
firebase_cljs.database.reference.FirebaseDatabaseReference = function(){};

/**
 * The key of a given reference.
 */
firebase_cljs.database.reference.get_key = (function firebase_cljs$database$reference$get_key(_){
if((!((_ == null))) && (!((_.firebase_cljs$database$reference$FirebaseDatabaseReference$get_key$arity$1 == null)))){
return _.firebase_cljs$database$reference$FirebaseDatabaseReference$get_key$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.reference.get_key[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.reference.get_key["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseReference.get-key",_);
}
}
}
});

/**
 * The parent reference of a given reference.
 */
firebase_cljs.database.reference.get_parent = (function firebase_cljs$database$reference$get_parent(_){
if((!((_ == null))) && (!((_.firebase_cljs$database$reference$FirebaseDatabaseReference$get_parent$arity$1 == null)))){
return _.firebase_cljs$database$reference$FirebaseDatabaseReference$get_parent$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.reference.get_parent[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.reference.get_parent["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseReference.get-parent",_);
}
}
}
});

/**
 * The root of a given reference.
 */
firebase_cljs.database.reference.get_root = (function firebase_cljs$database$reference$get_root(_){
if((!((_ == null))) && (!((_.firebase_cljs$database$reference$FirebaseDatabaseReference$get_root$arity$1 == null)))){
return _.firebase_cljs$database$reference$FirebaseDatabaseReference$get_root$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.reference.get_root[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.reference.get_root["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseReference.get-root",_);
}
}
}
});

/**
 * Returns the child as a Reference.
 */
firebase_cljs.database.reference.get_child = (function firebase_cljs$database$reference$get_child(_,child){
if((!((_ == null))) && (!((_.firebase_cljs$database$reference$FirebaseDatabaseReference$get_child$arity$2 == null)))){
return _.firebase_cljs$database$reference$FirebaseDatabaseReference$get_child$arity$2(_,child);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.reference.get_child[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,child) : m__7480__auto__.call(null,_,child));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.reference.get_child["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,child) : m__7480__auto____$1.call(null,_,child));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseReference.get-child",_);
}
}
}
});

/**
 * Returns onDisconnect object.
 */
firebase_cljs.database.reference.on_disconnect = (function firebase_cljs$database$reference$on_disconnect(_){
if((!((_ == null))) && (!((_.firebase_cljs$database$reference$FirebaseDatabaseReference$on_disconnect$arity$1 == null)))){
return _.firebase_cljs$database$reference$FirebaseDatabaseReference$on_disconnect$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.reference.on_disconnect[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.reference.on_disconnect["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseReference.on-disconnect",_);
}
}
}
});

/**
 * Generates a new child location using a unique key and returns a Firebase reference to it.
 */
firebase_cljs.database.reference.push_BANG_ = (function firebase_cljs$database$reference$push_BANG_(var_args){
var args13286 = [];
var len__7924__auto___13307 = arguments.length;
var i__7925__auto___13308 = (0);
while(true){
if((i__7925__auto___13308 < len__7924__auto___13307)){
args13286.push((arguments[i__7925__auto___13308]));

var G__13309 = (i__7925__auto___13308 + (1));
i__7925__auto___13308 = G__13309;
continue;
} else {
}
break;
}

var G__13288 = args13286.length;
switch (G__13288) {
case 1:
return firebase_cljs.database.reference.push_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return firebase_cljs.database.reference.push_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return firebase_cljs.database.reference.push_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13286.length)].join('')));

}
});

firebase_cljs.database.reference.push_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.firebase_cljs$database$reference$FirebaseDatabaseReference$push_BANG_$arity$1 == null)))){
return _.firebase_cljs$database$reference$FirebaseDatabaseReference$push_BANG_$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.reference.push_BANG_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.reference.push_BANG_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseReference.push!",_);
}
}
}
});

firebase_cljs.database.reference.push_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,val){
if((!((_ == null))) && (!((_.firebase_cljs$database$reference$FirebaseDatabaseReference$push_BANG_$arity$2 == null)))){
return _.firebase_cljs$database$reference$FirebaseDatabaseReference$push_BANG_$arity$2(_,val);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.reference.push_BANG_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,val) : m__7480__auto__.call(null,_,val));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.reference.push_BANG_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,val) : m__7480__auto____$1.call(null,_,val));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseReference.push!",_);
}
}
}
});

firebase_cljs.database.reference.push_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,val,callback){
if((!((_ == null))) && (!((_.firebase_cljs$database$reference$FirebaseDatabaseReference$push_BANG_$arity$3 == null)))){
return _.firebase_cljs$database$reference$FirebaseDatabaseReference$push_BANG_$arity$3(_,val,callback);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.reference.push_BANG_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,val,callback) : m__7480__auto__.call(null,_,val,callback));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.reference.push_BANG_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,val,callback) : m__7480__auto____$1.call(null,_,val,callback));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseReference.push!",_);
}
}
}
});

firebase_cljs.database.reference.push_BANG_.cljs$lang$maxFixedArity = 3;


/**
 * Removes the data at this Firebase location.
 */
firebase_cljs.database.reference.remove_BANG_ = (function firebase_cljs$database$reference$remove_BANG_(var_args){
var args13289 = [];
var len__7924__auto___13311 = arguments.length;
var i__7925__auto___13312 = (0);
while(true){
if((i__7925__auto___13312 < len__7924__auto___13311)){
args13289.push((arguments[i__7925__auto___13312]));

var G__13313 = (i__7925__auto___13312 + (1));
i__7925__auto___13312 = G__13313;
continue;
} else {
}
break;
}

var G__13291 = args13289.length;
switch (G__13291) {
case 1:
return firebase_cljs.database.reference.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return firebase_cljs.database.reference.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13289.length)].join('')));

}
});

firebase_cljs.database.reference.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.firebase_cljs$database$reference$FirebaseDatabaseReference$remove_BANG_$arity$1 == null)))){
return _.firebase_cljs$database$reference$FirebaseDatabaseReference$remove_BANG_$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.reference.remove_BANG_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.reference.remove_BANG_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseReference.remove!",_);
}
}
}
});

firebase_cljs.database.reference.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,callback){
if((!((_ == null))) && (!((_.firebase_cljs$database$reference$FirebaseDatabaseReference$remove_BANG_$arity$2 == null)))){
return _.firebase_cljs$database$reference$FirebaseDatabaseReference$remove_BANG_$arity$2(_,callback);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.reference.remove_BANG_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,callback) : m__7480__auto__.call(null,_,callback));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.reference.remove_BANG_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,callback) : m__7480__auto____$1.call(null,_,callback));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseReference.remove!",_);
}
}
}
});

firebase_cljs.database.reference.remove_BANG_.cljs$lang$maxFixedArity = 2;


/**
 * Writes data to this Firebase location.
 */
firebase_cljs.database.reference.set_BANG_ = (function firebase_cljs$database$reference$set_BANG_(var_args){
var args13292 = [];
var len__7924__auto___13315 = arguments.length;
var i__7925__auto___13316 = (0);
while(true){
if((i__7925__auto___13316 < len__7924__auto___13315)){
args13292.push((arguments[i__7925__auto___13316]));

var G__13317 = (i__7925__auto___13316 + (1));
i__7925__auto___13316 = G__13317;
continue;
} else {
}
break;
}

var G__13294 = args13292.length;
switch (G__13294) {
case 2:
return firebase_cljs.database.reference.set_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return firebase_cljs.database.reference.set_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13292.length)].join('')));

}
});

firebase_cljs.database.reference.set_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,val){
if((!((_ == null))) && (!((_.firebase_cljs$database$reference$FirebaseDatabaseReference$set_BANG_$arity$2 == null)))){
return _.firebase_cljs$database$reference$FirebaseDatabaseReference$set_BANG_$arity$2(_,val);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.reference.set_BANG_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,val) : m__7480__auto__.call(null,_,val));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.reference.set_BANG_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,val) : m__7480__auto____$1.call(null,_,val));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseReference.set!",_);
}
}
}
});

firebase_cljs.database.reference.set_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,val,callback){
if((!((_ == null))) && (!((_.firebase_cljs$database$reference$FirebaseDatabaseReference$set_BANG_$arity$3 == null)))){
return _.firebase_cljs$database$reference$FirebaseDatabaseReference$set_BANG_$arity$3(_,val,callback);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.reference.set_BANG_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,val,callback) : m__7480__auto__.call(null,_,val,callback));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.reference.set_BANG_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,val,callback) : m__7480__auto____$1.call(null,_,val,callback));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseReference.set!",_);
}
}
}
});

firebase_cljs.database.reference.set_BANG_.cljs$lang$maxFixedArity = 3;


/**
 * Sets a priority for the data at this Firebase location.
 */
firebase_cljs.database.reference.set_priority_BANG_ = (function firebase_cljs$database$reference$set_priority_BANG_(var_args){
var args13295 = [];
var len__7924__auto___13319 = arguments.length;
var i__7925__auto___13320 = (0);
while(true){
if((i__7925__auto___13320 < len__7924__auto___13319)){
args13295.push((arguments[i__7925__auto___13320]));

var G__13321 = (i__7925__auto___13320 + (1));
i__7925__auto___13320 = G__13321;
continue;
} else {
}
break;
}

var G__13297 = args13295.length;
switch (G__13297) {
case 2:
return firebase_cljs.database.reference.set_priority_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return firebase_cljs.database.reference.set_priority_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13295.length)].join('')));

}
});

firebase_cljs.database.reference.set_priority_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,priority){
if((!((_ == null))) && (!((_.firebase_cljs$database$reference$FirebaseDatabaseReference$set_priority_BANG_$arity$2 == null)))){
return _.firebase_cljs$database$reference$FirebaseDatabaseReference$set_priority_BANG_$arity$2(_,priority);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.reference.set_priority_BANG_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,priority) : m__7480__auto__.call(null,_,priority));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.reference.set_priority_BANG_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,priority) : m__7480__auto____$1.call(null,_,priority));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseReference.set-priority!",_);
}
}
}
});

firebase_cljs.database.reference.set_priority_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,priority,callback){
if((!((_ == null))) && (!((_.firebase_cljs$database$reference$FirebaseDatabaseReference$set_priority_BANG_$arity$3 == null)))){
return _.firebase_cljs$database$reference$FirebaseDatabaseReference$set_priority_BANG_$arity$3(_,priority,callback);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.reference.set_priority_BANG_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,priority,callback) : m__7480__auto__.call(null,_,priority,callback));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.reference.set_priority_BANG_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,priority,callback) : m__7480__auto____$1.call(null,_,priority,callback));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseReference.set-priority!",_);
}
}
}
});

firebase_cljs.database.reference.set_priority_BANG_.cljs$lang$maxFixedArity = 3;


/**
 * Writes data to this Firebase location. Like set() but also specifies the priority for that data.
 */
firebase_cljs.database.reference.set_with_priority_BANG_ = (function firebase_cljs$database$reference$set_with_priority_BANG_(var_args){
var args13298 = [];
var len__7924__auto___13323 = arguments.length;
var i__7925__auto___13324 = (0);
while(true){
if((i__7925__auto___13324 < len__7924__auto___13323)){
args13298.push((arguments[i__7925__auto___13324]));

var G__13325 = (i__7925__auto___13324 + (1));
i__7925__auto___13324 = G__13325;
continue;
} else {
}
break;
}

var G__13300 = args13298.length;
switch (G__13300) {
case 3:
return firebase_cljs.database.reference.set_with_priority_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return firebase_cljs.database.reference.set_with_priority_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13298.length)].join('')));

}
});

firebase_cljs.database.reference.set_with_priority_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,val,priority){
if((!((_ == null))) && (!((_.firebase_cljs$database$reference$FirebaseDatabaseReference$set_with_priority_BANG_$arity$3 == null)))){
return _.firebase_cljs$database$reference$FirebaseDatabaseReference$set_with_priority_BANG_$arity$3(_,val,priority);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.reference.set_with_priority_BANG_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,val,priority) : m__7480__auto__.call(null,_,val,priority));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.reference.set_with_priority_BANG_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,val,priority) : m__7480__auto____$1.call(null,_,val,priority));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseReference.set-with-priority!",_);
}
}
}
});

firebase_cljs.database.reference.set_with_priority_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,val,priority,callback){
if((!((_ == null))) && (!((_.firebase_cljs$database$reference$FirebaseDatabaseReference$set_with_priority_BANG_$arity$4 == null)))){
return _.firebase_cljs$database$reference$FirebaseDatabaseReference$set_with_priority_BANG_$arity$4(_,val,priority,callback);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.reference.set_with_priority_BANG_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$4(_,val,priority,callback) : m__7480__auto__.call(null,_,val,priority,callback));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.reference.set_with_priority_BANG_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$4(_,val,priority,callback) : m__7480__auto____$1.call(null,_,val,priority,callback));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseReference.set-with-priority!",_);
}
}
}
});

firebase_cljs.database.reference.set_with_priority_BANG_.cljs$lang$maxFixedArity = 4;


/**
 * Atomically modifies the data at this location.
 */
firebase_cljs.database.reference.transaction = (function firebase_cljs$database$reference$transaction(var_args){
var args13301 = [];
var len__7924__auto___13327 = arguments.length;
var i__7925__auto___13328 = (0);
while(true){
if((i__7925__auto___13328 < len__7924__auto___13327)){
args13301.push((arguments[i__7925__auto___13328]));

var G__13329 = (i__7925__auto___13328 + (1));
i__7925__auto___13328 = G__13329;
continue;
} else {
}
break;
}

var G__13303 = args13301.length;
switch (G__13303) {
case 2:
return firebase_cljs.database.reference.transaction.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return firebase_cljs.database.reference.transaction.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return firebase_cljs.database.reference.transaction.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13301.length)].join('')));

}
});

firebase_cljs.database.reference.transaction.cljs$core$IFn$_invoke$arity$2 = (function (_,update){
if((!((_ == null))) && (!((_.firebase_cljs$database$reference$FirebaseDatabaseReference$transaction$arity$2 == null)))){
return _.firebase_cljs$database$reference$FirebaseDatabaseReference$transaction$arity$2(_,update);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.reference.transaction[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,update) : m__7480__auto__.call(null,_,update));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.reference.transaction["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,update) : m__7480__auto____$1.call(null,_,update));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseReference.transaction",_);
}
}
}
});

firebase_cljs.database.reference.transaction.cljs$core$IFn$_invoke$arity$3 = (function (_,update,callback){
if((!((_ == null))) && (!((_.firebase_cljs$database$reference$FirebaseDatabaseReference$transaction$arity$3 == null)))){
return _.firebase_cljs$database$reference$FirebaseDatabaseReference$transaction$arity$3(_,update,callback);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.reference.transaction[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,update,callback) : m__7480__auto__.call(null,_,update,callback));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.reference.transaction["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,update,callback) : m__7480__auto____$1.call(null,_,update,callback));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseReference.transaction",_);
}
}
}
});

firebase_cljs.database.reference.transaction.cljs$core$IFn$_invoke$arity$4 = (function (_,update,callback,locally){
if((!((_ == null))) && (!((_.firebase_cljs$database$reference$FirebaseDatabaseReference$transaction$arity$4 == null)))){
return _.firebase_cljs$database$reference$FirebaseDatabaseReference$transaction$arity$4(_,update,callback,locally);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.reference.transaction[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$4(_,update,callback,locally) : m__7480__auto__.call(null,_,update,callback,locally));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.reference.transaction["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$4(_,update,callback,locally) : m__7480__auto____$1.call(null,_,update,callback,locally));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseReference.transaction",_);
}
}
}
});

firebase_cljs.database.reference.transaction.cljs$lang$maxFixedArity = 4;


/**
 * Writes the enumerated children to this Firebase location.
 */
firebase_cljs.database.reference.update_BANG_ = (function firebase_cljs$database$reference$update_BANG_(var_args){
var args13304 = [];
var len__7924__auto___13331 = arguments.length;
var i__7925__auto___13332 = (0);
while(true){
if((i__7925__auto___13332 < len__7924__auto___13331)){
args13304.push((arguments[i__7925__auto___13332]));

var G__13333 = (i__7925__auto___13332 + (1));
i__7925__auto___13332 = G__13333;
continue;
} else {
}
break;
}

var G__13306 = args13304.length;
switch (G__13306) {
case 2:
return firebase_cljs.database.reference.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return firebase_cljs.database.reference.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13304.length)].join('')));

}
});

firebase_cljs.database.reference.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,obj){
if((!((_ == null))) && (!((_.firebase_cljs$database$reference$FirebaseDatabaseReference$update_BANG_$arity$2 == null)))){
return _.firebase_cljs$database$reference$FirebaseDatabaseReference$update_BANG_$arity$2(_,obj);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.reference.update_BANG_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,obj) : m__7480__auto__.call(null,_,obj));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.reference.update_BANG_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,obj) : m__7480__auto____$1.call(null,_,obj));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseReference.update!",_);
}
}
}
});

firebase_cljs.database.reference.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,obj,callback){
if((!((_ == null))) && (!((_.firebase_cljs$database$reference$FirebaseDatabaseReference$update_BANG_$arity$3 == null)))){
return _.firebase_cljs$database$reference$FirebaseDatabaseReference$update_BANG_$arity$3(_,obj,callback);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.reference.update_BANG_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,obj,callback) : m__7480__auto__.call(null,_,obj,callback));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.reference.update_BANG_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,obj,callback) : m__7480__auto____$1.call(null,_,obj,callback));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseReference.update!",_);
}
}
}
});

firebase_cljs.database.reference.update_BANG_.cljs$lang$maxFixedArity = 3;


firebase.database.Reference.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$ = cljs.core.PROTOCOL_SENTINEL;

firebase.database.Reference.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$get_ref$arity$1 = (function (query){
var query__$1 = this;
return query__$1.ref;
});

firebase.database.Reference.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$end_at$arity$2 = (function (query,val){
var query__$1 = this;
return query__$1.endAt(val);
});

firebase.database.Reference.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$end_at$arity$3 = (function (query,val,key){
var query__$1 = this;
return query__$1.endAt(val,key);
});

firebase.database.Reference.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$equal_to$arity$2 = (function (query,val){
var query__$1 = this;
return query__$1.equalTo(val);
});

firebase.database.Reference.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$equal_to$arity$3 = (function (query,val,key){
var query__$1 = this;
return query__$1.equalTo(val,key);
});

firebase.database.Reference.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$take$arity$2 = (function (query,limit){
var query__$1 = this;
return query__$1.limitToFirst(limit);
});

firebase.database.Reference.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$take_last$arity$2 = (function (query,limit){
var query__$1 = this;
return query__$1.limitToLast(limit);
});

firebase.database.Reference.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$off$arity$1 = (function (query){
var query__$1 = this;
return query__$1.off();
});

firebase.database.Reference.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$off$arity$2 = (function (query,event){
var query__$1 = this;
return query__$1.off(event);
});

firebase.database.Reference.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$off$arity$3 = (function (query,event,callback){
var query__$1 = this;
return query__$1.off(event,callback);
});

firebase.database.Reference.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$off$arity$4 = (function (query,event,callback,failure){
var query__$1 = this;
return query__$1.off(event,callback,failure);
});

firebase.database.Reference.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$on$arity$3 = (function (query,event,callback){
var query__$1 = this;
return query__$1.on(event,callback);
});

firebase.database.Reference.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$on$arity$4 = (function (query,event,callback,failure){
var query__$1 = this;
return query__$1.on(event,callback,failure);
});

firebase.database.Reference.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$once$arity$2 = (function (query,event){
var query__$1 = this;
return query__$1.once(event);
});

firebase.database.Reference.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$once$arity$3 = (function (query,event,callback){
var query__$1 = this;
return query__$1.once(event,callback);
});

firebase.database.Reference.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$once$arity$4 = (function (query,event,callback,failure){
var query__$1 = this;
return query__$1.once(event,callback,failure);
});

firebase.database.Reference.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$sort_by$arity$2 = (function (query,sort){
var query__$1 = this;
return firebase_cljs.database.query.sort_by.cljs$core$IFn$_invoke$arity$3(query__$1,sort,null);
});

firebase.database.Reference.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$sort_by$arity$3 = (function (query,sort,val){
var query__$1 = this;
var G__13335 = (((sort instanceof cljs.core.Keyword))?sort.fqn:null);
switch (G__13335) {
case "child":
return query__$1.orderByChild(val);

break;
case "key":
return query__$1.orderByKey();

break;
case "priority":
return query__$1.orderByPriority();

break;
case "value":
return query__$1.orderByValue();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sort)].join('')));

}
});

firebase.database.Reference.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$start_at$arity$2 = (function (query,val){
var query__$1 = this;
return query__$1.startAt(val);
});

firebase.database.Reference.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$start_at$arity$3 = (function (query,val,key){
var query__$1 = this;
return query__$1.startAt(val,key);
});

firebase.database.Reference.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$to_str$arity$1 = (function (query){
var query__$1 = this;
return query__$1.toString();
});

firebase.database.Reference.prototype.firebase_cljs$database$reference$FirebaseDatabaseReference$ = cljs.core.PROTOCOL_SENTINEL;

firebase.database.Reference.prototype.firebase_cljs$database$reference$FirebaseDatabaseReference$get_key$arity$1 = (function (ref){
var ref__$1 = this;
return ref__$1.key;
});

firebase.database.Reference.prototype.firebase_cljs$database$reference$FirebaseDatabaseReference$get_parent$arity$1 = (function (ref){
var ref__$1 = this;
return ref__$1.parent;
});

firebase.database.Reference.prototype.firebase_cljs$database$reference$FirebaseDatabaseReference$get_root$arity$1 = (function (ref){
var ref__$1 = this;
return ref__$1.root;
});

firebase.database.Reference.prototype.firebase_cljs$database$reference$FirebaseDatabaseReference$get_child$arity$2 = (function (ref,path){
var ref__$1 = this;
return ref__$1.child(path);
});

firebase.database.Reference.prototype.firebase_cljs$database$reference$FirebaseDatabaseReference$on_disconnect$arity$1 = (function (ref){
var ref__$1 = this;
return ref__$1.onDisconnect();
});

firebase.database.Reference.prototype.firebase_cljs$database$reference$FirebaseDatabaseReference$push_BANG_$arity$1 = (function (ref){
var ref__$1 = this;
return ref__$1.push();
});

firebase.database.Reference.prototype.firebase_cljs$database$reference$FirebaseDatabaseReference$push_BANG_$arity$2 = (function (ref,val){
var ref__$1 = this;
return ref__$1.push(val);
});

firebase.database.Reference.prototype.firebase_cljs$database$reference$FirebaseDatabaseReference$push_BANG_$arity$3 = (function (ref,val,callback){
var ref__$1 = this;
return ref__$1.push(val,callback);
});

firebase.database.Reference.prototype.firebase_cljs$database$reference$FirebaseDatabaseReference$remove_BANG_$arity$1 = (function (ref){
var ref__$1 = this;
return ref__$1.remove();
});

firebase.database.Reference.prototype.firebase_cljs$database$reference$FirebaseDatabaseReference$remove_BANG_$arity$2 = (function (ref,callback){
var ref__$1 = this;
return ref__$1.remove(callback);
});

firebase.database.Reference.prototype.firebase_cljs$database$reference$FirebaseDatabaseReference$set_BANG_$arity$2 = (function (ref,val){
var ref__$1 = this;
return ref__$1.set(val);
});

firebase.database.Reference.prototype.firebase_cljs$database$reference$FirebaseDatabaseReference$set_BANG_$arity$3 = (function (ref,val,callback){
var ref__$1 = this;
return ref__$1.set(val,callback);
});

firebase.database.Reference.prototype.firebase_cljs$database$reference$FirebaseDatabaseReference$set_priority_BANG_$arity$2 = (function (ref,priority){
var ref__$1 = this;
return ref__$1.setPriority(priority);
});

firebase.database.Reference.prototype.firebase_cljs$database$reference$FirebaseDatabaseReference$set_priority_BANG_$arity$3 = (function (ref,priority,callback){
var ref__$1 = this;
return ref__$1.setPriority(priority,callback);
});

firebase.database.Reference.prototype.firebase_cljs$database$reference$FirebaseDatabaseReference$set_with_priority_BANG_$arity$3 = (function (ref,val,priority){
var ref__$1 = this;
return ref__$1.setWithPriority(val,priority);
});

firebase.database.Reference.prototype.firebase_cljs$database$reference$FirebaseDatabaseReference$set_with_priority_BANG_$arity$4 = (function (ref,val,priority,callback){
var ref__$1 = this;
return ref__$1.setWithPriority(val,priority,callback);
});

firebase.database.Reference.prototype.firebase_cljs$database$reference$FirebaseDatabaseReference$transaction$arity$2 = (function (ref,update){
var ref__$1 = this;
return ref__$1.transaction(update);
});

firebase.database.Reference.prototype.firebase_cljs$database$reference$FirebaseDatabaseReference$transaction$arity$3 = (function (ref,update,callback){
var ref__$1 = this;
return ref__$1.transaction(update,callback);
});

firebase.database.Reference.prototype.firebase_cljs$database$reference$FirebaseDatabaseReference$transaction$arity$4 = (function (ref,update,callback,locally){
var ref__$1 = this;
return ref__$1.transaction(update,callback,locally);
});

firebase.database.Reference.prototype.firebase_cljs$database$reference$FirebaseDatabaseReference$update_BANG_$arity$2 = (function (ref,obj){
var ref__$1 = this;
return ref__$1.update(obj);
});

firebase.database.Reference.prototype.firebase_cljs$database$reference$FirebaseDatabaseReference$update_BANG_$arity$3 = (function (ref,obj,callback){
var ref__$1 = this;
return ref__$1.update(obj,callback);
});
