document.addEventListener('DOMContentLoaded', function() {
	
	const HomeComponent = { template: '<div>Home component</div>' }
	const BlogComponent = { template: '<div>Blog component</div>' }
	const ContactComponent = { template: '<div>Contact component</div>' }
	const UIKitComponent = { template: '<div>UIKit component</div>' }
	
	const routes = [
		{ path: '/', component: HomeComponent },
		{ path: '/blog', component: BlogComponent },
		{ path: '/contact', component: ContactComponent },
		{ path: '/ui-kit', component: UIKitComponent }
	]
	
	const router = new VueRouter({
	  routes // short for `routes: routes`
	})
	
	const app = new Vue({
	  router
	}).$mount('#melting-app')

});