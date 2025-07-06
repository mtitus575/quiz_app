import questionBank from "./questions.js";

const container = document.querySelector(".questionCard");
let questionCount = 0;

cardStyle(questionBank[questionCount]); //Displays the first question.

//Main card
//function to style the card
function cardStyle(set) {
  const card = document.createElement("div");
  card.className = "card";

  //The if: only displays the card if the index is the same as the count.
  if (questionBank.indexOf(set) === questionCount) {
    container.append(card);
  }

  //functional components imported to the card:
  card.append(questionHeading(set));
  card.append(answersDiv(set));
  // card.append(nextBtn());
}

// This displays the question into the cards
function questionHeading(set) {
  const questionBnr = document.createElement("h4");
  questionBnr.innerText = set.question;

  return questionBnr;
}
//This is the div containing all the answer buttons per card
function answersDiv(set) {
  const answerCtn = document.createElement("section");
  answerCtn.className = "answerCtn";
  const options = set.options;

  for (const option of options) {
    const answerBtn = document.createElement("button");
    answerBtn.innerText = option;
    answerCtn.append(answerBtn);
    //Change clr based on the answer clicked (green = right, red = wrong)
    function handleAnswerClick(event) {
      event.preventDefault();

      if (set.answer === answerBtn.innerText) {
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

// Adding a next button wit logic:
const NextBtn = document.getElementById("next");

function handleNext(e) {
  e.preventDefault();

  if (questionCount < questionBank.length - 1) {
    questionCount++;
    container.innerHTML = "";
    cardStyle(questionBank[questionCount]);
  }

  if (questionCount === questionBank.length - 1) {
    NextBtn.disabled = true;
  }
}

NextBtn.addEventListener("click", handleNext);

/*TODO Next
1. Hide all, but one, card.
2. Allow next button to show the next card
3. Track the correct answers
4. Display final score out of all questions
5. Allow restart
*/
