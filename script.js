/*************************
 * VARIABLES Y CONSTANTES
 *************************/
const estacionesSelectFather = document.querySelector(".estaciones-list");
const estacionesContainerAll = document.querySelectorAll(
  ".box-wrapper-estacion"
);
const btnEstaciones = document.querySelectorAll(".estacion-item");
/*************************
 * FUNCIONES
 *************************/
const displayEstaciones = function (e) {
  e.preventDefault();
  //Obtain data estacion
  const estacion = e.target.closest(".estacion-item").dataset.estacion;

  //Remove active from all classes containers
  estacionesContainerAll.forEach((container) =>
    container.classList.remove("box-wrapper-estacion-active")
  );

  //Remove active from all buttons
  btnEstaciones.forEach((btn) => btn.classList.remove("estacion-item-active"));

  //Add active list to both container and button
  e.target.closest(".estacion-item").classList.add("estacion-item-active");

  document
    .querySelector(`.${estacion}-container`)
    .classList.add("box-wrapper-estacion-active");
};

/*************************
 * EventListeners
 *************************/

estacionesSelectFather.addEventListener("click", displayEstaciones);
