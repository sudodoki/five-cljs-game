// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('firebase_cljs.user');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * @interface
 */
firebase_cljs.user.FirebaseUser = function(){};

/**
 * True if the user's email address has been verified.
 */
firebase_cljs.user.verified_QMARK_ = (function firebase_cljs$user$verified_QMARK_(_){
if((!((_ == null))) && (!((_.firebase_cljs$user$FirebaseUser$verified_QMARK_$arity$1 == null)))){
return _.firebase_cljs$user$FirebaseUser$verified_QMARK_$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.user.verified_QMARK_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.user.verified_QMARK_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseUser.verified?",_);
}
}
}
});

/**
 * True if user is anonymous.
 */
firebase_cljs.user.anonymous_QMARK_ = (function firebase_cljs$user$anonymous_QMARK_(_){
if((!((_ == null))) && (!((_.firebase_cljs$user$FirebaseUser$anonymous_QMARK_$arity$1 == null)))){
return _.firebase_cljs$user$FirebaseUser$anonymous_QMARK_$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.user.anonymous_QMARK_[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.user.anonymous_QMARK_["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseUser.anonymous?",_);
}
}
}
});

/**
 * Additional provider-specific information about the user.
 */
firebase_cljs.user.get_providerdata = (function firebase_cljs$user$get_providerdata(_){
if((!((_ == null))) && (!((_.firebase_cljs$user$FirebaseUser$get_providerdata$arity$1 == null)))){
return _.firebase_cljs$user$FirebaseUser$get_providerdata$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.user.get_providerdata[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.user.get_providerdata["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseUser.get-providerdata",_);
}
}
}
});

/**
 * A refresh token for the user account. Use only for advanced scenarios that require explicitly refreshing tokens.
 */
firebase_cljs.user.get_refreshtoken = (function firebase_cljs$user$get_refreshtoken(_){
if((!((_ == null))) && (!((_.firebase_cljs$user$FirebaseUser$get_refreshtoken$arity$1 == null)))){
return _.firebase_cljs$user$FirebaseUser$get_refreshtoken$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.user.get_refreshtoken[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.user.get_refreshtoken["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseUser.get-refreshtoken",_);
}
}
}
});

/**
 * Deletes and signs out the user.
 */
firebase_cljs.user.remove = (function firebase_cljs$user$remove(_){
if((!((_ == null))) && (!((_.firebase_cljs$user$FirebaseUser$remove$arity$1 == null)))){
return _.firebase_cljs$user$FirebaseUser$remove$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.user.remove[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.user.remove["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseUser.remove",_);
}
}
}
});

/**
 * Returns a JWT token used to identify the user to a Firebase service.
 */
firebase_cljs.user.get_token = (function firebase_cljs$user$get_token(var_args){
var args13218 = [];
var len__7924__auto___13221 = arguments.length;
var i__7925__auto___13222 = (0);
while(true){
if((i__7925__auto___13222 < len__7924__auto___13221)){
args13218.push((arguments[i__7925__auto___13222]));

var G__13223 = (i__7925__auto___13222 + (1));
i__7925__auto___13222 = G__13223;
continue;
} else {
}
break;
}

var G__13220 = args13218.length;
switch (G__13220) {
case 1:
return firebase_cljs.user.get_token.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return firebase_cljs.user.get_token.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13218.length)].join('')));

}
});

firebase_cljs.user.get_token.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.firebase_cljs$user$FirebaseUser$get_token$arity$1 == null)))){
return _.firebase_cljs$user$FirebaseUser$get_token$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.user.get_token[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.user.get_token["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseUser.get-token",_);
}
}
}
});

firebase_cljs.user.get_token.cljs$core$IFn$_invoke$arity$2 = (function (_,refresh){
if((!((_ == null))) && (!((_.firebase_cljs$user$FirebaseUser$get_token$arity$2 == null)))){
return _.firebase_cljs$user$FirebaseUser$get_token$arity$2(_,refresh);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.user.get_token[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,refresh) : m__7480__auto__.call(null,_,refresh));
} else {
var m__7480__auto____$1 = (firebase_cljs.user.get_token["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,refresh) : m__7480__auto____$1.call(null,_,refresh));
} else {
throw cljs.core.missing_protocol("FirebaseUser.get-token",_);
}
}
}
});

firebase_cljs.user.get_token.cljs$lang$maxFixedArity = 2;


