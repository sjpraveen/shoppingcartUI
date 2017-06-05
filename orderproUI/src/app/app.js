var storeApp = angular.module('ProductStore', ['ngRoute']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/store', {
        templateUrl: 'src/app/store/store.html',
        controller: 'storeController' 
      }).
      when('/cart', {
        templateUrl: 'src/app/cart/shoppingcart.html',
        controller: 'cartController'
      }).
      when('/success', {
        templateUrl: 'src/app/success/success.html',
        controller: 'successController'
      }).
      when('/error', {
        templateUrl: 'src/app/error/error.html',
        controller: 'cartController'
      }).
      otherwise({
        redirectTo: '/store'
      });
}]);

// create a data service that provides a store and a shopping cart that
// will be shared by all views (instead of creating fresh ones for each view).
storeApp.factory("DataService", function () {
    // create store
    var myStore = new store();

    // create shopping cart
    var myCart = new shoppingCart("ProductStore");   

     // return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    };
});