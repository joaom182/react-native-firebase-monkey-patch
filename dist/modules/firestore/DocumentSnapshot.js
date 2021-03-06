Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _DocumentReference=require('./DocumentReference');var _DocumentReference2=_interopRequireDefault(_DocumentReference);
var _FieldPath=require('./FieldPath');var _FieldPath2=_interopRequireDefault(_FieldPath);
var _Path=require('./Path');var _Path2=_interopRequireDefault(_Path);
var _utils=require('../../utils');
var _serialize=require('./utils/serialize');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}




var extractFieldPathData=function extractFieldPathData(data,segments){
if(!data||!(0,_utils.isObject)(data)){
return undefined;
}
var pathValue=data[segments[0]];
if(segments.length===1){
return pathValue;
}
return extractFieldPathData(pathValue,segments.slice(1));
};var




DocumentSnapshot=function(){




function DocumentSnapshot(firestore,nativeData){var _this=this;_classCallCheck(this,DocumentSnapshot);this.
























data=function(){return _this._data;};this.

get=function(fieldPath){
if(fieldPath instanceof _FieldPath2.default){
return extractFieldPathData(_this._data,fieldPath._segments);
}

return(0,_utils.deepGet)(_this._data,fieldPath,'.');
};this._data=(0,_serialize.parseNativeMap)(firestore,nativeData.data);this._metadata=nativeData.metadata;this._ref=new _DocumentReference2.default(firestore,_Path2.default.fromName(nativeData.path));}_createClass(DocumentSnapshot,[{key:'exists',get:function get(){return this._data!==undefined;}},{key:'id',get:function get(){return this._ref.id;}},{key:'metadata',get:function get(){return this._metadata;}},{key:'ref',get:function get(){return this._ref;}}]);return DocumentSnapshot;}();exports.default=DocumentSnapshot;