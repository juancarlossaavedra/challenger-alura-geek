const dropArea = document.querySelector("[data-drag-area]"),
dragText = dropArea.querySelector("p")

const input = document.querySelector(".agregar__imagen__boton");

let file; 


input.addEventListener("change", function(){
  file = this.files[0];
  mostrarArchivo();
});


dropArea.addEventListener("dragover", (evento) => {
  evento.preventDefault();
  dropArea.classList.add("active");
  dragText.textContent = "Suelte el archivo para cargarlo";
})


dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("active");
  dragText.textContent = "Arrastre para agregar una imagen para el producto";
})


dropArea.addEventListener("drop", (evento) => {
  evento.preventDefault();
  file = evento.dataTransfer.files[0]; 
  mostrarArchivo();
})


let fileURL; 
const mostrarArchivo = () => {
  let tipoArchivo = file.type;
  let validarExtensiones = ["image/jpeg", "image/jpg", "image/png"]
  if(validarExtensiones.includes(tipoArchivo)){ 
    let fileReader = new FileReader(); 
    fileReader.onload = () => {
      fileURL = fileReader.result; 
      let imgTag = `<img src="${fileURL}" alt="" style="width:100%; height:100%; border-radius:5px">`; 
      dropArea.innerHTML = imgTag; 
    }
    fileReader.readAsDataURL(file)
  }else{
    Swal.fire({
      title: 'La imagen no tiene un formato valido, debe ser jpeg, jpg o png',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    dragText.textContent = "Arrastre para agregar una imagen para el producto";
  }
}
