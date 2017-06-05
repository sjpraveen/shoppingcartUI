storeApp.controller("successController",function($scope, $routeParams, DataService,cartService) {

    // get store and cart from service
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;

    $scope.orderid =cartService.orderId;

   
});