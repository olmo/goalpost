'use strict';

// Matchevents controller
angular.module('matchevents').controller('MatcheventsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Matchevents',
	function($scope, $stateParams, $location, Authentication, Matchevents ) {
		$scope.authentication = Authentication;

		// Create new Matchevent
		$scope.create = function() {
			// Create new Matchevent object
			var matchevent = new Matchevents ({
				name: this.name
			});

			// Redirect after save
			matchevent.$save(function(response) {
				$location.path('matchevents/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Matchevent
		$scope.remove = function( matchevent ) {
			if ( matchevent ) { matchevent.$remove();

				for (var i in $scope.matchevents ) {
					if ($scope.matchevents [i] === matchevent ) {
						$scope.matchevents.splice(i, 1);
					}
				}
			} else {
				$scope.matchevent.$remove(function() {
					$location.path('matchevents');
				});
			}
		};

		// Update existing Matchevent
		$scope.update = function() {
			var matchevent = $scope.matchevent ;

			matchevent.$update(function() {
				$location.path('matchevents/' + matchevent._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Matchevents
		$scope.find = function() {
			$scope.matchevents = Matchevents.query();
		};

		// Find existing Matchevent
		$scope.findOne = function() {
			$scope.matchevent = Matchevents.get({ 
				matcheventId: $stateParams.matcheventId
			});
		};
	}
]);