document.addEventListener('DOMContentLoaded', function() {
	
	// App views
	const HomeComponent = {
		template: jQuery('#home').html(),
		data: function() {
			return {
				exercises: [
					{
						sourceLink: 'http://ravenkwok.com/1194d/',
						description: 'Spaces and non-spaces working as anti-volumes arranged in a ordrered manner',
						sourceImageLink: 'http://farm6.staticflickr.com/5467/9809073965_52e39099fa_z.jpg',
						responsePaths: [
							'ex-0-jeanf.jpg',
							'ex-0-yngvesin.gif',
							'ex-0-icosacid.png',
						]
					},
					{
						sourceLink: '',
						description: 'The beginning of destruction. (cf twin peaks)',
						sourceImageLink: 'img/ex-1-ref.png',
						responsePaths: [
							'',
							'',
							'ex-1-icosacid.gif',
						]
					},
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