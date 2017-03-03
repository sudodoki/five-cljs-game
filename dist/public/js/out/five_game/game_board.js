// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('five_game.game_board');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('accountant.core');
goog.require('five_game.firebase');
if(typeof five_game.game_board.red !== 'undefined'){
} else {
five_game.game_board.red = "red";
}
if(typeof five_game.game_board.none !== 'undefined'){
} else {
five_game.game_board.none = "none";
}
if(typeof five_game.game_board.black !== 'undefined'){
} else {
five_game.game_board.black = "black";
}
if(typeof five_game.game_board.number_rows !== 'undefined'){
} else {
five_game.game_board.number_rows = (6);
}
if(typeof five_game.game_board.number_cols !== 'undefined'){
} else {
five_game.game_board.number_cols = (7);
}
if(typeof five_game.game_board.rows !== 'undefined'){
} else {
five_game.game_board.rows = cljs.core.range.cljs$core$IFn$_invoke$arity$1(five_game.game_board.number_rows);
}
if(typeof five_game.game_board.cols !== 'undefined'){
} else {
five_game.game_board.cols = cljs.core.range.cljs$core$IFn$_invoke$arity$1(five_game.game_board.number_cols);
}
if(typeof five_game.game_board.animation_timeout !== 'undefined'){
} else {
five_game.game_board.animation_timeout = (1005);
}
if(typeof five_game.game_board.player_color_mapping !== 'undefined'){
} else {
five_game.game_board.player_color_mapping = cljs.core.PersistentArrayMap.createAsIfByAssoc([five_game.game_board.black,cljs.core.cst$kw$player1,five_game.game_board.red,cljs.core.cst$kw$player2]);
}
five_game.game_board.last_index_of = (function five_game$game_board$last_index_of(col,element){
var length = cljs.core.count(col);
var reversed = cljs.core.reverse(col);
var indexof = reversed.indexOf(element);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(indexof,(-1))){
return (-1);
} else {
return ((length - (1)) - indexof);
}
});
if(typeof five_game.game_board.moves !== 'undefined'){
} else {
five_game.game_board.moves = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if(typeof five_game.game_board.current_turn !== 'undefined'){
} else {
five_game.game_board.current_turn = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(five_game.game_board.black);
}
if(typeof five_game.game_board.previous_game_turn !== 'undefined'){
} else {
five_game.game_board.previous_game_turn = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(five_game.game_board.red);
}
if(typeof five_game.game_board.players !== 'undefined'){
} else {
five_game.game_board.players = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
five_game.game_board.noop = (function five_game$game_board$noop(){
return cljs.core.List.EMPTY;
});
five_game.game_board.empty_column = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(five_game.game_board.number_rows,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(five_game.game_board.none)));
five_game.game_board.empty_spot = (function five_game$game_board$empty_spot(column){
return five_game.game_board.last_index_of(column,five_game.game_board.none);
});
five_game.game_board.filled_QMARK_ = (function five_game$game_board$filled_QMARK_(column){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(five_game.game_board.empty_spot(column),(-1));
});
five_game.game_board.new_column_state = (function five_game$game_board$new_column_state(color,column){
var to_change = five_game.game_board.empty_spot(column);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),to_change)){
return column;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(column,to_change,color);
}
});
five_game.game_board.put_in_column = (function five_game$game_board$put_in_column(whole_state,p__18532){
var map__18535 = p__18532;
var map__18535__$1 = ((((!((map__18535 == null)))?((((map__18535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18535):map__18535);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18535__$1,cljs.core.cst$kw$column);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18535__$1,cljs.core.cst$kw$color);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(whole_state,column,five_game.game_board.new_column_state(color,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(whole_state,column)));
});
five_game.game_board.moves__GT_state = (function five_game$game_board$moves__GT_state(moves){
var initial = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(five_game.game_board.number_cols,five_game.game_board.empty_column));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(five_game.game_board.put_in_column,initial,moves);
});
five_game.game_board.toggle_turn = (function five_game$game_board$toggle_turn(value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,five_game.game_board.black)){
return five_game.game_board.red;
} else {
return five_game.game_board.black;
}
});
five_game.game_board.is_winning_subset = (function five_game$game_board$is_winning_subset(subset,color){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),cljs.core.count(subset))) && (cljs.core.every_QMARK_((function (p1__18537_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,p1__18537_SHARP_);
}),subset));
});
five_game.game_board.has_4_vertical_QMARK_ = (function five_game$game_board$has_4_vertical_QMARK_(columns,x,y,color){
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(columns,x);
var subset = cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(y,column));
return five_game.game_board.is_winning_subset(subset,color);
});
five_game.game_board.has_4_horizontal_QMARK_ = (function five_game$game_board$has_4_horizontal_QMARK_(columns,x,y,color){
var subset_columns = cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(x,columns));
var subset = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (subset_columns){
return (function (p1__18538_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__18538_SHARP_,y);
});})(subset_columns))
,subset_columns);
return five_game.game_board.is_winning_subset(subset,color);
});
five_game.game_board.has_4_right_diagonal_QMARK_ = (function five_game$game_board$has_4_right_diagonal_QMARK_(columns,x,y,color){
var subset_columns = cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(x,columns));
var subset = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (subset_columns){
return (function (idx,col){
if(((y + idx) < five_game.game_board.number_rows)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(col,(y + idx));
} else {
return null;
}
});})(subset_columns))
,subset_columns);
return five_game.game_board.is_winning_subset(subset,color);
});
five_game.game_board.has_4_left_diagonal_QMARK_ = (function five_game$game_board$has_4_left_diagonal_QMARK_(columns,x,y,color){
var start_column = (x - (3));
var subset_columns = cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(start_column,columns));
var subset = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (start_column,subset_columns){
return (function (idx,col){
if((((y + (3)) - idx) < five_game.game_board.number_rows)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(col,((y + (3)) - idx));
} else {
return null;
}
});})(start_column,subset_columns))
,subset_columns);
return five_game.game_board.is_winning_subset(subset,color);
});
five_game.game_board.has_4_connected_QMARK_ = (function five_game$game_board$has_4_connected_QMARK_(columns,x,y,color){
var and__6799__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
if(and__6799__auto__){
var or__6811__auto__ = five_game.game_board.has_4_vertical_QMARK_(columns,x,y,color);
if(cljs.core.truth_(or__6811__auto__)){
return or__6811__auto__;
} else {
var or__6811__auto____$1 = five_game.game_board.has_4_horizontal_QMARK_(columns,x,y,color);
if(cljs.core.truth_(or__6811__auto____$1)){
return or__6811__auto____$1;
} else {
var or__6811__auto____$2 = five_game.game_board.has_4_right_diagonal_QMARK_(columns,x,y,color);
if(cljs.core.truth_(or__6811__auto____$2)){
return or__6811__auto____$2;
} else {
return five_game.game_board.has_4_left_diagonal_QMARK_(columns,x,y,color);
}
}
}
} else {
return and__6799__auto__;
}
});
five_game.game_board.has_won_QMARK_ = (function five_game$game_board$has_won_QMARK_(moves,color){
if((cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(moves) : cljs.core.deref.call(null,moves))) < (6))){
return false;
} else {
var state = five_game.game_board.moves__GT_state((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(moves) : cljs.core.deref.call(null,moves)));
return cljs.core.some(cljs.core.true_QMARK_,(function (){var iter__7599__auto__ = ((function (state){
return (function five_game$game_board$has_won_QMARK__$_iter__18550(s__18551){
return (new cljs.core.LazySeq(null,((function (state){
return (function (){
var s__18551__$1 = s__18551;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18551__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first(xs__5205__auto__);
var iterys__7595__auto__ = ((function (s__18551__$1,x,xs__5205__auto__,temp__4657__auto__,state){
return (function five_game$game_board$has_won_QMARK__$_iter__18550_$_iter__18552(s__18553){
return (new cljs.core.LazySeq(null,((function (s__18551__$1,x,xs__5205__auto__,temp__4657__auto__,state){
return (function (){
var s__18553__$1 = s__18553;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__18553__$1);
if(temp__4657__auto____$1){
var s__18553__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18553__$2)){
var c__7597__auto__ = cljs.core.chunk_first(s__18553__$2);
var size__7598__auto__ = cljs.core.count(c__7597__auto__);
var b__18555 = cljs.core.chunk_buffer(size__7598__auto__);
if((function (){var i__18554 = (0);
while(true){
if((i__18554 < size__7598__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7597__auto__,i__18554);
cljs.core.chunk_append(b__18555,five_game.game_board.has_4_connected_QMARK_(state,x,y,color));

var G__18561 = (i__18554 + (1));
i__18554 = G__18561;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18555),five_game$game_board$has_won_QMARK__$_iter__18550_$_iter__18552(cljs.core.chunk_rest(s__18553__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18555),null);
}
} else {
var y = cljs.core.first(s__18553__$2);
return cljs.core.cons(five_game.game_board.has_4_connected_QMARK_(state,x,y,color),five_game$game_board$has_won_QMARK__$_iter__18550_$_iter__18552(cljs.core.rest(s__18553__$2)));
}
} else {
return null;
}
break;
}
});})(s__18551__$1,x,xs__5205__auto__,temp__4657__auto__,state))
,null,null));
});})(s__18551__$1,x,xs__5205__auto__,temp__4657__auto__,state))
;
var fs__7596__auto__ = cljs.core.seq(iterys__7595__auto__(five_game.game_board.rows));
if(fs__7596__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7596__auto__,five_game$game_board$has_won_QMARK__$_iter__18550(cljs.core.rest(s__18551__$1)));
} else {
var G__18562 = cljs.core.rest(s__18551__$1);
s__18551__$1 = G__18562;
continue;
}
} else {
return null;
}
break;
}
});})(state))
,null,null));
});})(state))
;
return iter__7599__auto__(five_game.game_board.cols);
})());
}
});
five_game.game_board.current_users_turn_QMARK_ = (function five_game$game_board$current_users_turn_QMARK_(current_turn,players){
var player_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(five_game.game_board.player_color_mapping,current_turn);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(cljs.core.vals(players)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((player_key.cljs$core$IFn$_invoke$arity$1 ? player_key.cljs$core$IFn$_invoke$arity$1(players) : player_key.call(null,players)),five_game.firebase.get_current_user_email()));
});
five_game.game_board.update_player2 = (function five_game$game_board$update_player2(game_id,new_players){
var current_user = five_game.firebase.get_current_user_email();
var player1 = cljs.core.cst$kw$player1.cljs$core$IFn$_invoke$arity$1(new_players);
var player2 = cljs.core.cst$kw$player2.cljs$core$IFn$_invoke$arity$1(new_players);
if(((player2 == null)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_user,player1))){
return five_game.firebase.update_entity_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$games,game_id,cljs.core.cst$kw$players,cljs.core.cst$kw$player2], null),current_user);
} else {
return null;
}
});
five_game.game_board.classname = (function five_game$game_board$classname(classes){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__18567){
var vec__18568 = p__18567;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18568,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18568,(1),null);
return v === true;
}),classes)));
});
five_game.game_board.get_cell = (function five_game$game_board$get_cell(idx,color){
var class$ = five_game.game_board.classname(cljs.core.PersistentArrayMap.createAsIfByAssoc(["cell",true,color,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("fall-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(color,five_game.game_board.none)]));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,class$,cljs.core.cst$kw$key,idx], null)], null);
});
five_game.game_board.get_column_markup = (function five_game$game_board$get_column_markup(idx,column){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"column",cljs.core.cst$kw$key,idx], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(five_game.game_board.get_cell,column)], null);
});
five_game.game_board.slots = (function (){var G__18571 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18571) : cljs.core.atom.call(null,G__18571));
})();
five_game.game_board.coin_slot = (function five_game$game_board$coin_slot(on_toss,idx,column){
var fall_count = five_game.game_board.empty_spot(column);
var ref = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var click_handler = ((function (fall_count,ref){
return (function (){
return (on_toss.cljs$core$IFn$_invoke$arity$1 ? on_toss.cljs$core$IFn$_invoke$arity$1(idx) : on_toss.call(null,idx));
});})(fall_count,ref))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(five_game.game_board.filled_QMARK_(column))?five_game.game_board.noop:click_handler),cljs.core.cst$kw$ref,((function (fall_count,ref,click_handler){
return (function (ref__$1){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(five_game.game_board.slots,((function (fall_count,ref,click_handler){
return (function (p1__18572_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18572_SHARP_,idx,ref__$1);
});})(fall_count,ref,click_handler))
);
});})(fall_count,ref,click_handler))
,cljs.core.cst$kw$class,five_game.game_board.classname(new cljs.core.PersistentArrayMap(null, 2, ["slot",true,"filled",five_game.game_board.filled_QMARK_(column)], null)),cljs.core.cst$kw$key,idx], null)], null);
});
five_game.game_board.status = (function five_game$game_board$status(red_won_QMARK_,black_won_QMARK_){
if(cljs.core.truth_((function (){var or__6811__auto__ = red_won_QMARK_;
if(cljs.core.truth_(or__6811__auto__)){
return or__6811__auto__;
} else {
return black_won_QMARK_;
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,five_game.game_board.classname(new cljs.core.PersistentArrayMap(null, 3, ["status",true,"red",red_won_QMARK_,"black",black_won_QMARK_], null))], null),(cljs.core.truth_(red_won_QMARK_)?"Red":"Black")," wins! :)"], null);
} else {
return null;
}
});
five_game.game_board.finish_game_panel = (function five_game$game_board$finish_game_panel(game_ended,game_id){
if(cljs.core.truth_(game_ended)){
var previous_game_turn = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(five_game.game_board.previous_game_turn) : cljs.core.deref.call(null,five_game.game_board.previous_game_turn));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (previous_game_turn){
return (function (){
five_game.firebase.update_entity_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$games,game_id,cljs.core.cst$kw$moves], null),cljs.core.PersistentVector.EMPTY);

five_game.firebase.update_entity_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$games,game_id,cljs.core.cst$kw$previous_DASH_game_DASH_turn], null),five_game.game_board.toggle_turn(previous_game_turn));

