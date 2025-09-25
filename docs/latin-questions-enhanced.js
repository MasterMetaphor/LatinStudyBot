// Enhanced Latin Quiz Questions
// Includes expanded question set with sentence translations and hints

const latinQuestionsEnhanced = [
    // ===== Case Functions =====
    {
        question: "What is the function of the Nominative Case?",
        correctAnswer: "Subject",
        incorrectAnswers: ["Direct Object", "Possession", "Indirect Object"],
        category: "cases",
        hint: "The Nominative case is used for the subject of a sentence."
    },
    {
        question: "What is the function of the Genitive Case?",
        correctAnswer: "Possession",
        incorrectAnswers: ["Subject", "Direct Object", "Indirect Object"],
        category: "cases",
        hint: "The Genitive case indicates possession or belonging."
    },
    {
        question: "What is the function of the Dative Case?",
        correctAnswer: "Indirect Object",
        incorrectAnswers: ["Subject", "Direct Object", "Possession"],
        category: "cases",
        hint: "The Dative case is for the indirect object, often translated as 'to/for'."
    },
    {
        question: "What is the function of the Accusative Case?",
        correctAnswer: "Direct Object",
        incorrectAnswers: ["Subject", "Possession", "Indirect Object"],
        category: "cases",
        hint: "The Accusative case marks the direct object of a verb."
    },
    {
        question: "What is the function of the Ablative Case?",
        correctAnswer: "Means/Instrument",
        incorrectAnswers: ["Subject", "Direct Object", "Possession"],
        category: "cases",
        hint: "The Ablative case often shows means, manner, or accompaniment."
    },

    // ===== Declensions =====
    {
        question: "Which declension is 'puella'?",
        correctAnswer: "1st",
        incorrectAnswers: ["2nd", "3rd", "4th"],
        category: "nouns",
        hint: "First declension nouns typically end in -a in the nominative singular."
    },
    {
        question: "Which declension is 'servus'?",
        correctAnswer: "2nd",
        incorrectAnswers: ["1st", "3rd", "4th"],
        category: "nouns",
        hint: "Second declension masculine nouns typically end in -us in the nominative singular."
    },
    {
        question: "Which declension is 'rex'?",
        correctAnswer: "3rd",
        incorrectAnswers: ["1st", "2nd", "4th"],
        category: "nouns",
        hint: "Third declension nouns have various nominative endings and -is in genitive singular."
    },

    // ===== Noun Forms =====
    {
        question: "Form the Genitive singular of \"puella, puellae\" (f)",
        correctAnswer: "puellae",
        incorrectAnswers: ["puella", "puellam", "puellarum"],
        category: "nouns",
        hint: "First declension genitive singular ending is -ae."
    },
    {
        question: "Form the Accusative singular of \"terra, terrae\" (f)",
        correctAnswer: "terram",
        incorrectAnswers: ["terra", "terrae", "terras"],
        category: "nouns",
        hint: "First declension accusative singular ending is -am."
    },
    {
        question: "Form the Dative plural of \"servus, servi\" (m)",
        correctAnswer: "servis",
        incorrectAnswers: ["servo", "servos", "servorum"],
        category: "nouns",
        hint: "Second declension dative plural ending is -is."
    },

    // ===== Verb Conjugations =====
    {
        question: "Which conjugation is 'amo'?",
        correctAnswer: "1st",
        incorrectAnswers: ["2nd", "3rd", "4th"],
        category: "verbs",
        hint: "First conjugation verbs have infinitive ending -āre (amare)."
    },
    {
        question: "Which conjugation is 'moneo'?",
        correctAnswer: "2nd",
        incorrectAnswers: ["1st", "3rd", "4th"],
        category: "verbs",
        hint: "Second conjugation verbs have infinitive ending -ēre (monere)."
    },
    {
        question: "Which conjugation is 'dico'?",
        correctAnswer: "3rd",
        incorrectAnswers: ["1st", "2nd", "4th"],
        category: "verbs",
        hint: "Third conjugation verbs have infinitive ending -ere (dicere)."
    },

    // ===== Verb Forms =====
    {
        question: "What is the 1st person singular Present tense form of 'amo'?",
        correctAnswer: "amo",
        incorrectAnswers: ["amas", "amat", "amamus"],
        category: "verbs",
        hint: "First person singular present tense ending is -o for 1st conjugation."
    },
    {
        question: "What is the 3rd person plural Imperfect tense form of 'moneo'?",
        correctAnswer: "monebant",
        incorrectAnswers: ["monent", "monebat", "monebamus"],
        category: "verbs",
        hint: "Imperfect tense uses stem + ba + personal ending (-nt for 3rd person plural)."
    },
    {
        question: "What is the 2nd person singular Future tense form of 'amo'?",
        correctAnswer: "amabis",
        incorrectAnswers: ["amas", "amabas", "amabitis"],
        category: "verbs",
        hint: "Future tense for 1st conjugation uses -bi- plus personal ending (-s for 2nd person singular)."
    },

    // ===== Enhanced Sentence Translations =====
    {
        question: "Translate: Puella servum videt.",
        correctAnswer: "The girl sees the slave.",
        incorrectAnswers: ["The slave sees the girl.", "The girl calls the slave.", "The slave hears the girl."],
        category: "translation",
        hint: "Puella (girl) is nominative (subject), servum (slave) is accusative (direct object)."
    },
    {
        question: "Translate: Servi puellam laudant.",
        correctAnswer: "The slaves praise the girl.",
        incorrectAnswers: ["The slave praises the girls.", "The girls praise the slave.", "The slave girls are praising."],
        category: "translation",
        hint: "Servi (slaves) is nominative plural (subject), puellam (girl) is accusative singular (direct object)."
    },
    {
        question: "Translate: Regina regem amat.",
        correctAnswer: "The queen loves the king.",
        incorrectAnswers: ["The king loves the queen.", "The queen rules the king.", "The queen calls the king."],
        category: "translation",
        hint: "Regina (queen) is nominative (subject), regem (king) is accusative (direct object)."
    },
    {
        question: "Translate: Magister discipulos docet.",
        correctAnswer: "The teacher teaches the students.",
        incorrectAnswers: ["The students teach the teacher.", "The teacher calls the students.", "The students hear the teacher."],
        category: "translation",
        hint: "Magister (teacher) is nominative (subject), discipulos (students) is accusative plural (direct object)."
    },
    {
        question: "Translate: Puer donum puellae dat.",
        correctAnswer: "The boy gives a gift to the girl.",
        incorrectAnswers: ["The girl gives a gift to the boy.", "The boy receives a gift from the girl.", "The girl receives the boy's gift."],
        category: "translation",
        hint: "Puer (boy) is nominative (subject), donum (gift) is accusative (direct object), puellae (to the girl) is dative."
    },
    {
        question: "Translate: Magistra discipulas laudat.",
        correctAnswer: "The teacher (female) praises the students (female).",
        incorrectAnswers: ["The student praises the teacher.", "The teacher calls the students.", "The students praise the teacher."],
        category: "translation",
        hint: "Magistra (female teacher) is nominative (subject), discipulas (female students) is accusative (direct object)."
    },
    {
        question: "Translate: Poeta puellae rosam dat.",
        correctAnswer: "The poet gives a rose to the girl.",
        incorrectAnswers: ["The poet gives a girl to the rose.", "The girl gives a rose to the poet.", "The poet sees the girl's rose."],
        category: "translation",
        hint: "Poeta (poet) is nominative (subject), rosam (rose) is accusative (direct object), puellae (to the girl) is dative."
    },
    {
        question: "Translate: Bonus magister parvos pueros docet.",
        correctAnswer: "The good teacher teaches the small boys.",
        incorrectAnswers: ["The small teacher teaches the good boys.", "The teacher teaches the good small boys.", "The good small boys teach the teacher."],
        category: "translation",
        hint: "Bonus magister (good teacher) is the subject, parvos pueros (small boys) is the direct object. Adjectives agree with their nouns."
    },
    {
        question: "Translate: Puella in villa habitat.",
        correctAnswer: "The girl lives in the house.",
        incorrectAnswers: ["The girl walks into the house.", "The house contains the girl.", "The girl is standing in the house."],
        category: "translation",
        hint: "In + ablative (villa) indicates location (in/on/at), not motion."
    },
    {
        question: "Translate: Rex ad reginam ambulat.",
        correctAnswer: "The king walks to the queen.",
        incorrectAnswers: ["The king walks with the queen.", "The queen walks to the king.", "The king stands near the queen."],
        category: "translation",
        hint: "Ad + accusative (reginam) indicates motion toward."
    },
    {
        question: "Translate: Pueri in agris laborabant.",
        correctAnswer: "The boys were working in the fields.",
        incorrectAnswers: ["The boys work in the fields.", "The boys will work in the fields.", "The fields were worked by the boys."],
        category: "translation",
        hint: "Imperfect tense ending -bant indicates past continuous action ('were working')."
    },
    {
        question: "Translate: Regina servos vocabit.",
        correctAnswer: "The queen will call the slaves.",
        incorrectAnswers: ["The queen called the slaves.", "The queen is calling the slaves.", "The slaves will call the queen."],
        category: "translation",
        hint: "Future tense ending -bit indicates future action ('will call')."
    },

    // ===== Sentences =====
    {
        question: "Puella servum videt.\nWhich word is the subject (Nominative) in this sentence?",
        correctAnswer: "puella",
        incorrectAnswers: ["servum", "videt", "none of these"],
        category: "sentences",
        hint: "The subject is in the nominative case and performs the action of the verb."
    },
    {
        question: "Servi puellam laudant.\nWhich word is the direct object (Accusative) in this sentence?",
        correctAnswer: "puellam",
        incorrectAnswers: ["servi", "laudant", "none of these"],
        category: "sentences",
        hint: "The direct object is in the accusative case and receives the action of the verb."
    },

    // ===== Adjectives =====
    {
        question: "What is the correct form of 'bonus, bona, bonum' to agree with 'puella' (f, Nominative singular)?",
        correctAnswer: "bona",
        incorrectAnswers: ["bonus", "bonum", "bonae"],
        category: "adjectives",
        hint: "Adjectives must match their nouns in gender, case, and number. Puella is feminine."
    },
    {
        question: "What is the correct form of 'magnus, magna, magnum' to agree with 'servus' (m, Nominative singular)?",
        correctAnswer: "magnus",
        incorrectAnswers: ["magna", "magnum", "magni"],
        category: "adjectives",
        hint: "Adjectives must match their nouns in gender, case, and number. Servus is masculine."
    },
    {
        question: "What is the correct form of 'parvus, parva, parvum' to agree with 'bellum' (n, Nominative singular)?",
        correctAnswer: "parvum",
        incorrectAnswers: ["parvus", "parva", "parvi"],
        category: "adjectives",
        hint: "Adjectives must match their nouns in gender, case, and number. Bellum is neuter."
    },

    // ===== Prepositions =====
    {
        question: "Which case(s) does the preposition 'in' take?",
        correctAnswer: "Accusative and Ablative",
        incorrectAnswers: ["Nominative", "Genitive", "Dative"],
        category: "grammar",
        hint: "In + accusative indicates motion toward/into; in + ablative indicates location."
    },
    {
        question: "What does 'in' + Accusative mean?",
        correctAnswer: "into, onto",
        incorrectAnswers: ["in, on", "alongside", "between"],
        category: "grammar",
        hint: "In + accusative indicates motion toward/into a place."
    },
    {
        question: "What does 'in' + Ablative mean?",
        correctAnswer: "in, on",
        incorrectAnswers: ["into, onto", "beyond", "after"],
        category: "grammar",
        hint: "In + ablative indicates location or position (no motion)."
    }
];

