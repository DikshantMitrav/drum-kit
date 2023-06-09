// let document.querySelector(.drum)
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHtml;
    makeSound(buttonInnerHTML);
  });
}
document.addEventListener("keypress", function (event) {
  makeSound(buttonInnerHTML);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "j":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

//   document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
//   function handleClick() {
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
//   document
//     .querySelectorAll(".drum")
//     [i].addEventListener("keypress", generateRandomColor);

//   function generateRandomColor() {
//     let maxVal = 0xffffff;
//     let randomNumber = Math.random() * maxVal;
//     randomNumber = Math.floor(randomNumber);
//     randomNumber = randomNumber.toString(16);
//     let randColor = "#" + randomNumber.padStart(6, 0);
//     document.body.style.backgroundColor = randColor;
//     this.style.color = randColor;
//   }
