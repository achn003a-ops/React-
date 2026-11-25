import React from "react";

// const ConditionalRendering=()=>{
//     let loggedIn = false
//     return(
//         <>
//         {
//             loggedIn ? <h1>Welcome User</h1> : <h1>Welcome Guest</h1>
//         }
//         </>
//     )
// }







// const ConditionRendering = () => {

//     let added_to_cart = false
//     return(
//         <>
//         <div className="card">
//             <img src="/nature.jpg" />
//             {
//                 added_to_cart ?  <button>Add to Cart</button> : <button>remove from cart</button>
//             }
           
//         </div>
//         </>
//     )
// }




const ConditionRendering = () => {

    let is_sunny = false
    return(
        <>
        <div className={is_sunny ? "card-sunny" : "card-rainy"}>
            <img src={is_sunny ? "/sunny.png" : "/rainy.jpg"} />
            <p>{
                is_sunny ? 
                <p>Sunny</p>
                :
                <p>Rainy</p>
                }
            </p>
           
        </div>
        </>
    )
}

export default ConditionRendering