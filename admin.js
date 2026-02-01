
function addProduct() {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let size = document.getElementById("size").value;
  let imgInput = document.getElementById("image");

  let reader = new FileReader();
  reader.onload = function() {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push({ name, price, size, image: reader.result });
    localStorage.setItem("products", JSON.stringify(products));
    alert("Product Added Successfully");
  };
  reader.readAsDataURL(imgInput.files[0]);
}
