/* Dectecting Button Press */

var Drums = document.querySelectorAll(".drum").length; // number of buttons.

// Every button plays an audio when clicked using a fuction.
for( let i = 0; i < Drums; i++){
    document.getElementsByClassName("drum")[i].addEventListener("click", handleClick);
}

// Fuction that plays the audio according to which button is pressed.
function handleClick(){
    var buttonInnerHTML = this.innerHTML; // variable that has the HTML value of the button.
    makesound(buttonInnerHTML); // passes to the function the button that was clicked.
    makeAnimation(buttonInnerHTML);
}

/* Dectecting Keyboard Press */

// Use the keyboard to play the drum
document.addEventListener("keydown",function(event){
    makesound(event.key); // passes to the function the key that was pressed.
    makeAnimation(event.key);
})

function makesound(key){
        // according to the value of the key, a different audio is played.
        switch (key) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
    
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
    
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
    
            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
    
            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
                
            case "l":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
    
            default: console.log(buttonInnerHTML);
    
        }

}

function makeAnimation(key){
    var activeButton = document.querySelector("." + key);

    activeButton.classList.add("pressed"); //add pressed class

    setTimeout(function(){ activeButton.classList.remove("pressed"); }, 100); // After 0.1 sec remove the pressed class
}