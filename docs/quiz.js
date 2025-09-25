// Enhanced Latin Quiz Application
// Includes user accounts, hints, expanded questions, and QoL features

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

// Initialize the application
function initializeApp() {
    debug.log("Initializing Latin Quiz application");
    setupEventListeners();
    setupDebugConsole();
    
    // Check if we need to restore a session
    const currentUser = userProgress.currentUser;
    if (currentUser) {
        debug.log(`Found existing session for user: ${currentUser.username}`);
        showMainMenu();
    } else {
        debug.log("No active session found, showing login screen");
        showScreen('login-screen');
    }
}

// Setup Event Listeners
function setupEventListeners() {
    debug.log("Setting up event listeners");
    
    try {
        // Login screen
        document.getElementById('login-btn').addEventListener('click', login);
        document.getElementById('register-btn').addEventListener('click', register);
        document.getElementById('guest-btn').addEventListener('click', loginAsGuest);
        
        // Prevent form submission
        document.getElementById('login-form').addEventListener('submit', (e) => {
            e.preventDefault();
            login();
        });
        
        // Main menu
        document.getElementById('start-quiz-btn').addEventListener('click', () => showScreen('quiz-setup'));
        document.getElementById('view-progress-btn').addEventListener('click', showProgressScreen);
        document.getElementById('logout-btn').addEventListener('click', logout);
        
        // Quiz setup
        document.getElementById('start-button').addEventListener('click', startQuiz);
        document.getElementById('back-to-menu').addEventListener('click', () => showScreen('main-menu'));
        
        // Quiz screen
        document.getElementById('hint-button').addEventListener('click', showHint);
        document.getElementById('next-button').addEventListener('click', goToNextQuestion);
        
        // Results screen
        document.getElementById('new-quiz-button').addEventListener('click', () => showScreen('quiz-setup'));
        document.getElementById('main-menu-button').addEventListener('click', () => showScreen('main-menu'));
        
        // Progress screen
        document.getElementById('back-to-menu-from-progress').addEventListener('click', () => showScreen('main-menu'));
        
        debug.log("Event listeners set up successfully");
    } catch (error) {
        debug.error(`Error setting up event listeners: ${error.message}`);
    }
}

// Setup debug console
function setupDebugConsole() {
    try {
        const toggleDebugBtn = document.getElementById('toggle-debug');
        const closeDebugBtn = document.getElementById('close-debug');
        const debugConsole = document.getElementById('debug-console');
        
        toggleDebugBtn.addEventListener('click', () => {
            debugConsole.classList.toggle('hidden');
        });
        
        closeDebugBtn.addEventListener('click', () => {
            debugConsole.classList.add('hidden');
        });
        
        debug.log("Debug console initialized");
    } catch (error) {
        console.error(`Error setting up debug console: ${error.message}`);
    }
}

// Login function
function login() {
    debug.log("Login attempt");
    
    try {
        const username = document.getElementById('username-input').value.trim();
        const pin = document.getElementById('pin-input').value.trim();
        
        if (!validateInputs(username, pin)) return;
        
        if (userProgress.login(username, pin)) {
            showMainMenu();
            clearInputFields();
            showMessage('success', 'Login successful!');
        } else {
            showLoginMessage('error', 'Invalid username or PIN');
        }
    } catch (error) {
        debug.error(`Login error: ${error.message}`);
        showLoginMessage('error', 'An error occurred during login');
    }
}

// Register function
function register() {
    debug.log("Registration attempt");
    
    try {
        const username = document.getElementById('username-input').value.trim();
        const pin = document.getElementById('pin-input').value.trim();
        
        if (!validateInputs(username, pin)) return;
        
        if (userProgress.register(username, pin)) {
            showMainMenu();
            clearInputFields();
            showMessage('success', 'Registration successful!');
        } else {
            showLoginMessage('error', 'Username already exists');
        }
    } catch (error) {
        debug.error(`Registration error: ${error.message}`);
        showLoginMessage('error', 'An error occurred during registration');
    }
}

// Login as guest
function loginAsGuest() {
    debug.log("Guest login attempt");
    
    try {
        if (userProgress.loginAsGuest()) {
            showMainMenu();
            clearInputFields();
            showMessage('info', 'Logged in as Guest. Progress will not be saved.');
        } else {
            showLoginMessage('error', 'An error occurred during guest login');
        }
    } catch (error) {
        debug.error(`Guest login error: ${error.message}`);
        showLoginMessage('error', 'An error occurred during guest login');
    }
}

// Logout
function logout() {
    debug.log("Logout attempt");
    
    try {
        userProgress.logout();
        showScreen('login-screen');
        showMessage('info', 'Logged out successfully');
    } catch (error) {
        debug.error(`Logout error: ${error.message}`);
        showMessage('error', 'An error occurred during logout');
    }
}

