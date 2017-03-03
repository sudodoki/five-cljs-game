// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__6811__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__6811__auto__)){
return or__6811__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = (function (){var G__13898 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13898) : cljs.core.atom.call(null,G__13898));
})();
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module()["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_13901 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module()["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_13901){
return (function (){
var _STAR_always_update_STAR_13902 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if(!((callback == null))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_13902;
}});})(_STAR_always_update_STAR_13901))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_13901;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args13903 = [];
var len__7924__auto___13906 = arguments.length;
var i__7925__auto___13907 = (0);
while(true){
if((i__7925__auto___13907 < len__7924__auto___13906)){
args13903.push((arguments[i__7925__auto___13907]));

var G__13908 = (i__7925__auto___13907 + (1));
i__7925__auto___13907 = G__13908;
continue;
} else {
}
break;
}

var G__13905 = args13903.length;
switch (G__13905) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13903.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module()["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__13914_13918 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.dom.roots) : cljs.core.deref.call(null,reagent.dom.roots))));
var chunk__13915_13919 = null;
var count__13916_13920 = (0);
var i__13917_13921 = (0);
while(true){
if((i__13917_13921 < count__13916_13920)){
var v_13922 = chunk__13915_13919.cljs$core$IIndexed$_nth$arity$2(null,i__13917_13921);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_13922);

var G__13923 = seq__13914_13918;
var G__13924 = chunk__13915_13919;
var G__13925 = count__13916_13920;
var G__13926 = (i__13917_13921 + (1));
seq__13914_13918 = G__13923;
chunk__13915_13919 = G__13924;
count__13916_13920 = G__13925;
i__13917_13921 = G__13926;
continue;
} else {
var temp__4657__auto___13927 = cljs.core.seq(seq__13914_13918);
if(temp__4657__auto___13927){
var seq__13914_13928__$1 = temp__4657__auto___13927;
if(cljs.core.chunked_seq_QMARK_(seq__13914_13928__$1)){
var c__7630__auto___13929 = cljs.core.chunk_first(seq__13914_13928__$1);
var G__13930 = cljs.core.chunk_rest(seq__13914_13928__$1);
var G__13931 = c__7630__auto___13929;
var G__13932 = cljs.core.count(c__7630__auto___13929);
var G__13933 = (0);
seq__13914_13918 = G__13930;
chunk__13915_13919 = G__13931;
count__13916_13920 = G__13932;
i__13917_13921 = G__13933;
continue;
} else {
var v_13934 = cljs.core.first(seq__13914_13928__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_13934);

var G__13935 = cljs.core.next(seq__13914_13928__$1);
var G__13936 = null;
var G__13937 = (0);
var G__13938 = (0);
seq__13914_13918 = G__13935;
chunk__13915_13919 = G__13936;
count__13916_13920 = G__13937;
i__13917_13921 = G__13938;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
