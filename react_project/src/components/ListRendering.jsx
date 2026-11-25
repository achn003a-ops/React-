function ListRendering(){
    let students = [
        {
            id : 1,name : "Rahul",course : "Btech",semester : 4
        },
        {
            id : 2,name : "Priya",course : "BCA",semester : 3
        },
        {
            id : 3,name : "Kajal",course : "BBA",semester : 3
        },
         {
            id : 4,name : "Gagan",course : "Mcom",semester : 2
        },
        {
            id : 5,name : "Jashan",course : "BsC",semester : 5
        },
        
        
    ]

   return(
        <>
        <table border={1}>
            <thead>
                <tr>
                    <th>Student Id: </th>
                     <th>Student Name: </th>
                      <th>Course: </th>
                       <th>Semester: </th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((stu)=>{
                        return (
                    <tr key={stu.id}>
                    <td>{stu.id}</td>
                    <td>{stu.name}</td>
                    <td>{stu.course}</td>
                    <td>{stu.semester}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      
    
        </>
    )
}

export default ListRendering