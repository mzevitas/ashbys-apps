(function (){

    angular.module('AshbysApps')
        .controller('SingleCtrl', ['$scope', '$http', 'BlogFactory', '$routeParams',
            function ($scope, $http, BlogFactory, $routeParams) {

                BlogFactory.getSingle($routeParams).success(function (data) {
                    $scope.blogs = data.results;

                });

            }]);
}());


