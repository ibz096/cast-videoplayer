var applicationId = '1F0C48B4';
//var applicationId = chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID;

initializeCastApi = function() {
  cast.framework.CastContext.getInstance().setOptions({
    receiverApplicationId: applicationId,
    autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
  });
};