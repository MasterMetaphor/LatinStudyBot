// Enhanced Latin Quiz Application
// Includes user accounts, hints, expanded questions, and QoL features

// DOM Elements
const loginScreen = document.getElementById('login-screen');
const mainMenuScreen = document.getElementById('main-menu');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const progressScreen = document.getElementById('progress-screen');

// Login & Account Elements
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const usernameInput = document.getElementById('username-input');
const pinInput = document.getElementById('pin-input');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const guestBtn = document.getElementById('guest-btn');
const loginMessage = document.getElementById('login-message');

// Main Menu Elements
const welcomeMessage = document.getElementById('welcome-message');
const startQuizBtn = document.getElementById('start-quiz-btn');
const viewProgressBtn = document.getElementById('view-progress-btn');
const logoutBtn = document.getElementById('logout-btn');

// Quiz Setup Elements
const numQuestionsSelect = document.getElementById('num-questions');
const questionTypeSelect = document.getElementById('question-type');
const startBtn = document.getElementById('start-button');

// Quiz Elements
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const questionText = document.getElementById('question-text');
const choicesContainer = document.getElementById('choices-container');
const feedbackContainer = document.getElementById('feedback-container');
const hintButton = document.getElementById('hint-button');
const hintBox = document.getElementById('hint-box');
const nextButton = document.getElementById('next-button');

// Results Elements
const scoreValue = document.getElementById('score-value');
const totalQuestions = document.getElementById('total-questions');
const scorePercentage = document.getElementById('score-percentage');
const scoreFeedback = document.getElementById('score-feedback');
const answersReview = document.getElementById('answers-review');
const newQuizButton = document.getElementById('new-quiz-button');
const mainMenuButton = document.getElementById('main-menu-button');

// Progress Elements
const progressStats = document.getElementById('progress-stats');

// Quiz State
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let userAnswers = [];

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

// Initialize the application
function initializeApp() {
    // Add login/register event listeners
    loginBtn.addEventListener('click', login);
    registerBtn.addEventListener('click', register);
    guestBtn.addEventListener('click', loginAsGuest);
    logoutBtn.addEventListener('click', logout);
    
    // Add main menu event listeners
    startQuizBtn.addEventListener('click', () => showScreen('quiz-setup'));
    viewProgressBtn.addEventListener('click', () => showProgressScreen());
    
    // Add quiz setup event listeners
    startBtn.addEventListener('click', startQuiz);
    
    // Add quiz event listeners
    hintButton.addEventListener('click', showHint);
    nextButton.addEventListener('click', goToNextQuestion);
    
    // Add results event listeners
    newQuizButton.addEventListener('click', () => showScreen('quiz-setup'));
    mainMenuButton.addEventListener('click', () => showScreen('main-menu'));
    
    // Show login screen initially
    showScreen('login-screen');
}

// Login function
function login(e) {
    if (e) e.preventDefault();
    
    const username = usernameInput.value.trim();
    const pin = pinInput.value.trim();
    
    if (!validateInputs(username, pin)) return;
    
    if (userProgress.login(username, pin)) {
        showMainMenu();
        clearInputFields();
        showMessage('success', 'Login successful!');
    } else {
        showLoginMessage('error', 'Invalid username or PIN');
    }
}

// Register function
function register(e) {
    if (e) e.preventDefault();
    
    const username = usernameInput.value.trim();
    const pin = pinInput.value.trim();
    
    if (!validateInputs(username, pin)) return;
    
    if (userProgress.register(username, pin)) {
        showMainMenu();
        clearInputFields();
        showMessage('success', 'Registration successful!');
    } else {
        showLoginMessage('error', 'Username already exists');
    }
}

// Login as guest
function loginAsGuest() {
    userProgress.loginAsGuest();
    showMainMenu();
    clearInputFields();
    showMessage('info', 'Logged in as Guest. Progress will not be saved.');
}

// Logout
function logout() {
    userProgress.logout();
    showScreen('login-screen');
    showMessage('info', 'Logged out successfully');
}

