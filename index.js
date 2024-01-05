//Detecting button press

var numberOfButtons = document.querySelectorAll(".drum").length;  //for determining the number of times we need to run the loop

for(var i=0;i<numberOfButtons;i++)
{document.querySelectorAll("button")[i].addEventListener("click", function(){   //adding eventlistner using anonymous function(func with no name), no need of any name to the function as we are passing it as parameter and defining it at the same place, we also just define it outside the eventlistener ans pass the function as a parameter

    var buttonInHTML = this.innerHTML;    //for targeting the button that is being clicked using this
    makeSound(buttonInHTML);
    buttonAnimation(buttonInHTML);
    
   
});
}

//detecting keyboard press, i.e which keyboard button got pressed

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
      switch(key){

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
          
        default: console.log(buttonInHTML);
    }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+ currentKey); //passing the class using the currentkey pressed
  
  activeButton.classList.add("pressed"); //we are adding the class pressed that we have created in css file

  setTimeout(function(){
    activeButton.classList.remove("pressed")  //for removing the pressed effect after given time
  },100)
}
