Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var







FieldPath=function(){


function FieldPath(){_classCallCheck(this,FieldPath);for(var _len=arguments.length,segments=Array(_len),_key=0;_key<_len;_key++){segments[_key]=arguments[_key];}

this._segments=segments;
}_createClass(FieldPath,null,[{key:'documentId',value:function documentId()

{
return DOCUMENT_ID;
}}]);return FieldPath;}();exports.default=FieldPath;


var DOCUMENT_ID=exports.DOCUMENT_ID=new FieldPath('__name__');