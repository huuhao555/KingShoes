document.addEventListener("DOMContentLoaded", function () {
  var signUpForm = document.getElementById("sign_up");
  signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("namesurname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "http://localhost/api-ecommerce/api/controllers/register.php",
      true,
    );
    xhr.setRequestHeader("Content-Type", "application/json");

    var data = {
      name: name,
      email: email,
      password: password,
    };

    var jsonData = JSON.stringify(data);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        // Check if the request is complete
        var response = JSON.parse(xhr.responseText);
        if (xhr.status === 201) {
            alert(response.message);
          setTimeout(()=> {
            window.location.href =
            "/api-ecommerce/KingShoes/WebKINGSHOES/Dang%20nhap%20dang%20ki/dangnhap.html";
          }, 1000);
        } else {
          alert(response.message);
        }
      }
    };
    xhr.send(jsonData);
  });
});
