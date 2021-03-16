const quizData = [
    {
        question: "What is the most used programming language 2020?",
        a: "Python",
        b: "JavaScript",
        c: "Java",
        d: "C#",
        correct: "a"
    }, {
        question: "What stands HTML for?",
        a: "Helicopter terminate multiple lamborginis",
        b: "Hypertext Markup Language",
        c: "Hyper Turbo Mana Leak",
        d: "Hydro Temperated Mainlab",
        correct: "b"
    }, {
        question: "How old is Alex?",
        a: "19",
        b: "25",
        c: "26",
        d: "30",
        correct: "d"
    }
]

const quiz = document.getElementById('quiz')
const question = document.getElementById('question')
const answer_a = document.getElementById('a_text')
const answer_b = document.getElementById('b_text')
const answer_c = document.getElementById('c_text')
const answer_d = document.getElementById('d_text')
const submitBtn = document.getElementById('submitBtn')

let quizCount = 0
let correctAnswers = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[quizCount]

    question.innerText = currentQuizData.question
    answer_a.innerText = currentQuizData.a
    answer_b.innerText = currentQuizData.b
    answer_c.innerText = currentQuizData.c
    answer_d.innerText = currentQuizData.d
}

function getSelected(){
    const answerElements = document.querySelectorAll('.answer')

    for(let answerElement of answerElements){
        if(answerElement.checked){
            return answerElement.id;
        }
    }

    return undefined
}

function deselectAnswers(){
    const answerElements = document.querySelectorAll('.answer')
    console.log(answerElements.length)

    for(let answerElement of answerElements){       
        answerElement.checked = false;
    };
}

submitBtn.addEventListener("click", () =>{
    const answerId = getSelected()
    
    if(answerId){
        if(answerId === quizData[quizCount].correct){
            correctAnswers++
        }
    }

    quizCount++

    if(quizCount < quizData.length){
        loadQuiz();
    }else{
        quiz.innerHTML = `<h2>You answered correctly at ${correctAnswers}/ ${quizData.length} </h2>`
        quiz.style.margin = '1rem'
    }

});
