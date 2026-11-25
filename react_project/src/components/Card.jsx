import "../styles/first.css"

function Card({name,price,src}){

    
   
   // object destructuring
    // let student = {
    //     name: "Rahul",
    //     age: 21,
    //     course: "B.tech",
    //     semester: 4
    // }

    // let{name,age,course,semester} = student
    // console.log(name,age,course,semester)


    //-----------------------------------------------------------------------------------------------------------

    // array destructring - 
    // let marks = [10,12,13,14]

    // destructring is a shothand syntax for assigning the values of an array or object to different variable

    // let[st1marks,st2marks,st3marks,st4marks] = marks
    // console.log(st1marks,st2marks,st3marks,st4marks)

    return(
        <>
        <div className="card">
            <h2>Product Name: {name}</h2>
            <img src={src} style={{height: "200px", width: "200px"}} />
            <p>Product Prize: {price}</p>
        </div>
        </>
    )
}

export default Card