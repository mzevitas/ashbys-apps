(function (){

    angular.module('AshbysApps')
        .factory('BlogFactory', ['$http', '$location', '$cookieStore', '$routeParams','PARSE_HEADERS',
            function ($http, $location, $cookieStore, $routeParams, PARSE_HEADERS) {



                var getBlog = function () {
                    return $http.get('https://api.parse.com/1/classes/blog/', PARSE_HEADERS);
                };


                var getSingle = function (single) {
                    return $http.get('https://api.parse.com/1/classes/blog/' + single, PARSE_HEADERS);
                };



                return {
                    getBlog: getBlog,
                    getSingle: getSingle
                }

            }
        ]);
}());