return five_game.firebase.update_entity_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$games,game_id,cljs.core.cst$kw$current_DASH_turn], null),previous_game_turn);
});})(previous_game_turn))
], null),"Reset Game"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (previous_game_turn){
return (function (){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/five-cljs-game/");
});})(previous_game_turn))
], null),"Back to main menu"], null)], null);
} else {
return null;
}
});
five_game.game_board.turn_indicator = (function five_game$game_board$turn_indicator(p__18573,current_turn){
var map__18576 = p__18573;
var map__18576__$1 = ((((!((map__18576 == null)))?((((map__18576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18576.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18576):map__18576);
var players = map__18576__$1;
var player2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18576__$1,cljs.core.cst$kw$player2);
if((player2 == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Waiting for players to join..."], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,(cljs.core.truth_(five_game.game_board.current_users_turn_QMARK_(current_turn,players))?"Your turn":"Your opponent's turn")], null);
}
});
five_game.game_board.info_panel = (function five_game$game_board$info_panel(game_id,players){
var host = reagent.session.get(cljs.core.cst$kw$host);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"info-panel"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Game ID: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"bold"], null),game_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("TODO:fixme/five-cljs-game/games/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_id)].join('')], null),"Link to this game"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Player 1: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"bold"], null),cljs.core.cst$kw$player1.cljs$core$IFn$_invoke$arity$1(players)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Player 2: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"bold"], null),cljs.core.cst$kw$player2.cljs$core$IFn$_invoke$arity$1(players)], null)], null);
});
five_game.game_board.board_dumb = (function five_game$game_board$board_dumb(p__18578){
var map__18581 = p__18578;
var map__18581__$1 = ((((!((map__18581 == null)))?((((map__18581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18581.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18581):map__18581);
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18581__$1,cljs.core.cst$kw$columns);
var current_turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18581__$1,cljs.core.cst$kw$current_DASH_turn);
var players = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18581__$1,cljs.core.cst$kw$players);
var on_toss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18581__$1,cljs.core.cst$kw$on_DASH_toss);
var game_ended = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18581__$1,cljs.core.cst$kw$game_DASH_ended);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"board"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,five_game.game_board.classname(cljs.core.PersistentArrayMap.createAsIfByAssoc(["coin-tosser",true,current_turn,true,"block",(function (){var or__6811__auto__ = game_ended;
if(cljs.core.truth_(or__6811__auto__)){
return or__6811__auto__;
} else {
return cljs.core.not(five_game.game_board.current_users_turn_QMARK_(current_turn,players));
}
})()]))], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(five_game.game_board.coin_slot,on_toss),columns)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$playground,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$grid], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(five_game.game_board.get_column_markup,columns)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$leg$right], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$leg$left], null)], null);
});
five_game.game_board.board = (function five_game$game_board$board(game_id){
var add_move = (function (idx){
five_game.firebase.update_entity_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$games,game_id,cljs.core.cst$kw$moves], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(five_game.game_board.moves) : cljs.core.deref.call(null,five_game.game_board.moves)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$column,idx,cljs.core.cst$kw$color,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(five_game.game_board.current_turn) : cljs.core.deref.call(null,five_game.game_board.current_turn))], null)));

