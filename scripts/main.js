//(function () {

   var app = angular.module('AshbysApps', ['ngRoute', 'ngCookies', 'angularSimpleSlider'])
        .constant('PARSE_HEADERS', {
            headers: {
                'X-Parse-Application-Id': 'IZ8NffJP8o20X4aDdTeFiTuGMpsHHmvjNeVxOLmv',
                'X-Parse-REST-API-Key': 'ypwAqtjmIkQW1sxoBcyo23ZbWJQgcuSOOnYhxjJ8',
                'Content-Type': 'application/json'
            }
        })
       .config( function ($routeProvider) {


            $routeProvider.when('/', {
                templateUrl: 'views/home.html',
                controller: 'PageCtrl'
            });
            $routeProvider.when('/about', {
                templateUrl: 'views/about.html',
                controller: 'PageCtrl'
            });
            $routeProvider.when('/portfolio', {
                templateUrl: 'views/portfolio.html',
                controller: 'PageCtrl'
            });
            $routeProvider.when('/blog', {
                templateUrl: 'views/blog.html',
                controller: 'BlogCtrl'
            });
            $routeProvider.when('/blogPost/:rid', {
               templateUrl: 'views/single_view.html',
               controller: 'SingleCtrl'
           });
            $routeProvider.when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'PageCtrl'
            });
           


        });

    app.controller('PageCtrl', function () {
        //console.log("Page Controller here.");
    });




    var imgSlider = new SimpleSlider( document.getElementById('myslider') );








//}());








//(function (){

    angular.module('AshbysApps')
        .factory('BlogFactory', ['$http', '$location', '$cookieStore', '$routeParams','PARSE_HEADERS',
            function ($http, $location, $cookieStore, $routeParams, PARSE_HEADERS) {



                var getBlog = function () {
                    return $http.get('https://api.parse.com/1/classes/blog/', PARSE_HEADERS);
                };


                var getSingle = function (rid) {
                    return $http.get('https://api.parse.com/1/classes/blog/' + rid, PARSE_HEADERS);
                };



                return {
                    getBlog: getBlog,
                    getSingle: getSingle
                }

            }
        ]);
//}());
//(function () {

    angular.module('AshbysApps')
        .controller('BlogCtrl', ['$scope', '$http', 'BlogFactory',
            function ($scope, $http, BlogFactory) {

                BlogFactory.getBlog().success( function (data) {
                    $scope.blogs = data.results;

                });





    //console.log("hello");





            }]);

//}());
//(function (){

    angular.module('AshbysApps')
        .controller('SingleCtrl', ['$scope', '$http', 'BlogFactory', '$routeParams',

    function ($scope, $http, BlogFactory, $routeParams) {

                BlogFactory.getSingle($routeParams.rid).success(function (data) {
                    $scope.b = data;

                });

        //console.log("hellosingle");


            }]);
//}());




