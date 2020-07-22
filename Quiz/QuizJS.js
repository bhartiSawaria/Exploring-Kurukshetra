// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "Which one of the following is not a name for Kurukshetra ?",
        imgSrc : "1.jpg",
        choiceA : "Uttarvedi",
        choiceB : "Bhagyanagar",
        choiceC : "Sthaneshwar",
        choiceD : "Bhramavedi",
        correct : "B"
    },{
        question : "Which two rivers surrounded Kurukshetra ?",
        imgSrc : "2.jpg",
        choiceA : "Airavati & Vetravati",
        choiceB : "Drihadvati & Vetravati",
        choiceC : "Saraswati & Airavati ",
        choiceD : "Sarawati & Drishadvati",
        correct : "D"
    },{
        question : "The city of Kurukshetra was named after which king ?",
        imgSrc : "3.jpg",
        choiceA : "King Kuru",
        choiceB : "King Vidhura",
        choiceC : "King Suvahu",
        choiceD : "King Sahaja",
        correct : "A"
    },{
        question : "Which of the following is the first of its kind in Haryana ?",
        imgSrc : "4.jpg",
        choiceA : "KU",
        choiceB : "NIT",
        choiceC : "NID",
        choiceD : "KITM",
        correct : "A"
    },{
        question : "Which of the following cities does not share a boundary with Kurukshetra ?",
        imgSrc : "5.jpg",
        choiceA : "Yamunanagar",
        choiceB : "Kaithal",
        choiceC : "Panipat",
        choiceD : "Ambala",
        correct : "C"
    },{
        question : "What is the most special about Bharama Sarovar ?",
        imgSrc : "6.jpg",
        choiceA : "Oldest temple of Haryana",
        choiceB : "Largest bronze chariot",
        choiceC : "Largest tank in Asia",
        choiceD : "Oldest tree of Haryana",
        correct : "B"
    },{
        question : "Whose birthday is celebrated during Kurukshetra Festival ?",
        imgSrc : "7.jpg",
        choiceA : "Bhagwad Gita",
        choiceB : "Krishna",
        choiceC : "Arjuna",
        choiceD : "Karna",
        correct : "A"
    },{
        question : "In which month Kurukshetra Festival takes place ?",
        imgSrc : "8.jpg",
        choiceA : "Jan/ Feb",
        choiceB : "Nov/ Dec",
        choiceC : "June/ July",
        choiceD : "Sep/ Oct",
        correct : "B"
    },{
        question : "Which civilization does not have any relation with Kurukshetra ?",
        imgSrc : "9.jpg",
        choiceA : "Harappan",
        choiceB : "Indo Aryan",
        choiceC : "Indus Valley",
        choiceD : "Vedic",
        correct : "B"
    },{
        question : "What is that tree called that witnessed Geeta Preaching ?",
        imgSrc : "10.jpg",
        choiceA : "Arjuna Tree",
        choiceB : "Krishna Tree",
        choiceC : "Akshya Vat",
        choiceD : "Anant Vat",
        correct : "C"
    },{
        question : "What is the shape of the lake situated in Jyotisar ?",
        imgSrc : "11.jpg",
        choiceA : "Star",
        choiceB : "Circle",
        choiceC : "Mango",
        choiceD : "Semicircle",
        correct : "C"
    },{
        question : "Which is the most popular day for bath in Bhrama Sarovar called ?",
        imgSrc : "12.jpg",
        choiceA : "Somavati Amavasya",
        choiceB : "Chaitra Amavasya",
        choiceC : "Kartik Amavasya",
        choiceD : "Shravan Amavasya",
        correct : "A"
    },{
        question : "Which one of the following is located in Kurukshetra ?",
        imgSrc : "13.jpg",
        choiceA : "Devi Art Foundatation",
        choiceB : "Shiv Darshan Museum",
        choiceC : "Stellar Museum",
        choiceD : "Dharohar Museum",
        correct : "D"
    },{
        question : "Who inaugurated Kurukshetra University ?",
        imgSrc : "14.jpg",
        choiceA : "Pranab Mukherjee",
        choiceB : "Rajendra Prasad",
        choiceC : "Jagannath Pahadia",
        choiceD : "Indira Gandhi",
        correct : "B"
    },{
        question : "Hotel Saffron is famous for which kind of dishes ?",
        imgSrc : "15.jpg",
        choiceA : "Indian",
        choiceB : "Italian",
        choiceC : "Chinese",
        choiceD : "French",
        correct : "C"
    },{
        question : "What is the name of the main park of Sheikh Chilli Complex ?",
        imgSrc : "16.jpg",
        choiceA : "Harshavardhan Park",
        choiceB : "Shahjahan Park",
        choiceC : "Ashoka Park",
        choiceD : "Mughal Park",
        correct : "A"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    progress.style.display = "block";

    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

var number;
// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        number = qIndex+1;
        
        if (number == 9)
            progress.innerHTML += "<br> <div class='prog' id="+ qIndex +"><p class='number'>"+number+ " </p></div>";

        else
            progress.innerHTML += "<div class='prog' id="+ qIndex +"><p class='number'>"+number+ " </p></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = 10-count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    quiz.style.display = "none";
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "5.png" :
              (scorePerCent >= 60) ? "4.png" :
              (scorePerCent >= 40) ? "3.png" :
              (scorePerCent >= 20) ? "2.png" :
              "1.png";
    scoreDiv.innerHTML = "<p id='statement1'> Your score is </p>";
    scoreDiv.innerHTML += "<img src="+ img +">";
    scoreDiv.innerHTML += "<h2>"+ scorePerCent +"%</h2>";
    scoreDiv.innerHTML += "<p id='statement2'><br><br>"+ score +" correct out of " + questions.length + "</p>";
}












function showMenu1()
{
    document.getElementById("sideBar").style.display = "block";
    document.getElementById("toggleButton1").style.display = "none";
    document.getElementById("toggleButton2").style.display = "flex";
    document.getElementById("sideBar").style.transition = "5";
}

function showMenu2()
{
    document.getElementById("sideBar").style.display = "none";
    document.getElementById("toggleButton2").style.display = "none";
    document.getElementById("toggleButton1").style.display = "flex";
    document.getElementById("sideBar").style.transition = "5";
}










