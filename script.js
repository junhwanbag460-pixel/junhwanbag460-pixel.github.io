const API = "https://script.google.com/macros/s/AKfycbzf85dqYjE17WJv2gZP_FNqt8AQPp5kUDQwnSs2cMbPJac2Y2BXKpQBatGVm8ai6TWG/exec"



function calculate(gpa, language, score){

const gpaScore = (gpa / 4.3) * 50

let langScore = 0

if(language == "TOEFL"){
langScore = (score / 120) * 40
}

if(language == "IELTS"){
langScore = (score / 9) * 40
}

if(language == "ITP"){
langScore = (score / 677) * 40
}

return gpaScore + langScore + 10

}



document.getElementById("form").addEventListener("submit", async function(e){

e.preventDefault()

const email = localStorage.getItem("email")

const name = document.getElementById("name").value
const gpa = parseFloat(document.getElementById("gpa").value)
const language = document.getElementById("language").value
const score = parseFloat(document.getElementById("score").value)

const total = calculate(gpa, language, score)

const data = {

email: email,
name: name,
gpa: gpa,
language: language,
score: score,
total: total,

choice1: document.getElementById("c1").value,
choice2: document.getElementById("c2").value,
choice3: document.getElementById("c3").value,
choice4: document.getElementById("c4").value,
choice5: document.getElementById("c5").value

}

await fetch(API,{
method: "POST",
body: JSON.stringify(data)
})

window.location.href = "result.html"

})
