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

// ✅ Add flash effect when a button is selected
function animatePress (currentColor) {
    $("#" + currentColor).addClass("pressed");
    
    setTimeout(() => {
        $("#" + currentColor).removeClass("pressed");
    }, 200);
};

// ✅ Handle button clicks
$(".btn").click( function () {
    level++;
    $("#level-title").text("Level " + level);
    
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    
    playSound(userChosenColor);
    animatePress(userChosenColor);
    console.log(userClickedPattern);
});

// ✅ Update sequence and level
function nextSequence () {
    level++;
    $("#level-title").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * buttonColors.length);
    let randomChosenColor = buttonColors[randomNumber];
    
    gamePattern.push(randomChosenColor);
    playSound(randomChosenColor);
    
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
}

// ✅ Play the correct sound for each button
function playSound(color) {
    let audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}