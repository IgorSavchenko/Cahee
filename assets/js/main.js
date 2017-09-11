document.addEventListener('DOMContentLoaded', function() {
  let links = Array.from(document.querySelectorAll('.nav__link'));
  for (i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      links.forEach((link) => {
        if (link.classList.contains('is-active')) link.classList.remove('is-active');
      });
      this.classList.add('is-active');
    });
  }
});
