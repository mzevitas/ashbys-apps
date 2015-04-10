(function () {

    angular.module('AshbysApps', ['ngRoute', 'ngCookies'])
        .constant('PARSE_HEADERS', {
            headers: {
                'X-Parse-Application-Id': 'IZ8NffJP8o20X4aDdTeFiTuGMpsHHmvjNeVxOLmv',
                'X-Parse-REST-API-Key': 'ypwAqtjmIkQW1sxoBcyo23ZbWJQgcuSOOnYhxjJ8',
                'Content-Type': 'application/json'
            }
        })
        .config( function ($routeProvider) {


            $routeProvider.when('/', {
                templateUrl: 'home.html',
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
                controller: 'PageCtrl'
            });
            $routeProvider.when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'PageCtrl'
            });


        });

    angular.controller('PageCtrl', function () {
        console.log("Page Controller reporting for duty.");
    });

}());