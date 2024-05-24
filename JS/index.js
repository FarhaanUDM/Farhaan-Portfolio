/* =============== Typing Animation================= */
var typed = new Typed('.typing', {
  strings: [
    'Software Engineer Student',
    'Entry-level Software Engineer',
    " 'Fresh Graduate'  ",
  ],
  typeSpeed: 50,
  BackSpeed: 30,
  loop: true,
});

/* =============== Aside ================= */
const nav = document.querySelector('.nav'),
  navList = nav.querySelectorAll('li'),
  totalNavList = navList.length,
  allSection = document.querySelectorAll('.section'),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector('a');
  a.addEventListener('click', function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector('a').classList.contains('active')) {
        addBackSection(j);
      }
      navList[j].querySelector('a').classList.remove('active');
    }
    this.classList.add('active');
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove('active');
  }
  const target = element.getAttribute('href').split('#')[1];
  document.querySelector('#' + target).classList.add('active');
}

document.querySelector('.hire-me').addEventListener('click', function () {
  const sectionIndex = this.getAttribute('data-section-index');

  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector('.nav-toggler'),
  aside = document.querySelector('.aside');
navTogglerBtn.addEventListener('click', () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle('open');
  navTogglerBtn.classList.toggle('open');
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle('open');
  }
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove('back-section');
  }
}

function addBackSection(num) {
  allSection[num].classList.add('back-section');
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector('a').classList.remove('active');
    const target = element.getAttribute('href').split('#')[1];
    if (
      target ===
      navList[i].querySelector('a').getAttribute('href').split('#')[1]
    ) {
      navList[i].querySelector('a').classList.add('active');
    }
  }
}

/* document.getElementById("sendEmail").addEventListener("click", function() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var mailtoLink = "mailto:your-email@example.com" +
    "?subject=" + encodeURIComponent("Contact Form Submission") +
    "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);

  window.location.href = mailtoLink;
}); */

/* Button LINKS */
document
  .getElementById('eportfolio-link')
  .addEventListener('click', function () {
    // Open the new project page
    window.open('e-portfolio.html', '_blank');
  });

document
  .getElementById('ecommerce-link')
  .addEventListener('click', function () {
    // Open the new project page
    window.open('e-commerce.html', '_blank');
  });

document
  .getElementById('pharmacy-sys-link')
  .addEventListener('click', function () {
    // Open the new project page
    window.open('pharmacy-sys.html', '_blank');
  });
