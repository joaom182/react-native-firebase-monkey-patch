Object.defineProperty(exports,"__esModule",{value:true});exports.parseNativeMap=exports.buildTypeMap=exports.buildNativeArray=exports.buildNativeMap=undefined;



var _DocumentReference=require('../DocumentReference');var _DocumentReference2=_interopRequireDefault(_DocumentReference);
var _Blob=require('../Blob');var _Blob2=_interopRequireDefault(_Blob);
var _FieldPath=require('../FieldPath');
var _FieldValue=require('../FieldValue');



var _GeoPoint=require('../GeoPoint');var _GeoPoint2=_interopRequireDefault(_GeoPoint);
var _Path=require('../Path');var _Path2=_interopRequireDefault(_Path);
var _utils=require('../../../utils');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}










var buildNativeMap=exports.buildNativeMap=function buildNativeMap(data){
var nativeData={};
if(data){
Object.keys(data).forEach(function(key){
var typeMap=buildTypeMap(data[key]);
if(typeMap){
nativeData[key]=typeMap;
}
});
}
return nativeData;
};

var buildNativeArray=exports.buildNativeArray=function buildNativeArray(array){
var nativeArray=[];
if(array){
array.forEach(function(value){
var typeMap=buildTypeMap(value);
if(typeMap){
nativeArray.push(typeMap);
}
});
}
return nativeArray;
};

var buildTypeMap=exports.buildTypeMap=function buildTypeMap(value){
var type=(0,_utils.typeOf)(value);
if(value===null||value===undefined||Number.isNaN(value)){
return{
type:'null',
value:null};

}else if(value===_FieldValue.DELETE_FIELD_VALUE){
return{
type:'fieldvalue',
value:'delete'};

}else if(value===_FieldValue.SERVER_TIMESTAMP_FIELD_VALUE){
return{
type:'fieldvalue',
value:'timestamp'};

}else if(value===_FieldPath.DOCUMENT_ID){
return{
type:'documentid',
value:null};

}else if(type==='boolean'||type==='number'||type==='string'){
return{
type:type,
value:value};

}else if(type==='array'){
return{
type:type,
value:buildNativeArray(value)};

}else if(type==='object'){
if(value instanceof _DocumentReference2.default){
return{
type:'reference',
value:value.path};

}else if(value instanceof _GeoPoint2.default){
return{
type:'geopoint',
value:{
latitude:value.latitude,
longitude:value.longitude}};


}else if(value instanceof Date){
return{
type:'date',
value:value.getTime()};

}else if(value instanceof _Blob2.default){
return{
type:'blob',
value:value.toBase64()};

}
return{
type:'object',
value:buildNativeMap(value)};

}
console.warn('Unknown data type received '+type);
return null;
};






var parseNativeMap=exports.parseNativeMap=function parseNativeMap(
firestore,
nativeData)
{
var data=void 0;
if(nativeData){
data={};
Object.keys(nativeData).forEach(function(key){
data[key]=parseTypeMap(firestore,nativeData[key]);
});
}
return data;
};

var parseNativeArray=function parseNativeArray(
firestore,
nativeArray)
{
var array=[];
if(nativeArray){
nativeArray.forEach(function(typeMap){
array.push(parseTypeMap(firestore,typeMap));
});
}
return array;
};

var parseTypeMap=function parseTypeMap(firestore,typeMap){var
type=typeMap.type,value=typeMap.value;
if(type==='null'){
return null;
}else if(type==='boolean'||type==='number'||type==='string'){
return value;
}else if(type==='array'){
return parseNativeArray(firestore,value);
}else if(type==='object'){
return parseNativeMap(firestore,value);
}else if(type==='reference'){
return new _DocumentReference2.default(firestore,_Path2.default.fromName(value));
}else if(type==='geopoint'){
return new _GeoPoint2.default(value.latitude,value.longitude);
}else if(type==='date'){
return new Date(value);
}else if(type==='blob'){
return _Blob2.default.fromBase64String(value);
}
console.warn('Unknown data type received '+type);
return value;
};