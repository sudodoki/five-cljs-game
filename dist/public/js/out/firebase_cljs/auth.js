// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('firebase_cljs.auth');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * @interface
 */
firebase_cljs.auth.FirebaseAuth = function(){};

/**
 * The App associated with the Auth service instance.
 */
firebase_cljs.auth.get_app = (function firebase_cljs$auth$get_app(_){
if((!((_ == null))) && (!((_.firebase_cljs$auth$FirebaseAuth$get_app$arity$1 == null)))){
return _.firebase_cljs$auth$FirebaseAuth$get_app$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.auth.get_app[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.auth.get_app["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseAuth.get-app",_);
}
}
}
});

/**
 * The currently signed-in user (or null).
 */
firebase_cljs.auth.current_user = (function firebase_cljs$auth$current_user(_){
if((!((_ == null))) && (!((_.firebase_cljs$auth$FirebaseAuth$current_user$arity$1 == null)))){
return _.firebase_cljs$auth$FirebaseAuth$current_user$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.auth.current_user[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.auth.current_user["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseAuth.current-user",_);
}
}
}
});

/**
 * Applies a verification code sent to the user by email or other out-of-band mechanism.
 */
firebase_cljs.auth.apply_actioncode = (function firebase_cljs$auth$apply_actioncode(_,code){
if((!((_ == null))) && (!((_.firebase_cljs$auth$FirebaseAuth$apply_actioncode$arity$2 == null)))){
return _.firebase_cljs$auth$FirebaseAuth$apply_actioncode$arity$2(_,code);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.auth.apply_actioncode[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,code) : m__7480__auto__.call(null,_,code));
} else {
var m__7480__auto____$1 = (firebase_cljs.auth.apply_actioncode["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,code) : m__7480__auto____$1.call(null,_,code));
} else {
throw cljs.core.missing_protocol("FirebaseAuth.apply-actioncode",_);
}
}
}
});

/**
 * Checks a verification code sent to the user by email or other out-of-band mechanism.
 */
firebase_cljs.auth.check_actioncode = (function firebase_cljs$auth$check_actioncode(_,code){
if((!((_ == null))) && (!((_.firebase_cljs$auth$FirebaseAuth$check_actioncode$arity$2 == null)))){
return _.firebase_cljs$auth$FirebaseAuth$check_actioncode$arity$2(_,code);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.auth.check_actioncode[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,code) : m__7480__auto__.call(null,_,code));
} else {
var m__7480__auto____$1 = (firebase_cljs.auth.check_actioncode["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,code) : m__7480__auto____$1.call(null,_,code));
} else {
throw cljs.core.missing_protocol("FirebaseAuth.check-actioncode",_);
}
}
}
});

/**
 * Completes the password reset process, given a confirmation code and new password.
 */
firebase_cljs.auth.confirm_pass_reset = (function firebase_cljs$auth$confirm_pass_reset(_,code,pass){
if((!((_ == null))) && (!((_.firebase_cljs$auth$FirebaseAuth$confirm_pass_reset$arity$3 == null)))){
return _.firebase_cljs$auth$FirebaseAuth$confirm_pass_reset$arity$3(_,code,pass);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.auth.confirm_pass_reset[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,code,pass) : m__7480__auto__.call(null,_,code,pass));
} else {
var m__7480__auto____$1 = (firebase_cljs.auth.confirm_pass_reset["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,code,pass) : m__7480__auto____$1.call(null,_,code,pass));
} else {
throw cljs.core.missing_protocol("FirebaseAuth.confirm-pass-reset",_);
}
}
}
});

/**
 * Creates a new user account associated with the specified email address and password.
 */
firebase_cljs.auth.create_user = (function firebase_cljs$auth$create_user(_,email,pass){
if((!((_ == null))) && (!((_.firebase_cljs$auth$FirebaseAuth$create_user$arity$3 == null)))){
return _.firebase_cljs$auth$FirebaseAuth$create_user$arity$3(_,email,pass);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.auth.create_user[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,email,pass) : m__7480__auto__.call(null,_,email,pass));
} else {
var m__7480__auto____$1 = (firebase_cljs.auth.create_user["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,email,pass) : m__7480__auto____$1.call(null,_,email,pass));
} else {
throw cljs.core.missing_protocol("FirebaseAuth.create-user",_);
}
}
}
});

