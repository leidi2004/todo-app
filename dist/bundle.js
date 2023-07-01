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

    constructor(todoName, todoDescript, todoDueDate, todoPriority, todoState) {
        this.todoName = todoName;
        this.todoDescript = todoDescript;
        this.todoDueDate = todoDueDate;
        this.todoPriority = todoPriority;
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
    constructor(projectName) {
        this.projectName = projectName;
        this.todos = [];
    }

    get projectName() {
        return this._projectName;
    }

    set projectName(newName) {
        this._projectName = newName;
    }

    addTask(todo) {
        this.todos.push(todo);
    }

    showTasks() {
        this.todos.forEach(todo => {
            console.log(todo);
        });
    }

    removeTask(todo) {
        const index = this.todos.indexOf(todo);
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
    }

    deleteProject() {
        this.projectName = [];
    }

    editProjectName(newName) {
        this.projectName = newName;
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

function createProject(e) {
    e.preventDefault();

    const projectName = document.getElementById("project-name").value;
    const newProject = new _todo__WEBPACK_IMPORTED_MODULE_1__.project(projectName);
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

function showProject() {
    //el nombre del proyecto que fue clicado
    const projectName = this.innerHTML;
    title.innerHTML = projectName;
    const project = projects.find(pro => pro.projectName === projectName);
    console.log(project);
    console.log(project.todos);
}

function newTask(e) {
    e.preventDefault();
    const name = document.getElementById("task-name").value;
    const description = document.getElementById("task-description").value;
    const taskDueDate = document.getElementById("task-duedate").value;
    const taskPriority = document.getElementById("task-priority").value;
    const taskUbication = document.getElementById("project-option").value;
    const project = projects.find(pro => pro.projectName === taskUbication);
    const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_1__.todo(name, description, taskDueDate, taskPriority);
    project.todos.push(newTodo);
    console.log(newTodo);
    console.log(project.todos);
    createTaskElement(newTodo);
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
    taskDes.classList.add("info");

    const priority = document.createElement("p");
    priority.innerHTML = "Priority";
    priority.classList.add("title--info");
    taskInfo.appendChild(priority);

    const taskPriority = document.createElement("p");
    taskPriority.innerHTML = todo.todoPriority;
    taskInfo.appendChild(taskPriority);
    taskDes.classList.add("info");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25HcUI7QUFDa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDBDQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUNBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDeE1BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ055QjtBQUNpRztBQUNwRjtBQUN0QztBQUNBO0FBQ0Esa0NBQWtDLHlDQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxnREFBZTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywyQ0FBVTtBQUNoRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLG1EQUFrQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxpREFBZ0I7QUFDbEUsQ0FBQztBQUNEO0FBQ0E7QUFDQSxxQkFBcUIsMENBQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDhDQUFhO0FBQ3JEO0FBQ0E7QUFDQSx3Q0FBd0Msd0NBQU87QUFDL0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5jc3MvYW5pbWF0ZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY2xhc3MgdG9kbyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodG9kb05hbWUsIHRvZG9EZXNjcmlwdCwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eSwgdG9kb1N0YXRlKSB7XHJcbiAgICAgICAgdGhpcy50b2RvTmFtZSA9IHRvZG9OYW1lO1xyXG4gICAgICAgIHRoaXMudG9kb0Rlc2NyaXB0ID0gdG9kb0Rlc2NyaXB0O1xyXG4gICAgICAgIHRoaXMudG9kb0R1ZURhdGUgPSB0b2RvRHVlRGF0ZTtcclxuICAgICAgICB0aGlzLnRvZG9Qcmlvcml0eSA9IHRvZG9Qcmlvcml0eTtcclxuICAgICAgICB0aGlzLnRvZG9TdGF0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB0b2RvTmFtZShuZXdOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5fdG9kb05hbWUgPSBuZXdOYW1lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgdG9kb05hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvZG9OYW1lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgdG9kb0Rlc2NyaXB0KG5ld0Rlc2NyaXB0KSB7XHJcbiAgICAgICAgdGhpcy5fdG9kb0Rlc2NyaXB0ID0gbmV3RGVzY3JpcHQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCB0b2RvRGVzY3JpcHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvZG9EZXNjcmlwdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IHRvZG9EdWVEYXRlKG5ld0R1ZURhdGUpIHtcclxuICAgICAgICB0aGlzLl90b2RvRHVlRGF0ZSA9IG5ld0R1ZURhdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCB0b2RvRHVlRGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9kb0R1ZURhdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCB0b2RvUHJpb3JpdHkobmV3UHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLl90b2RvUHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHRvZG9Qcmlvcml0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9kb1ByaW9yaXR5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgdG9kb1N0YXRlKG5ld1N0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5fdG9kb1N0YXRlID0gbmV3U3RhdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCB0b2RvU3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvZG9TdGF0ZTtcclxuICAgIH0gIFxyXG5cclxuICAgIGVkaXRUb2RvKG5ld05hbWUsIG5ld0Rlc2NyaXB0LCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSwgbmV3Tm90ZSwgbmV3U3RhdGUpIHtcclxuICAgICAgICB0aGlzLnRvZG9OYW1lID0gbmV3TmFtZTtcclxuICAgICAgICB0aGlzLnRvZG9EZXNjcmlwdCA9IG5ld0Rlc2NyaXB0O1xyXG4gICAgICAgIHRoaXMudG9kb0R1ZURhdGUgPSBuZXdEdWVEYXRlO1xyXG4gICAgICAgIHRoaXMudG9kb1ByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy50b2RvTm90ZSA9IG5ld05vdGU7XHJcbiAgICAgICAgdGhpcy50b2RvU3RhdGUgPSBuZXdTdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgcHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZSkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcclxuICAgICAgICB0aGlzLnRvZG9zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb2plY3ROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcHJvamVjdE5hbWUobmV3TmFtZSkge1xyXG4gICAgICAgIHRoaXMuX3Byb2plY3ROYW1lID0gbmV3TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYXNrKHRvZG8pIHtcclxuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1Rhc2tzKCkge1xyXG4gICAgICAgIHRoaXMudG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codG9kbyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVGFzayh0b2RvKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnRvZG9zLmluZGV4T2YodG9kbyk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnRvZG9zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVByb2plY3QoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXRQcm9qZWN0TmFtZShuZXdOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZSA9IG5ld05hbWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHRvZG8sIHByb2plY3R9OyIsImltcG9ydCAnYW5pbWF0ZS5jc3MnO1xyXG5pbXBvcnQgeyBwcm9qZWN0LCB0b2RvIH0gZnJvbSAnLi90b2RvJztcclxuLy9FbGVtZW50cyBmb3IgdGhlIGV2ZW50IGxpc3RlbmVyIG9mIHRoZSBtZW51XHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGVcIik7XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuXHJcbi8vVG8gY29udHJvbCB0aGUgc3RhdGUgb2YgdGhlIG1lbnVcclxubGV0IGlzU2xpZGVPdXQgPSB0cnVlO1xyXG5cclxuLy9GdW5jdGlvbiBmb3IgdGhlIGV2ZW50IGxpc3RlbmVyIG9mIHRoZSBtZW51XHJcbmZ1bmN0aW9uIHNob3dNZW51KCkge1xyXG4gICAgaWYgKCFpc1NsaWRlT3V0KSB7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZV9fc2xpZGVJbkxlZnRcIik7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZV9fZmFkZU91dExlZnRcIiwgXCJhbmltYXRlX19mYXN0ZXJcIik7XHJcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZV9fc2xpZGVJblJpZ2h0XCIpO1xyXG4gICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZShcIm1haW4tLWNlbnRlclwiLCBcImFuaW1hdGVfX3NsaWRlSW5MZWZ0XCIpO1xyXG4gICAgICAgIGlzU2xpZGVPdXQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlX19mYWRlT3V0TGVmdFwiLCBcImFuaW1hdGVfX2Zhc3RlclwiKTtcclxuICAgICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlX19zbGlkZUluUmlnaHRcIik7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwiYXNpZGUtYWN0aXZlXCIpO1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcImFuaW1hdGVfX2FuaW1hdGVkXCIsIFwiYW5pbWF0ZV9fc2xpZGVJbkxlZnRcIiwgXCJhbmltYXRlX19mYXN0XCIpO1xyXG4gICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVfX2FuaW1hdGVkXCIsIFwibWFpbi0tY2VudGVyXCIsIFwiYW5pbWF0ZV9fc2xpZGVJbkxlZnRcIik7XHJcbiAgICAgICAgaXNTbGlkZU91dCA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBmb3JtQWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS0tYWRkdGFza1wiKTtcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cclxuZnVuY3Rpb24gc2hvd0FkZFRhc2tGb3JtKCkge1xyXG4gICAgZm9ybUFkZFRhc2suY2xhc3NMaXN0LmFkZChcImZvcm0tdmlzaWJsZVwiKTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImxvc3Rmb2N1c1wiKTtcclxufVxyXG5cclxuY29uc3QgZm9ybUFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tLWFkZHByb2plY3RcIik7XHJcbmNvbnN0IGJ0blNob3dQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXNpZGVfX2J1dHRvblwiKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dBZGRQcm9qZWN0Rm9ybSgpIHtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImxvc3Rmb2N1c1wiKTtcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcImxvc3Rmb2N1c1wiKTtcclxuICAgIGJ0blNob3dQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwibG9zdGZvY3VzXCIpO1xyXG4gICAgZm9ybUFkZFByb2plY3QuY2xhc3NMaXN0LmFkZChcImZvcm0tLWFkZFByb2plY3QtdmlzaWJsZVwiKTtcclxufVxyXG5cclxuY29uc3QgZm9ybUVkaXRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLS1lZGl0dGFza1wiKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dFZGl0VGFza0Zvcm0oKSB7XHJcbiAgICBmb3JtRWRpdFRhc2suY2xhc3NMaXN0LmFkZChcImZvcm0tdmlzaWJsZVwiKTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImxvc3Rmb2N1c1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRm9ybSgpIHtcclxuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvc3Rmb2N1c1wiKTtcclxuICAgIGlmIChmb3JtQWRkVGFzay5jbGFzc0xpc3QuY29udGFpbnMoXCJmb3JtLXZpc2libGVcIikpIHtcclxuICAgICAgICBmb3JtQWRkVGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybS12aXNpYmxlXCIpO1xyXG4gICAgfSBlbHNlIGlmIChmb3JtQWRkUHJvamVjdC5jbGFzc0xpc3QuY29udGFpbnMoXCJmb3JtLS1hZGRQcm9qZWN0LXZpc2libGVcIikpIHtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJsb3N0Zm9jdXNcIik7XHJcbiAgICAgICAgYnRuU2hvd1Byb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJsb3N0Zm9jdXNcIik7XHJcbiAgICAgICAgZm9ybUFkZFByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImZvcm0tLWFkZFByb2plY3QtdmlzaWJsZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoZm9ybUVkaXRUYXNrLmNsYXNzTGlzdC5jb250YWlucyhcImZvcm0tdmlzaWJsZVwiKSkge1xyXG4gICAgICAgIGZvcm1FZGl0VGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybS12aXNpYmxlXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhclByb2plY3RGb3JtKCkge1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKS52YWx1ZSA9IFwiXCI7XHJcbn1cclxuXHJcbmxldCBwcm9qZWN0cyA9IFtdO1xyXG5jb25zdCBwcm9qZWN0T3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1vcHRpb25cIik7XHJcbmNvbnN0IG5ld0xvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdMb2NhdGlvblwiKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIikudmFsdWU7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IHByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIHByb2plY3RPcHRpb24uaW5uZXJIVE1MID0gcHJvamVjdE5hbWU7XHJcbiAgICBwcm9qZWN0T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHByb2plY3ROYW1lKTtcclxuXHJcbiAgICBjb25zdCBjbG9uZU9wdGlvbjEgPSBwcm9qZWN0T3B0aW9uLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIGNvbnN0IGNsb25lT3B0aW9uMiA9IHByb2plY3RPcHRpb24uY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuICAgIHByb2plY3RPcHRpb25zLmFwcGVuZENoaWxkKGNsb25lT3B0aW9uMSk7XHJcbiAgICBuZXdMb2NhdGlvbi5hcHBlbmRDaGlsZChjbG9uZU9wdGlvbjIpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RPcHRpb24udmFsdWUpO1xyXG4gICAgcmVtb3ZlRm9ybSgpO1xyXG4gICAgY3JlYXRlRWxlbWVudFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgY2xlYXJQcm9qZWN0Rm9ybSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50UHJvamVjdChlbGVtZW50KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXNpZGVfX3VsXCIpO1xyXG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBwcm9qZWN0RWxlbWVudC5pbm5lckhUTUwgPSBlbGVtZW50O1xyXG4gICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFzaWRlX19pdGVtXCIpO1xyXG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xyXG5cclxuICAgIHByb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93UHJvamVjdCk7XHJcbn1cclxuXHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19oMlwiKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dQcm9qZWN0KCkge1xyXG4gICAgLy9lbCBub21icmUgZGVsIHByb3llY3RvIHF1ZSBmdWUgY2xpY2Fkb1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSB0aGlzLmlubmVySFRNTDtcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IHByb2plY3ROYW1lO1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQocHJvID0+IHByby5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdE5hbWUpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRvZG9zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV3VGFzayhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWVcIikudmFsdWU7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXNjcmlwdGlvblwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWR1ZWRhdGVcIikudmFsdWU7XHJcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJpb3JpdHlcIikudmFsdWU7XHJcbiAgICBjb25zdCB0YXNrVWJpY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW9wdGlvblwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKHBybyA9PiBwcm8ucHJvamVjdE5hbWUgPT09IHRhc2tVYmljYXRpb24pO1xyXG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyB0b2RvKG5hbWUsIGRlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5KTtcclxuICAgIHByb2plY3QudG9kb3MucHVzaChuZXdUb2RvKTtcclxuICAgIGNvbnNvbGUubG9nKG5ld1RvZG8pO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdC50b2Rvcyk7XHJcbiAgICBjcmVhdGVUYXNrRWxlbWVudChuZXdUb2RvKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFza0VsZW1lbnQodG9kbykge1xyXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluX19jb250YWluZXItLXRhc2tcIik7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcblxyXG4gICAgY29uc3QgbGFiZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbGFiZWxOYW1lLmlubmVySFRNTCA9IHRvZG8udG9kb05hbWU7XHJcbiAgICBsYWJlbE5hbWUuY2xhc3NMaXN0LmFkZChcInRhc2stbmFtZVwiKTtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWxOYW1lKTtcclxuXHJcbiAgICBjb25zdCBidG5FZGl0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidG5FZGl0VGFzay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuRWRpdFRhc2suY2xhc3NMaXN0LmFkZChcIm1haW5fX2J1dHRvbi0tZWRpdFwiKTtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuRWRpdFRhc2spO1xyXG5cclxuICAgIGNvbnN0IGJ0bkRlbFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuRGVsVGFzay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuRGVsVGFzay5jbGFzc0xpc3QuYWRkKFwibWFpbl9fYnV0dG9uLS1kZWxldGVcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkRlbFRhc2spO1xyXG5cclxuICAgIGNvbnN0IHRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRhc2tJbmZvLmNsYXNzTGlzdC5hZGQoXCJtYWluX19jb250YWluZXItLWluZm9cIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tJbmZvKTtcclxuXHJcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBuYW1lLmlubmVySFRNTCA9IFwiTmFtZVwiO1xyXG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtLWluZm9cIik7XHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZChuYW1lKTtcclxuXHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGFza05hbWUuaW5uZXJIVE1MID0gdG9kby50b2RvTmFtZTtcclxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcclxuICAgIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIkRlc2NyaXB0aW9uXCI7XHJcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidGl0bGUtLWluZm9cIik7XHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcblxyXG4gICAgY29uc3QgdGFza0RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGFza0Rlcy5pbm5lckhUTUwgPSB0b2RvLnRvZG9EZXNjcmlwdDtcclxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tEZXMpO1xyXG4gICAgdGFza0Rlcy5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcclxuXHJcbiAgICBjb25zdCBkdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBkdWVkYXRlLmlubmVySFRNTCA9IFwiRHVlLWRhdGVcIjtcclxuICAgIGR1ZWRhdGUuY2xhc3NMaXN0LmFkZChcInRpdGxlLS1pbmZvXCIpO1xyXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQoZHVlZGF0ZSk7XHJcblxyXG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRhc2tEYXRlLmlubmVySFRNTCA9IHRvZG8udG9kb0R1ZURhdGU7XHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XHJcbiAgICB0YXNrRGVzLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwcmlvcml0eS5pbm5lckhUTUwgPSBcIlByaW9yaXR5XCI7XHJcbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtLWluZm9cIik7XHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZChwcmlvcml0eSk7XHJcblxyXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICB0YXNrUHJpb3JpdHkuaW5uZXJIVE1MID0gdG9kby50b2RvUHJpb3JpdHk7XHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xyXG4gICAgdGFza0Rlcy5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcclxufVxyXG5cclxuZXhwb3J0IHsgc2hvd01lbnUsIGlzU2xpZGVPdXQsIHNob3dBZGRUYXNrRm9ybSwgcmVtb3ZlRm9ybSwgc2hvd0FkZFByb2plY3RGb3JtLCBzaG93RWRpdFRhc2tGb3JtLCBjcmVhdGVQcm9qZWN0LCBjbGVhclByb2plY3RGb3JtLCBuZXdUYXNrIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vLi4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCB7IHNob3dNZW51LCBzaG93QWRkVGFza0Zvcm0sIHJlbW92ZUZvcm0sIHNob3dBZGRQcm9qZWN0Rm9ybSwgc2hvd0VkaXRUYXNrRm9ybSwgY3JlYXRlUHJvamVjdCwgbmV3VGFza30gZnJvbSAnLi91aSc7XHJcbmltcG9ydCB7IHByb2plY3QsIHRvZG99IGZyb20gJy4vdG9kbyc7XHJcbmNvbnNvbGUubG9nKFwiaXQgc3RpbGwgd29ya3MgZG9uJ3Qgd29ycnlcIik7XHJcbmNvbnN0IGJ0bk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYnV0dG9uLS1tZW51XCIpO1xyXG5idG5NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TWVudSk7XHJcblxyXG5jb25zdCBidG5TaG93Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19idXR0b24tLWFkZHRhc2tcIik7XHJcblxyXG5idG5TaG93Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0FkZFRhc2tGb3JtKTtcclxuXHJcbmNvbnN0IGJ0bkV4aXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm1fX2J1dHRvbi0tZXhpdFwiKTtcclxuXHJcbmJ0bkV4aXQuZm9yRWFjaChidG5FeGl0ID0+IHtcclxuICAgIGJ0bkV4aXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUZvcm0pXHJcbn0pO1xyXG5cclxuY29uc3QgYnRuU2hvd1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hc2lkZV9fYnV0dG9uXCIpO1xyXG5cclxuYnRuU2hvd1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93QWRkUHJvamVjdEZvcm0pO1xyXG5cclxuY29uc3QgYnRuU2hvd0VkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbl9fYnV0dG9uLS1lZGl0XCIpO1xyXG5cclxuYnRuU2hvd0VkaXRUYXNrRm9ybS5mb3JFYWNoKGJ0blNob3dFZGl0VGFza0Zvcm0gPT4ge1xyXG4gICAgYnRuU2hvd0VkaXRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0VkaXRUYXNrRm9ybSk7XHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IHByb0ludm94ID0gbmV3IHByb2plY3QoXCJJbmJveFwiKTtcclxuXHJcbmNvbnN0IGJ0blN1YlByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdF9fcHJvamVjdFwiKTtcclxuXHJcbmJ0blN1YlByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVByb2plY3QpO1xyXG5cclxuY29uc3QgYnRuQ3JlYXRlVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLXRhc2tcIik7XHJcbmJ0bkNyZWF0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Rhc2spO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9