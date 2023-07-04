import './../styles.css';
import { showMenu, showAddTaskForm, removeForm, showAddProjectForm, showEditTaskForm, createProject, newTask} from './ui';
import { project, todo} from './todo';
console.log("it still works don't worry");
const btnMenu = document.querySelector(".header__button--menu");
btnMenu.addEventListener("click", showMenu);

const btnShowForm = document.querySelector(".header__button--addtask");

btnShowForm.addEventListener("click", showAddTaskForm);

const btnExit = document.querySelectorAll(".form__button--exit");

btnExit.forEach(btnExit => {
    btnExit.addEventListener("click", removeForm)
});

const btnShowProjectForm = document.querySelector(".aside__button");

btnShowProjectForm.addEventListener("click", showAddProjectForm);

const proInvox = new project("Inbox");

const btnSubProject = document.querySelector(".submit__project");

btnSubProject.addEventListener("click", createProject);

const btnCreateTask = document.getElementById("create-task");
btnCreateTask.addEventListener("click", newTask);


