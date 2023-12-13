const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
const textbox = document.querySelector('.text-box')
const headingbox = document.querySelector('.heading')


function changeTextColor(){
  var buttons = document.querySelector('.button')

  buttons.forEach( function(button){
    button.style.color = getRandomColor();
  });
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

buttons.forEach( function(button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);

    if(e.target.id ==='grey'){
      body.style.backgroundColor = e.target.id
      textbox.style.color = 'black'
      headingbox.style.color = 'black'
    }
    if(e.target.id ==='blue'){
      body.style.backgroundColor = e.target.id,
      textbox.style.color = 'yellow'
      headingbox.style.color = 'yellow'
    }
    if(e.target.id ==='white'){
      body.style.backgroundColor = e.target.id
      textbox.style.color = 'orange'
      headingbox.style.color = 'orange'
    }
    if(e.target.id ==='green'){
      body.style.backgroundColor = e.target.id
      textbox.style.color = 'white'
      headingbox.style.color = 'white'
    }
    if(e.target.id ==='yellow'){
      body.style.backgroundColor = e.target.id
      textbox.style.color = 'black'
      headingbox.style.color = 'black'
    }
    
    if(e.target.id ==='orange'){
      body.style.backgroundColor = e.target.id
      textbox.style.color = 'purple'
      headingbox.style.color = 'purple'
    }
    if(e.target.id ==='purple'){
      body.style.backgroundColor = e.target.id
      textbox.style.color = 'orange'
      headingbox.style.color = 'orange'
    }
    
  })
})