/**
 * Gets the list of provider IDs that can be used to sign in for the given email address. Useful for an 'identifier-first' sign-in flow.
 */
firebase_cljs.auth.providers_by_email = (function firebase_cljs$auth$providers_by_email(_,email){
if((!((_ == null))) && (!((_.firebase_cljs$auth$FirebaseAuth$providers_by_email$arity$2 == null)))){
return _.firebase_cljs$auth$FirebaseAuth$providers_by_email$arity$2(_,email);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.auth.providers_by_email[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,email) : m__7480__auto__.call(null,_,email));
} else {
var m__7480__auto____$1 = (firebase_cljs.auth.providers_by_email["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,email) : m__7480__auto____$1.call(null,_,email));
} else {
throw cljs.core.missing_protocol("FirebaseAuth.providers-by-email",_);
}
}
}
});

/**
 * Returns a UserCredential from the redirect-based sign-in flow.
 *  If sign-in succeeded, returns the signed in user. If sign-in was unsuccessful, fails with an error. If no redirect operation was called, returns a UserCredential with a null User.
 */
firebase_cljs.auth.redirect_result = (function firebase_cljs$auth$redirect_result(_){
if((!((_ == null))) && (!((_.firebase_cljs$auth$FirebaseAuth$redirect_result$arity$1 == null)))){
return _.firebase_cljs$auth$FirebaseAuth$redirect_result$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.auth.redirect_result[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.auth.redirect_result["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseAuth.redirect-result",_);
}
}
}
});

/**
 * Adds an observer for auth state changes.
 */
firebase_cljs.auth.auth_changed = (function firebase_cljs$auth$auth_changed(var_args){
var args13192 = [];
var len__7924__auto___13195 = arguments.length;
var i__7925__auto___13196 = (0);
while(true){
if((i__7925__auto___13196 < len__7924__auto___13195)){
args13192.push((arguments[i__7925__auto___13196]));

var G__13197 = (i__7925__auto___13196 + (1));
i__7925__auto___13196 = G__13197;
continue;
} else {
}
break;
}

var G__13194 = args13192.length;
switch (G__13194) {
case 2:
return firebase_cljs.auth.auth_changed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return firebase_cljs.auth.auth_changed.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return firebase_cljs.auth.auth_changed.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13192.length)].join('')));

}
});

firebase_cljs.auth.auth_changed.cljs$core$IFn$_invoke$arity$2 = (function (_,observer){
if((!((_ == null))) && (!((_.firebase_cljs$auth$FirebaseAuth$auth_changed$arity$2 == null)))){
return _.firebase_cljs$auth$FirebaseAuth$auth_changed$arity$2(_,observer);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.auth.auth_changed[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,observer) : m__7480__auto__.call(null,_,observer));
} else {
var m__7480__auto____$1 = (firebase_cljs.auth.auth_changed["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,observer) : m__7480__auto____$1.call(null,_,observer));
} else {
throw cljs.core.missing_protocol("FirebaseAuth.auth-changed",_);
}
}
}
});

firebase_cljs.auth.auth_changed.cljs$core$IFn$_invoke$arity$3 = (function (_,observer,failure){
if((!((_ == null))) && (!((_.firebase_cljs$auth$FirebaseAuth$auth_changed$arity$3 == null)))){
return _.firebase_cljs$auth$FirebaseAuth$auth_changed$arity$3(_,observer,failure);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.auth.auth_changed[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,observer,failure) : m__7480__auto__.call(null,_,observer,failure));
} else {
var m__7480__auto____$1 = (firebase_cljs.auth.auth_changed["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,observer,failure) : m__7480__auto____$1.call(null,_,observer,failure));
} else {
throw cljs.core.missing_protocol("FirebaseAuth.auth-changed",_);
}
}
}
});

