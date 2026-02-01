
let products = JSON.parse(localStorage.getItem("products")) || [];
let list = document.getElementById("product-list");

products.forEach(p => {
  let div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `<h3>${p.name}</h3>
                   <img src="${p.image}" width="150">
                   <p>Price: ₹${p.price}</p>
                   <p>Size: ${p.size}</p>`;
  list.appendChild(div);
});
