// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.cst$kw$finished);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15236 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15236 = (function (f,meta15237){
this.f = f;
this.meta15237 = meta15237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15238,meta15237__$1){
var self__ = this;
var _15238__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15236(self__.f,meta15237__$1));
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15238){
var self__ = this;
var _15238__$1 = this;
return self__.meta15237;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15236.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15236.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15236.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15236.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$meta15237], null);
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15236.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15236.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers15236";

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15236.cljs$lang$ctorPrWriter = (function (this__7422__auto__,writer__7423__auto__,opt__7424__auto__){
return cljs.core._write(writer__7423__auto__,"cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers15236");
});

cljs.core.async.impl.ioc_helpers.__GT_t_cljs$core$async$impl$ioc_helpers15236 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t_cljs$core$async$impl$ioc_helpers15236(f__$1,meta15237){
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15236(f__$1,meta15237));
});

}

return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15236(f,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e15240){if((e15240 instanceof Object)){
var ex = e15240;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e15240;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__4655__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_15243_15245 = state;
(statearr_15243_15245[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_15243_15245[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4655__auto__)){
var cb = temp__4655__auto__;
var statearr_15244_15246 = state;
(statearr_15244_15246[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));

(statearr_15244_15246[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.cst$kw$recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__4655__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_15249_15251 = state;
(statearr_15249_15251[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_15249_15251[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4655__auto__)){
var cb = temp__4655__auto__;
var statearr_15250_15252 = state;
(statearr_15250_15252[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));

(statearr_15250_15252[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.cst$kw$recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7438__auto__,k__7439__auto__){
var self__ = this;
var this__7438__auto____$1 = this;
return this__7438__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__7439__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7440__auto__,k15254,else__7441__auto__){
var self__ = this;
var this__7440__auto____$1 = this;
var G__15256 = (((k15254 instanceof cljs.core.Keyword))?k15254.fqn:null);
switch (G__15256) {
case "catch-block":
return self__.catch_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "finally-block":
return self__.finally_block;

break;
case "continue-block":
return self__.continue_block;

break;
case "prev":
return self__.prev;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15254,else__7441__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7452__auto__,writer__7453__auto__,opts__7454__auto__){
var self__ = this;
var this__7452__auto____$1 = this;
var pr_pair__7455__auto__ = ((function (this__7452__auto____$1){
return (function (keyval__7456__auto__){
return cljs.core.pr_sequential_writer(writer__7453__auto__,cljs.core.pr_writer,""," ","",opts__7454__auto__,keyval__7456__auto__);
});})(this__7452__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7453__auto__,pr_pair__7455__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__7454__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$catch_DASH_block,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$catch_DASH_exception,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$finally_DASH_block,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$continue_DASH_block,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prev,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15253){
var self__ = this;
var G__15253__$1 = this;
return (new cljs.core.RecordIter((0),G__15253__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$catch_DASH_block,cljs.core.cst$kw$catch_DASH_exception,cljs.core.cst$kw$finally_DASH_block,cljs.core.cst$kw$continue_DASH_block,cljs.core.cst$kw$prev], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7436__auto__){
var self__ = this;
var this__7436__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7432__auto__){
var self__ = this;
var this__7432__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7442__auto__){
var self__ = this;
var this__7442__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7433__auto__){
var self__ = this;
var this__7433__auto____$1 = this;
var h__7251__auto__ = self__.__hash;
if(!((h__7251__auto__ == null))){
return h__7251__auto__;
} else {
var h__7251__auto____$1 = cljs.core.hash_imap(this__7433__auto____$1);
self__.__hash = h__7251__auto____$1;

return h__7251__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7434__auto__,other__7435__auto__){
var self__ = this;
var this__7434__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6799__auto__ = other__7435__auto__;
if(cljs.core.truth_(and__6799__auto__)){
return ((this__7434__auto____$1.constructor === other__7435__auto__.constructor)) && (cljs.core.equiv_map(this__7434__auto____$1,other__7435__auto__));
} else {
return and__6799__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7447__auto__,k__7448__auto__){
var self__ = this;
var this__7447__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$finally_DASH_block,null,cljs.core.cst$kw$catch_DASH_block,null,cljs.core.cst$kw$catch_DASH_exception,null,cljs.core.cst$kw$prev,null,cljs.core.cst$kw$continue_DASH_block,null], null), null),k__7448__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7447__auto____$1),self__.__meta),k__7448__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7448__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7445__auto__,k__7446__auto__,G__15253){
var self__ = this;
var this__7445__auto____$1 = this;
var pred__15257 = cljs.core.keyword_identical_QMARK_;
var expr__15258 = k__7446__auto__;
if(cljs.core.truth_((function (){var G__15260 = cljs.core.cst$kw$catch_DASH_block;
var G__15261 = expr__15258;
return (pred__15257.cljs$core$IFn$_invoke$arity$2 ? pred__15257.cljs$core$IFn$_invoke$arity$2(G__15260,G__15261) : pred__15257.call(null,G__15260,G__15261));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__15253,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15262 = cljs.core.cst$kw$catch_DASH_exception;
var G__15263 = expr__15258;
return (pred__15257.cljs$core$IFn$_invoke$arity$2 ? pred__15257.cljs$core$IFn$_invoke$arity$2(G__15262,G__15263) : pred__15257.call(null,G__15262,G__15263));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__15253,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15264 = cljs.core.cst$kw$finally_DASH_block;
var G__15265 = expr__15258;
return (pred__15257.cljs$core$IFn$_invoke$arity$2 ? pred__15257.cljs$core$IFn$_invoke$arity$2(G__15264,G__15265) : pred__15257.call(null,G__15264,G__15265));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__15253,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15266 = cljs.core.cst$kw$continue_DASH_block;
var G__15267 = expr__15258;
return (pred__15257.cljs$core$IFn$_invoke$arity$2 ? pred__15257.cljs$core$IFn$_invoke$arity$2(G__15266,G__15267) : pred__15257.call(null,G__15266,G__15267));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__15253,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15268 = cljs.core.cst$kw$prev;
var G__15269 = expr__15258;
return (pred__15257.cljs$core$IFn$_invoke$arity$2 ? pred__15257.cljs$core$IFn$_invoke$arity$2(G__15268,G__15269) : pred__15257.call(null,G__15268,G__15269));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__15253,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7446__auto__,G__15253),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7450__auto__){
var self__ = this;
var this__7450__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$catch_DASH_block,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$catch_DASH_exception,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$finally_DASH_block,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$continue_DASH_block,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prev,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7437__auto__,G__15253){
var self__ = this;
var this__7437__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__15253,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7443__auto__,entry__7444__auto__){
var self__ = this;
var this__7443__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7444__auto__)){
return this__7443__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7444__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7444__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7443__auto____$1,entry__7444__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$catch_DASH_block,cljs.core.with_meta(cljs.core.cst$sym$catch_DASH_exception,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$Class], null)),cljs.core.cst$sym$finally_DASH_block,cljs.core.cst$sym$continue_DASH_block,cljs.core.cst$sym$prev], null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__7472__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__7472__auto__,writer__7473__auto__){
return cljs.core._write(writer__7473__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$map__GT_ExceptionFrame(G__15255){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.cst$kw$catch_DASH_block.cljs$core$IFn$_invoke$arity$1(G__15255),cljs.core.cst$kw$catch_DASH_exception.cljs$core$IFn$_invoke$arity$1(G__15255),cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(G__15255),cljs.core.cst$kw$continue_DASH_block.cljs$core$IFn$_invoke$arity$1(G__15255),cljs.core.cst$kw$prev.cljs$core$IFn$_invoke$arity$1(G__15255),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15255,cljs.core.cst$kw$catch_DASH_block,cljs.core.array_seq([cljs.core.cst$kw$catch_DASH_exception,cljs.core.cst$kw$finally_DASH_block,cljs.core.cst$kw$continue_DASH_block,cljs.core.cst$kw$prev], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function cljs$core$async$impl$ioc_helpers$add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_15272 = state;
(statearr_15272[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_15272;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function cljs$core$async$impl$ioc_helpers$process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.cst$kw$catch_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.cst$kw$catch_DASH_exception.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__6799__auto__ = exception;
if(cljs.core.truth_(and__6799__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__6799__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__6799__auto__ = exception;
if(cljs.core.truth_(and__6799__auto__)){
var and__6799__auto____$1 = catch_block;
if(cljs.core.truth_(and__6799__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__6799__auto____$1;
}
} else {
return and__6799__auto__;
}
})())){
var statearr_15278 = state;
(statearr_15278[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_15278[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_15278[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_15278[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.cst$kw$catch_DASH_block,null,cljs.core.array_seq([cljs.core.cst$kw$catch_DASH_exception,null], 0)));

return statearr_15278;
} else {
if(cljs.core.truth_((function (){var and__6799__auto__ = exception;
if(cljs.core.truth_(and__6799__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__6799__auto__;
}
})())){
var statearr_15279_15283 = state;
(statearr_15279_15283[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.cst$kw$prev.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__15284 = state;
state = G__15284;
continue;
} else {
if(cljs.core.truth_((function (){var and__6799__auto__ = exception;
if(cljs.core.truth_(and__6799__auto__)){
var and__6799__auto____$1 = cljs.core.not(catch_block);
if(and__6799__auto____$1){
return cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__6799__auto____$1;
}
} else {
return and__6799__auto__;
}
})())){
var statearr_15280 = state;
(statearr_15280[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_15280[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.cst$kw$finally_DASH_block,null));

return statearr_15280;
} else {
if(cljs.core.truth_((function (){var and__6799__auto__ = cljs.core.not(exception);
if(and__6799__auto__){
return cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__6799__auto__;
}
})())){
var statearr_15281 = state;
(statearr_15281[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_15281[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.cst$kw$finally_DASH_block,null));

return statearr_15281;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_15282 = state;
(statearr_15282[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.cst$kw$continue_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_15282[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.cst$kw$prev.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_15282;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});
