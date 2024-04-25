function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  var toggleButton = document.getElementById('toggleButton');
  if (sidebar.style.left === '-230px') {
    sidebar.style.left = '0px'; 
    toggleButton.innerHTML = '<';
  } else {
    sidebar.style.left = '-230px';
    toggleButton.innerHTML = '>';
  }
}