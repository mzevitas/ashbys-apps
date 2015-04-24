(function (){

    angular.module('AshbysApps')
        .controller('SingleCtrl', ['$scope', '$http', 'BlogFactory', '$routeParams',

    function ($scope, $http, BlogFactory, $routeParams) {

                BlogFactory.getSingle($routeParams.rid).success(function (data) {
                    $scope.b = data;

                });

        //console.log("hellosingle");


            }]);
}());




