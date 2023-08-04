import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import HeaderBar from './HeaderBar';
import { useNavigate} from 'react-router-dom'





function Addform({students,setStudents,teachers,setTeachers}) {

  const navigate=useNavigate()
    
    const [id,setId]=useState()
    const [name,setName]=useState()
    const [gender,setGender]=useState()
    const [qualification,setQualification]=useState()
    const [batch,setBatch]=useState()
    const [doj,setDateofjoining]=useState(dayjs(new Date).format("DD-MM-YYYY").toString())
    const [address,setAddress]=useState()
    const [isstudent,setIsstudent]=useState(true)
    const [teacher,setTeacher]=useState()
    const [skill,setSkill]=useState()
   
    console.log(doj)

    const dateHandler=(event)=>{
      setDateofjoining(dayjs(event).format("DD-MM-YYYY").toString())
    }
    const addData=()=>{
      
      if (isstudent ===true){
        const newStudent={
          id,
          name,
          gender,
          qualification,
          batch,
          doj,
          address,
          isstudent,
          teacher

        }
      
       setStudents([...students,newStudent])
       navigate('/') 
        
      }else{
        
        const newTeacher={
          id,
          name,
          gender,
          qualification,
          skill,
          doj,
          address,
          isstudent

        }
        
        setTeachers([...teachers,newTeacher])
        navigate('/teacherlist')
        
      }
    
    }

  return (
    <div>
      <HeaderBar/>
        <h1>Add Form</h1>
        
        <Grid container spacing={1}   alignItems="center"   justifyContent="center" >
         <Grid item xs={8}>  <FormControlLabel control={<Checkbox defaultChecked />} label="Student" onChange={(e)=>setIsstudent(e.target.checked)}/></Grid> 
         
            <Grid item xs={8}><TextField id="outlined-basic"  value={id} variant="outlined" onChange={(e)=>setId(e.target.value)} /></Grid> 
            <Grid item xs={8}><TextField id="outlined-basic" label="Name" required variant="outlined" onChange={(e)=>setName(e.target.value)}/></Grid> 
            <Grid item xs={8}>
                <FormControl>
                    <Box sx={{p: 2, border: '1px solid grey' }} >
                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                        
                        
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" required >
                            <FormControlLabel value="female" control={<Radio />} label="Female" onChange={(e)=>setGender(e.target.value)}/>
                            <FormControlLabel value="male" control={<Radio />} label="Male" onChange={(e)=>setGender(e.target.value)} />
                        </RadioGroup>
                    </Box> 
                </FormControl>

            </Grid> 
            <Grid item xs={8}><TextField id="outlined-basic" label="Qualification" variant="outlined" onChange={(e)=>setQualification(e.target.value)} /></Grid> 
            
            <Grid item xs={8}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              
              <DatePicker label="Date of joining"  onChange={dateHandler} />

            </LocalizationProvider>

           </Grid> 
            <Grid item xs={8}><TextField id="outlined-basic" label="Address" variant="outlined" onChange={(e)=>setAddress(e.target.value)} /></Grid> 
           
            <Grid item xs={8}>
            {
           
            <Mentorcheck 
            isstudent={isstudent}
            teachers={teachers}
            setBatch={setBatch}
            students={students}
            setId={setId}
            setTeacher={setTeacher}
            setSkill={setSkill}
            
            />
           }
           </Grid>
            <Grid item xs={8}> <Button variant="contained" onClick={addData}>Add</Button></Grid> 

        </Grid>
    </div>
  )
}


function Mentorcheck({isstudent,setBatch,students,teachers,setTeacher,setSkill,setId}){

  if (isstudent){
    const maxID = students.reduce((r, std) => Math.max(r, std.id), Number.NEGATIVE_INFINITY);
    const newId=maxID+1
    setId(newId)
    
    const handleTeacher=(e)=>{
      setTeacher(e.target.value)
    }

    return(
      <Grid container spacing={1}   alignItems="center"   justifyContent="center" >
        <Grid item xs={8}><TextField id="outlined-basic" label="Batch" variant="outlined" onChange={(e)=>setBatch(e.target.value)} /></Grid> 

        <Grid item xs={8}>
          <FormControl sx={{ m: 1, minWidth: 200 }}>

          <InputLabel id="demo-simple-select-helper-label">Teacher</InputLabel>
          <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          
          label="teacher"
          onChange={handleTeacher}
        >
          {teachers.map((t)=>(
            <MenuItem value={t.name}>{t.name}</MenuItem>   
          ))}

        </Select>

      </FormControl>

        </Grid>
      </Grid>
    )
    
    
  }else{
    const maxID = teachers.reduce((r, tech) => Math.max(r, tech.id), Number.NEGATIVE_INFINITY);
    const newId=maxID+1
    setId(newId)
    return(
      <Grid container spacing={3}   alignItems="center"   justifyContent="center" >
        <Grid item xs={8}><TextField id="outlined-basic" label="Skill" variant="outlined" onChange={(e)=>setSkill(e.target.value)} /></Grid> 
        
      </Grid>
    )
  }


}


export default Addform