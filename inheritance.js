$(document).ready(function() {
   var width = $(document).width() - 100;
   var height = $(document).height() - 100;
   
 //These jQuery functions tells the buttons to click
 //and when they are clicked, to create a new car
 
   $('#btnCar').click(function() {
       var c = new Car();
       c.move();
   });
   $('#btnCopCar').click(function() {
       var cc = new CopCar();
       cc.move();
   });
   $('#btnMotorcycle').click(function() {
       var m = new Motorcycle();
       m.move();
   });
   $('#btnTank').click(function() {
       var t = new Tank();
       t.move();
   });
   
   //Building Vehicle Prototype//
   //Category: Motion//
   Vehicle.prototype.moveRight = function() {
       $(this.div).animate({
           left: width
           }, 
           { 
               duration: this.speed, 
               queue: false,
               complete: this.moveLeft.bind(this)}
       );
   };
   Vehicle.prototype.moveLeft = function() {
       
       $(this.div).animate({
            left: 0
           }, 
           { 
               duration: this.speed, 
               queue: false,
               complete: this.moveRight.bind(this)
           }
       );
   }
   Vehicle.prototype.moveDown = function() {
       
       $(this.div).animate({
           top: height}, 
           { duration: this.speed, 
           queue: false, 
           complete: this.moveUp.bind(this)}
       );
   }
   Vehicle.prototype.moveUp = function() {
       
       $(this.div).animate({
           top: 0}, { 
               duration: this.speed, 
               queue: false, 
               complete: this.moveDown.bind(this)
           }
       );
   }
   //Vehicle's Default Motion: Move Right//
   Vehicle.prototype.move = function (direction) {
       this.moveRight();
   }
   //
   Vehicle.prototype.remove = function () {
       
   }
   
   //Telling vehicle to create a div//
   Vehicle.prototype.createVehicle = function(vehicleType) {
       var posx = Math.floor(Math.random() * 800);
       var posy = Math.floor(Math.random() * 600);
       this.div = $('<div class="' + vehicleType + '"></div>');
       this.div.css('top', posy);
       this.div.css('left', posx);
       $(document.body).append(this.div);
   }
    function Vehicle(vehicleType){
       this.createVehicle('Vehicle');
       this.tolerance = 1;
       this.speed = 2000;

   }
   
   //Implementing Car specs//
   function Car() {
       this.createVehicle('Car'); 
       this.tolerance = 2;
       this.speed = 1000;
   }
   
   Car.prototype = Vehicle.prototype;
   
 //Implementing Cop Car specs//  
   function CopCar() {
       this.createVehicle('CopCar');
       this.tolerance = 3;
       this.speed = 1500;
       this.move = function() {
           this.moveDown();
       }
    $('.CopCar').fadeTo(1000, 0.5, function() { $('.CopCar').fadeTo(800, 1); });
   }
   CopCar.prototype = Vehicle.prototype;
   
  //Implementing Motorcycle specs//
   function Motorcycle() {
       this.createVehicle('Motorcycle');
       this.tolerance = 1;
       this.speed = 2000;
       this.move = function () {
           this.moveRight();
           this.moveDown();
       }
   }
   Motorcycle.prototype = Vehicle.prototype;
  
  //Implementing Tank specs//
  function Tank() {
      this.createVehicle('Tank');
      this.tolerance = 10;
      this.speed = 10000; 
      this.move = function () {
           this.moveDown();
      }   
  }
  Tank.prototype = Vehicle.prototype;
}); 
//next goals:
// 1) How do I make the cars recognize when they have hit each other?
// 2) How do I get the cars to start at different places on the screen,
// and not just start at the upper right corner?
// 3) What about my code is making the div go back and forth?

//Links:
//1) How to make an element go in a circle: http://jsfiddle.net/leaverou/zXPzY/

	

