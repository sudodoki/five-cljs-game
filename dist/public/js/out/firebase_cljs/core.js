// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('firebase_cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('firebase_cljs.app');
goog.require('firebase_cljs.auth');
goog.require('firebase_cljs.database');
goog.require('firebase_cljs.error');
goog.require('firebase_cljs.promise');
goog.require('firebase_cljs.user');
goog.require('firebase_cljs.storage');
firebase_cljs.core.fb = firebase;
firebase_cljs.core.__GT_cljs = (function firebase_cljs$core$__GT_cljs(p1__13428_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__13428_SHARP_,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
});
firebase_cljs.core.init = (function firebase_cljs$core$init(var_args){
var args13429 = [];
var len__7924__auto___13432 = arguments.length;
var i__7925__auto___13433 = (0);
while(true){
if((i__7925__auto___13433 < len__7924__auto___13432)){
args13429.push((arguments[i__7925__auto___13433]));

var G__13434 = (i__7925__auto___13433 + (1));
i__7925__auto___13433 = G__13434;
continue;
} else {
}
break;
}

var G__13431 = args13429.length;
switch (G__13431) {
case 1:
return firebase_cljs.core.init.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return firebase_cljs.core.init.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13429.length)].join('')));

}
});

firebase_cljs.core.init.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return firebase_cljs.core.fb.initializeApp(cljs.core.clj__GT_js(opts));
});

firebase_cljs.core.init.cljs$core$IFn$_invoke$arity$2 = (function (opts,aname){
return firebase_cljs.core.fb.initializeApp(cljs.core.clj__GT_js(opts),aname);
});

firebase_cljs.core.init.cljs$lang$maxFixedArity = 2;

firebase_cljs.core.get_app = (function firebase_cljs$core$get_app(var_args){
var args13436 = [];
var len__7924__auto___13439 = arguments.length;
var i__7925__auto___13440 = (0);
while(true){
if((i__7925__auto___13440 < len__7924__auto___13439)){
args13436.push((arguments[i__7925__auto___13440]));

var G__13441 = (i__7925__auto___13440 + (1));
i__7925__auto___13440 = G__13441;
continue;
} else {
}
break;
}

var G__13438 = args13436.length;
switch (G__13438) {
case 0:
return firebase_cljs.core.get_app.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return firebase_cljs.core.get_app.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13436.length)].join('')));

}
});

firebase_cljs.core.get_app.cljs$core$IFn$_invoke$arity$0 = (function (){
return firebase_cljs.core.fb.app();
});

firebase_cljs.core.get_app.cljs$core$IFn$_invoke$arity$1 = (function (aname){
return firebase_cljs.core.fb.app(aname);
});

firebase_cljs.core.get_app.cljs$lang$maxFixedArity = 1;

firebase_cljs.core.get_auth = (function firebase_cljs$core$get_auth(var_args){
var args13443 = [];
var len__7924__auto___13446 = arguments.length;
var i__7925__auto___13447 = (0);
while(true){
if((i__7925__auto___13447 < len__7924__auto___13446)){
args13443.push((arguments[i__7925__auto___13447]));

var G__13448 = (i__7925__auto___13447 + (1));
i__7925__auto___13447 = G__13448;
continue;
} else {
}
break;
}

var G__13445 = args13443.length;
switch (G__13445) {
case 0:
return firebase_cljs.core.get_auth.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return firebase_cljs.core.get_auth.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13443.length)].join('')));

}
});

firebase_cljs.core.get_auth.cljs$core$IFn$_invoke$arity$0 = (function (){
return firebase_cljs.core.fb.auth();
});

firebase_cljs.core.get_auth.cljs$core$IFn$_invoke$arity$1 = (function (app){
return firebase_cljs.core.fb.auth(app);
});

firebase_cljs.core.get_auth.cljs$lang$maxFixedArity = 1;

firebase_cljs.core.get_db = (function firebase_cljs$core$get_db(var_args){
var args13450 = [];
var len__7924__auto___13453 = arguments.length;
var i__7925__auto___13454 = (0);
while(true){
if((i__7925__auto___13454 < len__7924__auto___13453)){
args13450.push((arguments[i__7925__auto___13454]));

var G__13455 = (i__7925__auto___13454 + (1));
i__7925__auto___13454 = G__13455;
continue;
} else {
}
break;
}

var G__13452 = args13450.length;
switch (G__13452) {
case 0:
return firebase_cljs.core.get_db.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return firebase_cljs.core.get_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13450.length)].join('')));

}
});

firebase_cljs.core.get_db.cljs$core$IFn$_invoke$arity$0 = (function (){
return firebase_cljs.core.fb.database();
});

firebase_cljs.core.get_db.cljs$core$IFn$_invoke$arity$1 = (function (app){
return firebase_cljs.core.fb.database(app);
});

firebase_cljs.core.get_db.cljs$lang$maxFixedArity = 1;

firebase_cljs.core.get_storage = (function firebase_cljs$core$get_storage(var_args){
var args13457 = [];
var len__7924__auto___13460 = arguments.length;
var i__7925__auto___13461 = (0);
while(true){
if((i__7925__auto___13461 < len__7924__auto___13460)){
args13457.push((arguments[i__7925__auto___13461]));

var G__13462 = (i__7925__auto___13461 + (1));
i__7925__auto___13461 = G__13462;
continue;
} else {
}
break;
}

var G__13459 = args13457.length;
switch (G__13459) {
case 0:
return firebase_cljs.core.get_storage.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return firebase_cljs.core.get_storage.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13457.length)].join('')));

}
});

firebase_cljs.core.get_storage.cljs$core$IFn$_invoke$arity$0 = (function (){
return firebase_cljs.core.fb.storage();
});

firebase_cljs.core.get_storage.cljs$core$IFn$_invoke$arity$1 = (function (app){
return firebase_cljs.core.fb.storage(app);
});

firebase_cljs.core.get_storage.cljs$lang$maxFixedArity = 1;

firebase_cljs.core.get_apps = (function firebase_cljs$core$get_apps(){
return firebase_cljs.core.__GT_cljs((firebase_cljs.core.fb["apps"]));
});
firebase_cljs.core.get_version = (function firebase_cljs$core$get_version(){
return firebase_cljs.core.__GT_cljs((firebase_cljs.core.fb["SDK_VERSION"]));
});