// Validate login/register inputs
function validateInputs(username, pin) {
    debug.log("Validating inputs");
    
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
    debug.log(`Login message: ${message} (${type})`);
    
    try {
        const loginMessage = document.getElementById('login-message');
        loginMessage.textContent = message;
        loginMessage.className = `message ${type}`;
        loginMessage.style.display = 'block';
        
        // Hide message after 3 seconds
        setTimeout(() => {
            loginMessage.style.display = 'none';
        }, 3000);
    } catch (error) {
        debug.error(`Error showing login message: ${error.message}`);
    }
}

// Show main menu
function showMainMenu() {
    debug.log("Showing main menu");
    
    try {
        showScreen('main-menu');
        const currentUser = userProgress.currentUser;
        
        if (currentUser) {
            const welcomeMessage = document.getElementById('welcome-message');
            welcomeMessage.textContent = `Welcome, ${currentUser.username}!`;
            
            // Add warning for guest
            if (currentUser.username === 'Guest') {
                const guestWarning = document.createElement('div');
                guestWarning.className = 'guest-warning';
                guestWarning.textContent = 'Note: Progress will not be saved in Guest mode';
                welcomeMessage.appendChild(guestWarning);
            }
        }
    } catch (error) {
        debug.error(`Error showing main menu: ${error.message}`);
    }
}

// Quiz state variables
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let userAnswers = [];

// Start quiz
function startQuiz() {
    debug.log("Starting quiz");
    
    try {
        const numQuestions = parseInt(document.getElementById('num-questions').value);
        const questionType = document.getElementById('question-type').value;
        
        // Filter questions by type
        let filteredQuestions = latinQuestionsEnhanced;
        if (questionType !== 'all') {
            filteredQuestions = latinQuestionsEnhanced.filter(q => q.category === questionType);
            debug.log(`Filtered to ${filteredQuestions.length} questions of type ${questionType}`);
        }
        
        // Check if we have enough questions
        if (filteredQuestions.length < numQuestions) {
            showMessage('warning', `Only ${filteredQuestions.length} questions available for this category. Using all available questions.`);
            debug.warn(`Not enough questions for selected category: requested ${numQuestions}, available ${filteredQuestions.length}`);
        }
        
        // Select random questions
        currentQuestions = getRandomQuestions(filteredQuestions, Math.min(numQuestions, filteredQuestions.length));
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        
        debug.log(`Quiz started with ${currentQuestions.length} questions`);
        
        // Show quiz screen
        showScreen('quiz-screen');
        showQuestion();
    } catch (error) {
        debug.error(`Error starting quiz: ${error.message}`);
        showMessage('error', 'An error occurred while starting the quiz');
    }
}

// Get random questions
function getRandomQuestions(questions, num) {
    debug.log(`Getting ${num} random questions from ${questions.length} available`);
    
    try {
        // Create a copy of the questions array
        const questionsCopy = [...questions];
        
        // Shuffle using Fisher-Yates algorithm
        for (let i = questionsCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questionsCopy[i], questionsCopy[j]] = [questionsCopy[j], questionsCopy[i]];
        }
        
        // Return the requested number of questions
        return questionsCopy.slice(0, num);
    } catch (error) {
        debug.error(`Error getting random questions: ${error.message}`);
        return questions.slice(0, num); // Fallback to non-random selection
    }
}

// Show current question
function showQuestion() {
    debug.log(`Showing question ${currentQuestionIndex + 1}/${currentQuestions.length}`);
    
    try {
        const question = currentQuestions[currentQuestionIndex];
        
        // Update progress
        const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('progress-text').textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
        
        // Update question text
        document.getElementById('question-text').textContent = question.question;
        
        // Clear previous choices
        const choicesContainer = document.getElementById('choices-container');
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
        document.getElementById('feedback-container').classList.add('hidden');
        document.getElementById('hint-box').classList.add('hidden');
        document.getElementById('next-button').classList.add('hidden');
        
        // Reset state
        selectedAnswer = null;
    } catch (error) {
        debug.error(`Error showing question: ${error.message}`);
        showMessage('error', 'An error occurred while displaying the question');
    }
}

// Shuffle array
function shuffleArray(array) {
    debug.log("Shuffling array");
    
    try {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    } catch (error) {
        debug.error(`Error shuffling array: ${error.message}`);
        return array; // Return original array if error
    }
}

// Select an answer choice
function selectChoice(choiceElement, choice) {
    debug.log(`Selected answer: ${choice}`);
    
    try {
        // If already answered, do nothing
        if (selectedAnswer !== null) {
            debug.log("Answer already selected, ignoring");
            return;
        }
        
        const question = currentQuestions[currentQuestionIndex];
        const isCorrect = choice === question.correctAnswer;
        selectedAnswer = choice;
        
        debug.log(`Answer is ${isCorrect ? 'correct' : 'incorrect'}`);
        
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
        const feedbackContainer = document.getElementById('feedback-container');
        feedbackContainer.innerHTML = isCorrect ? 
            '<div class="feedback-correct"><h3>✓ Correct!</h3></div>' : 
            `<div class="feedback-incorrect"><h3>✗ Incorrect!</h3><p>The correct answer is: ${question.correctAnswer}</p></div>`;
        
        feedbackContainer.classList.remove('hidden');
        
        // Show next button
        document.getElementById('next-button').classList.remove('hidden');
        
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
            isCorrect: isCorrect,
            category: question.category
        });
    } catch (error) {
        debug.error(`Error selecting choice: ${error.message}`);
        showMessage('error', 'An error occurred while processing your answer');
    }
}

