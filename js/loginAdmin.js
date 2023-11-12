document.addEventListener("DOMContentLoaded", function  () {

  var loginForm = document.getElementById("sign_in");

  loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); 

      var email = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      var xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost/api-ecommerce/api/controllers/login.php", true);
      xhr.setRequestHeader("Content-Type", "application/json");

      var data = {
          "email": email,
          "password": password
      };

      var jsonData = JSON.stringify(data);

      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            var response = JSON.parse(xhr.responseText);
              if (xhr.status === 200) {
                localStorage.setItem('accessToken', response.token);
                console.log(localStorage.getItem('accessToken'));
                (response.admin) ? window.location.href = "/api-ecommerce/KingShoes/index.html" : alert('Không phải admin bé ơi') 
              } else {
                  alert(response.message);
              }
          }
      };

      xhr.send(jsonData);
  });
});
