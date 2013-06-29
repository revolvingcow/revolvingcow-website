'use strict';

angular.module("farm", [])
    .config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        //$locationProvider.html5Mode(false);
        
        $routeProvider.when("/", {
            templateUrl: "partials/home.html"
        })
        .when("/services", {
            templateUrl: "partials/services.html"
        })
        .when("/company", {
            templateUrl: "partials/company.html"
        })
        .when("/contact", {
            templateUrl: "partials/contact.html"
        })
        .when("/about", {
            templateUrl: "partials/about.html"
        })
        .otherwise({ 
        	redirectTo: "/" 
        });
    }]);