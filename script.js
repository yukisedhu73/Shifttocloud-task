// Toggle mobile menu
const menuButton = document.querySelector('.menu-button');
const navMenus = document.querySelector('.nav-menus');
const productDropdown = document.querySelector('.dropdown');

menuButton.addEventListener('click', () => {
  navMenus.classList.toggle('active');
});

// Toggle only the "Products" dropdown on mobile
productDropdown.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevents event bubbling
  productDropdown.classList.toggle('active');
});


//product menu
function toggleCustomMenu() {
  const menu = document.querySelector('.custom-navbar .custom-menu');
  menu.classList.toggle('active');
}
// Add active class to the clicked menu item
const menuItems = document.querySelectorAll('.custom-navbar .custom-menu li a');
menuItems.forEach(item => {
  item.addEventListener('click', function() {
      // Remove active class from all items
      menuItems.forEach(link => link.classList.remove('active'));
      // Add active class to the clicked item
      this.classList.add('active');
  });
});