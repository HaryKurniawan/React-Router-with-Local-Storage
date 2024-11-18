import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleViewDetails = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <img src={product.image} alt={product.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <h3>{product.title}</h3>
      <p>Harga: ${product.price}</p>
      <button onClick={handleAddToCart} style={{ marginRight: "8px" }}>Add to Cart</button>
      <button onClick={handleViewDetails}>Detail Produk</button>
    </div>
  );
}

export default ProductCard;