// User Progress System
class UserProgress {
    constructor() {
        this.currentUser = null;
        this.users = {};
        this.loadFromStorage();
    }

    // Load data from localStorage
    loadFromStorage() {
        const savedData = localStorage.getItem('latinQuizUsers');
        if (savedData) {
            this.users = JSON.parse(savedData);
        }
    }

    // Save data to localStorage
    saveToStorage() {
        localStorage.setItem('latinQuizUsers', JSON.stringify(this.users));
    }

    // Create or get user
    getUser(username, pin, createIfNotExists = false) {
        // For guest user
        if (username === 'Guest') {
            return {
                username: 'Guest',
                pin: '0000',
                stats: {
                    totalQuestions: 0,
                    correctAnswers: 0,
                    streak: 0,
                    bestStreak: 0,
                    categoryStats: {}
                },
                answeredQuestions: {}
            };
        }
        
        // Check if user exists
        if (this.users[username]) {
            // Validate PIN
            if (this.users[username].pin === pin) {
                return this.users[username];
            } else {
                return null; // Invalid PIN
            }
        } else if (createIfNotExists) {
            // Create new user
            this.users[username] = {
                username: username,
                pin: pin,
                stats: {
                    totalQuestions: 0,
                    correctAnswers: 0,
                    streak: 0,
                    bestStreak: 0,
                    categoryStats: {}
                },
                answeredQuestions: {}
            };
            this.saveToStorage();
            return this.users[username];
        } else {
            return null; // User doesn't exist
        }
    }

