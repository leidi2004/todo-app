import 'animate.css';
import { project, todo } from './todo';
//Elements for the event listener of the menu
const menu = document.querySelector("aside");
const main = document.querySelector("main");

//To control the state of the menu
let isSlideOut = true;

//Function for the event listener of the menu
function showMenu() {
    if (!isSlideOut) {
        menu.classList.remove("animate__slideInLeft");
        menu.classList.add("animate__fadeOutLeft", "animate__faster");
        main.classList.add("animate__slideInRight");
        main.classList.remove("main--center", "animate__slideInLeft");
        isSlideOut = true;
    } else {
        menu.classList.remove("animate__fadeOutLeft", "animate__faster");
        main.classList.remove("animate__slideInRight");
        menu.classList.add("aside-active");
        menu.classList.add("animate__animated", "animate__slideInLeft", "animate__fast");
        main.classList.add("animate__animated", "main--center", "animate__slideInLeft");
        isSlideOut = false;
    }
}

const formAddTask = document.querySelector(".form--addtask");
const body = document.querySelector("body");

function showAddTaskForm() {
    formAddTask.classList.add("form-visible");
    body.classList.add("lostfocus");
}

const formAddProject = document.querySelector(".form--addproject");
const btnShowProjectForm = document.querySelector(".aside__button");

function showAddProjectForm() {
    body.classList.add("lostfocus");
    menu.classList.add("lostfocus");
    btnShowProjectForm.classList.add("lostfocus");
    formAddProject.classList.add("form--addProject-visible");
}

const formEditTask = document.querySelector(".form--edittask");

function showEditTaskForm() {
    formEditTask.classList.add("form-visible");
    body.classList.add("lostfocus");
}

function removeForm() {
    body.classList.remove("lostfocus");
    if (formAddTask.classList.contains("form-visible")) {
        formAddTask.classList.remove("form-visible");
        clearForm();
    } else if (formAddProject.classList.contains("form--addProject-visible")) {
        menu.classList.remove("lostfocus");
        btnShowProjectForm.classList.remove("lostfocus");
        formAddProject.classList.remove("form--addProject-visible");
        clearProjectForm();
    } else if (formEditTask.classList.contains("form-visible")) {
        formEditTask.classList.remove("form-visible");
        clearForm();
    }
}

function clearProjectForm() {
    const projectName = document.getElementById("project-name").value = "";
}

let projects = [];
const projectOptions = document.getElementById("project-option");
const newLocation = document.getElementById("newLocation");

let projectId = 0;

function createDefaultProject(){
    const proInvox = new project("Inbox", projectId);
    projects.push(proInvox);

    const projectList = document.querySelector(".aside__ul");
    const projectElement = document.createElement("li");
    projectElement.textContent = proInvox.projectName;
    projectElement.classList.add("aside__item");
    projectElement.setAttribute("data-project-id", project.projectId);
    projectList.appendChild(projectElement);
    projectElement.addEventListener("click", showProject);
    
    const projectOption = document.createElement("option");
    projectOption.innerHTML = proInvox.projectName;
    projectOption.setAttribute("value", proInvox.projectName);

    const cloneOption1 = projectOption.cloneNode(true);
    const cloneOption2 = projectOption.cloneNode(true);

    projectOptions.appendChild(cloneOption1);
    newLocation.appendChild(cloneOption2);
    
    projectId++;
}

function createProject(e) {
    e.preventDefault();
    const projectName = document.getElementById("project-name").value;
    const newProject = new project(projectName, projectId);
    projects.push(newProject);

    const projectOption = document.createElement("option");
    projectOption.innerHTML = projectName;
    projectOption.setAttribute("value", projectName);

    const cloneOption1 = projectOption.cloneNode(true);
    const cloneOption2 = projectOption.cloneNode(true);

    projectOptions.appendChild(cloneOption1);
    newLocation.appendChild(cloneOption2);

    console.log(projectOption.value);
    removeForm();
    createElementProject(projectName);
    clearProjectForm();
    console.table(newProject);
    projectId++;
}

function createElementProject(element) {
    const projectList = document.querySelector(".aside__ul");
    const projectElement = document.createElement("li");
    projectElement.textContent = element;
    projectElement.classList.add("aside__item");
    projectElement.setAttribute("data-project-id", project.projectId);
    projectList.appendChild(projectElement);
    projectElement.addEventListener("click", showProject);
}