// Show hint for current question
function showHint() {
    debug.log("Showing hint");
    
    try {
        const question = currentQuestions[currentQuestionIndex];
        const hintBox = document.getElementById('hint-box');
        
        if (question && question.hint) {
            hintBox.textContent = `💡 Hint: ${question.hint}`;
            hintBox.classList.remove('hidden');
        } else {
            showMessage('info', 'No hint available for this question');
        }
    } catch (error) {
        debug.error(`Error showing hint: ${error.message}`);
    }
}

// Go to next question
function goToNextQuestion() {
    debug.log("Moving to next question");
    
    try {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < currentQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    } catch (error) {
        debug.error(`Error going to next question: ${error.message}`);
        showMessage('error', 'An error occurred while advancing to the next question');
    }
}

// Show quiz results
function showResults() {
    debug.log("Showing quiz results");
    
    try {
        // Switch to results screen
        showScreen('results-screen');
        
        // Update score display
        const scoreValue = document.getElementById('score-value');
        const totalQuestions = document.getElementById('total-questions');
        const scorePercentage = document.getElementById('score-percentage');
        const scoreFeedback = document.getElementById('score-feedback');
        
        scoreValue.textContent = score;
        totalQuestions.textContent = currentQuestions.length;
        
        const percentage = Math.round((score / currentQuestions.length) * 100);
        scorePercentage.textContent = `${percentage}%`;
        
        // Provide feedback based on score
        let feedbackText, feedbackClass;
        if (percentage >= 90) {
            feedbackText = "Outstanding! Excellent Latin knowledge!";
            feedbackClass = "excellent";
        } else if (percentage >= 80) {
            feedbackText = "Great job! You have a strong understanding of Latin!";
            feedbackClass = "great";
        } else if (percentage >= 70) {
            feedbackText = "Good work! Keep studying to improve further.";
            feedbackClass = "good";
        } else if (percentage >= 60) {
            feedbackText = "Satisfactory. More practice would be beneficial.";
            feedbackClass = "satisfactory";
        } else {
            feedbackText = "More study recommended. Don't give up!";
            feedbackClass = "needs-work";
        }
        
        scoreFeedback.textContent = feedbackText;
        scoreFeedback.className = `score-feedback ${feedbackClass}`;
        
        // Show answer review
        const answersReview = document.getElementById('answers-review');
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
    } catch (error) {
        debug.error(`Error showing results: ${error.message}`);
        showMessage('error', 'An error occurred while displaying the results');
    }
}

// Show progress statistics
function showProgressScreen() {
    debug.log("Showing progress screen");
    
    try {
        showScreen('progress-screen');
        
        const stats = userProgress.getStats();
        const progressStats = document.getElementById('progress-stats');
        
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
        
        let hasCategories = false;
        
        for (const [category, categoryStats] of Object.entries(stats.categoryStats || {})) {
            hasCategories = true;
            const accuracy = categoryStats.total > 0 ? Math.round((categoryStats.correct / categoryStats.total) * 100) : 0;
            statsHtml += `
                <div class="category-item">
                    <div class="category-name">${categories[category] || category}</div>
                    <div class="category-progress">
                        <div class="category-bar" style="width: ${accuracy}%"></div>
                    </div>
                    <div class="category-stats">
                        ${categoryStats.correct}/${categoryStats.total} (${accuracy}%)
                    </div>
                </div>
            `;
        }
        
        if (!hasCategories) {
            statsHtml += '<p class="no-stats">No category data available yet.</p>';
        }
        
        statsHtml += '</div>';
        
        progressStats.innerHTML = statsHtml;
    } catch (error) {
        debug.error(`Error showing progress screen: ${error.message}`);
        showMessage('error', 'An error occurred while displaying progress statistics');
    }
}

// Show a screen
function showScreen(screenId) {
    debug.log(`Showing screen: ${screenId}`);
    
    try {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show requested screen
        document.getElementById(screenId).classList.add('active');
    } catch (error) {
        debug.error(`Error showing screen ${screenId}: ${error.message}`);
    }
}

// Show message notification
function showMessage(type, message) {
    debug.log(`Showing message: ${message} (${type})`);
    
    try {
        // Remove any existing messages
        const existingMessages = document.querySelectorAll('.message:not(#login-message)');
        existingMessages.forEach(msg => msg.remove());
        
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
    } catch (error) {
        debug.error(`Error showing message: ${error.message}`);
    }
}

// Clear login input fields
function clearInputFields() {
    debug.log("Clearing input fields");
    
    try {
        document.getElementById('username-input').value = '';
        document.getElementById('pin-input').value = '';
    } catch (error) {
        debug.error(`Error clearing input fields: ${error.message}`);
    }
}