// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('firebase_cljs.database.query');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * @interface
 */
firebase_cljs.database.query.FirebaseDatabaseQuery = function(){};

/**
 * Get Query ref.
 */
firebase_cljs.database.query.get_ref = (function firebase_cljs$database$query$get_ref(_){
if((!((_ == null))) && (!((_.firebase_cljs$database$query$FirebaseDatabaseQuery$get_ref$arity$1 == null)))){
return _.firebase_cljs$database$query$FirebaseDatabaseQuery$get_ref$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.query.get_ref[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.query.get_ref["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseQuery.get-ref",_);
}
}
}
});

/**
 * Creates a Query with the specified ending point. The generated Query includes children which match the specified ending point.
 */
firebase_cljs.database.query.end_at = (function firebase_cljs$database$query$end_at(var_args){
var args13233 = [];
var len__7924__auto___13254 = arguments.length;
var i__7925__auto___13255 = (0);
while(true){
if((i__7925__auto___13255 < len__7924__auto___13254)){
args13233.push((arguments[i__7925__auto___13255]));

var G__13256 = (i__7925__auto___13255 + (1));
i__7925__auto___13255 = G__13256;
continue;
} else {
}
break;
}

var G__13235 = args13233.length;
switch (G__13235) {
case 2:
return firebase_cljs.database.query.end_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return firebase_cljs.database.query.end_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13233.length)].join('')));

}
});

firebase_cljs.database.query.end_at.cljs$core$IFn$_invoke$arity$2 = (function (_,val){
if((!((_ == null))) && (!((_.firebase_cljs$database$query$FirebaseDatabaseQuery$end_at$arity$2 == null)))){
return _.firebase_cljs$database$query$FirebaseDatabaseQuery$end_at$arity$2(_,val);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.query.end_at[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,val) : m__7480__auto__.call(null,_,val));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.query.end_at["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,val) : m__7480__auto____$1.call(null,_,val));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseQuery.end-at",_);
}
}
}
});

firebase_cljs.database.query.end_at.cljs$core$IFn$_invoke$arity$3 = (function (_,val,key){
if((!((_ == null))) && (!((_.firebase_cljs$database$query$FirebaseDatabaseQuery$end_at$arity$3 == null)))){
return _.firebase_cljs$database$query$FirebaseDatabaseQuery$end_at$arity$3(_,val,key);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.query.end_at[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,val,key) : m__7480__auto__.call(null,_,val,key));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.query.end_at["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,val,key) : m__7480__auto____$1.call(null,_,val,key));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseQuery.end-at",_);
}
}
}
});

firebase_cljs.database.query.end_at.cljs$lang$maxFixedArity = 3;


/**
 * Creates a Query which includes children which match the specified value.
 */
firebase_cljs.database.query.equal_to = (function firebase_cljs$database$query$equal_to(var_args){
var args13236 = [];
var len__7924__auto___13258 = arguments.length;
var i__7925__auto___13259 = (0);
while(true){
if((i__7925__auto___13259 < len__7924__auto___13258)){
args13236.push((arguments[i__7925__auto___13259]));

var G__13260 = (i__7925__auto___13259 + (1));
i__7925__auto___13259 = G__13260;
continue;
} else {
}
break;
}

var G__13238 = args13236.length;
switch (G__13238) {
case 2:
return firebase_cljs.database.query.equal_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return firebase_cljs.database.query.equal_to.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13236.length)].join('')));

}
});

firebase_cljs.database.query.equal_to.cljs$core$IFn$_invoke$arity$2 = (function (_,val){
if((!((_ == null))) && (!((_.firebase_cljs$database$query$FirebaseDatabaseQuery$equal_to$arity$2 == null)))){
return _.firebase_cljs$database$query$FirebaseDatabaseQuery$equal_to$arity$2(_,val);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.query.equal_to[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,val) : m__7480__auto__.call(null,_,val));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.query.equal_to["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,val) : m__7480__auto____$1.call(null,_,val));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseQuery.equal-to",_);
}
}
}
});

firebase_cljs.database.query.equal_to.cljs$core$IFn$_invoke$arity$3 = (function (_,val,key){
if((!((_ == null))) && (!((_.firebase_cljs$database$query$FirebaseDatabaseQuery$equal_to$arity$3 == null)))){
return _.firebase_cljs$database$query$FirebaseDatabaseQuery$equal_to$arity$3(_,val,key);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.query.equal_to[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,val,key) : m__7480__auto__.call(null,_,val,key));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.query.equal_to["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,val,key) : m__7480__auto____$1.call(null,_,val,key));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseQuery.equal-to",_);
}
}
}
});

