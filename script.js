const API="https://script.google.com/macros/s/AKfycbzxjV02UQG6rjGiKuCgcL9Q3uut6Ep2rvjCVRta7YNQ3bcWJwUlaksd_ttX6s3BAh0o/exec"

function calculate(gpa,language,score){

const gpaScore=(gpa/4.3)*50

let lang=0

if(language=="TOEFL") lang=(score/120)*40
if(language=="IELTS") lang=(score/9)*40
if(language=="ITP") lang=(score/677)*40

return gpaScore+lang+10

}

document.getElementById("form").addEventListener("submit",function(e){

e.preventDefault()

const email=localStorage.getItem("email")

const name=document.getElementById("name").value
const gpa=parseFloat(document.getElementById("gpa").value)
const language=document.getElementById("language").value
const score=parseFloat(document.getElementById("score").value)

const total=calculate(gpa,language,score)

const data={

email:email,
name:name,
gpa:gpa,
language:language,
score:score,
total:total,

choice1:document.getElementById("c1").value,
choice2:document.getElementById("c2").value,
choice3:document.getElementById("c3").value,
choice4:document.getElementById("c4").value,
choice5:document.getElementById("c5").value

}

fetch(API,{
method:"POST",
body:JSON.stringify(data)
})
.then(res=>res.text())
.then(res=>{

alert("지원이 완료되었습니다")

window.location.href="universities.html"

})

})
