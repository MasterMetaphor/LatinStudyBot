// Latin Quiz Questions
// This file contains a subset of the questions from the expanded question set

const latinQuestions = [
    // ===== Case Functions =====
    {
        question: "What is the function of the Nominative Case?",
        correctAnswer: "Subject",
        incorrectAnswers: ["Direct Object", "Possession", "Indirect Object"]
    },
    {
        question: "What is the function of the Genitive Case?",
        correctAnswer: "Possession",
        incorrectAnswers: ["Subject", "Direct Object", "Indirect Object"]
    },
    {
        question: "What is the function of the Dative Case?",
        correctAnswer: "Indirect Object",
        incorrectAnswers: ["Subject", "Direct Object", "Possession"]
    },
    {
        question: "What is the function of the Accusative Case?",
        correctAnswer: "Direct Object",
        incorrectAnswers: ["Subject", "Possession", "Indirect Object"]
    },
    {
        question: "What is the function of the Ablative Case?",
        correctAnswer: "Means/Instrument",
        incorrectAnswers: ["Subject", "Direct Object", "Possession"]
    },
    {
        question: "What is the function of the Vocative Case?",
        correctAnswer: "Direct Address",
        incorrectAnswers: ["Subject", "Direct Object", "Possession"]
    },
    {
        question: "What is the function of the Locative Case?",
        correctAnswer: "Location",
        incorrectAnswers: ["Subject", "Direct Object", "Possession"]
    },

    // ===== Declensions =====
    {
        question: "Which declension is 'puella'?",
        correctAnswer: "1st",
        incorrectAnswers: ["2nd", "3rd", "4th"],
        category: "nouns"
    },
    {
        question: "Which declension is 'servus'?",
        correctAnswer: "2nd",
        incorrectAnswers: ["1st", "3rd", "4th"],
        category: "nouns"
    },
    {
        question: "Which declension is 'rex'?",
        correctAnswer: "3rd",
        incorrectAnswers: ["1st", "2nd", "4th"],
        category: "nouns"
    },
    {
        question: "Which declension is 'manus'?",
        correctAnswer: "4th",
        incorrectAnswers: ["1st", "2nd", "3rd"],
        category: "nouns"
    },
    {
        question: "Which declension is 'dies'?",
        correctAnswer: "5th",
        incorrectAnswers: ["1st", "2nd", "3rd"],
        category: "nouns"
    },

    // ===== Noun Forms =====
    {
        question: "Form the Genitive singular of \"puella, puellae\" (f)",
        correctAnswer: "puellae",
        incorrectAnswers: ["puella", "puellam", "puellarum"],
        category: "nouns"
    },
    {
        question: "Form the Accusative singular of \"terra, terrae\" (f)",
        correctAnswer: "terram",
        incorrectAnswers: ["terra", "terrae", "terras"],
        category: "nouns"
    },
    {
        question: "Form the Dative plural of \"servus, servi\" (m)",
        correctAnswer: "servis",
        incorrectAnswers: ["servo", "servos", "servorum"],
        category: "nouns"
    },
    {
        question: "Form the Ablative singular of \"rex, regis\" (m)",
        correctAnswer: "rege",
        incorrectAnswers: ["rex", "regem", "regibus"],
        category: "nouns"
    },

    // ===== Verb Conjugations =====
    {
        question: "Which conjugation is 'amo'?",
        correctAnswer: "1st",
        incorrectAnswers: ["2nd", "3rd", "4th"],
        category: "verbs"
    },
    {
        question: "Which conjugation is 'moneo'?",
        correctAnswer: "2nd",
        incorrectAnswers: ["1st", "3rd", "4th"],
        category: "verbs"
    },
    {
        question: "Which conjugation is 'dico'?",
        correctAnswer: "3rd",
        incorrectAnswers: ["1st", "2nd", "4th"],
        category: "verbs"
    },
    {
        question: "Which conjugation is 'audio'?",
        correctAnswer: "4th",
        incorrectAnswers: ["1st", "2nd", "3rd"],
        category: "verbs"
    },
    {
        question: "Which conjugation is 'sum'?",
        correctAnswer: "irregular",
        incorrectAnswers: ["1st", "2nd", "3rd"],
        category: "verbs"
    },

    // ===== Verb Forms =====
    {
        question: "What is the 1st person singular Present tense form of 'amo'?",
        correctAnswer: "amo",
        incorrectAnswers: ["amas", "amat", "amamus"],
        category: "verbs"
    },
    {
        question: "What is the 3rd person plural Imperfect tense form of 'moneo'?",
        correctAnswer: "monebant",
        incorrectAnswers: ["monent", "monebat", "monent"],
        category: "verbs"
    },
    {
        question: "What is the 2nd person singular Future tense form of 'dico'?",
        correctAnswer: "dices",
        incorrectAnswers: ["dicis", "dicet", "dicemus"],
        category: "verbs"
    },

    // ===== Sentences =====
    {
        question: "Puella servum videt.\nWhich word is the subject (Nominative) in this sentence?",
        correctAnswer: "puella",
        incorrectAnswers: ["servum", "videt", "in + abl"],
        category: "sentences"
    },
    {
        question: "Servi puellam laudant.\nWhich word is the direct object (Accusative) in this sentence?",
        correctAnswer: "puellam",
        incorrectAnswers: ["servi", "laudant", "cum + abl"],
        category: "sentences"
    },
    {
        question: "Translate: Puer donum puellae dat.",
        correctAnswer: "The boy gives a gift to the girl.",
        incorrectAnswers: ["The boy gives a gift of the girl.", "The girl gives a gift to the boy.", "The boys give gifts to the girls."],
        category: "sentences"
    },

    // ===== Adjectives =====
    {
        question: "What is the correct form of 'bonus, bona, bonum' to agree with 'puella' (f, Nominative singular)?",
        correctAnswer: "bona",
        incorrectAnswers: ["bonus", "bonum", "bonae"],
        category: "adjectives"
    },
    {
        question: "What is the correct form of 'magnus, magna, magnum' to agree with 'servus' (m, Nominative singular)?",
        correctAnswer: "magnus",
        incorrectAnswers: ["magna", "magnum", "magni"],
        category: "adjectives"
    },
    {
        question: "What is the correct form of 'parvus, parva, parvum' to agree with 'bellum' (n, Nominative singular)?",
        correctAnswer: "parvum",
        incorrectAnswers: ["parvus", "parva", "parvi"],
        category: "adjectives"
    },

    // ===== Prepositions =====
    {
        question: "Which case(s) does the preposition 'in' take?",
        correctAnswer: "Accusative and Ablative",
        incorrectAnswers: ["Nominative", "Genitive", "Dative"]
    },
    {
        question: "What does 'in' + Accusative mean?",
        correctAnswer: "into, onto",
        incorrectAnswers: ["in, on", "alongside", "between"]
    },
    {
        question: "What does 'in' + Ablative mean?",
        correctAnswer: "in, on",
        incorrectAnswers: ["into, onto", "beyond", "after"]
    },
    {
        question: "Which case does the preposition 'cum' take?",
        correctAnswer: "Ablative",
        incorrectAnswers: ["Nominative", "Genitive", "Accusative"]
    }
];

// Add categories to all questions if not already specified
latinQuestions.forEach(q => {
    if (!q.category) {
        if (q.question.includes("Case")) {
            q.category = "cases";
        } else if (q.question.includes("declension") || q.question.includes("Genitive") || 
                  q.question.includes("Dative") || q.question.includes("Accusative") || 
                  q.question.includes("Ablative") || q.question.includes("Form the")) {
            q.category = "nouns";
        } else if (q.question.includes("conjugation") || q.question.includes("Present tense") || 
                  q.question.includes("Imperfect tense") || q.question.includes("Future tense")) {
            q.category = "verbs";
        } else if (q.question.includes("Which word is") || q.question.includes("Translate:")) {
            q.category = "sentences";
        } else if (q.question.includes("agree with")) {
            q.category = "adjectives";
        } else {
            q.category = "other";
        }
    }
});
