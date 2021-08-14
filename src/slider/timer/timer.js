let timer = setInterval(autoPlay, 3000);

function autoPlay() {
  nextSlide();
  updateSliderControlButtons();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoPlay, 3000);
}
