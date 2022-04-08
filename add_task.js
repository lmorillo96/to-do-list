let tasks = [];
let btnAgregar = document.querySelector("[data-form-btn]");
let inputTask = document.querySelector("[data-form-input]");
let addList = document.querySelector("[data-list]");

btnAgregar.addEventListener("click", (e) => {
  e.preventDefault();
  createTask();
});

// Crear Tarea

function createTask() {
  const value = inputTask.value;
  const task = document.createElement("li");
  task.classList.add("card");

  inputTask.value = "";

  const taskContent = document.createElement("div");
  //taskContent.appendChild(checkComplete());

  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(titleTask);

  const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`;
  task.innerHTML = content;

  task.appendChild(taskContent);
  addList.appendChild(task);
}


function checkComplete() {
  const i = document.querySelector('i');
  i.classList.add('far');
  i.classList.add('fa-check-square');
  i.classList.add('icon');
  
  return i;

}