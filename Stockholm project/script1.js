const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const optionList = document.querySelector('.option-list');
// const nextBtn = document.querySelector('.next-btn');
const resultBox = document.querySelector('.result-box');
const scoreText = document.querySelector('.score-text');

let totalScore = 0;
let selected = false;


startBtn.onclick = () => {
  popupInfo.classList.add('active');
  main.classList.add('active');

}

exitBtn.onclick = () => {
  popupInfo.classList.remove('active');
  main.classList.remove('active');
}

continueBtn.onclick = () => {
  quizSection.classList.add('active');
  popupInfo.classList.remove('active');
  main.classList.remove('active');
  quizBox.classList.add("active");

  showQuestions(0);
  questionCounter(1);
  headerScore();
}


let questionCount = 0;
let questionNumb = 1;

const nextBtn = document.querySelector('.next-btn')

nextBtn.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    questionNumb++;
    showQuestions(questionCount);
    questionCounter(questionNumb);

    nextBtn.classList.remove('active');
  }
  else {
    showResult();
  }
};

function showQuestions(index) {
  const questionText = document.querySelector('.question-text');
  questionText.textContent = `${questionNumb}. ${questions[index].question}`;

  let optionTag = questions[index].options.map(opt => `
    <div class="option"><span>${opt.text}</span></div>
  `).join("");
  optionList.innerHTML = optionTag;

  selected = false;

  const options = document.querySelectorAll('.option');
  options.forEach((opt, i) => {
    opt.onclick = () => {
      if (!selected) {
        options.forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        totalScore += questions[index].options[i].score;
        selected = true;

        // Disable all options visually
        for (let j = 0; j < options.length; j++) {
          options[j].classList.add('disabled');
        }

        nextBtn.classList.add('active');
      }
    };
  });
}

function showResult() {
  quizBox.classList.remove('active');
  resultBox.classList.add('active');

  let riskLevel = "";
  let interpretation = "";

  if (totalScore >= 20) {
    riskLevel = "High Risk (≥ 20)";
    interpretation = "High likelihood of acute kidney injury (AKI) or need for dialysis. Immediate clinical intervention is advised.";
  } else if (totalScore >= 12) {
    riskLevel = "Moderate Risk (12–19)";
    interpretation = "Significant risk of complications. Recommend close monitoring and possibly early nephrology consultation.";
  } else {
    riskLevel = "Low Risk (< 12)";
    interpretation = "Lower chance of AKI or severe complications. Routine clinical care and follow-up may be sufficient.";
  }

  scoreText.innerHTML = `
    <h2>McMahon Risk Result</h2>
    <p><strong>Total Score:</strong> ${totalScore}</p>
    <p><strong>Risk Level:</strong> ${riskLevel}</p>
    <p>${interpretation}</p>
    <p><em>This estimate is based on the McMahon risk index for patients with rhabdomyolysis and is intended for preliminary evaluation only.</em></p>
  `;
}


function questionCounter(index) {
  const questionTotal = document.querySelector('.question-total'); // updated!
  questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

function headerScore() {
  const headerScoreText = document.querySelector('.header-score');
  headerScoreText.textContent = `Score: ${totalScore} / ${questions.length}`;
}


