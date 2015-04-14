(function (){

    angular.module('AshbysApps')
        .controller('SingleCtrl', ['$scope', 'BlogFactory', '$routeParams',
            function ($scope, BlogFactory, $routeParams) {

                BlogFactory.getSingle($routeParams).success( function(data){
                    $scope.b = data;

                });

                //RecipeFactory.imageFile.getUrl();

            }
        ]);
}());