import React from "react";
import {Table} from 'react-bootstrap'
// import dayjs from 'dayjs'
import { format, compareAsc } from 'date-fns'


function Tabla(props) {

  const  {dataTable} = props


  return (
    <div>
      <Table responsive  bordered hover  >
        <thead>
          <tr>
            <th>#</th>
            <th>Name Pokemon</th>
            <th>Descripcion</th>
            <th>Fecha</th>
            <th>Precio</th>
          </tr>
        </thead>
        {dataTable.map((table, index)=> (
          <tbody key={table._id} >
          <tr>
            <td>{index}  </td>
            <td> {table.name} </td>
            <td> {table.description} </td>
            <td>{format(new Date(table.createdAt), 'dd/MMM/yyyy - kkmm-aaaa')}</td>
            <td>{table.precioUnitario}</td>
          </tr>
        </tbody>
        ))}
      </Table>
    </div>
  );
}

export default Tabla;