firebase_cljs.database.query.equal_to.cljs$lang$maxFixedArity = 3;


/**
 * Generates a new Query object limited to the first limit number of children.
 */
firebase_cljs.database.query.take = (function firebase_cljs$database$query$take(_,limit){
if((!((_ == null))) && (!((_.firebase_cljs$database$query$FirebaseDatabaseQuery$take$arity$2 == null)))){
return _.firebase_cljs$database$query$FirebaseDatabaseQuery$take$arity$2(_,limit);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.query.take[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,limit) : m__7480__auto__.call(null,_,limit));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.query.take["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,limit) : m__7480__auto____$1.call(null,_,limit));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseQuery.take",_);
}
}
}
});

/**
 * Generates a new Query object limited to the last limit number of children.
 */
firebase_cljs.database.query.take_last = (function firebase_cljs$database$query$take_last(_,limit){
if((!((_ == null))) && (!((_.firebase_cljs$database$query$FirebaseDatabaseQuery$take_last$arity$2 == null)))){
return _.firebase_cljs$database$query$FirebaseDatabaseQuery$take_last$arity$2(_,limit);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.query.take_last[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,limit) : m__7480__auto__.call(null,_,limit));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.query.take_last["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,limit) : m__7480__auto____$1.call(null,_,limit));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseQuery.take-last",_);
}
}
}
});

/**
 * Detaches a callback previously attached with on.
 */
firebase_cljs.database.query.off = (function firebase_cljs$database$query$off(var_args){
var args13239 = [];
var len__7924__auto___13262 = arguments.length;
var i__7925__auto___13263 = (0);
while(true){
if((i__7925__auto___13263 < len__7924__auto___13262)){
args13239.push((arguments[i__7925__auto___13263]));

var G__13264 = (i__7925__auto___13263 + (1));
i__7925__auto___13263 = G__13264;
continue;
} else {
}
break;
}

var G__13241 = args13239.length;
switch (G__13241) {
case 1:
return firebase_cljs.database.query.off.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return firebase_cljs.database.query.off.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return firebase_cljs.database.query.off.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return firebase_cljs.database.query.off.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13239.length)].join('')));

}
});

firebase_cljs.database.query.off.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.firebase_cljs$database$query$FirebaseDatabaseQuery$off$arity$1 == null)))){
return _.firebase_cljs$database$query$FirebaseDatabaseQuery$off$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.query.off[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.query.off["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseQuery.off",_);
}
}
}
});

firebase_cljs.database.query.off.cljs$core$IFn$_invoke$arity$2 = (function (_,event){
if((!((_ == null))) && (!((_.firebase_cljs$database$query$FirebaseDatabaseQuery$off$arity$2 == null)))){
return _.firebase_cljs$database$query$FirebaseDatabaseQuery$off$arity$2(_,event);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.query.off[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,event) : m__7480__auto__.call(null,_,event));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.query.off["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,event) : m__7480__auto____$1.call(null,_,event));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseQuery.off",_);
}
}
}
});

firebase_cljs.database.query.off.cljs$core$IFn$_invoke$arity$3 = (function (_,event,callback){
if((!((_ == null))) && (!((_.firebase_cljs$database$query$FirebaseDatabaseQuery$off$arity$3 == null)))){
return _.firebase_cljs$database$query$FirebaseDatabaseQuery$off$arity$3(_,event,callback);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.query.off[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,event,callback) : m__7480__auto__.call(null,_,event,callback));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.query.off["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,event,callback) : m__7480__auto____$1.call(null,_,event,callback));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseQuery.off",_);
}
}
}
});

firebase_cljs.database.query.off.cljs$core$IFn$_invoke$arity$4 = (function (_,event,callback,failure){
if((!((_ == null))) && (!((_.firebase_cljs$database$query$FirebaseDatabaseQuery$off$arity$4 == null)))){
return _.firebase_cljs$database$query$FirebaseDatabaseQuery$off$arity$4(_,event,callback,failure);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.query.off[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$4(_,event,callback,failure) : m__7480__auto__.call(null,_,event,callback,failure));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.query.off["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$4(_,event,callback,failure) : m__7480__auto____$1.call(null,_,event,callback,failure));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseQuery.off",_);
}
}
}
});

