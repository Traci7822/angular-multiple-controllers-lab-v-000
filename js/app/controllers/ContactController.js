function ContactController(){
  var vm = this;
  vm.name = 'Bob';
  vm.email = 'bob@bob.com';
  vm.phone = 2;
  vm.changeName = function() {
    vm.name = 'Banana Face'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);
