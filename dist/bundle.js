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
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   isSlideOut: () => (/* binding */ isSlideOut),
/* harmony export */   newTask: () => (/* binding */ newTask),
/* harmony export */   removeForm: () => (/* binding */ removeForm),
/* harmony export */   showAddProjectForm: () => (/* binding */ showAddProjectForm),
/* harmony export */   showAddTaskForm: () => (/* binding */ showAddTaskForm),
/* harmony export */   showEditTaskForm: () => (/* binding */ showEditTaskForm),
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

let projectId = 0;

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

function cleanMain(){
    const main = document.querySelector(".main");
    const title = main.querySelector("h2");
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
        createTaskElement(todo);
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
}

function createTaskElement(todo) {
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

    const btnDelTask = document.createElement("button");
    btnDelTask.setAttribute("type", "button");
    btnDelTask.classList.add("main__button--delete");
    taskContainer.appendChild(btnDelTask);

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
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/js/todo.js");



console.log("it still works don't worry");
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

const btnShowEditTaskForm = document.querySelectorAll(".main__button--edit");

btnShowEditTaskForm.forEach(btnShowEditTaskForm => {
    btnShowEditTaskForm.addEventListener("click", _ui__WEBPACK_IMPORTED_MODULE_1__.showEditTaskForm);
});


const proInvox = new _todo__WEBPACK_IMPORTED_MODULE_2__.project("Inbox");

const btnSubProject = document.querySelector(".submit__project");

btnSubProject.addEventListener("click", _ui__WEBPACK_IMPORTED_MODULE_1__.createProject);

const btnCreateTask = document.getElementById("create-task");
btnCreateTask.addEventListener("click", _ui__WEBPACK_IMPORTED_MODULE_1__.newTask);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHcUI7QUFDa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMENBQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsMENBQU87QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVDQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7VUMzTkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnlCO0FBQ2lHO0FBQ3BGO0FBQ3RDO0FBQ0E7QUFDQSxrQ0FBa0MseUNBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGdEQUFlO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDJDQUFVO0FBQ2hELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsbURBQWtCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGlEQUFnQjtBQUNsRSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsOENBQWE7QUFDckQ7QUFDQTtBQUNBLHdDQUF3Qyx3Q0FBTztBQUMvQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmNzcy9hbmltYXRlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjbGFzcyB0b2RvIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0b2RvTmFtZSwgdG9kb0Rlc2NyaXB0LCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5LCBpZCwgdG9kb1N0YXRlKSB7XHJcbiAgICAgICAgdGhpcy50b2RvTmFtZSA9IHRvZG9OYW1lO1xyXG4gICAgICAgIHRoaXMudG9kb0Rlc2NyaXB0ID0gdG9kb0Rlc2NyaXB0O1xyXG4gICAgICAgIHRoaXMudG9kb0R1ZURhdGUgPSB0b2RvRHVlRGF0ZTtcclxuICAgICAgICB0aGlzLnRvZG9Qcmlvcml0eSA9IHRvZG9Qcmlvcml0eTtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy50b2RvU3RhdGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdG9kb05hbWUobmV3TmFtZSkge1xyXG4gICAgICAgIHRoaXMuX3RvZG9OYW1lID0gbmV3TmFtZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHRvZG9OYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b2RvTmFtZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IHRvZG9EZXNjcmlwdChuZXdEZXNjcmlwdCkge1xyXG4gICAgICAgIHRoaXMuX3RvZG9EZXNjcmlwdCA9IG5ld0Rlc2NyaXB0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgdG9kb0Rlc2NyaXB0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b2RvRGVzY3JpcHQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCB0b2RvRHVlRGF0ZShuZXdEdWVEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5fdG9kb0R1ZURhdGUgPSBuZXdEdWVEYXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgdG9kb0R1ZURhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvZG9EdWVEYXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgdG9kb1ByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XHJcbiAgICAgICAgdGhpcy5fdG9kb1ByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCB0b2RvUHJpb3JpdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvZG9Qcmlvcml0eTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IHRvZG9TdGF0ZShuZXdTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuX3RvZG9TdGF0ZSA9IG5ld1N0YXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgdG9kb1N0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b2RvU3RhdGU7XHJcbiAgICB9IFxyXG5cclxuICAgIGdldCBpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCBpZChuZXdJZCkge1xyXG4gICAgICAgIHRoaXMuX2lkID0gbmV3SWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdFRvZG8obmV3TmFtZSwgbmV3RGVzY3JpcHQsIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5LCBuZXdOb3RlLCBuZXdTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMudG9kb05hbWUgPSBuZXdOYW1lO1xyXG4gICAgICAgIHRoaXMudG9kb0Rlc2NyaXB0ID0gbmV3RGVzY3JpcHQ7XHJcbiAgICAgICAgdGhpcy50b2RvRHVlRGF0ZSA9IG5ld0R1ZURhdGU7XHJcbiAgICAgICAgdGhpcy50b2RvUHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcclxuICAgICAgICB0aGlzLnRvZG9Ob3RlID0gbmV3Tm90ZTtcclxuICAgICAgICB0aGlzLnRvZG9TdGF0ZSA9IG5ld1N0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBwcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lLCBwcm9qZWN0SUQpIHtcclxuICAgICAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0SUQgPSBwcm9qZWN0SUQ7XHJcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9qZWN0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdE5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHByb2plY3ROYW1lKG5ld05hbWUpIHtcclxuICAgICAgICB0aGlzLl9wcm9qZWN0TmFtZSA9IG5ld05hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb2plY3RJRCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdElEO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwcm9qZWN0SUQobmV3UHJvamVjdElEKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvamVjdElEID0gbmV3UHJvamVjdElEO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhc2sodG9kbykge1xyXG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVUYXNrKHRvZG8pIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudG9kb3MuaW5kZXhPZih0b2RvKTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHRvZG8sIHByb2plY3R9OyIsImltcG9ydCAnYW5pbWF0ZS5jc3MnO1xyXG5pbXBvcnQgeyBwcm9qZWN0LCB0b2RvIH0gZnJvbSAnLi90b2RvJztcclxuLy9FbGVtZW50cyBmb3IgdGhlIGV2ZW50IGxpc3RlbmVyIG9mIHRoZSBtZW51XHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGVcIik7XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuXHJcbi8vVG8gY29udHJvbCB0aGUgc3RhdGUgb2YgdGhlIG1lbnVcclxubGV0IGlzU2xpZGVPdXQgPSB0cnVlO1xyXG5cclxuLy9GdW5jdGlvbiBmb3IgdGhlIGV2ZW50IGxpc3RlbmVyIG9mIHRoZSBtZW51XHJcbmZ1bmN0aW9uIHNob3dNZW51KCkge1xyXG4gICAgaWYgKCFpc1NsaWRlT3V0KSB7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZV9fc2xpZGVJbkxlZnRcIik7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZV9fZmFkZU91dExlZnRcIiwgXCJhbmltYXRlX19mYXN0ZXJcIik7XHJcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZV9fc2xpZGVJblJpZ2h0XCIpO1xyXG4gICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZShcIm1haW4tLWNlbnRlclwiLCBcImFuaW1hdGVfX3NsaWRlSW5MZWZ0XCIpO1xyXG4gICAgICAgIGlzU2xpZGVPdXQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlX19mYWRlT3V0TGVmdFwiLCBcImFuaW1hdGVfX2Zhc3RlclwiKTtcclxuICAgICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlX19zbGlkZUluUmlnaHRcIik7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwiYXNpZGUtYWN0aXZlXCIpO1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcImFuaW1hdGVfX2FuaW1hdGVkXCIsIFwiYW5pbWF0ZV9fc2xpZGVJbkxlZnRcIiwgXCJhbmltYXRlX19mYXN0XCIpO1xyXG4gICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVfX2FuaW1hdGVkXCIsIFwibWFpbi0tY2VudGVyXCIsIFwiYW5pbWF0ZV9fc2xpZGVJbkxlZnRcIik7XHJcbiAgICAgICAgaXNTbGlkZU91dCA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBmb3JtQWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS0tYWRkdGFza1wiKTtcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cclxuZnVuY3Rpb24gc2hvd0FkZFRhc2tGb3JtKCkge1xyXG4gICAgZm9ybUFkZFRhc2suY2xhc3NMaXN0LmFkZChcImZvcm0tdmlzaWJsZVwiKTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImxvc3Rmb2N1c1wiKTtcclxufVxyXG5cclxuY29uc3QgZm9ybUFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tLWFkZHByb2plY3RcIik7XHJcbmNvbnN0IGJ0blNob3dQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXNpZGVfX2J1dHRvblwiKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dBZGRQcm9qZWN0Rm9ybSgpIHtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImxvc3Rmb2N1c1wiKTtcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcImxvc3Rmb2N1c1wiKTtcclxuICAgIGJ0blNob3dQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwibG9zdGZvY3VzXCIpO1xyXG4gICAgZm9ybUFkZFByb2plY3QuY2xhc3NMaXN0LmFkZChcImZvcm0tLWFkZFByb2plY3QtdmlzaWJsZVwiKTtcclxufVxyXG5cclxuY29uc3QgZm9ybUVkaXRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLS1lZGl0dGFza1wiKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dFZGl0VGFza0Zvcm0oKSB7XHJcbiAgICBmb3JtRWRpdFRhc2suY2xhc3NMaXN0LmFkZChcImZvcm0tdmlzaWJsZVwiKTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImxvc3Rmb2N1c1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRm9ybSgpIHtcclxuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvc3Rmb2N1c1wiKTtcclxuICAgIGlmIChmb3JtQWRkVGFzay5jbGFzc0xpc3QuY29udGFpbnMoXCJmb3JtLXZpc2libGVcIikpIHtcclxuICAgICAgICBmb3JtQWRkVGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybS12aXNpYmxlXCIpO1xyXG4gICAgfSBlbHNlIGlmIChmb3JtQWRkUHJvamVjdC5jbGFzc0xpc3QuY29udGFpbnMoXCJmb3JtLS1hZGRQcm9qZWN0LXZpc2libGVcIikpIHtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJsb3N0Zm9jdXNcIik7XHJcbiAgICAgICAgYnRuU2hvd1Byb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJsb3N0Zm9jdXNcIik7XHJcbiAgICAgICAgZm9ybUFkZFByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImZvcm0tLWFkZFByb2plY3QtdmlzaWJsZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoZm9ybUVkaXRUYXNrLmNsYXNzTGlzdC5jb250YWlucyhcImZvcm0tdmlzaWJsZVwiKSkge1xyXG4gICAgICAgIGZvcm1FZGl0VGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybS12aXNpYmxlXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhclByb2plY3RGb3JtKCkge1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKS52YWx1ZSA9IFwiXCI7XHJcbn1cclxuXHJcbmxldCBwcm9qZWN0cyA9IFtdO1xyXG5jb25zdCBwcm9qZWN0T3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1vcHRpb25cIik7XHJcbmNvbnN0IG5ld0xvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdMb2NhdGlvblwiKTtcclxuXHJcbmxldCBwcm9qZWN0SWQgPSAwO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBwcm9qZWN0KHByb2plY3ROYW1lLCBwcm9qZWN0SWQpO1xyXG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIHByb2plY3RPcHRpb24uaW5uZXJIVE1MID0gcHJvamVjdE5hbWU7XHJcbiAgICBwcm9qZWN0T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHByb2plY3ROYW1lKTtcclxuXHJcbiAgICBjb25zdCBjbG9uZU9wdGlvbjEgPSBwcm9qZWN0T3B0aW9uLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIGNvbnN0IGNsb25lT3B0aW9uMiA9IHByb2plY3RPcHRpb24uY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuICAgIHByb2plY3RPcHRpb25zLmFwcGVuZENoaWxkKGNsb25lT3B0aW9uMSk7XHJcbiAgICBuZXdMb2NhdGlvbi5hcHBlbmRDaGlsZChjbG9uZU9wdGlvbjIpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RPcHRpb24udmFsdWUpO1xyXG4gICAgcmVtb3ZlRm9ybSgpO1xyXG4gICAgY3JlYXRlRWxlbWVudFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgY2xlYXJQcm9qZWN0Rm9ybSgpO1xyXG4gICAgY29uc29sZS50YWJsZShuZXdQcm9qZWN0KTtcclxuICAgIHByb2plY3RJZCsrO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50UHJvamVjdChlbGVtZW50KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXNpZGVfX3VsXCIpO1xyXG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnQ7XHJcbiAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYXNpZGVfX2l0ZW1cIik7XHJcbiAgICBwcm9qZWN0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgcHJvamVjdC5wcm9qZWN0SWQpO1xyXG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xyXG4gICAgcHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dQcm9qZWN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYW5NYWluKCl7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBtYWluLnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKTtcclxuICAgIHdoaWxlIChtYWluLmxhc3RDaGlsZCAhPT0gdGl0bGUpIHtcclxuICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4ubGFzdENoaWxkKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1Byb2plY3QoKSB7XHJcbiAgICAvL2VsIG5vbWJyZSBkZWwgcHJveWVjdG8gcXVlIGZ1ZSBjbGljYWRvXHJcbiAgICBjbGVhbk1haW4oKTtcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gdGhpcy50ZXh0Q29udGVudDtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZChwcm8gPT4gcHJvLnByb2plY3ROYW1lID09PSBwcm9qZWN0TmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3QudG9kb3MpO1xyXG4gICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICAgICAgY3JlYXRlVGFza0VsZW1lbnQodG9kbyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxubGV0IHRhc2tJZCA9IDA7XHJcblxyXG5mdW5jdGlvbiBuZXdUYXNrKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZHVlZGF0ZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1wcmlvcml0eVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHRhc2tMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1vcHRpb25cIikudmFsdWU7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZChwcm8gPT4gcHJvLnByb2plY3ROYW1lID09PSB0YXNrTG9jYXRpb24pO1xyXG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyB0b2RvKG5hbWUsIGRlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5LCB0YXNrSWQpO1xyXG4gICAgcHJvamVjdC50b2Rvcy5wdXNoKG5ld1RvZG8pO1xyXG4gICAgY29uc29sZS50YWJsZShuZXdUb2RvKTtcclxuICAgIGNvbnNvbGUudGFibGUocHJvamVjdC50b2Rvcyk7XHJcbiAgICB0YXNrSWQrKztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFza0VsZW1lbnQodG9kbykge1xyXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluX19jb250YWluZXItLXRhc2tcIik7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcblxyXG4gICAgY29uc3QgbGFiZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbGFiZWxOYW1lLmlubmVySFRNTCA9IHRvZG8udG9kb05hbWU7XHJcbiAgICBsYWJlbE5hbWUuY2xhc3NMaXN0LmFkZChcInRhc2stbmFtZVwiKTtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWxOYW1lKTtcclxuXHJcbiAgICBjb25zdCBidG5FZGl0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidG5FZGl0VGFzay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuRWRpdFRhc2suY2xhc3NMaXN0LmFkZChcIm1haW5fX2J1dHRvbi0tZWRpdFwiKTtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuRWRpdFRhc2spO1xyXG5cclxuICAgIGNvbnN0IGJ0bkRlbFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuRGVsVGFzay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuRGVsVGFzay5jbGFzc0xpc3QuYWRkKFwibWFpbl9fYnV0dG9uLS1kZWxldGVcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkRlbFRhc2spO1xyXG5cclxuICAgIGNvbnN0IHRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRhc2tJbmZvLmNsYXNzTGlzdC5hZGQoXCJtYWluX19jb250YWluZXItLWluZm9cIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tJbmZvKTtcclxuXHJcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBuYW1lLmlubmVySFRNTCA9IFwiTmFtZVwiO1xyXG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtLWluZm9cIik7XHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZChuYW1lKTtcclxuXHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGFza05hbWUuaW5uZXJIVE1MID0gdG9kby50b2RvTmFtZTtcclxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcclxuICAgIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIkRlc2NyaXB0aW9uXCI7XHJcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidGl0bGUtLWluZm9cIik7XHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcblxyXG4gICAgY29uc3QgdGFza0RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGFza0Rlcy5pbm5lckhUTUwgPSB0b2RvLnRvZG9EZXNjcmlwdDtcclxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tEZXMpO1xyXG4gICAgdGFza0Rlcy5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcclxuXHJcbiAgICBjb25zdCBkdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBkdWVkYXRlLmlubmVySFRNTCA9IFwiRHVlLWRhdGVcIjtcclxuICAgIGR1ZWRhdGUuY2xhc3NMaXN0LmFkZChcInRpdGxlLS1pbmZvXCIpO1xyXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQoZHVlZGF0ZSk7XHJcblxyXG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRhc2tEYXRlLmlubmVySFRNTCA9IHRvZG8udG9kb0R1ZURhdGU7XHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XHJcbiAgICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcHJpb3JpdHkuaW5uZXJIVE1MID0gXCJQcmlvcml0eVwiO1xyXG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRpdGxlLS1pbmZvXCIpO1xyXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGFza1ByaW9yaXR5LmlubmVySFRNTCA9IHRvZG8udG9kb1ByaW9yaXR5O1xyXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcclxuICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcclxuXHJcbiAgICBsYWJlbE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICB0YXNrSW5mby5jbGFzc0xpc3QudG9nZ2xlKFwibWFpbl9fY29udGFpbmVyLS1pbmZvLS12aXNpYmxlXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHNob3dNZW51LCBpc1NsaWRlT3V0LCBzaG93QWRkVGFza0Zvcm0sIHJlbW92ZUZvcm0sIHNob3dBZGRQcm9qZWN0Rm9ybSwgc2hvd0VkaXRUYXNrRm9ybSwgY3JlYXRlUHJvamVjdCwgY2xlYXJQcm9qZWN0Rm9ybSwgbmV3VGFzayB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLy4uL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgeyBzaG93TWVudSwgc2hvd0FkZFRhc2tGb3JtLCByZW1vdmVGb3JtLCBzaG93QWRkUHJvamVjdEZvcm0sIHNob3dFZGl0VGFza0Zvcm0sIGNyZWF0ZVByb2plY3QsIG5ld1Rhc2t9IGZyb20gJy4vdWknO1xyXG5pbXBvcnQgeyBwcm9qZWN0LCB0b2RvfSBmcm9tICcuL3RvZG8nO1xyXG5jb25zb2xlLmxvZyhcIml0IHN0aWxsIHdvcmtzIGRvbid0IHdvcnJ5XCIpO1xyXG5jb25zdCBidG5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2J1dHRvbi0tbWVudVwiKTtcclxuYnRuTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd01lbnUpO1xyXG5cclxuY29uc3QgYnRuU2hvd0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYnV0dG9uLS1hZGR0YXNrXCIpO1xyXG5cclxuYnRuU2hvd0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dBZGRUYXNrRm9ybSk7XHJcblxyXG5jb25zdCBidG5FeGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtX19idXR0b24tLWV4aXRcIik7XHJcblxyXG5idG5FeGl0LmZvckVhY2goYnRuRXhpdCA9PiB7XHJcbiAgICBidG5FeGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVGb3JtKVxyXG59KTtcclxuXHJcbmNvbnN0IGJ0blNob3dQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXNpZGVfX2J1dHRvblwiKTtcclxuXHJcbmJ0blNob3dQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0FkZFByb2plY3RGb3JtKTtcclxuXHJcbmNvbnN0IGJ0blNob3dFZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW5fX2J1dHRvbi0tZWRpdFwiKTtcclxuXHJcbmJ0blNob3dFZGl0VGFza0Zvcm0uZm9yRWFjaChidG5TaG93RWRpdFRhc2tGb3JtID0+IHtcclxuICAgIGJ0blNob3dFZGl0VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dFZGl0VGFza0Zvcm0pO1xyXG59KTtcclxuXHJcblxyXG5jb25zdCBwcm9JbnZveCA9IG5ldyBwcm9qZWN0KFwiSW5ib3hcIik7XHJcblxyXG5jb25zdCBidG5TdWJQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRfX3Byb2plY3RcIik7XHJcblxyXG5idG5TdWJQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVQcm9qZWN0KTtcclxuXHJcbmNvbnN0IGJ0bkNyZWF0ZVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZS10YXNrXCIpO1xyXG5idG5DcmVhdGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdUYXNrKTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==