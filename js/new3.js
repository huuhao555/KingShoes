//Thêm ảnh vào thêm sản phẩm
const imageUpload = document.getElementById('imageUpload');
    const uploadedImage = document.getElementById('uploaded-image');

    imageUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            uploadedImage.src = e.target.result;
        }

        reader.readAsDataURL(file);
    });