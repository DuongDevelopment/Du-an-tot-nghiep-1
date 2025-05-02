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

document.getElementById("order-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;

  const confirmation = `
    <h3>✅ Đặt hàng thành công!</h3>
    <p><strong>Khách hàng:</strong> ${name}</p>
    <p><strong>SĐT:</strong> ${phone}</p>
    <p><strong>Địa chỉ:</strong> ${address}</p>
  `;

  document.getElementById("order-confirmation").innerHTML = confirmation;
});
