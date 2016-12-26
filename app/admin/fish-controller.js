(function () {
  'use strict';

  angular.module('fishingApp')

  .controller('FishController', function (FishService, WaterTypeService) {

    var vm = this;
    vm.indigenousTypes = [{code:'Y', description:'Yes'}, {code:'N', description:'No'}]

    vm.fishModel = FishService;
    vm.waterTypeModel = WaterTypeService;

    if(Object.keys(vm.fishModel.fishes).length==0) {
      FishService.getFish();
    }
    if(Object.keys(vm.waterTypeModel.waterTypes).length==0) {
      WaterTypeService.getWaterTypes();
    }
  //  vm.waterTypeCode = model.waterTypes[0].code;

    vm.clearFish = function (){
      vm.code = null;
      vm.type = null;
      vm.subType = null;
      vm.description = null;
      vm.waterTypeCode = null;
      vm.otherNames = null;
    }

  });

})();
