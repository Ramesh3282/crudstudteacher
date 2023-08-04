import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom'





function HeaderBar(){
    const navigate = useNavigate()

  return (
    <div>
    <AppBar position="static">
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },alignItems:"center" ,  justify:"center" }}   >

    <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={()=>navigate('/teacherlist')}> Teachers List </Button>
    <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={()=>navigate('/')}> Student List </Button>
    <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={()=>navigate('/addform')}> Add Member Form </Button>
    </Box>

    </AppBar>



    </div>
  )
}

export default HeaderBar