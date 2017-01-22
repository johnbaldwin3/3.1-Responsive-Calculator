(function(){
  "use strict";
  console.log("stuff");

var buttonClicked = document.getElementsByClassName('bttn');

function buttonColorClick(){

  buttonClicked.addEventListener('click', function(){
    console.log("clicked");
    buttonClicked.style.backgroundColor = 'grey';
  })

}





}());
