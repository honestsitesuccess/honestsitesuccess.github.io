jQuery(document).ready(function() {
	$('.bc').on('mouseenter',function() {
		$('#basecamp').show();
		$('#headline').hide();
		$('.arrow-left').show();
	}).on('mouseleave', function() {
		$('#basecamp').hide();
		$('#headline').show();
		$('.arrow-left').hide();
	});
	$('.hr').on('mouseenter', function() {
		$('#highrise').show();
		$('#headline').hide();
		$('.arrow-left').show();
	}).on('mouseleave', function() {
		$('#headline').show();
		$('#highrise').hide();
		$('.arrow-left').hide();
	});
	$('.cf').on('mouseenter', function() {
		$('#campfire').show();
		$('#headline').hide();
		$('.arrow-right').show();
	}).on('mouseleave', function() {
		$('#headline').show();
		$('#campfire').hide();
		$('.arrow-right').hide();	
	});
});