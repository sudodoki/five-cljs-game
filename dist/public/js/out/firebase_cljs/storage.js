// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('firebase_cljs.storage');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * @interface
 */
firebase_cljs.storage.FirebaseStorage = function(){};

/**
 * The app associated with this service.
 */
firebase_cljs.storage.get_app = (function firebase_cljs$storage$get_app(_){
if((!((_ == null))) && (!((_.firebase_cljs$storage$FirebaseStorage$get_app$arity$1 == null)))){
return _.firebase_cljs$storage$FirebaseStorage$get_app$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.storage.get_app[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.storage.get_app["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseStorage.get-app",_);
}
}
}
});

/**
 * The maximum time to retry operations other than uploads or downloads in milliseconds.
 */
firebase_cljs.storage.get_operation_time = (function firebase_cljs$storage$get_operation_time(_){
if((!((_ == null))) && (!((_.firebase_cljs$storage$FirebaseStorage$get_operation_time$arity$1 == null)))){
return _.firebase_cljs$storage$FirebaseStorage$get_operation_time$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.storage.get_operation_time[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.storage.get_operation_time["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseStorage.get-operation-time",_);
}
}
}
});

/**
 * The maximum time to retry uploads in milliseconds.
 */
firebase_cljs.storage.get_upload_time = (function firebase_cljs$storage$get_upload_time(_){
if((!((_ == null))) && (!((_.firebase_cljs$storage$FirebaseStorage$get_upload_time$arity$1 == null)))){
return _.firebase_cljs$storage$FirebaseStorage$get_upload_time$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.storage.get_upload_time[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.storage.get_upload_time["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseStorage.get-upload-time",_);
}
}
}
});

/**
 * Returns a reference for the given path in the default bucket.
 */
firebase_cljs.storage.get_ref = (function firebase_cljs$storage$get_ref(_,path){
if((!((_ == null))) && (!((_.firebase_cljs$storage$FirebaseStorage$get_ref$arity$2 == null)))){
return _.firebase_cljs$storage$FirebaseStorage$get_ref$arity$2(_,path);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.storage.get_ref[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,path) : m__7480__auto__.call(null,_,path));
} else {
var m__7480__auto____$1 = (firebase_cljs.storage.get_ref["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,path) : m__7480__auto____$1.call(null,_,path));
} else {
throw cljs.core.missing_protocol("FirebaseStorage.get-ref",_);
}
}
}
});

/**
 * Returns a reference for the given absolute URL.
 */
firebase_cljs.storage.get_ref_url = (function firebase_cljs$storage$get_ref_url(_,path){
if((!((_ == null))) && (!((_.firebase_cljs$storage$FirebaseStorage$get_ref_url$arity$2 == null)))){
return _.firebase_cljs$storage$FirebaseStorage$get_ref_url$arity$2(_,path);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.storage.get_ref_url[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,path) : m__7480__auto__.call(null,_,path));
} else {
var m__7480__auto____$1 = (firebase_cljs.storage.get_ref_url["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,path) : m__7480__auto____$1.call(null,_,path));
} else {
throw cljs.core.missing_protocol("FirebaseStorage.get-ref-url",_);
}
}
}
});

/**
 * Set maximum operation retry time in milliseconds.
 */
firebase_cljs.storage.set_operation_time = (function firebase_cljs$storage$set_operation_time(_,time){
if((!((_ == null))) && (!((_.firebase_cljs$storage$FirebaseStorage$set_operation_time$arity$2 == null)))){
return _.firebase_cljs$storage$FirebaseStorage$set_operation_time$arity$2(_,time);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.storage.set_operation_time[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,time) : m__7480__auto__.call(null,_,time));
} else {
var m__7480__auto____$1 = (firebase_cljs.storage.set_operation_time["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,time) : m__7480__auto____$1.call(null,_,time));
} else {
throw cljs.core.missing_protocol("FirebaseStorage.set-operation-time",_);
}
}
}
});

/**
 * Set maximum upload retry time in milliseconds.
 */
firebase_cljs.storage.set_upload_time = (function firebase_cljs$storage$set_upload_time(_,time){
if((!((_ == null))) && (!((_.firebase_cljs$storage$FirebaseStorage$set_upload_time$arity$2 == null)))){
return _.firebase_cljs$storage$FirebaseStorage$set_upload_time$arity$2(_,time);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.storage.set_upload_time[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,time) : m__7480__auto__.call(null,_,time));
} else {
var m__7480__auto____$1 = (firebase_cljs.storage.set_upload_time["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,time) : m__7480__auto____$1.call(null,_,time));
} else {
throw cljs.core.missing_protocol("FirebaseStorage.set-upload-time",_);
}
}
}
});

firebase.storage.Storage.prototype.firebase_cljs$storage$FirebaseStorage$ = cljs.core.PROTOCOL_SENTINEL;

firebase.storage.Storage.prototype.firebase_cljs$storage$FirebaseStorage$get_app$arity$1 = (function (stor){
var stor__$1 = this;
return stor__$1.app;
});

firebase.storage.Storage.prototype.firebase_cljs$storage$FirebaseStorage$get_operation_time$arity$1 = (function (stor){
var stor__$1 = this;
return stor__$1.maxOperationRetryTime;
});

firebase.storage.Storage.prototype.firebase_cljs$storage$FirebaseStorage$get_upload_time$arity$1 = (function (stor){
var stor__$1 = this;
return stor__$1.maxUploadRetryTime;
});

firebase.storage.Storage.prototype.firebase_cljs$storage$FirebaseStorage$get_ref$arity$2 = (function (stor,path){
var stor__$1 = this;
return stor__$1.ref(path);
});

firebase.storage.Storage.prototype.firebase_cljs$storage$FirebaseStorage$get_ref_url$arity$2 = (function (stor,path){
var stor__$1 = this;
return stor__$1.refFromURL(path);
});

firebase.storage.Storage.prototype.firebase_cljs$storage$FirebaseStorage$set_operation_time$arity$2 = (function (stor,time){
var stor__$1 = this;
return stor__$1.setMaxOperationRetryTime(time);
});

firebase.storage.Storage.prototype.firebase_cljs$storage$FirebaseStorage$set_upload_time$arity$2 = (function (stor,time){
var stor__$1 = this;
return stor__$1.setMaxUploadRetryTime(time);
});
