
$(function(){
let currentDateEl = document.getElementById("currentDay");
var d = new dayjs().format("dddd, MMMM DD");
const currentD = new Date();
var currentHour = currentD.getHours();
console.log(currentHour);
currentDateEl.innerHTML = d

for (let i = 9; i < 18; i++){
  document.getElementById("saveBtn"+ i).addEventListener("click", function() {
    console.log("text"+i);
    console.log(document.getElementById("text"+i));
  window.localStorage.setItem("key"+i, document.getElementById("text"+i).value)  
  });
  var savedText = window.localStorage.getItem("key"+i);
  document.getElementById("text"+i).value = savedText;
}

for (var i=9; i<18; i++){
  if (i < currentHour){
    document.getElementById("hour-"+i).style.backgroundColor = 'grey'
  }
  if (i === currentHour){
    document.getElementById("hour-"+i).style.backgroundColor = "red"
  }
  if (i > currentHour){
    document.getElementById("hour-"+i).style.backgroundColor = 'green'
  }
}
});