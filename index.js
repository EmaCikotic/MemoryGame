//when you press S i takes you directly to the game,
//when you press P it takes you to the rules of the game
document.addEventListener("keypress", function (event) {
  keyPressed = event.key; //it assigns the value of the pressed key to the var keyPressed
  if (event.key == "S") {
    window.location.href = "game.html";
  } else if (event.key == "R") {
    window.location.href = "rules.html";
  }
});

//when a key is pressed the event listener is triggered
//Inside the event listener function, it assigns the value of the pressed key to the keyPressed variable.
// This allows you to track which key was pressed.
