//generate color random 

const randomColor = function(){
  const hex = '0123456789ABCDEF'
  let color = '#'
  for ( let i=0; i<6; i++){
    color+= hex[Math.floor(Math.random() *16)]
  }
  return color;
}
let intervalId
const startChangingcolor = function(){ 
   if(!intervalId){
    intervalId = setInterval (changebgColor,1000)
   }

  function changebgColor(){
  document.body.style.backgroundColor = randomColor();
}
}

const stopChangingcolor = function(){
  clearInterval(intervalId)
  intervalId =  null;
}
document.querySelector("#start").addEventListener('click', startChangingcolor)
document.querySelector('#stop').addEventListener('click', stopChangingcolor)
