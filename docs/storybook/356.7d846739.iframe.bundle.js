"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[356],{"./node_modules/react-window/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t7:()=>FixedSizeList});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),inheritsLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),assertThisInitialized=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),safeIsNaN=Number.isNaN||function ponyfill(value){return"number"==typeof value&&value!=value};function areInputsEqual(newInputs,lastInputs){if(newInputs.length!==lastInputs.length)return!1;for(var i=0;i<newInputs.length;i++)if(first=newInputs[i],second=lastInputs[i],!(first===second||safeIsNaN(first)&&safeIsNaN(second)))return!1;var first,second;return!0}const memoize_one_esm=function memoizeOne(resultFn,isEqual){var lastThis;void 0===isEqual&&(isEqual=areInputsEqual);var lastResult,lastArgs=[],calledOnce=!1;return function memoized(){for(var newArgs=[],_i=0;_i<arguments.length;_i++)newArgs[_i]=arguments[_i];return calledOnce&&lastThis===this&&isEqual(newArgs,lastArgs)||(lastResult=resultFn.apply(this,newArgs),calledOnce=!0,lastThis=this,lastArgs=newArgs),lastResult}};var react=__webpack_require__("./node_modules/react/index.js"),now="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function cancelTimeout(timeoutID){cancelAnimationFrame(timeoutID.id)}function requestTimeout(callback,delay){var start=now();var timeoutID={id:requestAnimationFrame((function tick(){now()-start>=delay?callback.call(null):timeoutID.id=requestAnimationFrame(tick)}))};return timeoutID}var cachedRTLResult=null;function getRTLOffsetType(recalculate){if(void 0===recalculate&&(recalculate=!1),null===cachedRTLResult||recalculate){var outerDiv=document.createElement("div"),outerStyle=outerDiv.style;outerStyle.width="50px",outerStyle.height="50px",outerStyle.overflow="scroll",outerStyle.direction="rtl";var innerDiv=document.createElement("div"),innerStyle=innerDiv.style;return innerStyle.width="100px",innerStyle.height="100px",outerDiv.appendChild(innerDiv),document.body.appendChild(outerDiv),outerDiv.scrollLeft>0?cachedRTLResult="positive-descending":(outerDiv.scrollLeft=1,cachedRTLResult=0===outerDiv.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(outerDiv),cachedRTLResult}return cachedRTLResult}var defaultItemKey$1=function defaultItemKey(index,data){return index};function createListComponent(_ref){var _class,_temp,getItemOffset=_ref.getItemOffset,getEstimatedTotalSize=_ref.getEstimatedTotalSize,getItemSize=_ref.getItemSize,getOffsetForIndexAndAlignment=_ref.getOffsetForIndexAndAlignment,getStartIndexForOffset=_ref.getStartIndexForOffset,getStopIndexForStartIndex=_ref.getStopIndexForStartIndex,initInstanceProps=_ref.initInstanceProps,shouldResetStyleCacheOnItemSizeChange=_ref.shouldResetStyleCacheOnItemSizeChange,validateProps=_ref.validateProps;return _temp=_class=function(_PureComponent){function List(props){var _this;return(_this=_PureComponent.call(this,props)||this)._instanceProps=initInstanceProps(_this.props,(0,assertThisInitialized.Z)((0,assertThisInitialized.Z)(_this))),_this._outerRef=void 0,_this._resetIsScrollingTimeoutId=null,_this.state={instance:(0,assertThisInitialized.Z)((0,assertThisInitialized.Z)(_this)),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof _this.props.initialScrollOffset?_this.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},_this._callOnItemsRendered=void 0,_this._callOnItemsRendered=memoize_one_esm((function(overscanStartIndex,overscanStopIndex,visibleStartIndex,visibleStopIndex){return _this.props.onItemsRendered({overscanStartIndex,overscanStopIndex,visibleStartIndex,visibleStopIndex})})),_this._callOnScroll=void 0,_this._callOnScroll=memoize_one_esm((function(scrollDirection,scrollOffset,scrollUpdateWasRequested){return _this.props.onScroll({scrollDirection,scrollOffset,scrollUpdateWasRequested})})),_this._getItemStyle=void 0,_this._getItemStyle=function(index){var style,_this$props=_this.props,direction=_this$props.direction,itemSize=_this$props.itemSize,layout=_this$props.layout,itemStyleCache=_this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange&&itemSize,shouldResetStyleCacheOnItemSizeChange&&layout,shouldResetStyleCacheOnItemSizeChange&&direction);if(itemStyleCache.hasOwnProperty(index))style=itemStyleCache[index];else{var _offset=getItemOffset(_this.props,index,_this._instanceProps),size=getItemSize(_this.props,index,_this._instanceProps),isHorizontal="horizontal"===direction||"horizontal"===layout,isRtl="rtl"===direction,offsetHorizontal=isHorizontal?_offset:0;itemStyleCache[index]=style={position:"absolute",left:isRtl?void 0:offsetHorizontal,right:isRtl?offsetHorizontal:void 0,top:isHorizontal?0:_offset,height:isHorizontal?"100%":size,width:isHorizontal?size:"100%"}}return style},_this._getItemStyleCache=void 0,_this._getItemStyleCache=memoize_one_esm((function(_,__,___){return{}})),_this._onScrollHorizontal=function(event){var _event$currentTarget=event.currentTarget,clientWidth=_event$currentTarget.clientWidth,scrollLeft=_event$currentTarget.scrollLeft,scrollWidth=_event$currentTarget.scrollWidth;_this.setState((function(prevState){if(prevState.scrollOffset===scrollLeft)return null;var direction=_this.props.direction,scrollOffset=scrollLeft;if("rtl"===direction)switch(getRTLOffsetType()){case"negative":scrollOffset=-scrollLeft;break;case"positive-descending":scrollOffset=scrollWidth-clientWidth-scrollLeft}return scrollOffset=Math.max(0,Math.min(scrollOffset,scrollWidth-clientWidth)),{isScrolling:!0,scrollDirection:prevState.scrollOffset<scrollLeft?"forward":"backward",scrollOffset,scrollUpdateWasRequested:!1}}),_this._resetIsScrollingDebounced)},_this._onScrollVertical=function(event){var _event$currentTarget2=event.currentTarget,clientHeight=_event$currentTarget2.clientHeight,scrollHeight=_event$currentTarget2.scrollHeight,scrollTop=_event$currentTarget2.scrollTop;_this.setState((function(prevState){if(prevState.scrollOffset===scrollTop)return null;var scrollOffset=Math.max(0,Math.min(scrollTop,scrollHeight-clientHeight));return{isScrolling:!0,scrollDirection:prevState.scrollOffset<scrollOffset?"forward":"backward",scrollOffset,scrollUpdateWasRequested:!1}}),_this._resetIsScrollingDebounced)},_this._outerRefSetter=function(ref){var outerRef=_this.props.outerRef;_this._outerRef=ref,"function"==typeof outerRef?outerRef(ref):null!=outerRef&&"object"==typeof outerRef&&outerRef.hasOwnProperty("current")&&(outerRef.current=ref)},_this._resetIsScrollingDebounced=function(){null!==_this._resetIsScrollingTimeoutId&&cancelTimeout(_this._resetIsScrollingTimeoutId),_this._resetIsScrollingTimeoutId=requestTimeout(_this._resetIsScrolling,150)},_this._resetIsScrolling=function(){_this._resetIsScrollingTimeoutId=null,_this.setState({isScrolling:!1},(function(){_this._getItemStyleCache(-1,null)}))},_this}(0,inheritsLoose.Z)(List,_PureComponent),List.getDerivedStateFromProps=function getDerivedStateFromProps(nextProps,prevState){return validateSharedProps$1(nextProps,prevState),validateProps(nextProps),null};var _proto=List.prototype;return _proto.scrollTo=function scrollTo(scrollOffset){scrollOffset=Math.max(0,scrollOffset),this.setState((function(prevState){return prevState.scrollOffset===scrollOffset?null:{scrollDirection:prevState.scrollOffset<scrollOffset?"forward":"backward",scrollOffset,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},_proto.scrollToItem=function scrollToItem(index,align){void 0===align&&(align="auto");var itemCount=this.props.itemCount,scrollOffset=this.state.scrollOffset;index=Math.max(0,Math.min(index,itemCount-1)),this.scrollTo(getOffsetForIndexAndAlignment(this.props,index,align,scrollOffset,this._instanceProps))},_proto.componentDidMount=function componentDidMount(){var _this$props2=this.props,direction=_this$props2.direction,initialScrollOffset=_this$props2.initialScrollOffset,layout=_this$props2.layout;if("number"==typeof initialScrollOffset&&null!=this._outerRef){var outerRef=this._outerRef;"horizontal"===direction||"horizontal"===layout?outerRef.scrollLeft=initialScrollOffset:outerRef.scrollTop=initialScrollOffset}this._callPropsCallbacks()},_proto.componentDidUpdate=function componentDidUpdate(){var _this$props3=this.props,direction=_this$props3.direction,layout=_this$props3.layout,_this$state=this.state,scrollOffset=_this$state.scrollOffset;if(_this$state.scrollUpdateWasRequested&&null!=this._outerRef){var outerRef=this._outerRef;if("horizontal"===direction||"horizontal"===layout)if("rtl"===direction)switch(getRTLOffsetType()){case"negative":outerRef.scrollLeft=-scrollOffset;break;case"positive-ascending":outerRef.scrollLeft=scrollOffset;break;default:var clientWidth=outerRef.clientWidth,scrollWidth=outerRef.scrollWidth;outerRef.scrollLeft=scrollWidth-clientWidth-scrollOffset}else outerRef.scrollLeft=scrollOffset;else outerRef.scrollTop=scrollOffset}this._callPropsCallbacks()},_proto.componentWillUnmount=function componentWillUnmount(){null!==this._resetIsScrollingTimeoutId&&cancelTimeout(this._resetIsScrollingTimeoutId)},_proto.render=function render(){var _this$props4=this.props,children=_this$props4.children,className=_this$props4.className,direction=_this$props4.direction,height=_this$props4.height,innerRef=_this$props4.innerRef,innerElementType=_this$props4.innerElementType,innerTagName=_this$props4.innerTagName,itemCount=_this$props4.itemCount,itemData=_this$props4.itemData,_this$props4$itemKey=_this$props4.itemKey,itemKey=void 0===_this$props4$itemKey?defaultItemKey$1:_this$props4$itemKey,layout=_this$props4.layout,outerElementType=_this$props4.outerElementType,outerTagName=_this$props4.outerTagName,style=_this$props4.style,useIsScrolling=_this$props4.useIsScrolling,width=_this$props4.width,isScrolling=this.state.isScrolling,isHorizontal="horizontal"===direction||"horizontal"===layout,onScroll=isHorizontal?this._onScrollHorizontal:this._onScrollVertical,_this$_getRangeToRend=this._getRangeToRender(),startIndex=_this$_getRangeToRend[0],stopIndex=_this$_getRangeToRend[1],items=[];if(itemCount>0)for(var _index=startIndex;_index<=stopIndex;_index++)items.push((0,react.createElement)(children,{data:itemData,key:itemKey(_index,itemData),index:_index,isScrolling:useIsScrolling?isScrolling:void 0,style:this._getItemStyle(_index)}));var estimatedTotalSize=getEstimatedTotalSize(this.props,this._instanceProps);return(0,react.createElement)(outerElementType||outerTagName||"div",{className,onScroll,ref:this._outerRefSetter,style:(0,esm_extends.Z)({position:"relative",height,width,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction},style)},(0,react.createElement)(innerElementType||innerTagName||"div",{children:items,ref:innerRef,style:{height:isHorizontal?"100%":estimatedTotalSize,pointerEvents:isScrolling?"none":void 0,width:isHorizontal?estimatedTotalSize:"100%"}}))},_proto._callPropsCallbacks=function _callPropsCallbacks(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var _this$_getRangeToRend2=this._getRangeToRender(),_overscanStartIndex=_this$_getRangeToRend2[0],_overscanStopIndex=_this$_getRangeToRend2[1],_visibleStartIndex=_this$_getRangeToRend2[2],_visibleStopIndex=_this$_getRangeToRend2[3];this._callOnItemsRendered(_overscanStartIndex,_overscanStopIndex,_visibleStartIndex,_visibleStopIndex)}if("function"==typeof this.props.onScroll){var _this$state2=this.state,_scrollDirection=_this$state2.scrollDirection,_scrollOffset=_this$state2.scrollOffset,_scrollUpdateWasRequested=_this$state2.scrollUpdateWasRequested;this._callOnScroll(_scrollDirection,_scrollOffset,_scrollUpdateWasRequested)}},_proto._getRangeToRender=function _getRangeToRender(){var _this$props5=this.props,itemCount=_this$props5.itemCount,overscanCount=_this$props5.overscanCount,_this$state3=this.state,isScrolling=_this$state3.isScrolling,scrollDirection=_this$state3.scrollDirection,scrollOffset=_this$state3.scrollOffset;if(0===itemCount)return[0,0,0,0];var startIndex=getStartIndexForOffset(this.props,scrollOffset,this._instanceProps),stopIndex=getStopIndexForStartIndex(this.props,startIndex,scrollOffset,this._instanceProps),overscanBackward=isScrolling&&"backward"!==scrollDirection?1:Math.max(1,overscanCount),overscanForward=isScrolling&&"forward"!==scrollDirection?1:Math.max(1,overscanCount);return[Math.max(0,startIndex-overscanBackward),Math.max(0,Math.min(itemCount-1,stopIndex+overscanForward)),startIndex,stopIndex]},List}(react.PureComponent),_class.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},_temp}var validateSharedProps$1=function validateSharedProps(_ref2,_ref3){_ref2.children,_ref2.direction,_ref2.height,_ref2.layout,_ref2.innerTagName,_ref2.outerTagName,_ref2.width,_ref3.instance},FixedSizeList=createListComponent({getItemOffset:function getItemOffset(_ref,index){return index*_ref.itemSize},getItemSize:function getItemSize(_ref2,index){return _ref2.itemSize},getEstimatedTotalSize:function getEstimatedTotalSize(_ref3){var itemCount=_ref3.itemCount;return _ref3.itemSize*itemCount},getOffsetForIndexAndAlignment:function getOffsetForIndexAndAlignment(_ref4,index,align,scrollOffset){var direction=_ref4.direction,height=_ref4.height,itemCount=_ref4.itemCount,itemSize=_ref4.itemSize,layout=_ref4.layout,width=_ref4.width,size="horizontal"===direction||"horizontal"===layout?width:height,lastItemOffset=Math.max(0,itemCount*itemSize-size),maxOffset=Math.min(lastItemOffset,index*itemSize),minOffset=Math.max(0,index*itemSize-size+itemSize);switch("smart"===align&&(align=scrollOffset>=minOffset-size&&scrollOffset<=maxOffset+size?"auto":"center"),align){case"start":return maxOffset;case"end":return minOffset;case"center":var middleOffset=Math.round(minOffset+(maxOffset-minOffset)/2);return middleOffset<Math.ceil(size/2)?0:middleOffset>lastItemOffset+Math.floor(size/2)?lastItemOffset:middleOffset;default:return scrollOffset>=minOffset&&scrollOffset<=maxOffset?scrollOffset:scrollOffset<minOffset?minOffset:maxOffset}},getStartIndexForOffset:function getStartIndexForOffset(_ref5,offset){var itemCount=_ref5.itemCount,itemSize=_ref5.itemSize;return Math.max(0,Math.min(itemCount-1,Math.floor(offset/itemSize)))},getStopIndexForStartIndex:function getStopIndexForStartIndex(_ref6,startIndex,scrollOffset){var direction=_ref6.direction,height=_ref6.height,itemCount=_ref6.itemCount,itemSize=_ref6.itemSize,layout=_ref6.layout,width=_ref6.width,offset=startIndex*itemSize,size="horizontal"===direction||"horizontal"===layout?width:height,numVisibleItems=Math.ceil((size+scrollOffset-offset)/itemSize);return Math.max(0,Math.min(itemCount-1,startIndex+numVisibleItems-1))},initInstanceProps:function initInstanceProps(props){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function validateProps(_ref7){_ref7.itemSize}})}}]);