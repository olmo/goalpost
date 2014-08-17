'use strict';

// Configuring the Articles module
angular.module('days').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Days', 'days', 'dropdown', '/days(/create)?');
		Menus.addSubMenuItem('topbar', 'days', 'List Days', 'days');
		Menus.addSubMenuItem('topbar', 'days', 'New Day', 'days/create');
	}
]);