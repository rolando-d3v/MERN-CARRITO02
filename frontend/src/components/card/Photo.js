import React from "react";
import {Link} from 'react-router-dom';
import {format} from 'timeago.js';
import './photo.scss'

export default function Photo({ e_pro }) {
  let url = process.env.REACT_APP_BACKEND_IMAGE;

  console.log(url);
  

  return (
    // <Card style={{ width: "17.7rem", margin: "10px" }} className=' animate__animated animate__fadeInDown' >
    <div style={{ width: "17.7rem", margin: "10px" }} className='card_content  animate__animated animate__fadeIn' >
      <img  className='img_card'  src={`${url}${e_pro.path}`} />
      <div className='card_body' >
        <h1 className='text-center' >{e_pro.name} </h1>
        <span>{e_pro.description}</span>
        <span> Precio: {e_pro.precioUnitario} $</span>
        <p> creado: {format(e_pro.createdAt)} </p>
        <Link to={`/pokemon/${e_pro._id}`} className="card_btn"  >Ver Mas</Link>
      </div>
    </div>
  );
}

