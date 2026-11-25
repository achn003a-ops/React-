import React from 'react'
import {useParams} from "react-router-dom"
import {NavLink , useNavigate} from "react-router-dom"
const ProductDetail = ({products}) => {
     const{id}=useParams()
     console.log(id)


     let product = products.find(item => item.id == id)
     console.log(product)
     if(!product){
        return(
            <>
            </>
        )
     }
 
    }


export default ProductDetail
