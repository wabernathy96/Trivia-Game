$(document).ready(function(){ 
 // Global Variables
    var question = 0;
    var answerCorrect = 0;
    var answerIncorrect = 0;
    var count = 300;
    var counter;
    // var createButtons = ["","","",""];
        // Questions
    var sunnyQuestions = [{
        question: "Who is Charlie infatuated with?",
        choices: ["Dee", "Frank", "The Waitress", "Artemis"],
        validAnswer: 2,
        }, {
        question: "What was the reason Dennis gave for women wanting to join them on the boat?",
        choices: ["The implication", "The food", "The atmosphere", "The D.E.N.N.I.S. System"],
        validAnswer: 0,
        }, {
        question: "What was the fruit Charlie tried for the first time?",
        choices: ["Apple", "Pear", "Banana", "Dragonfruit"],
        validAnswer: 1,
        }, {
        question: "What animal does the gang often compare Dee to?",
        choices: ["A giraffe", "A praying mantis", "A bird", "A hippo"],
        validAnswer: 2,
        }, {
        question: "What did Frank create in Vietnam in 1993?",
        choices: ["A brothel", "An amusement park", "A plantation", "A sweatshop"],
        validAnswer: 3,
        }, {
        question: "Dennis is asshole. Why Charlie hate?",
        choices: ["Dennis had relations with the waitress", "Dennis is a bastard man", "Dennis has a crappy car", "Dennis is related to Dee"],
        validAnswer: 1,
        }, {
        question: "What moniker does Dennis also go by?",
        choices: ["The Dentist", "Big Man", "The Nightman", "The Golden God"],
        validAnswer: 3,
        }, {
        question: "Who pooped the bed?",
        choices: ["Charlie", "Mac", "Frank", "Cricket"],
        validAnswer: 2,
        }, {
        question: "Uncle Jack is obsessed with what body part?",
        choices: ["Hands", "Feet", "Eyes", "Knees"],
        validAnswer: 1,
        }, {
        question: "What is the movie the gang sees with the catchphrase 'No surrender, no retreat?' ?",
        choices: ["Lethal Weapon 5", "The Midnight Train", "Thundergun Express", "Pirhana"],
        validAnswer: 2,
        }
        ];   
    // Start button initializes game, hides when clicked 
    $("#start-btn").on("click", function(){
        $(this).hide();

        displayQuestion();
        counter = setInterval(timer, 1000);
    });
   
    $("#question").on("click", ".choice", function(){
        var $this = $(this);
        var userChoice = ($this.index());
        console.log(userChoice);
    });

    for(var i=0; i < sunnyQuestions; i++){
        for(var k=0; k < sunnyQuestions[i].validAnswer.length; k++){
            var correctAnswer = (sunnyQuestions[i].validAnswer[k]);

            console.log(correctAnswer);
            
            if (userChoice === correctAnswer){
                answerCorrect++;

                console.log(answerCorrect);
            };
        };
    };
   
    // Timer function
    function timer(){
        count --;
        if (count <= 0){
            clearInterval(count);
            return;
        }
        $("#timer").html("Time Remaining: " + timeConversion(count));
    };

    // Questions and choices appear in sequential order 
    function displayQuestion(){
       for(var i=0; i < sunnyQuestions.length; i++){
        
            var questionChoice = $("<div>");
            questionChoice.append("<p>"+sunnyQuestions[i].question+"</p>");

            var choicesList = $("<div>");
            choicesList.attr("class", "btn-group");
            
           var choicesList = $("<div>");
            choicesList.attr("class", "btn-group");
            for(var j=0; j < sunnyQuestions[i].choices.length; j++){
                choicesList.append("<button class='choice'>"+sunnyQuestions[i].choices[j]+"</button>");
            };
            
            questionChoice.append(choicesList);
            $("#question").append(questionChoice);
        
        };
    };  

    // Add to correct/incorrect on each answer

        // Display number correct at end of timer/all questions answered


        // Show a picture and message for different numbers of correct answers

            // 0-4

            // 5-7

            // 8-10

    // Time conversion
    function timeConversion(t){   
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
        seconds = "0" + seconds;
        };

        if (minutes === 0) {
        minutes = "00";
        }

        else if (minutes < 10) {
        minutes = "0" + minutes;
        };

        return minutes + ":" + seconds;
    };


   
});  
