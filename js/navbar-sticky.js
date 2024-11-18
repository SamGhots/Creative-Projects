window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) { // Adjust the scroll threshold as needed
    header.classList.add('transparent');
  } else {
    header.classList.remove('transparent');
  }
});