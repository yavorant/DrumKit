/*
//1-st method
const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = myFunction;
}

//2-nd
buttons.forEach(function(button) {
  button.onclick = myFunction;
});

function myFunction() {
  alert("Have been pushed!");
}

//3-rd
document.querySelectorAll('button').forEach(item => {
  item.addEventListener('click', event => {
    alert("pushed")//handle click
  })
})

*/
//Angela's method

//Detecting Button Press
const howManyButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < howManyButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener('click', function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    //this.style.color = "white";

    //alert("Good job!");
  })
}

//Detecting Keyboard Press
document.addEventListener('keydown', function(event) {
    makeSound(event.key)
});

function makeSound(key) {
  switch (key) {
    case 'w':
      new Audio('sounds/tom-1.mp3').play();
      break;
    case 'a':
      new Audio('sounds/tom-2.mp3').play();
      break;
    case 's':
      new Audio('sounds/tom-3.mp3').play();
      break;
    case 'd':
      new Audio('sounds/tom-4.mp3').play();
      break;
    case 'j':
      new Audio('sounds/crash.mp3').play();
      break;
    case 'k':
      new Audio('sounds/kick-bass.mp3').play();
      break;
    case 'l':
      new Audio('sounds/snare.mp3').play();
      break;
  }
}
