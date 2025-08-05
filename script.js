const button = document.getElementById('clickButton');
const msg = document.getElementById('message');
const bottomImage = document.getElementById('bottomImage');

button.addEventListener('click', () => {
  button.style.display = 'none';
  msg.classList.remove('hidden');
  bottomImage.classList.remove('hidden'); // 👈 Bild wird eingeblendet

  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
    emojis: ['🎉','🎂','🎈','💝','🥳','🎊']
  });
});

msg.addEventListener('click', () => {
  msg.classList.add('hidden');
  bottomImage.classList.add('hidden'); // 👈 Bild wird wieder ausgeblendet
  button.style.display = 'inline-block';
});
