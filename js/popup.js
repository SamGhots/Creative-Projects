document.addEventListener('DOMContentLoaded', function() {
  const popup = document.getElementById('popup');
  const popupImg = document.getElementById('popup-img');
  const caption = document.getElementById('caption');
  const closeBtn = document.querySelector('.popup-close');
  const prevBtn = document.querySelector('.popup-prev');
  const nextBtn = document.querySelector('.popup-next');
  const triggers = document.querySelectorAll('.popup-trigger');

  const images = Array.from(triggers).map(trigger => ({
    src: trigger.src,
    title: trigger.title
  }));

  let currentIndex = 0;

  function showPopup(index) {
    popupImg.src = images[index].src;
    caption.innerHTML = images[index].title;
    popup.style.display = 'block';
    popup.classList.add('show');
  }

  function hidePopup() {
    popup.classList.remove('show');
    setTimeout(() => {
      popup.style.display = 'none';
    }, 500); // Match the transition duration
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showPopup(currentIndex);
  }

  function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showPopup(currentIndex);
  }

  // Event listeners for buttons
  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents click from bubbling up to the popup container
    showPrevImage();
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents click from bubbling up to the popup container
    showNextImage();
  });

  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents click from bubbling up to the popup container
    hidePopup();
  });

  // Event listeners for popup triggers
  triggers.forEach((trigger, index) => {
    trigger.addEventListener('click', () => {
      currentIndex = index;
      showPopup(currentIndex);
    });
  });

  // Close popup when clicking outside the image
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      hidePopup();
    }
  });
});