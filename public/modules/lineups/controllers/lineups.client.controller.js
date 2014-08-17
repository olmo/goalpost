'use strict';

// Lineups controller
angular.module('lineups').controller('LineupsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Lineups',
	function($scope, $stateParams, $location, Authentication, Lineups ) {
		$scope.authentication = Authentication;

		// Create new Lineup
		$scope.create = function() {
			// Create new Lineup object
			var lineup = new Lineups ({
				name: this.name
			});

			// Redirect after save
			lineup.$save(function(response) {
				$location.path('lineups/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Lineup
		$scope.remove = function( lineup ) {
			if ( lineup ) { lineup.$remove();

				for (var i in $scope.lineups ) {
					if ($scope.lineups [i] === lineup ) {
						$scope.lineups.splice(i, 1);
					}
				}
			} else {
				$scope.lineup.$remove(function() {
					$location.path('lineups');
				});
			}
		};

		// Update existing Lineup
		$scope.update = function() {
			var lineup = $scope.lineup ;

			lineup.$update(function() {
				$location.path('lineups/' + lineup._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Lineups
		$scope.find = function() {
			$scope.lineups = Lineups.query();
		};

		// Find existing Lineup
		$scope.findOne = function() {
			$scope.lineup = Lineups.get({ 
				lineupId: $stateParams.lineupId
			});
		};
	}
]);