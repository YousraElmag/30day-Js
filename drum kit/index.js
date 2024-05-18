

const keys=document.querySelector('h4')

console.log(keys);

 window.addEventListener('keydown',function(e){  
  keys.innerHTML=e.key

    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    keys.classList.add('playing')

audio.play()
}) 
keys.addEventListener('transitionend', function() {
  this.classList.remove('playing')})


  


  

