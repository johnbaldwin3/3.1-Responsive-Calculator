(function(){
  "use strict";
  console.log("stuff");


var display = document.getElementById('calc-display');
var numberPressed = document.querySelectorAll('.number');
var operatorPressed = document.querySelectorAll('.operators');
var pushNumber;
var pushOperator;

var result;
var input = 0;

var resetInput = true;



for (var i = 0; i < numberPressed.length; i++) {
  numberPressed[i].addEventListener('click', function(event){
  pushNumber= event.target.dataset.value;
  // console.log(display.textContent);
  if (resetInput) {
    input = pushNumber
    display.textContent = input;
    resetInput = false;
  } else {
    input += pushNumber
    display.textContent = input;
  }
  // console.log(pushNumber);
  })
}

for (var i=0; i < operatorPressed.length; i++) {
  operatorPressed[i].addEventListener('click', function(event){
    var pushOperator;

    if (result === undefined) {
      result = input;
      resetInput = true;
      pushOperator = event.target.dataset.value;
    } else {
      var test = Number(result) + Number(input);
      display.textContent = test;
    }

  })
}


// function allClear() {
//
//   if (operatorPressed == 'AC') {
//     display.textContent = '0';
//   }
// };
// numberPressed.addEventListener('click', function(event){
//   var myVal = Number(event.target.getAttribute('value'));
//   console.log(myVal);





}());
