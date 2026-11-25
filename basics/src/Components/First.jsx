import "../styles/first.css"

function First(){
   let username = "Alice"
    return(
        <>
        <h1 id="heading" className="head" style={{color: "Red", margin: "10px"}}>Welcome, {username}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, ratione?</p>
        </>
    )
}



export default First