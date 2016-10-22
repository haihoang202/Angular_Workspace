angular.module('app', [])
.directive("bbPlayerList", function(){
  return function(scope, element, attrs) {
    var data = scope[attrs['bbPlayerList']];

    if(angular.isArray(data)){
      var arrayItem = attrs["arrayItem"];

      var listElem = angular.element("<ul>");

      element.append(listElem);

      for(var i =0; i<data.length; i++){
          listElem.append(angular.element('<li>')
          .text(scope.$eval(arrayItem, data[i])));
      }

      listElem.after(angular.element("<span id='vinh'>")
      .text("Huy Vinh"));

      listElem.prepend(angular.element("<span id='san'>")
      .text("Dung San'"));

      angular.element(document.querySelector("#san")).remove();

      var addHTML = "<span id='Hung Anh'>Hung Anh</span>";

      var replacement = angular.element(addHTML);

      angular.element(document.querySelector("#vinh"))
      .replaceWith(replacement);
    }

    var directive = {};

    directive.restrict = 'E';

    directive.template = "{{player.name}} had a {{player.avg}} AVG"
    +" with {{player.hr}} homeruns and a {{player.obp}} OBP";

    directive.scope = {player: "=name"};

    directive.compile = function(element, attributes){
      var linkFunc = function($scope, element, attributes){
        element.bind('click', function(){
          element.html('Hoang Pham disappear');
        });
      }
      return linkFunc;
    }

  }
})
.controller("mainCtrl", function($scope) {
  $scope.bbPlayers =[
    {name: "Hoang Pham", avg: 3.8, hr: 756, obp: 5.6},
    {name: "Hoa Hieu", avg: 3.6, hr: 562, obp: 8.9},
    {name: "Kim Khanh", avg: 4.0, hr: 246, obp: 4.2},
    {name: "Nhat Quang", avg: 3.7, hr: 127, obp: 5.2}
  ];
});
