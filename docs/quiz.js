// Latin Quiz Application

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

const numQuestionsSelect = document.getElementById('num-questions');
const questionTypeSelect = document.getElementById('question-type');
const startButton = document.getElementById('start-button');

const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const questionText = document.getElementById('question-text');
const choicesContainer = document.getElementById('choices-container');
const feedbackContainer = document.getElementById('feedback-container');
const hintButton = document.getElementById('hint-button');
const nextButton = document.getElementById('next-button');

const scoreValue = document.getElementById('score-value');
const totalQuestions = document.getElementById('total-questions');
const scorePercentage = document.getElementById('score-percentage');
const scoreFeedback = document.getElementById('score-feedback');
const answersReview = document.getElementById('answers-review');
const newQuizButton = document.getElementById('new-quiz-button');

// Quiz State
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let userAnswers = [];

// Event Listeners
startButton.addEventListener('click', startQuiz);
hintButton.addEventListener('click', showHint);
nextButton.addEventListener('click', goToNextQuestion);
newQuizButton.addEventListener('click', resetQuiz);

// Start the Quiz
function startQuiz() {
    // Get selected options
    const numQuestions = parseInt(numQuestionsSelect.value, 10);
    const questionType = questionTypeSelect.value;
    
    // Filter questions by type if needed
    let filteredQuestions = latinQuestions;
    if (questionType !== 'all') {
        filteredQuestions = latinQuestions.filter(q => q.category === questionType);
    }
    
    // If not enough questions of the selected type
    if (filteredQuestions.length < numQuestions) {
        alert(`Only ${filteredQuestions.length} questions available for this category. Using all available questions.`);
    }
    
    // Randomly select questions
    currentQuestions = getRandomQuestions(filteredQuestions, Math.min(numQuestions, filteredQuestions.length));
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    // Switch to quiz screen
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    // Show first question
    showQuestion();
}

// Get random questions from the array
function getRandomQuestions(questions, num) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

// Display the current question
function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
    
    // Display question
    questionText.textContent = question.question;
    
    // Clear previous choices
    choicesContainer.innerHTML = '';
    
    // Create all answer choices
    const allChoices = [question.correctAnswer, ...question.incorrectAnswers];
    const shuffledChoices = shuffleArray(allChoices);
    
    // Add choices to the DOM
    shuffledChoices.forEach((choice, index) => {
        const letter = String.fromCharCode(65 + index); // A, B, C, D
        
        const choiceElement = document.createElement('div');
        choiceElement.className = 'choice';
        choiceElement.innerHTML = `
            <span class="choice-letter">${letter}</span>
            <span class="choice-text">${choice}</span>
        `;
        
        choiceElement.addEventListener('click', () => selectChoice(choiceElement, choice));
        
        choicesContainer.appendChild(choiceElement);
    });
    
    // Reset UI elements
    feedbackContainer.classList.add('hidden');
    nextButton.classList.add('hidden');
    selectedAnswer = null;
}

// Shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Handle choice selection
function selectChoice(choiceElement, choice) {
    // If already answered, ignore
    if (selectedAnswer !== null) return;
    
    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = choice === question.correctAnswer;
    selectedAnswer = choice;
    
    // Remove selection from all choices
    const allChoices = document.querySelectorAll('.choice');
    allChoices.forEach(c => c.classList.remove('selected', 'correct', 'incorrect'));
    
    // Mark the selected choice
    choiceElement.classList.add('selected');
    
    // Mark as correct or incorrect
    if (isCorrect) {
        choiceElement.classList.add('correct');
        score++;
    } else {
        choiceElement.classList.add('incorrect');
        
        // Find and highlight the correct answer
        allChoices.forEach(c => {
            if (c.querySelector('.choice-text').textContent === question.correctAnswer) {
                c.classList.add('correct');
            }
        });
    }
    
    // Show feedback
    feedbackContainer.innerHTML = isCorrect ? 
        '<h3>✓ Correct!</h3>' : 
        `<h3>✗ Incorrect!</h3><p>The correct answer is: ${question.correctAnswer}</p>`;
    feedbackContainer.className = isCorrect ? 'correct' : 'incorrect';
    feedbackContainer.classList.remove('hidden');
    
    // Enable next button
    nextButton.classList.remove('hidden');
    
    // Record the answer
    userAnswers.push({
        question: question.question,
        userAnswer: choice,
        correctAnswer: question.correctAnswer,
        isCorrect: isCorrect
    });
}

// Show hint for the current question
function showHint() {
    alert("Hint functionality not yet implemented for this sample.");
}

// Go to the next question
function goToNextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show the final results
function showResults() {
    // Switch to results screen
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    // Update score display
    scoreValue.textContent = score;
    totalQuestions.textContent = currentQuestions.length;
    
    const percentage = Math.round((score / currentQuestions.length) * 100);
    scorePercentage.textContent = `${percentage}%`;
    
    // Provide feedback based on score
    if (percentage >= 90) {
        scoreFeedback.textContent = "Outstanding! Excellent Latin knowledge!";
    } else if (percentage >= 80) {
        scoreFeedback.textContent = "Great job! You have a strong understanding of Latin!";
    } else if (percentage >= 70) {
        scoreFeedback.textContent = "Good work! Keep studying to improve further.";
    } else if (percentage >= 60) {
        scoreFeedback.textContent = "Satisfactory. More practice would be beneficial.";
    } else {
        scoreFeedback.textContent = "More study recommended. Don't give up!";
    }
    
    // Show answers review
    answersReview.innerHTML = '';
    userAnswers.forEach(answer => {
        const answerElement = document.createElement('div');
        answerElement.className = `answer-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;
        
        answerElement.innerHTML = `
            <div class="answer-question">${answer.question}</div>
            <div class="answer-user">Your answer: ${answer.userAnswer}</div>
            ${!answer.isCorrect ? `<div class="answer-correct">Correct answer: ${answer.correctAnswer}</div>` : ''}
        `;
        
        answersReview.appendChild(answerElement);
    });
}

// Reset the quiz
function resetQuiz() {
    // Go back to start screen
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');
    
    // Reset variables
    currentQuestions = [];
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    userAnswers = [];
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Any initialization code here
});
