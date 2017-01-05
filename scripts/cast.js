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

//Retrieves current Cast session
play = function() {
	var castSession = cast.framework.CastContext.getInstance().getCurrentSession();

	var mediaInfo = new chrome.cast.media.MediaInfo(currentMediaURL, contentType);
	var request = new chrome.cast.media.LoadRequest(mediaInfo);
	castSession.loadMedia(request).then(
		function() { console.log('Load succeed'); },
		function(errorCode) { console.log('Error code: ' + errorCode); });
};
