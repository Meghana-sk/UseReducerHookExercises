export default function ProductListing({ name, price }) {
  return (
    <div style={{ border: "1px solid red", margin: "2px", padding: "10px" }}>
      <p>{name}</p>
      <p>{price}</p>
      <button>+</button>
      <span>Quantity</span>
      <button>-</button>
      <button>Add to cart</button>
      <button>Move to wislist</button>
    </div>
  );
}
