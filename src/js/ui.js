import 'animate.css';
import { project, todo} from './todo';
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
    } else if (formAddProject.classList.contains("form--addProject-visible")) {
        menu.classList.remove("lostfocus");
        btnShowProjectForm.classList.remove("lostfocus");
        formAddProject.classList.remove("form--addProject-visible");
    } else if (formEditTask.classList.contains("form-visible")) {
        formEditTask.classList.remove("form-visible");
    }
}

function clearProjectForm() {
    const projectName = document.getElementById("project-name").value = "";
}

let projects = [];
const projectOptions = document.getElementById("project-option");
const newLocation = document.getElementById("newLocation");

function createProject(e) {
    e.preventDefault(); 

    const projectName = document.getElementById("project-name").value;
    const newProject = new project(projectName);
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
}

function createElementProject(element) {
    const projectList = document.querySelector(".aside__ul");
    const projectElement = document.createElement("li");
    projectElement.innerHTML = element;
    projectElement.classList.add("aside__item");
    projectList.appendChild(projectElement);

    projectElement.addEventListener("click", showProject);
}

const title = document.querySelector(".main__h2");

function showProject(){
    //el nombre del proyecto que fue clicado
    const projectName = this.innerHTML;
    title.innerHTML = projectName;
    const project = projects.find(pro => pro.projectName === projectName);
    console.log(project);
    console.log(project.todos);
}

function newTask(e){
    e.preventDefault();
    const name = document.getElementById("task-name").value;
    const description = document.getElementById("task-description").value;
    const taskDueDate = document.getElementById("task-duedate").value;
    const taskPriority = document.getElementById("task-priority").value;
    const taskUbication = document.getElementById("project-option").value;
    const project = projects.find(pro => pro.projectName === taskUbication);
    const newTodo = new todo(name, description, taskDueDate, taskPriority);
    project.todos.push(newTodo);
    console.log(newTodo);
    console.log(project.todos);
}

export { showMenu, isSlideOut, showAddTaskForm, removeForm, showAddProjectForm, showEditTaskForm, createProject, clearProjectForm, newTask};