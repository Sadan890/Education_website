// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

// Search Function
function searchCourse() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.course-card');
  cards.forEach(card => {
    const title = card.querySelector('h3').innerText.toLowerCase();
    card.style.display = title.includes(input) ? 'block' : 'none';
  });
}

// Contact Form
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent successfully!');
  e.target.reset();
});

const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeSidebar');

menuBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
});
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});