/**
 * Created by david_000 on 8/19/2016.
 */
(function(){
    var app = angular.module("ArrangeMe",["ngRoute","board.module"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/main",{
                templateUrl:"board.html",
                controller:"board.ctrl as boardCtrl"
            })
            .otherwise({redirectTo:"/main"})
    });


})();