const accessToken = localStorage.getItem("accessToken");

if (!accessToken) {
  window.location.href =
    "/api-ecommerce/KingShoes/WebKINGSHOES/Dang%20nhap%20dang%20ki/dangnhap.html";
} else {
  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "http://localhost/api-ecommerce/api/controllers/user.php",
    true,
  );

  xhr.setRequestHeader("Authorization", "Bearer " + accessToken);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      // Check if the request is complete
      var response = JSON.parse(xhr.responseText);
      if (response.status === 200) {
        console.log(response.email);
        document.querySelector(".name").innerHTML = response.name;
        document.querySelector(".email").innerHTML = response.email;
      } else {
        console.error("Error:", xhr.status, xhr.statusText);
      }
    }
  };

  xhr.send();
}
