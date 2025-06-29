for (i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "w":
        audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
        break;
      case "a":
        audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
        break;
      case "s":
        audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
        break;
      case "d":
        audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
        break;
      case "j":
        audio = new Audio("./sounds/snare.mp3");
        audio.play();
        break;
      case "k":
        audio = new Audio("./sounds/crash.mp3");
        audio.play();
        break;
      case "l":
        audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
        break;
      default:
        console.log(buttonInnerHTML);
    }
  });
}

document.addEventListener("keydown", function (event) {
  playDrumSound(event.key);
});

function playDrumSound(key) {
  switch (key) {
    case "w":
      new Audio("./sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("./sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("./sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("./sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("./sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("./sounds/crash.mp3").play();
      break;
    case "l":
      new Audio("./sounds/kick-bass.mp3").play();
      break;
    default:
      console.log("Unhandled key: " + key);
  }
}
var bellboy1 = {
  name: "John",
  age: 30,
  lang: ["JavaScript", "Python", "Java"],
};

function malathi() {
  console.log("Hello");
}
