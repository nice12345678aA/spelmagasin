// Questions that will be asked
const Questions = [{
    q: "Hva land er me i",
    a: [{ text: "Sverige", isCorrect: false },
    { text: "Danmark", isCorrect: false },
    { text: "Norge", isCorrect: true },
    { text: "Tyskland", isCorrect: false }
    ]
 
},
{
    q: "Er dette en quiz",
    a: [{ text: "Nei", isCorrect: false, isSelected: false },
    { text: "Ja", isCorrect: true },
    ]
 
},
{
    q: "Hva må du ha is VSC for å bruke JS",
    a: [{ text: "<link>", isCorrect: false },
    { text: "<h3>", isCorrect: false },
    { text: "<script>", isCorrect: true },
    { text: "<div>", isCorrect: false }
    ]
 
},
{
    q: "Hva er hovedstaden til Norge",
    a: [{ text: "Bergen", isCorrect: false },
    { text: "Washignton D.C.", isCorrect: false },
    { text: "Oslo", isCorrect: true },
    { text: "London", isCorrect: false }
    ]
},
{
    q: "Coop",
    a: [{ text: "Ja", isCorrect: false, isSelected: false },
    { text: "Coop", isCorrect: true },
    { text: "Bread", isCorrect: true}
    ]
 
},
]
 
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}