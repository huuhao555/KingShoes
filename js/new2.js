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

// Thêm dòng dữ liệu vào bảng
table.appendChild(row);
}

// Thêm bảng vào body của trang
document.body.appendChild(table);


// Thêm bảng vào #tableContainer
tableContainer.appendChild(table);