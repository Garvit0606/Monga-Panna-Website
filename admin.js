function addProduct() {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let size = document.getElementById("size").value;
  let file = document.getElementById("image").files[0];

  if (!name || !price || !file) {
    alert("Please fill all fields");
    return;
  }

  let reader = new FileReader();
  reader.onload = function () {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push({
      name: name,
      price: price,
      size: size,
      image: reader.result
    });
    localStorage.setItem("products", JSON.stringify(products));
    alert("Product Added Successfully");
  };
  reader.readAsDataURL(file);
}
