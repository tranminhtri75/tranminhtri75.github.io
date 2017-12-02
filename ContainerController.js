app.controller ('ContainerController',['$scope', '$rootScope', function($scope, $rootScope) { 

  $rootScope.buyerID= Math.floor(Math.random()*1000);
  $rootScope.sum= 0;
  $rootScope.selectproducts = [];
  
  $scope.omit=function(index) {
    if ($rootScope.selectproducts[index].quantity >1) {
        $rootScope.selectproducts[index].quantity -=1}
    else {
    
      $rootScope.selectproducts.splice(index,1)}};

  $scope.omitSum=function(index) {$rootScope.sum = $rootScope.sum - $rootScope.selectproducts[index].price};
   
}]);

app.controller ('MainController', ['$scope', '$rootScope', function($scope, $rootScope) { 

  $scope.products=
  [ 
  { 
    type: 'fruit',
    photo: './Buoidaxanh.jpg',
    name: 'Bưởi da xanh',
    price: 77000,
    unit: 'trái 1.3-1.5kg',
    delivery: '24 giờ',
    description: 'Bưởi da xanh Bến tre, ruột đỏ hồng, ngọt, bao ăn'
  },
  { 
    type: 'fruit',
    photo: './Buoinamroi.jpg',
    name: 'Bưởi năm roi',
    price: 35000,
    unit: 'trái 1.3-1.5kg',
    delivery: '24 giờ',
    description: 'Bưởi năm roi Bến tre, da mỏng, ngọt và thanh, bao ăn'
  },
  {
    type: 'fruit',
    photo: './Quyt.jpg',
    name: 'Quýt',
    price: 50000,
    unit: 'kg',      
    delivery: '24 giờ',
    description: 'Quýt ngọt Bến tre, bao ăn'
  },
  {
    type: 'fruit',
    photo: './Camsanh.jpg',
    name: 'Cam sành',
    price: 30000, 
    unit: 'kg',      
    delivery: '24 giờ',      
    description: 'Cam sành Bến tre, mộng nước, thanh, bao ăn'
  },
  {
    type: 'fruit',
    photo: './Camxoan.jpg',
    name: 'Cam xoàn',
    price: 50000,
    unit: 'kg',      
    delivery: '24 giờ',       
    description: 'Cam xoàn Bến tre, vỏ mỏng, ngọt, bao ăn'
  },
  {
    type: 'fruit',
    photo: './Chanh.jpg',
    name: 'Chanh',
    price: 10000, 
    unit: 'kg',      
    delivery: '24 giờ',
    description: 'Chanh vườn Bến tre, thơm'
  },
  {
    type: 'fruit',
    photo: './Gac.jpg',
    name: 'Gấc',
    price: 40000,  
    unit: 'kg',      
    delivery: '24 giờ',
    description: 'Gấc tươi vườn Bến tre'
  },
  {
    type: 'fruit',
    photo: './Coc.jpg',
    name: 'Cóc',
    price: 15000,  
    unit: 'kg',      
    delivery: '24 giờ',
    description: 'Cóc vườn Bến tre, trái vừa, ngon'
  },
  {
    type: 'fruit',
    photo: './Chuoigia.jpg',
    name: 'Chuối già',
    price: 20000, 
    unit: 'kg',      
    delivery: '24 giờ',
    description: 'Chuối già vườn Bến tre, sạch, trái to, ngon'
  },
  {
    type: 'fruit',
    photo: './Chuoisu.jpg',
    name: 'Chuối sứ',
    price: 25000,  
    unit: 'kg',      
    delivery: '24 giờ',
    description: 'Chuối sứ vườn Bến tre, sạch, trái to, ngon'
  },
  {
    type: 'fruit',
    photo: './Duaxiem.jpg',
    name: 'Dừa xiêm',
    price: 10000,  
    unit: 'kg',      
    delivery: '24 giờ',
    description: 'Dừa xiêm Bến tre, nước nhiều ngọt'
  },
  {
    type: 'fruit',
    photo: './Duata.jpg',
    name: 'Dừa ta',
    price: 15000,  
    unit: 'kg',      
    delivery: '24 giờ',
    description: 'Dừa ta Bến tre, cơm dầy, trái to'
  },
  {
    type: 'fruit',
    photo: './Xoaicat.jpg',
    name: 'Xoài cát hòa lộc',
    price: 55000,  
    unit: 'kg',      
    delivery: '24 giờ',
    description: 'Xoài cát Hòa lộc, trái to, vỏ mỏng, ngon, bao ăn'
  },
  {
    type: 'fruit',
    photo: './Xoaithai.jpg',
    name: 'Xoài thái',
    price: 50000,  
    unit: 'kg',      
    delivery: '24 giờ',
    description: 'Xoài Thái, vỏ xanh, ngọt, dòn, bao ăn'
  },
  {
    type: 'fruit',
    photo: './Oi.jpg',
    name: 'Ổi',
    price: 10000,  
    unit: 'kg',      
    delivery: '24 giờ',
    description: 'Ổi vườn, ngọt, giòn'
  },
  {
    type: 'fruit',
    photo: './Dudu.jpg',
    name: 'Đu đủ',
    price: 10000,  
    unit: 'kg',      
    delivery: '24 giờ',
    description: 'Đủ đủ vườn, sạch, ngon'
  },
  {
    type: 'fruit',
    photo: './Duagang.jpg',
    name: 'Dưa gang',
    price: 10000,  
    unit: 'kg',      
    delivery: '24 giờ',
    description: 'Dưa gang vườn, sạch, ngọt'
  },
  {
    type: 'fruit',
    photo: './Chomchom.jpg',
    name: 'Chôm chôm',
    price: 40000,  
    unit: 'kg',      
    delivery: '24 giờ',
    description: 'Chôm chôm tróc, ngọt, vỏ mỏng'
  },
  {
    type: 'process',
    photo: './Daudua.jpg',
    name: 'Dầu dừa',
    price: 120000,
    unit: 'chai 350ml',
    delivery: '24 giờ',
    description: 'Dầu dừa nguyên chất 100% gia nhiệt, để được lâu, dùng chăm sóc da, tóc'
  },
  {
    type: 'process',
    photo: './Nuocmaudua.jpg',
    name: 'Nước màu dừa',
    price: 62000,
    unit: 'chai 250ml',
    delivery: '24 giờ',
    description: 'Nước màu dừa Bến tre nguyên chất gia nhiệt để lâu, dùng kho cá thịt'
  },
  {
    type: 'process',
    photo: './Botsanday.jpg',
    name: 'Bột sắn dây',
    price: 75000,
    unit: 'bịch 500g', 
    delivery: '24 giờ',
    description: 'Bột săn dây Buôn ma thuột nguyên chất 100%, thức uống hoặc ăn dặm, tính mát chống lở miệng'
  },
  {
    type: 'process',
    photo: './Botnghe.jpg',
    name: 'Tinh bột nghệ',
    price: 65000,
    unit: 'bịch 100g', 
    delivery: '24 giờ',
    description: 'Tinh bột nghệ Buôn ma thuột nguyên chất 100%. Thức uống tốt cho bao tử'
  },
  {
    type: 'process',
    photo: './Matong.jpg',
    name: 'Mật ong thiên nhiên',
    price: 300000,
    unit: 'chai 250ml', 
    delivery: '24 giờ',
    description: 'Mật ong ruồi thiên nhiên nguyên chất 100% bắt tại vườn, dùng để uống hoặc ngâm chanh đào vv tăng sức đề kháng thanh lọc cơ thể'
  },
  {
    type: 'process',
    photo: './Matongnuoi.jpg',
    name: 'Mật ong nuôi',
    price: 150000,
    unit: 'chai 250ml', 
    delivery: '24 giờ',
    description: 'Mật ong nuôi nguyên chất 100%, dùng để uống hoặc ngâm chanh đào vv tăng sức đề kháng thanh lọc cơ thể'
  },
  {
    type: 'process',
    photo: './Chanhmuoi.jpg',
    name: 'Chanh muối',
    price: 50000,
    unit: 'hủ 200g', 
    delivery: '24 giờ',
    description: 'Chanh muối chua mặn, giải khát'
  },
  {
    type: 'food',
    photo: './Recmin1.jpg',
    name: 'Gạo Recmin loại 1',
    price: 50000,
    unit: 'túi 5kg', 
    delivery: '24 giờ',
    description: 'Gạo Recmin loại 1 dẻo vừa, ngon cơm, cơm nguội không bị khô'
  },
  {
    type: 'food',
    photo: './Recmin2.jpg',
    name: 'Gạo Recmin loại 2',
    price: 50000,
    unit: 'túi 5kg', 
    delivery: '24 giờ',
    description: 'Gạo Recmin loại 2 dẻo vừa, ngon cơm, cơm nguội không bị khô'
  },{
    type: 'food',
    photo: './Tauhuong.jpg',
    name: 'Gạo tàu hương',
    price: 50000,
    unit: 'túi 5kg', 
    delivery: '24 giờ',
    description: 'Gạo SẠCH lúa mùa 1 vụ / 1 năm'
  },
  {
    type: 'food',
    photo: './Laisua.jpg',
    name: 'Gạo lài sữa loại 1',
    price: 50000,
    unit: 'túi 5kg', 
    delivery: '24 giờ',
    description: 'Gạo dẻo nhiều, nấu vừa nước, thơm'
  },
  {
    type: 'food',
    photo: './Luc.jpg',
    name: 'Gạo lức',
    price: 50000,
    unit: 'túi 5kg', 
    delivery: '24 giờ',
    description: 'Gạo lức ăn tốt cho tiêu hóa'
  },
  {
    type: 'misc',
    photo: './Thamxodua.jpg',
    name: 'Thảm xơ dừa',
    price: 50000,
    unit: 'cái', 
    delivery: '24 giờ',
    description: 'Thảm sơ dừa Bến tre'
  }
  ];
 
  $scope.select=function(index) {
    var i=0;  
    while (i < $rootScope.selectproducts.length) {
      if ($rootScope.selectproducts[i].name === $scope.products[index].name) {
        $rootScope.selectproducts[i].quantity +=1; break;}
      else {i++}};
    if (i>=$rootScope.selectproducts.length) {
      $rootScope.selectproducts.push ( {
        name: $scope.products[index].name,
        price: $scope.products[index].price,
        unit: $scope.products[index].unit,
        quantity: 1})}};
  
  $scope.calSum=function(index) {$rootScope.sum = $rootScope.sum + $scope.products[index].price};
  
}
]
);
