document.getElementById('clickButton').addEventListener('click', () => {
  const button = document.getElementById('clickButton');
  const msg = document.getElementById('message');

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
