function playAudio(buttonId, audioId){
    var audio = document.getElementById(audioId);
    audio.play();
}

const buttonIds = ["button1", "button2", "button3", "button4", "button5", "button6"];
const audioIds = ["audio1", "audio2", "audio3", "audio4", "audio5", "audio6"];

for (let i = 0; i < buttonIds.length; i++){
    const buttonId = buttonIds[i];
    const audioId = audioIds[i];

    document.getElementById(buttonId).addEventListener("click", function(){
        playAudio(buttonId, audioId);
    });
}


const firstImage = document.getElementById("firstImage");
const secondImage = document.getElementById("secondImage");

// Add event listener to the first image for the "mouseover" event
firstImage.addEventListener("mouseover", function() {
    // Hide the first image
    firstImage.classList.add("hide");
    // Show the second image
    secondImage.classList.remove("hide");
});

// Add event listener to the second image for the "mouseout" event
secondImage.addEventListener("mouseout", function() {
    // Hide the second image
    secondImage.classList.add("hide");
    // Show the first image
    firstImage.classList.remove("hide");
});