import { useState } from "react";
import "./ProductsForm.css";

function ProductsForm() {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    category: "",
  });

  function handleInput(e) {
    let text = e.target.value;
    let name = e.target.name;
    console.log(name, text);

    // 3 steps
    let copy = { ...product };
    if (name == "title") {
      copy.title = text;
    } else if (name == "price") {
      copy.price = text * 1;
    } else if (name == "category") {
      copy.category = text;
    } else {
      copy.image = text;
    }
    setProduct(copy);
  }

  function save() {
    console.log(product);
  }

  return (
    <div className="product-form">
      <h3>Register new Products</h3>
      <div>
        <label>Title</label>
        <input onBlur={handleInput} type="text" />
      </div>
      <div>
        <label>Price</label>
        <input onBlur={handleInput} type="text" />
      </div>
      <div>
        <label>image</label>
        <input onBlur={handleInput} type="text" />
      </div>
      <div>
        <label>Category</label>
        <input onBlur={handleInput} type="text" />
      </div>
      <div className="controls">
        <button onClick={save} className=".button-43">
          Save Coupon
        </button>
      </div>
    </div>
  );
}

export default ProductsForm;
