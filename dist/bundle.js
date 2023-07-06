/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/todo.js":
/*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   project: () => (/* binding */ project),
/* harmony export */   todo: () => (/* binding */ todo)
/* harmony export */ });
class todo {

    constructor(todoName, todoDescript, todoDueDate, todoPriority, id, todoState) {
        this.todoName = todoName;
        this.todoDescript = todoDescript;
        this.todoDueDate = todoDueDate;
        this.todoPriority = todoPriority;
        this.id = id;
        this.todoState = false;
    }

    set todoName(newName) {
        this._todoName = newName;
    }
    
    get todoName() {
        return this._todoName;
    }
    
    set todoDescript(newDescript) {
        this._todoDescript = newDescript;
    }
    
    get todoDescript() {
        return this._todoDescript;
    }
    
    set todoDueDate(newDueDate) {
        this._todoDueDate = newDueDate;
    }
    
    get todoDueDate() {
        return this._todoDueDate;
    }
    
    set todoPriority(newPriority) {
        this._todoPriority = newPriority;
    }
    
    get todoPriority() {
        return this._todoPriority;
    }
    
    set todoState(newState) {
        this._todoState = newState;
    }
    
    get todoState() {
        return this._todoState;
    } 

    get id() {
        return this._id;
    }
    
    set id(newId) {
        this._id = newId;
    }

    editTodo(newName, newDescript, newDueDate, newPriority, newNote, newState) {
        this.todoName = newName;
        this.todoDescript = newDescript;
        this.todoDueDate = newDueDate;
        this.todoPriority = newPriority;
        this.todoNote = newNote;
        this.todoState = newState;
    }
}

class project {
    constructor(projectName, projectID) {
        this.projectName = projectName;
        this.projectID = projectID;
        this.todos = [];
    }

    get projectName() {
        return this._projectName;
    }

    set projectName(newName) {
        this._projectName = newName;
    }

    get projectID() {
        return this._projectID;
    }

    set projectID(newProjectID) {
        this._projectID = newProjectID;
    }

    addTask(todo) {
        this.todos.push(todo);
    }

    removeTask(todo) {
        const index = this.todos.indexOf(todo);
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
    }
}



/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearProjectForm: () => (/* binding */ clearProjectForm),
/* harmony export */   createDefaultProject: () => (/* binding */ createDefaultProject),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   isSlideOut: () => (/* binding */ isSlideOut),
/* harmony export */   newTask: () => (/* binding */ newTask),
/* harmony export */   removeForm: () => (/* binding */ removeForm),
/* harmony export */   showAddProjectForm: () => (/* binding */ showAddProjectForm),
/* harmony export */   showAddTaskForm: () => (/* binding */ showAddTaskForm),
/* harmony export */   showMenu: () => (/* binding */ showMenu)
/* harmony export */ });
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/js/todo.js");


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

function showTaskInfo(todo){
    const newName = document.getElementById("newName");
    newName.innerHTML = todo.name;
}

