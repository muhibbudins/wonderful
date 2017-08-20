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