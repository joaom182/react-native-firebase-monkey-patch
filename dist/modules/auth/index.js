Object.defineProperty(exports,"__esModule",{value:true});exports.statics=exports.default=exports.NAMESPACE=exports.MODULE_NAME=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _User=require('./User');var _User2=_interopRequireDefault(_User);
var _ModuleBase2=require('../../utils/ModuleBase');var _ModuleBase3=_interopRequireDefault(_ModuleBase2);
var _events=require('../../utils/events');
var _utils=require('../../utils');
var _log=require('../../utils/log');
var _native=require('../../utils/native');
var _internals=require('../../utils/internals');var _internals2=_interopRequireDefault(_internals);
var _ConfirmationResult=require('./phone/ConfirmationResult');var _ConfirmationResult2=_interopRequireDefault(_ConfirmationResult);
var _PhoneAuthListener=require('./phone/PhoneAuthListener');var _PhoneAuthListener2=_interopRequireDefault(_PhoneAuthListener);


var _EmailAuthProvider=require('./providers/EmailAuthProvider');var _EmailAuthProvider2=_interopRequireDefault(_EmailAuthProvider);
var _PhoneAuthProvider=require('./providers/PhoneAuthProvider');var _PhoneAuthProvider2=_interopRequireDefault(_PhoneAuthProvider);
var _GoogleAuthProvider=require('./providers/GoogleAuthProvider');var _GoogleAuthProvider2=_interopRequireDefault(_GoogleAuthProvider);
var _GithubAuthProvider=require('./providers/GithubAuthProvider');var _GithubAuthProvider2=_interopRequireDefault(_GithubAuthProvider);
var _OAuthProvider=require('./providers/OAuthProvider');var _OAuthProvider2=_interopRequireDefault(_OAuthProvider);
var _TwitterAuthProvider=require('./providers/TwitterAuthProvider');var _TwitterAuthProvider2=_interopRequireDefault(_TwitterAuthProvider);
var _FacebookAuthProvider=require('./providers/FacebookAuthProvider');var _FacebookAuthProvider2=_interopRequireDefault(_FacebookAuthProvider);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}















var NATIVE_EVENTS=[
'auth_state_changed',
'auth_id_token_changed',
'phone_auth_state_changed'];


var MODULE_NAME=exports.MODULE_NAME='RNFirebaseAuth';
var NAMESPACE=exports.NAMESPACE='auth';var

