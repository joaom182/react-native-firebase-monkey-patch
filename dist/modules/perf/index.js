Object.defineProperty(exports,"__esModule",{value:true});exports.statics=exports.default=exports.NAMESPACE=exports.MODULE_NAME=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _Trace=require('./Trace');var _Trace2=_interopRequireDefault(_Trace);
var _ModuleBase2=require('../../utils/ModuleBase');var _ModuleBase3=_interopRequireDefault(_ModuleBase2);
var _native=require('../../utils/native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}



var MODULE_NAME=exports.MODULE_NAME='RNFirebasePerformance';
var NAMESPACE=exports.NAMESPACE='perf';var

PerformanceMonitoring=function(_ModuleBase){_inherits(PerformanceMonitoring,_ModuleBase);
function PerformanceMonitoring(app){_classCallCheck(this,PerformanceMonitoring);return _possibleConstructorReturn(this,(PerformanceMonitoring.__proto__||Object.getPrototypeOf(PerformanceMonitoring)).call(this,
app,{
moduleName:MODULE_NAME,
multiApp:false,
hasShards:false,
namespace:NAMESPACE}));

}_createClass(PerformanceMonitoring,[{key:'setPerformanceCollectionEnabled',value:function setPerformanceCollectionEnabled(






enabled){
(0,_native.getNativeModule)(this).setPerformanceCollectionEnabled(enabled);
}},{key:'newTrace',value:function newTrace(





trace){
return new _Trace2.default(this,trace);
}}]);return PerformanceMonitoring;}(_ModuleBase3.default);exports.default=PerformanceMonitoring;


var statics=exports.statics={};