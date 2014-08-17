'use strict';

//Matchevents service used to communicate Matchevents REST endpoints
angular.module('matchevents').factory('Matchevents', ['$resource',
	function($resource) {
		return $resource('matchevents/:matcheventId', { matcheventId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);