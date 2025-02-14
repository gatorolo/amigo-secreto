// // El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let lista = document.getElementById("listaAmigos");
let ulResultado = document.getElementById("resultado");
let boton = document.getElementById("mostrar");
let boton2 = document.getElementById("boton2");
let div = document.querySelector(".input-wrapper");
let titulo = document.querySelector(".section-title");
let nombre = document.getElementById("amigo"); // Obtiene el valor del input donde se escribe el nombre del amigo.
let listaAmigos = [];

function agregarAmigo() {
  // Verifica si el nombre ingresado contiene un número usando una expresión regular o el campo input está vacio.
  if (/\d/.test(nombre.value) || /[^A-Za-z\s]/.test(nombre.value)) {
    document.getElementById("mensaje").textContent = "Ingresa un nombre Válido"; // Muestra un mensaje de error si el nombre contiene números.
    document.getElementById("mensaje").style.color = "red"; // Cambia el color del mensaje a rojo.
  } else if (listaAmigos.includes(nombre.value)) {
    // Verifica si el nombre ya está en la lista.
    document.getElementById("mensaje").textContent =
      " Ese amigo ya estä Participando"; // Muestra mensaje de duplicado.
    document.getElementById("mensaje").style.color = "blue"; // Cambia el color del mensaje a azul.
  } else if (!nombre.value.trim()) {
    document.getElementById("mensaje").textContent = "Campo vacio: Ingresa un Nombre"; 
      document.getElementById("mensaje").style.color = "red"; 
  } else {
    // Si el nombre es válido y no está duplicado
    document.getElementById("mensaje").textContent = "El nombre es Válido"; // Muestra un mensaje de éxito.
    document.getElementById("mensaje").style.color = "green"; // Cambia el color del mensaje a verde.

    // Crea un nuevo elemento de lista (<li>) y lo agrega a la lista HTML.
    let li = document.createElement("li");
    let litext = document.createTextNode(nombre.value);

    li.appendChild(litext);
    lista.appendChild(li);
    boton2.style.display = 'flex';

    // Agrega el nombre del amigo al array listaAmigos.
    listaAmigos.push(nombre.value);
  }
  // Limpia el campo de texto después de agregar el amigo.

  nombre.value = "";
  ulResultado.innerHTML = "";
  nombre.focus();
  
}

nombre.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        agregarAmigo();
    }
});

function sortearAmigo() {
  if (listaAmigos.length > 0) {
    let ganador = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    ulResultado.innerHTML = `<li>El/La ganador/a es: ${ganador}</li>`;
    lista.innerHTML = "";
    listaAmigos = [];
    document.getElementById("mensaje").textContent = "";
    document.getElementById("mensaje").style.color = "";
    mostrarBoton();
    div.style.display = 'none';
    titulo.style.display = 'none';
  } 
}

function mostrarBoton() {
  boton.style.display = 'flex';
  boton2.style.display = 'none'
}

function ocultarBoton() {
  let mostrar = boton.style.display = 'none';
  return mostrar;
}


function sortearNuevo() {
  ulResultado.innerHTML = '';
  ocultarBoton();
  div.style.display = 'flex';
  titulo.style.display = 'flex';
  nombre.focus();
  nombre.value = "";
}
