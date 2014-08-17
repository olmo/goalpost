'use strict';

//Setting up route
angular.module('matchevents').config(['$stateProvider',
	function($stateProvider) {
		// Matchevents state routing
		$stateProvider.
		state('listMatchevents', {
			url: '/matchevents',
			templateUrl: 'modules/matchevents/views/list-matchevents.client.view.html'
		}).
		state('createMatchevent', {
			url: '/matchevents/create',
			templateUrl: 'modules/matchevents/views/create-matchevent.client.view.html'
		}).
		state('viewMatchevent', {
			url: '/matchevents/:matcheventId',
			templateUrl: 'modules/matchevents/views/view-matchevent.client.view.html'
		}).
		state('editMatchevent', {
			url: '/matchevents/:matcheventId/edit',
			templateUrl: 'modules/matchevents/views/edit-matchevent.client.view.html'
		});
	}
]);