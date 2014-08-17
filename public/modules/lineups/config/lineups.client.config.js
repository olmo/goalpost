'use strict';

// Configuring the Articles module
angular.module('lineups').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Lineups', 'lineups', 'dropdown', '/lineups(/create)?');
		Menus.addSubMenuItem('topbar', 'lineups', 'List Lineups', 'lineups');
		Menus.addSubMenuItem('topbar', 'lineups', 'New Lineup', 'lineups/create');
	}
]);