const title = document.querySelector(".main__h2");

function cleanMain() {
    const main = document.querySelector(".main");
    while (main.lastChild !== title) {
        main.removeChild(main.lastChild);
    }
}

function showProject() {
    //el nombre del proyecto que fue clicado
    cleanMain();
    const projectName = this.textContent;
    title.textContent = projectName;
    const project = projects.find(pro => pro.projectName === projectName);
    console.log(project);
    console.log(project.todos);
    project.todos.forEach((todo) => {
        createTaskElement(todo, project);
    });
}

let taskId = 0;

function newTask(e) {
    e.preventDefault();
    const name = document.getElementById("task-name").value;
    const description = document.getElementById("task-description").value;
    const taskDueDate = document.getElementById("task-duedate").value;
    const taskPriority = document.getElementById("task-priority").value;
    const taskLocation = document.getElementById("project-option").value;
    const project = projects.find(pro => pro.projectName === taskLocation);
    const newTodo = new todo(name, description, taskDueDate, taskPriority, taskId);
    project.todos.push(newTodo);
    console.table(newTodo);
    console.table(project.todos);
    taskId++;

    const currentTitle = title.textContent;

    if (taskLocation === currentTitle) {
        createTaskElement(newTodo, project);
    }

    clearForm();
    removeForm();
}

function createTaskElement(todo, project) {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("main__container--task");
    main.appendChild(taskContainer);

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    taskContainer.appendChild(checkbox);

    const labelName = document.createElement("label");
    labelName.innerHTML = todo.todoName;
    labelName.classList.add("task-name");
    taskContainer.appendChild(labelName);

    const btnEditTask = document.createElement("button");
    btnEditTask.setAttribute("type", "button");
    btnEditTask.classList.add("main__button--edit");
    taskContainer.appendChild(btnEditTask);

    btnEditTask.addEventListener("click", showEditTaskForm);

    const btnDelTask = document.createElement("button");
    btnDelTask.setAttribute("type", "button");
    btnDelTask.classList.add("main__button--delete");
    taskContainer.appendChild(btnDelTask);

    btnDelTask.addEventListener("click", function(){
        deleteTask(project, todo, taskContainer);
    });

    const taskInfo = document.createElement("div");
    taskInfo.classList.add("main__container--info");
    taskContainer.appendChild(taskInfo);

    const name = document.createElement("p");
    name.innerHTML = "Name";
    name.classList.add("title--info");
    taskInfo.appendChild(name);

    const taskName = document.createElement("p");
    taskName.innerHTML = todo.todoName;
    taskInfo.appendChild(taskName);
    taskName.classList.add("info");

    const description = document.createElement("p");
    description.innerHTML = "Description";
    description.classList.add("title--info");
    taskInfo.appendChild(description);

    const taskDes = document.createElement("p");
    taskDes.innerHTML = todo.todoDescript;
    taskInfo.appendChild(taskDes);
    taskDes.classList.add("info");

    const duedate = document.createElement("p");
    duedate.innerHTML = "Due-date";
    duedate.classList.add("title--info");
    taskInfo.appendChild(duedate);

    const taskDate = document.createElement("p");
    taskDate.innerHTML = todo.todoDueDate;
    taskInfo.appendChild(taskDate);
    taskDate.classList.add("info");

    const priority = document.createElement("p");
    priority.innerHTML = "Priority";
    priority.classList.add("title--info");
    taskInfo.appendChild(priority);

    const taskPriority = document.createElement("p");
    taskPriority.innerHTML = todo.todoPriority;
    taskInfo.appendChild(taskPriority);
    taskPriority.classList.add("info");

    labelName.addEventListener("click", () => {
        taskInfo.classList.toggle("main__container--info--visible");
    });
}

function clearForm() {
    const inputs = document.querySelectorAll(".form__input");
    inputs.forEach(input => {
        input.value = "";
    });
}

function deleteTask(project, todo, taskContainer){
    project.removeTask(todo);
    taskContainer.remove();
}

export { showMenu, isSlideOut, showAddTaskForm, removeForm, showAddProjectForm, createProject, clearProjectForm, newTask, createDefaultProject};