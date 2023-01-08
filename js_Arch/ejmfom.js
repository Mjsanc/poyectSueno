

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();

  let usuario = document.getElementById('nombre').value;
  if(usuario.length == 0 || usuario.length < 4) {
    alert('No has escrito tu nombre o debe tener más de 4 caracteres');
  }

  let apel = document.getElementById('apellidos').value;
  if(apel.length == 0|| apel.length < 4){
    alert('No has escrito tu apellido correctamente debe tener mas de 4 caracteres');
  }

 let telf = document.getElementById('telefono').value;
  if (!(/\d{9}/.test(telf)) )  { 
    alert("El formato de su telefono no coincide");
  } 
  
  let emailCampo = document.getElementById('email').value;
  let validaEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; 
    if (!(validaEmail.test(emailCampo))){ 
      alert('El formato de su email no coincide');
    }

  let area = document.getElementById('comentario').value;
   if (area.length == 0) {
      alert('Indiquenos su motivo de contacto');
     } else if (area.length >400){
      alert('Ha escrito mas de 400 caracteres');
     }
     
     
   let seleccionado = document.getElementById('articulo').value;
  
    if(seleccionado == 0 || seleccionado < 0) {
      alert ('Seleccione un elemento de la lista');
     }
  } 
  
    


  

  
    
    
