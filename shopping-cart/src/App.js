import React, { useState } from "react";
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Shirt", price: 500, image: "/images/shirt.jpg" },
    { id: 2, name: "Office Shirt", price: 800, image: "/images/office shirt.jpg" },
    { id: 3, name: "Sweat Shirt", price: 1200, image: "/images/sweat shirt.jpeg" },
    { id: 4, name: "T Shirt", price: 1000, image: "/images/t shirt.jpg" },
  ];
  

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  // Handle the buy action
  const handleBuy = () => {
    alert("Thank you for your purchase!");
    setCart([]);
    setTotal(0);
  };

  return (
    <div className="App">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Cart</h2>
      <div className="cart">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
            <p>Total: ${total}</p>
            <button onClick={handleBuy}>Buy Now</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
