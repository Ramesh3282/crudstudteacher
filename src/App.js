import logo from './logo.svg';
import './App.css';
import { stddata, teacherdata } from './Components/Data';

import { useState } from 'react';
import DisplayStudent from './Components/DisplayStudent';
import DisplayTeacher from './Components/DisplayTeacher';
import { Route, Routes } from 'react-router-dom';
import Display from './Components/Display';
import Addform from './Components/Addform';
import TeacherEdit from './Components/TeacherEdit';
import StudentEdit from './Components/StudentEdit';



function App() {
  const [students,setStudents]=useState(stddata)
  const [teachers,setTeachers]=useState(teacherdata)
  return (
    <div className="App">
       <Routes>
       
        <Route path='/teacherlist' element={<DisplayTeacher teachers={teachers}
        setTeachers={setTeachers}/>}/>
        <Route path='/' element={<DisplayStudent students={students}
        setStudents={setStudents}/>}/>
        <Route path='/addform' element={<Addform  students={students}
        setStudents={setStudents}
        teachers={teachers}
        setTeachers={setTeachers}/>}/>

        <Route path='/teacheredit/:id' element={<TeacherEdit teachers={teachers}
        setTeachers={setTeachers}/> }/>
        <Route path='/studentedit/:id' element={<StudentEdit students={students}
        setStudents={setStudents} 
        teachers={teachers}
        setTeachers={setTeachers}
        />}/>

    </Routes>

  
    </div>
  );
}

export default App;
