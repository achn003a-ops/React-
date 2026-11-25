import "../styles/first.css"
function StudentCard({name,age,course,sem}){
    
    return(
        <>
        <div className="card">
            <h2>Student Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Course: {course}</p>
            <p>Semester: {sem}</p>
            
        </div>
        </>

    )
}

export default StudentCard