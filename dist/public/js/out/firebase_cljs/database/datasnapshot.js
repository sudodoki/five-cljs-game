// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('firebase_cljs.database.datasnapshot');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * @interface
 */
firebase_cljs.database.datasnapshot.FirebaseDatabaseDataSnapshot = function(){};

/**
 * Get DataSnapshot key.
 */
firebase_cljs.database.datasnapshot.key = (function firebase_cljs$database$datasnapshot$key(_){
if((!((_ == null))) && (!((_.firebase_cljs$database$datasnapshot$FirebaseDatabaseDataSnapshot$key$arity$1 == null)))){
return _.firebase_cljs$database$datasnapshot$FirebaseDatabaseDataSnapshot$key$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.datasnapshot.key[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.datasnapshot.key["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseDataSnapshot.key",_);
}
}
}
});

/**
 * Get DataSnapshot ref.
 */
firebase_cljs.database.datasnapshot.ref = (function firebase_cljs$database$datasnapshot$ref(_){
if((!((_ == null))) && (!((_.firebase_cljs$database$datasnapshot$FirebaseDatabaseDataSnapshot$ref$arity$1 == null)))){
return _.firebase_cljs$database$datasnapshot$FirebaseDatabaseDataSnapshot$ref$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.datasnapshot.ref[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.datasnapshot.ref["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseDataSnapshot.ref",_);
}
}
}
});

/**
 * Get child DataSnapshot from DataSnapshot.
 */
firebase_cljs.database.datasnapshot.child = (function firebase_cljs$database$datasnapshot$child(_,child){
if((!((_ == null))) && (!((_.firebase_cljs$database$datasnapshot$FirebaseDatabaseDataSnapshot$child$arity$2 == null)))){
return _.firebase_cljs$database$datasnapshot$FirebaseDatabaseDataSnapshot$child$arity$2(_,child);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.datasnapshot.child[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,child) : m__7480__auto__.call(null,_,child));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.datasnapshot.child["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,child) : m__7480__auto____$1.call(null,_,child));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseDataSnapshot.child",_);
}
}
}
});

/**
 * Returns True if val != Null.
 */
firebase_cljs.database.datasnapshot.exists = (function firebase_cljs$database$datasnapshot$exists(_){
if((!((_ == null))) && (!((_.firebase_cljs$database$datasnapshot$FirebaseDatabaseDataSnapshot$exists$arity$1 == null)))){
return _.firebase_cljs$database$datasnapshot$FirebaseDatabaseDataSnapshot$exists$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.datasnapshot.exists[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.datasnapshot.exists["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseDataSnapshot.exists",_);
}
}
}
});

/**
 * Enumerate the top-level children in the DataSnapshot.
 */
firebase_cljs.database.datasnapshot.for_each = (function firebase_cljs$database$datasnapshot$for_each(_,action){
if((!((_ == null))) && (!((_.firebase_cljs$database$datasnapshot$FirebaseDatabaseDataSnapshot$for_each$arity$2 == null)))){
return _.firebase_cljs$database$datasnapshot$FirebaseDatabaseDataSnapshot$for_each$arity$2(_,action);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.datasnapshot.for_each[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,action) : m__7480__auto__.call(null,_,action));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.datasnapshot.for_each["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,action) : m__7480__auto____$1.call(null,_,action));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseDataSnapshot.for-each",_);
}
}
}
});

/**
 * Returns priority value as String, Number or Null.
 */
firebase_cljs.database.datasnapshot.get_priority = (function firebase_cljs$database$datasnapshot$get_priority(_){
if((!((_ == null))) && (!((_.firebase_cljs$database$datasnapshot$FirebaseDatabaseDataSnapshot$get_priority$arity$1 == null)))){
return _.firebase_cljs$database$datasnapshot$FirebaseDatabaseDataSnapshot$get_priority$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.datasnapshot.get_priority[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.datasnapshot.get_priority["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseDataSnapshot.get-priority",_);
}
}
}
});

