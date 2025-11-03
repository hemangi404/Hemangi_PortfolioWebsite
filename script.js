// Contact form demo
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("This is a demo form. Please contact via email instead: hemangichaudhari012@gmail.com");
});

// Greeting message based on time
const hour = new Date().getHours();
const greeting = document.getElementById("greeting");
if (hour < 12) {
  greeting.innerHTML = "Good Morning — I'm <span id='hero-name'>Hemangi</span>";
} else if (hour < 18) {
  greeting.innerHTML = "Good Afternoon — I'm <span id='hero-name'>Hemangi</span>";
} else {
  greeting.innerHTML = "Good Evening — I'm <span id='hero-name'>Hemangi</span>";
}