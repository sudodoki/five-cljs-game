// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('firebase_cljs.promise');
goog.require('cljs.core');
goog.require('cljs.core.constants');
firebase_cljs.promise.promise = (function firebase_cljs$promise$promise(var_args){
var args13201 = [];
var len__7924__auto___13204 = arguments.length;
var i__7925__auto___13205 = (0);
while(true){
if((i__7925__auto___13205 < len__7924__auto___13204)){
args13201.push((arguments[i__7925__auto___13205]));

var G__13206 = (i__7925__auto___13205 + (1));
i__7925__auto___13205 = G__13206;
continue;
} else {
}
break;
}

var G__13203 = args13201.length;
switch (G__13203) {
case 0:
return firebase_cljs.promise.promise.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return firebase_cljs.promise.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13201.length)].join('')));

}
});

firebase_cljs.promise.promise.cljs$core$IFn$_invoke$arity$0 = (function (){
return firebase.Promise();
});

firebase_cljs.promise.promise.cljs$core$IFn$_invoke$arity$1 = (function (val){
return firebase.Promise(val);
});

firebase_cljs.promise.promise.cljs$lang$maxFixedArity = 1;


/**
 * @interface
 */
firebase_cljs.promise.FirebaseThenable = function(){};

/**
 * Assign a callback when the Thenable rejects.
 */
firebase_cljs.promise.catch$ = (function firebase_cljs$promise$catch(_,callback){
if((!((_ == null))) && (!((_.firebase_cljs$promise$FirebaseThenable$catch$arity$2 == null)))){
return _.firebase_cljs$promise$FirebaseThenable$catch$arity$2(_,callback);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.promise.catch$[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,callback) : m__7480__auto__.call(null,_,callback));
} else {
var m__7480__auto____$1 = (firebase_cljs.promise.catch$["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,callback) : m__7480__auto____$1.call(null,_,callback));
} else {
throw cljs.core.missing_protocol("FirebaseThenable.catch",_);
}
}
}
});

/**
 * Assign callback functions called when the Thenable value either resolves, or is rejected.
 */
firebase_cljs.promise.then = (function firebase_cljs$promise$then(var_args){
var args13208 = [];
var len__7924__auto___13211 = arguments.length;
var i__7925__auto___13212 = (0);
while(true){
if((i__7925__auto___13212 < len__7924__auto___13211)){
args13208.push((arguments[i__7925__auto___13212]));

var G__13213 = (i__7925__auto___13212 + (1));
i__7925__auto___13212 = G__13213;
continue;
} else {
}
break;
}

var G__13210 = args13208.length;
switch (G__13210) {
case 2:
return firebase_cljs.promise.then.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return firebase_cljs.promise.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13208.length)].join('')));

}
});

firebase_cljs.promise.then.cljs$core$IFn$_invoke$arity$2 = (function (_,callback){
if((!((_ == null))) && (!((_.firebase_cljs$promise$FirebaseThenable$then$arity$2 == null)))){
return _.firebase_cljs$promise$FirebaseThenable$then$arity$2(_,callback);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.promise.then[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,callback) : m__7480__auto__.call(null,_,callback));
} else {
var m__7480__auto____$1 = (firebase_cljs.promise.then["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,callback) : m__7480__auto____$1.call(null,_,callback));
} else {
throw cljs.core.missing_protocol("FirebaseThenable.then",_);
}
}
}
});

firebase_cljs.promise.then.cljs$core$IFn$_invoke$arity$3 = (function (_,callback,failure){
if((!((_ == null))) && (!((_.firebase_cljs$promise$FirebaseThenable$then$arity$3 == null)))){
return _.firebase_cljs$promise$FirebaseThenable$then$arity$3(_,callback,failure);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.promise.then[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,callback,failure) : m__7480__auto__.call(null,_,callback,failure));
} else {
var m__7480__auto____$1 = (firebase_cljs.promise.then["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,callback,failure) : m__7480__auto____$1.call(null,_,callback,failure));
} else {
throw cljs.core.missing_protocol("FirebaseThenable.then",_);
}
}
}
});

firebase_cljs.promise.then.cljs$lang$maxFixedArity = 3;



/**
 * @interface
 */
firebase_cljs.promise.FirebasePromise = function(){};

/**
 * Convert an array of Promises, to a single array of values. Promise.all() resolves only after all the Promises in the array have resolved.
 */
