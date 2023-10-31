
    const numberInput = document.getElementById('numberInput');

    numberInput.addEventListener('input', function(event) {
        let value = event.target.value.replace(/\D/g, ''); // Loại bỏ tất cả ký tự không phải số
        const regex = /\B(?=(\d{3})+(?!\d))/g; // Regex để thêm dấu cách sau mỗi 3 số

        value = value.replace(regex, ' '); // Thêm dấu cách sau mỗi 3 số

        event.target.value = value; // Gán giá trị đã được định dạng lại vào input
    });
