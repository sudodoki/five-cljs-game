// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('firebase_cljs.error');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * @interface
 */
firebase_cljs.error.FirebaseError = function(){};

/**
 * Error codes are strings using the following format: 'service/string-code'
 */
firebase_cljs.error.get_code = (function firebase_cljs$error$get_code(_){
if((!((_ == null))) && (!((_.firebase_cljs$error$FirebaseError$get_code$arity$1 == null)))){
return _.firebase_cljs$error$FirebaseError$get_code$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.error.get_code[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.error.get_code["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseError.get-code",_);
}
}
}
});

/**
 * An explanatory message for the error that just occurred.
 */
firebase_cljs.error.get_message = (function firebase_cljs$error$get_message(_){
if((!((_ == null))) && (!((_.firebase_cljs$error$FirebaseError$get_message$arity$1 == null)))){
return _.firebase_cljs$error$FirebaseError$get_message$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.error.get_message[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.error.get_message["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseError.get-message",_);
}
}
}
});

/**
 * The name of the class of Errors.
 */
firebase_cljs.error.get_name = (function firebase_cljs$error$get_name(_){
if((!((_ == null))) && (!((_.firebase_cljs$error$FirebaseError$get_name$arity$1 == null)))){
return _.firebase_cljs$error$FirebaseError$get_name$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.error.get_name[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.error.get_name["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseError.get-name",_);
}
}
}
});

/**
 * A string value containing the execution backtrace when the error originally occured.
 */
firebase_cljs.error.get_stack = (function firebase_cljs$error$get_stack(_){
if((!((_ == null))) && (!((_.firebase_cljs$error$FirebaseError$get_stack$arity$1 == null)))){
return _.firebase_cljs$error$FirebaseError$get_stack$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.error.get_stack[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.error.get_stack["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseError.get-stack",_);
}
}
}
});

(firebase_cljs.error.FirebaseError["object"] = true);

(firebase_cljs.error.get_code["object"] = (function (app){
return (app["code"]);
}));

(firebase_cljs.error.get_message["object"] = (function (app){
return (app["message"]);
}));

(firebase_cljs.error.get_name["object"] = (function (app){
return (app["name"]);
}));

(firebase_cljs.error.get_stack["object"] = (function (app){
return (app["stack"]);
}));
