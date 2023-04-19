let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.querySelector('header').classList.remove('section__header--hide');
  } else {
    document.querySelector('header').classList.add('section__header--hide');
  }

  prevScrollPos = currentScrollPos;
};
