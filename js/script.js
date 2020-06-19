AOS.init({
  duration: 1200,
})
let daniel = document.getElementById('daniel')
let developer = document.getElementById('developer')
let title = document.getElementsByClassName('title')[1]
let arrow = document.getElementById('arrow')

setTimeout(function(){
daniel.style.border = 'none'
developer.innerHTML = "I'm a fullstack developer"
developer.classList.add('title')
developer.style.width = '25ch'
developer.style.animation = 'type 3s steps(25)'
setInterval(function() {
  if (developer.style.borderRight) {
    developer.style.borderRight = ''
    console.log('oui')
  } else {
    console.log('non')
    developer.style.bordeRight = "4px solid white"
    

  }
}, 1000);
}, 3000);

setInterval(() => {
  
}, 1000);


