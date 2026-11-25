import React, { useState } from 'react'
import {Link} from "react-router-dom"
import  CartRevision from '../Component/Cart'

const CartPro = ({products, addToCart, cartItems, decreaseQuantity}) => {

  
  return (
    
    <>
   <nav style={{
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  alignItems: "center",
  margin: "5vh"
}}>
  <Link to="/">Products</Link>
  <Link to="/Cart">Cart ({cartItems.length})</Link>
</nav>
      <h1 style={{textAlign:"center"}}>Our Products</h1>

            <div style={{
                display:"flex",
                flexWrap:"wrap",
                justifyContent:"center",
                gap:"40px",
                padding:"20px"
            }}>
        {
            products.map((product)=>{
                return(
                   <div key={product.id} style={{
                        width:"220px",
                        padding:"15px",
                        background:"white",
                        textAlign:"center",
                        borderRadius:"10px",
                        boxShadow:"0px 2px 10px gray"
                    }}>
                        <h2 style={{
                            color:"black"
                        }}> {product.name}</h2>
                        <img src={product.image} style={{
                                width:"100%",
                                height:"160px",
                                objectFit:"contain"
                            }} />
                        <h3 style={{
                            color:"black"
                        }}>Price: {product.price}</h3>
                        
                        {
                            cartItems.find(item=> item.id == product.id)  ? (
                                <div>
                                <button style={{
                            background:"black",
                            color:"white",
                            padding:"10px 20px",
                            border:"none",
                            cursor:"pointer"
                        }} onClick={()=>decreaseQuantity(product)}>-</button>
                                <button style={{
                            background:"black",
                            color:"white",
                            padding:"10px 20px",
                            border:"none",
                            cursor:"pointer"
                        }}>{
                                        cartItems.find(cartItem => cartItem.id == product.id).quantity
                                    }</button>
                                <button style={{
                            background:"black",
                            color:"white",
                            padding:"10px 20px",
                            border:"none",
                            cursor:"pointer"
                        }} onClick={()=>addToCart(product)}>+</button>
                            </div>
                            )
                            
                            : <>
                            <button style={{
                            background:"black",
                            color:"white",
                            padding:"10px 20px",
                            border:"none",
                            borderRadius:"5px",
                            cursor:"pointer"
                        }} onClick={()=>addToCart(product) }><Link to="/Cart" style={{fontFamily:"bold" , color:"white",textDecoration: "none"}}>Add to cart </Link>
                       </button>
                       <Link to={`/shoe/${product.id}`} style={{
                            background:"black",
                            color:"white",
                            padding:"5px",
                            border:"none",
                            borderRadius:"5px",
                            cursor:"pointer"
                        }}>View details</Link>
                      </>
                       
                        }
                        
                    </div>
                )
            })
        }
        </div>
    </>
  )
}

export default CartPro