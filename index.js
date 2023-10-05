// Get references to the navigation and menu items
const navigation = document.getElementById('navigation');
const menuItems = document.querySelectorAll('.horizontal-menu li');

// Function to change background color when scrolled
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navigation.classList.add('scrolled');
  } else {
    navigation.classList.remove('scrolled');
  }
});

// Function to change font color when hovered
menuItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    item.style.color = '#ff5733'; // Change font color on hover
  });

  item.addEventListener('mouseleave', () => {
    item.style.color = '#fff'; // Restore original font color on mouse leave
  });
});