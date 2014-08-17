'use strict';

// Communities controller
angular.module('communities').controller('CommunitiesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Communities',
	function($scope, $stateParams, $location, Authentication, Communities ) {
		$scope.authentication = Authentication;

		// Create new Community
		$scope.create = function() {
			// Create new Community object
			var community = new Communities ({
				name: this.name
			});

			// Redirect after save
			community.$save(function(response) {
				$location.path('communities/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Community
		$scope.remove = function( community ) {
			if ( community ) { community.$remove();

				for (var i in $scope.communities ) {
					if ($scope.communities [i] === community ) {
						$scope.communities.splice(i, 1);
					}
				}
			} else {
				$scope.community.$remove(function() {
					$location.path('communities');
				});
			}
		};

		// Update existing Community
		$scope.update = function() {
			var community = $scope.community ;

			community.$update(function() {
				$location.path('communities/' + community._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Communities
		$scope.find = function() {
			$scope.communities = Communities.query();
		};

		// Find existing Community
		$scope.findOne = function() {
			$scope.community = Communities.get({ 
				communityId: $stateParams.communityId
			});
		};
	}
]);