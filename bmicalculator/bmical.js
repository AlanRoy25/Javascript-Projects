const form = document.querySelector('.container form');
//this use case will give us empty value if we write this outside the event listener
//const Height = parseInt(document.querySelector("#height"))
form.addEventListener('submit', function(e){
  e.preventDefault();

const heightInput = document.querySelector("#height").value;
const weightInput = document.querySelector("#weight").value;
const results = document.querySelector('#result');

const Height = parseInt(heightInput, 10);
const Weight = parseInt(weightInput, 10);

if(isNaN(Height) || Height <= 0){
  results.innerHTML = `Please enter a Valid Height! `
  return;
}
else if (isNaN(Weight) || Weight <= 0 ){
  results.innerHTML = `Please enter a Valid Weight! `
  return;
}
else {
 const bmi =  (Weight / ((Height/100)*(Height/100))).toFixed(2);
results.innerHTML = `<span>${bmi}</span>`;

if (bmi <= 18.6) {
  results.innerHTML = 'UnderWeight'
}
else if (bmi > 18.6 && bmi < 24.9 ){
  results.innerHTML = 'Nomal Weight'
}
else (bmi >= 24.9){
  results.innerHTML = 'Over Weight'
}
}
});