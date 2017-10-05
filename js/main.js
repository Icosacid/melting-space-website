document.addEventListener('DOMContentLoaded', function() {
	
	// App views
	const HomeComponent = {
		template: jQuery('#home').html(),
		data: function() {
			return {
				items: [
					{ message: 'Hi 1' },
					{ message: 'Hi 2' }
				]
			}
		}
	}
	const BlogComponent = { template: '<div>Blog component</div>' }
	const ContactComponent = { template: '<div>Contact component</div>' }
	const UIKitComponent = { template: '<div>UIKit component</div>' }
	
	// App routes
	const routes = [
		{ path: '/', component: HomeComponent },
		{ path: '/blog', component: BlogComponent },
		{ path: '/contact', component: ContactComponent },
		{ path: '/ui-kit', component: UIKitComponent }
	]
	
	// Build router
	const router = new VueRouter({
		routes // short for `routes: routes`
	})
	
	const app = new Vue({
		router,
		el: '#melting-app'
	});//.$mount('#melting-app')
	
	// Details animation with jQuery (had to)
	jQuery('.ref-collapse').click(function() {
		var ref = jQuery(this).siblings('.ref');
		if (ref.hasClass('open')) {
			// Collapse
			ref.removeClass('open').animate({
			    opacity: 0
			}, 150, function() {
				ref.animate({
				    height: 0
				}, 250);
			});
		}
		else {
			// Expand
			ref.addClass('open').animate({
			    height: 250
			}, 250, function() {
				ref.animate({
				    opacity: 1
				}, 150);
			});
		}

	});

});