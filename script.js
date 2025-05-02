let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartList = document.getElementById('cart-list');
  const cartTotal = document.getElementById('cart-total');
  const cartBox = document.getElementById('cart-items');

  // Hiện giỏ hàng nếu có món
  if (cart.length > 0) {
    cartBox.style.display = 'block';
  } else {
    cartBox.style.display = 'none';
  }

  // Làm mới danh sách hiển thị
  cartList.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${item.name} - ${item.price.toLocaleString()}đ`;
    cartList.appendChild(li);
  });

  // Hiển thị tổng tiền
  cartTotal.textContent = total.toLocaleString();
}

// Giả sử bạn đã có danh sách các món người dùng chọn:
let cartItems = [
  { name: "item", price: 30000 },
  { name: "Cơm rang đùi gà", price: 45000 }
]; // Ví dụ, lấy từ localStorage hoặc biến toàn cục

document.getElementById("order-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();

  const confirmationDiv = document.getElementById("order-confirmation");

  if (!name || !phone || !address || cartItems.length === 0) {
    confirmationDiv.innerHTML = `
      <h3>❌ Không có đơn hàng nào được gửi lên máy chủ</h3>
    `;
    return;
  }

  // Tạo danh sách món đã đặt
  let itemsListHTML = "<ul>";
  cartItems.forEach(item => {
    itemsListHTML += `<li>${item.name} - ${item.price.toLocaleString()}đ</li>`;
  });
  itemsListHTML += "</ul>";

  // Hiển thị thông tin đơn hàng
  confirmationDiv.innerHTML = `
    <h3>✅ Đặt hàng thành công!</h3>
    <p><strong>Khách hàng:</strong> ${name}</p>
    <p><strong>SDT:</strong> ${phone}</p>
    <p><strong>Địa chỉ:</strong> ${address}</p>
    <p><strong>Món đã đặt:</strong></p>
    ${itemsListHTML}
  `;
});
