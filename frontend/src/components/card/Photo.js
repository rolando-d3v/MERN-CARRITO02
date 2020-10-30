import React from "react";
import {Link} from 'react-router-dom';
import {format} from 'timeago.js';
import { Card} from "react-bootstrap";
import './photo.scss'

function Photo({ e_pro }) {
  let url = process.env.REACT_APP_BACKEND_URL;

  console.log(url);

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={`${url}${e_pro.path}`} />
      <Card.Body>
        <Card.Title>{e_pro.name} </Card.Title>
        <span>{e_pro.description}</span>
        <span> Precio: {e_pro.precioUnitario} $</span>
        <p> creado: {format(e_pro.createdAt)} </p>
        <Link to={`/pokemon/${e_pro._id}`} className="btn"  >Ver Mas</Link>
      </Card.Body>
    </Card>
  );
}

export default Photo;
