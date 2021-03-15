import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import clienteAxios from "../../api/clienteAxios";
import "./formulario.scss";

export default function Formulario() {
  const [data, setData] = useState({
    name: "",
    description: "",
    precioUnitario: "",
  });

  const [fileData, setFileData] = useState("");

  const obtenerData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const obtenerFile = (e) => {
    setFileData(e.target.files[0]);
  };

  const subirData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("precioUnitario", data.precioUnitario);
    formData.append("photo", fileData);

    try {
      if (fileData.size > 4000000) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: "Error: 4MB de Tamaño maximo de Imagen admitida",
        });
      } else {
        const res = await clienteAxios.post("/productos", formData);
        console.log(res);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: res.data.message,
        });
      }
    } catch (error) {}
  };

  return (
    <Form className="m-5" onSubmit={subirData}>
      <Form.Group>
        <Form.Label>nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          onChange={obtenerData}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Descripcion</Form.Label>
        <Form.Control
          type="text"
          placeholder="ingresa Descripcion"
          name="description"
          onChange={obtenerData}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Precio Unitario</Form.Label>
        <Form.Control
          type="number"
          placeholder="ingresa precio"
          name="precioUnitario"
          onChange={obtenerData}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Label>
          Imagen admitida <span className="font-weight-bold">(png o jpg)</span>{" "}
        </Form.Label>
        <Form.Control
          type="file"
          name="photo"
          accept="image/png, image/jpeg, image/jpg"
          onChange={obtenerFile}
        />
      </Form.Group>
      <button  className='xbutton_primary'  type="submit">
        crear Poke
      </button>
      <button  className='button_p_primary'  type="submit">
        crear Poke
      </button>
      <button  className='button_p_success'  type="submit">
        crear Poke
      </button>
    </Form>
  );
}

