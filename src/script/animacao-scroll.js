const sections = document.querySelectorAll('.js-scroll');
const offsetToAnimation = window.innerHeight * 0.6;

if (sections.length) {
  function animacaoScroll() {
    sections.forEach((item) => {
      const sectionOffsetTop = item.getBoundingClientRect().top;
      const isSectionVisible = sectionOffsetTop - offsetToAnimation <= 0;

      if (isSectionVisible) {
        item.classList.add('ativo');
      } else {
        item.classList.remove('ativo');
      }
    });
  }
  animacaoScroll();

  window.addEventListener('scroll', animacaoScroll);
}
