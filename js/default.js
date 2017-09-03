$(document).ready(function() {

	// Auto add Icon at card
	$cbIcon = $('.card-icon-background');
	$cbIcon.map(function(k,v) {
		_self = $(v),
		_icon = _self.find('.card-title i').clone();
		
		_self.find('.card-content').append($(_icon[0]).addClass('card-content-icon'));
	});
});