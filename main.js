const about = document.getElementsByClassName('about')[0];
const works = document.getElementsByClassName('works')[0];
const blog = document.getElementsByClassName('blog')[0];
const contact = document.getElementsByClassName('contact')[0];

window.addEventListener('scroll', (e) => {
  // let windowHeight = window.parent.screen.height;
  const HEADER_HEIGHT = 100;
  let windowHeight = window.innerHeight;
  const posAbout = about.offsetTop - HEADER_HEIGHT - windowHeight / 4;
  const posWorks = works.offsetTop - HEADER_HEIGHT - windowHeight / 4;
  const posBlog = blog.offsetTop - HEADER_HEIGHT - windowHeight / 4;
  const posContact = contact.offsetTop - HEADER_HEIGHT - windowHeight / 4;

  const header = document.getElementsByTagName('header')[0];
  header.classList.toggle('header-shadow', window.pageYOffset > 50);

  const navbarMenu = document.getElementsByClassName('menu')[0].children;
  navbarMenu[0].children[0].classList.toggle(
    'active',
    window.pageYOffset < posAbout
  );
  navbarMenu[1].children[0].classList.toggle(
    'active',
    window.pageYOffset > posAbout && window.pageYOffset < posWorks
  );
  navbarMenu[2].children[0].classList.toggle(
    'active',
    window.pageYOffset > posWorks && window.pageYOffset < posBlog
  );
  navbarMenu[3].children[0].classList.toggle(
    'active',
    window.pageYOffset > posBlog && window.pageYOffset < posContact
  );
  navbarMenu[4].children[0].classList.toggle(
    'active',
    window.pageYOffset > posContact
  );
});
