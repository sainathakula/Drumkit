
for(var i=0;i<(document.querySelectorAll(".drum").length);i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",
    function()
    {                               //for choosing the correct sound from screen input(button press)
    var exp=this.innerHTML;
    sounds(exp);
    animate(exp);
    });
}

document.addEventListener("keydown",
function(event)
{
    sounds(event.key);               //for choosing the correct sound from keyboard input(keyboard press)
    animate(event.key);
})



function sounds(exp){
    switch (exp) {
        case "w":
            var audio=new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case "a":
            var audio=new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio=new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case "d":
            var audio=new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio=new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio=new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio=new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            console.log(exp);
            break;
    }
}

function animate(keyForButton){
var activate=document.querySelector("."+keyForButton);

activate.classList.add("pressed");
setTimeout(
function()
{
    activate.classList.remove("pressed");
},100);


}




