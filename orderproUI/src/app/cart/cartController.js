storeApp.controller('cartController', function($scope, $routeParams, DataService,cartService,$http,$location){

// get store and cart from service
$scope.store = DataService.store;
$scope.cart = DataService.cart;

var date = new Date();
$scope.FromDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);

    // use routing to pick the selected product
    if ($routeParams.productSku != null) {
    	$scope.product = $scope.store.getProduct($routeParams.productSku);
    }




    $scope.submit_form = function()
    {
    	
    	var requestjson=  jsonData($scope.checkout.customer,$scope.checkout.address,$scope.checkout.card,$scope.cart.items,$scope.FromDate);
    	
    	var s=JSON.stringify(requestjson);
    	console.log(s);
    	$http({
    		url: "http://localhost:8080/product/order",
    		dataType: 'json',
    		method: "POST",
    		headers: {'Content-Type': 'application/json'},
    		data: s
    	}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    console.log(response.data);
    $scope.orderId =response.data;
    console.log($scope.orderId);
    cartService.saveOrderId(response.data);
    $scope.factoryMsg = cartService.orderId;
    $location.path('/success');
}, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log(response);
    $location.path('/error');
});

    }


    var jsonData = function(customer,address,carddetails,items,date){

    	var order = new Object();
           // order.orderDate='null';
           order.orderStatus="Initial";

           var customerObj = new Object();
           customerObj.firstName=customer.firstname;
           customerObj.middleName=customer.middlename
           customerObj.lastName=customer.lastname;
           customerObj.email =customer.email;


           var cardDetailObj = new Object();
           cardDetailObj.cardHolderName = carddetails.name;
           cardDetailObj.cardNumber = carddetails.number;
           cardDetailObj.expiryYear = carddetails.expyear;
           cardDetailObj.expiryMonth = carddetails.expmonth;
           cardDetailObj.cvv = carddetails.cvv;


           var addressObj = new  Object();

           addressObj.addressLine1 =address.addressline1;
           addressObj.addressLine2 =address.addressline2;
           addressObj.city =address.city;
           addressObj.state =address.state;
           addressObj.country =address.country;
           addressObj.zipcode =address.zipcode;

           customerObj.cardDetails =cardDetailObj;
           customerObj.address =addressObj;

           order.customer =customerObj;
           order.orderDetail =items;

           console.log(order);
           return order;

       }





   });