var calculator = document.querySelector("form");
function servicios() {
const precioServicios = {
  motor: 5000,
  exterior: 7000,
};

let costoServicios = [...document.querySelectorAll('input[name="servicios"]:checked')]
  .map((el) => precioServicios[el.value])

  return costoServicios.length > 0 ? costoServicios.reduce((total, num) => total + num) : 0;
}

function calcularTotal() {
calculator.total.value = '$' + servicios() * 1.19;
}