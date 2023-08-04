import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import { useNavigate } from 'react-router-dom';
import HeaderBar from './HeaderBar';

function DisplayStudent({students,setStudents}){
    const navigate=useNavigate()

    const deleteStudent=(e,student)=>{
      
      const removeStudent=students.filter(stud=>(stud.id !==student.id))
      setStudents(removeStudent)
        
    }
    const columns=[
        {field:'id',headerName:"ID",width:170,sortable: false,filterable: false },
        {field:'name',headerName:"Name",width:170,sortable: false,filterable: false },
        {field:'batch',headerName:"Batch",width:170,sortable: false,filterable: false },
        {field:'gender',headerName:"Gender",width:170,sortable: false,filterable: false },
        {field:'qualification',headerName:"Education",width:100, sortable: false,filterable: false},
        {field:'address',headerName:"Address",width:100, sortable: false,filterable: false},
        {field:'doj',headerName:"Date of Joining",width:100, sortable: false,filterable: false},
        {field:'teacher',headerName:"Teacher",width:100, sortable: false,filterable: false},
        {headerName:"Action", widht:30,sortable: false,filterable: false ,renderCell: (params) => {
            return (
             
               <div>
                
               <ModeIcon color="primary"
               onClick={() =>navigate(`/studentedit/${params.row.id}`)} 
               
              />
              <DeleteIcon  onClick={(e) => deleteStudent(e, params.row)} />
            </div>
             
            );
          } },
         
    
    ] 



  return (
    <div>
        <HeaderBar/>
        <DataGrid sx={{ m: 10 }} 
        rows={students}
        columns={columns}
        pageSizeOptions={[5, 10]}
        
        disableColumnSelector
        
       
        />

  


    </div>
  )
}

export default DisplayStudent