/**
 * Links the user account with the given credentials.
 */
firebase_cljs.user.link = (function firebase_cljs$user$link(_,cred){
if((!((_ == null))) && (!((_.firebase_cljs$user$FirebaseUser$link$arity$2 == null)))){
return _.firebase_cljs$user$FirebaseUser$link$arity$2(_,cred);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.user.link[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,cred) : m__7480__auto__.call(null,_,cred));
} else {
var m__7480__auto____$1 = (firebase_cljs.user.link["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,cred) : m__7480__auto____$1.call(null,_,cred));
} else {
throw cljs.core.missing_protocol("FirebaseUser.link",_);
}
}
}
});

/**
 * Links the authenticated provider to the user account using a pop-up based OAuth flow.
 */
firebase_cljs.user.link_popup = (function firebase_cljs$user$link_popup(_,provider){
if((!((_ == null))) && (!((_.firebase_cljs$user$FirebaseUser$link_popup$arity$2 == null)))){
return _.firebase_cljs$user$FirebaseUser$link_popup$arity$2(_,provider);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.user.link_popup[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,provider) : m__7480__auto__.call(null,_,provider));
} else {
var m__7480__auto____$1 = (firebase_cljs.user.link_popup["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,provider) : m__7480__auto____$1.call(null,_,provider));
} else {
throw cljs.core.missing_protocol("FirebaseUser.link-popup",_);
}
}
}
});

/**
 * Links the authenticated provider to the user account using a full-page redirect flow.
 */
firebase_cljs.user.link_redirect = (function firebase_cljs$user$link_redirect(_,provider){
if((!((_ == null))) && (!((_.firebase_cljs$user$FirebaseUser$link_redirect$arity$2 == null)))){
return _.firebase_cljs$user$FirebaseUser$link_redirect$arity$2(_,provider);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.user.link_redirect[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,provider) : m__7480__auto__.call(null,_,provider));
} else {
var m__7480__auto____$1 = (firebase_cljs.user.link_redirect["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,provider) : m__7480__auto____$1.call(null,_,provider));
} else {
throw cljs.core.missing_protocol("FirebaseUser.link-redirect",_);
}
}
}
});

/**
 * Re-authenticates a user using a fresh credential. 
 */
firebase_cljs.user.reauthenticate = (function firebase_cljs$user$reauthenticate(_,cred){
if((!((_ == null))) && (!((_.firebase_cljs$user$FirebaseUser$reauthenticate$arity$2 == null)))){
return _.firebase_cljs$user$FirebaseUser$reauthenticate$arity$2(_,cred);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.user.reauthenticate[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,cred) : m__7480__auto__.call(null,_,cred));
} else {
var m__7480__auto____$1 = (firebase_cljs.user.reauthenticate["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,cred) : m__7480__auto____$1.call(null,_,cred));
} else {
throw cljs.core.missing_protocol("FirebaseUser.reauthenticate",_);
}
}
}
});

/**
 * Refreshes the current user, if signed in.
 */
firebase_cljs.user.reload = (function firebase_cljs$user$reload(_){
if((!((_ == null))) && (!((_.firebase_cljs$user$FirebaseUser$reload$arity$1 == null)))){
return _.firebase_cljs$user$FirebaseUser$reload$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.user.reload[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.user.reload["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseUser.reload",_);
}
}
}
});

/**
 * Sends a verification email to a user.
 */
firebase_cljs.user.send_verification = (function firebase_cljs$user$send_verification(_){
if((!((_ == null))) && (!((_.firebase_cljs$user$FirebaseUser$send_verification$arity$1 == null)))){
return _.firebase_cljs$user$FirebaseUser$send_verification$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.user.send_verification[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.user.send_verification["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseUser.send-verification",_);
}
}
}
});

/**
 * Unlinks a provider from a user account.
 */
firebase_cljs.user.unlink = (function firebase_cljs$user$unlink(_,provider){
if((!((_ == null))) && (!((_.firebase_cljs$user$FirebaseUser$unlink$arity$2 == null)))){
return _.firebase_cljs$user$FirebaseUser$unlink$arity$2(_,provider);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.user.unlink[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,provider) : m__7480__auto__.call(null,_,provider));
} else {
var m__7480__auto____$1 = (firebase_cljs.user.unlink["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,provider) : m__7480__auto____$1.call(null,_,provider));
} else {
throw cljs.core.missing_protocol("FirebaseUser.unlink",_);
}
}
}
});