firebase_cljs.database.query.off.cljs$lang$maxFixedArity = 4;


/**
 * Listens for data changes at a particular location.
 */
firebase_cljs.database.query.on = (function firebase_cljs$database$query$on(var_args){
var args13242 = [];
var len__7924__auto___13266 = arguments.length;
var i__7925__auto___13267 = (0);
while(true){
if((i__7925__auto___13267 < len__7924__auto___13266)){
args13242.push((arguments[i__7925__auto___13267]));

var G__13268 = (i__7925__auto___13267 + (1));
i__7925__auto___13267 = G__13268;
continue;
} else {
}
break;
}

var G__13244 = args13242.length;
switch (G__13244) {
case 2:
return firebase_cljs.database.query.on.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return firebase_cljs.database.query.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return firebase_cljs.database.query.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13242.length)].join('')));

}
});

firebase_cljs.database.query.on.cljs$core$IFn$_invoke$arity$2 = (function (_,event){
if((!((_ == null))) && (!((_.firebase_cljs$database$query$FirebaseDatabaseQuery$on$arity$2 == null)))){
return _.firebase_cljs$database$query$FirebaseDatabaseQuery$on$arity$2(_,event);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.query.on[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,event) : m__7480__auto__.call(null,_,event));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.query.on["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,event) : m__7480__auto____$1.call(null,_,event));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseQuery.on",_);
}
}
}
});

firebase_cljs.database.query.on.cljs$core$IFn$_invoke$arity$3 = (function (_,event,callback){
if((!((_ == null))) && (!((_.firebase_cljs$database$query$FirebaseDatabaseQuery$on$arity$3 == null)))){
return _.firebase_cljs$database$query$FirebaseDatabaseQuery$on$arity$3(_,event,callback);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.query.on[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,event,callback) : m__7480__auto__.call(null,_,event,callback));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.query.on["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,event,callback) : m__7480__auto____$1.call(null,_,event,callback));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseQuery.on",_);
}
}
}
});

firebase_cljs.database.query.on.cljs$core$IFn$_invoke$arity$4 = (function (_,event,callback,failure){
if((!((_ == null))) && (!((_.firebase_cljs$database$query$FirebaseDatabaseQuery$on$arity$4 == null)))){
return _.firebase_cljs$database$query$FirebaseDatabaseQuery$on$arity$4(_,event,callback,failure);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.query.on[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$4(_,event,callback,failure) : m__7480__auto__.call(null,_,event,callback,failure));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.query.on["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$4(_,event,callback,failure) : m__7480__auto____$1.call(null,_,event,callback,failure));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseQuery.on",_);
}
}
}
});

firebase_cljs.database.query.on.cljs$lang$maxFixedArity = 4;


/**
 * Listens for exactly one event of the specified event type, and then stops listening.
 */
firebase_cljs.database.query.once = (function firebase_cljs$database$query$once(var_args){
var args13245 = [];
var len__7924__auto___13270 = arguments.length;
var i__7925__auto___13271 = (0);
while(true){
if((i__7925__auto___13271 < len__7924__auto___13270)){
args13245.push((arguments[i__7925__auto___13271]));

var G__13272 = (i__7925__auto___13271 + (1));
i__7925__auto___13271 = G__13272;
continue;
} else {
}
break;
}

var G__13247 = args13245.length;
switch (G__13247) {
case 2:
return firebase_cljs.database.query.once.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return firebase_cljs.database.query.once.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return firebase_cljs.database.query.once.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13245.length)].join('')));

}
});

firebase_cljs.database.query.once.cljs$core$IFn$_invoke$arity$2 = (function (_,event){
if((!((_ == null))) && (!((_.firebase_cljs$database$query$FirebaseDatabaseQuery$once$arity$2 == null)))){
return _.firebase_cljs$database$query$FirebaseDatabaseQuery$once$arity$2(_,event);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.query.once[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,event) : m__7480__auto__.call(null,_,event));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.query.once["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,event) : m__7480__auto____$1.call(null,_,event));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseQuery.once",_);
}
}
}
});

firebase_cljs.database.query.once.cljs$core$IFn$_invoke$arity$3 = (function (_,event,callback){
if((!((_ == null))) && (!((_.firebase_cljs$database$query$FirebaseDatabaseQuery$once$arity$3 == null)))){
return _.firebase_cljs$database$query$FirebaseDatabaseQuery$once$arity$3(_,event,callback);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.query.once[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,event,callback) : m__7480__auto__.call(null,_,event,callback));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.query.once["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,event,callback) : m__7480__auto____$1.call(null,_,event,callback));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseQuery.once",_);
}
}
}
});

