let gameStarted = false;
let level = 0;
let gamePattern = [];
let userClickedPattern = [];
const buttonColors = ["red", "blue", "green", "yellow"];

// ✅ Start game on first keypress
$(document).keydown(() => {
    if (!gameStarted) {
        $("#level-title").text("Level " + level);
        nextSequence();
        gameStarted = true;
    }
});

// ✅ Handle button clicks
$(".btn").click(function () {
    let userChosenColor = $(this).attr("id");   
    userClickedPattern.push(userChosenColor);
    
    playSound(userChosenColor);
    animatePress(userChosenColor);
    console.log("User Clicked Pattern:",userClickedPattern);

    checkAnswer(userClickedPattern.length - 1); // ✅ Pass last index
});

// ✅ Compare user choice with game pattern
function checkAnswer(currentLevel) {
    console.log("Checking sequence at index:", currentLevel);
    console.log("User Sequence:", userClickedPattern);
    console.log("Game Sequence:", gamePattern);

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("correct choice");

            if (userClickedPattern.length === gamePattern.length) {
                console.log("user completed level");

                setTimeout(() => {
                    nextSequence();
                }, 1000);
            }
    } else {
        console.log("wrong answer");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout (() => {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

// ✅ Update sequence and level
function nextSequence () {
    userClickedPattern = [];  // ✅ Reset before starting next level
    level++;
    $("#level-title").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * buttonColors.length);
    let randomChosenColor = buttonColors[randomNumber];
    
    gamePattern.push(randomChosenColor);
    console.log("Game pattern:", gamePattern)

    playSound(randomChosenColor);    
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
}

// ✅ Flash effect when a button is selected
function animatePress (currentColor) {
    $("#" + currentColor).addClass("pressed");
    
    setTimeout(() => {
        $("#" + currentColor).removeClass("pressed");
    }, 200);
};

// ✅ Play the correct sound for each button
function playSound(color) {
    let audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

// ✅ Restart game after wrong answer
function startOver () {
    level = 0;
    gamePattern = [];
    gameStarted = false;
}









