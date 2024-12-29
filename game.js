//KEY PRESSES
document.addEventListener("keydown", function (event) {
  keyPressed = event.key;

  keyPressed = event.key;
  if (event.key == "ArrowLeft") {
    1;
    history.back();
  }
});
//----------------------------------------------------

//TIMER
// the player has 60 seconds to complete the game, but i wanted another decimal place
// for more precision

// https://www.w3schools.com/jsref/jsref_tofixed.asp

var i = 60;
function Timer() {
  if (i > 0) {
    document.getElementById("timer").innerHTML = i.toFixed(1);
    i -= 0.1;
  } else {
    document.getElementById("time").style.display = "none";
    document.getElementById("timer").innerHTML = "YOU HAVE LOST!";
    clearInterval(timerInterval); //stops from further decrementing
    playAudio();
    //the location is redirected after 3,4 seconds
    setTimeout(function () {
      window.location.href = "index.html";
    }, 3350);
  }
}

var timerInterval = setInterval(Timer, 100); //it is executing the timer after 100 miliseconds
//--------------------------------------------------------

//AUDIO
//when u lose
function playAudio() {
  document.getElementById("loser").play();
}

function pauseAudio() {
  document.getElementById("loser").pause();
}

//when u win
function playAudio2() {
  document.getElementById("winner").play();
}

function pauseAudio2() {
  document.getElementById("winner").pause();
}
//----------------------------------------------------------

//THE GAME

let hasBeenFlipped = false;
let firstCard, secondCard;
let lockPlayground = false;

const cards = document.querySelectorAll(".item");

function flipCard() {
  if (lockPlayground) return;

  if (this == firstCard) return; //if u double click on one card and its the same one u return from the function
  this.classList.add("flip");

  if (!hasBeenFlipped) {
    //first click
    hasBeenFlipped = true;
    firstCard = this; //reference to the first card being flipped
  } else {
    //second flip
    hasBeenFlipped = false;
    secondCard = this;
    lockPlayground = true;

    //are they matching?
    matchingCheck();
  }
}

//to check matching

var matchedPairs = 0;
var winner = 8;
function matchingCheck() {
  if (firstCard.dataset.icons == secondCard.dataset.icons) {
    //match
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard); //prevent further clicking on the cards
    lockPlayground = false; //it isnt locked anymore

    matchedPairs += 1;
    if (matchedPairs == winner) {
      document.getElementById("time").style.display = "none";
      document.getElementById("timer").innerHTML =
        "WINNER WINNER CHICKEN DINNER"; //THIS PHRASE IS FROM A VIDEO GAME I PLAYED (PUBG)
      clearInterval(timerInterval);
      playAudio2();
      setTimeout(function () {
        window.location.href = "index.html";
      }, 3350);
    }
  } else {
    //do not match
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip"); //flips cards back

      resetPlayground();
    }, 1500); //cards will be flipped after 1,5 sec
  }

  function resetPlayground() {
    [hasBeenFlipped, lockPlayground] = [false, false];
    [firstCard, secondCard] = [null, null]; //null indicating that no cards are currently selected
  }
}

//to shuffle
//it is wrapped into () so it is immediately invoked

(function shuffle() {
  cards.forEach((card) => {
    let random = Math.floor(Math.random() * 16);
    card.style.order = random;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));
