var app1 = angular.module('app1', []);

app1.controller('heroCtrl', function($scope, $rootScope) {
  $scope.hero = [
    {realName: "Hoang Pham", heroName: "Volar Morgulis"},
    {realName: "Khaleesi", heroName: "Daenerys Targaryen"}
  ];

  $scope.getHeroData = function () {
    heroSearch($scope.heroName)
  };

  function heroSearch(name) {
    $scope.heroData = "Not Found";
    for(var i =0; i<$scope.hero.length; i++){
      if( name === $scope.hero[i].heroName){
        $scope.heroData = $scope.hero[i].realName + " is "+ $scope.hero[i].heroName;
      }
    }
  }

  $scope.$on("heroUpdated", function(event, args){
    $scope.hero.push({
      realName: args.realName, heroName: args.heroName
    });
  });

  $scope.addHeroData = function(realName, heroName){
    $rootScope.$broadcast("heroUpdated",
    {
        realName: realName, heroName: heroName
    });
    console.log("Real: " + realName + " Hero: " + heroName);
  };

});

app1.controller('mainCtrl', function(){
  this.name = "Animal";
  this.sound ="Grrr";

  this.animalClick = function (){
    alert(this.name + " says "+this.sound);
  };
});

app1.controller('dogCtrl', function($controller) {
  var childCtrl = this;

  childCtrl.child = $controller('mainCtrl',{});

  childCtrl.child.name = "Dog";

  childCtrl.child.bark = "Woof";

  childCtrl.child.dogData = function(){
    alert(this.name + " says "+ this.sound + " and says " + this.bark);
  }
});

app1.controller('mainCtrl1', function($scope){
  $scope.students =[
    {name: "Hoang Pham", gpa: 3.86},
    {name: "Hoa Hieu", gpa: 3.68},
    {name: "Hung Anh", gpa: 3.5},
    {name: "Quang", gpa: 3.7},
    {name: "Kim Khanh", gpa: 4.0}
  ];
  $scope.student = {
    gpas: [
        {name: "Hoang Pham", gpa: 3.86},
        {name: "Hoa Hieu", gpa: 3.68},
        {name: "Hung Anh", gpa: 3.5},
        {name: "Quang", gpa: 3.7},
        {name: "Kim Khanh", gpa: 4.0}
    ]
  };
  $scope.currDate = new Date();

  $scope.randomStr = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  // $scope.weather =[
  //   {day: "Monday", rain: false},
  //   {day: "Tuesday", rain: true}
  // ];

  $scope.weather = [
   {day: "Monday", rain: false},
   {day: "Tuesday", rain: true}
 ];
});
