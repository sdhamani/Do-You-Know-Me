//importing readline package
var readlineSync =  require("readline-sync");

//taking the input from user
var userName = readlineSync.question("What is your Name? ")

console.log("---------------------------")

console.log("Welcome "+ userName + " to DO YOU KNOW Sagar?");

// declaring the variable
var score = 0;


// array of all the questions
var questions = [ {
  question : "1. What is my favorite beverage? ",
  answer : "Tea",
}, {
  question : "2. Which is my favorite city? ",
  answer :"Pune",
},
{
  question : "3. Which is my favorite colour? ",
  answer :"Black",
},
{
  question : "4. Which is your favorite season? ",
  answer :"Winter",
}
]

//function to check the answer for a particular question

function play(question,answer){

  console.log("---------------------------")
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Your answer is correct !!");
    score +=1
  }
  else{
    console.log("Oops ,Your answer is wrong !!");
  }
  console.log("Your current score is : " , score);
  
}


// loop to go throught all the questions present in the questions array

for(i=0 ; i<questions.length ; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}

// declaring the highscores array
var highScores = [ {
  name : "Sagar",
  score : "4",
}, {
  name : "Anurag",
  score :"3",
}
]

console.log("---------------------------");

console.log("Below are our HighScorers ");

//displaying the leaderboard

for(var j=0 ; j<highScores.length; j++){

  var currentUser = highScores[j];

  console.log("Name: " + currentUser.name + " score: "+ currentUser.score);

}

console.log("---------------------------");

console.log("Please send us the screenshot of your score if you have beaten the highscore !!");
