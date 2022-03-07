import React from 'react'
import { Table } from 'react-bootstrap'

const MotoTable = ({basa}) => {
    
  return (
    <div>
        <Table striped bordered hover variant="dark">
        <thead>
  
  </thead>
    <tr>
      <td>1</td>
      <td><img src={basa.imgSrc} alt="" /> </td>
      <td> {basa.name} </td>
      <td>{basa.Price} </td>
    </tr>
    
</Table>
    </div>
  )
}

export default MotoTable