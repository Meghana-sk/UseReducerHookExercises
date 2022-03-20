import { useState, useReducer } from "react";
import Cart from "./Cart";
import ProductListing from "./ProductListing";
import quantityReducer from "./UseQuantityReducer";
import "./styles.css";

const itemsInCart = [
  {
    id: 1,
    name: "kala chasma",
    price: 1000
  },
  {
    id: 2,
    name: "laal chhadi",
    price: 500
  },
  {
    id: 3,
    name: "jalebi",
    price: 50
  },
  {
    id: 4,
    name: "japani joota",
    price: 10000
  }
];

const cart = { itemsInCart, quantity: 4 };

export default function App() {
  // const [items, setItems] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(0);

  const reducerFn = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          items: state.items + 1,
          price: state.price + action.price
        };
      case "MOVE_TO_WISHLIST":
        return {
          ...state,
          items: state.items - 1,
          price: state.price - action.price
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFn, { items: 0, price: 0 });
  const { items, price } = state;
  return (
    <div className="App">
      <h1 className="app-header">Cart Management using useReducer</h1>
      <div className="app-body">
        {/* <Cart /> */}
        {/* {itemsInCart.map((el) => (
          <ProductListing {...el} />
        ))} */}
        <h1>Items in your cart</h1>
        <h3>Total Items in cart: {items}</h3>
        <h3>Total price: {price} </h3>
        {itemsInCart.map((el) => (
          <div
            style={{ border: "1px solid red", margin: "2px", padding: "10px" }}
          >
            <p>{el.name}</p>
            <p>{el.price}</p>
            <button>+</button>
            <span>Quantity</span>
            <button>-</button>
            <button
              onClick={() => {
                // setItems((items) => items + 1);
                dispatch({ items: 0, type: "ADD_TO_CART", price: el.price });
                // setTotalPrice((totalPrice) => totalPrice + el.price);
              }}
            >
              Add to cart
            </button>
            <button
              onClick={() => {
                // setItems((items) => (items > 0 ? items - 1 : 0));
                dispatch({
                  items: 0,
                  type: "MOVE_TO_WISHLIST",
                  price: el.price
                });
                // setTotalPrice((totalPrice) => totalPrice - el.price);
              }}
            >
              Move to wislist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
