document.addEventListener("DOMContentLoaded", function () {
  var signUpForm = document.getElementById("form_validation");
      signUpForm.addEventListener("submit", function (event) {
          event.preventDefault();
  
          const brand = document.getElementById("sanpham-brand").value;
      
      var xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        "http://localhost/api-ecommerce/api/controllers/product.php",
        true,
      );
      xhr.setRequestHeader("Content-Type", "application/json");
  
      var data = {
      };
  
      var jsonData = JSON.stringify(data);
  
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 201) {
            var response = JSON.parse(xhr.responseText);
            alert(response.message);
          } else {
            console.error("Error:", xhr.status, xhr.statusText);
            alert("Error registering. Please try again later.");
          }
        }
      };
  
      xhr.send(jsonData);
    });
  });
  