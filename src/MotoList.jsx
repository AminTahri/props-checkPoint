import React from 'react'
import { Table } from 'react-bootstrap'
import MotoTable from './MotoTable'
export  const MotoList = (props) => {

  return (
    <div>
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>info</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
  {
            React.Children.toArray( props.data.map(Moto=> <MotoTable basa={Moto}/> ))
           
        }
    
  </tbody>
</Table>
           
    </div>
  )
}

export default MotoList

