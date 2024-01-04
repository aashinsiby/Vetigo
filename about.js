document.addEventListener('DOMContentLoaded', function() {
  // Select the elements
  const loadingContainer = document.querySelector('.loading-container');
  const content = document.querySelector('.page-content');
  const mobContent = document.querySelector('.mobile-content');

  // Hide both contents initially
  content.classList.add('hidden');
  mobContent.classList.add('hidden');

  // Add a delay to simulate the loading animation
  setTimeout(() => {
    loadingContainer.style.display = 'none'; // Hide loading container

    if (window.innerWidth < 768) {
      content.classList.add('hidden');
      mobContent.classList.remove('hidden'); // Show mobile content
    } else {
      content.classList.remove('hidden'); // Show desktop content
      mobContent.classList.add('hidden');
    }
  }, 2000); // Change the delay as needed
});
