function alertPago() {
    let nombrecliente = document.getElementById("nombrecliente").value;
    let pagoTotal = document.getElementById("pagototal").value;
    let mensaje = `Estimado ${nombrecliente} el pago total por su servicio es ${pagoTotal}`
    let errorMensaje = 'Estimado cliente Complete el formulario'

    if (nombrecliente == "") {
        alert(errorMensaje)
    }
    else alert(mensaje)
  }