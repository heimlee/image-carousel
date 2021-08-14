let slides = document.querySelector('.slider-wrapper').children;
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let controlButtons = document.querySelector('.slider-control-buttons');

let index = 0;

prev.addEventListener('click', () => {
  prevSlide();
  updateSliderControlButtons();
  resetTimer();
});

next.addEventListener('click', () => {
  nextSlide();
  updateSliderControlButtons();
  resetTimer();
});

function circleControlButtons() {
  for (let i = 0; i < slides.length; i++) {
    let div = document.createElement('div');
    div.innerHTML = i + 1;
    div.setAttribute('onclick', 'controlSlide(this)');
    div.id = i;

    if (i == 0) {
      div.className = 'active';
    }

    controlButtons.appendChild(div);
  }
}

circleControlButtons();

function controlSlide(element) {
  index = element.id;
  changeSlide();
  updateSliderControlButtons();
}

function updateSliderControlButtons() {
  for (let i = 0; i < controlButtons.children.length; i++) {
    controlButtons.children[i].classList.remove('active');
  }

  controlButtons.children[index].classList.add('active');
}

function prevSlide() {
  if (index == 0) {
    index = slides.length -1;
  } else {
    index--;
  }

  changeSlide();
}

function nextSlide() {
  if (index == slides.length - 1) {
    index = 0;
  } else {
    index++;
  }

  changeSlide();
}

function changeSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  slides[index].classList.add('active');
}