firebase_cljs.database.query.once.cljs$core$IFn$_invoke$arity$4 = (function (_,event,callback,failure){
if((!((_ == null))) && (!((_.firebase_cljs$database$query$FirebaseDatabaseQuery$once$arity$4 == null)))){
return _.firebase_cljs$database$query$FirebaseDatabaseQuery$once$arity$4(_,event,callback,failure);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.query.once[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$4(_,event,callback,failure) : m__7480__auto__.call(null,_,event,callback,failure));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.query.once["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$4(_,event,callback,failure) : m__7480__auto____$1.call(null,_,event,callback,failure));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseQuery.once",_);
}
}
}
});

firebase_cljs.database.query.once.cljs$lang$maxFixedArity = 4;


/**
 * Generates a new Query object ordered by the specified type.
 */
firebase_cljs.database.query.sort_by = (function firebase_cljs$database$query$sort_by(var_args){
var args13248 = [];
var len__7924__auto___13274 = arguments.length;
var i__7925__auto___13275 = (0);
while(true){
if((i__7925__auto___13275 < len__7924__auto___13274)){
args13248.push((arguments[i__7925__auto___13275]));

var G__13276 = (i__7925__auto___13275 + (1));
i__7925__auto___13275 = G__13276;
continue;
} else {
}
break;
}

var G__13250 = args13248.length;
switch (G__13250) {
case 2:
return firebase_cljs.database.query.sort_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return firebase_cljs.database.query.sort_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13248.length)].join('')));

}
});

firebase_cljs.database.query.sort_by.cljs$core$IFn$_invoke$arity$2 = (function (_,sort){
if((!((_ == null))) && (!((_.firebase_cljs$database$query$FirebaseDatabaseQuery$sort_by$arity$2 == null)))){
return _.firebase_cljs$database$query$FirebaseDatabaseQuery$sort_by$arity$2(_,sort);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.query.sort_by[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,sort) : m__7480__auto__.call(null,_,sort));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.query.sort_by["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,sort) : m__7480__auto____$1.call(null,_,sort));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseQuery.sort-by",_);
}
}
}
});

firebase_cljs.database.query.sort_by.cljs$core$IFn$_invoke$arity$3 = (function (_,sort,val){
if((!((_ == null))) && (!((_.firebase_cljs$database$query$FirebaseDatabaseQuery$sort_by$arity$3 == null)))){
return _.firebase_cljs$database$query$FirebaseDatabaseQuery$sort_by$arity$3(_,sort,val);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.query.sort_by[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,sort,val) : m__7480__auto__.call(null,_,sort,val));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.query.sort_by["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,sort,val) : m__7480__auto____$1.call(null,_,sort,val));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseQuery.sort-by",_);
}
}
}
});

firebase_cljs.database.query.sort_by.cljs$lang$maxFixedArity = 3;


/**
 * Creates a Query with the specified starting point. The generated Query includes children which match the specified starting point.
 */
firebase_cljs.database.query.start_at = (function firebase_cljs$database$query$start_at(var_args){
var args13251 = [];
var len__7924__auto___13278 = arguments.length;
var i__7925__auto___13279 = (0);
while(true){
if((i__7925__auto___13279 < len__7924__auto___13278)){
args13251.push((arguments[i__7925__auto___13279]));

var G__13280 = (i__7925__auto___13279 + (1));
i__7925__auto___13279 = G__13280;
continue;
} else {
}
break;
}

var G__13253 = args13251.length;
switch (G__13253) {
case 2:
return firebase_cljs.database.query.start_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return firebase_cljs.database.query.start_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13251.length)].join('')));

}
});

firebase_cljs.database.query.start_at.cljs$core$IFn$_invoke$arity$2 = (function (_,val){
if((!((_ == null))) && (!((_.firebase_cljs$database$query$FirebaseDatabaseQuery$start_at$arity$2 == null)))){
return _.firebase_cljs$database$query$FirebaseDatabaseQuery$start_at$arity$2(_,val);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.query.start_at[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,val) : m__7480__auto__.call(null,_,val));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.query.start_at["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,val) : m__7480__auto____$1.call(null,_,val));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseQuery.start-at",_);
}
}
}
});

