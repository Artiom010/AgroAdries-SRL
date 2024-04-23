function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  var toggleButton = document.getElementById('toggleButton');
  if (sidebar.style.left === '-230px') {
    sidebar.style.left = '0px'; // Afișează sidebarul
    toggleButton.innerHTML = '<'; // Schimbă în semnul "<"
  } else {
    sidebar.style.left = '-230px'; // Ascunde sidebarul
    toggleButton.innerHTML = '>'; // Schimbă în semnul ">"
  }
}