import { clientServices } from "../services/client-service.js";
import { MostrarProductos } from "./mostrar.productos.controller.js";


const productosAdmin = document.querySelector("[data-productos-admin]");


clientServices.listaProductos().then(data => {
  data.forEach(({nombre, precio, descripcion, imagen, id, categoria}) => {

    const nuevoProducto = MostrarProductos(nombre, precio, descripcion, imagen, id, categoria);
    productosAdmin.appendChild(nuevoProducto);
  });
}).catch(error => alert("ocurrio un error"));
