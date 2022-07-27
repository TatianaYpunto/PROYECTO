window.alert("Bienvenido a mi sitio web");

const titulo = document.getElementById("titulo");

function cambiarColor() {
  if (titulo.style.color === "white") {
    let color = prompt("Dime de qué color quieres el título.");
    titulo.style.color = color;
  } else {
    titulo.style.color = "white";
  }
}

titulo.onclick = cambiarColor;

//ejercicio 2
const hoy = document.querySelector(".titulo2 > b");
function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

function añadirtarea(tarea) {
  if (isEmptyOrSpaces(tarea)) {
    window.alert("La tarea no puede estar vacía o ser un espacio en blanco.");
  } else {
    let lista = document.getElementById("lista");
    let item = document.createElement("li");
    item.texContent = tarea;
    lista.appendChild(item);
  }
}
hoy.onclick = () => {
  let tarea = prompt("¿Qué tarea quieres añadir?");
  añadirtarea(tarea);
};

//ejercicio 3
const button = document.querySelector("#nuevatarea > button");
button.onclick = () => {
  const input = document.querySelector("input[name=tarea]");
  const tarea = input.value;
  añadirtarea(tarea);
  input.value = "";
};
