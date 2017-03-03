// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('accountant.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('goog.history.Event');
goog.require('goog.history.Html5History');
goog.require('goog.Uri');
if(typeof accountant.core.history !== 'undefined'){
} else {
accountant.core.history = (new goog.history.Html5History());
}
accountant.core.listen = (function accountant$core$listen(el,type){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__18139_18142 = el;
var G__18140_18143 = type;
var G__18141_18144 = ((function (G__18139_18142,G__18140_18143,out){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,e);
});})(G__18139_18142,G__18140_18143,out))
;
goog.events.listen(G__18139_18142,G__18140_18143,G__18141_18144);

return out;
});
accountant.core.dispatch_on_navigate = (function accountant$core$dispatch_on_navigate(history,nav_handler){
var navigation = accountant.core.listen(history,goog.history.EventType.NAVIGATE);
var c__15344__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15344__auto__,navigation){
return (function (){
var f__15345__auto__ = (function (){var switch__15220__auto__ = ((function (c__15344__auto__,navigation){
return (function (state_18187){
var state_val_18188 = (state_18187[(1)]);
if((state_val_18188 === (1))){
var state_18187__$1 = state_18187;
var statearr_18189_18203 = state_18187__$1;
(statearr_18189_18203[(2)] = null);

(statearr_18189_18203[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18188 === (2))){
var state_18187__$1 = state_18187;
var statearr_18190_18204 = state_18187__$1;
(statearr_18190_18204[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_18188 === (3))){
var inst_18185 = (state_18187[(2)]);
var state_18187__$1 = state_18187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18187__$1,inst_18185);
} else {
if((state_val_18188 === (4))){
var state_18187__$1 = state_18187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18187__$1,(7),navigation);
} else {
if((state_val_18188 === (5))){
var state_18187__$1 = state_18187;
var statearr_18192_18205 = state_18187__$1;
(statearr_18192_18205[(2)] = null);

(statearr_18192_18205[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18188 === (6))){
var inst_18183 = (state_18187[(2)]);
var state_18187__$1 = state_18187;
var statearr_18193_18206 = state_18187__$1;
(statearr_18193_18206[(2)] = inst_18183);

(statearr_18193_18206[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18188 === (7))){
var inst_18177 = (state_18187[(2)]);
var inst_18178 = inst_18177.token;
var inst_18179 = (nav_handler.cljs$core$IFn$_invoke$arity$1 ? nav_handler.cljs$core$IFn$_invoke$arity$1(inst_18178) : nav_handler.call(null,inst_18178));
var state_18187__$1 = (function (){var statearr_18194 = state_18187;
(statearr_18194[(7)] = inst_18179);

return statearr_18194;
})();
var statearr_18195_18207 = state_18187__$1;
(statearr_18195_18207[(2)] = null);

(statearr_18195_18207[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__15344__auto__,navigation))
;
return ((function (switch__15220__auto__,c__15344__auto__,navigation){
return (function() {
var accountant$core$dispatch_on_navigate_$_state_machine__15221__auto__ = null;
var accountant$core$dispatch_on_navigate_$_state_machine__15221__auto____0 = (function (){
var statearr_18199 = [null,null,null,null,null,null,null,null];
(statearr_18199[(0)] = accountant$core$dispatch_on_navigate_$_state_machine__15221__auto__);

(statearr_18199[(1)] = (1));

return statearr_18199;
});
var accountant$core$dispatch_on_navigate_$_state_machine__15221__auto____1 = (function (state_18187){
while(true){
var ret_value__15222__auto__ = (function (){try{while(true){
var result__15223__auto__ = switch__15220__auto__(state_18187);
if(cljs.core.keyword_identical_QMARK_(result__15223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15223__auto__;
}
break;
}
}catch (e18200){if((e18200 instanceof Object)){
var ex__15224__auto__ = e18200;
var statearr_18201_18208 = state_18187;
(statearr_18201_18208[(5)] = ex__15224__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18187);

return cljs.core.cst$kw$recur;
} else {
throw e18200;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15222__auto__,cljs.core.cst$kw$recur)){
var G__18209 = state_18187;
state_18187 = G__18209;
continue;
} else {
return ret_value__15222__auto__;
}
break;
}
});
accountant$core$dispatch_on_navigate_$_state_machine__15221__auto__ = function(state_18187){
switch(arguments.length){
case 0:
return accountant$core$dispatch_on_navigate_$_state_machine__15221__auto____0.call(this);
case 1:
return accountant$core$dispatch_on_navigate_$_state_machine__15221__auto____1.call(this,state_18187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
accountant$core$dispatch_on_navigate_$_state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$0 = accountant$core$dispatch_on_navigate_$_state_machine__15221__auto____0;
accountant$core$dispatch_on_navigate_$_state_machine__15221__auto__.cljs$core$IFn$_invoke$arity$1 = accountant$core$dispatch_on_navigate_$_state_machine__15221__auto____1;
return accountant$core$dispatch_on_navigate_$_state_machine__15221__auto__;
})()
;})(switch__15220__auto__,c__15344__auto__,navigation))
})();
var state__15346__auto__ = (function (){var statearr_18202 = (f__15345__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15345__auto__.cljs$core$IFn$_invoke$arity$0() : f__15345__auto__.call(null));
(statearr_18202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15344__auto__);

return statearr_18202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15346__auto__);
});})(c__15344__auto__,navigation))
);

return c__15344__auto__;
});
/**
 * Given a DOM element that may or may not be a link, traverse up the DOM tree
 *   to see if any of its parents are links. If so, return the href content.
 */
accountant.core.find_href = (function accountant$core$find_href(e){
while(true){
var temp__4655__auto__ = e.href;
if(cljs.core.truth_(temp__4655__auto__)){
var href = temp__4655__auto__;
return href;
} else {
var temp__4657__auto__ = e.parentNode;
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
var G__18210 = parent;
e = G__18210;
continue;
} else {
return null;
}
}
break;
}
});
/**
 * Gets the URL for a history token, but without preserving the query string
 *   as Google's version incorrectly does. (See https://goo.gl/xwgUos)
 */
accountant.core.get_url = (function accountant$core$get_url(history,token){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(history.pathPrefix_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
});
/**
 * Sets a history token, but without preserving the query string as Google's
 *   version incorrectly does. (See https://goo.gl/xwgUos)
 */
accountant.core.set_token_BANG_ = (function accountant$core$set_token_BANG_(history,token,title){
var js_history = history.window_.history;
var url = accountant.core.get_url(history,token);
js_history.pushState(null,(function (){var or__6811__auto__ = title;
if(cljs.core.truth_(or__6811__auto__)){
return or__6811__auto__;
} else {
var or__6811__auto____$1 = document.title;
if(cljs.core.truth_(or__6811__auto____$1)){
return or__6811__auto____$1;
} else {
return "";
}
}
})(),url);

return history.dispatchEvent((new goog.history.Event(token)));
});
accountant.core.uri__GT_query = (function accountant$core$uri__GT_query(uri){
var query = uri.getQuery();
if(cljs.core.empty_QMARK_(query)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('');
}
});
accountant.core.uri__GT_fragment = (function accountant$core$uri__GT_fragment(uri){
var fragment = uri.getFragment();
if(cljs.core.empty_QMARK_(fragment)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fragment)].join('');
}
});
/**
 * Create a click handler that blocks page reloads for known routes
 */
accountant.core.prevent_reload_on_known_path = (function accountant$core$prevent_reload_on_known_path(history,path_exists_QMARK_){
var G__18214 = document;
var G__18215 = "click";
var G__18216 = ((function (G__18214,G__18215){
return (function (e){
var target = e.target;
var button = e.button;
var meta_key = e.metaKey;
var alt_key = e.altKey;
var ctrl_key = e.ctrlKey;
var shift_key = e.shiftKey;
var any_key = (function (){var or__6811__auto__ = meta_key;
if(cljs.core.truth_(or__6811__auto__)){
return or__6811__auto__;
} else {
var or__6811__auto____$1 = alt_key;
if(cljs.core.truth_(or__6811__auto____$1)){
return or__6811__auto____$1;
} else {
var or__6811__auto____$2 = ctrl_key;
if(cljs.core.truth_(or__6811__auto____$2)){
return or__6811__auto____$2;
} else {
return shift_key;
}
}
}
})();
var href = accountant.core.find_href(target);
var uri = goog.Uri.parse(href);
var path = uri.getPath();
var query = accountant.core.uri__GT_query(uri);
var fragment = accountant.core.uri__GT_fragment(uri);
var relative_href = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fragment)].join('');
var title = target.title;
var host = uri.getDomain();
var current_host = window.location.hostname;
if(cljs.core.truth_((function (){var and__6799__auto__ = cljs.core.not(any_key);
if(and__6799__auto__){
var and__6799__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(button,(0));
if(and__6799__auto____$1){
var and__6799__auto____$2 = (path_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? path_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : path_exists_QMARK_.call(null,path));
if(cljs.core.truth_(and__6799__auto____$2)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(host,current_host);
} else {
return and__6799__auto____$2;
}
} else {
return and__6799__auto____$1;
}
} else {
return and__6799__auto__;
}
})())){
accountant.core.set_token_BANG_(history,relative_href,title);

return e.preventDefault();
} else {
return null;
}
});})(G__18214,G__18215))
;
return goog.events.listen(G__18214,G__18215,G__18216);
});
if(typeof accountant.core.nav_handler !== 'undefined'){
} else {
accountant.core.nav_handler = null;
}
if(typeof accountant.core.path_exists_QMARK_ !== 'undefined'){
} else {
accountant.core.path_exists_QMARK_ = null;
}
/**
 * Create and configure HTML5 history navigation.
 * 
 *   nav-handler: a fn of one argument, a path. Called when we've decided
 *   to navigate to another page. You'll want to make your app draw the
 *   new page here.
 * 
 *   path-exists?: a fn of one argument, a path. Return truthy if this path is handled by the SPA
 */
accountant.core.configure_navigation_BANG_ = (function accountant$core$configure_navigation_BANG_(p__18217){
var map__18220 = p__18217;
var map__18220__$1 = ((((!((map__18220 == null)))?((((map__18220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18220):map__18220);
var nav_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18220__$1,cljs.core.cst$kw$nav_DASH_handler);
var path_exists_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18220__$1,cljs.core.cst$kw$path_DASH_exists_QMARK_);
accountant.core.history.setUseFragment(false);

accountant.core.history.setPathPrefix("");

accountant.core.history.setEnabled(true);

accountant.core.nav_handler = nav_handler;

accountant.core.path_exists_QMARK_ = path_exists_QMARK_;

accountant.core.dispatch_on_navigate(accountant.core.history,nav_handler);

return accountant.core.prevent_reload_on_known_path(accountant.core.history,path_exists_QMARK_);
});
accountant.core.map__GT_params = (function accountant$core$map__GT_params(query){
var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18222_SHARP_){
return cljs.core.name(p1__18222_SHARP_);
}),cljs.core.keys(query));
var values = cljs.core.vals(query);
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(params,values));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (params,values,pairs){
return (function (p1__18223_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("=",p1__18223_SHARP_);
});})(params,values,pairs))
,pairs));
});
/**
 * add a browser history entry. updates window/location
 */
accountant.core.navigate_BANG_ = (function accountant$core$navigate_BANG_(var_args){
var args18224 = [];
var len__7924__auto___18227 = arguments.length;
var i__7925__auto___18228 = (0);
while(true){
if((i__7925__auto___18228 < len__7924__auto___18227)){
args18224.push((arguments[i__7925__auto___18228]));

var G__18229 = (i__7925__auto___18228 + (1));
i__7925__auto___18228 = G__18229;
continue;
} else {
}
break;
}

var G__18226 = args18224.length;
switch (G__18226) {
case 1:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18224.length)].join('')));

}
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (route){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2(route,cljs.core.PersistentArrayMap.EMPTY);
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (route,query){
if(cljs.core.truth_(accountant.core.nav_handler)){
var token = accountant.core.history.getToken();
var old_route = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(token,"?"));
var query_string = accountant.core.map__GT_params(cljs.core.reduce_kv(((function (token,old_route){
return (function (valid,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(valid,k,v);
} else {
return valid;
}
});})(token,old_route))
,cljs.core.PersistentArrayMap.EMPTY,query));
var with_params = ((cljs.core.empty_QMARK_(query_string))?route:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(route),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_string)].join(''));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_route,route)){
return accountant.core.history.replaceToken(with_params);
} else {
return accountant.core.history.setToken(with_params);
}
} else {
return console.error("can't navigate! until configure-navigation! called");
}
});

accountant.core.navigate_BANG_.cljs$lang$maxFixedArity = 2;

accountant.core.dispatch_current_BANG_ = (function accountant$core$dispatch_current_BANG_(){

var path = window.location.pathname;
var query = window.location.search;
var hash = window.location.hash;
if(cljs.core.truth_(accountant.core.nav_handler)){
var G__18232 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join('');
return (accountant.core.nav_handler.cljs$core$IFn$_invoke$arity$1 ? accountant.core.nav_handler.cljs$core$IFn$_invoke$arity$1(G__18232) : accountant.core.nav_handler.call(null,G__18232));
} else {
return console.error("can't dispatch-current until configure-navigation! called");
}
});
