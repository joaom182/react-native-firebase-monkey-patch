Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _ReferenceBase2=require('../../utils/ReferenceBase');var _ReferenceBase3=_interopRequireDefault(_ReferenceBase2);
var _task=require('./task');var _task2=_interopRequireDefault(_task);
var _native=require('../../utils/native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var





StorageReference=function(_ReferenceBase){_inherits(StorageReference,_ReferenceBase);


function StorageReference(storage,path){_classCallCheck(this,StorageReference);var _this=_possibleConstructorReturn(this,(StorageReference.__proto__||Object.getPrototypeOf(StorageReference)).call(this,
path));
_this._storage=storage;return _this;
}_createClass(StorageReference,[{key:'toString',value:function toString()





{
return'gs://'+this._storage.app.options.storageBucket+this.path;
}},{key:'child',value:function child(






path){
return new StorageReference(this._storage,this.path+'/'+path);
}},{key:'delete',value:function _delete()





{
return(0,_native.getNativeModule)(this._storage).delete(this.path);
}},{key:'getDownloadURL',value:function getDownloadURL()





{
return(0,_native.getNativeModule)(this._storage).getDownloadURL(this.path);
}},{key:'getMetadata',value:function getMetadata()





{
return(0,_native.getNativeModule)(this._storage).getMetadata(this.path);
}},{key:'updateMetadata',value:function updateMetadata()






{var metadata=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
return(0,_native.getNativeModule)(this._storage).updateMetadata(this.path,metadata);
}},{key:'downloadFile',value:function downloadFile(






filePath){
return new _task2.default(_task.DOWNLOAD_TASK,

(0,_native.getNativeModule)(this._storage).downloadFile(this.path,filePath),
this);

}},{key:'putFile',value:function putFile(















filePath){var metadata=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
var _filePath=filePath.replace('file://','');
if(_filePath.includes('%'))_filePath=decodeURI(_filePath);
return new _task2.default(_task.UPLOAD_TASK,

(0,_native.getNativeModule)(this._storage).putFile(this.path,_filePath,metadata),
this);

}},{key:'fullPath',get:function get(){return this.path;}},{key:'put',get:function get(){return this.putFile;}}]);return StorageReference;}(_ReferenceBase3.default);exports.default=StorageReference;