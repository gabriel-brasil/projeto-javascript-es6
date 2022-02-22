const linksIternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(link) {
  link.preventDefault();
  const href = link.currentTarget.getAttribute('href');
  const section = document.querySelector(href);

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

  // ### forma alternativa para scroll suave
  // const sectionOffsetTop = section.offsetTop;
  // window.scrollTo({
  //   top: sectionOffsetTop,
  //   behavior: 'smooth',
  // });
}

linksIternos.forEach((link) => {
  link.addEventListener('click', scrollToSection);
});
