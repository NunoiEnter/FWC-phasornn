$(function () {
  const $balloon = $('#balloon');
  const colors = ['red', 'green', 'blue'];
  const originalSize = 200;
  let size = originalSize;
  let colorIndex = 0;

  function renderBalloon() {
    $balloon.css({
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: colors[colorIndex]
    });
  }

  $balloon.on('click keydown', function (event) {
    if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    if (event.type === 'keydown') {
      event.preventDefault();
    }

    size += 10;
    colorIndex = (colorIndex + 1) % colors.length;
    if (size > 420) {
      size = originalSize;
    }
    renderBalloon();
  });

  $balloon.on('mouseleave', function () {
    size = Math.max(originalSize, size - 5);
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    renderBalloon();
  });

  renderBalloon();
});
