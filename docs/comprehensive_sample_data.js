// Comprehensive sample data with grammar information (116+ words from chapters 1-6)
const comprehensiveSampleData = [
    // Chapter 1 - First Declension & Present Tense
    { latin: "agricola", english: "farmer", part_of_speech: "noun", declension: "1st", gender: "masculine", hint: "First declension masculine noun ending in -a" },
    { latin: "amica", english: "friend (female)", part_of_speech: "noun", declension: "1st", gender: "feminine", hint: "First declension feminine noun" },
    { latin: "fama", english: "fame, reputation", part_of_speech: "noun", declension: "1st", gender: "feminine", hint: "First declension feminine noun" },
    { latin: "femina", english: "woman", part_of_speech: "noun", declension: "1st", gender: "feminine", hint: "First declension feminine noun" },
    { latin: "filia", english: "daughter", part_of_speech: "noun", declension: "1st", gender: "feminine", hint: "First declension feminine noun" },
    { latin: "fortuna", english: "fortune, luck", part_of_speech: "noun", declension: "1st", gender: "feminine", hint: "First declension feminine noun" },
    { latin: "insula", english: "island", part_of_speech: "noun", declension: "1st", gender: "feminine", hint: "First declension feminine noun" },
    { latin: "littera", english: "letter (of alphabet)", part_of_speech: "noun", declension: "1st", gender: "feminine", hint: "First declension feminine noun" },
    { latin: "patria", english: "fatherland, country", part_of_speech: "noun", declension: "1st", gender: "feminine", hint: "First declension feminine noun" },
    { latin: "pecunia", english: "money", part_of_speech: "noun", declension: "1st", gender: "feminine", hint: "First declension feminine noun" },
    { latin: "puella", english: "girl", part_of_speech: "noun", declension: "1st", gender: "feminine", hint: "First declension feminine noun" },
    { latin: "poeta", english: "poet", part_of_speech: "noun", declension: "1st", gender: "masculine", hint: "First declension masculine noun" },
    { latin: "regina", english: "queen", part_of_speech: "noun", declension: "1st", gender: "feminine", hint: "First declension feminine noun" },
    { latin: "silva", english: "forest", part_of_speech: "noun", declension: "1st", gender: "feminine", hint: "First declension feminine noun" },
    { latin: "terra", english: "land, earth", part_of_speech: "noun", declension: "1st", gender: "feminine", hint: "First declension feminine noun" },
    { latin: "via", english: "road, way", part_of_speech: "noun", declension: "1st", gender: "feminine", hint: "First declension feminine noun" },
    { latin: "vita", english: "life", part_of_speech: "noun", declension: "1st", gender: "feminine", hint: "First declension feminine noun" },
    { latin: "nauta", english: "sailor", part_of_speech: "noun", declension: "1st", gender: "masculine", hint: "First declension masculine noun" },
    
    // Chapter 1 - Verbs (1st Conjugation)
    { latin: "amo", english: "to love, like", part_of_speech: "verb", conjugation: "1st", tense: "present", voice: "active", hint: "First conjugation present active" },
    { latin: "do", english: "to give", part_of_speech: "verb", conjugation: "1st", tense: "present", voice: "active", hint: "First conjugation present active" },
    { latin: "laudo", english: "to praise", part_of_speech: "verb", conjugation: "1st", tense: "present", voice: "active", hint: "First conjugation present active" },
    { latin: "navigo", english: "to sail", part_of_speech: "verb", conjugation: "1st", tense: "present", voice: "active", hint: "First conjugation present active" },
    { latin: "paro", english: "to prepare, get ready", part_of_speech: "verb", conjugation: "1st", tense: "present", voice: "active", hint: "First conjugation present active" },
    { latin: "porto", english: "to carry", part_of_speech: "verb", conjugation: "1st", tense: "present", voice: "active", hint: "First conjugation present active" },
    { latin: "pugno", english: "to fight", part_of_speech: "verb", conjugation: "1st", tense: "present", voice: "active", hint: "First conjugation present active" },
    { latin: "voco", english: "to call", part_of_speech: "verb", conjugation: "1st", tense: "present", voice: "active", hint: "First conjugation present active" },
    
    // Chapter 1 - Adjectives
    { latin: "bonus", english: "good", part_of_speech: "adjective", declension: "1st/2nd", hint: "First/second declension adjective" },
    { latin: "magnus", english: "large, great", part_of_speech: "adjective", declension: "1st/2nd", hint: "First/second declension adjective" },
    { latin: "malus", english: "bad, evil", part_of_speech: "adjective", declension: "1st/2nd", hint: "First/second declension adjective" },
    { latin: "multus", english: "much, many", part_of_speech: "adjective", declension: "1st/2nd", hint: "First/second declension adjective" },
    { latin: "parvus", english: "small, little", part_of_speech: "adjective", declension: "1st/2nd", hint: "First/second declension adjective" },
    
    // Chapter 1 - Conjunctions & Adverbs
    { latin: "et", english: "and", part_of_speech: "conjunction", hint: "Coordinating conjunction" },
    { latin: "sed", english: "but", part_of_speech: "conjunction", hint: "Coordinating conjunction" },
    { latin: "nunc", english: "now", part_of_speech: "adverb", hint: "Temporal adverb" },
    { latin: "semper", english: "always", part_of_speech: "adverb", hint: "Temporal adverb" },
    
    // Chapter 1 - Irregular Verbs
    { latin: "sum", english: "to be", part_of_speech: "verb", conjugation: "irregular", tense: "present", voice: "active", hint: "Irregular verb - to be" },
    { latin: "possum", english: "to be able, can", part_of_speech: "verb", conjugation: "irregular", tense: "present", voice: "active", hint: "Irregular verb - to be able" },
    
    // Chapter 2 - Second Declension Masculine
    { latin: "amicus", english: "friend (male)", part_of_speech: "noun", declension: "2nd", gender: "masculine", hint: "Second declension masculine noun" },
    { latin: "filius", english: "son", part_of_speech: "noun", declension: "2nd", gender: "masculine", hint: "Second declension masculine noun" },
    { latin: "servus", english: "slave", part_of_speech: "noun", declension: "2nd", gender: "masculine", hint: "Second declension masculine noun" },
    { latin: "vir", english: "man", part_of_speech: "noun", declension: "2nd", gender: "masculine", hint: "Second declension masculine noun" },
    { latin: "puer", english: "boy", part_of_speech: "noun", declension: "2nd", gender: "masculine", hint: "Second declension masculine noun" },
    { latin: "magister", english: "teacher, master", part_of_speech: "noun", declension: "2nd", gender: "masculine", hint: "Second declension masculine noun" },
    { latin: "dominus", english: "master, lord", part_of_speech: "noun", declension: "2nd", gender: "masculine", hint: "Second declension masculine noun" },
    { latin: "liber", english: "book", part_of_speech: "noun", declension: "2nd", gender: "masculine", hint: "Second declension masculine noun" },
    { latin: "ager", english: "field", part_of_speech: "noun", declension: "2nd", gender: "masculine", hint: "Second declension masculine noun" },
    { latin: "populus", english: "people", part_of_speech: "noun", declension: "2nd", gender: "masculine", hint: "Second declension masculine noun" },
    
    // Chapter 2 - Second Declension Neuter
    { latin: "bellum", english: "war", part_of_speech: "noun", declension: "2nd", gender: "neuter", hint: "Second declension neuter noun" },
    { latin: "donum", english: "gift", part_of_speech: "noun", declension: "2nd", gender: "neuter", hint: "Second declension neuter noun" },
    { latin: "oppidum", english: "town", part_of_speech: "noun", declension: "2nd", gender: "neuter", hint: "Second declension neuter noun" },
    { latin: "periculum", english: "danger", part_of_speech: "noun", declension: "2nd", gender: "neuter", hint: "Second declension neuter noun" },
    { latin: "verbum", english: "word", part_of_speech: "noun", declension: "2nd", gender: "neuter", hint: "Second declension neuter noun" },
    { latin: "templum", english: "temple", part_of_speech: "noun", declension: "2nd", gender: "neuter", hint: "Second declension neuter noun" },
    { latin: "forum", english: "forum, marketplace", part_of_speech: "noun", declension: "2nd", gender: "neuter", hint: "Second declension neuter noun" },
    { latin: "caelum", english: "sky, heaven", part_of_speech: "noun", declension: "2nd", gender: "neuter", hint: "Second declension neuter noun" },
    
    // Chapter 2 - Adjectives (2nd Declension)
    { latin: "altus", english: "high, deep", part_of_speech: "adjective", declension: "1st/2nd", hint: "First/second declension adjective" },
    { latin: "longus", english: "long", part_of_speech: "adjective", declension: "1st/2nd", hint: "First/second declension adjective" },
    { latin: "novus", english: "new", part_of_speech: "adjective", declension: "1st/2nd", hint: "First/second declension adjective" },
    { latin: "sacer", english: "sacred, holy", part_of_speech: "adjective", declension: "1st/2nd", hint: "First/second declension adjective" },
    { latin: "verus", english: "true", part_of_speech: "adjective", declension: "1st/2nd", hint: "First/second declension adjective" },
    
    // Chapter 3 - Second Conjugation Verbs
    { latin: "habeo", english: "to have, hold", part_of_speech: "verb", conjugation: "2nd", tense: "present", voice: "active", hint: "Second conjugation present active" },
    { latin: "moneo", english: "to warn, advise", part_of_speech: "verb", conjugation: "2nd", tense: "present", voice: "active", hint: "Second conjugation present active" },
    { latin: "doceo", english: "to teach", part_of_speech: "verb", conjugation: "2nd", tense: "present", voice: "active", hint: "Second conjugation present active" },
    { latin: "teneo", english: "to hold, keep", part_of_speech: "verb", conjugation: "2nd", tense: "present", voice: "active", hint: "Second conjugation present active" },
    { latin: "video", english: "to see", part_of_speech: "verb", conjugation: "2nd", tense: "present", voice: "active", hint: "Second conjugation present active" },
    { latin: "sedeo", english: "to sit", part_of_speech: "verb", conjugation: "2nd", tense: "present", voice: "active", hint: "Second conjugation present active" },
    { latin: "timeo", english: "to fear, be afraid", part_of_speech: "verb", conjugation: "2nd", tense: "present", voice: "active", hint: "Second conjugation present active" },
    { latin: "valeo", english: "to be strong, be well", part_of_speech: "verb", conjugation: "2nd", tense: "present", voice: "active", hint: "Second conjugation present active" },
    
    // Chapter 3 - Additional Nouns
    { latin: "deus", english: "god", part_of_speech: "noun", declension: "2nd", gender: "masculine", hint: "Second declension masculine noun" },
    { latin: "locus", english: "place", part_of_speech: "noun", declension: "2nd", gender: "masculine", hint: "Second declension masculine noun" },
    { latin: "mundus", english: "world", part_of_speech: "noun", declension: "2nd", gender: "masculine", hint: "Second declension masculine noun" },
    
    // Chapter 4 - Third Declension Nouns
    { latin: "rex", english: "king", part_of_speech: "noun", declension: "3rd", gender: "masculine", hint: "Third declension masculine noun" },
    { latin: "lex", english: "law", part_of_speech: "noun", declension: "3rd", gender: "feminine", hint: "Third declension feminine noun" },
    { latin: "lux", english: "light", part_of_speech: "noun", declension: "3rd", gender: "feminine", hint: "Third declension feminine noun" },
    { latin: "pax", english: "peace", part_of_speech: "noun", declension: "3rd", gender: "feminine", hint: "Third declension feminine noun" },
    { latin: "vox", english: "voice", part_of_speech: "noun", declension: "3rd", gender: "feminine", hint: "Third declension feminine noun" },
    { latin: "mors", english: "death", part_of_speech: "noun", declension: "3rd", gender: "feminine", hint: "Third declension feminine noun" },
    { latin: "urbs", english: "city", part_of_speech: "noun", declension: "3rd", gender: "feminine", hint: "Third declension feminine noun" },
    { latin: "civis", english: "citizen", part_of_speech: "noun", declension: "3rd", gender: "masculine/feminine", hint: "Third declension noun" },
    { latin: "miles", english: "soldier", part_of_speech: "noun", declension: "3rd", gender: "masculine", hint: "Third declension masculine noun" },
    { latin: "hostis", english: "enemy", part_of_speech: "noun", declension: "3rd", gender: "masculine", hint: "Third declension masculine noun" },
    
    // Chapter 4 - Third Declension Adjectives
    { latin: "fortis", english: "brave, strong", part_of_speech: "adjective", declension: "3rd", hint: "Third declension adjective" },
    { latin: "gravis", english: "heavy, serious", part_of_speech: "adjective", declension: "3rd", hint: "Third declension adjective" },
    { latin: "brevis", english: "short, brief", part_of_speech: "adjective", declension: "3rd", hint: "Third declension adjective" },
    { latin: "dulcis", english: "sweet", part_of_speech: "adjective", declension: "3rd", hint: "Third declension adjective" },
    { latin: "facilis", english: "easy", part_of_speech: "adjective", declension: "3rd", hint: "Third declension adjective" },
    { latin: "difficilis", english: "difficult", part_of_speech: "adjective", declension: "3rd", hint: "Third declension adjective" },
    
    // Chapter 5 - Third Conjugation Verbs
    { latin: "ago", english: "to do, drive, act", part_of_speech: "verb", conjugation: "3rd", tense: "present", voice: "active", hint: "Third conjugation present active" },
    { latin: "dico", english: "to say, tell", part_of_speech: "verb", conjugation: "3rd", tense: "present", voice: "active", hint: "Third conjugation present active" },
    { latin: "duco", english: "to lead, bring", part_of_speech: "verb", conjugation: "3rd", tense: "present", voice: "active", hint: "Third conjugation present active" },
    { latin: "facio", english: "to make, do", part_of_speech: "verb", conjugation: "3rd", tense: "present", voice: "active", hint: "Third conjugation present active" },
    { latin: "lego", english: "to read, choose", part_of_speech: "verb", conjugation: "3rd", tense: "present", voice: "active", hint: "Third conjugation present active" },
    { latin: "pono", english: "to put, place", part_of_speech: "verb", conjugation: "3rd", tense: "present", voice: "active", hint: "Third conjugation present active" },
    { latin: "scribo", english: "to write", part_of_speech: "verb", conjugation: "3rd", tense: "present", voice: "active", hint: "Third conjugation present active" },
    { latin: "traho", english: "to drag, draw", part_of_speech: "verb", conjugation: "3rd", tense: "present", voice: "active", hint: "Third conjugation present active" },
    
    // Chapter 5 - Third Declension Neuter Nouns
    { latin: "corpus", english: "body", part_of_speech: "noun", declension: "3rd", gender: "neuter", hint: "Third declension neuter noun" },
    { latin: "tempus", english: "time", part_of_speech: "noun", declension: "3rd", gender: "neuter", hint: "Third declension neuter noun" },
    { latin: "opus", english: "work", part_of_speech: "noun", declension: "3rd", gender: "neuter", hint: "Third declension neuter noun" },
    { latin: "genus", english: "kind, type", part_of_speech: "noun", declension: "3rd", gender: "neuter", hint: "Third declension neuter noun" },
    { latin: "nomen", english: "name", part_of_speech: "noun", declension: "3rd", gender: "neuter", hint: "Third declension neuter noun" },
    
    // Chapter 6 - Fourth Declension Nouns
    { latin: "manus", english: "hand", part_of_speech: "noun", declension: "4th", gender: "feminine", hint: "Fourth declension feminine noun" },
    { latin: "domus", english: "house, home", part_of_speech: "noun", declension: "4th", gender: "feminine", hint: "Fourth declension feminine noun" },
    { latin: "fructus", english: "fruit, profit", part_of_speech: "noun", declension: "4th", gender: "masculine", hint: "Fourth declension masculine noun" },
    { latin: "exercitus", english: "army", part_of_speech: "noun", declension: "4th", gender: "masculine", hint: "Fourth declension masculine noun" },
    { latin: "portus", english: "port, harbor", part_of_speech: "noun", declension: "4th", gender: "masculine", hint: "Fourth declension masculine noun" },
    { latin: "senatus", english: "senate", part_of_speech: "noun", declension: "4th", gender: "masculine", hint: "Fourth declension masculine noun" },
    
    // Chapter 6 - Fourth Conjugation Verbs
    { latin: "audio", english: "to hear, listen", part_of_speech: "verb", conjugation: "4th", tense: "present", voice: "active", hint: "Fourth conjugation present active" },
    { latin: "dormio", english: "to sleep", part_of_speech: "verb", conjugation: "4th", tense: "present", voice: "active", hint: "Fourth conjugation present active" },
    { latin: "sentio", english: "to feel, perceive", part_of_speech: "verb", conjugation: "4th", tense: "present", voice: "active", hint: "Fourth conjugation present active" },
    { latin: "venio", english: "to come", part_of_speech: "verb", conjugation: "4th", tense: "present", voice: "active", hint: "Fourth conjugation present active" },
    { latin: "invenio", english: "to find, discover", part_of_speech: "verb", conjugation: "4th", tense: "present", voice: "active", hint: "Fourth conjugation present active" },
    { latin: "capio", english: "to take, capture", part_of_speech: "verb", conjugation: "3rd-io", tense: "present", voice: "active", hint: "Third conjugation -io present active" },
    
    // Chapter 6 - Additional Adjectives
    { latin: "celer", english: "swift, fast", part_of_speech: "adjective", declension: "3rd", hint: "Third declension adjective" },
    { latin: "acer", english: "sharp, keen", part_of_speech: "adjective", declension: "3rd", hint: "Third declension adjective" },
    { latin: "pauper", english: "poor", part_of_speech: "adjective", declension: "3rd", hint: "Third declension adjective" },
    { latin: "dives", english: "rich", part_of_speech: "adjective", declension: "3rd", hint: "Third declension adjective" }
];
