import {useState, useEffect} from 'react';

import { Button, FormControl, FormGroup, Input, InputLabel, styled, Typography } from '@mui/material'
import React from 'react'
import { getUser, editUser} from './service/api';
import { useNavigate, useParams } from 'react-router-dom';


const Container = styled(FormGroup)`
       width: 50%;
       margin: 5% auto 0 auto;
       & > div {
        margin-top: 20px
       }
`
const initialvalues ={
  name:'',
  email:'',
  phone:'',
  image: ''
}

function EditUser() {

  const [user, setUser] = useState(initialvalues);
  const navigate = useNavigate();
  const {id} = useParams();

  const params = useParams();
console.log(30,params)


   useEffect(() =>{
      getUserData();
   }, [])
  //  const handleImageChange = e => {
  //   const imageFile = e.target.files[0];
  //   const imageUrl = URL.createObjectURL(imageFile);
  //   setUser({ ...initialvalues, image: imageUrl });
  // };

   const getUserData = async () => {
     let response = await getUser(id);
       setUser(response.data);
    }
  
    const onValueChange = (e) => {
      setUser({...user, [e.target.name]: e.target.value})
      console.log(user);

    }
    const addUserDetails = async () => {
      await editUser(user, id);
      navigate('/');

    }
  
  return (
   <Container>
    <Typography variant="h4">Edit User</Typography>
       <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" value={user.name} />
       </FormControl>

       <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" value={user.username} />
       </FormControl>

       <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" value={user.email} />
       </FormControl>

       <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone}/>
       </FormControl>
       <Input type="file"  onChange={(e) => onValueChange(e)} required />


       
        
        <Button  sx={{width: "50%" ,margin:"10px auto", background: "#4E6560"}} onClick={() => addUserDetails()} variant="contained">Edit User</Button>
       
       

   </Container>
  )
}

export default EditUser;
