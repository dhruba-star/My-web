const form = document.getElementById('nameForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('nameInput').value.trim();
  if (name) {
    localStorage.setItem('gfName', name);
    window.location.href = 'main.html';
  }
});
