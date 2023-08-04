import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import HeaderBar from './HeaderBar';
import { useNavigate,useParams } from 'react-router-dom'

function  StudentEdit({students,setStudents,teachers,setTeachers}) {
   
    const navigate=useNavigate()
    const {id}=useParams()
    const editstudent=students.find((student)=>student.id==id)
    const [sid,setSid]=useState()
    const [name,setName]=useState()
    const [gender,setGender]=useState(editstudent.gender)
    const [qualification,setQualification]=useState()
    const [batch,setBatch]=useState()
    const [doj,setDateofjoining]=useState()
    const [address,setAddress]=useState()
    const [isstudent,setIsstudent]=useState(true)
    const [teacher,setTeacher]=useState(editstudent.teacher)

    useEffect(()=>{
        
           setSid(editstudent.id) 
           setName(editstudent.name)
           setGender(editstudent.gender)
           setQualification(editstudent.qualification)
           setBatch(editstudent.batch)
           setDateofjoining(editstudent.doj)
           setAddress(editstudent.address)
           setIsstudent(editstudent.isstudent)
           setTeacher(editstudent.teacher)
    },[id,students])

    const dateHandler=(event)=>{
        setDateofjoining(dayjs(event).format("DD-MM-YYYY").toString())
      }
      const updateData=()=>{
        
        const editStudentIndex=students.findIndex((student)=>student.id==id)
        
          const updatedStudent={
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
        
        console.log("editStudentIndex",editStudentIndex) 
        const updatedStudents=[...students]
        updatedStudents[editStudentIndex]=updatedStudent
        console.log("updatedStudent",updatedStudent)
        setStudents([...updatedStudents])
         navigate('/') 
          
        }
        const handleTeacher=(e)=>{
            setTeacher(e.target.value)
          }      
  return (
    <div>
        <HeaderBar/>
        <h1>Student Edit Form</h1>
        
        <Grid container spacing={1}   alignItems="center"   justifyContent="center" >
         
            <Grid item xs={8}><TextField id="outlined-basic" label="ID" value={id} variant="filled" onChange={(e)=>setSid(e.target.value)} /></Grid> 
            <Grid item xs={8}><TextField id="outlined-basic" value={name} label="Name" variant="filled" onChange={(e)=>setName(e.target.value)}/></Grid> 
            <Grid item xs={8}>
                <FormControl>
                    <Box sx={{p: 2, border: '1px solid grey' }} >
                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                        
                        
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" defaultValue={gender}>
                            <FormControlLabel value="Female" control={<Radio />} label="Female" onChange={(e)=>setGender(e.target.value)}/>
                            <FormControlLabel value="Male" control={<Radio />} label="Male" onChange={(e)=>setGender(e.target.value)} />
                        </RadioGroup>
                    </Box> 
                </FormControl>

            </Grid> 
            <Grid item xs={8}><TextField id="outlined-basic" label="Qualification" value={qualification} variant="filled" onChange={(e)=>setQualification(e.target.value)} /></Grid> 
            
            <Grid item xs={8}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Date of joining"  onChange={dateHandler} variant="filled" defaultValue={dayjs(doj)}/>
            </LocalizationProvider>

           </Grid> 
            <Grid item xs={8}><TextField id="outlined-basic" label="Address" value={address} variant="filled" onChange={(e)=>setAddress(e.target.value)} /></Grid> 
            <Grid item xs={8}><TextField id="outlined-basic" label="Batch" value={batch} variant="filled" onChange={(e)=>setBatch(e.target.value)} /></Grid> 
            <Grid item xs={8}>
          <FormControl sx={{ m: 1, minWidth: 200 }}>

          <InputLabel id="demo-simple-select-helper-label">Teacher</InputLabel>
          <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          defaultValue={teacher}
          label="teacher"
         
          onChange={handleTeacher}
        >
          {teachers.map((t)=>(
            <MenuItem value={t.name}>{t.name}</MenuItem>   
          ))}

        </Select>

      </FormControl>

        </Grid>
            
            <Grid item xs={8}> <Button variant="contained" onClick={updateData}>Update Student</Button></Grid> 

        </Grid>


    </div>
  )
}

export default StudentEdit