window.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('clickButton');
  const msg = document.getElementById('message');
  const bottomImage = document.getElementById('bottomImage');
  const audio = document.getElementById('birthday-audio');

  button.addEventListener('click', () => {
    button.style.display = 'none';
    msg.classList.remove('hidden');
    bottomImage.classList.remove('hidden');
    
    audio.currentTime = 0;
    audio.play();

    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      emojis: ['🎉','🎂','🎈','💝','🥳','🎊']
    });
  });
});

msg.addEventListener('click', () => {
  msg.classList.add('hidden');
  bottomImage.classList.add('hidden'); // 👈 Bild wird wieder ausgeblendet
  button.style.display = 'inline-block';
  audio.pause();
  audio.currentTime = 0;
});
