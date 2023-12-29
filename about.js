document.addEventListener('DOMContentLoaded', function() {
 // Select the elements
 const loadingContainer = document.querySelector('.loading-container');
 const content = document.querySelector('.page-content');

 // Hide the content initially
 content.classList.add('hidden');

 // Add a delay to simulate the loading animation
 setTimeout(() => {
   // Hide the loading container (loading image) and show the content
   loadingContainer.style.display = 'none';
   content.classList.remove('hidden');
 }, 2000); // Change the delay as needed
});
