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

    const currentTitle = title.textContent;

    if (taskLocation === currentTitle) {
        createTaskElement(newTodo);
    }

    clearForm();
    removeForm();
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

    btnEditTask.addEventListener("click", showEditTaskForm);
    
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

function clearForm() {
    const inputs = document.querySelectorAll(".form__input");
    inputs.forEach(input => {
        input.value = "";
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

const proInvox = new _todo__WEBPACK_IMPORTED_MODULE_2__.project("Inbox");

const btnSubProject = document.querySelector(".submit__project");

btnSubProject.addEventListener("click", _ui__WEBPACK_IMPORTED_MODULE_1__.createProject);

const btnCreateTask = document.getElementById("create-task");
btnCreateTask.addEventListener("click", _ui__WEBPACK_IMPORTED_MODULE_1__.newTask);



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHcUI7QUFDa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMENBQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsMENBQU87QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUNBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7O1VDalBBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ055QjtBQUNpRztBQUNwRjtBQUN0QztBQUNBO0FBQ0Esa0NBQWtDLHlDQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxnREFBZTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywyQ0FBVTtBQUNoRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLG1EQUFrQjtBQUMvRDtBQUNBLHFCQUFxQiwwQ0FBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsOENBQWE7QUFDckQ7QUFDQTtBQUNBLHdDQUF3Qyx3Q0FBTztBQUMvQztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuY3NzL2FuaW1hdGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy91aS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNsYXNzIHRvZG8ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRvZG9OYW1lLCB0b2RvRGVzY3JpcHQsIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHksIGlkLCB0b2RvU3RhdGUpIHtcclxuICAgICAgICB0aGlzLnRvZG9OYW1lID0gdG9kb05hbWU7XHJcbiAgICAgICAgdGhpcy50b2RvRGVzY3JpcHQgPSB0b2RvRGVzY3JpcHQ7XHJcbiAgICAgICAgdGhpcy50b2RvRHVlRGF0ZSA9IHRvZG9EdWVEYXRlO1xyXG4gICAgICAgIHRoaXMudG9kb1ByaW9yaXR5ID0gdG9kb1ByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnRvZG9TdGF0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB0b2RvTmFtZShuZXdOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5fdG9kb05hbWUgPSBuZXdOYW1lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgdG9kb05hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvZG9OYW1lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgdG9kb0Rlc2NyaXB0KG5ld0Rlc2NyaXB0KSB7XHJcbiAgICAgICAgdGhpcy5fdG9kb0Rlc2NyaXB0ID0gbmV3RGVzY3JpcHQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCB0b2RvRGVzY3JpcHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvZG9EZXNjcmlwdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IHRvZG9EdWVEYXRlKG5ld0R1ZURhdGUpIHtcclxuICAgICAgICB0aGlzLl90b2RvRHVlRGF0ZSA9IG5ld0R1ZURhdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCB0b2RvRHVlRGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9kb0R1ZURhdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCB0b2RvUHJpb3JpdHkobmV3UHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLl90b2RvUHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHRvZG9Qcmlvcml0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9kb1ByaW9yaXR5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgdG9kb1N0YXRlKG5ld1N0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5fdG9kb1N0YXRlID0gbmV3U3RhdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCB0b2RvU3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvZG9TdGF0ZTtcclxuICAgIH0gXHJcblxyXG4gICAgZ2V0IGlkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IGlkKG5ld0lkKSB7XHJcbiAgICAgICAgdGhpcy5faWQgPSBuZXdJZDtcclxuICAgIH1cclxuXHJcbiAgICBlZGl0VG9kbyhuZXdOYW1lLCBuZXdEZXNjcmlwdCwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHksIG5ld05vdGUsIG5ld1N0YXRlKSB7XHJcbiAgICAgICAgdGhpcy50b2RvTmFtZSA9IG5ld05hbWU7XHJcbiAgICAgICAgdGhpcy50b2RvRGVzY3JpcHQgPSBuZXdEZXNjcmlwdDtcclxuICAgICAgICB0aGlzLnRvZG9EdWVEYXRlID0gbmV3RHVlRGF0ZTtcclxuICAgICAgICB0aGlzLnRvZG9Qcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMudG9kb05vdGUgPSBuZXdOb3RlO1xyXG4gICAgICAgIHRoaXMudG9kb1N0YXRlID0gbmV3U3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIHByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IocHJvamVjdE5hbWUsIHByb2plY3RJRCkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcclxuICAgICAgICB0aGlzLnByb2plY3RJRCA9IHByb2plY3RJRDtcclxuICAgICAgICB0aGlzLnRvZG9zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb2plY3ROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcHJvamVjdE5hbWUobmV3TmFtZSkge1xyXG4gICAgICAgIHRoaXMuX3Byb2plY3ROYW1lID0gbmV3TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJvamVjdElEKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0SUQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHByb2plY3RJRChuZXdQcm9qZWN0SUQpIHtcclxuICAgICAgICB0aGlzLl9wcm9qZWN0SUQgPSBuZXdQcm9qZWN0SUQ7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGFzayh0b2RvKSB7XHJcbiAgICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVRhc2sodG9kbykge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy50b2Rvcy5pbmRleE9mKHRvZG8pO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy50b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgdG9kbywgcHJvamVjdH07IiwiaW1wb3J0ICdhbmltYXRlLmNzcyc7XHJcbmltcG9ydCB7IHByb2plY3QsIHRvZG8gfSBmcm9tICcuL3RvZG8nO1xyXG4vL0VsZW1lbnRzIGZvciB0aGUgZXZlbnQgbGlzdGVuZXIgb2YgdGhlIG1lbnVcclxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhc2lkZVwiKTtcclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG5cclxuLy9UbyBjb250cm9sIHRoZSBzdGF0ZSBvZiB0aGUgbWVudVxyXG5sZXQgaXNTbGlkZU91dCA9IHRydWU7XHJcblxyXG4vL0Z1bmN0aW9uIGZvciB0aGUgZXZlbnQgbGlzdGVuZXIgb2YgdGhlIG1lbnVcclxuZnVuY3Rpb24gc2hvd01lbnUoKSB7XHJcbiAgICBpZiAoIWlzU2xpZGVPdXQpIHtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlX19zbGlkZUluTGVmdFwiKTtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlX19mYWRlT3V0TGVmdFwiLCBcImFuaW1hdGVfX2Zhc3RlclwiKTtcclxuICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlX19zbGlkZUluUmlnaHRcIik7XHJcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKFwibWFpbi0tY2VudGVyXCIsIFwiYW5pbWF0ZV9fc2xpZGVJbkxlZnRcIik7XHJcbiAgICAgICAgaXNTbGlkZU91dCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGVfX2ZhZGVPdXRMZWZ0XCIsIFwiYW5pbWF0ZV9fZmFzdGVyXCIpO1xyXG4gICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGVfX3NsaWRlSW5SaWdodFwiKTtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJhc2lkZS1hY3RpdmVcIik7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZV9fYW5pbWF0ZWRcIiwgXCJhbmltYXRlX19zbGlkZUluTGVmdFwiLCBcImFuaW1hdGVfX2Zhc3RcIik7XHJcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZV9fYW5pbWF0ZWRcIiwgXCJtYWluLS1jZW50ZXJcIiwgXCJhbmltYXRlX19zbGlkZUluTGVmdFwiKTtcclxuICAgICAgICBpc1NsaWRlT3V0ID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGZvcm1BZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLS1hZGR0YXNrXCIpO1xyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblxyXG5mdW5jdGlvbiBzaG93QWRkVGFza0Zvcm0oKSB7XHJcbiAgICBmb3JtQWRkVGFzay5jbGFzc0xpc3QuYWRkKFwiZm9ybS12aXNpYmxlXCIpO1xyXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKFwibG9zdGZvY3VzXCIpO1xyXG59XHJcblxyXG5jb25zdCBmb3JtQWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS0tYWRkcHJvamVjdFwiKTtcclxuY29uc3QgYnRuU2hvd1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hc2lkZV9fYnV0dG9uXCIpO1xyXG5cclxuZnVuY3Rpb24gc2hvd0FkZFByb2plY3RGb3JtKCkge1xyXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKFwibG9zdGZvY3VzXCIpO1xyXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibG9zdGZvY3VzXCIpO1xyXG4gICAgYnRuU2hvd1Byb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJsb3N0Zm9jdXNcIik7XHJcbiAgICBmb3JtQWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiZm9ybS0tYWRkUHJvamVjdC12aXNpYmxlXCIpO1xyXG59XHJcblxyXG5jb25zdCBmb3JtRWRpdFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tLWVkaXR0YXNrXCIpO1xyXG5cclxuZnVuY3Rpb24gc2hvd0VkaXRUYXNrRm9ybSgpIHtcclxuICAgIGZvcm1FZGl0VGFzay5jbGFzc0xpc3QuYWRkKFwiZm9ybS12aXNpYmxlXCIpO1xyXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKFwibG9zdGZvY3VzXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVGb3JtKCkge1xyXG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9zdGZvY3VzXCIpO1xyXG4gICAgaWYgKGZvcm1BZGRUYXNrLmNsYXNzTGlzdC5jb250YWlucyhcImZvcm0tdmlzaWJsZVwiKSkge1xyXG4gICAgICAgIGZvcm1BZGRUYXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JtLXZpc2libGVcIik7XHJcbiAgICAgICAgY2xlYXJGb3JtKCk7XHJcbiAgICB9IGVsc2UgaWYgKGZvcm1BZGRQcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucyhcImZvcm0tLWFkZFByb2plY3QtdmlzaWJsZVwiKSkge1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImxvc3Rmb2N1c1wiKTtcclxuICAgICAgICBidG5TaG93UHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlbW92ZShcImxvc3Rmb2N1c1wiKTtcclxuICAgICAgICBmb3JtQWRkUHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybS0tYWRkUHJvamVjdC12aXNpYmxlXCIpO1xyXG4gICAgICAgIGNsZWFyUHJvamVjdEZvcm0oKTtcclxuICAgIH0gZWxzZSBpZiAoZm9ybUVkaXRUYXNrLmNsYXNzTGlzdC5jb250YWlucyhcImZvcm0tdmlzaWJsZVwiKSkge1xyXG4gICAgICAgIGZvcm1FZGl0VGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybS12aXNpYmxlXCIpO1xyXG4gICAgICAgIGNsZWFyRm9ybSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhclByb2plY3RGb3JtKCkge1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKS52YWx1ZSA9IFwiXCI7XHJcbn1cclxuXHJcbmxldCBwcm9qZWN0cyA9IFtdO1xyXG5jb25zdCBwcm9qZWN0T3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1vcHRpb25cIik7XHJcbmNvbnN0IG5ld0xvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdMb2NhdGlvblwiKTtcclxuXHJcbmxldCBwcm9qZWN0SWQgPSAwO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBwcm9qZWN0KHByb2plY3ROYW1lLCBwcm9qZWN0SWQpO1xyXG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIHByb2plY3RPcHRpb24uaW5uZXJIVE1MID0gcHJvamVjdE5hbWU7XHJcbiAgICBwcm9qZWN0T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHByb2plY3ROYW1lKTtcclxuXHJcbiAgICBjb25zdCBjbG9uZU9wdGlvbjEgPSBwcm9qZWN0T3B0aW9uLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIGNvbnN0IGNsb25lT3B0aW9uMiA9IHByb2plY3RPcHRpb24uY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuICAgIHByb2plY3RPcHRpb25zLmFwcGVuZENoaWxkKGNsb25lT3B0aW9uMSk7XHJcbiAgICBuZXdMb2NhdGlvbi5hcHBlbmRDaGlsZChjbG9uZU9wdGlvbjIpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RPcHRpb24udmFsdWUpO1xyXG4gICAgcmVtb3ZlRm9ybSgpO1xyXG4gICAgY3JlYXRlRWxlbWVudFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgY2xlYXJQcm9qZWN0Rm9ybSgpO1xyXG4gICAgY29uc29sZS50YWJsZShuZXdQcm9qZWN0KTtcclxuICAgIHByb2plY3RJZCsrO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50UHJvamVjdChlbGVtZW50KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXNpZGVfX3VsXCIpO1xyXG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnQ7XHJcbiAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYXNpZGVfX2l0ZW1cIik7XHJcbiAgICBwcm9qZWN0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgcHJvamVjdC5wcm9qZWN0SWQpO1xyXG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xyXG4gICAgcHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dQcm9qZWN0KTtcclxufVxyXG5cclxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fX2gyXCIpO1xyXG5cclxuZnVuY3Rpb24gY2xlYW5NYWluKCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcclxuICAgIHdoaWxlIChtYWluLmxhc3RDaGlsZCAhPT0gdGl0bGUpIHtcclxuICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4ubGFzdENoaWxkKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1Byb2plY3QoKSB7XHJcbiAgICAvL2VsIG5vbWJyZSBkZWwgcHJveWVjdG8gcXVlIGZ1ZSBjbGljYWRvXHJcbiAgICBjbGVhbk1haW4oKTtcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gdGhpcy50ZXh0Q29udGVudDtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZChwcm8gPT4gcHJvLnByb2plY3ROYW1lID09PSBwcm9qZWN0TmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3QudG9kb3MpO1xyXG4gICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICAgICAgY3JlYXRlVGFza0VsZW1lbnQodG9kbyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxubGV0IHRhc2tJZCA9IDA7XHJcblxyXG5mdW5jdGlvbiBuZXdUYXNrKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZHVlZGF0ZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1wcmlvcml0eVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHRhc2tMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1vcHRpb25cIikudmFsdWU7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZChwcm8gPT4gcHJvLnByb2plY3ROYW1lID09PSB0YXNrTG9jYXRpb24pO1xyXG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyB0b2RvKG5hbWUsIGRlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5LCB0YXNrSWQpO1xyXG4gICAgcHJvamVjdC50b2Rvcy5wdXNoKG5ld1RvZG8pO1xyXG4gICAgY29uc29sZS50YWJsZShuZXdUb2RvKTtcclxuICAgIGNvbnNvbGUudGFibGUocHJvamVjdC50b2Rvcyk7XHJcbiAgICB0YXNrSWQrKztcclxuXHJcbiAgICBjb25zdCBjdXJyZW50VGl0bGUgPSB0aXRsZS50ZXh0Q29udGVudDtcclxuXHJcbiAgICBpZiAodGFza0xvY2F0aW9uID09PSBjdXJyZW50VGl0bGUpIHtcclxuICAgICAgICBjcmVhdGVUYXNrRWxlbWVudChuZXdUb2RvKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckZvcm0oKTtcclxuICAgIHJlbW92ZUZvcm0oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFza0VsZW1lbnQodG9kbykge1xyXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluX19jb250YWluZXItLXRhc2tcIik7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcblxyXG4gICAgY29uc3QgbGFiZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbGFiZWxOYW1lLmlubmVySFRNTCA9IHRvZG8udG9kb05hbWU7XHJcbiAgICBsYWJlbE5hbWUuY2xhc3NMaXN0LmFkZChcInRhc2stbmFtZVwiKTtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWxOYW1lKTtcclxuXHJcbiAgICBjb25zdCBidG5FZGl0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidG5FZGl0VGFzay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuRWRpdFRhc2suY2xhc3NMaXN0LmFkZChcIm1haW5fX2J1dHRvbi0tZWRpdFwiKTtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuRWRpdFRhc2spO1xyXG5cclxuICAgIGJ0bkVkaXRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93RWRpdFRhc2tGb3JtKTtcclxuICAgIFxyXG4gICAgY29uc3QgYnRuRGVsVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidG5EZWxUYXNrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBidG5EZWxUYXNrLmNsYXNzTGlzdC5hZGQoXCJtYWluX19idXR0b24tLWRlbGV0ZVwiKTtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuRGVsVGFzayk7XHJcblxyXG4gICAgY29uc3QgdGFza0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGFza0luZm8uY2xhc3NMaXN0LmFkZChcIm1haW5fX2NvbnRhaW5lci0taW5mb1wiKTtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0luZm8pO1xyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIG5hbWUuaW5uZXJIVE1MID0gXCJOYW1lXCI7XHJcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS0taW5mb1wiKTtcclxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKG5hbWUpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICB0YXNrTmFtZS5pbm5lckhUTUwgPSB0b2RvLnRvZG9OYW1lO1xyXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza05hbWUpO1xyXG4gICAgdGFza05hbWUuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiRGVzY3JpcHRpb25cIjtcclxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS0taW5mb1wiKTtcclxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuXHJcbiAgICBjb25zdCB0YXNrRGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICB0YXNrRGVzLmlubmVySFRNTCA9IHRvZG8udG9kb0Rlc2NyaXB0O1xyXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza0Rlcyk7XHJcbiAgICB0YXNrRGVzLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xyXG5cclxuICAgIGNvbnN0IGR1ZWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGR1ZWRhdGUuaW5uZXJIVE1MID0gXCJEdWUtZGF0ZVwiO1xyXG4gICAgZHVlZGF0ZS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtLWluZm9cIik7XHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZChkdWVkYXRlKTtcclxuXHJcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGFza0RhdGUuaW5uZXJIVE1MID0gdG9kby50b2RvRHVlRGF0ZTtcclxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcclxuICAgIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwcmlvcml0eS5pbm5lckhUTUwgPSBcIlByaW9yaXR5XCI7XHJcbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtLWluZm9cIik7XHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZChwcmlvcml0eSk7XHJcblxyXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICB0YXNrUHJpb3JpdHkuaW5uZXJIVE1MID0gdG9kby50b2RvUHJpb3JpdHk7XHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xyXG4gICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xyXG5cclxuICAgIGxhYmVsTmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRhc2tJbmZvLmNsYXNzTGlzdC50b2dnbGUoXCJtYWluX19jb250YWluZXItLWluZm8tLXZpc2libGVcIik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xyXG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtX19pbnB1dFwiKTtcclxuICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgc2hvd01lbnUsIGlzU2xpZGVPdXQsIHNob3dBZGRUYXNrRm9ybSwgcmVtb3ZlRm9ybSwgc2hvd0FkZFByb2plY3RGb3JtLCBzaG93RWRpdFRhc2tGb3JtLCBjcmVhdGVQcm9qZWN0LCBjbGVhclByb2plY3RGb3JtLCBuZXdUYXNrfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi8uLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHsgc2hvd01lbnUsIHNob3dBZGRUYXNrRm9ybSwgcmVtb3ZlRm9ybSwgc2hvd0FkZFByb2plY3RGb3JtLCBzaG93RWRpdFRhc2tGb3JtLCBjcmVhdGVQcm9qZWN0LCBuZXdUYXNrfSBmcm9tICcuL3VpJztcclxuaW1wb3J0IHsgcHJvamVjdCwgdG9kb30gZnJvbSAnLi90b2RvJztcclxuY29uc29sZS5sb2coXCJpdCBzdGlsbCB3b3JrcyBkb24ndCB3b3JyeVwiKTtcclxuY29uc3QgYnRuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19idXR0b24tLW1lbnVcIik7XHJcbmJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dNZW51KTtcclxuXHJcbmNvbnN0IGJ0blNob3dGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2J1dHRvbi0tYWRkdGFza1wiKTtcclxuXHJcbmJ0blNob3dGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93QWRkVGFza0Zvcm0pO1xyXG5cclxuY29uc3QgYnRuRXhpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybV9fYnV0dG9uLS1leGl0XCIpO1xyXG5cclxuYnRuRXhpdC5mb3JFYWNoKGJ0bkV4aXQgPT4ge1xyXG4gICAgYnRuRXhpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlRm9ybSlcclxufSk7XHJcblxyXG5jb25zdCBidG5TaG93UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzaWRlX19idXR0b25cIik7XHJcblxyXG5idG5TaG93UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dBZGRQcm9qZWN0Rm9ybSk7XHJcblxyXG5jb25zdCBwcm9JbnZveCA9IG5ldyBwcm9qZWN0KFwiSW5ib3hcIik7XHJcblxyXG5jb25zdCBidG5TdWJQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRfX3Byb2plY3RcIik7XHJcblxyXG5idG5TdWJQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVQcm9qZWN0KTtcclxuXHJcbmNvbnN0IGJ0bkNyZWF0ZVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZS10YXNrXCIpO1xyXG5idG5DcmVhdGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdUYXNrKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=