function loadHTML(elementId, fileName) {
  fetch(fileName)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading the file:', error);
    });
}

document.addEventListener("DOMContentLoaded", function() {
  loadHTML('header', 'header.html');
  loadHTML('footer', 'footer.html');
});
