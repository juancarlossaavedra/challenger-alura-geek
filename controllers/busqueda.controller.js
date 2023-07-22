
const buscador = document.querySelector("[data-buscador]");

buscador.addEventListener("input", evento => {
  const texto = evento.target.value;
  buscador.addEventListener("keypress", eventoDos => {
    if (eventoDos.key === 'Enter') {
      window.location.href = `../screens/busqueda-productos.html?texto=${texto}`;
      buscador.value="";
    }
  });
});




