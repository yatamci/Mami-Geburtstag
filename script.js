window.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('clickButton');
  const msg = document.getElementById('message');
  const bottomImage = document.getElementById('bottomImage');
  const audio = document.getElementById('birthday-audio');

  // Preload audio
  audio.volume = 0.2;
  audio.load();

  button.addEventListener('click', () => {
    button.style.display = 'none';
    msg.classList.remove('hidden');
    bottomImage.classList.remove('hidden');

    // Play audio with error handling
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.error("Audio playback failed:", error);
        // Fallback: Show button again if audio fails
        button.style.display = 'inline-block';
      });
    }

    // Confetti effect
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      emojis: ['🎉','🎂','🎈','💝','🥳','🎊']
    });
  });

  // Click message to reset
  msg.addEventListener('click', (e) => {
    e.stopPropagation();
    msg.classList.add('hidden');
    bottomImage.classList.add('hidden');
    button.style.display = 'inline-block';
    audio.pause();
    audio.currentTime = 0;
  });
});
