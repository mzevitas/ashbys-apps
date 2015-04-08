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
                templateUrl: 'scripts/users/user-signup.html',
                controller: 'UserController'
            });





        }());