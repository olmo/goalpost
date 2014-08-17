'use strict';

// Configuring the Articles module
angular.module('matchevents').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Matchevents', 'matchevents', 'dropdown', '/matchevents(/create)?');
		Menus.addSubMenuItem('topbar', 'matchevents', 'List Matchevents', 'matchevents');
		Menus.addSubMenuItem('topbar', 'matchevents', 'New Matchevent', 'matchevents/create');
	}
]);