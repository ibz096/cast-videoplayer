var CastPlayer = function() {

	//Media Variables
	this.currentMediaURL = 'http://www.w3schools.com/html/mov_bbb.mp4';
	this.contentType = 'video/mp4';
	//Remote Player Variables
	this.remotePlayer = null;
	this.remotePlayerController = null;
};

CastPlayer.prototype.initializeCastPlayer = function() {
	//Reciveer APP ID
	var applicationId = '1F0C48B4';

	//Initialize Cast API with Reciever Application
	  cast.framework.CastContext.getInstance().setOptions({
	    receiverApplicationId: applicationId,
	    autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
	  });

	//Init Remote Player
	this.remotePlayer = new cast.framework.RemotePlayer();
	this.remotePlayerController = new cast.framework.RemotePlayerController(this.remotePlayer);

};

//Retrieves current Cast session and plays currentMediaURL
CastPlayer.prototype.launch = function() {
	var castSession = cast.framework.CastContext.getInstance().getCurrentSession();
	
	if (document.getElementById("videoURL").value == ''){

	} else {
	this.currentMediaURL = document.getElementById("videoURL").value;
	}
	
	var mediaInfo = new chrome.cast.media.MediaInfo(this.currentMediaURL, this.contentType);
	var request = new chrome.cast.media.LoadRequest(mediaInfo);
	castSession.loadMedia(request).then(
		function() { console.log('Load succeed'); },
		function(errorCode) { console.log('Error code: ' + errorCode); });
};

//Stop current Session
stopCasting = function() {
  var castSession = cast.framework.CastContext.getInstance().getCurrentSession();
  // End the session and pass 'true' to indicate
  // that receiver application should be stopped.
  castSession.endSession(true);
};