firebase_cljs.database.query.start_at.cljs$core$IFn$_invoke$arity$3 = (function (_,val,key){
if((!((_ == null))) && (!((_.firebase_cljs$database$query$FirebaseDatabaseQuery$start_at$arity$3 == null)))){
return _.firebase_cljs$database$query$FirebaseDatabaseQuery$start_at$arity$3(_,val,key);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.query.start_at[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,val,key) : m__7480__auto__.call(null,_,val,key));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.query.start_at["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,val,key) : m__7480__auto____$1.call(null,_,val,key));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseQuery.start-at",_);
}
}
}
});

firebase_cljs.database.query.start_at.cljs$lang$maxFixedArity = 3;


/**
 * Returns string URL for this location.
 */
firebase_cljs.database.query.to_str = (function firebase_cljs$database$query$to_str(_){
if((!((_ == null))) && (!((_.firebase_cljs$database$query$FirebaseDatabaseQuery$to_str$arity$1 == null)))){
return _.firebase_cljs$database$query$FirebaseDatabaseQuery$to_str$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.query.to_str[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.query.to_str["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseQuery.to-str",_);
}
}
}
});

firebase.database.Query.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$ = cljs.core.PROTOCOL_SENTINEL;

firebase.database.Query.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$get_ref$arity$1 = (function (query){
var query__$1 = this;
return query__$1.ref;
});

firebase.database.Query.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$end_at$arity$2 = (function (query,val){
var query__$1 = this;
return query__$1.endAt(val);
});

firebase.database.Query.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$end_at$arity$3 = (function (query,val,key){
var query__$1 = this;
return query__$1.endAt(val,key);
});

firebase.database.Query.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$equal_to$arity$2 = (function (query,val){
var query__$1 = this;
return query__$1.equalTo(val);
});

firebase.database.Query.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$equal_to$arity$3 = (function (query,val,key){
var query__$1 = this;
return query__$1.equalTo(val,key);
});

firebase.database.Query.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$take$arity$2 = (function (query,limit){
var query__$1 = this;
return query__$1.limitToFirst(limit);
});

firebase.database.Query.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$take_last$arity$2 = (function (query,limit){
var query__$1 = this;
return query__$1.limitToLast(limit);
});

firebase.database.Query.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$off$arity$1 = (function (query){
var query__$1 = this;
return query__$1.off();
});

firebase.database.Query.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$off$arity$2 = (function (query,event){
var query__$1 = this;
return query__$1.off(event);
});

firebase.database.Query.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$off$arity$3 = (function (query,event,callback){
var query__$1 = this;
return query__$1.off(event,callback);
});

firebase.database.Query.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$off$arity$4 = (function (query,event,callback,failure){
var query__$1 = this;
return query__$1.off(event,callback,failure);
});

firebase.database.Query.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$on$arity$3 = (function (query,event,callback){
var query__$1 = this;
return query__$1.on(event,callback);
});

firebase.database.Query.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$on$arity$4 = (function (query,event,callback,failure){
var query__$1 = this;
return query__$1.on(event,callback,failure);
});

firebase.database.Query.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$once$arity$2 = (function (query,event){
var query__$1 = this;
return query__$1.once(event);
});

firebase.database.Query.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$once$arity$3 = (function (query,event,callback){
var query__$1 = this;
return query__$1.once(event,callback);
});

firebase.database.Query.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$once$arity$4 = (function (query,event,callback,failure){
var query__$1 = this;
return query__$1.once(event,callback,failure);
});

firebase.database.Query.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$sort_by$arity$2 = (function (query,sort){
var query__$1 = this;
return firebase_cljs.database.query.sort_by.cljs$core$IFn$_invoke$arity$3(query__$1,sort,null);
});

firebase.database.Query.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$sort_by$arity$3 = (function (query,sort,val){
var query__$1 = this;
var G__13282 = (((sort instanceof cljs.core.Keyword))?sort.fqn:null);
switch (G__13282) {
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

firebase.database.Query.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$start_at$arity$2 = (function (query,val){
var query__$1 = this;
return query__$1.startAt(val);
});

firebase.database.Query.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$start_at$arity$3 = (function (query,val,key){
var query__$1 = this;
return query__$1.startAt(val,key);
});

firebase.database.Query.prototype.firebase_cljs$database$query$FirebaseDatabaseQuery$to_str$arity$1 = (function (query){
var query__$1 = this;
return query__$1.toString();
});
