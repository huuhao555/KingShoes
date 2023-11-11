
// JavaScript để tạo và thêm bảng vào #tableContainer
const tableContainer = document.getElementById('tableContainer');
// Tạo cấu trúc bảng tương tự như ở phần trước
// Tạo bảng
const table = document.createElement('table');

// Tạo dòng tiêu đề của bảng
const headerRow = document.createElement('tr');

// Tạo cột "STT"
const sttHeader = document.createElement('th');
sttHeader.textContent = 'STT';
headerRow.appendChild(sttHeader);

// Tạo cột "Mã sản phẩm"
const codeHeader = document.createElement('th');
codeHeader.textContent = 'Mã sản phẩm';
headerRow.appendChild(codeHeader);

// Tạo cột "Tên sản phẩm"
const nameHeader = document.createElement('th');
nameHeader.textContent = 'Tên sản phẩm';
headerRow.appendChild(nameHeader);

// Tạo cột "Giá"
const priceHeader = document.createElement('th');
priceHeader.textContent = 'Giá';
headerRow.appendChild(priceHeader);

//Tạo cột chức năng
const functionHeader = document.createElement('th');
functionHeader.textContent = 'Chức năng';
headerRow.appendChild(functionHeader);
// Thêm dòng tiêu đề vào bảng

table.appendChild(headerRow);

// Tạo một số dòng dữ liệu ví dụ
// Đây là ví dụ, bạn có thể thêm dữ liệu thực tế tương ứng với ứng dụng của mình
for (let i = 1; i <= 10; i++) {
const row = document.createElement('tr');

const sttCell = document.createElement('td');
sttCell.textContent = i;
row.appendChild(sttCell);

const codeCell = document.createElement('td');
codeCell.textContent = 'MSP00' + i;
row.appendChild(codeCell);

const nameCell = document.createElement('td');
nameCell.textContent = 'Product ' + i;
row.appendChild(nameCell);

const priceCell = document.createElement('td');
priceCell.textContent = '$' + i * 100;
row.appendChild(priceCell);

// Tạo ô chứa nút "Xoá" và "Cập nhật"
const actionCell = document.createElement('td');

// Tạo nút "Xoá"
// Tạo nút "Xoá"
const deleteButton = document.createElement('button');
deleteButton.textContent = 'Xoá';
// ...

deleteButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    const isConfirmed = confirm('Xoá là mất, mất đừng tìm nhó!');
    
    if (isConfirmed) {
        // Tìm hàng cha của nút đã được click
        const row = event.target.parentNode.parentNode;
        
        // Loại bỏ hàng đó từ bảng
        table.removeChild(row);
        
        // (Tùy chọn) Có thể thêm logic xử lý sau khi xoá ở đây, ví dụ: cập nhật cơ sở dữ liệu, thông báo thành công, vv.
    }
});


// Tạo nút "Cập nhật"
// Tạo nút "Cập nhật"
const updateButton = document.createElement('button');
updateButton.textContent = 'Cập nhật';
updateButton.addEventListener('click', function(event) {
    // Ngăn chặn hành vi mặc định của nút
    event.preventDefault();
    
    // Hiển thị cửa sổ xác nhận
    const isConfirmed = confirm('Sure kèo hong bé ơi!!!');
    
    // Nếu người dùng xác nhận, thực hiện chuyển hướng
    if (isConfirmed) {
        window.location.href = 'sanpham-capnhat.html';
    }
});



// Thêm cả hai nút vào ô chứa
actionCell.appendChild(deleteButton);
actionCell.appendChild(updateButton);
actionCell.style.marginRight = '20px';

// Thêm ô chứa nút vào dòng
row.appendChild(actionCell);

// Thêm dòng dữ liệu vào bảng
table.appendChild(row);
}

// Thêm bảng vào body của trang
document.body.appendChild(table);

// Thêm bảng vào #tableContainer
tableContainer.appendChild(table);

