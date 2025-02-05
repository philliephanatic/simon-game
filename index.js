let userClickedPattern = [];

$(".btn").click( function () {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    
    playSound(userChosenColor);
    console.log(userClickedPattern);
});

let gamePattern = [];

const buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence () {
    let randomNumber = Math.floor(Math.random() * buttonColors.length);
    
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    
    $("#" + randomChosenColor).addClass("pressed");
    
    setTimeout(() => {
        $("#" + randomChosenColor).removeClass("pressed");
    }, 200);

    playSound(randomChosenColor);

}

function playSound(color) {
    switch (color) {
        case "blue":
            const blue = new Audio("sounds/blue.mp3").play();
            break;
    
        case "green":
            const green = new Audio("sounds/green.mp3").play();
            break;
    
        case "red" :
            const red = new Audio("sounds/red.mp3").play();
            break;

        case "yellow":
            const yellow = new Audio("sounds/yellow.mp3").play();
            break;

        case "wrong":
            const wrong = new Audio("sounds/wrong.mp3").play();
            break;
            
}};

nextSequence();
