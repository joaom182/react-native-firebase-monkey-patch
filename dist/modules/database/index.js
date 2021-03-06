Object.defineProperty(exports,"__esModule",{value:true});exports.statics=exports.default=exports.NAMESPACE=exports.MODULE_NAME=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _reactNative=require('react-native');

var _Reference=require('./Reference');var _Reference2=_interopRequireDefault(_Reference);
var _transaction=require('./transaction');var _transaction2=_interopRequireDefault(_transaction);
var _ModuleBase2=require('../../utils/ModuleBase');var _ModuleBase3=_interopRequireDefault(_ModuleBase2);
var _native=require('../../utils/native');


var _firebase=require('../core/firebase');var _firebase2=_interopRequireDefault(_firebase);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var NATIVE_EVENTS=[
'database_transaction_event'];



var MODULE_NAME=exports.MODULE_NAME='RNFirebaseDatabase';
var NAMESPACE=exports.NAMESPACE='database';var




Database=function(_ModuleBase){_inherits(Database,_ModuleBase);





function Database(appOrUrl){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_classCallCheck(this,Database);
var app=void 0;
var serviceUrl=void 0;
if(typeof appOrUrl==='string'){
app=_firebase2.default.app();
serviceUrl=appOrUrl.endsWith('/')?appOrUrl:appOrUrl+'/';
}else{
app=appOrUrl;
serviceUrl=app.options.databaseURL;
}var _this=_possibleConstructorReturn(this,(Database.__proto__||Object.getPrototypeOf(Database)).call(this,


app,
{
events:NATIVE_EVENTS,
moduleName:MODULE_NAME,
multiApp:true,
hasShards:true,
namespace:NAMESPACE},

serviceUrl));


_this._serverTimeOffset=0;
_this._serviceUrl=serviceUrl;
_this._transactionHandler=new _transaction2.default(_this);

if(options.persistence){
(0,_native.getNativeModule)(_this).setPersistence(options.persistence);
}





setTimeout(function(){
_this._offsetRef=_this.ref('.info/serverTimeOffset');
_this._offsetRef.on('value',function(snapshot){
_this._serverTimeOffset=snapshot.val()||_this._serverTimeOffset;
});
},1);return _this;
}_createClass(Database,[{key:'getServerTime',value:function getServerTime()





{
return new Date(Date.now()+this._serverTimeOffset);
}},{key:'goOnline',value:function goOnline()




{
(0,_native.getNativeModule)(this).goOnline();
}},{key:'goOffline',value:function goOffline()




{
(0,_native.getNativeModule)(this).goOffline();
}},{key:'ref',value:function ref(






path){
return new _Reference2.default(this,path);
}},{key:'databaseUrl',get:function get()





{
return this._serviceUrl;
}}]);return Database;}(_ModuleBase3.default);exports.default=Database;


var statics=exports.statics={
ServerValue:_reactNative.NativeModules.RNFirebaseDatabase?
{
TIMESTAMP:_reactNative.NativeModules.RNFirebaseDatabase.serverValueTimestamp||{
'.sv':'timestamp'}}:


{},
enableLogging:function enableLogging(enabled){
if(_reactNative.NativeModules[MODULE_NAME]){
_reactNative.NativeModules[MODULE_NAME].enableLogging(enabled);
}
}};