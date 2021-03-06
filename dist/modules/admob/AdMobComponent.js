Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _EventTypes=require('./EventTypes');var _EventTypes2=_interopRequireDefault(_EventTypes);
var _utils=require('../../utils');

var _AdRequest=require('./AdRequest');var _AdRequest2=_interopRequireDefault(_AdRequest);
var _VideoOptions=require('./VideoOptions');var _VideoOptions2=_interopRequireDefault(_VideoOptions);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var adMobPropTypes=_extends({},_reactNative.ViewPropTypes,{

size:_propTypes2.default.string.isRequired,
unitId:_propTypes2.default.string.isRequired,

request:_propTypes2.default.object,
video:_propTypes2.default.object});


Object.keys(_EventTypes2.default).forEach(function(eventType){
adMobPropTypes[eventType]=_propTypes2.default.func;
});
Object.keys(_EventTypes.NativeExpressEventTypes).forEach(function(eventType){
adMobPropTypes[eventType]=_propTypes2.default.func;
});

var nativeComponents={};

function getNativeComponent(name){
if(nativeComponents[name])return nativeComponents[name];
var component=(0,_reactNative.requireNativeComponent)(name,AdMobComponent,{
nativeOnly:{
onBannerEvent:true}});


nativeComponents[name]=component;
return component;
}var

AdMobComponent=(_temp=_class=function(_React$Component){_inherits(AdMobComponent,_React$Component);







function AdMobComponent(props){_classCallCheck(this,AdMobComponent);var _this=_possibleConstructorReturn(this,(AdMobComponent.__proto__||Object.getPrototypeOf(AdMobComponent)).call(this,
props));_this.













onBannerEvent=function(_ref){var nativeEvent=_ref.nativeEvent;
if(_this.props[nativeEvent.type]){
if(nativeEvent.type==='onAdFailedToLoad'){var _nativeEvent$payload=
nativeEvent.payload,code=_nativeEvent$payload.code,message=_nativeEvent$payload.message;
_this.props[nativeEvent.type]((0,_utils.nativeToJSError)(code,message));
}else{
_this.props[nativeEvent.type](nativeEvent.payload||{});
}
}

if(nativeEvent.type==='onSizeChange')
_this.updateSize(nativeEvent.payload);
};_this.






updateSize=function(_ref2){var width=_ref2.width,height=_ref2.height;
_this.setState({width:width,height:height});
};_this.state={width:0,height:0};_this.nativeView=getNativeComponent(props.class);return _this;}_createClass(AdMobComponent,[{key:'render',value:function render()





{
return(
_react2.default.createElement(this.nativeView,_extends({},
this.props,{
style:[this.props.style,_extends({},this.state)],
onBannerEvent:this.onBannerEvent})));


}}]);return AdMobComponent;}(_react2.default.Component),_class.propTypes=adMobPropTypes,_class.defaultProps={request:new _AdRequest2.default().addTestDevice().build(),video:new _VideoOptions2.default().build()},_temp);exports.default=


AdMobComponent;