(function () {

    angular.module('AshbysApps')
        .controller('BlogCtrl', ['$scope', 'BlogFactory',
            function ($scope, BlogFactory) {

                BlogFactory.getBlog().success( function (data) {
                    $scope.blogs = data.results;
                });






            }]);

}());