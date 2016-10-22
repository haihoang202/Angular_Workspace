var mailapp = angular.module('mailapp',[]);

mailapp.controller('mailCtrl', function($scope){
  $scope.logs = [
    {summary:"Today I ate a lots", type:"info"},
    {summary:"Today I smoked a lots", type:"warning"},
    {summary:"Today I fucked a lots", type:"warning"},
    {summary:"Today I worked a lots", type:"error"}
  ]
});
