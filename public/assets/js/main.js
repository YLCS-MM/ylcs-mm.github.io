function toggleMenu() {
  var nav = document.getElementsByClassName("site-header-nav")[0];
  if (nav.style.display == "inline-flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "inline-flex";
  }
}

(function () {
  var gotop = document.querySelector('.gotop');
  if (!gotop) return;

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        if (window.scrollY > window.innerHeight) {
          gotop.classList.add('visible');
        } else {
          gotop.classList.remove('visible');
        }
        ticking = false;
      });
      ticking = true;
    }
  });

  gotop.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();