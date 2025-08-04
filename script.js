document.getElementById('clickButton').addEventListener('click', () => {
  const button = document.getElementById('clickButton');
  const msg = document.getElementById('message');

  button.style.display = 'none';     // 👈 Button wird ausgeblendet
  msg.classList.remove('hidden');    // 👈 Nachricht wird sichtbar
});