firebase_cljs.auth.auth_changed.cljs$core$IFn$_invoke$arity$4 = (function (_,observer,failure,complete){
if((!((_ == null))) && (!((_.firebase_cljs$auth$FirebaseAuth$auth_changed$arity$4 == null)))){
return _.firebase_cljs$auth$FirebaseAuth$auth_changed$arity$4(_,observer,failure,complete);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.auth.auth_changed[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$4(_,observer,failure,complete) : m__7480__auto__.call(null,_,observer,failure,complete));
} else {
var m__7480__auto____$1 = (firebase_cljs.auth.auth_changed["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$4(_,observer,failure,complete) : m__7480__auto____$1.call(null,_,observer,failure,complete));
} else {
throw cljs.core.missing_protocol("FirebaseAuth.auth-changed",_);
}
}
}
});

firebase_cljs.auth.auth_changed.cljs$lang$maxFixedArity = 4;


/**
 * Sends a password reset email to the given email address.
 */
firebase_cljs.auth.send_pass_reset = (function firebase_cljs$auth$send_pass_reset(_,email){
if((!((_ == null))) && (!((_.firebase_cljs$auth$FirebaseAuth$send_pass_reset$arity$2 == null)))){
return _.firebase_cljs$auth$FirebaseAuth$send_pass_reset$arity$2(_,email);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.auth.send_pass_reset[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,email) : m__7480__auto__.call(null,_,email));
} else {
var m__7480__auto____$1 = (firebase_cljs.auth.send_pass_reset["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,email) : m__7480__auto____$1.call(null,_,email));
} else {
throw cljs.core.missing_protocol("FirebaseAuth.send-pass-reset",_);
}
}
}
});

/**
 * Asynchronously signs in as an anonymous user.
 *  If there is already an anonymous user signed in, that user will be returned; otherwise, a new anonymous user identity will be created and returned.
 */
firebase_cljs.auth.login_anon = (function firebase_cljs$auth$login_anon(_){
if((!((_ == null))) && (!((_.firebase_cljs$auth$FirebaseAuth$login_anon$arity$1 == null)))){
return _.firebase_cljs$auth$FirebaseAuth$login_anon$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.auth.login_anon[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.auth.login_anon["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseAuth.login-anon",_);
}
}
}
});

/**
 * Asynchronously signs in with the given credentials.
 */
firebase_cljs.auth.login_cred = (function firebase_cljs$auth$login_cred(_,cred){
if((!((_ == null))) && (!((_.firebase_cljs$auth$FirebaseAuth$login_cred$arity$2 == null)))){
return _.firebase_cljs$auth$FirebaseAuth$login_cred$arity$2(_,cred);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.auth.login_cred[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,cred) : m__7480__auto__.call(null,_,cred));
} else {
var m__7480__auto____$1 = (firebase_cljs.auth.login_cred["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,cred) : m__7480__auto____$1.call(null,_,cred));
} else {
throw cljs.core.missing_protocol("FirebaseAuth.login-cred",_);
}
}
}
});

/**
 * Asynchronously signs in using a custom token.
 *  Custom tokens are used to integrate Firebase Auth with existing auth systems, and must be generated by the auth backend.
 */
firebase_cljs.auth.login_token = (function firebase_cljs$auth$login_token(_,token){
if((!((_ == null))) && (!((_.firebase_cljs$auth$FirebaseAuth$login_token$arity$2 == null)))){
return _.firebase_cljs$auth$FirebaseAuth$login_token$arity$2(_,token);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.auth.login_token[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,token) : m__7480__auto__.call(null,_,token));
} else {
var m__7480__auto____$1 = (firebase_cljs.auth.login_token["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,token) : m__7480__auto____$1.call(null,_,token));
} else {
throw cljs.core.missing_protocol("FirebaseAuth.login-token",_);
}
}
}
});

/**
 * Asynchronously signs in using an email and password.
 */
firebase_cljs.auth.login_userpass = (function firebase_cljs$auth$login_userpass(_,email,pass){
if((!((_ == null))) && (!((_.firebase_cljs$auth$FirebaseAuth$login_userpass$arity$3 == null)))){
return _.firebase_cljs$auth$FirebaseAuth$login_userpass$arity$3(_,email,pass);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.auth.login_userpass[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$3(_,email,pass) : m__7480__auto__.call(null,_,email,pass));
} else {
var m__7480__auto____$1 = (firebase_cljs.auth.login_userpass["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$3(_,email,pass) : m__7480__auto____$1.call(null,_,email,pass));
} else {
throw cljs.core.missing_protocol("FirebaseAuth.login-userpass",_);
}
}
}
});

