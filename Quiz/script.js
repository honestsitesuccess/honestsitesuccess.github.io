// Quiz App for Mike Harmanos, Honest Site Success.com, 2013

$(document).ready(function() {
        
//questions
var questions = [{
        category: "GEOGRAPHY",
        question: "What's the state bird of a record seven U.S. states?",
        choices: ["Bluebird", "Meadowlark", "Cardinal", "Robin"],
        questionValue: 0,
        correct: 2,
        answerText: "The Cardinal.  The states are Illinois, Indiana, Kentucky, North Carolina, Ohio, Virginia, and West Virginia."
        }, {
        category: "ENTERTAINMENT",
        question: "What movie won Best Picture at the 80th Academy Awards?",
        choices: ["No Country for Old Men", "There Will Be Blood", "Juno", "Atonement"],
        questionValue: 1,
        correct: 0,
        answerText: "No Country for Old Men." 
        }, {
        category: "HISTORY",
        question: "What presidential election year saw Republicans dub Democrats the party of 'Communism, Corruption, and Korea'?",
        choices: ["1948", "1952", "1956", "1960"],
        questionValue: 2,
        correct: 1,
        answerText: "1952.  Dwight Eisenhower won the Presidency and the Republicans won both houses of Congress."
        }, {
        category: "ARTS AND LITERATURE",
        question: "What Hemingway character is incapable of consummating his relationship with Lady Brett Ashley?",
        choices: ["Jake Barnes", "Robert Cohn", "Romero", "Mike Campbell"],
        questionValue: 3,
        correct: 0,
        answerText: "Jake Barnes, from the book 'The Sun Also Rises.'  Brett consummates her relationship with everyone else."        
        }, {
        category: "SCIENCE AND NATURE",
        question: "What 'black metal' gave blacksmiths their name?",
        choices: ["Steel", "Iron", "Chromium", "Lead"],
        questionValue: 4,
        correct: 1,
        answerText: "Iron.  Iron turns black when heated."        
        }, {
        category: "SPORTS AND LEISURE",
        question: "What Olympic event has runners wearing shoes with perforations to allow for drainage?",
        choices: ["Hurdles", "Heptathalon", "Steeplechase", "Marathon"],
        questionValue: 5,
        correct: 2,
        answerText: "Steeplechase.  There are both hurdles and water hazards in this race."        
        }];

// Keeping score here.  This will tie to the token and the wedges.
var AnswerScore = 0;
var AnswerUser = "";
var i = 0
console.log("question" + i)

$("#category").html(questions[i].category);
$("#questionContainer").html(questions[i].question);
$("#1stChoice").append(questions[i].choices[0]);
$("#2ndChoice").append(questions[i].choices[1]);
$("#3rdChoice").append(questions[i].choices[2]);
$("#4thChoice").append(questions[i].choices[3]);

//empty pie and wedges
var empty = $('#pie0');
var btn = $('#btn');
var question = 1;

empty.fadeIn('3000');

//submit button
$('body').on('click', 'input:submit', function() {
        var AnswerUser = $("input[type='radio']:checked").val();

        if (AnswerUser == undefined) {
                $("#result").html("Please select an option.");
        } else if (AnswerUser == questions[i].correct) {
//Process for a correct answer.  Count is raised and wedge is placed in the container.
                console.log(AnswerUser);
                console.log(questions[i].correct);
                console.log("Correct!");
                $("#result").html("That is correct! ");
                console.log(i);
                $("#answerContainer").html(questions[i].answerText);
                $("input:submit").hide();
                $("#next").show();
                $("#answersCorrect").show();
                $("#answerContainer").show();
                $("#pie"+question).fadeIn('3000');
                        question++;        
                i += 1;
                AnswerScore += 1;
                $("#answersCorrect").html("Wedges Earned: " + AnswerScore +" of 6")
                        if (i === 6) {
                                console.log("complete")
                                $("input:submit").hide();
                                $("#restart").show();
                                $("#next").hide();
                }
        }

        else {
//Process for an incorrect answer
        console.log("incorrect");
        $("#result").html("No, I'm sorry. ");
        $("#answerContainer").html(questions[i].answerText);
        $("input:submit").hide();
        $("#next").show();
        $("#answersCorrect").show();
        $("#answerContainer").show();
                question++; //to advance the correct wedge
        i += 1;
        AnswerScore += 0;
        $("#answersCorrect").html("Wedges Earned: " + AnswerScore +" of 6")
                if (i === 6) {
                        console.log("complete")
                        $("input:submit").hide();
                        $("#restart").show();
                        $("#next").hide();
                        }
                }
        });

//Next Question

$('body').on('click', '#next', function () {
        $('input:submit').show();
        $("#next").hide();
        $("#answerContainer").hide();
        console.log("question" + i)
        $("#category").html(questions[i].category);
        $("#questionContainer").html(questions[i].question);
        $("#1stChoice").html(questions[i].choices[0]);
        $("#2ndChoice").html(questions[i].choices[1]);
        $("#3rdChoice").html(questions[i].choices[2]);
        $("#4thChoice").html(questions[i].choices[3]);
        $("#answerContainer").html("");
        $("#result").html("");
        $("input:radio").prop('checked', false);
});

// Play again? button
    $('body').on('click', '#restart', function () {
        $(this).hide();
        $("#next").hide();
        i = 0;
        AnswerScore = 0;
        question = 1;
        empty.fadeIn('3000');
        $("#pie1, #pie2, #pie3, #pie4, #pie5, #pie6").fadeOut('1000');
        $("#category").html(questions[i].category);
        $("#questionContainer").html(questions[i].question);
        $("#1stChoice").html(questions[i].choices[0]);
        $("#2ndChoice").html(questions[i].choices[1]);
        $("#3rdChoice").html(questions[i].choices[2]);
        $("#4thChoice").html(questions[i].choices[3]);
        $("#answerContainer").html("");
        $("#result").html("");
        $("input:radio").prop('checked', false);
        $('input:submit').show();
        $("#answersCorrect").html("")
    });

        $("#next").hide();
    $("#restart").hide();
    $("#answersCorrect").hide();
});