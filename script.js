const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('.primary-nav');
const filterButtons = document.querySelectorAll('.filter');
const postCards = document.querySelectorAll('.post-card');
const subscribeForm = document.querySelector('.subscribe-form');
const formStatus = document.querySelector('.form-status');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

navToggle?.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));

    postCards.forEach((card) => {
      const categories = card.dataset.categories.split(' ');
      const show = filter === 'all' || categories.includes(filter);
      card.classList.toggle('is-hidden', !show);
    });
  });
});

subscribeForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = new FormData(subscribeForm).get('email');
  formStatus.textContent = `Thanks — ${email} is on the list.`;
  subscribeForm.reset();
});

document.addEventListener('click', (event) => {
  if (!primaryNav.contains(event.target) && !navToggle.contains(event.target)) {
    primaryNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
