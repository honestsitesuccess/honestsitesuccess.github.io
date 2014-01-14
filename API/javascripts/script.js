// API Hack App for Mike Harmanos, Honest Site Success.com, 2014

$(document).ready(function() {

formatter : function(d, defaults) {
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	defaults.month = months[d.getMonth()];	
}

var currentTimeline = TimelineSetter.Timeline.boot(options);
currentTimeline.api.onLoad(function() {
  console.log("I'm ready")
});

});