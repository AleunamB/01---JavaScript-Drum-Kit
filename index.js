function playSound(e) {
  // console.log(e.keyCode); getting the keyCode according to the pressed letter
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //getting the audio for the pressed key
  //console.log(audio);
  if (!audio) return; //if there is no audio, stop the function from running all together
  audio.currentTime = 0; //rewind to the start to be played immediately
  audio.play(); //plays the audio but can't be played as often I want in a short period -> audio.currentTime = 0

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //console.log(key); the div's with class .key are now selected
  key.classList.add('playing'); //the class .playing will be added
}

function removeTransition(e) {
  //console.log(e); at the moment getting 6 transitionend Events (see CSS)
  if (e.propertyName !== 'transform') return; //skip it if it's not a transform
  //console.log(e.propertyName);
  //console.log(this); this is equal to the class key
  this.classList.remove('playing'); //the class playing will be removed from the class key
}

const keys = document.querySelectorAll('.key') //getting every key-div of the page in an array
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//NodeList - forEach, each key gets an eventListener (transitionend), when it ends it should be removed (removeTransition)

window.addEventListener("keydown", playSound);
