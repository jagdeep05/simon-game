var buttoncolors=["red","blue","green","yellow"];

var gamepattern=[]; 
var userClickedPattern = [];


var level=0;

var started=false;

$(document).keypress(function(){

if(!started){
$("#level-title").text("Level " + level);
nextSequence();
started=true;

}


});



$(".btn").click(function(){
    var colorchoosen =$(this).attr("id");
    userClickedPattern.push(colorchoosen);
    playSound(colorchoosen);
    animatepress(colorchoosen);
    checkanswer(userClickedPattern.length-1);
});

function checkanswer (currentLevel){
    if(gamepattern[currentLevel]===userClickedPattern[currentLevel]){
       
    
    if (userClickedPattern.length === gamepattern.length){
        
        setTimeout(function () {
            nextSequence();
          }, 1000);
    
        }
    }
    
    else{
        playSound("wrong");

        $("body").addClass("game-over");

        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
    
        startOver();

    }
    
    }


function nextSequence(){

userClickedPattern=[];

level++;

$("#level-title").text("Level " + level);

var randomvariable= Math.floor(Math.random()*4);
var randomchoosecolor=buttoncolors[randomvariable];   
gamepattern.push(randomchoosecolor); 

$("#" + randomchoosecolor).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomchoosecolor);


}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatepress(currentcolor){
$("#"+currentcolor).addClass("pressed");
setTimeout(function(){
    $("#"+currentcolor).removeClass("pressed");  
},100)
}


function startOver(){
    level =0;
    gamepattern =[];
    started =false;
}



