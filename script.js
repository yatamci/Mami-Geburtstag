const button = document.getElementById('clickButton');
const msg = document.getElementById('message');

button.addEventListener('click', () => {
  button.style.display = 'none';
  msg.classList.remove('hidden');

  // 🎉 Konfetti-Effekt
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
    emojis: ['🎉','🎂','🎈','💝','🥳','🎊']
  });
});

msg.addEventListener('click', () => {
  msg.classList.add('hidden');
  button.style.display = 'inline-block';
});
