import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow,styled, Button} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import {getUsers, deleteUser} from './service/api';

const StyledTable = styled(Table)`
width:90%;
margin:50px auto 0 auto; 
`;
const Thead = styled(TableRow)`
     background: #4E6560;
     & > th{
      color: #fff;
      font-size:20px;
     }
`
const TBody = styled(TableRow)`
    
     & > td{
      font-size:20px;
     }
`

function All() {

  const [user, setUsers] = useState([]);

  useEffect(() => {
       getUsersDetails();
       
  }, [])
  const getUsersDetails = async () => {
    let response = await getUsers();
    console.log(response);
    setUsers(response);
  }
 
  const deleteUserData = async (id) => {
    await deleteUser(id);
    getUsersDetails();
  }

  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Image</TableCell>
          <TableCell>Action</TableCell>


        </Thead>
      </TableHead>
      <TableBody>
        {
          user && user.map (use => (
            <TBody>
              <TableCell>{use.id}</TableCell>
              <TableCell>{use.name}</TableCell>
              <TableCell>{use.username}</TableCell>
              <TableCell>{use.email}</TableCell>
              <TableCell>{use.phone}</TableCell>
              <TableCell style={{width:"2%"}}>{use.image}</TableCell>

              <TableCell>
                <Button sx={{margin:"10px",background: "#4E6560",color:"white", hovar:"black"}} variant="outlined" component={Link} to={`/edit/${use.id}`} >Edit</Button>
                
                <Button variant="outlined" sx={{background: "#4E6560",color:"white"}} onClick={() => deleteUserData(use.id) } > DELETE</Button>
              </TableCell>
              

            </TBody>


          ))
        }
      </TableBody>
    </StyledTable>
  )
}

export default All
