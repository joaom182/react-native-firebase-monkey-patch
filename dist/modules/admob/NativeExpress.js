Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _AdMobComponent=require('./AdMobComponent');var _AdMobComponent2=_interopRequireDefault(_AdMobComponent);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

function NativeExpress(_ref){var props=_objectWithoutProperties(_ref,[]);
return _react2.default.createElement(_AdMobComponent2.default,_extends({},props,{'class':'RNFirebaseAdMobNativeExpress'}));
}

NativeExpress.propTypes=_AdMobComponent2.default.propTypes;

NativeExpress.defaultProps={
size:'SMART_BANNER'};exports.default=


NativeExpress;