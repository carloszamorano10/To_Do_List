const input = document.getElementById("entrada");
const btn = document.getElementById("boton");
const contadorTareas = document.getElementById("tareasTotal");
const contadorRealizadas = document.getElementById("tareasRealizadas");
const dibujarTareas = document.querySelector("tbody");

const tareas = [];
let contador = 0;

btn.addEventListener("click", () => {
  const tarea = { id: Date.now(), nombre: input.value, realizada: false };
  tareas.push(tarea);
  input.value = "";
  renderizar();
});

const borrar = (id) => {
  const index = tareas.findIndex((ele) => ele.id === id);
  tareas.splice(index, 1);
  renderizar();
};

const renderizar = () => {
  let html = "";
  for (const tarea of tareas) {
    html += `
        <tr>
           <td>${tarea.id}</td>
           <td>${tarea.nombre}</td>
           <td><input type="checkbox" onclick="cambioRealizada(${tarea.id})" ${tarea.realizada ? 'checked' : ''}/></td>
           <td><i class="fa-solid fa-circle-minus eliminar" onclick="borrar(${tarea.id})"></i></td>
        </tr>
        `;
  }

  dibujarTareas.innerHTML = html;
  contadorTareas.innerHTML = tareas.length;
  contadorRealizadas.innerHTML = tareas.filter(tarea => tarea.realizada).length;
};


const cambioRealizada = (id) => {
  const tarea = tareas.find((ele) => ele.id === id);
  tarea.realizada = !tarea.realizada;
  renderizar();
};





