(function (){

    angular.module('AshbysApps')
        .factory('BlogFactory', ['$http', '$location', '$cookieStore', 'PARSE_URI', 'PARSE_HEADERS',
            function ($http, $location, $cookieStore, PARSE_HEADERS, PARSE_URI) {



                var getBlog = function () {
                    return $http.get(PARSE_URI + 'classes/blog', PARSE_HEADERS);
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
}());