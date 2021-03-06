Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _native=require('../../utils/native');function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var


Trace=function(){



function Trace(perf,identifier){_classCallCheck(this,Trace);
this._perf=perf;
this.identifier=identifier;
}_createClass(Trace,[{key:'start',value:function start()

{
(0,_native.getNativeModule)(this._perf).start(this.identifier);
}},{key:'stop',value:function stop()

{
(0,_native.getNativeModule)(this._perf).stop(this.identifier);
}},{key:'incrementCounter',value:function incrementCounter(

event){
(0,_native.getNativeModule)(this._perf).incrementCounter(this.identifier,event);
}}]);return Trace;}();exports.default=Trace;