Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var




FieldValue=function(){function FieldValue(){_classCallCheck(this,FieldValue);}_createClass(FieldValue,null,[{key:"delete",value:function _delete()
{
return DELETE_FIELD_VALUE;
}},{key:"serverTimestamp",value:function serverTimestamp()

{
return SERVER_TIMESTAMP_FIELD_VALUE;
}}]);return FieldValue;}();exports.default=FieldValue;


var DELETE_FIELD_VALUE=exports.DELETE_FIELD_VALUE=new FieldValue();
var SERVER_TIMESTAMP_FIELD_VALUE=exports.SERVER_TIMESTAMP_FIELD_VALUE=new FieldValue();