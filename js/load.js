// Loading Animation
$.when(new ldBar(".loading-bar", {
	'path': 'M59.528,32.801V17.535c5.591-0.975,9.357-2.777,9.357-4.844c0-3.102-8.455-5.617-18.884-5.617 s-18.884,2.515-18.884,5.617c0,2.067,3.765,3.869,9.357,4.844v15.266c-12.886,4.047-22.234,16.084-22.234,30.305 c0,17.541,14.22,31.761,31.761,31.761s31.761-14.22,31.761-31.761C81.761,48.885,72.414,36.849,59.528,32.801z',
	'fill': 'data:ldbar/res,bubble(#A4D254,#fff,50,2)'	
}).set(100)).done(function() {
	setTimeout(function() {
		$('.content-loading').hide();
	}, 1000);
});

$(document).ready(function() {

	// Load Navbar
	$('#partial-navbar').load('partials/navbar.html');

	// Load Sidebar
	$('#partial-sidebar').load('partials/sidebar.html', function() {
		var source = $('.nav.navbar-nav'),
			target = $('.navbar-responsive'),
			clone  = source.clone();

		// Clone desktop navbar to mobile navbar
		target
			.html(clone).find('.nav')
			.removeClass('navbar-nav navbar-right')
			.addClass('nav-pills nav-stacked');

		// Variable for instance
		$sidebar          = $('.sidebar');
		$sidebarItem      = $('.sidebar .item');
		$sidebarMenu      = $('.sidebar-menu');
		$stackedMenu      = $('.sidebar-menu .nav-stacked');
		$content          = $('.content');
		$navbarResponsive = $('.navbar-responsive');
		$triggerSidebar   = $('.trigger-sidebar');
		$triggerNavbar    = $('.trigger-navbar');

		// Responsive sidebar for iPad / Tablet
		$sidebarItem.bind('click', function(e) {
			e.preventDefault();

			$sidebarItem.removeClass('active');
			$stackedMenu.removeClass('active');

			$('.sidebar-menu .nav-stacked[id="'+ $(this).data('target') +'"]').addClass('active');
			$(this).addClass('active');

			if (window.innerWidth > 767 && window.innerWidth <= 1024) {
				$sidebarMenu.addClass('active');
				$('.content').css('width', 'calc(100vw - 230px - 90px)');
			}
		});

		// Prevent navbar & sidebar when content triggered
		$content.bind('click', function(e) {
			$sidebar.removeClass('active');
			$navbarResponsive.removeClass('active');
			$sidebarMenu.removeClass('active');
			$content.removeClass('active');

			if (window.innerWidth > 767 && window.innerWidth <= 1024) {
				$('.content').css('width', 'calc(100vw - 25px - 90px)');
			}
		});

		// Trigger sidebar at mobile
		$triggerSidebar.bind('click', function(e) {
			e.preventDefault();

			$sidebar.toggleClass('active');
			$sidebarMenu.toggleClass('active');
			$content.toggleClass('active');
		});

		// Trigger navbar at mobile
		$triggerNavbar.bind('click', function(e) {
			e.preventDefault();
		
			$navbarResponsive.toggleClass('active');
			$content.toggleClass('active');
		});
		
		$('body, .content').niceScroll({
			cursorwidth: '2px'
		});

		dynamicMenu();
		preventCaching();
	});
});

// Function to set active menu by param
// Edit this function if you use custom routes!
function dynamicMenu() {
	var param = window.location.pathname,
		query = param.split('/');

	if (typeof query[2] !== 'undefined' && query[2] !== '' && query[2].indexOf('index.html') === -1) {
		$('a.item-side, .nav.nav-pills.nav-stacked').removeClass('active');

		var _self = $('a.item-side[href="'+ query[2] +'"]'),
			parent = _self.parent().parent(),
			target = parent.attr('id');

		parent.addClass('active')
		$('a.item[data-target="'+ target +'"]').addClass('active');
	} else {
		$('a.item-side[data-target="first-menu"], .nav.nav-pills.nav-stacked[id="first-menu"]').addClass('active');
	}
}

function createHash() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 32; i++)
    text += possible.charAt(Math.ceil(Math.random() * possible.length));

  return text;
}

function preventCaching() {
	var script = $('script[type="text/javascript"]'),
		style  = $('link[rel="stylesheet"]');

	style.map(function(k,v) {
		$(v).attr('href', $(v).attr('href') + '?' + createHash());
	});

	script.map(function(k,v) {
		$(v).attr('src', $(v).attr('src') + '?' + createHash());
	});
}