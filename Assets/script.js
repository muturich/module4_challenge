var score = 0
var time = 60
var timer = document.querySelector(".timer")
var begin = document.querySelector(".begin")
var start = document.querySelector("#start")
var q1 = document.querySelector("#Q1");
var q2 = document.querySelector("#Q2");
var q3 = document.querySelector("#Q3");
var q4 = document.querySelector("#Q4")
var q5 = document.querySelector("#Q5")
var final = document.querySelector("#final")
var highscores = document.querySelector("#highscores")
var final_score_count = document.querySelector("#final_score")
var leaderboard = document.querySelector("#scores")
var back = document.querySelector("#go_back")
var clear_scores = document.querySelector("#clear")
var inits = document.querySelector("#initials")

//Test timer
function countdown_start() {
    time = 50;
    var gameTimer = setInterval(function(){
        time--;
        timer.textContent= "Time: " + time;

//If time hits 0, it will take you to the final page
    if (time === 0){
        clearInterval(gameTimer);
        final_score();
        
    }
}, 1000);
//Starts test
start_test();
//If the final question is answered, this will stop the timer
    q5.addEventListener("click", function(){
        clearInterval(gameTimer);

    })
}

function new_score_item(){
//Creates and appends the user's info in to the leaderboard
    var user_init = inits.value;
    var user_score = score;
    var user_info = user_init + " - " + user_score


        var new_item = document.createElement("li");

        leaderboard.append(new_item);

        new_item.textContent = user_info;

        console.log(leaderboard);


clear_scores.addEventListener("click", function(event){
    event.preventDefault();
//Clears the scores
    leaderboard.remove(new_item);
    console.log(new_item);
    
})
}



//Displays the highscores card
function go_to_scores(){

    final.setAttribute("style", "display: none;")
    highscores.setAttribute("style", "display: block;")


}
  //If back button is pressed, it will take you back to the beginning screen
    back.addEventListener("click", function(event){
        event.preventDefault();

        inits.value = "";

        score = 0;

        highscores.setAttribute("style", "display: none");
    
        start.setAttribute("style", "display: flex;");

    })


//Brings you to the page that displays your score and gives the user the ability to input their initials
function final_score (event) {

    console.log(score)

    q1.setAttribute("style", "display: none");
    q2.setAttribute("style", "display: none");
    q3.setAttribute("style", "display: none");
    q4.setAttribute("style", "display: none");
    q5.setAttribute("style", "display: none;");

    final.setAttribute("style", "display: block;");

    final_score_count.textContent = ("Your final score is " + score + ".");

    setTimeout(() => {final.children[5].textContent = ""}, 1500);
}
//If the submit button is clicked, it will take you to the highscores and submit the user's information
    submit.addEventListener("click", function(event){
        event.preventDefault();
        
        new_score_item();
        go_to_scores();
        return;

    });


//Will display the fifth question
function fifth_q() {
    q4.setAttribute("style", "display: none;")

    console.log(score)

    q5.setAttribute("style", "display: flex;");
    setTimeout(() => {q5.children[5].textContent = ""}, 1500);
}
//If the correct answer is clicked it will add 5 to the score, if not it will subtract 10 from the time
    q5.addEventListener("click", function(event){
        event.stopPropagation();
        var answer5 = event.target;

        if (answer5.matches(".correct5")) {
            score += 5;
            final.children[5].textContent = "Correct!"
            final_score();
            return;
        } else {
            time -= 10;
            final.children[5].textContent = "Incorrect.";
            final_score();
            return;
        }
    });   

//Will display the fourth question
function fourth_q() {
    q3.setAttribute("style", "display: none;")

    console.log(score)

    q4.setAttribute("style", "display: flex;");
    setTimeout(() => {q4.children[5].textContent = ""}, 1500);
}
//If the correct answer is clicked it will add 5 to the score, if not it will subtract 10 from the time
    q4.addEventListener("click", function(event){
        event.stopPropagation();
        var answer4 = event.target;
    
        if (answer4.matches(".correct4")) {
            score += 5;
            q5.children[5].textContent = "Correct!"
            fifth_q();
            return;
        } else {
            time -= 10;
            q5.children[5].textContent = "Incorrect."
            fifth_q();
            return;
        }
    });   

//Will display the third question
function third_q() {
    q2.setAttribute("style", "display: none;")

    console.log(score)

    q3.setAttribute("style", "display: flex;");
    setTimeout(() => {q3.children[5].textContent = ""}, 1500);
}
//If the correct answer is clicked it will add 5 to the score, if not it will subtract 10 from the time
    q3.addEventListener("click", function(event){
        event.stopPropagation();
        var answer3 = event.target;
    
        if (answer3.matches(".correct3")) {
            score += 5;
            q4.children[5].textContent = "Correct!"
            fourth_q();
            return;
        } else {
            time -= 10;
            q4.children[5].textContent = "Incorrect."
            fourth_q();
            return;
        }
    });   

//Will display the second question
function second_q() {
    q1.setAttribute("style", "display: none;")

    console.log(score)

    q2.setAttribute("style", "display: flex;");
    setTimeout(() => {q2.children[5].textContent = ""}, 1000);
}
//If the correct answer is clicked it will add 5 to the score, if not it will subtract 10 from the time
    q2.addEventListener("click", function(event){
        event.stopPropagation();
        var answer2 = event.target;
        if (answer2.matches(".correct2")) {
            score += 5;
            q3.children[5].textContent = "Correct!";
            third_q();
            return;
        } else {
            time -= 10;
            q3.children[5].textContent = "Incorrect."
            third_q();
            return;
        }
    });   

//Will display the first question
function start_test() {


start.setAttribute("style", "display: none;")

q1.setAttribute("style", "display: flex;");

}
//If the correct answer is clicked it will add 5 to the score, if not it will subtract 10 from the time
q1.addEventListener("click", function(event) {
    event.stopPropagation();
    var answer1 = event.target;

    if (answer1.matches(".correct1")) {
        score += 5; 
        q2.children[5].textContent = "Correct!"
        second_q();
        return;
    } else {
        time -= 10;
        q2.children[5].textContent = "Incorrect.";
        second_q();
        return;
    }
});



//When the Start Quiz button is clicked, it will start the timer and quiz
begin.addEventListener("click", countdown_start)