/**
 * Authenticates a Firebase client using a popup-based OAuth authentication flow.
 */
firebase_cljs.auth.login_popup = (function firebase_cljs$auth$login_popup(_,provider){
if((!((_ == null))) && (!((_.firebase_cljs$auth$FirebaseAuth$login_popup$arity$2 == null)))){
return _.firebase_cljs$auth$FirebaseAuth$login_popup$arity$2(_,provider);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.auth.login_popup[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,provider) : m__7480__auto__.call(null,_,provider));
} else {
var m__7480__auto____$1 = (firebase_cljs.auth.login_popup["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,provider) : m__7480__auto____$1.call(null,_,provider));
} else {
throw cljs.core.missing_protocol("FirebaseAuth.login-popup",_);
}
}
}
});

/**
 * Authenticates a Firebase client using a full-page redirect flow.
 */
firebase_cljs.auth.login_redirect = (function firebase_cljs$auth$login_redirect(_,provider){
if((!((_ == null))) && (!((_.firebase_cljs$auth$FirebaseAuth$login_redirect$arity$2 == null)))){
return _.firebase_cljs$auth$FirebaseAuth$login_redirect$arity$2(_,provider);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.auth.login_redirect[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,provider) : m__7480__auto__.call(null,_,provider));
} else {
var m__7480__auto____$1 = (firebase_cljs.auth.login_redirect["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,provider) : m__7480__auto____$1.call(null,_,provider));
} else {
throw cljs.core.missing_protocol("FirebaseAuth.login-redirect",_);
}
}
}
});

/**
 * Signs out the current user.
 */
firebase_cljs.auth.logout = (function firebase_cljs$auth$logout(_){
if((!((_ == null))) && (!((_.firebase_cljs$auth$FirebaseAuth$logout$arity$1 == null)))){
return _.firebase_cljs$auth$FirebaseAuth$logout$arity$1(_);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.auth.logout[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto__.call(null,_));
} else {
var m__7480__auto____$1 = (firebase_cljs.auth.logout["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7480__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("FirebaseAuth.logout",_);
}
}
}
});

/**
 * Checks a password reset code sent to the user by email or other out-of-band mechanism.
 */
firebase_cljs.auth.verify_pass_reset = (function firebase_cljs$auth$verify_pass_reset(_,code){
if((!((_ == null))) && (!((_.firebase_cljs$auth$FirebaseAuth$verify_pass_reset$arity$2 == null)))){
return _.firebase_cljs$auth$FirebaseAuth$verify_pass_reset$arity$2(_,code);
} else {
var x__7479__auto__ = (((_ == null))?null:_);
var m__7480__auto__ = (firebase_cljs.auth.verify_pass_reset[goog.typeOf(x__7479__auto__)]);
if(!((m__7480__auto__ == null))){
return (m__7480__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto__.cljs$core$IFn$_invoke$arity$2(_,code) : m__7480__auto__.call(null,_,code));
} else {
var m__7480__auto____$1 = (firebase_cljs.auth.verify_pass_reset["_"]);
if(!((m__7480__auto____$1 == null))){
return (m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7480__auto____$1.cljs$core$IFn$_invoke$arity$2(_,code) : m__7480__auto____$1.call(null,_,code));
} else {
throw cljs.core.missing_protocol("FirebaseAuth.verify-pass-reset",_);
}
}
}
});

firebase.auth.Auth.prototype.firebase_cljs$auth$FirebaseAuth$ = cljs.core.PROTOCOL_SENTINEL;

firebase.auth.Auth.prototype.firebase_cljs$auth$FirebaseAuth$get_app$arity$1 = (function (auth){
var auth__$1 = this;
return auth__$1.app;
});

firebase.auth.Auth.prototype.firebase_cljs$auth$FirebaseAuth$current_user$arity$1 = (function (auth){
var auth__$1 = this;
return auth__$1.currentUser;
});