/**
 * Returns True if DataSnapshot has child.
 */
firebase_cljs.database.datasnapshot.child_QMARK_ = (function firebase_cljs$database$datasnapshot$child_QMARK_(_,child){
if((!((_ == null))) && (!((_.firebase_cljs$database$datasnapshot$FirebaseDatabaseDataSnapshot$child_QMARK_$arity$2 == null)))){
return _.firebase_cljs$database$datasnapshot$FirebaseDatabaseDataSnapshot$child_QMARK_$arity$2(_,child);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.datasnapshot.child_QMARK_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,child) : m__7480__auto__.call(null,_,child));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.datasnapshot.child_QMARK_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,child) : m__7480__auto____$1.call(null,_,child));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseDataSnapshot.child?",_);
}
}
}
});

/**
 * Returns True if DataSnapshot has children.
 */
firebase_cljs.database.datasnapshot.children_QMARK_ = (function firebase_cljs$database$datasnapshot$children_QMARK_(_){
if((!((_ == null))) && (!((_.firebase_cljs$database$datasnapshot$FirebaseDatabaseDataSnapshot$children_QMARK_$arity$1 == null)))){
return _.firebase_cljs$database$datasnapshot$FirebaseDatabaseDataSnapshot$children_QMARK_$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.datasnapshot.children_QMARK_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.datasnapshot.children_QMARK_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseDataSnapshot.children?",_);
}
}
}
});

/**
 * Returns children count.
 */
firebase_cljs.database.datasnapshot.count_children = (function firebase_cljs$database$datasnapshot$count_children(_){
if((!((_ == null))) && (!((_.firebase_cljs$database$datasnapshot$FirebaseDatabaseDataSnapshot$count_children$arity$1 == null)))){
return _.firebase_cljs$database$datasnapshot$FirebaseDatabaseDataSnapshot$count_children$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.datasnapshot.count_children[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.datasnapshot.count_children["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseDataSnapshot.count-children",_);
}
}
}
});

/**
 * Convert the DataSnapshot to a Javascript value (number, boolean, string, Object, Array or null).
 */
firebase_cljs.database.datasnapshot.val = (function firebase_cljs$database$datasnapshot$val(_){
if((!((_ == null))) && (!((_.firebase_cljs$database$datasnapshot$FirebaseDatabaseDataSnapshot$val$arity$1 == null)))){
return _.firebase_cljs$database$datasnapshot$FirebaseDatabaseDataSnapshot$val$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.database.datasnapshot.val[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.database.datasnapshot.val["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseDatabaseDataSnapshot.val",_);
}
}
}
});

(firebase_cljs.database.datasnapshot.FirebaseDatabaseDataSnapshot["object"] = true);

(firebase_cljs.database.datasnapshot.key["object"] = (function (snap){
return (snap["key"]);
}));

(firebase_cljs.database.datasnapshot.ref["object"] = (function (snap){
return (snap["ref"]);
}));

(firebase_cljs.database.datasnapshot.child["object"] = (function (snap,path){
return snap.child(path);
}));

(firebase_cljs.database.datasnapshot.exists["object"] = (function (snap){
return snap.exists();
}));

(firebase_cljs.database.datasnapshot.for_each["object"] = (function (snap,action){
return snap.forEach(action);
}));

(firebase_cljs.database.datasnapshot.get_priority["object"] = (function (snap){
return snap.getPriority();
}));

(firebase_cljs.database.datasnapshot.child_QMARK_["object"] = (function (snap,path){
return snap.hasChild(path);
}));

(firebase_cljs.database.datasnapshot.children_QMARK_["object"] = (function (snap){
return snap.hasChildren();
}));

(firebase_cljs.database.datasnapshot.count_children["object"] = (function (snap){
return snap.numChildren();
}));

(firebase_cljs.database.datasnapshot.val["object"] = (function (snap){
return snap.val();
}));
