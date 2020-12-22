document.addEventListener('click', (event) => {
  let content = document.getElementById('content');
  
  // OPEN MODAL
  if (event.target.closest('.js-modal-open')) {
    let target = event.target.closest('.js-modal-open');
    let modal = document.getElementById('modal');
    let img = document.createElement('img');
    
    modal.classList.add('modal--active');
    img.src = target.src;
    content.appendChild(img);
    
    event.preventDefault();
  }

  // CLOSE MODAL
  if (
    event.target.closest('.js-modal-close') ||
    event.target.classList.contains('modal--active')
    ) {
      let modal = event.target.closest('.modal');
      modal.classList.remove('modal--active');

      while (content.firstChild) {
        content.removeChild(content.firstChild);
      }
      
      event.preventDefault();
  }
});
