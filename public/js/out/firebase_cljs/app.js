// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('firebase_cljs.app');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * @interface
 */
firebase_cljs.app.FirebaseApp = function(){};

/**
 * Get app name.
 */
firebase_cljs.app.name = (function firebase_cljs$app$name(_){
if((!((_ == null))) && (!((_.firebase_cljs$app$FirebaseApp$name$arity$1 == null)))){
return _.firebase_cljs$app$FirebaseApp$name$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.app.name[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.app.name["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseApp.name",_);
}
}
}
});

/**
 * Get app options.
 */
firebase_cljs.app.options = (function firebase_cljs$app$options(_){
if((!((_ == null))) && (!((_.firebase_cljs$app$FirebaseApp$options$arity$1 == null)))){
return _.firebase_cljs$app$FirebaseApp$options$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.app.options[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.app.options["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseApp.options",_);
}
}
}
});

/**
 * Get app auth object.
 */
firebase_cljs.app.get_auth = (function firebase_cljs$app$get_auth(_){
if((!((_ == null))) && (!((_.firebase_cljs$app$FirebaseApp$get_auth$arity$1 == null)))){
return _.firebase_cljs$app$FirebaseApp$get_auth$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.app.get_auth[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.app.get_auth["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseApp.get-auth",_);
}
}
}
});

/**
 * Get app database object.
 */
firebase_cljs.app.get_db = (function firebase_cljs$app$get_db(_){
if((!((_ == null))) && (!((_.firebase_cljs$app$FirebaseApp$get_db$arity$1 == null)))){
return _.firebase_cljs$app$FirebaseApp$get_db$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.app.get_db[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.app.get_db["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseApp.get-db",_);
}
}
}
});

/**
 * Get app storage object.
 */
firebase_cljs.app.get_storage = (function firebase_cljs$app$get_storage(_){
if((!((_ == null))) && (!((_.firebase_cljs$app$FirebaseApp$get_storage$arity$1 == null)))){
return _.firebase_cljs$app$FirebaseApp$get_storage$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.app.get_storage[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.app.get_storage["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseApp.get-storage",_);
}
}
}
});

firebase.app.App.prototype.firebase_cljs$app$FirebaseApp$ = cljs.core.PROTOCOL_SENTINEL;

firebase.app.App.prototype.firebase_cljs$app$FirebaseApp$name$arity$1 = (function (app){
var app__$1 = this;
return app__$1.name;
});

firebase.app.App.prototype.firebase_cljs$app$FirebaseApp$options$arity$1 = (function (app){
var app__$1 = this;
return app__$1.options;
});

firebase.app.App.prototype.firebase_cljs$app$FirebaseApp$get_auth$arity$1 = (function (app){
var app__$1 = this;
return app__$1.auth();
});

firebase.app.App.prototype.firebase_cljs$app$FirebaseApp$get_db$arity$1 = (function (app){
var app__$1 = this;
return app__$1.database();
});

firebase.app.App.prototype.firebase_cljs$app$FirebaseApp$get_storage$arity$1 = (function (app){
var app__$1 = this;
return app__$1.storage();
});
