Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var







GeoPoint=function(){



function GeoPoint(latitude,longitude){_classCallCheck(this,GeoPoint);




this._latitude=latitude;
this._longitude=longitude;
}_createClass(GeoPoint,[{key:"latitude",get:function get()

{
return this._latitude;
}},{key:"longitude",get:function get()

{
return this._longitude;
}}]);return GeoPoint;}();exports.default=GeoPoint;