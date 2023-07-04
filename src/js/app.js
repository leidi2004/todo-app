import './../styles.css';
import { showMenu, showAddTaskForm, removeForm, showAddProjectForm, createProject, newTask, createDefaultProject} from './ui';

console.log("it still works don't worry");

createDefaultProject();

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

const btnSubProject = document.querySelector(".submit__project");

btnSubProject.addEventListener("click", createProject);

const btnCreateTask = document.getElementById("create-task");
btnCreateTask.addEventListener("click", newTask);


