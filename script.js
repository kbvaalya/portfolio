document.querySelectorAll('.nav-links a, .btn, .btn-outline').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});


const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', (e) => {
  formMsg.textContent = '';

  if (nameInput.value.trim() === '') {
    e.preventDefault();
    formMsg.textContent = 'Введите имя';
    return;
  }

  if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
    e.preventDefault();
    formMsg.textContent = 'Введите корректный email';
    return;
  }

  formMsg.style.color = 'green';
  formMsg.textContent = 'Отправлено!';
});



const toTopBtn = document.getElementById('toTopBtn');

window.addEventListener('scroll', () => {
  toTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

toTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



const accButtons = document.querySelectorAll('.acc-btn');

accButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling;
    panel.style.display = (panel.style.display === 'none' || panel.style.display === '') ? 'block' : 'none';
  });
});



const themeToggle = document.getElementById('theme-toggle');
let isLightMode = false;

themeToggle.addEventListener('click', () => {
  isLightMode = !isLightMode;
  document.body.classList.toggle('light-mode', isLightMode);
  themeToggle.textContent = isLightMode ? '🌙' : '☀️'; 
});
