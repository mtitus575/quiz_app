import questionBank from "./questions.js";

const container = document.querySelector(".questionCard");

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

function questionHeading(set) {
  const questionBnr = document.createElement("h4");
  questionBnr.innerText = set.question;

  return questionBnr;
}

function answersDiv(set) {
  const answerCtn = document.createElement("section");
  answerCtn.className = "answerCtn";
  const options = set.options;

  for (const option of options) {
    const answerBtn = document.createElement("button");
    answerBtn.innerText = option;
    answerCtn.append(answerBtn);
  }
  return answerCtn;
}

function nextBtn() {
  const next = document.createElement("button");
  next.innerText = "Next Question =>";
  next.className = "nextBtn";

  return next;
}

questionBank.forEach((set) => {
  //`set` = each set of questions object.
  cardStyle(set); //calling the card styling for each question
});
