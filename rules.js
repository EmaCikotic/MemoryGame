// THE FIRST TYPING ANIMATION

var i = 0;
var speed = 55;
var text =
  "Dear player, Welcome to the memory game, where your powers of recall will be put to the ultimate test. Are you ready to take on the challenge and prove your mettle?";

function typingAnimation() {
  if (i < text.length) {
    document.getElementById("beginning").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingAnimation, speed); //execuye this after this delay
    document.getElementById("decision").style.display = "none";
    document.getElementById("play").style.display = "none";
  } else {
    i = text.length;
    document.getElementById("decision").style.display = "flex";
    pauseAudio();
  }
}

// THE SECOND TYPING ANIMATION
//appears when the player clicks YES
var j = 0;
var text2 =
  "The rules are simple, but the game is not for the faint of heart. You will be presented with a series of cards, each with a hidden symbol. Your task is to match the symbols by turning over two cards at a time. But beware, each incorrect guess will cost you dearly, bringing you one step closer to failure. Do not underestimate the power of your mind, for it alone can guide you through the perilous journey ahead. Remember, every match brings you closer to victory, but every mistake brings you closer to defeat. As the clock ticks down, the pressure will mount. Will you be able to rise to the occasion and emerge victorious? The fate of the game rests in your hands. Good luck, and may the memory gods smile upon you. ";
var speed2 = 50;

function typingAnimation2() {
  playAudio();
  //also when u click yes the previous paragraph and the button disappears

  document.getElementById("beginning").style.display = "none";
  document.getElementById("decision").style.display = "none";

  if (j < text2.length) {
    document.getElementById("main").innerHTML += text2.charAt(j);
    j++;
    setTimeout(typingAnimation2, speed2);
  } else {
    j = text2.length; //when the pragraph is written the final button appears
    document.getElementById("play").style.display = "flex";
  }
}

///-------------------------------------------------------------------//

//KEY PRESSES
//when you press Y the second animaton starts
//when you press N it takes u to the home page, since you dont want to take on the challenge
//when u press G(challenge accepted) it takes u to the game
//when u press the ArrowLeft button it takes u to the previous page
//i used keydown instead of keypress here because it didnt work for the ArrowLeft

document.addEventListener("keydown", function (event) {
  keyPressed = event.key;

  //used switch cause I had a lot of else ifs
  switch (event.key) {
    case "Y":
      typingAnimation2();
      break;
    case "N":
      window.location.href = "index.html";
      break;
    case "G":
      window.location.href = "game.html";
      break;
    case "ArrowLeft":
      history.back();
      break;
    default:
  }
});

//-----------------------------------------------------------------------------//
//AUDIO -
// https://www.w3schools.com/jsref/met_audio_play.asp

function playAudio() {
  document.getElementById("typingSound2").play();
}

function pauseAudio() {
  document.getElementById("typingSound").pause();
}
