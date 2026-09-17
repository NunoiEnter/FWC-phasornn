// main.js — route dialogue box swap
const dialogueSpeaker = document.querySelector('#dialogue-speaker');
const dialogueLine = document.querySelector('#dialogue-line');

document.querySelectorAll('[data-dialogue]').forEach((route) => {
  const revealDialogue = () => {
    if (!dialogueSpeaker || !dialogueLine) return;
    dialogueSpeaker.textContent = route.dataset.dialogueSpeaker || 'Narrator';
    dialogueLine.textContent = route.dataset.dialogue || '';
  };

  route.addEventListener('mouseenter', revealDialogue);
  route.addEventListener('focus', revealDialogue);
});
