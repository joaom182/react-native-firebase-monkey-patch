Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var







Path=function(){


function Path(pathComponents){_classCallCheck(this,Path);
this._parts=pathComponents;
}_createClass(Path,[{key:'child',value:function child(

















relativePath){
return new Path(this._parts.concat(relativePath.split('/')));
}},{key:'parent',value:function parent()

{
return this._parts.length>1?
new Path(this._parts.slice(0,this._parts.length-1)):
null;
}},{key:'id',get:function get(){return this._parts.length?this._parts[this._parts.length-1]:null;}},{key:'isDocument',get:function get(){return this._parts.length%2===0;}},{key:'isCollection',get:function get(){return this._parts.length%2===1;}},{key:'relativeName',get:function get(){return this._parts.join('/');}}],[{key:'fromName',value:function fromName(





name){
if(!name)return new Path([]);
var parts=name.split('/');
return new Path(parts);
}}]);return Path;}();exports.default=Path;