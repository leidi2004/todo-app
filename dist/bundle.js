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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHcUI7QUFDa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwwQ0FBTztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsMENBQU87QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMENBQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsMENBQU87QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUNBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNuUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOeUI7QUFDcUc7QUFDOUg7QUFDQTtBQUNBO0FBQ0EseURBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxrQ0FBa0MseUNBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGdEQUFlO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDJDQUFVO0FBQ2hELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsbURBQWtCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyw4Q0FBYTtBQUNyRDtBQUNBO0FBQ0Esd0NBQXdDLHdDQUFPO0FBQy9DO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5jc3MvYW5pbWF0ZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY2xhc3MgdG9kbyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodG9kb05hbWUsIHRvZG9EZXNjcmlwdCwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eSwgaWQsIHRvZG9TdGF0ZSkge1xyXG4gICAgICAgIHRoaXMudG9kb05hbWUgPSB0b2RvTmFtZTtcclxuICAgICAgICB0aGlzLnRvZG9EZXNjcmlwdCA9IHRvZG9EZXNjcmlwdDtcclxuICAgICAgICB0aGlzLnRvZG9EdWVEYXRlID0gdG9kb0R1ZURhdGU7XHJcbiAgICAgICAgdGhpcy50b2RvUHJpb3JpdHkgPSB0b2RvUHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMudG9kb1N0YXRlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHRvZG9OYW1lKG5ld05hbWUpIHtcclxuICAgICAgICB0aGlzLl90b2RvTmFtZSA9IG5ld05hbWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCB0b2RvTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9kb05hbWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCB0b2RvRGVzY3JpcHQobmV3RGVzY3JpcHQpIHtcclxuICAgICAgICB0aGlzLl90b2RvRGVzY3JpcHQgPSBuZXdEZXNjcmlwdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHRvZG9EZXNjcmlwdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9kb0Rlc2NyaXB0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgdG9kb0R1ZURhdGUobmV3RHVlRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuX3RvZG9EdWVEYXRlID0gbmV3RHVlRGF0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHRvZG9EdWVEYXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b2RvRHVlRGF0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IHRvZG9Qcmlvcml0eShuZXdQcmlvcml0eSkge1xyXG4gICAgICAgIHRoaXMuX3RvZG9Qcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgdG9kb1ByaW9yaXR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b2RvUHJpb3JpdHk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCB0b2RvU3RhdGUobmV3U3RhdGUpIHtcclxuICAgICAgICB0aGlzLl90b2RvU3RhdGUgPSBuZXdTdGF0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHRvZG9TdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9kb1N0YXRlO1xyXG4gICAgfSBcclxuXHJcbiAgICBnZXQgaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgaWQobmV3SWQpIHtcclxuICAgICAgICB0aGlzLl9pZCA9IG5ld0lkO1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXRUb2RvKG5ld05hbWUsIG5ld0Rlc2NyaXB0LCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSwgbmV3Tm90ZSwgbmV3U3RhdGUpIHtcclxuICAgICAgICB0aGlzLnRvZG9OYW1lID0gbmV3TmFtZTtcclxuICAgICAgICB0aGlzLnRvZG9EZXNjcmlwdCA9IG5ld0Rlc2NyaXB0O1xyXG4gICAgICAgIHRoaXMudG9kb0R1ZURhdGUgPSBuZXdEdWVEYXRlO1xyXG4gICAgICAgIHRoaXMudG9kb1ByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy50b2RvTm90ZSA9IG5ld05vdGU7XHJcbiAgICAgICAgdGhpcy50b2RvU3RhdGUgPSBuZXdTdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgcHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZSwgcHJvamVjdElEKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xyXG4gICAgICAgIHRoaXMucHJvamVjdElEID0gcHJvamVjdElEO1xyXG4gICAgICAgIHRoaXMudG9kb3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJvamVjdE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3ROYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwcm9qZWN0TmFtZShuZXdOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvamVjdE5hbWUgPSBuZXdOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9qZWN0SUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3RJRDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcHJvamVjdElEKG5ld1Byb2plY3RJRCkge1xyXG4gICAgICAgIHRoaXMuX3Byb2plY3RJRCA9IG5ld1Byb2plY3RJRDtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYXNrKHRvZG8pIHtcclxuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVGFzayh0b2RvKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnRvZG9zLmluZGV4T2YodG9kbyk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnRvZG9zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyB0b2RvLCBwcm9qZWN0fTsiLCJpbXBvcnQgJ2FuaW1hdGUuY3NzJztcclxuaW1wb3J0IHsgcHJvamVjdCwgdG9kbyB9IGZyb20gJy4vdG9kbyc7XHJcbi8vRWxlbWVudHMgZm9yIHRoZSBldmVudCBsaXN0ZW5lciBvZiB0aGUgbWVudVxyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFzaWRlXCIpO1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcblxyXG4vL1RvIGNvbnRyb2wgdGhlIHN0YXRlIG9mIHRoZSBtZW51XHJcbmxldCBpc1NsaWRlT3V0ID0gdHJ1ZTtcclxuXHJcbi8vRnVuY3Rpb24gZm9yIHRoZSBldmVudCBsaXN0ZW5lciBvZiB0aGUgbWVudVxyXG5mdW5jdGlvbiBzaG93TWVudSgpIHtcclxuICAgIGlmICghaXNTbGlkZU91dCkge1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGVfX3NsaWRlSW5MZWZ0XCIpO1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcImFuaW1hdGVfX2ZhZGVPdXRMZWZ0XCIsIFwiYW5pbWF0ZV9fZmFzdGVyXCIpO1xyXG4gICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVfX3NsaWRlSW5SaWdodFwiKTtcclxuICAgICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoXCJtYWluLS1jZW50ZXJcIiwgXCJhbmltYXRlX19zbGlkZUluTGVmdFwiKTtcclxuICAgICAgICBpc1NsaWRlT3V0ID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZV9fZmFkZU91dExlZnRcIiwgXCJhbmltYXRlX19mYXN0ZXJcIik7XHJcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZV9fc2xpZGVJblJpZ2h0XCIpO1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcImFzaWRlLWFjdGl2ZVwiKTtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlX19hbmltYXRlZFwiLCBcImFuaW1hdGVfX3NsaWRlSW5MZWZ0XCIsIFwiYW5pbWF0ZV9fZmFzdFwiKTtcclxuICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlX19hbmltYXRlZFwiLCBcIm1haW4tLWNlbnRlclwiLCBcImFuaW1hdGVfX3NsaWRlSW5MZWZ0XCIpO1xyXG4gICAgICAgIGlzU2xpZGVPdXQgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZm9ybUFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tLWFkZHRhc2tcIik7XHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dBZGRUYXNrRm9ybSgpIHtcclxuICAgIGZvcm1BZGRUYXNrLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXZpc2libGVcIik7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJsb3N0Zm9jdXNcIik7XHJcbn1cclxuXHJcbmNvbnN0IGZvcm1BZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLS1hZGRwcm9qZWN0XCIpO1xyXG5jb25zdCBidG5TaG93UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzaWRlX19idXR0b25cIik7XHJcblxyXG5mdW5jdGlvbiBzaG93QWRkUHJvamVjdEZvcm0oKSB7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJsb3N0Zm9jdXNcIik7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJsb3N0Zm9jdXNcIik7XHJcbiAgICBidG5TaG93UHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZChcImxvc3Rmb2N1c1wiKTtcclxuICAgIGZvcm1BZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJmb3JtLS1hZGRQcm9qZWN0LXZpc2libGVcIik7XHJcbn1cclxuXHJcbmNvbnN0IGZvcm1FZGl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS0tZWRpdHRhc2tcIik7XHJcblxyXG5mdW5jdGlvbiBzaG93RWRpdFRhc2tGb3JtKCkge1xyXG4gICAgZm9ybUVkaXRUYXNrLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXZpc2libGVcIik7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJsb3N0Zm9jdXNcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb3N0Zm9jdXNcIik7XHJcbiAgICBpZiAoZm9ybUFkZFRhc2suY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9ybS12aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgZm9ybUFkZFRhc2suY2xhc3NMaXN0LnJlbW92ZShcImZvcm0tdmlzaWJsZVwiKTtcclxuICAgICAgICBjbGVhckZvcm0oKTtcclxuICAgIH0gZWxzZSBpZiAoZm9ybUFkZFByb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9ybS0tYWRkUHJvamVjdC12aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibG9zdGZvY3VzXCIpO1xyXG4gICAgICAgIGJ0blNob3dQcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwibG9zdGZvY3VzXCIpO1xyXG4gICAgICAgIGZvcm1BZGRQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JtLS1hZGRQcm9qZWN0LXZpc2libGVcIik7XHJcbiAgICAgICAgY2xlYXJQcm9qZWN0Rm9ybSgpO1xyXG4gICAgfSBlbHNlIGlmIChmb3JtRWRpdFRhc2suY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9ybS12aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgZm9ybUVkaXRUYXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JtLXZpc2libGVcIik7XHJcbiAgICAgICAgY2xlYXJGb3JtKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyUHJvamVjdEZvcm0oKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpLnZhbHVlID0gXCJcIjtcclxufVxyXG5cclxubGV0IHByb2plY3RzID0gW107XHJcbmNvbnN0IHByb2plY3RPcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW9wdGlvblwiKTtcclxuY29uc3QgbmV3TG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0xvY2F0aW9uXCIpO1xyXG5cclxubGV0IHByb2plY3RJZCA9IDA7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdCgpe1xyXG4gICAgY29uc3QgcHJvSW52b3ggPSBuZXcgcHJvamVjdChcIkluYm94XCIsIHByb2plY3RJZCk7XHJcbiAgICBwcm9qZWN0cy5wdXNoKHByb0ludm94KTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXNpZGVfX3VsXCIpO1xyXG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCA9IHByb0ludm94LnByb2plY3ROYW1lO1xyXG4gICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFzaWRlX19pdGVtXCIpO1xyXG4gICAgcHJvamVjdEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIHByb2plY3QucHJvamVjdElkKTtcclxuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcclxuICAgIHByb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93UHJvamVjdCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgcHJvamVjdE9wdGlvbi5pbm5lckhUTUwgPSBwcm9JbnZveC5wcm9qZWN0TmFtZTtcclxuICAgIHByb2plY3RPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgcHJvSW52b3gucHJvamVjdE5hbWUpO1xyXG5cclxuICAgIGNvbnN0IGNsb25lT3B0aW9uMSA9IHByb2plY3RPcHRpb24uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgY29uc3QgY2xvbmVPcHRpb24yID0gcHJvamVjdE9wdGlvbi5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG4gICAgcHJvamVjdE9wdGlvbnMuYXBwZW5kQ2hpbGQoY2xvbmVPcHRpb24xKTtcclxuICAgIG5ld0xvY2F0aW9uLmFwcGVuZENoaWxkKGNsb25lT3B0aW9uMik7XHJcbiAgICBcclxuICAgIHByb2plY3RJZCsrO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIikudmFsdWU7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IHByb2plY3QocHJvamVjdE5hbWUsIHByb2plY3RJZCk7XHJcbiAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgcHJvamVjdE9wdGlvbi5pbm5lckhUTUwgPSBwcm9qZWN0TmFtZTtcclxuICAgIHByb2plY3RPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgcHJvamVjdE5hbWUpO1xyXG5cclxuICAgIGNvbnN0IGNsb25lT3B0aW9uMSA9IHByb2plY3RPcHRpb24uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgY29uc3QgY2xvbmVPcHRpb24yID0gcHJvamVjdE9wdGlvbi5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG4gICAgcHJvamVjdE9wdGlvbnMuYXBwZW5kQ2hpbGQoY2xvbmVPcHRpb24xKTtcclxuICAgIG5ld0xvY2F0aW9uLmFwcGVuZENoaWxkKGNsb25lT3B0aW9uMik7XHJcblxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdE9wdGlvbi52YWx1ZSk7XHJcbiAgICByZW1vdmVGb3JtKCk7XHJcbiAgICBjcmVhdGVFbGVtZW50UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICBjbGVhclByb2plY3RGb3JtKCk7XHJcbiAgICBjb25zb2xlLnRhYmxlKG5ld1Byb2plY3QpO1xyXG4gICAgcHJvamVjdElkKys7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRQcm9qZWN0KGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hc2lkZV9fdWxcIik7XHJcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIHByb2plY3RFbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudDtcclxuICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhc2lkZV9faXRlbVwiKTtcclxuICAgIHByb2plY3RFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBwcm9qZWN0LnByb2plY3RJZCk7XHJcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XHJcbiAgICBwcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1Byb2plY3QpO1xyXG59XHJcblxyXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9faDJcIik7XHJcblxyXG5mdW5jdGlvbiBjbGVhbk1haW4oKSB7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG4gICAgd2hpbGUgKG1haW4ubGFzdENoaWxkICE9PSB0aXRsZSkge1xyXG4gICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5sYXN0Q2hpbGQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93UHJvamVjdCgpIHtcclxuICAgIC8vZWwgbm9tYnJlIGRlbCBwcm95ZWN0byBxdWUgZnVlIGNsaWNhZG9cclxuICAgIGNsZWFuTWFpbigpO1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSB0aGlzLnRleHRDb250ZW50O1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKHBybyA9PiBwcm8ucHJvamVjdE5hbWUgPT09IHByb2plY3ROYW1lKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdC50b2Rvcyk7XHJcbiAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgICAgICBjcmVhdGVUYXNrRWxlbWVudCh0b2RvLCBwcm9qZWN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5sZXQgdGFza0lkID0gMDtcclxuXHJcbmZ1bmN0aW9uIG5ld1Rhc2soZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzY3JpcHRpb25cIikudmFsdWU7XHJcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kdWVkYXRlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5XCIpLnZhbHVlO1xyXG4gICAgY29uc3QgdGFza0xvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW9wdGlvblwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKHBybyA9PiBwcm8ucHJvamVjdE5hbWUgPT09IHRhc2tMb2NhdGlvbik7XHJcbiAgICBjb25zdCBuZXdUb2RvID0gbmV3IHRvZG8obmFtZSwgZGVzY3JpcHRpb24sIHRhc2tEdWVEYXRlLCB0YXNrUHJpb3JpdHksIHRhc2tJZCk7XHJcbiAgICBwcm9qZWN0LnRvZG9zLnB1c2gobmV3VG9kbyk7XHJcbiAgICBjb25zb2xlLnRhYmxlKG5ld1RvZG8pO1xyXG4gICAgY29uc29sZS50YWJsZShwcm9qZWN0LnRvZG9zKTtcclxuICAgIHRhc2tJZCsrO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRUaXRsZSA9IHRpdGxlLnRleHRDb250ZW50O1xyXG5cclxuICAgIGlmICh0YXNrTG9jYXRpb24gPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgIGNyZWF0ZVRhc2tFbGVtZW50KG5ld1RvZG8sIHByb2plY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyRm9ybSgpO1xyXG4gICAgcmVtb3ZlRm9ybSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrRWxlbWVudCh0b2RvLCBwcm9qZWN0KSB7XHJcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW5fX2NvbnRhaW5lci0tdGFza1wiKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuXHJcbiAgICBjb25zdCBsYWJlbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbE5hbWUuaW5uZXJIVE1MID0gdG9kby50b2RvTmFtZTtcclxuICAgIGxhYmVsTmFtZS5jbGFzc0xpc3QuYWRkKFwidGFzay1uYW1lXCIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbE5hbWUpO1xyXG5cclxuICAgIGNvbnN0IGJ0bkVkaXRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ0bkVkaXRUYXNrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBidG5FZGl0VGFzay5jbGFzc0xpc3QuYWRkKFwibWFpbl9fYnV0dG9uLS1lZGl0XCIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChidG5FZGl0VGFzayk7XHJcblxyXG4gICAgYnRuRWRpdFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dFZGl0VGFza0Zvcm0pO1xyXG5cclxuICAgIGNvbnN0IGJ0bkRlbFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuRGVsVGFzay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuRGVsVGFzay5jbGFzc0xpc3QuYWRkKFwibWFpbl9fYnV0dG9uLS1kZWxldGVcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkRlbFRhc2spO1xyXG5cclxuICAgIGJ0bkRlbFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZGVsZXRlVGFzayhwcm9qZWN0LCB0b2RvLCB0YXNrQ29udGFpbmVyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRhc2tJbmZvLmNsYXNzTGlzdC5hZGQoXCJtYWluX19jb250YWluZXItLWluZm9cIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tJbmZvKTtcclxuXHJcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBuYW1lLmlubmVySFRNTCA9IFwiTmFtZVwiO1xyXG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtLWluZm9cIik7XHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZChuYW1lKTtcclxuXHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGFza05hbWUuaW5uZXJIVE1MID0gdG9kby50b2RvTmFtZTtcclxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcclxuICAgIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIkRlc2NyaXB0aW9uXCI7XHJcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidGl0bGUtLWluZm9cIik7XHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcblxyXG4gICAgY29uc3QgdGFza0RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGFza0Rlcy5pbm5lckhUTUwgPSB0b2RvLnRvZG9EZXNjcmlwdDtcclxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tEZXMpO1xyXG4gICAgdGFza0Rlcy5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcclxuXHJcbiAgICBjb25zdCBkdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBkdWVkYXRlLmlubmVySFRNTCA9IFwiRHVlLWRhdGVcIjtcclxuICAgIGR1ZWRhdGUuY2xhc3NMaXN0LmFkZChcInRpdGxlLS1pbmZvXCIpO1xyXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQoZHVlZGF0ZSk7XHJcblxyXG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRhc2tEYXRlLmlubmVySFRNTCA9IHRvZG8udG9kb0R1ZURhdGU7XHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XHJcbiAgICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcHJpb3JpdHkuaW5uZXJIVE1MID0gXCJQcmlvcml0eVwiO1xyXG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRpdGxlLS1pbmZvXCIpO1xyXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGFza1ByaW9yaXR5LmlubmVySFRNTCA9IHRvZG8udG9kb1ByaW9yaXR5O1xyXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcclxuICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcclxuXHJcbiAgICBsYWJlbE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICB0YXNrSW5mby5jbGFzc0xpc3QudG9nZ2xlKFwibWFpbl9fY29udGFpbmVyLS1pbmZvLS12aXNpYmxlXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcclxuICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybV9faW5wdXRcIik7XHJcbiAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVRhc2socHJvamVjdCwgdG9kbywgdGFza0NvbnRhaW5lcil7XHJcbiAgICBwcm9qZWN0LnJlbW92ZVRhc2sodG9kbyk7XHJcbiAgICB0YXNrQ29udGFpbmVyLnJlbW92ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBzaG93TWVudSwgaXNTbGlkZU91dCwgc2hvd0FkZFRhc2tGb3JtLCByZW1vdmVGb3JtLCBzaG93QWRkUHJvamVjdEZvcm0sIGNyZWF0ZVByb2plY3QsIGNsZWFyUHJvamVjdEZvcm0sIG5ld1Rhc2ssIGNyZWF0ZURlZmF1bHRQcm9qZWN0fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi8uLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHsgc2hvd01lbnUsIHNob3dBZGRUYXNrRm9ybSwgcmVtb3ZlRm9ybSwgc2hvd0FkZFByb2plY3RGb3JtLCBjcmVhdGVQcm9qZWN0LCBuZXdUYXNrLCBjcmVhdGVEZWZhdWx0UHJvamVjdH0gZnJvbSAnLi91aSc7XHJcblxyXG5jb25zb2xlLmxvZyhcIml0IHN0aWxsIHdvcmtzIGRvbid0IHdvcnJ5XCIpO1xyXG5cclxuY3JlYXRlRGVmYXVsdFByb2plY3QoKTtcclxuXHJcbmNvbnN0IGJ0bk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYnV0dG9uLS1tZW51XCIpO1xyXG5idG5NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TWVudSk7XHJcblxyXG5jb25zdCBidG5TaG93Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19idXR0b24tLWFkZHRhc2tcIik7XHJcblxyXG5idG5TaG93Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0FkZFRhc2tGb3JtKTtcclxuXHJcbmNvbnN0IGJ0bkV4aXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm1fX2J1dHRvbi0tZXhpdFwiKTtcclxuXHJcbmJ0bkV4aXQuZm9yRWFjaChidG5FeGl0ID0+IHtcclxuICAgIGJ0bkV4aXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUZvcm0pXHJcbn0pO1xyXG5cclxuY29uc3QgYnRuU2hvd1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hc2lkZV9fYnV0dG9uXCIpO1xyXG5cclxuYnRuU2hvd1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93QWRkUHJvamVjdEZvcm0pO1xyXG5cclxuY29uc3QgYnRuU3ViUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0X19wcm9qZWN0XCIpO1xyXG5cclxuYnRuU3ViUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUHJvamVjdCk7XHJcblxyXG5jb25zdCBidG5DcmVhdGVUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGUtdGFza1wiKTtcclxuYnRuQ3JlYXRlVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3VGFzayk7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9