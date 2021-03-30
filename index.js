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
const howManyButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < howManyButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener('click', event => {
    new Audio('sounds/tom-1.mp3').play();
    //alert("Good job!");
  })
}