return five_game.firebase.update_entity_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$games,game_id,cljs.core.cst$kw$current_DASH_turn], null),five_game.game_board.toggle_turn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(five_game.game_board.current_turn) : cljs.core.deref.call(null,five_game.game_board.current_turn))));
});
var on_toss = ((function (add_move){
return (function (idx){
return add_move(idx);
});})(add_move))
;
five_game.firebase.listen_to(game_id,cljs.core.cst$kw$moves,((function (add_move,on_toss){
return (function (p1__18583_SHARP_){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(five_game.game_board.moves,p1__18583_SHARP_) : cljs.core.reset_BANG_.call(null,five_game.game_board.moves,p1__18583_SHARP_));
});})(add_move,on_toss))
);

five_game.firebase.listen_to(game_id,cljs.core.cst$kw$current_DASH_turn,((function (add_move,on_toss){
return (function (p1__18584_SHARP_){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(five_game.game_board.current_turn,p1__18584_SHARP_) : cljs.core.reset_BANG_.call(null,five_game.game_board.current_turn,p1__18584_SHARP_));
});})(add_move,on_toss))
);

five_game.firebase.listen_to(game_id,cljs.core.cst$kw$previous_DASH_game_DASH_turn,((function (add_move,on_toss){
return (function (p1__18585_SHARP_){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(five_game.game_board.previous_game_turn,p1__18585_SHARP_) : cljs.core.reset_BANG_.call(null,five_game.game_board.previous_game_turn,p1__18585_SHARP_));
});})(add_move,on_toss))
);

