import {useState} from 'react';

import { Button, FormControl, FormGroup, Input, InputLabel, styled, Typography } from '@mui/material'
import React from 'react'
import { adduser } from './service/api';
import { useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)`
       width: 50%;
       margin: 5% auto 0 auto;
       & > div {
        margin-top: 20px
       }
`




const initialvalues ={
  name:'',
  username:'',
  email:'',
  phone:'', 
  image: ''
}


function Add() {


  const [user, setUser] = useState(initialvalues);
  const navigate = useNavigate();

  // const handleImageChange = e => {
  //   const imageFile = e.target.files[0];
  //   const imageUrl = URL.createObjectURL(imageFile);
  //   setUser({ ...initialvalues, image: imageUrl });
  // };
  
    const onValueChange = (e) => {
      setUser({...user, [e.target.name]: e.target.value})
      console.log(user)

    }
    const addUserDetails = async () => {
      await adduser(user);
      navigate('/');

    }
  
  return (
   <Container>
    <Typography variant="h4">Add User</Typography>
       <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" type="text" required />
       </FormControl>

       <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" type="text" required/>
       </FormControl>

       <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" type="email" required/>
       </FormControl>

       <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" type="number"  required/>
       </FormControl>

       <Input type="file"  onChange={(e) => onValueChange(e)} required />
       
        
        <Button  sx={{width: "50%" ,margin:"10px auto", background: "#4E6560"}} onClick={() => addUserDetails()} variant="contained">Add User</Button>
       
       

   </Container>
  )
}

export default Add
