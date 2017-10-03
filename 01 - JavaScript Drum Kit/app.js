(function() {
  function playSound(event) {
    // listen for keydowns of desired keys and play sound and flash transition when pressed
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio) return; // stop if invalid key pressed
    audio.currentTime = 0; // Rewind to start so audio plays every keypress
    audio.play();

    key.classList.add('playing');
  }

  function removeTransition(event) {
    if (event.propertyName !== 'transform') return; // skip if elem hasnt been transformed
    this.classList.remove('playing');
  }

  (function() {
    // grabs all div.key and listen for transition
    const keys = document.querySelectorAll('.key');
    keys.forEach( key => key.addEventListener('transitionend', removeTransition));
  })();

  window.addEventListener('keydown', playSound);
})();
