const input = document.querySelector("input[name=task]");
const button = document.querySelector("#new_task > button");
const list = document.getElementById("list");

let tasks = [
  { name: "Aprender HTML", state: "opened" },
  { name: "Aprender CSS", state: "opened" }
];

if (localStorage.getItem("filter") !== null) {
  document.getElementById("filter-list").value = localStorage.getItem("filter");
}

button.onclick = () => {
  const task = input.value;

  if (task !== "") {
    if (tasks.length >= 5) {
      alert("Tienes demasiadas tareas, ¡termina una antes!");
      return;
    }

    for (const otherTask of tasks) {
      // Esto podría ser más sencilo usando include (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
      if (otherTask.nombre === task) {
        alert("Tarea repetida!");
      }
    }

    tasks.push({ name: task });
    tasks.sort();

    renderTasks();

    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
  }
};

function renderTasks(state) {
  list.innerHTML = "";

  const filteredTasks = tasks.filter((task) => {
    return !state || state === task.state;
  });

  for (const task of filteredTasks) {
    const newTask = document.createElement("li");

    newTask.className = "task";

    if (task.state === "finished") {
      newTask.className += " finished";
    }

    const taskText = document.createTextNode(task);
    newTask.appendChild(taskText);

    const deleteButton = document.createElement("button");
    deleteButton.onclick = (e) => deleteTask(task);
    deleteButton.textContent = "❌";
    newTask.appendChild(deleteButton);

    const completeButton = document.createElement("button");
    completeButton.onclick = (e) => completeTask(task);
    completeButton.textContent = task.state === "finished" ? "↩️" : "✅";
    newTask.appendChild(completeButton);

    list.appendChild(newTask);
  }
}

function deleteTask(task) {
  tasks.splice(tasks.indexOf(task), 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function completeTask(task) {
  if (task.state === "finished") {
    task.state = "opened";
  } else {
    task.state = "finished";
  }
  renderTasks();
}

document.getElementById("delete-all").onclick = () => {
  tasks = [];
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
};

document.getElementById("delete-finished").onclick = () => {
  tasks = tasks.filter((task) => task.state !== "finished");
  renderTasks();
};

document.getElementById("filter-list").onchange = (e) => {
  const filterValue = e.target.value;
  localStorage.setItem("filter", filterValue);
  renderTasks();
};

renderTasks();
