const keys=document.querySelectorAll('.key')
 window.addEventListener('keydown',function(e){   
  const key=document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    key.classList.add('playing')

audio.play()
keys.forEach(key => key.addEventListener('transitionend', function() {
  this.classList.remove('playing')}))


        
    })

  

