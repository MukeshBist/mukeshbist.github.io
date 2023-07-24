// new.js

function submit() {
  // Get the values entered by the user for the name and message
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  // Check if both the name and message are empty
  if (name.trim() == "" || message.trim() == "") {
    alert("Please enter both name and message before submitting.");
    return;
  }

  
  // If both name and message are not empty, show the success alert
  alert("Your name and message have been submitted successfully!");
}



document.getElementById("thank").addEventListener("dblclick", function click() {
    var url = "https://www.facebook.com/rekhendra.bohara.5";
    window.location.href = url;
  });
  