/**
 * Updates the user's email address.
 */
firebase_cljs.user.update_email = (function firebase_cljs$user$update_email(_,email){
if((!((_ == null))) && (!((_.firebase_cljs$user$FirebaseUser$update_email$arity$2 == null)))){
return _.firebase_cljs$user$FirebaseUser$update_email$arity$2(_,email);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.user.update_email[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,email) : m__7480__auto__.call(null,_,email));
} else {
var m__7480__auto____$1 = (firebase_cljs.user.update_email["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,email) : m__7480__auto____$1.call(null,_,email));
} else {
throw cljs.core.missing_protocol("FirebaseUser.update-email",_);
}
}
}
});

/**
 * Updates the user's password.
 */
firebase_cljs.user.update_password = (function firebase_cljs$user$update_password(_,pass){
if((!((_ == null))) && (!((_.firebase_cljs$user$FirebaseUser$update_password$arity$2 == null)))){
return _.firebase_cljs$user$FirebaseUser$update_password$arity$2(_,pass);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.user.update_password[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,pass) : m__7480__auto__.call(null,_,pass));
} else {
var m__7480__auto____$1 = (firebase_cljs.user.update_password["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,pass) : m__7480__auto____$1.call(null,_,pass));
} else {
throw cljs.core.missing_protocol("FirebaseUser.update-password",_);
}
}
}
});

/**
 * Updates a user's profile data.
 */
firebase_cljs.user.update_profile = (function firebase_cljs$user$update_profile(_,profile){
if((!((_ == null))) && (!((_.firebase_cljs$user$FirebaseUser$update_profile$arity$2 == null)))){
return _.firebase_cljs$user$FirebaseUser$update_profile$arity$2(_,profile);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.user.update_profile[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,profile) : m__7480__auto__.call(null,_,profile));
} else {
var m__7480__auto____$1 = (firebase_cljs.user.update_profile["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,profile) : m__7480__auto____$1.call(null,_,profile));
} else {
throw cljs.core.missing_protocol("FirebaseUser.update-profile",_);
}
}
}
});


/**
 * @interface
 */
firebase_cljs.user.FirebaseUserInfo = function(){};

/**
 * The user's display name (if available).
 */
firebase_cljs.user.name = (function firebase_cljs$user$name(_){
if((!((_ == null))) && (!((_.firebase_cljs$user$FirebaseUserInfo$name$arity$1 == null)))){
return _.firebase_cljs$user$FirebaseUserInfo$name$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.user.name[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.user.name["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseUserInfo.name",_);
}
}
}
});

/**
 * The user's email address (if available).
 */
firebase_cljs.user.email = (function firebase_cljs$user$email(_){
if((!((_ == null))) && (!((_.firebase_cljs$user$FirebaseUserInfo$email$arity$1 == null)))){
return _.firebase_cljs$user$FirebaseUserInfo$email$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.user.email[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.user.email["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseUserInfo.email",_);
}
}
}
});

/**
 * The URL of the user's profile picture (if available).
 */
firebase_cljs.user.photo_url = (function firebase_cljs$user$photo_url(_){
if((!((_ == null))) && (!((_.firebase_cljs$user$FirebaseUserInfo$photo_url$arity$1 == null)))){
return _.firebase_cljs$user$FirebaseUserInfo$photo_url$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.user.photo_url[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.user.photo_url["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseUserInfo.photo-url",_);
}
}
}
});

/**
 * The authentication provider ID for the current user. For example, 'facebook.com', or 'google.com'.
 */
firebase_cljs.user.providerid = (function firebase_cljs$user$providerid(_){
if((!((_ == null))) && (!((_.firebase_cljs$user$FirebaseUserInfo$providerid$arity$1 == null)))){
return _.firebase_cljs$user$FirebaseUserInfo$providerid$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.user.providerid[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.user.providerid["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseUserInfo.providerid",_);
}
}
}
});

/**
 * The user's unique ID.
 */
firebase_cljs.user.uid = (function firebase_cljs$user$uid(_){
if((!((_ == null))) && (!((_.firebase_cljs$user$FirebaseUserInfo$uid$arity$1 == null)))){
return _.firebase_cljs$user$FirebaseUserInfo$uid$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.user.uid[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.user.uid["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseUserInfo.uid",_);
}
}
}
});

