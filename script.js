// Defino el valor del ticket
const valorTicket = 200;

// Defino los porcentajes

let descuentoEstudiante = 0.80;
let descuentoTrainee = 0.50;
let descuentoJunior = 0.15;

// Tomo los valores

const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoriaSelect');
const botonResumen = document.getElementById('Resumen');
const botonBorrar = document.getElementById('Borrar');
const pimporteTotal = document.getElementById('importeTotal');
const compraEntradas = document.getElementById("compraEntradas")

// Crear funcion que tome la cantidad de tickets, lo multiplique por el valor del ticket y ese total varie

function totalPagar(){
    let totalValor = (cantidad.value) * valorTicket;
// Calcular los descuentos
    if (categoria.value == 0){
      totalValor = totalValor;
    }
    else if (categoria.value == 1){
        totalValor = totalValor - (totalValor*descuentoEstudiante);
    }
    else if (categoria.value == 2){
        totalValor = totalValor - (totalValor*descuentoTrainee);
    }
    else if (categoria.value == 3){
        totalValor = totalValor - (totalValor*descuentoJunior);
    }else{
        totalValor = totalValor*0;
    }   

    pimporteTotal.innerHTML = `Total a Pagar: $ ${totalValor}`;
}

// Boton calcular
botonResumen.addEventListener('click', totalPagar);
// Boton borrar
botonBorrar.addEventListener('click', ()=>{
    pimporteTotal.innerHTML = `Total a Pagar: $ `
});

compraEntradas.addEventListener("click", function(event){
    event.preventDefault()
  });


// Validacion del formulario

(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('click', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        else {
            event.preventDefault()
            const nombre = document.getElementById('inputNombre');
            const apellido = document.getElementById('inputApellido');
            const email = document.getElementById('inputEmail');
            const cantidad = document.getElementById('cantidad').value;
            const compraEntradas = document.getElementById('compraEntradas');

            compraEntradas.innerHTML = cantidad;          

        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()












