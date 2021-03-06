Object.defineProperty(exports,"__esModule",{value:true});exports.statics=exports.default=exports.NAMESPACE=exports.MODULE_NAME=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _ModuleBase2=require('../../utils/ModuleBase');var _ModuleBase3=_interopRequireDefault(_ModuleBase2);
var _native=require('../../utils/native');
var _utils=require('../../utils');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}



var AlphaNumericUnderscore=/^[a-zA-Z0-9_]+$/;

var ReservedEventNames=[
'app_clear_data',
'app_uninstall',
'app_update',
'error',
'first_open',
'in_app_purchase',
'notification_dismiss',
'notification_foreground',
'notification_open',
'notification_receive',
'os_update',
'session_start',
'user_engagement'];


var MODULE_NAME=exports.MODULE_NAME='RNFirebaseAnalytics';
var NAMESPACE=exports.NAMESPACE='analytics';var

Analytics=function(_ModuleBase){_inherits(Analytics,_ModuleBase);
function Analytics(app){_classCallCheck(this,Analytics);return _possibleConstructorReturn(this,(Analytics.__proto__||Object.getPrototypeOf(Analytics)).call(this,
app,{
moduleName:MODULE_NAME,
multiApp:false,
hasShards:false,
namespace:NAMESPACE}));

}_createClass(Analytics,[{key:'logEvent',value:function logEvent(







name){var params=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
if(!(0,_utils.isString)(name)){
throw new Error('analytics.logEvent(): First argument \'name\' is required and must be a string value.');


}

if(typeof params!=='undefined'&&!(0,_utils.isObject)(params)){
throw new Error('analytics.logEvent(): Second optional argument \'params\' must be an object if provided.');


}


if(ReservedEventNames.includes(name)){
throw new Error('analytics.logEvent(): event name \''+
name+'\' is a reserved event name and can not be used.');

}


if(!AlphaNumericUnderscore.test(name)){
throw new Error('analytics.logEvent(): Event name \''+
name+'\' is invalid. Names should contain 1 to 32 alphanumeric characters or underscores.');

}


if(params&&Object.keys(params).length>25)
throw new Error(
'analytics.logEvent(): Maximum number of parameters exceeded (25).');







(0,_native.getNativeModule)(this).logEvent(name,params);
}},{key:'setAnalyticsCollectionEnabled',value:function setAnalyticsCollectionEnabled(





enabled){
(0,_native.getNativeModule)(this).setAnalyticsCollectionEnabled(enabled);
}},{key:'setCurrentScreen',value:function setCurrentScreen(






screenName,screenClassOverride){
(0,_native.getNativeModule)(this).setCurrentScreen(screenName,screenClassOverride);
}},{key:'setMinimumSessionDuration',value:function setMinimumSessionDuration()





{var milliseconds=arguments.length>0&&arguments[0]!==undefined?arguments[0]:10000;
(0,_native.getNativeModule)(this).setMinimumSessionDuration(milliseconds);
}},{key:'setSessionTimeoutDuration',value:function setSessionTimeoutDuration()





{var milliseconds=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1800000;
(0,_native.getNativeModule)(this).setSessionTimeoutDuration(milliseconds);
}},{key:'setUserId',value:function setUserId(





id){
if(id!==null&&!(0,_utils.isString)(id)){
throw new Error(
'analytics.setUserId(): The supplied userId must be a string value or null.');

}
(0,_native.getNativeModule)(this).setUserId(id);
}},{key:'setUserProperty',value:function setUserProperty(






name,value){
if(value!==null&&!(0,_utils.isString)(value)){
throw new Error(
'analytics.setUserProperty(): The supplied property must be a string value or null.');

}
(0,_native.getNativeModule)(this).setUserProperty(name,value);
}},{key:'setUserProperties',value:function setUserProperties(






object){var _this2=this;
Object.keys(object).forEach(function(property){
var value=object[property];
if(value!==null&&!(0,_utils.isString)(value)){
throw new Error('analytics.setUserProperties(): The property with name \''+
property+'\' must be a string value or null.');

}
(0,_native.getNativeModule)(_this2).setUserProperty(property,object[property]);
});
}}]);return Analytics;}(_ModuleBase3.default);exports.default=Analytics;


var statics=exports.statics={};