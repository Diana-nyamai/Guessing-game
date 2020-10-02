var num=Math.floor(1+Math.random()*50);
var guess;

function myGuess(){
    guess=parseInt(document.getElementById("Guess").value);
if (guess == num){
$("#congrats").css('visibility','visible');
$("#Hint").fadeOut(0);
$("#Hint").fadeIn(500);
$("#Hint").css("font-weight","bold");
$("#Hint").html("CORRECT!");
$("#congrats").delay(700).slideDown();
$("#congratsmsg").delay(900).fadeIn();
}

    if(guess > num){
        $("#Hint").fadeOut(0);
        $("#Hint").fadeIn(700);
        $("#Hint").html("Try a <b>lower</b> number!");
    }
        if(guess < num){
            $("#Hint").fadeOut(0);
            $("#Hint").fadeIn(700);
            $("#Hint").html("Try a <b>Higher</b> number!");
        }
    }
function resetGame(){
    $("#congrats").slideUp();
    $("#Hint").css("font-weight","lighter");
    $("#Hint").html("**hints display here");
      num=Math.floor(1+Math.random()*50);
      guess = -1;
      $("#congratsmsg").css("display","none");
}


