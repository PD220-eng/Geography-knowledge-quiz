const questions = [
{
question: "What is the capital of Ireland?",
answers: [
{text:"Cork", correct:false},
{text:"Galway", correct:false},
{text:"Dublin", correct:true},
{text:"Limerick", correct:false}
]
},

{
question: "Which layer of the Earth is the outermost?",
answers: [
{text:"Core", correct:false},
{text:"Crust", correct:true},
{text:"Mantle", correct:false},
{text:"Inner Core", correct:false}
]
},

{
question: "Which river is the longest in Ireland?",
answers: [
{text:"River Shannon", correct:true},
{text:"River Liffey", correct:false},
{text:"River Lee", correct:false},
{text:"River Boyne", correct:false}
]
},

{
question: "What causes earthquakes?",
answers: [
{text:"Volcanoes only", correct:false},
{text:"Movement of tectonic plates", correct:true},
{text:"Wind", correct:false},
{text:"Rain", correct:false}
]
},

{
question: "Which continent is the Sahara Desert located in?",
answers: [
{text:"Asia", correct:false},
{text:"Africa", correct:true},
{text:"Australia", correct:false},
{text:"South America", correct:false}
]
}

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const resultBox = document.getElementById("result");
const scoreText = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
currentQuestionIndex = 0;
score = 0;
nextButton.innerHTML = "Next Question";
showQuestion();
}

function showQuestion(){
resetState();
let currentQuestion = questions[currentQuestionIndex];
questionElement.innerHTML = currentQuestion.question;

currentQuestion.answers.forEach(answer => {
const button = document.createElement("button");
button.innerHTML = answer.text;
button.classList.add("answer-btn");
answerButtons.appendChild(button);

if(answer.correct){
button.dataset.correct = answer.correct;
}

button.addEventListener("click", selectAnswer);
});
}

function resetState(){
nextButton.style.display = "none";
while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);
}
}

function selectAnswer(e){
const selectedBtn = e.target;
const correct = selectedBtn.dataset.correct === "true";

if(correct){
selectedBtn.classList.add("correct");
score++;
}else{
selectedBtn.classList.add("wrong");
}

Array.from(answerButtons.children).forEach(button=>{
if(button.dataset.correct === "true"){
button.classList.add("correct");
}
button.disabled = true;
});

nextButton.style.display = "block";
}

nextButton.addEventListener("click", ()=>{
currentQuestionIndex++;

if(currentQuestionIndex < questions.length){
showQuestion();
}else{
showScore();
}
});

function showScore(){
document.getElementById("quiz").classList.add("hide");
resultBox.classList.remove("hide");
scoreText.innerHTML = "You scored " + score + " out of " + questions.length;
}

function restartQuiz(){
resultBox.classList.add("hide");
document.getElementById("quiz").classList.remove("hide");
startQuiz();
}

startQuiz();
