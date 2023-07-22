import { clientServices } from "../services/client-service.js";
import { MostrarProductos } from "./mostrar.productos.controller.js";


const productosStarWars = document.querySelector("[data-star-wars]");

const productosConsolas = document.querySelector("[data-consolas]");

const productosDiversos = document.querySelector("[data-diversos]");


clientServices.listaProductos().then(data => {
  data.forEach(({nombre, precio, descripcion, imagen, id, categoria}) => {
  
    if(categoria === "Star wars"){
      const nuevoProducto = MostrarProductos(nombre, precio, descripcion, imagen, id, categoria);
      productosStarWars.appendChild(nuevoProducto);
    }else if(categoria === "Consolas"){
      const nuevoProducto = MostrarProductos(nombre, precio, descripcion, imagen, id, categoria);
      productosConsolas.appendChild(nuevoProducto);
    }else if(categoria === "Diversos"){
      const nuevoProducto = MostrarProductos(nombre, precio, descripcion, imagen, id, categoria);
      productosDiversos.appendChild(nuevoProducto);
    }
  });
})



