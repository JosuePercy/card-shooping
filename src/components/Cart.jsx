import './Cart.css'
import React, { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'


  function CartItem({ title, price, thumbnail, quantity, addToCart }) {
    return (
      <li>
        <img src={thumbnail} alt={title} />
        <div>
          <strong>{title}</strong> - ${price}
        </div>
        <footer>
          <small>Qty: {quantity}</small>
          <button onClick={ addToCart }>+</button>
        </footer>
      </li>
    );
  }


export function Cart() {

  const cardCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart();
 
  return (
    <>
      <label className="cart-button" htmlFor={cardCheckboxId}>
        <CartIcon />
      </label>
      <input id={cardCheckboxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem 
              key={product.id}
              addToCart={ () => addToCart(product)}
              { ...product }
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
