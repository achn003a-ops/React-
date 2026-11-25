import React from "react"
import StudentCard from "./StudentCard"

const StuInformationPage = () =>{
     let students=[
        {
            name: "Alics",
            age: "18",
            course: "BCA",
            sem: "2nd sem"
        },
          {
            name: "John",
            age: "20",
            course: "BA",
            sem: "4th sem"
        },
          {
            name: "Rahul",
            age: "21",
            course: "Btech",
            sem: "5th sem"
        },
        {
            name: "Yash",
            age: "19",
            course: "BCA",
            sem: "3rd sem"
        }
    ]

    return(
        <>
        
        {
            students.map((stu,index)=>{
                return (
                   
                    <StudentCard key = {index} name = {stu.name} age = {stu.age} course = {stu.course} sem = {stu.sem} />
                    
                )

        })
        }




         {/* <StudentCard students = {st2}  />
          <StudentCard students = {st3}  />
           <StudentCard students = {st4}  /> */}

        </>
    )
}

export default StuInformationPage