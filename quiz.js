let currentQuestionIndex = 0;
let questions = [];
let correctAnswers = 0; // Variable to track the number of correct answers
let totalQuestions = 0; // This will be set dynamically based on the API response

const param = new URLSearchParams(window.location.search)
const category = param.get("category")

// Automatically detect if you are running locally or on the live deployed site
const isLocal = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost';

// Set the backend URL dynamically
const BACKEND_URL = isLocal 
    ? 'http://localhost:8080' 
    : 'https://quiz-app-backend-zljd.onrender.com'; 

let timeLeft = 30
let timeInterval = 0
// Function to fetch questions from the API
async function fetchQuestions() {
    try {
        const response = await fetch(`BACKEND_URL/api/questions/${category}`); // API URL
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        questions = await response.json(); // Assume API returns an array of question objects
        totalQuestions = questions.length; // Set totalQuestions based on fetched data
        document.getElementById('total-questions').textContent = totalQuestions; // Update the total questions in the HTML
        displayQuestion();
    } catch (error) {
        console.error('Error fetching questions:', error);
        document.getElementById('question-text').textContent = "Failed to load questions. Please try again.";
    }
}

//Question display function
function displayQuestion() {
    if (questions.length === 0) {
        document.getElementById('question-text').innerText = "No question available!"
        return;
    }
    
    stopTimer()
    startTimer()

    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const currentQuestion = questions[currentQuestionIndex];

    // Update this line to match the correct property
    questionText.textContent = currentQuestion.questionText;
    optionsContainer.innerHTML = ''; // Clear previous options

        currentQuestion.questionOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'option';
        button.style.cursor = "pointer";
        button.onclick = () => checkAnswer(option); // Call checkAnswer on click
        optionsContainer.appendChild(button);
        
    });

    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
}

function startTimer(){
    timeLeft = 15
    document.getElementById("timer").innerText = timeLeft
    document.getElementById("timer").style.color = "white";

    timeInterval = setInterval(()=>{
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft
        
        if(timeLeft <= 0 ){
            clearInterval(timeInterval)
            autoNextQuestion()
        }
        else if (timeLeft <= 5) {
            document.getElementById("timer").style.color = "red";
        }
    },1000)
}

function stopTimer(){
    clearInterval(timeInterval)
}

function autoNextQuestion(){

    const button = document.querySelectorAll(".option")

    button.forEach( btn => {
        if(btn.textContent === questions[currentQuestionIndex].correctAnswer){
            btn.style.backgroundColor = "green"
        }
        btn.disabled = true
    })
    setTimeout(nextQuestion,1000)
}
function checkAnswer(selectedOption) {
    stopTimer()
    const currentQuestion = questions[currentQuestionIndex];

    const buttons = document.querySelectorAll('.option');
    
    buttons.forEach(btn => {
        if (btn.textContent === currentQuestion.correctAnswer) {
            btn.style.backgroundColor = "green";
        } else if (btn.textContent === selectedOption) {
            btn.style.backgroundColor = "red";
        }
        btn.disabled = true;
    });
    // Update this line to match the correct property
    if (selectedOption === currentQuestion.correctAnswer) {
        correctAnswers++; // Increment score if the answer is correct
    }

    // Automatically move to the next question after selecting an answer
    setTimeout(nextQuestion,1000);
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        // Quiz Completed: Save score and redirect to results page
        localStorage.setItem('quizScore', correctAnswers); // Save the score
        localStorage.setItem('totalQuestions', totalQuestions); // Save total questions
        window.location.href = 'result.html'; // Redirect to results page
    }
}


document.addEventListener("DOMContentLoaded", () => {

    if( ! category ) {
        document.getElementById("question-text").innerText = "No quiz selected!"
        return;
    }

    const titleText = category.charAt(0).toUpperCase() + category.slice(1) + " Quiz !"

    document.title = titleText
    document.getElementById("quiz_heading").innerText = titleText

    fetchQuestions()
})