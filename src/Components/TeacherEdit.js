import React, { useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@mui/material'
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

function TeacherEdit({teachers,setTeachers}){
    const navigate=useNavigate()
    const {id}=useParams()
    const editteacher=teachers.find((teacher)=>teacher.id==id)
    const [tid,setTid]=useState()
    const [name,setName]=useState()
    const [gender,setGender]=useState(editteacher.gender)
    const [qualification,setQualification]=useState()
    const [skill,setSkill]=useState()
    const [doj,setDateofjoining]=useState()
    const [address,setAddress]=useState()
    const [isstudent,setIsstudent]=useState(true)
   

    useEffect(()=>{
        
           setTid(editteacher.id) 
           setName(editteacher.name)
           setGender(editteacher.gender)
           setQualification(editteacher.qualification)
           setSkill(editteacher.skill)
           setDateofjoining(editteacher.doj)
           setAddress(editteacher.address)
           setIsstudent(editteacher.isstudent)
           
    },[id,teachers])

    const dateHandler=(event)=>{
        setDateofjoining(dayjs(event).format("DD-MM-YYYY").toString())
      }
      const updateData=()=>{
        
        const editTeacherIndex=teachers.findIndex((teacher)=>teacher.id==id)
        
          const updatedTeacher={
            id,
            name,
            gender,
            qualification,
            skill,
            doj,
            address,
            isstudent,
           
  
          }
        
       
        const updatedTeachers=[...teachers]
        updatedTeachers[editTeacherIndex]=updatedTeacher
        setTeachers([...updatedTeachers])
         navigate('/teacherlist') 
          
        }

  return (
    <div>

<HeaderBar/>
        <h1>Teacher Edit Form</h1>
        
        <Grid container spacing={1}   alignItems="center"   justifyContent="center" >
         
            <Grid item xs={8}><TextField id="outlined-basic" label="ID" value={id} variant="filled" onChange={(e)=>setTid(e.target.value)} /></Grid> 
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
            <Grid item xs={8}><TextField id="outlined-basic" label="Skill" value={skill} variant="filled" onChange={(e)=>setSkill(e.target.value)} /></Grid> 
           
          
            
            <Grid item xs={8}> <Button variant="contained" onClick={updateData}>Update Student</Button></Grid> 

        </Grid>

    </div>
  )
}

export default TeacherEdit