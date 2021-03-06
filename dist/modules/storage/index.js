Object.defineProperty(exports,"__esModule",{value:true});exports.statics=exports.default=exports.NAMESPACE=exports.MODULE_NAME=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _reactNative=require('react-native');

var _reference=require('./reference');var _reference2=_interopRequireDefault(_reference);
var _events=require('../../utils/events');
var _log=require('../../utils/log');
var _utils=require('../../utils');
var _ModuleBase2=require('../../utils/ModuleBase');var _ModuleBase3=_interopRequireDefault(_ModuleBase2);
var _native=require('../../utils/native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}



var FirebaseStorage=_reactNative.NativeModules.RNFirebaseStorage;

var NATIVE_EVENTS=['storage_event','storage_error'];

var MODULE_NAME=exports.MODULE_NAME='RNFirebaseStorage';
var NAMESPACE=exports.NAMESPACE='storage';var

Storage=function(_ModuleBase){_inherits(Storage,_ModuleBase);





function Storage(app){_classCallCheck(this,Storage);var _this=_possibleConstructorReturn(this,(Storage.__proto__||Object.getPrototypeOf(Storage)).call(this,
app,{
events:NATIVE_EVENTS,
moduleName:MODULE_NAME,
multiApp:true,
hasShards:false,
namespace:NAMESPACE}));


_events.SharedEventEmitter.addListener(
(0,_events.getAppEventName)(_this,'storage_event'),
_this._handleStorageEvent.bind(_this));


_events.SharedEventEmitter.addListener(
(0,_events.getAppEventName)(_this,'storage_error'),
_this._handleStorageEvent.bind(_this));return _this;

}_createClass(Storage,[{key:'ref',value:function ref(







path){
return new _reference2.default(this,path);
}},{key:'refFromURL',value:function refFromURL(







url){

return new _reference2.default(this,'url::'+url);
}},{key:'setMaxOperationRetryTime',value:function setMaxOperationRetryTime(






time){
(0,_native.getNativeModule)(this).setMaxOperationRetryTime(time);
}},{key:'setMaxUploadRetryTime',value:function setMaxUploadRetryTime(






time){
(0,_native.getNativeModule)(this).setMaxUploadRetryTime(time);
}},{key:'setMaxDownloadRetryTime',value:function setMaxDownloadRetryTime(






time){
(0,_native.getNativeModule)(this).setMaxDownloadRetryTime(time);
}},{key:'_getSubEventName',value:function _getSubEventName(




path,eventName){
return(0,_events.getAppEventName)(this,path+'-'+eventName);
}},{key:'_handleStorageEvent',value:function _handleStorageEvent(

event){var
path=event.path,eventName=event.eventName;
var body=event.body||{};

(0,_log.getLogger)(this).debug('_handleStorageEvent: ',path,eventName,body);
_events.SharedEventEmitter.emit(this._getSubEventName(path,eventName),body);
}},{key:'_handleStorageError',value:function _handleStorageError(

err){var
path=err.path,eventName=err.eventName;
var body=err.body||{};

(0,_log.getLogger)(this).debug('_handleStorageError ->',err);
_events.SharedEventEmitter.emit(this._getSubEventName(path,eventName),body);
}},{key:'_addListener',value:function _addListener(


path,
eventName,
cb)
{
_events.SharedEventEmitter.addListener(this._getSubEventName(path,eventName),cb);
}},{key:'_removeListener',value:function _removeListener(


path,
eventName,
origCB)
{
_events.SharedEventEmitter.removeListener(
this._getSubEventName(path,eventName),
origCB);

}}]);return Storage;}(_ModuleBase3.default);exports.default=Storage;


var statics=exports.statics={
TaskEvent:{
STATE_CHANGED:'state_changed'},

TaskState:{
RUNNING:'running',
PAUSED:'paused',
SUCCESS:'success',
CANCELLED:'cancelled',
ERROR:'error'},

Native:FirebaseStorage?
{
MAIN_BUNDLE_PATH:(0,_utils.stripTrailingSlash)(FirebaseStorage.MAIN_BUNDLE_PATH),
CACHES_DIRECTORY_PATH:(0,_utils.stripTrailingSlash)(
FirebaseStorage.CACHES_DIRECTORY_PATH),

DOCUMENT_DIRECTORY_PATH:(0,_utils.stripTrailingSlash)(
FirebaseStorage.DOCUMENT_DIRECTORY_PATH),

EXTERNAL_DIRECTORY_PATH:(0,_utils.stripTrailingSlash)(
FirebaseStorage.EXTERNAL_DIRECTORY_PATH),

EXTERNAL_STORAGE_DIRECTORY_PATH:(0,_utils.stripTrailingSlash)(
FirebaseStorage.EXTERNAL_STORAGE_DIRECTORY_PATH),

TEMP_DIRECTORY_PATH:(0,_utils.stripTrailingSlash)(
FirebaseStorage.TEMP_DIRECTORY_PATH),

LIBRARY_DIRECTORY_PATH:(0,_utils.stripTrailingSlash)(
FirebaseStorage.LIBRARY_DIRECTORY_PATH),

FILETYPE_REGULAR:(0,_utils.stripTrailingSlash)(FirebaseStorage.FILETYPE_REGULAR),
FILETYPE_DIRECTORY:(0,_utils.stripTrailingSlash)(
FirebaseStorage.FILETYPE_DIRECTORY)}:


{}};