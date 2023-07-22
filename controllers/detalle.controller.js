import { clientServices } from "../services/client-service.js";


const mostrarProductosRelacionados = (nombre, precio, descripcion, imagen, id, categoria) => {

  const cardProducto = document.createElement("div");
  cardProducto.className = "producto__card";
  const contenido = `
    <div class="producto__card__imagen" style="background-Image: url(${imagen})"></div>
    <h3 class="producto__card__titulo">${nombre}</h3>
    <p class="producto__card__precio">${precio}</p>
    <a class="producto__card__boton" href="../screens/ver-producto.html?id=${id}">Ver producto</a>
  `
  cardProducto.innerHTML = contenido;
  return cardProducto;
}


const obtenerInformacion = async () => {

  const url = new URL(window.location);
  const id = url.searchParams.get("id"); 

  if(id === null){
    console.log("Hubo error al momento de buscar el producto")
  }

  /
  try{
    const producto = await clientServices.detalleProducto(id);
    
    if(producto.nombre && producto.precio && producto.descripcion && producto.imagen){
      
      const infoProducto = document.querySelector("[data-producto]");

      const contenido = `
        <img class="producto__imagen" src="${producto.imagen}" alt="producto star wars">
        <div class="producto__info">
            <h2 class="producto__info__titulo">${producto.nombre}</h2>
            <p class="producto__info__valor">${producto.precio}</p>
            <p class="producto__info__descripcion">${producto.descripcion}</p>
        </div>
      ` 
     
      infoProducto.innerHTML = contenido;

      
      const categoriaSolicitada = producto.categoria;
      const idProductoVisto = producto.id;

      const productosSimilares = document.querySelector("[data-productos-similares]");
      clientServices.listaProductos().then(data => {
        data.forEach(({nombre, precio, descripcion, imagen, id, categoria}) => {
          
          if(categoria === "Star wars" && categoriaSolicitada === "Star wars" && idProductoVisto != id){
            const nuevoProducto = mostrarProductosRelacionados(nombre, precio, descripcion, imagen, id, categoria);
            productosSimilares.appendChild(nuevoProducto);
          }else if(categoria === "Consolas" && categoriaSolicitada === "Consolas" && idProductoVisto != id){
            const nuevoProducto = mostrarProductosRelacionados(nombre, precio, descripcion, imagen, id, categoria);
            productosSimilares.appendChild(nuevoProducto);
          }else if(categoria === "Diversos" && categoriaSolicitada === "Diversos" && idProductoVisto != id){
            const nuevoProducto = mostrarProductosRelacionados(nombre, precio, descripcion, imagen, id, categoria);
            productosSimilares.appendChild(nuevoProducto);
          }
        });
      }).catch( error => alert("Ocurrio un error en vista"));
    }else{
      throw new error();
    }
  }catch(error){
    console.log("catch error", error);
  }

  
} 
obtenerInformacion();