firebase_cljs.promise.all = (function firebase_cljs$promise$all(_,values){
if((!((_ == null))) && (!((_.firebase_cljs$promise$FirebasePromise$all$arity$2 == null)))){
return _.firebase_cljs$promise$FirebasePromise$all$arity$2(_,values);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.promise.all[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,values) : m__7480__auto__.call(null,_,values));
} else {
var m__7480__auto____$1 = (firebase_cljs.promise.all["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,values) : m__7480__auto____$1.call(null,_,values));
} else {
throw cljs.core.missing_protocol("FirebasePromise.all",_);
}
}
}
});

/**
 * Return (an immediately) rejected Promise.
 */
firebase_cljs.promise.reject = (function firebase_cljs$promise$reject(_,failure){
if((!((_ == null))) && (!((_.firebase_cljs$promise$FirebasePromise$reject$arity$2 == null)))){
return _.firebase_cljs$promise$FirebasePromise$reject$arity$2(_,failure);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.promise.reject[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,failure) : m__7480__auto__.call(null,_,failure));
} else {
var m__7480__auto____$1 = (firebase_cljs.promise.reject["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,failure) : m__7480__auto____$1.call(null,_,failure));
} else {
throw cljs.core.missing_protocol("FirebasePromise.reject",_);
}
}
}
});

/**
 * Return (an immediately) resolved Promise.
 */
firebase_cljs.promise.resolve = (function firebase_cljs$promise$resolve(_,value){
if((!((_ == null))) && (!((_.firebase_cljs$promise$FirebasePromise$resolve$arity$2 == null)))){
return _.firebase_cljs$promise$FirebasePromise$resolve$arity$2(_,value);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.promise.resolve[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,value) : m__7480__auto__.call(null,_,value));
} else {
var m__7480__auto____$1 = (firebase_cljs.promise.resolve["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,value) : m__7480__auto____$1.call(null,_,value));
} else {
throw cljs.core.missing_protocol("FirebasePromise.resolve",_);
}
}
}
});

firebase.Promise.prototype.firebase_cljs$promise$FirebaseThenable$ = cljs.core.PROTOCOL_SENTINEL;

firebase.Promise.prototype.firebase_cljs$promise$FirebaseThenable$catch$arity$2 = (function (prom,callback){
var prom__$1 = this;
return prom__$1.catch(callback);
});

firebase.Promise.prototype.firebase_cljs$promise$FirebaseThenable$then$arity$2 = (function (prom,callback){
var prom__$1 = this;
return prom__$1.then(callback);
});

firebase.Promise.prototype.firebase_cljs$promise$FirebaseThenable$then$arity$3 = (function (prom,callback,failure){
var prom__$1 = this;
return prom__$1.then(callback,failure);
});

firebase.Promise.prototype.firebase_cljs$promise$FirebasePromise$ = cljs.core.PROTOCOL_SENTINEL;

firebase.Promise.prototype.firebase_cljs$promise$FirebasePromise$all$arity$2 = (function (prom,values){
var prom__$1 = this;
return prom__$1.all(values);
});

firebase.Promise.prototype.firebase_cljs$promise$FirebasePromise$reject$arity$2 = (function (prom,failure){
var prom__$1 = this;
return prom__$1.reject(failure);
});

firebase.Promise.prototype.firebase_cljs$promise$FirebasePromise$resolve$arity$2 = (function (prom,value){
var prom__$1 = this;
return prom__$1.resolve(value);
});
(firebase_cljs.promise.FirebaseThenable["object"] = true);

(firebase_cljs.promise.catch$["object"] = (function (prom,callback){
return prom.catch(callback);
}));

(firebase_cljs.promise.then["object"] = (function() {
var G__13215 = null;
var G__13215__2 = (function (prom,callback){
return prom.then(callback);
});
var G__13215__3 = (function (prom,callback,failure){
return prom.then(callback,failure);
});
G__13215 = function(prom,callback,failure){
switch(arguments.length){
case 2:
return G__13215__2.call(this,prom,callback);
case 3:
return G__13215__3.call(this,prom,callback,failure);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13215.cljs$core$IFn$_invoke$arity$2 = G__13215__2;
G__13215.cljs$core$IFn$_invoke$arity$3 = G__13215__3;
return G__13215;
})()
);

(firebase_cljs.promise.FirebasePromise["object"] = true);

(firebase_cljs.promise.all["object"] = (function (prom,values){
return prom.all(values);
}));

(firebase_cljs.promise.reject["object"] = (function (prom,failure){
return prom.reject(failure);
}));

(firebase_cljs.promise.resolve["object"] = (function (prom,value){
return prom.resolve(value);
}));