five_game.firebase.listen_to(game_id,cljs.core.cst$kw$players,((function (add_move,on_toss){
return (function (p1__18586_SHARP_){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(five_game.game_board.players,p1__18586_SHARP_) : cljs.core.reset_BANG_.call(null,five_game.game_board.players,p1__18586_SHARP_));
});})(add_move,on_toss))
);

five_game.firebase.listen_to(game_id,cljs.core.cst$kw$players,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(five_game.game_board.update_player2,game_id));

return ((function (add_move,on_toss){
return (function (){
var red_won = five_game.game_board.has_won_QMARK_(five_game.game_board.moves,five_game.game_board.red);
var black_won = five_game.game_board.has_won_QMARK_(five_game.game_board.moves,five_game.game_board.black);
var game_ended = (function (){var or__6811__auto__ = red_won;
if(cljs.core.truth_(or__6811__auto__)){
return or__6811__auto__;
} else {
return black_won;
}
})();
var players = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(five_game.game_board.players) : cljs.core.deref.call(null,five_game.game_board.players));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [five_game.game_board.turn_indicator,players,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(five_game.game_board.current_turn) : cljs.core.deref.call(null,five_game.game_board.current_turn))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [five_game.game_board.status,red_won,black_won], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [five_game.game_board.finish_game_panel,game_ended,game_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [five_game.game_board.info_panel,game_id,players], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [five_game.game_board.board_dumb,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$columns,five_game.game_board.moves__GT_state((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(five_game.game_board.moves) : cljs.core.deref.call(null,five_game.game_board.moves))),cljs.core.cst$kw$current_DASH_turn,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(five_game.game_board.current_turn) : cljs.core.deref.call(null,five_game.game_board.current_turn)),cljs.core.cst$kw$players,players,cljs.core.cst$kw$on_DASH_toss,on_toss,cljs.core.cst$kw$game_DASH_ended,game_ended], null)], null)], null);
});
;})(add_move,on_toss))
});
