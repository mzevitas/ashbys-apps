(function (){

    angular.module('AshbysApps')
        .controller('SingleCtrl', ['$scope', 'BlogFactory', '$routeParams',
            function ($scope, BlogFactory, $routeParams) {

                BlogFactory.getSingle($routeParams).success( function(data){
                    $scope.blogs = data.results;

                });


            }
        ]);
}());