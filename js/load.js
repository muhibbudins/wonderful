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
				$('.content').css('width', 'calc(100vw - 250px - 90px)');
			}
		});

		// Prevent navbar & sidebar when content triggered
		$content.bind('click', function(e) {
			$sidebar.removeClass('active');
			$navbarResponsive.removeClass('active');
			$sidebarMenu.removeClass('active');
			$content.css('opacity','1');

			if (window.innerWidth > 767 && window.innerWidth <= 1024) {
				$('.content').css('width', 'calc(100vw - 25px - 90px)');
			}
		});

		// Trigger sidebar at mobile
		$triggerSidebar.bind('click', function(e) {
			e.preventDefault();

			$sidebar.addClass('active');
			$sidebarMenu.addClass('active');
			$content.css('opacity','0.7');
		});

		// Trigger navbar at mobile
		$triggerNavbar.bind('click', function(e) {
			e.preventDefault();
		
			$navbarResponsive.addClass('active');
			$content.css('opacity','0.7');
		});
	});
});