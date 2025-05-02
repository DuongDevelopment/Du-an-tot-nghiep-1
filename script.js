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
