var app = angular.module('website', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'partials/main.html'
  })
    
  .when('/about', {
    templateUrl : 'partials/about.html'
  })

  .when('/resume', {
    templateUrl : 'partials/resume.html'
  })

  .when('/travels', {
    templateUrl : 'partials/travels.html'
  })

  .when('/portfolio', {
    templateUrl : 'partials/photography.html'
  })
    
  .when('/portfolio/photography', {
    templateUrl : 'partials/photography.html'
  })
    
  .when('/portfolio/graphic-design', {
    templateUrl : 'partials/graphic-design.html'
  })
    
  .when('/portfolio/projects', {
    templateUrl : 'partials/projects.html'
  })

  .otherwise({redirectTo: '/'});
});