firebase.auth.Auth.prototype.firebase_cljs$auth$FirebaseAuth$apply_actioncode$arity$2 = (function (auth,code){
var auth__$1 = this;
return auth__$1.applyActionCode(code);
});

firebase.auth.Auth.prototype.firebase_cljs$auth$FirebaseAuth$check_actioncode$arity$2 = (function (auth,code){
var auth__$1 = this;
return auth__$1.checkActionCode(code);
});

firebase.auth.Auth.prototype.firebase_cljs$auth$FirebaseAuth$confirm_pass_reset$arity$3 = (function (auth,code,pass){
var auth__$1 = this;
return auth__$1.confirmPasswordReset(code,pass);
});

firebase.auth.Auth.prototype.firebase_cljs$auth$FirebaseAuth$create_user$arity$3 = (function (auth,email,pass){
var auth__$1 = this;
return auth__$1.createUserWithEmailAndPassword(email,pass);
});

firebase.auth.Auth.prototype.firebase_cljs$auth$FirebaseAuth$providers_by_email$arity$2 = (function (auth,email){
var auth__$1 = this;
return auth__$1.fetchProvidersForEmail(email);
});

firebase.auth.Auth.prototype.firebase_cljs$auth$FirebaseAuth$redirect_result$arity$1 = (function (auth){
var auth__$1 = this;
return auth__$1.getRedirectResult();
});

firebase.auth.Auth.prototype.firebase_cljs$auth$FirebaseAuth$auth_changed$arity$2 = (function (auth,observer){
var auth__$1 = this;
return auth__$1.onAuthStateChanged(observer);
});

firebase.auth.Auth.prototype.firebase_cljs$auth$FirebaseAuth$auth_changed$arity$3 = (function (auth,observer,failure){
var auth__$1 = this;
return auth__$1.onAuthStateChanged(observer,failure);
});

firebase.auth.Auth.prototype.firebase_cljs$auth$FirebaseAuth$auth_changed$arity$4 = (function (auth,observer,failure,complete){
var auth__$1 = this;
return auth__$1.onAuthStateChanged(observer,failure,complete);
});

firebase.auth.Auth.prototype.firebase_cljs$auth$FirebaseAuth$send_pass_reset$arity$2 = (function (auth,email){
var auth__$1 = this;
return auth__$1.sendPasswordResetEmail(email);
});

firebase.auth.Auth.prototype.firebase_cljs$auth$FirebaseAuth$login_anon$arity$1 = (function (auth){
var auth__$1 = this;
return auth__$1.signInAnonymously();
});

firebase.auth.Auth.prototype.firebase_cljs$auth$FirebaseAuth$login_cred$arity$2 = (function (auth,cred){
var auth__$1 = this;
return auth__$1.signInWithCredential(cred);
});

firebase.auth.Auth.prototype.firebase_cljs$auth$FirebaseAuth$login_token$arity$2 = (function (auth,token){
var auth__$1 = this;
return auth__$1.signInWithCustomToken(token);
});

firebase.auth.Auth.prototype.firebase_cljs$auth$FirebaseAuth$login_userpass$arity$3 = (function (auth,email,pass){
var auth__$1 = this;
return auth__$1.signInWithEmailAndPassword(email,pass);
});

firebase.auth.Auth.prototype.firebase_cljs$auth$FirebaseAuth$login_popup$arity$2 = (function (auth,provider){
var auth__$1 = this;
return auth__$1.signInWithPopup(provider);
});

firebase.auth.Auth.prototype.firebase_cljs$auth$FirebaseAuth$login_redirect$arity$2 = (function (auth,provider){
var auth__$1 = this;
return auth__$1.signInWithRedirect(provider);
});

firebase.auth.Auth.prototype.firebase_cljs$auth$FirebaseAuth$logout$arity$1 = (function (auth){
var auth__$1 = this;
return auth__$1.signOut();
});

firebase.auth.Auth.prototype.firebase_cljs$auth$FirebaseAuth$verify_pass_reset$arity$2 = (function (auth,code){
var auth__$1 = this;
return auth__$1.verifyPasswordResetCode(code);
});
