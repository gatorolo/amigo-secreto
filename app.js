// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
 const nombre = document.getElementById("amigo");
 const botonSorteo = document.getElementById("button-draw");
 const lista = document.getElementById("resultado");
 

  let listaAmigos = [];

function agregarAmigo() {
    if(isNaN(nombre.value)) {
        let li = document.createElement('li');
         let liText = document.createTextNode(nombre.value);
        li.appendChild(liText);
        lista.appendChild(li);
        listaAmigos.push(nombre.value);
    } else{
        alert('Ingresa un Nombre válido por favor');
    }

    nombre.value = "";
}

function sortearAmigo() {
    if(listaAmigos.length > 0) {
        const ganador = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        alert(`El ganador del Sorteo es : ${ganador}`);
        listaAmigos = [];
        lista.innerHTML = '';

    }else {
        alert('No hay participantes para sortear');
    }
}