// Validate login/register inputs
function validateInputs(username, pin) {
    if (!username) {
        showLoginMessage('error', 'Please enter a username');
        return false;
    }
    
    if (username.length > 16) {
        showLoginMessage('error', 'Username must be 16 characters or less');
        return false;
    }
    
    if (!pin) {
        showLoginMessage('error', 'Please enter a PIN');
        return false;
    }
    
    if (!/^\d+$/.test(pin)) {
        showLoginMessage('error', 'PIN must contain only numbers');
        return false;
    }
    
    if (pin.length < 4 || pin.length > 8) {
        showLoginMessage('error', 'PIN must be 4-8 numbers');
        return false;
    }
    
    return true;
}

// Show login message
function showLoginMessage(type, message) {
    loginMessage.textContent = message;
    loginMessage.className = 'message ' + type;
    loginMessage.style.display = 'block';
    
    // Hide message after 3 seconds
    setTimeout(() => {
        loginMessage.style.display = 'none';
    }, 3000);
}

// Show main menu
function showMainMenu() {
    showScreen('main-menu');
    const currentUser = userProgress.currentUser;
    
    if (currentUser) {
        welcomeMessage.textContent = `Welcome, ${currentUser.username}!`;
        
        // Add warning for guest
        if (currentUser.username === 'Guest') {
            const guestWarning = document.createElement('div');
            guestWarning.className = 'guest-warning';
            guestWarning.textContent = 'Note: Progress will not be saved in Guest mode';
            welcomeMessage.appendChild(guestWarning);
        }
    }
}

// Start quiz
function startQuiz() {
    const numQuestions = parseInt(numQuestionsSelect.value);
    const questionType = questionTypeSelect.value;
    
    // Filter questions by type
    let filteredQuestions = latinQuestionsEnhanced;
    if (questionType !== 'all') {
        filteredQuestions = latinQuestionsEnhanced.filter(q => q.category === questionType);
    }
    
    // Check if we have enough questions
    if (filteredQuestions.length < numQuestions) {
        showMessage('warning', `Only ${filteredQuestions.length} questions available for this category. Using all available questions.`);
    }
    
    // Select random questions
    currentQuestions = getRandomQuestions(filteredQuestions, Math.min(numQuestions, filteredQuestions.length));
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    // Show quiz screen
    showScreen('quiz-screen');
    showQuestion();
}

// Get random questions
function getRandomQuestions(questions, num) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

// Show current question
function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
    
    // Update question text
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
    
    // Hide feedback, hint, and next button
    feedbackContainer.classList.add('hidden');
    hintBox.classList.add('hidden');
    nextButton.classList.add('hidden');
    
    // Reset state
    selectedAnswer = null;
}

// Shuffle array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Select an answer choice
function selectChoice(choiceElement, choice) {
    // If already answered, do nothing
    if (selectedAnswer !== null) return;
    
    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = choice === question.correctAnswer;
    selectedAnswer = choice;
    
    // Mark all choices
    document.querySelectorAll('.choice').forEach(c => {
        c.classList.remove('selected', 'correct', 'incorrect');
    });
    
    // Mark selected choice
    choiceElement.classList.add('selected');
    
    // Mark as correct/incorrect
    if (isCorrect) {
        choiceElement.classList.add('correct');
        score++;
    } else {
        choiceElement.classList.add('incorrect');
        
        // Show correct answer
        document.querySelectorAll('.choice').forEach(c => {
            if (c.querySelector('.choice-text').textContent === question.correctAnswer) {
                c.classList.add('correct');
            }
        });
    }
    
    // Show feedback
    feedbackContainer.innerHTML = isCorrect ? 
        '<div class="feedback-correct"><h3>✓ Correct!</h3></div>' : 
        `<div class="feedback-incorrect"><h3>✗ Incorrect!</h3><p>The correct answer is: ${question.correctAnswer}</p></div>`;
    
    feedbackContainer.classList.remove('hidden');
    
    // Show next button
    nextButton.classList.remove('hidden');
    
    // Update user progress
    if (userProgress.currentUser) {
        userProgress.updateStats(
            `${question.category}-${currentQuestionIndex}`,
            isCorrect,
            question.category
        );
    }
    
    // Record answer
    userAnswers.push({
        question: question.question,
        userAnswer: choice,
        correctAnswer: question.correctAnswer,
        isCorrect: isCorrect
    });
}

