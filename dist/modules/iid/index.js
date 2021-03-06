Object.defineProperty(exports,"__esModule",{value:true});exports.statics=exports.default=exports.MODULE_NAME=exports.NAMESPACE=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _ModuleBase2=require('../../utils/ModuleBase');var _ModuleBase3=_interopRequireDefault(_ModuleBase2);
var _native=require('../../utils/native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}



var NAMESPACE=exports.NAMESPACE='iid';
var MODULE_NAME=exports.MODULE_NAME='RNFirebaseInstanceId';var

InstanceId=function(_ModuleBase){_inherits(InstanceId,_ModuleBase);
function InstanceId(app){_classCallCheck(this,InstanceId);return _possibleConstructorReturn(this,(InstanceId.__proto__||Object.getPrototypeOf(InstanceId)).call(this,
app,{
hasShards:false,
moduleName:MODULE_NAME,
multiApp:false,
namespace:NAMESPACE}));

}_createClass(InstanceId,[{key:'get',value:function get()






{
return(0,_native.getNativeModule)(this).get();
}},{key:'delete',value:function _delete()






{
return(0,_native.getNativeModule)(this).delete();
}},{key:'getToken',value:function getToken(









authorizedEntity,scope){
return(0,_native.getNativeModule)(this).getToken(
authorizedEntity||this.app.options.messagingSenderId,
scope||'*');

}},{key:'deleteToken',value:function deleteToken(








authorizedEntity,scope){
return(0,_native.getNativeModule)(this).deleteToken(
authorizedEntity||this.app.options.messagingSenderId,
scope||'*');

}}]);return InstanceId;}(_ModuleBase3.default);exports.default=InstanceId;


var statics=exports.statics={};