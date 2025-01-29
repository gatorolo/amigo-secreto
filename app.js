// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let lista = document.getElementById('resultado');
let listaAmigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo"); // Obtiene el valor del input donde se escribe el nombre del amigo.

  if (/\d/.test(nombre.value) || nombre.value.trim() === "" || /[^A-Za-z\s]/.test(nombre.value)) {
    // Verifica si el nombre ingresado contiene un número usando una expresión regular o el campo input está vacio o contenga carácteres especiales.

    document.getElementById("mensaje").textContent = "Ingresa un nombre Válido"; // Muestra un mensaje de error si el nombre contiene números.
    document.getElementById("mensaje").style.color = "red"; // Cambia el color del mensaje a rojo.
  } else if (listaAmigos.includes(nombre.value)) {
    // Verifica si el nombre ya está en la lista.

    document.getElementById("mensaje").textContent =
      " Ese amigo ya estä Participando"; // Muestra mensaje de duplicado.
    document.getElementById("mensaje").style.color = "blue"; // Cambia el color del mensaje a azul.
  } else {
    // Si el nombre es válido y no está duplicado
    document.getElementById("mensaje").textContent = "El nombre es Válido"; // Muestra un mensaje de éxito.
    document.getElementById("mensaje").style.color = "green"; // Cambia el color del mensaje a verde.

    // Crea un nuevo elemento de lista (<li>) y lo agrega a la lista HTML.
    let li = document.createElement("li");
    let litext = document.createTextNode(nombre.value);

    li.appendChild(litext);
    lista.appendChild(li);

    // Agrega el nombre del amigo al array listaAmigos.
    listaAmigos.push(nombre.value);
  }

  // Limpia el campo de texto después de agregar el amigo.

  nombre.value = "";
}

function sortearAmigo() {
  if (listaAmigos.length > 0) {
    let ganador = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    alert(`El ganador es : ${ganador}`);
    lista.innerHTML = "";
    listaAmigos = [];
    document.getElementById("mensaje").textContent = "";
    document.getElementById("mensaje").style.color = "";
  } else {
    alert("No hay amigos para Sortear!");
  }
}