    // Log in a user
    login(username, pin) {
        const user = this.getUser(username, pin);
        if (user) {
            this.currentUser = user;
            return true;
        }
        return false;
    }

    // Register a new user
    register(username, pin) {
        // Check if user already exists
        if (this.users[username]) {
            return false;
        }
        
        // Create new user
        const user = this.getUser(username, pin, true);
        this.currentUser = user;
        return true;
    }

    // Login as guest
    loginAsGuest() {
        this.currentUser = this.getUser('Guest', '0000', true);
        return true;
    }

    // Log out current user
    logout() {
        this.currentUser = null;
    }

    // Update user stats after answering a question
    updateStats(questionId, isCorrect, category) {
        if (!this.currentUser) return;
        
        // Skip saving for guest user
        if (this.currentUser.username === 'Guest') return;
        
        // Update general stats
        this.currentUser.stats.totalQuestions++;
        
        if (isCorrect) {
            this.currentUser.stats.correctAnswers++;
            this.currentUser.stats.streak++;
            
            // Update best streak
            if (this.currentUser.stats.streak > this.currentUser.stats.bestStreak) {
                this.currentUser.stats.bestStreak = this.currentUser.stats.streak;
            }
        } else {
            this.currentUser.stats.streak = 0;
        }
        
        // Update category stats
        if (!this.currentUser.stats.categoryStats[category]) {
            this.currentUser.stats.categoryStats[category] = {
                total: 0,
                correct: 0
            };
        }
        
        this.currentUser.stats.categoryStats[category].total++;
        if (isCorrect) {
            this.currentUser.stats.categoryStats[category].correct++;
        }
        
        // Record answered question
        this.currentUser.answeredQuestions[questionId] = {
            isCorrect: isCorrect,
            timestamp: Date.now()
        };
        
        // Save changes
        this.saveToStorage();
    }

    // Get current user's stats
    getStats() {
        if (!this.currentUser) return null;
        return this.currentUser.stats;
    }
}

// Initialize user progress
const userProgress = new UserProgress();
