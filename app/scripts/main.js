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







