let lista = document.getElementById("lista");
lista.removeChild(lista.lastElementChild);

const tarea = prompt("Introduce una tarea para mañana");
let parrafo = document.createElement("p");
parrafo.innerHTML = "¿Qué tengo que hacer <strong> mañana </strong>?";
document.body.appendChild(parrafo);

let otraLista = document.createElement("ul");
let item = document.createElement("li");
item.textContent = tarea;
otraLista.appendChild(item);
document.body.appendChild(otraLista);
otraLista.style.opacity = 0.7;