// Show hint for current question
function showHint() {
    const question = currentQuestions[currentQuestionIndex];
    if (question.hint) {
        hintBox.textContent = `💡 Hint: ${question.hint}`;
        hintBox.classList.remove('hidden');
    } else {
        showMessage('info', 'No hint available for this question');
    }
}

// Go to next question
function goToNextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show quiz results
function showResults() {
    // Switch to results screen
    showScreen('results-screen');
    
    // Update score display
    scoreValue.textContent = score;
    totalQuestions.textContent = currentQuestions.length;
    
    const percentage = Math.round((score / currentQuestions.length) * 100);
    scorePercentage.textContent = `${percentage}%`;
    
    // Provide feedback based on score
    if (percentage >= 90) {
        scoreFeedback.textContent = "Outstanding! Excellent Latin knowledge!";
        scoreFeedback.className = "score-feedback excellent";
    } else if (percentage >= 80) {
        scoreFeedback.textContent = "Great job! You have a strong understanding of Latin!";
        scoreFeedback.className = "score-feedback great";
    } else if (percentage >= 70) {
        scoreFeedback.textContent = "Good work! Keep studying to improve further.";
        scoreFeedback.className = "score-feedback good";
    } else if (percentage >= 60) {
        scoreFeedback.textContent = "Satisfactory. More practice would be beneficial.";
        scoreFeedback.className = "score-feedback satisfactory";
    } else {
        scoreFeedback.textContent = "More study recommended. Don't give up!";
        scoreFeedback.className = "score-feedback needs-work";
    }
    
    // Show answer review
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

// Show progress statistics
function showProgressScreen() {
    showScreen('progress-screen');
    
    const stats = userProgress.getStats();
    if (!stats) {
        progressStats.innerHTML = '<p class="no-stats">No progress data available yet.</p>';
        return;
    }
    
    // Create statistics display
    let statsHtml = `
        <div class="stat-summary">
            <div class="stat-card">
                <div class="stat-number">${stats.totalQuestions}</div>
                <div class="stat-label">Questions</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${stats.correctAnswers}</div>
                <div class="stat-label">Correct</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${stats.totalQuestions > 0 ? Math.round((stats.correctAnswers / stats.totalQuestions) * 100) : 0}%</div>
                <div class="stat-label">Accuracy</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${stats.bestStreak}</div>
                <div class="stat-label">Best Streak</div>
            </div>
        </div>
    `;
    
    // Category breakdown
    statsHtml += '<h3>Category Breakdown</h3>';
    statsHtml += '<div class="category-stats">';
    
    const categories = {
        'cases': 'Cases & Functions',
        'nouns': 'Nouns & Declensions',
        'verbs': 'Verbs & Conjugations',
        'translation': 'Translations',
        'sentences': 'Sentences',
        'adjectives': 'Adjectives',
        'grammar': 'Grammar'
    };
    
    for (const [category, stats] of Object.entries(stats.categoryStats)) {
        const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
        statsHtml += `
            <div class="category-item">
                <div class="category-name">${categories[category] || category}</div>
                <div class="category-progress">
                    <div class="category-bar" style="width: ${accuracy}%"></div>
                </div>
                <div class="category-stats">
                    ${stats.correct}/${stats.total} (${accuracy}%)
                </div>
            </div>
        `;
    }
    
    statsHtml += '</div>';
    
    progressStats.innerHTML = statsHtml;
}

// Show a screen
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show requested screen
    document.getElementById(screenId).classList.add('active');
}

// Show message notification
function showMessage(type, message) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${type}`;
    messageElement.textContent = message;
    
    document.body.appendChild(messageElement);
    
    // Animate in
    setTimeout(() => {
        messageElement.classList.add('show');
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        messageElement.classList.remove('show');
        setTimeout(() => {
            messageElement.remove();
        }, 300);
    }, 3000);
}

// Clear login input fields
function clearInputFields() {
    usernameInput.value = '';
    pinInput.value = '';
}
