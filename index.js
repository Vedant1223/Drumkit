var i = 0;

while(i<7){
document.querySelectorAll(".drum")[i].addEventListener("click", Click);
i++;
}

function Click(){
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    animation(buttonInnerHtml);
}

document.addEventListener("keydown", function(e) {
makeSound(e.key);
animation(e.key);
//    makeSound(Event.key);

});


// var drum1 = new Audio('./sounds/tom-1.mp3');
// drum1.play();


function makeSound(KEY){
    switch(KEY) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
    
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        
        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
            
        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        
        case "j":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        
        case "k":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        
        case "l":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        
        default:
            break;
      }
}

function animation(currentKey){

    var cKey = document.querySelector("."+currentKey);
    cKey.classList.add("pressed");

    setTimeout(function(){
    cKey.classList.remove("pressed");
    }, 100);
}