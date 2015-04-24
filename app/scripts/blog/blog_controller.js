(function () {

    angular.module('AshbysApps')
        .controller('BlogCtrl', ['$scope', '$http', 'BlogFactory',
            function ($scope, $http, BlogFactory) {

                BlogFactory.getBlog().success( function (data) {
                    $scope.blogs = data.results;
                });




                //console.log("hello");





            }]);

}());