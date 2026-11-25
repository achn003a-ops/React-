import { useState } from "react"

const LikedButton = () => {

   let [islike,setLike] = useState(false)

    function liked(){
       setLike(!islike) 
       
    }

     return (
        <>
        <div className="card">

            <img id="picture" src="/nature.jpg" />

            <button onClick={liked}><img src={islike? "/filled_button.png" : "/unfilled_button.png"} style={{height: "30px",width: "30px"}}/></button>

            

        </div>
        </>
    )
}


export default LikedButton