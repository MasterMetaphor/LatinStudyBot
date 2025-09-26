// Comprehensive Latin Vocabulary with All Forms
// Includes all verb conjugations and noun declensions

const comprehensiveFormsData = [
    // Wheelock Chapter 7 Vocabulary
    // Nouns
    { latin: "amor", english: "love", part_of_speech: "noun", declension: "3rd", gender: "masculine", base_form: "amor, amoris", hint: "3rd declension masculine noun", chapter: "7", learned: false, correct: 0, incorrect: 0 },
    { latin: "carmen", english: "song, poem", part_of_speech: "noun", declension: "3rd", gender: "neuter", base_form: "carmen, carminis", hint: "3rd declension neuter noun", chapter: "7", learned: false, correct: 0, incorrect: 0 },
    { latin: "civitas", english: "state, citizenship", part_of_speech: "noun", declension: "3rd", gender: "feminine", base_form: "civitas, civitatis", hint: "3rd declension feminine noun", chapter: "7", learned: false, correct: 0, incorrect: 0 },
    { latin: "corpus", english: "body", part_of_speech: "noun", declension: "3rd", gender: "neuter", base_form: "corpus, corporis", hint: "3rd declension neuter noun", chapter: "7", learned: false, correct: 0, incorrect: 0 },
    { latin: "homo", english: "human being, man", part_of_speech: "noun", declension: "3rd", gender: "masculine", base_form: "homo, hominis", hint: "3rd declension masculine noun", chapter: "7", learned: false, correct: 0, incorrect: 0 },
    { latin: "labor", english: "labor, work, toil; a work, production", part_of_speech: "noun", declension: "3rd", gender: "masculine", base_form: "labor, laboris", hint: "3rd declension masculine noun", chapter: "7", learned: false, correct: 0, incorrect: 0 },
    { latin: "littera", english: "a letter of the alphabet", part_of_speech: "noun", declension: "1st", gender: "feminine", base_form: "littera, -ae", hint: "1st declension feminine noun", chapter: "7", learned: false, correct: 0, incorrect: 0 },
    { latin: "litterae", english: "a letter (epistle), literature", part_of_speech: "noun", declension: "1st", gender: "feminine", base_form: "litterae, -arum", number: "plural", hint: "1st declension feminine plural noun", chapter: "7", learned: false, correct: 0, incorrect: 0 },
    { latin: "mos", english: "custom, habit, manner", part_of_speech: "noun", declension: "3rd", gender: "masculine", base_form: "mos, moris", hint: "3rd declension masculine noun", chapter: "7", learned: false, correct: 0, incorrect: 0 },
    { latin: "mores", english: "habits, morals, character", part_of_speech: "noun", declension: "3rd", gender: "masculine", base_form: "mores, morum", number: "plural", hint: "3rd declension masculine plural noun", chapter: "7", learned: false, correct: 0, incorrect: 0 },
    { latin: "nomen", english: "name", part_of_speech: "noun", declension: "3rd", gender: "neuter", base_form: "nomen, nominis", hint: "3rd declension neuter noun", chapter: "7", learned: false, correct: 0, incorrect: 0 },
    { latin: "pax", english: "peace", part_of_speech: "noun", declension: "3rd", gender: "feminine", base_form: "pax, pacis", hint: "3rd declension feminine noun", chapter: "7", learned: false, correct: 0, incorrect: 0 },
    { latin: "regina", english: "queen", part_of_speech: "noun", declension: "1st", gender: "feminine", base_form: "regina, reginae", hint: "1st declension feminine noun", chapter: "7", learned: false, correct: 0, incorrect: 0 },
    { latin: "rex", english: "king", part_of_speech: "noun", declension: "3rd", gender: "masculine", base_form: "rex, regis", hint: "3rd declension masculine noun", chapter: "7", learned: false, correct: 0, incorrect: 0 },
    { latin: "tempus", english: "time; occasion, opportunity", part_of_speech: "noun", declension: "3rd", gender: "neuter", base_form: "tempus, temporis", hint: "3rd declension neuter noun", chapter: "7", learned: false, correct: 0, incorrect: 0 },
    { latin: "terra", english: "earth, ground, land, country", part_of_speech: "noun", declension: "1st", gender: "feminine", base_form: "terra, -ae", hint: "1st declension feminine noun", chapter: "7", learned: false, correct: 0, incorrect: 0 },
    { latin: "uxor", english: "wife", part_of_speech: "noun", declension: "3rd", gender: "feminine", base_form: "uxor, uxoris", hint: "3rd declension feminine noun", chapter: "7", learned: false, correct: 0, incorrect: 0 },
    { latin: "virgo", english: "maiden, virgin", part_of_speech: "noun", declension: "3rd", gender: "feminine", base_form: "virgo, virginis", hint: "3rd declension feminine noun", chapter: "7", learned: false, correct: 0, incorrect: 0 },
    { latin: "virtus", english: "manliness, courage; excellence, character, worth, virtue", part_of_speech: "noun", declension: "3rd", gender: "feminine", base_form: "virtus, virtutis", hint: "3rd declension feminine noun", chapter: "7", learned: false, correct: 0, incorrect: 0 },
    
    // Adjectives
    { latin: "novus", english: "new; strange", part_of_speech: "adjective", declension: "1st/2nd", base_form: "novus, -a, -um", hint: "1st/2nd declension adjective", chapter: "7", learned: false, correct: 0, incorrect: 0 },
    
    // Prepositions
    { latin: "post", english: "after, behind", part_of_speech: "preposition", takes_case: "accusative", hint: "preposition + accusative", chapter: "7", learned: false, correct: 0, incorrect: 0 },
    { latin: "sub", english: "under, up under, close to, down to/into, to/at the foot of", part_of_speech: "preposition", takes_case: "ablative/accusative", hint: "preposition + ablative or accusative", chapter: "7", learned: false, correct: 0, incorrect: 0 },
    
    // Verbs
    { latin: "audeo", english: "to dare", part_of_speech: "verb", conjugation: "2nd", base_form: "audeo, audere, ausus sum", hint: "2nd conjugation deponent verb", chapter: "7", learned: false, correct: 0, incorrect: 0 },
    { latin: "neco", english: "to murder, kill", part_of_speech: "verb", conjugation: "1st", base_form: "neco, necare, necavi, necatum", hint: "1st conjugation verb", chapter: "7", learned: false, correct: 0, incorrect: 0 },
    
    // 1st Conjugation - amo (to love) - Present Tense
    { latin: "amo", english: "I love", part_of_speech: "verb", conjugation: "1st", tense: "present", person: "1st", number: "singular", hint: "1st conjugation present 1st person singular", learned: false, correct: 0, incorrect: 0 },
    { latin: "amas", english: "you love", part_of_speech: "verb", conjugation: "1st", tense: "present", person: "2nd", number: "singular", hint: "1st conjugation present 2nd person singular", learned: false, correct: 0, incorrect: 0 },
    { latin: "amat", english: "he/she/it loves", part_of_speech: "verb", conjugation: "1st", tense: "present", person: "3rd", number: "singular", hint: "1st conjugation present 3rd person singular", learned: false, correct: 0, incorrect: 0 },
    { latin: "amamus", english: "we love", part_of_speech: "verb", conjugation: "1st", tense: "present", person: "1st", number: "plural", hint: "1st conjugation present 1st person plural", learned: false, correct: 0, incorrect: 0 },
    { latin: "amatis", english: "you (pl.) love", part_of_speech: "verb", conjugation: "1st", tense: "present", person: "2nd", number: "plural", hint: "1st conjugation present 2nd person plural", learned: false, correct: 0, incorrect: 0 },
    { latin: "amant", english: "they love", part_of_speech: "verb", conjugation: "1st", tense: "present", person: "3rd", number: "plural", hint: "1st conjugation present 3rd person plural", learned: false, correct: 0, incorrect: 0 },
    
    // 1st Conjugation - amo (to love) - Imperfect Tense (ba = past)
    { latin: "amabam", english: "I was loving", part_of_speech: "verb", conjugation: "1st", tense: "imperfect", person: "1st", number: "singular", hint: "1st conjugation imperfect 1st person singular (ba = past)", learned: false, correct: 0, incorrect: 0 },
    { latin: "amabas", english: "you were loving", part_of_speech: "verb", conjugation: "1st", tense: "imperfect", person: "2nd", number: "singular", hint: "1st conjugation imperfect 2nd person singular (ba = past)", learned: false, correct: 0, incorrect: 0 },
    { latin: "amabat", english: "he/she/it was loving", part_of_speech: "verb", conjugation: "1st", tense: "imperfect", person: "3rd", number: "singular", hint: "1st conjugation imperfect 3rd person singular (ba = past)", learned: false, correct: 0, incorrect: 0 },
    { latin: "amabamus", english: "we were loving", part_of_speech: "verb", conjugation: "1st", tense: "imperfect", person: "1st", number: "plural", hint: "1st conjugation imperfect 1st person plural (ba = past)", learned: false, correct: 0, incorrect: 0 },
    { latin: "amabatis", english: "you (pl.) were loving", part_of_speech: "verb", conjugation: "1st", tense: "imperfect", person: "2nd", number: "plural", hint: "1st conjugation imperfect 2nd person plural (ba = past)", learned: false, correct: 0, incorrect: 0 },
    { latin: "amabant", english: "they were loving", part_of_speech: "verb", conjugation: "1st", tense: "imperfect", person: "3rd", number: "plural", hint: "1st conjugation imperfect 3rd person plural (ba = past)", learned: false, correct: 0, incorrect: 0 },
    
    // 1st Conjugation - amo (to love) - Future Tense (bi, bo, bu = future)
    { latin: "amabo", english: "I will love", part_of_speech: "verb", conjugation: "1st", tense: "future", person: "1st", number: "singular", hint: "1st conjugation future 1st person singular (bo = future)", learned: false, correct: 0, incorrect: 0 },
    { latin: "amabis", english: "you will love", part_of_speech: "verb", conjugation: "1st", tense: "future", person: "2nd", number: "singular", hint: "1st conjugation future 2nd person singular (bi = future)", learned: false, correct: 0, incorrect: 0 },
    { latin: "amabit", english: "he/she/it will love", part_of_speech: "verb", conjugation: "1st", tense: "future", person: "3rd", number: "singular", hint: "1st conjugation future 3rd person singular (bi = future)", learned: false, correct: 0, incorrect: 0 },
    { latin: "amabimus", english: "we will love", part_of_speech: "verb", conjugation: "1st", tense: "future", person: "1st", number: "plural", hint: "1st conjugation future 1st person plural (bi = future)", learned: false, correct: 0, incorrect: 0 },
    { latin: "amabitis", english: "you (pl.) will love", part_of_speech: "verb", conjugation: "1st", tense: "future", person: "2nd", number: "plural", hint: "1st conjugation future 2nd person plural (bi = future)", learned: false, correct: 0, incorrect: 0 },
    { latin: "amabunt", english: "they will love", part_of_speech: "verb", conjugation: "1st", tense: "future", person: "3rd", number: "plural", hint: "1st conjugation future 3rd person plural (bu = future)", learned: false, correct: 0, incorrect: 0 },
    
    // 2nd Conjugation - moneo (to warn) - Present Tense
    { latin: "moneo", english: "I warn", part_of_speech: "verb", conjugation: "2nd", tense: "present", person: "1st", number: "singular", hint: "2nd conjugation present 1st person singular", learned: false, correct: 0, incorrect: 0 },
    { latin: "mones", english: "you warn", part_of_speech: "verb", conjugation: "2nd", tense: "present", person: "2nd", number: "singular", hint: "2nd conjugation present 2nd person singular", learned: false, correct: 0, incorrect: 0 },
    { latin: "monet", english: "he/she/it warns", part_of_speech: "verb", conjugation: "2nd", tense: "present", person: "3rd", number: "singular", hint: "2nd conjugation present 3rd person singular", learned: false, correct: 0, incorrect: 0 },
    { latin: "monemus", english: "we warn", part_of_speech: "verb", conjugation: "2nd", tense: "present", person: "1st", number: "plural", hint: "2nd conjugation present 1st person plural", learned: false, correct: 0, incorrect: 0 },
    { latin: "monetis", english: "you (pl.) warn", part_of_speech: "verb", conjugation: "2nd", tense: "present", person: "2nd", number: "plural", hint: "2nd conjugation present 2nd person plural", learned: false, correct: 0, incorrect: 0 },
    { latin: "monent", english: "they warn", part_of_speech: "verb", conjugation: "2nd", tense: "present", person: "3rd", number: "plural", hint: "2nd conjugation present 3rd person plural", learned: false, correct: 0, incorrect: 0 },
    
    // 2nd Conjugation - moneo (to warn) - Imperfect Tense (ba = past)
    { latin: "monebam", english: "I was warning", part_of_speech: "verb", conjugation: "2nd", tense: "imperfect", person: "1st", number: "singular", hint: "2nd conjugation imperfect 1st person singular (ba = past)", learned: false, correct: 0, incorrect: 0 },
    { latin: "monebas", english: "you were warning", part_of_speech: "verb", conjugation: "2nd", tense: "imperfect", person: "2nd", number: "singular", hint: "2nd conjugation imperfect 2nd person singular (ba = past)", learned: false, correct: 0, incorrect: 0 },
    { latin: "monebat", english: "he/she/it was warning", part_of_speech: "verb", conjugation: "2nd", tense: "imperfect", person: "3rd", number: "singular", hint: "2nd conjugation imperfect 3rd person singular (ba = past)", learned: false, correct: 0, incorrect: 0 },
    { latin: "monebamus", english: "we were warning", part_of_speech: "verb", conjugation: "2nd", tense: "imperfect", person: "1st", number: "plural", hint: "2nd conjugation imperfect 1st person plural (ba = past)", learned: false, correct: 0, incorrect: 0 },
    { latin: "monebatis", english: "you (pl.) were warning", part_of_speech: "verb", conjugation: "2nd", tense: "imperfect", person: "2nd", number: "plural", hint: "2nd conjugation imperfect 2nd person plural (ba = past)", learned: false, correct: 0, incorrect: 0 },
    { latin: "monebant", english: "they were warning", part_of_speech: "verb", conjugation: "2nd", tense: "imperfect", person: "3rd", number: "plural", hint: "2nd conjugation imperfect 3rd person plural (ba = past)", learned: false, correct: 0, incorrect: 0 },
    
    // 2nd Conjugation - moneo (to warn) - Future Tense (bi, bo, bu = future)
    { latin: "monebo", english: "I will warn", part_of_speech: "verb", conjugation: "2nd", tense: "future", person: "1st", number: "singular", hint: "2nd conjugation future 1st person singular (bo = future)", learned: false, correct: 0, incorrect: 0 },
    { latin: "monebis", english: "you will warn", part_of_speech: "verb", conjugation: "2nd", tense: "future", person: "2nd", number: "singular", hint: "2nd conjugation future 2nd person singular (bi = future)", learned: false, correct: 0, incorrect: 0 },
    { latin: "monebit", english: "he/she/it will warn", part_of_speech: "verb", conjugation: "2nd", tense: "future", person: "3rd", number: "singular", hint: "2nd conjugation future 3rd person singular (bi = future)", learned: false, correct: 0, incorrect: 0 },
    { latin: "monebimus", english: "we will warn", part_of_speech: "verb", conjugation: "2nd", tense: "future", person: "1st", number: "plural", hint: "2nd conjugation future 1st person plural (bi = future)", learned: false, correct: 0, incorrect: 0 },
    { latin: "monebitis", english: "you (pl.) will warn", part_of_speech: "verb", conjugation: "2nd", tense: "future", person: "2nd", number: "plural", hint: "2nd conjugation future 2nd person plural (bi = future)", learned: false, correct: 0, incorrect: 0 },
    { latin: "monebunt", english: "they will warn", part_of_speech: "verb", conjugation: "2nd", tense: "future", person: "3rd", number: "plural", hint: "2nd conjugation future 3rd person plural (bu = future)", learned: false, correct: 0, incorrect: 0 },
    
    // 1st Declension - puella (girl) - All Cases
    { latin: "puella", english: "girl (nom. sg.)", part_of_speech: "noun", declension: "1st", gender: "feminine", case: "nominative", number: "singular", hint: "1st declension feminine noun - nominative singular", learned: false, correct: 0, incorrect: 0 },
    { latin: "puellae", english: "of the girl (gen. sg.)", part_of_speech: "noun", declension: "1st", gender: "feminine", case: "genitive", number: "singular", hint: "1st declension feminine noun - genitive singular", learned: false, correct: 0, incorrect: 0 },
    { latin: "puellae", english: "to/for the girl (dat. sg.)", part_of_speech: "noun", declension: "1st", gender: "feminine", case: "dative", number: "singular", hint: "1st declension feminine noun - dative singular", learned: false, correct: 0, incorrect: 0 },
    { latin: "puellam", english: "girl (acc. sg.)", part_of_speech: "noun", declension: "1st", gender: "feminine", case: "accusative", number: "singular", hint: "1st declension feminine noun - accusative singular", learned: false, correct: 0, incorrect: 0 },
    { latin: "puella", english: "by/with the girl (abl. sg.)", part_of_speech: "noun", declension: "1st", gender: "feminine", case: "ablative", number: "singular", hint: "1st declension feminine noun - ablative singular", learned: false, correct: 0, incorrect: 0 },
    { latin: "puellae", english: "girls (nom. pl.)", part_of_speech: "noun", declension: "1st", gender: "feminine", case: "nominative", number: "plural", hint: "1st declension feminine noun - nominative plural", learned: false, correct: 0, incorrect: 0 },
    { latin: "puellarum", english: "of the girls (gen. pl.)", part_of_speech: "noun", declension: "1st", gender: "feminine", case: "genitive", number: "plural", hint: "1st declension feminine noun - genitive plural", learned: false, correct: 0, incorrect: 0 },
    { latin: "puellis", english: "to/for the girls (dat. pl.)", part_of_speech: "noun", declension: "1st", gender: "feminine", case: "dative", number: "plural", hint: "1st declension feminine noun - dative plural", learned: false, correct: 0, incorrect: 0 },
    { latin: "puellas", english: "girls (acc. pl.)", part_of_speech: "noun", declension: "1st", gender: "feminine", case: "accusative", number: "plural", hint: "1st declension feminine noun - accusative plural", learned: false, correct: 0, incorrect: 0 },
    { latin: "puellis", english: "by/with the girls (abl. pl.)", part_of_speech: "noun", declension: "1st", gender: "feminine", case: "ablative", number: "plural", hint: "1st declension feminine noun - ablative plural", learned: false, correct: 0, incorrect: 0 },
    
    // 2nd Declension - servus (slave) - All Cases
    { latin: "servus", english: "slave (nom. sg.)", part_of_speech: "noun", declension: "2nd", gender: "masculine", case: "nominative", number: "singular", hint: "2nd declension masculine noun - nominative singular", learned: false, correct: 0, incorrect: 0 },
    { latin: "servi", english: "of the slave (gen. sg.)", part_of_speech: "noun", declension: "2nd", gender: "masculine", case: "genitive", number: "singular", hint: "2nd declension masculine noun - genitive singular", learned: false, correct: 0, incorrect: 0 },
    { latin: "servo", english: "to/for the slave (dat. sg.)", part_of_speech: "noun", declension: "2nd", gender: "masculine", case: "dative", number: "singular", hint: "2nd declension masculine noun - dative singular", learned: false, correct: 0, incorrect: 0 },
    { latin: "servum", english: "slave (acc. sg.)", part_of_speech: "noun", declension: "2nd", gender: "masculine", case: "accusative", number: "singular", hint: "2nd declension masculine noun - accusative singular", learned: false, correct: 0, incorrect: 0 },
    { latin: "servo", english: "by/with the slave (abl. sg.)", part_of_speech: "noun", declension: "2nd", gender: "masculine", case: "ablative", number: "singular", hint: "2nd declension masculine noun - ablative singular", learned: false, correct: 0, incorrect: 0 },
    { latin: "servi", english: "slaves (nom. pl.)", part_of_speech: "noun", declension: "2nd", gender: "masculine", case: "nominative", number: "plural", hint: "2nd declension masculine noun - nominative plural", learned: false, correct: 0, incorrect: 0 },
    { latin: "servorum", english: "of the slaves (gen. pl.)", part_of_speech: "noun", declension: "2nd", gender: "masculine", case: "genitive", number: "plural", hint: "2nd declension masculine noun - genitive plural", learned: false, correct: 0, incorrect: 0 },
    { latin: "servis", english: "to/for the slaves (dat. pl.)", part_of_speech: "noun", declension: "2nd", gender: "masculine", case: "dative", number: "plural", hint: "2nd declension masculine noun - dative plural", learned: false, correct: 0, incorrect: 0 },
    { latin: "servos", english: "slaves (acc. pl.)", part_of_speech: "noun", declension: "2nd", gender: "masculine", case: "accusative", number: "plural", hint: "2nd declension masculine noun - accusative plural", learned: false, correct: 0, incorrect: 0 },
    { latin: "servis", english: "by/with the slaves (abl. pl.)", part_of_speech: "noun", declension: "2nd", gender: "masculine", case: "ablative", number: "plural", hint: "2nd declension masculine noun - ablative plural", learned: false, correct: 0, incorrect: 0 },
    
    // Sample sentences for practice
    { latin: "Puella amat", english: "The girl loves", part_of_speech: "sentence", hint: "Simple present tense sentence with 1st declension subject", learned: false, correct: 0, incorrect: 0 },
    { latin: "Servus monuit", english: "The slave warned", part_of_speech: "sentence", hint: "Past tense sentence with 2nd declension subject", learned: false, correct: 0, incorrect: 0 },
    { latin: "Puellae amabant", english: "The girls were loving", part_of_speech: "sentence", hint: "Imperfect tense sentence with plural subject", learned: false, correct: 0, incorrect: 0 },
];

