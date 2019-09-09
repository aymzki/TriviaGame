$(document).ready(() => {
   
//list of variables
var beginGame;
var gameText;
var correct = 0;
var wrong = 0;
var unanswered = 0;
var questionCounter = 0;
var countDown = 20;
var clock;
var answerChosen;
var questions = [
    {
        question: "Which of these is a flaky moon-shaped pastry with multiple layers?",
        answers: [
            {text: "Danish", isCorrect: false}, 
            {text: "Croissant", isCorrect: true},
            {text: "Baguette", isCorrect: false}, 
            {text: "Boule", isCorrect: false}
        ]
    },
    {
        question: "Kouign Amann is named for the Breton language words for:",
        answers: [
            {text: "Cake and Butter", isCorrect: true},  	
            {text: "Queen's Almond", isCorrect: false}, 
            {text: "Milk and Butter", isCorrect: false}, 
            {text: "Crispy Sugar", isCorrect: false} 
        ]
    },
    {
        question: "Tiger Bread is characterized by:",
        answers: [
            {text: "Stripes of chocolate", isCorrect: false}, 
            {text: "Sprinkled sugar", isCorrect: false}, 
            {text: "A Mottled crust", isCorrect: true}, 
            {text: "Coarse sea salt exterior", isCorrect: false}
        ]
    },
    {
        question: "The Swedish cinnamon roll also uses this spice:",
        answers: [
            {text: "Nutmeg", isCorrect: false}, 
            {text: "Clove", isCorrect: false}, 
            {text: "Turmeric", isCorrect: false}, 
            {text: "Cardamom", isCorrect: true}
        ]
    },
    {
        question: "Eclair derives from the French word for",
        answers: [
            {text: "Lightning", isCorrect: true}, 
            {text: "Cloud", isCorrect: false}, 
            {text: "Cabbage", isCorrect: false}, 
            {text: "Sandwich", isCorrect: false}
        ]
    },
    {
        question: "What is the key difference between San Francisco sourdough and Vermont sourdough?",
        answers: [
            {text: "Softness", isCorrect: false},
            {text: "Acidity", isCorrect: true},
            {text: "Salt", isCorrect: false},
            {text: "Sweetness", isCorrect: false}
        ]
    },
    {
        question: "Which of the following is an Italian flatbread with olive oil, salt, herbs, and occasionally other toppings?",
        answers: [
            {text: "Ciabatta", isCorrect: false},
            {text: "Panettone", isCorrect: false},
            {text: "Focaccia", isCorrect: true},
            {text: "Sopresata", isCorrect: false}
        ]
    },
    {
        question: "The Japanese an-pan is a bread filled with:",
        answers: [
            {text: "Mung bean paste", isCorrect: false},
            {text: "Sesame paste", isCorrect: false},
            {text: "Azuki bean paste", isCorrect: true},
            {text: "Taro paste", isCorrect: false}
        ]
    },
    {
        question: "Pain perdu is another word for:",
        answers: [
            {text: "Monkey bread", isCorrect: false},
            {text: "French toast", isCorrect: true},
            {text: "Crazy bread", isCorrect: false},
            {text: "Baguette", isCorrect: false}
        ]
    },
    {
        question: "Fairy bread is Australian style toast topped with butter or margarine and",
        answers:[
            {text: "Rainbown sprinkles", isCorrect: true},
            {text: "Nutella", isCorrect: false},
            {text: "Powdered sugar", isCorrect: false},
            {text: "Peanut butter", isCorrect: false}
        ]
    },
];
//Click the Start button to begin game
//Show Time Remaining and Question with 3-4 choices
//Upon clicking correct answer, Success!
//Upon clicking wrong answer, Show correct answer
//With no user input, it goes to the next question
//When time remaining = 0. show correct answer, with no user input, go to next question
//Last page-- show Correct, Incorrect, and Unanswered
//Click Start Over button to restart 



});