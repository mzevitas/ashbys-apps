(function (){

    angular.module('AshbysApps')
        .controller('singlePage', ['$scope', 'BlogFactory', '$routeParams',
            function ($scope, BlogFactory, $routeParams) {

                BlogFactory.getSingle($routeParams.rid).success( function(data){
                    $scope.b = data;

                });

                //RecipeFactory.imageFile.getUrl();

            }
        ]);
}());