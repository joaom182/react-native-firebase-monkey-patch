Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}





var linkProviderId='emailLink';
var passwordProviderId='password';var

EmailAuthProvider=function(){
function EmailAuthProvider(){_classCallCheck(this,EmailAuthProvider);
throw new Error(
'`new EmailAuthProvider()` is not supported on the native Firebase SDKs.');

}_createClass(EmailAuthProvider,null,[{key:'credential',value:function credential(













email,password){
return{
token:email,
secret:password,
providerId:passwordProviderId};

}},{key:'credentialWithLink',value:function credentialWithLink(







email,emailLink){
return{
token:email,
secret:emailLink,
providerId:linkProviderId};

}},{key:'EMAIL_LINK_SIGN_IN_METHOD',get:function get(){return linkProviderId;}},{key:'EMAIL_PASSWORD_SIGN_IN_METHOD',get:function get(){return passwordProviderId;}},{key:'PROVIDER_ID',get:function get(){return passwordProviderId;}}]);return EmailAuthProvider;}();exports.default=EmailAuthProvider;