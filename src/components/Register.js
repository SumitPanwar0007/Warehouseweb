import React, { useRef, useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, Alert, AlertTitle } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import emailjs from 'emailjs-com';

export default function RegistrationForm() {
    const [alert,setAlert]=useState(false)
    const form = useRef();
   function handleRegister(){
   
    setAlert(!alert)
   }
  


  return ( <>

    <div className="absolute right-0"> { alert && <Alert severity="success"><CloseIcon onClick={handleRegister} sx={{float:'right'}} fontSize="inherit" />
    <AlertTitle>Success</AlertTitle>
    This is a success alert — <strong>check it out!</strong> 
           
  </Alert>}</div>
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh', backgroundColor: 'black' }}>
       
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <Paper  elevation={3} style={{ padding: '20px', backgroundColor: '' }}>
          <Typography variant="h3" gutterBottom color='#F59E0B' textAlign='center' >
            Register Yourself
          </Typography>
          <form>
            <TextField
              label="Full Name"
              name="user_name"
              fullWidth
              margin="normal"
              variant="outlined"
              required
            
            />
            <TextField
              label="Email"
              fullWidth
              name="user_email"
              margin="normal"
              variant="outlined"
              type="email"
              required
              
            />
            <TextField
              label="Mobile Number"
              name="message"
              fullWidth
              margin="normal"
              variant="outlined"
              type="tel"
              required
            //   InputLabelProps={{ style: { color: 'white' } }}
            //   InputProps={{ style: { color: 'white' } }}
            />
            <TextField
              label="Address"
              fullWidth
              margin="normal"
              variant="outlined"
              name="message"
              multiline
              rows={3}
              required
            
        
            />
            <Button type="submit" variant="contained" color="primary" fullWidth style={{ backgroundColor: 'orange' }} onClick={handleRegister}>
              Register
            </Button>
          </form>
         
          
        </Paper>
      </Grid>
    </Grid>

    </>
  );
}
