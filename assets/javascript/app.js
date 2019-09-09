$(document).ready(function() {

    //list of variables
    var startScreen;
    var gameText;
    var right = 0;
    var wrong = 0;
    var unanswered = 0;
    var questionCounter = 0;
    var counter = 20;
    var clock;
    var answerChosen;
    var questionArray = [
        {
            question: "Which of these is a flaky moon-shaped pastry with multiple layers?",
            answers: [
                { text: "Danish", isCorrect: false },
                { text: "Croissant", isCorrect: true },
                { text: "Baguette", isCorrect: false },
                { text: "Boule", isCorrect: false }
            ]
        },
        {
            question: "Kouign Amann is named for the Breton language words for:",
            answers: [
                { text: "Cake and Butter", isCorrect: true },
                { text: "Queen's Almond", isCorrect: false },
                { text: "Milk and Butter", isCorrect: false },
                { text: "Crispy Sugar", isCorrect: false }
            ]
        },
        {
            question: "Tiger Bread is characterized by:",
            answers: [
                { text: "Stripes of chocolate", isCorrect: false },
                { text: "Sprinkled sugar", isCorrect: false },
                { text: "A mottled crust", isCorrect: true },
                { text: "Coarse sea salt exterior", isCorrect: false }
            ]
        },
        {
            question: "The Swedish cinnamon roll also uses this spice:",
            answers: [
                { text: "Nutmeg", isCorrect: false },
                { text: "Clove", isCorrect: false },
                { text: "Turmeric", isCorrect: false },
                { text: "Cardamom", isCorrect: true }
            ]
        },
        {
            question: "Eclair derives from the French word for",
            answers: [
                { text: "Lightning", isCorrect: true },
                { text: "Cloud", isCorrect: false },
                { text: "Cabbage", isCorrect: false },
                { text: "Sandwich", isCorrect: false }
            ]
        },
        {
            question: "What is the key difference between San Francisco sourdough and Vermont sourdough?",
            answers: [
                { text: "Softness", isCorrect: false },
                { text: "Acidity", isCorrect: true },
                { text: "Salt", isCorrect: false },
                { text: "Sweetness", isCorrect: false }
            ]
        },
        {
            question: "Which of the following is an Italian flatbread with olive oil, salt, herbs, and occasionally other toppings?",
            answers: [
                { text: "Ciabatta", isCorrect: false },
                { text: "Panettone", isCorrect: false },
                { text: "Focaccia", isCorrect: true },
                { text: "Sopresata", isCorrect: false }
            ]
        },
        {
            question: "The Japanese an-pan is a bread filled with:",
            answers: [
                { text: "Mung bean paste", isCorrect: false },
                { text: "Sesame paste", isCorrect: false },
                { text: "Azuki bean paste", isCorrect: true },
                { text: "Taro paste", isCorrect: false }
            ]
        },
        {
            question: "Pain perdu is another word for:",
            answers: [
                { text: "Monkey bread", isCorrect: false },
                { text: "French toast", isCorrect: true },
                { text: "Crazy bread", isCorrect: false },
                { text: "Baguette", isCorrect: false }
            ]
        },
        {
            question: "Fairy bread is Australian style toast topped with butter or margarine and",
            answers: [
                { text: "Rainbown sprinkles", isCorrect: true },
                { text: "Nutella", isCorrect: false },
                { text: "Powdered sugar", isCorrect: false },
                { text: "Peanut butter", isCorrect: false }
            ]
        },
    ];

    //function to write the html text for the main content

    function generateGameText() {
        var timeLeftText = "<p class='timerText text-center'>Time Left: <span id='timer'>20</span></p>";
        var questionText = "<p class='questionText text-center'>" + questionArray[questionCounter].question + "</p>";
        gameText = timeLeftText + questionText;
        $(".mainContent").html(gameText);
        for (var i = 0; i < questionArray[questionCounter].answers.length; i++) {
            var answerButton = $("<button>");
            answerButton.addClass("answer btn btn-block text-center");
            answerButton.attr("isCorrect", questionArray[questionCounter].answers[i].isCorrect);
            answerButton.html(questionArray[questionCounter].answers[i].text);
            $(".mainContent").append(answerButton);
        }
    }

    //Create initial screen and start button
    function initialScreen() {
        var initialText = "<p class='initialText text-center'>Do you know all about bread?</p> <p class='initialText text-center'>There are 10 questions total and you will have 20 seconds to answer each one. Have fun!</p>";
        var startButtonHTML = "<button class='startButton btn btn-group-small my-small-btn text-center' type='button'>Let's get started!</button>";
        startScreen = initialText + startButtonHTML;
        $(".mainContent").html(startScreen);
    }
    //Click start button to begin, generates game text

    $("body").on("click", ".startButton", function (event) {
        generateGameText();
        timer();
    });

    // When an answer is clicked:

	$("body").on("click", ".answer", function(event){
        answerChosen = $(this).attr("isCorrect");
        console.log(answerChosen);
        
        if (answerChosen === "true") {
            clearInterval(clock);
            youGotItRight();
        }
        else {
            clearInterval(clock);
            youGotItWrong();
        }
    });

    //Set up timer for 20 seconds

    function timer() {
        clock = setInterval(twentySeconds, 1000 * 2);
        function twentySeconds() {
            if (counter === 0) {
                clearInterval(clock);
                youLoseAtTimeOut();

            } else if (counter > 0) {
                counter--;
            }
            $("#timer").html(counter);
            console.log(counter);
        }
    }

    //Show Time Remaining and Question with 3-4 choices
    //Upon clicking correct answer, Success!
    function youGotItRight() {
        right++;
        var rightAnswerText = "<p class='rightAnswer text-center'>Success!</p>";
        $(".mainContent").html(rightAnswerText);
        setTimeout(nextDisplay, 3000);
    }

    //Upon clicking wrong answer, indicate it's wrong. Give user the correct answer.
    function youGotItWrong() {
        wrong++;
        var wrongAnswerText = "<p class='wrongAnswer text-center'>Wrong Answer!</p>";
        gameText = wrongAnswerText
        $(".mainContent").html(wrongAnswerText);
        setTimeout(nextDisplay, 3000);
    }

    //When time remaining = 0. show correct answer, with no user input, go to next question
    function youLoseAtTimeOut() {
        unanswered++;
        var timeOutText = "<p class='timeOutText text-center'>Time's Up!</p>";
        $(".mainContent").html(timeOutText);
        setTimeout(nextDisplay, 3000);
    }

    
    //With no user input, it goes to the next question, increments question counter, reset timer
    function nextDisplay() {

		if (questionCounter < questionArray.length - 1) {
            questionCounter++;
            generateGameText();
            counter = 20;
            timer();

		} else {
            lastScreen();
		}

	}

    //Last page-- show Right, Wrong, and Unanswered
    function lastScreen() {

		var finishedText = "<p class='finishedText text-center'>Here are your results!</p>";

		var endRightHTML = "<p class='endRight text-center'>Right Answers: " + right + "</p>";

		var endWrongHTML = "<p class='endWrong text-center'>Wrong Answers: " + wrong + "</p>";

		var endUnansweredHTML = "<p class='endUnanswered text-center'>Unanswered: " + unanswered + "</p>";

		var resetButtonHTML = "<button class='resetButton btn btn-primary btn-sm btn-block text-center' type='button'>PLAY AGAIN</button>";

		gameHTML = finishedText + endRightHTML + endWrongHTML + endUnansweredHTML + resetButtonHTML;

		$(".mainContent").html(gameText);

    }
    
    //reset game
    function resetGame() {
		questionCounter = 0;
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        counter = 20;

		generateGameText();
        timer();
	}

    //Click Start button to restart 
    $("body").on("click", ".resetButton", function(event){
        resetGame();
    });
    
    
initialScreen();
	


});