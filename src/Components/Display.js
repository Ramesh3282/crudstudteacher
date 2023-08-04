import React from 'react'
import DisplayStudent from './DisplayStudent'
import DisplayTeacher from './DisplayTeacher'

function Display({students,setStudents,teachers,setTeachers}) {
  return (
    <div>
<DisplayStudent 
          students={students}
          setStudents={setStudents}
          
          />
          <DisplayTeacher 
        teachers={teachers}
        setTeachers={setTeachers}/>
    </div>
  )
}

export default Display