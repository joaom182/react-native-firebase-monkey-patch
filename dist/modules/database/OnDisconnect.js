Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _utils=require('../../utils');
var _native=require('../../utils/native');function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var







OnDisconnect=function(){








function OnDisconnect(ref){_classCallCheck(this,OnDisconnect);
this.ref=ref;
this.path=ref.path;
this._database=ref._database;
}_createClass(OnDisconnect,[{key:'set',value:function set(






value){
return(0,_native.getNativeModule)(this._database).onDisconnectSet(this.path,{
type:(0,_utils.typeOf)(value),
value:value});

}},{key:'update',value:function update(






values){
return(0,_native.getNativeModule)(this._database).onDisconnectUpdate(
this.path,
values);

}},{key:'remove',value:function remove()





{
return(0,_native.getNativeModule)(this._database).onDisconnectRemove(this.path);
}},{key:'cancel',value:function cancel()





{
return(0,_native.getNativeModule)(this._database).onDisconnectCancel(this.path);
}}]);return OnDisconnect;}();exports.default=OnDisconnect;