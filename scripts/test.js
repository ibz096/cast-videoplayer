//Reciveer APP ID
var applicationId = '1F0C48B4';
//var applicationId = chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID;

//Media Variables
var currentMediaURL = 'http://www.w3schools.com/html/mov_bbb.mp4';
var contentType = 'video/mp4';

//Initialize Cast API with Reciever Application
initializeCastApi = function() {
  cast.framework.CastContext.getInstance().setOptions({
    receiverApplicationId: applicationId,
    autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
  });
};

chrome.cast.SessionRequest(applicationId);