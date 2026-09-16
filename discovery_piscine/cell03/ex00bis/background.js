$(function () {
  $('#change-bg').on('click', function () {
    const value = Math.floor(Math.random() * 0xffffff);
    const color = `#${value.toString(16).padStart(6, '0')}`;
    $('body').css('background-color', color);
  });
});
