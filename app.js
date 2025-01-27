// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
 

 

//   let listaAmigos = [];

// function agregarAmigo() {
//     if(isNaN(nombre.value)) {
//         let li = document.createElement('li');
//          let liText = document.createTextNode(nombre.value);
//         li.appendChild(liText);
//         lista.appendChild(li);
//         listaAmigos.push(nombre.value);
//     } else{
//         alert('Ingresa un Nombre válido por favor');
//     }

//     nombre.value = "";
// }

// function sortearAmigo() {
//     if(listaAmigos.length > 0) {
//         const ganador = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
//         alert(`El ganador del Sorteo es : ${ganador}`);
//         listaAmigos = [];
//         lista.innerHTML = '';

//     }else {
//         alert('No hay participantes para sortear');
//     }
// }
 let lista = document.getElementById("resultado");

let listaAmigos = [];
 

function agregarAmigo() {

   let nombre = document.getElementById("amigo");

     if (/\d/.test(nombre.value)) {
       alert('Ingresa un Nombre Válido!');
        
         
    }else {
        let li = document.createElement('li');
        let liText = document.createTextNode(nombre.value);
        li.appendChild(liText);
        lista.appendChild(li);
        listaAmigos.push(nombre.value);
       
        console.log(listaAmigos);
    }
       nombre.value = "";
    }




function sortearAmigo() {

    if(listaAmigos.length > 0) {
      
        let ganador = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        alert(`El Ganador del Sorteo es : ${ganador}`);
        lista.innerHTML = '';
        listaAmigos = [];
    }else {
        alert('no hay participantes para sortear');
    }
      
    
}



