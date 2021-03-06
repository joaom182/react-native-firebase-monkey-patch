Object.defineProperty(exports,"__esModule",{value:true});exports.statics=exports.default=exports.NAMESPACE=exports.MODULE_NAME=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();
var _reactNative=require('react-native');
var _internals=require('../../utils/internals');var _internals2=_interopRequireDefault(_internals);
var _utils=require('../../utils');
var _ModuleBase2=require('../../utils/ModuleBase');var _ModuleBase3=_interopRequireDefault(_ModuleBase2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}


var FirebaseCoreModule=_reactNative.NativeModules.RNFirebase;









var MODULE_NAME=exports.MODULE_NAME='RNFirebaseUtils';
var NAMESPACE=exports.NAMESPACE='utils';var

RNFirebaseUtils=function(_ModuleBase){_inherits(RNFirebaseUtils,_ModuleBase);
function RNFirebaseUtils(app){_classCallCheck(this,RNFirebaseUtils);return _possibleConstructorReturn(this,(RNFirebaseUtils.__proto__||Object.getPrototypeOf(RNFirebaseUtils)).call(this,
app,{
moduleName:MODULE_NAME,
multiApp:false,
hasShards:false,
namespace:NAMESPACE}));

}_createClass(RNFirebaseUtils,[{key:'checkPlayServicesAvailability',value:function checkPlayServicesAvailability()




{
if(_utils.isIOS)return;var

status=this.playServicesAvailability.status;

if(!this.playServicesAvailability.isAvailable){
if(
_internals2.default.OPTIONS.promptOnMissingPlayServices&&
this.playServicesAvailability.isUserResolvableError)
{
this.promptForPlayServices();
}else{
var _error=_internals2.default.STRINGS.ERROR_PLAY_SERVICES(status);
if(_internals2.default.OPTIONS.errorOnMissingPlayServices){
if(status===2)
console.warn(_error);else
throw new Error(_error);
}else{
console.warn(_error);
}
}
}
}},{key:'promptForPlayServices',value:function promptForPlayServices()

{
if(_utils.isIOS)return null;
return FirebaseCoreModule.promptForPlayServices();
}},{key:'resolutionForPlayServices',value:function resolutionForPlayServices()

{
if(_utils.isIOS)return null;
return FirebaseCoreModule.resolutionForPlayServices();
}},{key:'makePlayServicesAvailable',value:function makePlayServicesAvailable()

{
if(_utils.isIOS)return null;
return FirebaseCoreModule.makePlayServicesAvailable();
}},{key:'logLevel',set:function set(






logLevel){
_internals2.default.OPTIONS.logLevel=logLevel;
}},{key:'playServicesAvailability',get:function get()






{
return(
FirebaseCoreModule.playServicesAvailability||{
isAvailable:true,
status:0});


}},{key:'errorOnMissingPlayServices',set:function set(






bool){
_internals2.default.OPTIONS.errorOnMissingPlayServices=bool;
}},{key:'promptOnMissingPlayServices',set:function set(






bool){
_internals2.default.OPTIONS.promptOnMissingPlayServices=bool;
}}]);return RNFirebaseUtils;}(_ModuleBase3.default);exports.default=RNFirebaseUtils;


var statics=exports.statics={};