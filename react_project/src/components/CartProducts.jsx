
import { NavLink } from "react-router-dom"
  function CartProducts({cart,setCart}){

  function increase(id){
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  function decrease(id) {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }
  
  function removeProduct(id) {
    setCart(prevCart =>
      prevCart.filter(item => item.id !== id)
    );
  }
 let total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  )
  return (
    <div className="cart-section">
      <h2>My Shopping Cart 🛒</h2>
      <NavLink to="/">
        <button>Back to Products</button>
      </NavLink>
      {cart.length === 0 ? (
        <h3>Cart is Empty!</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <p>
                  Subtotal: ₹{item.price * item.quantity}
                </p>
                <div>
                  <button onClick={() => decrease(item.id)}>
                    -
                  </button>
                  <span style={{ margin: "0 15px" }}>
                    {item.quantity}
                  </span>

                  <button onClick={() => increase(item.id)}>
                    +
                  </button>
                </div>
                <button onClick={() => removeProduct(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h2>Total Amount: ₹{total}</h2>
        </>
      )}
    </div>
  )
}

export default CartProducts