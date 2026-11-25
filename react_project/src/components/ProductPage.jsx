import React from "react"
import Card from "./Card"

const ProductPage = () =>{

    let products=[
        {
            name: "Laptop",
            price: "$1200",
            src: "/nature.jpg"
        },
          {
            name: "TV",
            price: "$1200",
            src: "/www_internet_globe_grid.jpg"
        },
          {
            name: "Mobile",
            price: "$500",
            src: "/images.png"
        },
        {
            name: "Table lamp",
            price: "$500",
            src: "/images.png"
        }
    ]

    // let [product1,product2,product3] = products        // with desturctring

    return(
        <>

        {
            products.map((product)=>{
                return (
                    <Card name = {product.name} price = {product.price} src = {product.src}/>
                )

            })
        }




        {/* <Card info = {product1} />
        <Card info = {product2} />
        <Card info = {product3} /> */}
        </>
    )
}

export default ProductPage