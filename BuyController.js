app.controller ('BuyController', ['$scope', function($scope, localStorageService) { 

  $scope.cartID = sessionStorage.getItem("magiohang");
  $scope.sum = sessionStorage.getItem("tong");
  $scope.selectproducts = JSON.parse(sessionStorage.getItem("hangmua"));
  
}]);
  
app.controller ('PaymentController', function($scope) { 

  $scope.alert = function() {alert('NHÂN VIÊN CHÚNG TÔI SẼ LIÊN HỆ QUÝ KHÁCH ĐỂ GIAO HÀNG. XIN CẢM ƠN QUÝ KHÁCH!')};

});  
