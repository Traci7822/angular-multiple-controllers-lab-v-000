function StaffController(){
  var vm = this;
  vm.name = 'Steve';
  vm.email = 'Steve@steve.com'
  vm.phone = 3;
}

angular
  .module('app')
  .controller('StaffController', StaffController);
