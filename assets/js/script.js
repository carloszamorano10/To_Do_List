const input = document.getElementById("entrada");
const btn = document.getElementById("boton");
const contadorTareas = document.getElementById("tareasTotal");
const contadorRealizadas = document.getElementById("tareasRealizadas");
const dibujarTareas = document.querySelector("tbody");

const tareas = [];

btn.addEventListener("click", () => {
  const tarea = { id: Date.now(), nombre: input.value, realizada: false };
  tareas.push(tarea);
  input.value = "";
  let html = "";
  for (const tarea of tareas) {
    html += `
        <tr>
           <td>${tarea.id}</td>
           <td>${tarea.nombre}</td>
        </tr>
        `;
  }
  dibujarTareas.innerHTML = html;
  contadorTareas.innerHTML = tareas.length
});
console.log(tareas);
