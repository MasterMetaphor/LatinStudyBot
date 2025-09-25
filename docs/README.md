# Latin Multiple Choice Quiz - GitHub Pages Version

This is a standalone version of the Latin Multiple Choice Quiz application designed to be hosted on GitHub Pages. It requires no server-side processing and works entirely in the browser.

## Features

- Multiple-choice Latin grammar and vocabulary questions
- 40+ questions covering various aspects of Latin grammar
- Mobile-responsive design
- Question filtering by category
- Customizable quiz length
- Detailed score tracking and performance feedback
- Question review at the end of each quiz

## How to Use

### For Users

1. Visit the hosted version at [https://your-username.github.io/latin-quiz](https://your-username.github.io/latin-quiz)
2. Select the number of questions and question type
3. Click "Start Quiz" to begin
4. Select your answers and view immediate feedback
5. Review your performance at the end of the quiz

### For Developers

1. Clone this repository
2. Customize the questions in `latin-questions.js` as needed
3. Test locally by opening `index.html` in a browser
4. Deploy to GitHub Pages by pushing to your repository

## Technical Details

This application is built using:
- HTML5
- CSS3 with responsive design
- Vanilla JavaScript (no frameworks required)

## File Structure

- `index.html` - Main HTML page
- `styles.css` - CSS styling
- `latin-questions.js` - Question database
- `quiz.js` - Quiz application logic

## Customization

### Adding Questions

To add more questions, edit the `latinQuestions` array in `latin-questions.js`. Each question should follow this format:

```javascript
{
    question: "Your question text here?",
    correctAnswer: "The correct answer",
    incorrectAnswers: ["Wrong answer 1", "Wrong answer 2", "Wrong answer 3"],
    category: "cases" // Optional category
}
```

Available categories:
- `cases` - Questions about case functions
- `nouns` - Questions about nouns and declensions
- `verbs` - Questions about verbs and conjugations
- `sentences` - Sentence analysis and translation
- `adjectives` - Adjective agreement and forms

## License

This project is available for educational use.

## Credits

This application was built based on data from the expanded Latin grammar resources developed for educational purposes.
