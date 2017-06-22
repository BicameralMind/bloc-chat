(function() {
    
    function config($locationProvider, $stateProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });
 
         $stateProvider
             .state('home', {
                 url: '/', //the url needed to see this template
                 controller: 'HomeCtrl as home',
                 templateUrl: '/templates/home.html'
             });
     }
    
    angular
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);
})();