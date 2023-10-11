function onClick(){
    alert("I got clicked..");
}
// document.querySelector("button").addEventListener("click", onClick);

var button_count = document.querySelectorAll(".drum").length;

// for(var i = 0 ; i<button_count ; i++){
//      document.querySelectorAll(".drum")[i].addEventListener("click", onClick);
// }

for(var i = 0 ; i<button_count ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       
        var expression =  this.innerHTML;
        makeSound(expression);
        addAnimation(expression);
    }
    );
}


// var audio = new Audio("./sounds/snare.mp3");
// audio.play();
document.addEventListener("keypress" , function(event){
    makeSound(event.key);
    addAnimation(event.key);
}
);

function makeSound(key){
    switch(key){
        case "w":
            tom1 = new Audio("./sounds/tom-1.mp3")
            tom1.play()
            break;
        case "a":
            tom2 = new Audio("./sounds/tom-2.mp3")
            tom2.play()
            break;
        case "s":
            tom3 = new Audio("./sounds/tom-3.mp3")
            tom3.play()
            break;
        case "d":
            tom4 = new Audio("./sounds/tom-4.mp3")
            tom4.play()
            break;
        case "j":
            snare = new Audio("./sounds/snare.mp3")
            snare.play()
            break;
        case "k":
            crash = new Audio("./sounds/crash.mp3")
            crash.play()
            break;
        case "l":
            kick = new Audio("./sounds/kick-bass.mp3")
            kick.play()
            break;
    } 


}

function addAnimation(currentKey){
    var currBtn = document.querySelector("."+currentKey);
    currBtn.classList.add("pressed");
    setTimeout(function(){
    currBtn.classList.remove("pressed");
    }, 100);

}