const API="https://script.google.com/macros/s/AKfycbzz5pPUJuXWaWyUlYzFDYHQST_cyV_HGvHpad3HNjjM8rnkpktRecrC42sfjA6G5vsiiA/exec"

document.getElementById("form").addEventListener("submit",function(e){

e.preventDefault()

const data={

name:document.getElementById("name").value,
gpa:document.getElementById("gpa").value,
score:document.getElementById("score").value,

choice1:document.getElementById("c1").value,
choice2:document.getElementById("c2").value,
choice3:document.getElementById("c3").value

}

fetch(API,{
method:"POST",
mode:"no-cors",
body:JSON.stringify(data)
})

alert("지원 완료")

window.location.href="universities.html"

})
