// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
   navbar.classList.toggle('active');
   menuIcon.classList.toggle('bx-x');

   console.log('hi there');
};

// scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
   sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
         navLinks.forEach((links) => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
         });
      }
   });

   // sticky navbat
   let header = document.querySelector('header');
   header.classList.toggle('sticky', window.scrollY > 100);

   // remove toggle icon and novbar when clicked (scroll)
   navbar.classList.remove('active');
   menuIcon.classList.remove('bx-x');
};

// ----------------
//scroll reveal
ScrollReveal({
   // reset: true,
   distance: '80px',
   duration: 2000,
   delay: 200,
});

ScrollReveal().reveal(
   '.page-1,.page-2,.page-3,.page-4,.page-5,.page-6,.page-7,.page-8,.page-9,.page-10,.page-11,.page-12,.page-13,.page-14,.page-15 ',
   {
      origin: 'top',
   }
);