firebase.User.prototype.firebase_cljs$user$FirebaseUserInfo$ = cljs.core.PROTOCOL_SENTINEL;

firebase.User.prototype.firebase_cljs$user$FirebaseUserInfo$name$arity$1 = (function (user){
var user__$1 = this;
return (user__$1["displayName"]);
});

firebase.User.prototype.firebase_cljs$user$FirebaseUserInfo$email$arity$1 = (function (user){
var user__$1 = this;
return (user__$1["email"]);
});

firebase.User.prototype.firebase_cljs$user$FirebaseUserInfo$photo_url$arity$1 = (function (user){
var user__$1 = this;
return (user__$1["photoURL"]);
});

firebase.User.prototype.firebase_cljs$user$FirebaseUserInfo$providerid$arity$1 = (function (user){
var user__$1 = this;
return (user__$1["providerId"]);
});

firebase.User.prototype.firebase_cljs$user$FirebaseUserInfo$uid$arity$1 = (function (user){
var user__$1 = this;
return (user__$1["uid"]);
});

firebase.User.prototype.firebase_cljs$user$FirebaseUser$ = cljs.core.PROTOCOL_SENTINEL;

firebase.User.prototype.firebase_cljs$user$FirebaseUser$verified_QMARK_$arity$1 = (function (user){
var user__$1 = this;
return (user__$1["emailVerified"]);
});

firebase.User.prototype.firebase_cljs$user$FirebaseUser$anonymous_QMARK_$arity$1 = (function (user){
var user__$1 = this;
return (user__$1["isAnonymous"]);
});

firebase.User.prototype.firebase_cljs$user$FirebaseUser$get_providerdata$arity$1 = (function (user){
var user__$1 = this;
return (user__$1["providerData"]);
});

firebase.User.prototype.firebase_cljs$user$FirebaseUser$get_refreshtoken$arity$1 = (function (user){
var user__$1 = this;
return (user__$1["refreshToken"]);
});

firebase.User.prototype.firebase_cljs$user$FirebaseUser$remove$arity$1 = (function (user){
var user__$1 = this;
return user__$1.delete();
});

firebase.User.prototype.firebase_cljs$user$FirebaseUser$get_token$arity$1 = (function (user){
var user__$1 = this;
return user__$1.getToken();
});

firebase.User.prototype.firebase_cljs$user$FirebaseUser$get_token$arity$2 = (function (user,refresh){
var user__$1 = this;
return user__$1.getToken(refresh);
});

firebase.User.prototype.firebase_cljs$user$FirebaseUser$link$arity$2 = (function (user,cred){
var user__$1 = this;
return user__$1.link(cred);
});

firebase.User.prototype.firebase_cljs$user$FirebaseUser$link_popup$arity$2 = (function (user,provider){
var user__$1 = this;
return user__$1.linkWithPopup(provider);
});

firebase.User.prototype.firebase_cljs$user$FirebaseUser$link_redirect$arity$2 = (function (user,provider){
var user__$1 = this;
return user__$1.linkWithRedirect(provider);
});

firebase.User.prototype.firebase_cljs$user$FirebaseUser$reauthenticate$arity$2 = (function (user,cred){
var user__$1 = this;
return user__$1.reauthenticate(cred);
});

firebase.User.prototype.firebase_cljs$user$FirebaseUser$reload$arity$1 = (function (user){
var user__$1 = this;
return user__$1.reload();
});

firebase.User.prototype.firebase_cljs$user$FirebaseUser$send_verification$arity$1 = (function (user){
var user__$1 = this;
return user__$1.sendEmailVerification();
});

firebase.User.prototype.firebase_cljs$user$FirebaseUser$unlink$arity$2 = (function (user,provider){
var user__$1 = this;
return user__$1.unlink(provider);
});

firebase.User.prototype.firebase_cljs$user$FirebaseUser$update_email$arity$2 = (function (user,email){
var user__$1 = this;
return user__$1.updateEmail(email);
});

firebase.User.prototype.firebase_cljs$user$FirebaseUser$update_password$arity$2 = (function (user,pass){
var user__$1 = this;
return user__$1.updatePassword(pass);
});

firebase.User.prototype.firebase_cljs$user$FirebaseUser$update_profile$arity$2 = (function (user,profile){
var user__$1 = this;
return user__$1.updateProfile(profile);
});
