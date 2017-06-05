storeApp.service("cartService", function () {

var obj = {};
 obj.orderId = '';
obj.saveOrderId = function (orderId) {
        obj.orderId = orderId;
    };
    return obj;
 
});

