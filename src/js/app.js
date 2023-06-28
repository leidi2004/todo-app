import './../styles.css';
import { showMenu, showAddTaskForm, removeForm, showAddProjectForm, showEditTaskForm, createProject} from './ui';
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

const btnShowEditTaskForm = document.querySelectorAll(".main__button--edit");

btnShowEditTaskForm.forEach(btnShowEditTaskForm => {
    btnShowEditTaskForm.addEventListener("click", showEditTaskForm);
});


const proInvox = new project("Inbox");

const btnSubProject = document.querySelector(".submit__project");

btnSubProject.addEventListener("click", createProject);
