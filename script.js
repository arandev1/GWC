//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var result = document.getElementById("result");
var questionCount = 0;
var genzScore = 0;
var millennialScore = 0;
var genxScore = 0;
var boomerScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", genz);
q1a2.addEventListener("click", millennial);
q1a3.addEventListener("click", genx);
q1a4.addEventListener("click", boomer);

q2a1.addEventListener("click", genx);
q2a2.addEventListener("click", genz);
q2a3.addEventListener("click", millennial);
q2a4.addEventListener("click", boomer);

q3a1.addEventListener("click", boomer);
q3a2.addEventListener("click", millennial);
q3a3.addEventListener("click", genx);
q3a4.addEventListener("click", genz);

//#TODO: Define quiz functions here
function genz() {
  genzScore += 1;
  questionCount += 1;
//  alert("One point to Gen Z");
  if (questionCount >= 3) {
    updateResult();
  }
}
function millennial() {
  millennialScore += 1;
  questionCount += 1;
//  alert("One point to Millennial");
  if (questionCount >= 3) {
    updateResult();
  }
}
function genx() {
    genxScore += 1;
    questionCount += 1;
  //  alert("One point to GenX");
    if (questionCount >= 3) {
      updateResult();
    }
  }
function boomer() {
    boomerScore += 1;
    questionCount += 1;
 //   alert("One point to Boomer");
    if (questionCount >= 3) {
      updateResult();
    }
  }

  function updateResult() {
    if (genzScore >= 2) {
      result.innerHTML = "Gen Z!";
    } 
    else if (millennialScore >= 2){
      result.innerHTML = "Millennial!";
    } 
    else if (genxScore >= 2) {
      result.innerHTML = "Gen X!"; 
    }
    else if (boomerScore >= 2) {
      result.innerHTML = "Baby Boomer!";
    }
  }

