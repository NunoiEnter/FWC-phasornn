const button = document.getElementById('change-bg');

function randomColor() {
  const value = Math.floor(Math.random() * 0xffffff);
  return `#${value.toString(16).padStart(6, '0')}`;
}

button.addEventListener('click', () => {
  document.body.style.backgroundColor = randomColor();
});