Auth=function(_ModuleBase){_inherits(Auth,_ModuleBase);




function Auth(app){_classCallCheck(this,Auth);var _this=_possibleConstructorReturn(this,(Auth.__proto__||Object.getPrototypeOf(Auth)).call(this,
app,{
events:NATIVE_EVENTS,
moduleName:MODULE_NAME,
multiApp:true,
hasShards:false,
namespace:NAMESPACE}));

_this._user=null;
_this._authResult=false;
_this._languageCode=
(0,_native.getNativeModule)(_this).APP_LANGUAGE[app._name]||
(0,_native.getNativeModule)(_this).APP_LANGUAGE['[DEFAULT]'];

_events.SharedEventEmitter.addListener(


(0,_events.getAppEventName)(_this,'auth_state_changed'),
function(state){
_this._setUser(state.user);
_events.SharedEventEmitter.emit(
(0,_events.getAppEventName)(_this,'onAuthStateChanged'),
_this._user);

});


_events.SharedEventEmitter.addListener(


(0,_events.getAppEventName)(_this,'phone_auth_state_changed'),
function(event){
var eventKey='phone:auth:'+event.requestKey+':'+event.type;
_events.SharedEventEmitter.emit(eventKey,event.state);
});


_events.SharedEventEmitter.addListener(


(0,_events.getAppEventName)(_this,'auth_id_token_changed'),
function(auth){
_this._setUser(auth.user);
_events.SharedEventEmitter.emit(
(0,_events.getAppEventName)(_this,'onIdTokenChanged'),
_this._user);

});


(0,_native.getNativeModule)(_this).addAuthStateListener();
(0,_native.getNativeModule)(_this).addIdTokenListener();return _this;
}_createClass(Auth,[{key:'_setUser',value:function _setUser(

user){
this._user=user?new _User2.default(this,user):null;
this._authResult=true;
_events.SharedEventEmitter.emit((0,_events.getAppEventName)(this,'onUserChanged'),this._user);
return this._user;
}},{key:'_setUserCredential',value:function _setUserCredential(

userCredential){
var user=new _User2.default(this,userCredential.user);
this._user=user;
this._authResult=true;
_events.SharedEventEmitter.emit((0,_events.getAppEventName)(this,'onUserChanged'),this._user);
return{
additionalUserInfo:userCredential.additionalUserInfo,
user:user};

}},{key:'onAuthStateChanged',value:function onAuthStateChanged(









listener){var _this2=this;
(0,_log.getLogger)(this).info('Creating onAuthStateChanged listener');
_events.SharedEventEmitter.addListener(
(0,_events.getAppEventName)(this,'onAuthStateChanged'),
listener);

if(this._authResult)listener(this._user||null);

return function(){
(0,_log.getLogger)(_this2).info('Removing onAuthStateChanged listener');
_events.SharedEventEmitter.removeListener(
(0,_events.getAppEventName)(_this2,'onAuthStateChanged'),
listener);

};
}},{key:'onIdTokenChanged',value:function onIdTokenChanged(





listener){var _this3=this;
(0,_log.getLogger)(this).info('Creating onIdTokenChanged listener');
_events.SharedEventEmitter.addListener(
(0,_events.getAppEventName)(this,'onIdTokenChanged'),
listener);

if(this._authResult)listener(this._user||null);

return function(){
(0,_log.getLogger)(_this3).info('Removing onIdTokenChanged listener');
_events.SharedEventEmitter.removeListener(
(0,_events.getAppEventName)(_this3,'onIdTokenChanged'),
listener);

};
}},{key:'onUserChanged',value:function onUserChanged(





listener){var _this4=this;
(0,_log.getLogger)(this).info('Creating onUserChanged listener');
_events.SharedEventEmitter.addListener(
(0,_events.getAppEventName)(this,'onUserChanged'),
listener);

if(this._authResult)listener(this._user||null);

return function(){
(0,_log.getLogger)(_this4).info('Removing onUserChanged listener');
_events.SharedEventEmitter.removeListener(
(0,_events.getAppEventName)(_this4,'onUserChanged'),
listener);

};
}},{key:'signOut',value:function signOut()





{var _this5=this;
return(0,_native.getNativeModule)(this).
signOut().
then(function(){
_this5._setUser();
});
}},{key:'signInAnonymously',value:function signInAnonymously()






{var _this6=this;
console.warn(
'Deprecated firebase.User.prototype.signInAnonymously in favor of firebase.User.prototype.signInAnonymouslyAndRetrieveData.');

return(0,_native.getNativeModule)(this).
signInAnonymously().
then(function(user){return _this6._setUser(user);});
}},{key:'signInAnonymouslyAndRetrieveData',value:function signInAnonymouslyAndRetrieveData()





{var _this7=this;
return(0,_native.getNativeModule)(this).
signInAnonymouslyAndRetrieveData().
then(function(userCredential){return _this7._setUserCredential(userCredential);});
}},{key:'createUserWithEmailAndPassword',value:function createUserWithEmailAndPassword(









email,
password)
{var _this8=this;
console.warn(
'Deprecated firebase.User.prototype.createUserWithEmailAndPassword in favor of firebase.User.prototype.createUserAndRetrieveDataWithEmailAndPassword.');

return(0,_native.getNativeModule)(this).
createUserWithEmailAndPassword(email,password).
then(function(user){return _this8._setUser(user);});
}},{key:'createUserAndRetrieveDataWithEmailAndPassword',value:function createUserAndRetrieveDataWithEmailAndPassword(








email,
password)
{var _this9=this;
return(0,_native.getNativeModule)(this).
createUserAndRetrieveDataWithEmailAndPassword(email,password).
then(function(userCredential){return _this9._setUserCredential(userCredential);});
}},{key:'signInWithEmailAndPassword',value:function signInWithEmailAndPassword(








email,password){var _this10=this;
console.warn(
'Deprecated firebase.User.prototype.signInWithEmailAndPassword in favor of firebase.User.prototype.signInAndRetrieveDataWithEmailAndPassword.');

return(0,_native.getNativeModule)(this).
signInWithEmailAndPassword(email,password).
then(function(user){return _this10._setUser(user);});
}},{key:'signInAndRetrieveDataWithEmailAndPassword',value:function signInAndRetrieveDataWithEmailAndPassword(








email,
password)
{var _this11=this;
return(0,_native.getNativeModule)(this).
signInAndRetrieveDataWithEmailAndPassword(email,password).
then(function(userCredential){return _this11._setUserCredential(userCredential);});
}},{key:'signInWithCustomToken',value:function signInWithCustomToken(







customToken){var _this12=this;
console.warn(
'Deprecated firebase.User.prototype.signInWithCustomToken in favor of firebase.User.prototype.signInAndRetrieveDataWithCustomToken.');

return(0,_native.getNativeModule)(this).
signInWithCustomToken(customToken).
then(function(user){return _this12._setUser(user);});
}},{key:'signInAndRetrieveDataWithCustomToken',value:function signInAndRetrieveDataWithCustomToken(







customToken)
{var _this13=this;
return(0,_native.getNativeModule)(this).
signInAndRetrieveDataWithCustomToken(customToken).
then(function(userCredential){return _this13._setUserCredential(userCredential);});
}},{key:'signInWithCredential',value:function signInWithCredential(






credential){var _this14=this;
console.warn(
'Deprecated firebase.User.prototype.signInWithCredential in favor of firebase.User.prototype.signInAndRetrieveDataWithCredential.');

return(0,_native.getNativeModule)(this).
signInWithCredential(
credential.providerId,
credential.token,
credential.secret).

then(function(user){return _this14._setUser(user);});
}},{key:'signInAndRetrieveDataWithCredential',value:function signInAndRetrieveDataWithCredential(






credential)
{var _this15=this;
return(0,_native.getNativeModule)(this).
signInAndRetrieveDataWithCredential(
credential.providerId,
credential.token,
credential.secret).

then(function(userCredential){return _this15._setUserCredential(userCredential);});
}},{key:'signInWithPhoneNumber',value:function signInWithPhoneNumber(






phoneNumber,
forceResend)
{var _this16=this;
if(_utils.isAndroid){
return(0,_native.getNativeModule)(this).
signInWithPhoneNumber(phoneNumber,forceResend||false).
then(function(result){return new _ConfirmationResult2.default(_this16,result.verificationId);});
}

return(0,_native.getNativeModule)(this).
signInWithPhoneNumber(phoneNumber).
then(function(result){return new _ConfirmationResult2.default(_this16,result.verificationId);});
}},{key:'verifyPhoneNumber',value:function verifyPhoneNumber(












phoneNumber,
autoVerifyTimeoutOrForceResend,
forceResend)
{
var _forceResend=forceResend;
var _autoVerifyTimeout=60;

if((0,_utils.isBoolean)(autoVerifyTimeoutOrForceResend)){
_forceResend=autoVerifyTimeoutOrForceResend;
}else{
_autoVerifyTimeout=autoVerifyTimeoutOrForceResend;
}

return new _PhoneAuthListener2.default(
this,
phoneNumber,
_autoVerifyTimeout,
_forceResend);

}},{key:'sendPasswordResetEmail',value:function sendPasswordResetEmail(







email,
actionCodeSettings)
{
return(0,_native.getNativeModule)(this).sendPasswordResetEmail(
email,
actionCodeSettings);

}},{key:'sendSignInLinkToEmail',value:function sendSignInLinkToEmail(







email,
actionCodeSettings)
{
return(0,_native.getNativeModule)(this).sendSignInLinkToEmail(
email,
actionCodeSettings);

}},{key:'isSignInWithEmailLink',value:function isSignInWithEmailLink(





emailLink){
return(
typeof emailLink==='string'&&(
emailLink.includes('mode=signIn')||
emailLink.includes('mode%3DsignIn'))&&(
emailLink.includes('oobCode=')||emailLink.includes('oobCode%3D')));

}},{key:'signInWithEmailLink',value:function signInWithEmailLink(









email,
emailLink)
{var _this17=this;
return(0,_native.getNativeModule)(this).
signInWithEmailLink(email,emailLink).
then(function(userCredential){return _this17._setUserCredential(userCredential);});
}},{key:'confirmPasswordReset',value:function confirmPasswordReset(









code,newPassword){
return(0,_native.getNativeModule)(this).confirmPasswordReset(code,newPassword);
}},{key:'applyActionCode',value:function applyActionCode(








code){
return(0,_native.getNativeModule)(this).applyActionCode(code);
}},{key:'checkActionCode',value:function checkActionCode(








code){
return(0,_native.getNativeModule)(this).checkActionCode(code);
}},{key:'fetchProvidersForEmail',value:function fetchProvidersForEmail(






email){
console.warn(
'Deprecated firebase.auth().fetchProvidersForEmail in favor of firebase.auth().fetchSignInMethodsForEmail()');

return(0,_native.getNativeModule)(this).fetchSignInMethodsForEmail(email);
}},{key:'fetchSignInMethodsForEmail',value:function fetchSignInMethodsForEmail(





email){
return(0,_native.getNativeModule)(this).fetchSignInMethodsForEmail(email);
}},{key:'verifyPasswordResetCode',value:function verifyPasswordResetCode(

code){
return(0,_native.getNativeModule)(this).verifyPasswordResetCode(code);
}},{key:'getRedirectResult',value:function getRedirectResult()



























{
throw new Error(
_internals2.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD(
'auth',
'getRedirectResult'));


}},{key:'setPersistence',value:function setPersistence()

{
throw new Error(
_internals2.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD(
'auth',
'setPersistence'));


}},{key:'signInWithPopup',value:function signInWithPopup()

{
throw new Error(
_internals2.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD(
'auth',
'signInWithPopup'));


}},{key:'signInWithRedirect',value:function signInWithRedirect()

{
throw new Error(
_internals2.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD(
'auth',
'signInWithRedirect'));


}},{key:'useDeviceLanguage',value:function useDeviceLanguage()


{
throw new Error(
_internals2.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD(
'auth',
'useDeviceLanguage'));


}},{key:'languageCode',set:function set(code){this._languageCode=code;(0,_native.getNativeModule)(this).setLanguageCode(code);},get:function get(){return this._languageCode;}},{key:'currentUser',get:function get(){return this._user;}}]);return Auth;}(_ModuleBase3.default);exports.default=Auth;


var statics=exports.statics={
EmailAuthProvider:_EmailAuthProvider2.default,
PhoneAuthProvider:_PhoneAuthProvider2.default,
GoogleAuthProvider:_GoogleAuthProvider2.default,
GithubAuthProvider:_GithubAuthProvider2.default,
TwitterAuthProvider:_TwitterAuthProvider2.default,
FacebookAuthProvider:_FacebookAuthProvider2.default,
OAuthProvider:_OAuthProvider2.default,
PhoneAuthState:{
CODE_SENT:'sent',
AUTO_VERIFY_TIMEOUT:'timeout',
AUTO_VERIFIED:'verified',
ERROR:'error'}};