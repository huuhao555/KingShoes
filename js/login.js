
document.addEventListener("DOMContentLoaded", function  () {
  // Wait for the DOM to be fully loaded before adding event listeners

  var loginForm = document.getElementById("sign_in");

  loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Get the values from the form
      var email = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      // Create the request object
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost/api-ecommerce/api/controllers/login.php", true);
      xhr.setRequestHeader("Content-Type", "application/json");

      // Set up the data to be sent
      var data = {
          "email": email,
          "password": password
      };

      // Convert the data to JSON format
      var jsonData = JSON.stringify(data);

      // Set up the callback function to handle the response
      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
              if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                (response.admin) ? window.location.href = "/api-ecommerce/KingShoes/index.html" : alert('Không phải admin bé ơi') 
              } else {
                  // Handle errors or display a message to the user
                  console.error("Login failed");
              }
          }
      };

      // Send the request with the JSON data
      xhr.send(jsonData);
  });
});