function showEditTaskForm(todo) {
    showTaskInfo(todo);
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
const title = document.querySelector(".main__h2");

function createDefaultProject() {
    const proInvox = new _todo__WEBPACK_IMPORTED_MODULE_1__.project("Inbox", projectId);
    projects.push(proInvox);

    const projectList = document.querySelector(".aside__ul");
    const projectElement = document.createElement("li");
    projectElement.textContent = proInvox.projectName;
    projectElement.classList.add("aside__item");
    projectElement.setAttribute("data-project-id", _todo__WEBPACK_IMPORTED_MODULE_1__.project.projectId);
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

    title.textContent = proInvox.projectName;
    proInvox.todos.forEach((todo) => {
        createTaskElement(todo, proInvox);
    });
}

function createProject(e) {
    e.preventDefault();
    const projectName = document.getElementById("project-name").value;
    const newProject = new _todo__WEBPACK_IMPORTED_MODULE_1__.project(projectName, projectId);
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
    projectElement.setAttribute("data-project-id", _todo__WEBPACK_IMPORTED_MODULE_1__.project.projectId);
    projectList.appendChild(projectElement);
    projectElement.addEventListener("click", showProject);
}


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
    const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_1__.todo(name, description, taskDueDate, taskPriority, taskId);
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

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            todo.todoState = "Finsihed";
            labelName.classList.add("finished-task");
            console.log(todo);
        } else {
            todo.todoState = "Not finsihed";
            labelName.classList.remove("finished-task");
            console.log(todo)
        }
    });

    const btnEditTask = document.createElement("button");
    btnEditTask.setAttribute("type", "button");
    btnEditTask.classList.add("main__button--edit");
    taskContainer.appendChild(btnEditTask);

    btnEditTask.addEventListener("click", showEditTaskForm(todo));

    const btnDelTask = document.createElement("button");
    btnDelTask.setAttribute("type", "button");
    btnDelTask.classList.add("main__button--delete");
    taskContainer.appendChild(btnDelTask);

    btnDelTask.addEventListener("click", function () {
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

function deleteTask(project, todo, taskContainer) {
    project.removeTask(todo);
    taskContainer.remove();
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../styles.css */ "./src/styles.css");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/js/ui.js");



console.log("it still works don't worry");

(0,_ui__WEBPACK_IMPORTED_MODULE_1__.createDefaultProject)();

const btnMenu = document.querySelector(".header__button--menu");
btnMenu.addEventListener("click", _ui__WEBPACK_IMPORTED_MODULE_1__.showMenu);

const btnShowForm = document.querySelector(".header__button--addtask");

btnShowForm.addEventListener("click", _ui__WEBPACK_IMPORTED_MODULE_1__.showAddTaskForm);

const btnExit = document.querySelectorAll(".form__button--exit");

btnExit.forEach(btnExit => {
    btnExit.addEventListener("click", _ui__WEBPACK_IMPORTED_MODULE_1__.removeForm)
});

const btnShowProjectForm = document.querySelector(".aside__button");

btnShowProjectForm.addEventListener("click", _ui__WEBPACK_IMPORTED_MODULE_1__.showAddProjectForm);

const btnSubProject = document.querySelector(".submit__project");

btnSubProject.addEventListener("click", _ui__WEBPACK_IMPORTED_MODULE_1__.createProject);

const btnCreateTask = document.getElementById("create-task");
btnCreateTask.addEventListener("click", _ui__WEBPACK_IMPORTED_MODULE_1__.newTask);



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHcUI7QUFDa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBDQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCwwQ0FBTztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwwQ0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCwwQ0FBTztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUNBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDMVNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnlCO0FBQ3FHO0FBQzlIO0FBQ0E7QUFDQTtBQUNBLHlEQUFvQjtBQUNwQjtBQUNBO0FBQ0Esa0NBQWtDLHlDQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxnREFBZTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywyQ0FBVTtBQUNoRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLG1EQUFrQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsOENBQWE7QUFDckQ7QUFDQTtBQUNBLHdDQUF3Qyx3Q0FBTztBQUMvQztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuY3NzL2FuaW1hdGUuY3NzP2E3ZTciLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/MTU1MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjbGFzcyB0b2RvIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0b2RvTmFtZSwgdG9kb0Rlc2NyaXB0LCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5LCBpZCwgdG9kb1N0YXRlKSB7XHJcbiAgICAgICAgdGhpcy50b2RvTmFtZSA9IHRvZG9OYW1lO1xyXG4gICAgICAgIHRoaXMudG9kb0Rlc2NyaXB0ID0gdG9kb0Rlc2NyaXB0O1xyXG4gICAgICAgIHRoaXMudG9kb0R1ZURhdGUgPSB0b2RvRHVlRGF0ZTtcclxuICAgICAgICB0aGlzLnRvZG9Qcmlvcml0eSA9IHRvZG9Qcmlvcml0eTtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy50b2RvU3RhdGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdG9kb05hbWUobmV3TmFtZSkge1xyXG4gICAgICAgIHRoaXMuX3RvZG9OYW1lID0gbmV3TmFtZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHRvZG9OYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b2RvTmFtZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IHRvZG9EZXNjcmlwdChuZXdEZXNjcmlwdCkge1xyXG4gICAgICAgIHRoaXMuX3RvZG9EZXNjcmlwdCA9IG5ld0Rlc2NyaXB0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgdG9kb0Rlc2NyaXB0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b2RvRGVzY3JpcHQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCB0b2RvRHVlRGF0ZShuZXdEdWVEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5fdG9kb0R1ZURhdGUgPSBuZXdEdWVEYXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgdG9kb0R1ZURhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvZG9EdWVEYXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgdG9kb1ByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XHJcbiAgICAgICAgdGhpcy5fdG9kb1ByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCB0b2RvUHJpb3JpdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvZG9Qcmlvcml0eTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IHRvZG9TdGF0ZShuZXdTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuX3RvZG9TdGF0ZSA9IG5ld1N0YXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgdG9kb1N0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b2RvU3RhdGU7XHJcbiAgICB9IFxyXG5cclxuICAgIGdldCBpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCBpZChuZXdJZCkge1xyXG4gICAgICAgIHRoaXMuX2lkID0gbmV3SWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdFRvZG8obmV3TmFtZSwgbmV3RGVzY3JpcHQsIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5LCBuZXdOb3RlLCBuZXdTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMudG9kb05hbWUgPSBuZXdOYW1lO1xyXG4gICAgICAgIHRoaXMudG9kb0Rlc2NyaXB0ID0gbmV3RGVzY3JpcHQ7XHJcbiAgICAgICAgdGhpcy50b2RvRHVlRGF0ZSA9IG5ld0R1ZURhdGU7XHJcbiAgICAgICAgdGhpcy50b2RvUHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcclxuICAgICAgICB0aGlzLnRvZG9Ob3RlID0gbmV3Tm90ZTtcclxuICAgICAgICB0aGlzLnRvZG9TdGF0ZSA9IG5ld1N0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBwcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lLCBwcm9qZWN0SUQpIHtcclxuICAgICAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0SUQgPSBwcm9qZWN0SUQ7XHJcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9qZWN0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdE5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHByb2plY3ROYW1lKG5ld05hbWUpIHtcclxuICAgICAgICB0aGlzLl9wcm9qZWN0TmFtZSA9IG5ld05hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb2plY3RJRCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdElEO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwcm9qZWN0SUQobmV3UHJvamVjdElEKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvamVjdElEID0gbmV3UHJvamVjdElEO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhc2sodG9kbykge1xyXG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVUYXNrKHRvZG8pIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudG9kb3MuaW5kZXhPZih0b2RvKTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHRvZG8sIHByb2plY3R9OyIsImltcG9ydCAnYW5pbWF0ZS5jc3MnO1xyXG5pbXBvcnQgeyBwcm9qZWN0LCB0b2RvIH0gZnJvbSAnLi90b2RvJztcclxuLy9FbGVtZW50cyBmb3IgdGhlIGV2ZW50IGxpc3RlbmVyIG9mIHRoZSBtZW51XHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGVcIik7XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuXHJcbi8vVG8gY29udHJvbCB0aGUgc3RhdGUgb2YgdGhlIG1lbnVcclxubGV0IGlzU2xpZGVPdXQgPSB0cnVlO1xyXG5cclxuLy9GdW5jdGlvbiBmb3IgdGhlIGV2ZW50IGxpc3RlbmVyIG9mIHRoZSBtZW51XHJcbmZ1bmN0aW9uIHNob3dNZW51KCkge1xyXG4gICAgaWYgKCFpc1NsaWRlT3V0KSB7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZV9fc2xpZGVJbkxlZnRcIik7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZV9fZmFkZU91dExlZnRcIiwgXCJhbmltYXRlX19mYXN0ZXJcIik7XHJcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZV9fc2xpZGVJblJpZ2h0XCIpO1xyXG4gICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZShcIm1haW4tLWNlbnRlclwiLCBcImFuaW1hdGVfX3NsaWRlSW5MZWZ0XCIpO1xyXG4gICAgICAgIGlzU2xpZGVPdXQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlX19mYWRlT3V0TGVmdFwiLCBcImFuaW1hdGVfX2Zhc3RlclwiKTtcclxuICAgICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlX19zbGlkZUluUmlnaHRcIik7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwiYXNpZGUtYWN0aXZlXCIpO1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcImFuaW1hdGVfX2FuaW1hdGVkXCIsIFwiYW5pbWF0ZV9fc2xpZGVJbkxlZnRcIiwgXCJhbmltYXRlX19mYXN0XCIpO1xyXG4gICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVfX2FuaW1hdGVkXCIsIFwibWFpbi0tY2VudGVyXCIsIFwiYW5pbWF0ZV9fc2xpZGVJbkxlZnRcIik7XHJcbiAgICAgICAgaXNTbGlkZU91dCA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBmb3JtQWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS0tYWRkdGFza1wiKTtcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cclxuZnVuY3Rpb24gc2hvd0FkZFRhc2tGb3JtKCkge1xyXG4gICAgZm9ybUFkZFRhc2suY2xhc3NMaXN0LmFkZChcImZvcm0tdmlzaWJsZVwiKTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImxvc3Rmb2N1c1wiKTtcclxufVxyXG5cclxuY29uc3QgZm9ybUFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tLWFkZHByb2plY3RcIik7XHJcbmNvbnN0IGJ0blNob3dQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXNpZGVfX2J1dHRvblwiKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dBZGRQcm9qZWN0Rm9ybSgpIHtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImxvc3Rmb2N1c1wiKTtcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcImxvc3Rmb2N1c1wiKTtcclxuICAgIGJ0blNob3dQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwibG9zdGZvY3VzXCIpO1xyXG4gICAgZm9ybUFkZFByb2plY3QuY2xhc3NMaXN0LmFkZChcImZvcm0tLWFkZFByb2plY3QtdmlzaWJsZVwiKTtcclxufVxyXG5cclxuY29uc3QgZm9ybUVkaXRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLS1lZGl0dGFza1wiKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dUYXNrSW5mbyh0b2RvKXtcclxuICAgIGNvbnN0IG5ld05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld05hbWVcIik7XHJcbiAgICBuZXdOYW1lLmlubmVySFRNTCA9IHRvZG8ubmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0VkaXRUYXNrRm9ybSh0b2RvKSB7XHJcbiAgICBzaG93VGFza0luZm8odG9kbyk7XHJcbiAgICBmb3JtRWRpdFRhc2suY2xhc3NMaXN0LmFkZChcImZvcm0tdmlzaWJsZVwiKTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImxvc3Rmb2N1c1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRm9ybSgpIHtcclxuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvc3Rmb2N1c1wiKTtcclxuICAgIGlmIChmb3JtQWRkVGFzay5jbGFzc0xpc3QuY29udGFpbnMoXCJmb3JtLXZpc2libGVcIikpIHtcclxuICAgICAgICBmb3JtQWRkVGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybS12aXNpYmxlXCIpO1xyXG4gICAgICAgIGNsZWFyRm9ybSgpO1xyXG4gICAgfSBlbHNlIGlmIChmb3JtQWRkUHJvamVjdC5jbGFzc0xpc3QuY29udGFpbnMoXCJmb3JtLS1hZGRQcm9qZWN0LXZpc2libGVcIikpIHtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJsb3N0Zm9jdXNcIik7XHJcbiAgICAgICAgYnRuU2hvd1Byb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJsb3N0Zm9jdXNcIik7XHJcbiAgICAgICAgZm9ybUFkZFByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImZvcm0tLWFkZFByb2plY3QtdmlzaWJsZVwiKTtcclxuICAgICAgICBjbGVhclByb2plY3RGb3JtKCk7XHJcbiAgICB9IGVsc2UgaWYgKGZvcm1FZGl0VGFzay5jbGFzc0xpc3QuY29udGFpbnMoXCJmb3JtLXZpc2libGVcIikpIHtcclxuICAgICAgICBmb3JtRWRpdFRhc2suY2xhc3NMaXN0LnJlbW92ZShcImZvcm0tdmlzaWJsZVwiKTtcclxuICAgICAgICBjbGVhckZvcm0oKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0Rm9ybSgpIHtcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIikudmFsdWUgPSBcIlwiO1xyXG59XHJcblxyXG5sZXQgcHJvamVjdHMgPSBbXTtcclxuY29uc3QgcHJvamVjdE9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3Qtb3B0aW9uXCIpO1xyXG5jb25zdCBuZXdMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3TG9jYXRpb25cIik7XHJcblxyXG5sZXQgcHJvamVjdElkID0gMDtcclxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fX2gyXCIpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFByb2plY3QoKSB7XHJcbiAgICBjb25zdCBwcm9JbnZveCA9IG5ldyBwcm9qZWN0KFwiSW5ib3hcIiwgcHJvamVjdElkKTtcclxuICAgIHByb2plY3RzLnB1c2gocHJvSW52b3gpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hc2lkZV9fdWxcIik7XHJcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIHByb2plY3RFbGVtZW50LnRleHRDb250ZW50ID0gcHJvSW52b3gucHJvamVjdE5hbWU7XHJcbiAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYXNpZGVfX2l0ZW1cIik7XHJcbiAgICBwcm9qZWN0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgcHJvamVjdC5wcm9qZWN0SWQpO1xyXG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xyXG4gICAgcHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dQcm9qZWN0KTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIHByb2plY3RPcHRpb24uaW5uZXJIVE1MID0gcHJvSW52b3gucHJvamVjdE5hbWU7XHJcbiAgICBwcm9qZWN0T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHByb0ludm94LnByb2plY3ROYW1lKTtcclxuXHJcbiAgICBjb25zdCBjbG9uZU9wdGlvbjEgPSBwcm9qZWN0T3B0aW9uLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIGNvbnN0IGNsb25lT3B0aW9uMiA9IHByb2plY3RPcHRpb24uY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuICAgIHByb2plY3RPcHRpb25zLmFwcGVuZENoaWxkKGNsb25lT3B0aW9uMSk7XHJcbiAgICBuZXdMb2NhdGlvbi5hcHBlbmRDaGlsZChjbG9uZU9wdGlvbjIpO1xyXG5cclxuICAgIHByb2plY3RJZCsrO1xyXG5cclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvSW52b3gucHJvamVjdE5hbWU7XHJcbiAgICBwcm9JbnZveC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICAgICAgY3JlYXRlVGFza0VsZW1lbnQodG9kbywgcHJvSW52b3gpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdChwcm9qZWN0TmFtZSwgcHJvamVjdElkKTtcclxuICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBwcm9qZWN0T3B0aW9uLmlubmVySFRNTCA9IHByb2plY3ROYW1lO1xyXG4gICAgcHJvamVjdE9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBwcm9qZWN0TmFtZSk7XHJcblxyXG4gICAgY29uc3QgY2xvbmVPcHRpb24xID0gcHJvamVjdE9wdGlvbi5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICBjb25zdCBjbG9uZU9wdGlvbjIgPSBwcm9qZWN0T3B0aW9uLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICBwcm9qZWN0T3B0aW9ucy5hcHBlbmRDaGlsZChjbG9uZU9wdGlvbjEpO1xyXG4gICAgbmV3TG9jYXRpb24uYXBwZW5kQ2hpbGQoY2xvbmVPcHRpb24yKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0T3B0aW9uLnZhbHVlKTtcclxuICAgIHJlbW92ZUZvcm0oKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgIGNsZWFyUHJvamVjdEZvcm0oKTtcclxuICAgIGNvbnNvbGUudGFibGUobmV3UHJvamVjdCk7XHJcbiAgICBwcm9qZWN0SWQrKztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFByb2plY3QoZWxlbWVudCkge1xyXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzaWRlX191bFwiKTtcclxuICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgcHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50O1xyXG4gICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFzaWRlX19pdGVtXCIpO1xyXG4gICAgcHJvamVjdEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIHByb2plY3QucHJvamVjdElkKTtcclxuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcclxuICAgIHByb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93UHJvamVjdCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjbGVhbk1haW4oKSB7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG4gICAgd2hpbGUgKG1haW4ubGFzdENoaWxkICE9PSB0aXRsZSkge1xyXG4gICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5sYXN0Q2hpbGQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93UHJvamVjdCgpIHtcclxuICAgIC8vZWwgbm9tYnJlIGRlbCBwcm95ZWN0byBxdWUgZnVlIGNsaWNhZG9cclxuICAgIGNsZWFuTWFpbigpO1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSB0aGlzLnRleHRDb250ZW50O1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKHBybyA9PiBwcm8ucHJvamVjdE5hbWUgPT09IHByb2plY3ROYW1lKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdC50b2Rvcyk7XHJcbiAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgICAgICBjcmVhdGVUYXNrRWxlbWVudCh0b2RvLCBwcm9qZWN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5sZXQgdGFza0lkID0gMDtcclxuXHJcbmZ1bmN0aW9uIG5ld1Rhc2soZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzY3JpcHRpb25cIikudmFsdWU7XHJcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kdWVkYXRlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5XCIpLnZhbHVlO1xyXG4gICAgY29uc3QgdGFza0xvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW9wdGlvblwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKHBybyA9PiBwcm8ucHJvamVjdE5hbWUgPT09IHRhc2tMb2NhdGlvbik7XHJcbiAgICBjb25zdCBuZXdUb2RvID0gbmV3IHRvZG8obmFtZSwgZGVzY3JpcHRpb24sIHRhc2tEdWVEYXRlLCB0YXNrUHJpb3JpdHksIHRhc2tJZCk7XHJcbiAgICBwcm9qZWN0LnRvZG9zLnB1c2gobmV3VG9kbyk7XHJcbiAgICBjb25zb2xlLnRhYmxlKG5ld1RvZG8pO1xyXG4gICAgY29uc29sZS50YWJsZShwcm9qZWN0LnRvZG9zKTtcclxuICAgIHRhc2tJZCsrO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRUaXRsZSA9IHRpdGxlLnRleHRDb250ZW50O1xyXG5cclxuICAgIGlmICh0YXNrTG9jYXRpb24gPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgIGNyZWF0ZVRhc2tFbGVtZW50KG5ld1RvZG8sIHByb2plY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyRm9ybSgpO1xyXG4gICAgcmVtb3ZlRm9ybSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrRWxlbWVudCh0b2RvLCBwcm9qZWN0KSB7XHJcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW5fX2NvbnRhaW5lci0tdGFza1wiKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuXHJcbiAgICBjb25zdCBsYWJlbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbE5hbWUuaW5uZXJIVE1MID0gdG9kby50b2RvTmFtZTtcclxuICAgIGxhYmVsTmFtZS5jbGFzc0xpc3QuYWRkKFwidGFzay1uYW1lXCIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbE5hbWUpO1xyXG5cclxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHRvZG8udG9kb1N0YXRlID0gXCJGaW5zaWhlZFwiO1xyXG4gICAgICAgICAgICBsYWJlbE5hbWUuY2xhc3NMaXN0LmFkZChcImZpbmlzaGVkLXRhc2tcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG8pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRvZG8udG9kb1N0YXRlID0gXCJOb3QgZmluc2loZWRcIjtcclxuICAgICAgICAgICAgbGFiZWxOYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJmaW5pc2hlZC10YXNrXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGJ0bkVkaXRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ0bkVkaXRUYXNrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBidG5FZGl0VGFzay5jbGFzc0xpc3QuYWRkKFwibWFpbl9fYnV0dG9uLS1lZGl0XCIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChidG5FZGl0VGFzayk7XHJcblxyXG4gICAgYnRuRWRpdFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dFZGl0VGFza0Zvcm0odG9kbykpO1xyXG5cclxuICAgIGNvbnN0IGJ0bkRlbFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuRGVsVGFzay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuRGVsVGFzay5jbGFzc0xpc3QuYWRkKFwibWFpbl9fYnV0dG9uLS1kZWxldGVcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkRlbFRhc2spO1xyXG5cclxuICAgIGJ0bkRlbFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkZWxldGVUYXNrKHByb2plY3QsIHRvZG8sIHRhc2tDb250YWluZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdGFza0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGFza0luZm8uY2xhc3NMaXN0LmFkZChcIm1haW5fX2NvbnRhaW5lci0taW5mb1wiKTtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0luZm8pO1xyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIG5hbWUuaW5uZXJIVE1MID0gXCJOYW1lXCI7XHJcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS0taW5mb1wiKTtcclxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKG5hbWUpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICB0YXNrTmFtZS5pbm5lckhUTUwgPSB0b2RvLnRvZG9OYW1lO1xyXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza05hbWUpO1xyXG4gICAgdGFza05hbWUuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiRGVzY3JpcHRpb25cIjtcclxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS0taW5mb1wiKTtcclxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuXHJcbiAgICBjb25zdCB0YXNrRGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICB0YXNrRGVzLmlubmVySFRNTCA9IHRvZG8udG9kb0Rlc2NyaXB0O1xyXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza0Rlcyk7XHJcbiAgICB0YXNrRGVzLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xyXG5cclxuICAgIGNvbnN0IGR1ZWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGR1ZWRhdGUuaW5uZXJIVE1MID0gXCJEdWUtZGF0ZVwiO1xyXG4gICAgZHVlZGF0ZS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtLWluZm9cIik7XHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZChkdWVkYXRlKTtcclxuXHJcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGFza0RhdGUuaW5uZXJIVE1MID0gdG9kby50b2RvRHVlRGF0ZTtcclxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcclxuICAgIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwcmlvcml0eS5pbm5lckhUTUwgPSBcIlByaW9yaXR5XCI7XHJcbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtLWluZm9cIik7XHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZChwcmlvcml0eSk7XHJcblxyXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICB0YXNrUHJpb3JpdHkuaW5uZXJIVE1MID0gdG9kby50b2RvUHJpb3JpdHk7XHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xyXG4gICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xyXG5cclxuICAgIGxhYmVsTmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRhc2tJbmZvLmNsYXNzTGlzdC50b2dnbGUoXCJtYWluX19jb250YWluZXItLWluZm8tLXZpc2libGVcIik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xyXG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtX19pbnB1dFwiKTtcclxuICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVGFzayhwcm9qZWN0LCB0b2RvLCB0YXNrQ29udGFpbmVyKSB7XHJcbiAgICBwcm9qZWN0LnJlbW92ZVRhc2sodG9kbyk7XHJcbiAgICB0YXNrQ29udGFpbmVyLnJlbW92ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBzaG93TWVudSwgaXNTbGlkZU91dCwgc2hvd0FkZFRhc2tGb3JtLCByZW1vdmVGb3JtLCBzaG93QWRkUHJvamVjdEZvcm0sIGNyZWF0ZVByb2plY3QsIGNsZWFyUHJvamVjdEZvcm0sIG5ld1Rhc2ssIGNyZWF0ZURlZmF1bHRQcm9qZWN0IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vLi4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCB7IHNob3dNZW51LCBzaG93QWRkVGFza0Zvcm0sIHJlbW92ZUZvcm0sIHNob3dBZGRQcm9qZWN0Rm9ybSwgY3JlYXRlUHJvamVjdCwgbmV3VGFzaywgY3JlYXRlRGVmYXVsdFByb2plY3R9IGZyb20gJy4vdWknO1xyXG5cclxuY29uc29sZS5sb2coXCJpdCBzdGlsbCB3b3JrcyBkb24ndCB3b3JyeVwiKTtcclxuXHJcbmNyZWF0ZURlZmF1bHRQcm9qZWN0KCk7XHJcblxyXG5jb25zdCBidG5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2J1dHRvbi0tbWVudVwiKTtcclxuYnRuTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd01lbnUpO1xyXG5cclxuY29uc3QgYnRuU2hvd0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYnV0dG9uLS1hZGR0YXNrXCIpO1xyXG5cclxuYnRuU2hvd0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dBZGRUYXNrRm9ybSk7XHJcblxyXG5jb25zdCBidG5FeGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtX19idXR0b24tLWV4aXRcIik7XHJcblxyXG5idG5FeGl0LmZvckVhY2goYnRuRXhpdCA9PiB7XHJcbiAgICBidG5FeGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVGb3JtKVxyXG59KTtcclxuXHJcbmNvbnN0IGJ0blNob3dQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXNpZGVfX2J1dHRvblwiKTtcclxuXHJcbmJ0blNob3dQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0FkZFByb2plY3RGb3JtKTtcclxuXHJcbmNvbnN0IGJ0blN1YlByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdF9fcHJvamVjdFwiKTtcclxuXHJcbmJ0blN1YlByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVByb2plY3QpO1xyXG5cclxuY29uc3QgYnRuQ3JlYXRlVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLXRhc2tcIik7XHJcbmJ0bkNyZWF0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Rhc2spO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==