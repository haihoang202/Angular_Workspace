// var app1 = angular.module('app1',['weatherFilters']);
//
// app1.controller('mainCtrl', function($scope){
//   $scope.weather =[
//     {day: "Monday", rain: false},
//     {day: "Tuesday", rain: true}
//   ];
//
// });

angular.module('app1',[]).directive("jqlDirective", function() {
  return function(scope, element, attrs){
    var players = element.children();

    var listOfPlayers = "";

    for(i=0; i<players.length;i++){
      if(players.eq(i).text()=="Hoang Pham"){
        players.eq(i).css("color","red");
        players.eq(i).attr("number","25");
      }

      if(players.eq(i).text()=="Hoa Hieu"){
        players.eq(i).addClass('thick');
      }
      listOfPlayers += players.eq(i).text()+", ";

      angular.element(document.querySelector('#childrenList'))
      .text(listOfPlayers);

      var hoangNum = angular.element(document.querySelector('#hoang')).attr("number");

      angular.element(document.querySelector('#hoangNumber')).text(hoangNum);

      angular.element(document.querySelector('#hieu')).removeClass('thick');

      var isHieuBold = angular.element(document.querySelector('#hieu')).hasClass('thick');

      angular.element(document.querySelector('#hieuBold')).text(isHieuBold);

      var hoangId = angular.element(document.querySelector('#hoang')).prop("id");

      angular.element(document.querySelector('#hoangId')).text(hoangId);
    }
  }
})
.controller('mainCtrl',function($scope){
  $scope.unBold = function () {
    angular.element(document.querySelector('#hieu')).toggleClass("thick");
  };

  $scope.bbPlayers =[
    {name: "Hoang Pham", avg: 3.8, hr: 756, obp: 5.6},
    {name: "Hoa Hieu", avg: 3.6, hr: 562, obp: 8.9},
    {name: "Kim Khanh", avg: 4.0, hr: 246, obp: 4.2},
    {name: "Nhat Quang", avg: 3.7, hr: 127, obp: 5.2}
  ];
});
