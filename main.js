import questionBank from "./questions.js";

const container = document.querySelector(".questionCard");
let questionCount = 0;

//Displays the first question @ start of program:
cardStyle(questionBank[questionCount]);

//Main card
//function to style the card
function cardStyle(answerSet) {
  const card = document.createElement("div");
  card.className = "card";

  //The if: only displays the card if the index is the same as the count.
  if (questionBank.indexOf(answerSet) === questionCount) {
    container.append(card);
  }

  //functional components imported to the card:
  card.append(questionHeading(answerSet));
  card.append(answersDiv(answerSet));
  // card.append(nextBtn());
}

// This displays the question into the cards
function questionHeading(answerSet) {
  const questionBnr = document.createElement("h4");
  questionBnr.innerText = answerSet.question;

  return questionBnr;
}
//This is the div containing all the answer buttons per card
function answersDiv(answerSet) {
  const answerCtn = document.createElement("section");
  answerCtn.className = "answerCtn";
  const options = answerSet.options;

  for (const option of options) {
    const answerBtn = document.createElement("button");
    answerBtn.innerText = option;
    answerCtn.append(answerBtn);
    //Change clr based on the answer clicked (green = right, red = wrong)
    function handleAnswerClick(event) {
      event.preventDefault();

      if (answerSet.answer === answerBtn.innerText) {
        answerBtn.style.backgroundColor = "green";
        scoreTracker();
        totalScore();
      } else {
        answerBtn.style.backgroundColor = "red";
      }

      const allCardBtns = answerCtn.querySelectorAll("button"); //This selects on buttons from the `answerCtn` only
      allCardBtns.forEach((button) => (button.disabled = true)); //This line disabled the buttons after 1 selection is made.
    }
    answerBtn.addEventListener("click", handleAnswerClick);
    //I want to stop the user from being able to click more than one option
  }
  return answerCtn;
}

// Adding a next and complete button with logic:
const NextBtn = document.getElementById("next");
const completeBtn = document.getElementById("completeBtn");
completeBtn.style.display = "none";
completeBtn.disabled = true;

function handleNext(e) {
  e.preventDefault();
  //If not at the end of the questionBank array then add to the count, clear the container and render the next card.
  if (questionCount < questionBank.length - 1) {
    questionCount++;
    container.innerHTML = "";
    cardStyle(questionBank[questionCount]);
  }
  //if at the end of the questionBank array, disable the next button
  if (questionCount === questionBank.length - 1) {
    NextBtn.disabled = true;
    completeBtn.style.display = "flex";
    completeBtn.disabled = false;
  }
}

NextBtn.addEventListener("click", handleNext);

//Complete-button logic:
const finalCard = document.querySelector(".finalScoreCard");
finalCard.style.display = "none";

function finalScoreCard() {
  // container.style.disabled = 'none'
  finalCard.style.display = "block";
  container.style.display = "none";
  NextBtn.style.display = "none";
  completeBtn.style.display = "none";
}
completeBtn.addEventListener("click", finalScoreCard);

//Tracking correct answers score:
let correctAnswers = 0;
const totalQuestions = questionBank.length;
console.log(totalQuestions);

function scoreTracker() {
  correctAnswers++;
  console.log("I am inside the scoreTracker");
  console.log(correctAnswers);
}

//Calculating percentage correct:
function totalScore() {
  const calculatedScore = (correctAnswers / totalQuestions) * 100;
  console.log(`${calculatedScore} %`);
  return `${calculatedScore} %`;
}

//To DO: Figure out where the call for the `ScoreTracker` needs to be placed.

/*TODO Next
1. Add actual score to the scoreCard in the `spans`
2. Allow restart - this button resets the quiz (to display code form line 7 again)
*/
