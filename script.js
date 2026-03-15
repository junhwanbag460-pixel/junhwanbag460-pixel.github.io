const API="https://script.google.com/macros/s/AKfycbzz5pPUJuXWaWyUlYzFDYHQST_cyV_HGvHpad3HNjjM8rnkpktRecrC42sfjA6G5vsiiA/exec"

function calculate(gpa,score){

const gpaScore=(gpa/4.3)*50
const langScore=(score/120)*40

return gpaScore+langScore+10

}

document.getElementById("form").addEventListener("submit",function(e){

e.preventDefault()

const gpa=parseFloat(document.getElementById("gpa").value)
const score=parseFloat(document.getElementById("score").value)

const total=calculate(gpa,score)

const data={

email:"test@khu.ac.kr",
name:document.getElementById("name").value,
gpa:gpa,
language:"TOEFL",
score:score,
total:total,

choice1:document.getElementById("c1").value,
choice2:document.getElementById("c2").value,
choice3:document.getElementById("c3").value,
choice4:"",
choice5:""

}

fetch(API,{
method:"POST",
mode:"no-cors",
body:JSON.stringify(data)
})

alert("지원 완료")

window.location.href="universities.html"

})
