// import { useState } from 'react'
// import ProductsRevision from './components/ProductRevision.jsx'
// import CartRevision from './components/CartRevision.jsx'
// import ProductRevision from './components/ProductRevision.jsx'

// function App() {
 
//   let [cartItems, setCartItems] = useState([])

//     function addToCart(product){
//      let existingProduct = cartItems.find(item => item.id === product.id)

//     if (existingProduct) {

//         setCartItems(
//             cartItems.map(item =>
//                 item.id == product.id
//                 ? {...item, quantity: item.quantity + 1}
//                 : item
//             )
//         )

//     }

//     else {

//         setCartItems([...cartItems, {...product, quantity: 1}])

//     }

// }
      
// function decreaseQuantity(product) {

//     setCartItems(
//         cartItems.map(item =>
//             item.id == product.id
//             ? {...item, quantity: item.quantity - 1}
//             : item
//         ).filter(item => item.quantity > 0)
//     )

// }

        

//   return (
//     <>
//    <ProductRevision addToCart={addToCart} cartItems={cartItems} decreaseQuantity={decreaseQuantity}/>
//    <CartRevision addToCart={addToCart} cartItems={cartItems} decreaseQuantity={decreaseQuantity} />
//     </>
  
//   )
// }

// export default App





// import { useState } from "react"
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import CartPro from "./components/CartPro"
// import CartProducts from "./components/CartProducts"
// import "./styles/first.css"
// import ProductDetail from "./components/ProductDetail"

// function App() {
//   const products = [
//     {
//       id: 1,
//       name: "Headphones",
//       price: 2000,
//       image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
//     },
//     {
//       id: 2,
//       name: "Watch",
//       price: 1500,
//       image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
//     },
//     {
//       id: 3,
//       name: "Camera",
//       price: 5000,
//       image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
//     },
//     {
//       id: 4,
//       name: "Shoes",
//       price: 2500,
//       image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
//     },
//     {
//       id: 5,
//       name: "Handbag",
//       price: 1200,
//       image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400"
//     },
//         {id: 6, name: "Handbag", price: 1200, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400"},
//         {id: 7, name: "Sunglasses", price: 700, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400"},
//         {id: 8, name: "Phone", price: 15000, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"},
//         {id: 9, name: "Keyboard", price: 800, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400"},
//         {id: 10, name: "Mouse", price: 500, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400"},
//         {id: 11, name: "Speaker", price: 1500, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400"},
//         {id: 12, name: "Bottle", price: 300, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400"},
//         {id: 13, name: "T-Shirt", price: 600, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"},
//         {id: 14, name: "Watch", price: 1800, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400"},
//         {id: 15, name: "Chair", price: 5000, image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400"}
//   ]

//   const [cart, setCart] = useState([])
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<CartPro products={products} cart={cart} setCart={setCart} /> }/>

//         <Route path="/cart" element={<CartProducts cart={cart} setCart={setCart} /> }/>
//         <Route path="/productdetail/:id" element={<ProductDetail products={products}/>}/>

//       </Routes>


//     </BrowserRouter>
//   )
// }
// export default App

import React from "react";
import Form from "./components/Form"
import "./styles/first.css"

function App() {
  return (
    <>
      <Form />
    </>
  )
}

export default App