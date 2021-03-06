Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var AdRequest=function(){
function AdRequest(){_classCallCheck(this,AdRequest);
this._props={
keywords:[],
testDevices:[]};

}_createClass(AdRequest,[{key:'build',value:function build()

{
return this._props;
}},{key:'addTestDevice',value:function addTestDevice(

deviceId){
this._props.testDevices.push(deviceId||'DEVICE_ID_EMULATOR');
return this;
}},{key:'addKeyword',value:function addKeyword(

keyword){
this._props.keywords.push(keyword);
return this;
}},{key:'setBirthday',value:function setBirthday()

{

}},{key:'setContentUrl',value:function setContentUrl(

url){
this._props.contentUrl=url;
return this;
}},{key:'setGender',value:function setGender(

gender){
var genders=['male','female','unknown'];
if(genders.includes(gender)){
this._props.gender=gender;
}
return this;
}},{key:'setLocation',value:function setLocation()

{

}},{key:'setRequestAgent',value:function setRequestAgent(

requestAgent){
this._props.requestAgent=requestAgent;
return this;
}},{key:'setIsDesignedForFamilies',value:function setIsDesignedForFamilies(

isDesignedForFamilies){
this._props.isDesignedForFamilies=isDesignedForFamilies;
return this;
}},{key:'tagForChildDirectedTreatment',value:function tagForChildDirectedTreatment(

_tagForChildDirectedTreatment){
this._props.tagForChildDirectedTreatment=_tagForChildDirectedTreatment;
return this;
}}]);return AdRequest;}();exports.default=AdRequest;