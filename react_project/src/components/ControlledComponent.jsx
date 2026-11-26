import React, { useState } from "react"
import "../styles/first.css"

const ControlledComponent = () => {

    const [formData , setFormData] = useState({
        username : "",
        email : "",
        password : "",
        confirmPass : ""

    })

    const [errors , setErrors] = useState([])


    function handleChange (e){

        const {name, value} = e.target

        setFormData({
            ...formData,
            [name] : value
        })
        console.log(formData)

        // console.log (e.target.name)
        // console.log (e.target.value)
    }

//      function handleSubmit(e) {
//     alert("Form Submitted Successfully!")  
//   }


  function validateData(e){
    e.perventDefault()
    const [username , email , password , confirmPass] = formData

    if  (username.length <= 8){
        console.log ("username must be 8 character long")
        setErrors ([...errors, "username must be 8 character long"])
    }

    if (! /[@]/.text(email)){
        console.log("Email must contain @")
         setErrors ([...errors, "Email must contain @"])
    }

    if (password.length < 8 && /[A-Z]/.text(password) && /[a-z]/.text(password) && /[1-9]/.text(password) && /[!@#$%&*]/.text(password)){
        console.log("Correct password Fromat")

       
    }
    else{
        console.log("Password must be 8 character long and must contain lower and uppercase alphabets, numbers and special symbols")
         setErrors ([...errors, "Password must be 8 character long and must contain lower and uppercase alphabets, numbers and special symbols"])

    }

    if (password != confirmPass){
        console.log("Password do not match!!")
         setErrors ([...errors, "Password do not match!!"])

    }
  }


  return (
    <>
      <form noValidate>
        <h2><b>FORM</b></h2>
        <div className="input-grp">
        <label htmlFor="username">Username</label> 
        <input type="text" name="username" id="username" onChange={handleChange} />
        </div>
        <div className="input-grp">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={handleChange}/>
        </div>
       
       <div className="input-grp">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" onChange={handleChange}/>
       </div>

       <div className="input-grp">
        <label htmlFor="confirmpass">Confirm Password</label>
        <input type="password" name="confirmpass" id="confirmpass" onChange={handleChange}/>
       </div>

       <input type="submit" onClick={validateData}/>
      </form>
    </>
  )
}

export default ControlledComponent
