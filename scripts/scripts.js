window.addEventListener('DOMContentLoaded', (event) => {
  const toggleButton = document.getElementById("menu-toggle");
  const navbarLinks = document.getElementsByClassName('navbar-links')[0];

  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
  });
});
