// Add any JavaScript functionality here
// Example: Form validation or dynamic content loading
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
  });
  
// Add this to script.js
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});
// Dynamic Content Loading
//Load services dynamically using JavaScript.

//javascript
// Add this to script.js
const services = [
  {
    title: "Web Development",
    description: "We build responsive and user-friendly websites tailored to your needs.",
    image: "images/product1.jpg"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud services for your business.",
    image: "images/product2.jpg"
  },
  {
    title: "AI Solutions",
    description: "Harness the power of artificial intelligence for your business.",
    image: "images/product3.jpg"
  }
];
//javascript
// script.js
//Form Validation
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
const serviceCards = document.querySelector('.service-cards');
services.forEach(service => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <img src="${service.image}" alt="${service.title}">
    <h3>${service.title}</h3>
    <p>${service.description}</p>
  `;
  serviceCards.appendChild(card);
});
// Add this to script.js
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Add this to script.js
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});







  

