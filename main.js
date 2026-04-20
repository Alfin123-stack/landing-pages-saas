// Init Lucide Icons
lucide.createIcons();

// Mobile menu toggle
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobile-menu");

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

function closeMenu() {
  mobileMenu.classList.add("hidden");
}

// Form submission
const form = document.getElementById("register-form");
const successMsg = document.getElementById("success-msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const peran = document.getElementById("peran").value;

  if (!nama || !email || !peran) {
    alert("Mohon lengkapi nama, email, dan peran kamu.");
    return;
  }

  form.classList.add("hidden");
  successMsg.classList.remove("hidden");
  lucide.createIcons();
});
