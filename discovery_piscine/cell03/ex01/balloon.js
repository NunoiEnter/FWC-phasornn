const balloon = document.getElementById('balloon');
const colors = ['red', 'green', 'blue'];
const originalSize = 200;
let size = originalSize;
let colorIndex = 0;

function renderBalloon() {
  balloon.style.width = `${size}px`;
  balloon.style.height = `${size}px`;
  balloon.style.backgroundColor = colors[colorIndex];
}

function grow() {
  size += 10;
  colorIndex = (colorIndex + 1) % colors.length;

  if (size > 420) {
    size = originalSize;
  }

  renderBalloon();
}

function shrink() {
  size = Math.max(originalSize, size - 5);
  colorIndex = (colorIndex - 1 + colors.length) % colors.length;
  renderBalloon();
}

balloon.addEventListener('click', grow);
balloon.addEventListener('mouseleave', shrink);
balloon.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    grow();
  }
});

renderBalloon();
