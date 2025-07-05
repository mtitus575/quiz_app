import questionBank from "./questions.js";

const container = document.querySelector(".questionCard");

//Looping over the question bank array of objects.
questionBank.forEach((set) => {
  //`set` = each set of questions object.
  cardStyle(set); //calling the card styling for each question
});

//Main card
function cardStyle(set) {
  //function to style the card
  const card = document.createElement("div");
  container.append(card);
  card.className = "card";

  //functional components imported to the card:
  card.append(questionHeading(set));
  card.append(answersDiv(set));
  card.append(nextBtn());
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
    console.log(option);

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
//This is the next button for each card.
function nextBtn() {
  const next = document.createElement("button");
  next.innerText = "Next Question =>";
  next.className = "nextBtn";

  return next;
}

/*TODO Next
1. Hide all, but one, card.
2. Allow next button to show the next card
3. Track the correct answers
4. Display final score out of all questions
5. Allow restart
*/
