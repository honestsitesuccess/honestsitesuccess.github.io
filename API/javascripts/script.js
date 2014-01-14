// API Hack App for Mike Harmanos, Honest Site Success.com, 2014

$(document).ready(function() {

var currentTimeline = TimelineSetter.Timeline.boot(options);
currentTimeline.api.onLoad(function() {
  console.log("I'm ready")
});

});