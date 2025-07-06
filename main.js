import questionBank from "./questions.js";

const container = document.querySelector(".questionCard");
let questionCount = 0;

cardStyle(questionBank[questionCount]); //Displays the first question @ start of program.

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

// Adding a next button with logic:
const NextBtn = document.getElementById("next");

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
  }
}

NextBtn.addEventListener("click", handleNext);

//Tracking correct answers score:
let correctAnswers = 0;
let wrongAnswers = 0;

function ScoreTracker(answerSet) {
  if (answerSet.answer === answerBtn.innerText) {
    correctAnswers++;
  } else {
    wrongAnswers++;
  }
}

//To DO: Figure out where the call for the `ScoreTracker` needs to be placeed.

/*TODO Next
1. Hide all, but one, card. DONE
2. Allow next button to show the next card DONE
3. Track the correct answers
4. Display final score out of all questions
5. Allow restart
*/
