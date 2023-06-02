// Create a function to handle the click event on the <li> elements
function handleClick(event) {
  // Get the <li> element that was clicked
  var liElement = event.target;

  // Set the liElement's 'hover' class to 'active'
  liElement.classList.add('active');
}

// Attach the click event handler to all <li> elements
document.querySelectorAll('li').forEach(function(liElement) {
  liElement.addEventListener('click', handleClick);
});
