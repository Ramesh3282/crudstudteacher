import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import { useNavigate } from 'react-router-dom';
import HeaderBar from './HeaderBar';

function  DisplayTeacher({teachers,setTeachers}){
    const navigate=useNavigate()
    
    const deleteTeacher=(e,teacher)=>{
      
      const removeTeacher=teachers.filter(tech=>(tech.id !==teacher.id))
      setTeachers(removeTeacher)
        
    }
    const columns=[
        {field:'id',headerName:"ID",width:170,sortable: false,filterable: false },
        {field:'name',headerName:"Name",width:170,sortable: false,filterable: false },
       {field:'gender',headerName:"Gender",width:170,sortable: false,filterable: false },
        {field:'qualification',headerName:"Education",width:100, sortable: false,filterable: false},
        {field:'doj',headerName:"Date of Joining",width:100, sortable: false,filterable: false},
        {field:'skill',headerName:"Skill",width:170,sortable: false,filterable: false },
       
        {headerName:"Action", widht:30,sortable: false,filterable: false ,renderCell: (params) => {
            return (
             
               <div>
                
               <ModeIcon color="primary"
               onClick={() =>navigate(`/teacheredit/${params.row.id}`)} 
               
              />
              <DeleteIcon  onClick={(e) => deleteTeacher(e, params.row)} />
            </div>
             
            );
          } },
         
    
    ] 



  return (
    <div>
      <HeaderBar/>
        <DataGrid sx={{ m: 10 }} 
        rows={teachers}
        columns={columns}
        pageSizeOptions={[5, 10]}
        
        disableColumnSelector
        
       
        />

   


    </div>
  )
}

export default DisplayTeacher