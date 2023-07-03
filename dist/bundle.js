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
    projectElement.innerHTML = element;
    projectElement.classList.add("aside__item");
    projectElement.setAttribute("data-project-id", _todo__WEBPACK_IMPORTED_MODULE_1__.project.projectId);
    projectList.appendChild(projectElement);
    projectElement.addEventListener("click", showProject);
}

const title = document.querySelector(".main__h2");

function showProject() {
    const projectId = this.getAttribute("data-project-id");
    //el nombre del proyecto que fue clicado
    const projectName = this.innerHTML;
    title.innerHTML = projectName;
    const project = projects.find(pro => pro.projectName === projectName);
    console.log(project);
    console.log(project.todos);
    const tasks = project.todos.filter((todo) => todo.projectId === projectId);
    tasks.forEach((task) => {
        createTaskElement(task);
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

    labelName.addEventListener("click", ()=>{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JIcUI7QUFDa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMENBQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsMENBQU87QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUNBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7OztVQ3ROQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOeUI7QUFDaUc7QUFDcEY7QUFDdEM7QUFDQTtBQUNBLGtDQUFrQyx5Q0FBUTtBQUMxQztBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsZ0RBQWU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsMkNBQVU7QUFDaEQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxtREFBa0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsaURBQWdCO0FBQ2xFLENBQUM7QUFDRDtBQUNBO0FBQ0EscUJBQXFCLDBDQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyw4Q0FBYTtBQUNyRDtBQUNBO0FBQ0Esd0NBQXdDLHdDQUFPO0FBQy9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuY3NzL2FuaW1hdGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy91aS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNsYXNzIHRvZG8ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRvZG9OYW1lLCB0b2RvRGVzY3JpcHQsIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHksIGlkLCB0b2RvU3RhdGUpIHtcclxuICAgICAgICB0aGlzLnRvZG9OYW1lID0gdG9kb05hbWU7XHJcbiAgICAgICAgdGhpcy50b2RvRGVzY3JpcHQgPSB0b2RvRGVzY3JpcHQ7XHJcbiAgICAgICAgdGhpcy50b2RvRHVlRGF0ZSA9IHRvZG9EdWVEYXRlO1xyXG4gICAgICAgIHRoaXMudG9kb1ByaW9yaXR5ID0gdG9kb1ByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnRvZG9TdGF0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB0b2RvTmFtZShuZXdOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5fdG9kb05hbWUgPSBuZXdOYW1lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgdG9kb05hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvZG9OYW1lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgdG9kb0Rlc2NyaXB0KG5ld0Rlc2NyaXB0KSB7XHJcbiAgICAgICAgdGhpcy5fdG9kb0Rlc2NyaXB0ID0gbmV3RGVzY3JpcHQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCB0b2RvRGVzY3JpcHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvZG9EZXNjcmlwdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IHRvZG9EdWVEYXRlKG5ld0R1ZURhdGUpIHtcclxuICAgICAgICB0aGlzLl90b2RvRHVlRGF0ZSA9IG5ld0R1ZURhdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCB0b2RvRHVlRGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9kb0R1ZURhdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCB0b2RvUHJpb3JpdHkobmV3UHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLl90b2RvUHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHRvZG9Qcmlvcml0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9kb1ByaW9yaXR5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgdG9kb1N0YXRlKG5ld1N0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5fdG9kb1N0YXRlID0gbmV3U3RhdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCB0b2RvU3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvZG9TdGF0ZTtcclxuICAgIH0gXHJcblxyXG4gICAgZ2V0IGlkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IGlkKG5ld0lkKSB7XHJcbiAgICAgICAgdGhpcy5faWQgPSBuZXdJZDtcclxuICAgIH1cclxuXHJcbiAgICBlZGl0VG9kbyhuZXdOYW1lLCBuZXdEZXNjcmlwdCwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHksIG5ld05vdGUsIG5ld1N0YXRlKSB7XHJcbiAgICAgICAgdGhpcy50b2RvTmFtZSA9IG5ld05hbWU7XHJcbiAgICAgICAgdGhpcy50b2RvRGVzY3JpcHQgPSBuZXdEZXNjcmlwdDtcclxuICAgICAgICB0aGlzLnRvZG9EdWVEYXRlID0gbmV3RHVlRGF0ZTtcclxuICAgICAgICB0aGlzLnRvZG9Qcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMudG9kb05vdGUgPSBuZXdOb3RlO1xyXG4gICAgICAgIHRoaXMudG9kb1N0YXRlID0gbmV3U3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIHByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IocHJvamVjdE5hbWUsIHByb2plY3RJRCkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcclxuICAgICAgICB0aGlzLnByb2plY3RJRCA9IHByb2plY3RJRDtcclxuICAgICAgICB0aGlzLnRvZG9zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb2plY3ROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcHJvamVjdE5hbWUobmV3TmFtZSkge1xyXG4gICAgICAgIHRoaXMuX3Byb2plY3ROYW1lID0gbmV3TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJvamVjdElEKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0SUQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHByb2plY3RJRChuZXdQcm9qZWN0SUQpIHtcclxuICAgICAgICB0aGlzLl9wcm9qZWN0SUQgPSBuZXdQcm9qZWN0SUQ7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGFzayh0b2RvKSB7XHJcbiAgICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dUYXNrcygpIHtcclxuICAgICAgICB0aGlzLnRvZG9zLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVRhc2sodG9kbykge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy50b2Rvcy5pbmRleE9mKHRvZG8pO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy50b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVQcm9qZWN0KCkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBlZGl0UHJvamVjdE5hbWUobmV3TmFtZSkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBuZXdOYW1lO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyB0b2RvLCBwcm9qZWN0fTsiLCJpbXBvcnQgJ2FuaW1hdGUuY3NzJztcclxuaW1wb3J0IHsgcHJvamVjdCwgdG9kbyB9IGZyb20gJy4vdG9kbyc7XHJcbi8vRWxlbWVudHMgZm9yIHRoZSBldmVudCBsaXN0ZW5lciBvZiB0aGUgbWVudVxyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFzaWRlXCIpO1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcblxyXG4vL1RvIGNvbnRyb2wgdGhlIHN0YXRlIG9mIHRoZSBtZW51XHJcbmxldCBpc1NsaWRlT3V0ID0gdHJ1ZTtcclxuXHJcbi8vRnVuY3Rpb24gZm9yIHRoZSBldmVudCBsaXN0ZW5lciBvZiB0aGUgbWVudVxyXG5mdW5jdGlvbiBzaG93TWVudSgpIHtcclxuICAgIGlmICghaXNTbGlkZU91dCkge1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGVfX3NsaWRlSW5MZWZ0XCIpO1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcImFuaW1hdGVfX2ZhZGVPdXRMZWZ0XCIsIFwiYW5pbWF0ZV9fZmFzdGVyXCIpO1xyXG4gICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVfX3NsaWRlSW5SaWdodFwiKTtcclxuICAgICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoXCJtYWluLS1jZW50ZXJcIiwgXCJhbmltYXRlX19zbGlkZUluTGVmdFwiKTtcclxuICAgICAgICBpc1NsaWRlT3V0ID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZV9fZmFkZU91dExlZnRcIiwgXCJhbmltYXRlX19mYXN0ZXJcIik7XHJcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZV9fc2xpZGVJblJpZ2h0XCIpO1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcImFzaWRlLWFjdGl2ZVwiKTtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlX19hbmltYXRlZFwiLCBcImFuaW1hdGVfX3NsaWRlSW5MZWZ0XCIsIFwiYW5pbWF0ZV9fZmFzdFwiKTtcclxuICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlX19hbmltYXRlZFwiLCBcIm1haW4tLWNlbnRlclwiLCBcImFuaW1hdGVfX3NsaWRlSW5MZWZ0XCIpO1xyXG4gICAgICAgIGlzU2xpZGVPdXQgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZm9ybUFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tLWFkZHRhc2tcIik7XHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dBZGRUYXNrRm9ybSgpIHtcclxuICAgIGZvcm1BZGRUYXNrLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXZpc2libGVcIik7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJsb3N0Zm9jdXNcIik7XHJcbn1cclxuXHJcbmNvbnN0IGZvcm1BZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLS1hZGRwcm9qZWN0XCIpO1xyXG5jb25zdCBidG5TaG93UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzaWRlX19idXR0b25cIik7XHJcblxyXG5mdW5jdGlvbiBzaG93QWRkUHJvamVjdEZvcm0oKSB7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJsb3N0Zm9jdXNcIik7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJsb3N0Zm9jdXNcIik7XHJcbiAgICBidG5TaG93UHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZChcImxvc3Rmb2N1c1wiKTtcclxuICAgIGZvcm1BZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJmb3JtLS1hZGRQcm9qZWN0LXZpc2libGVcIik7XHJcbn1cclxuXHJcbmNvbnN0IGZvcm1FZGl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS0tZWRpdHRhc2tcIik7XHJcblxyXG5mdW5jdGlvbiBzaG93RWRpdFRhc2tGb3JtKCkge1xyXG4gICAgZm9ybUVkaXRUYXNrLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXZpc2libGVcIik7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJsb3N0Zm9jdXNcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb3N0Zm9jdXNcIik7XHJcbiAgICBpZiAoZm9ybUFkZFRhc2suY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9ybS12aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgZm9ybUFkZFRhc2suY2xhc3NMaXN0LnJlbW92ZShcImZvcm0tdmlzaWJsZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoZm9ybUFkZFByb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9ybS0tYWRkUHJvamVjdC12aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibG9zdGZvY3VzXCIpO1xyXG4gICAgICAgIGJ0blNob3dQcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwibG9zdGZvY3VzXCIpO1xyXG4gICAgICAgIGZvcm1BZGRQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JtLS1hZGRQcm9qZWN0LXZpc2libGVcIik7XHJcbiAgICB9IGVsc2UgaWYgKGZvcm1FZGl0VGFzay5jbGFzc0xpc3QuY29udGFpbnMoXCJmb3JtLXZpc2libGVcIikpIHtcclxuICAgICAgICBmb3JtRWRpdFRhc2suY2xhc3NMaXN0LnJlbW92ZShcImZvcm0tdmlzaWJsZVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0Rm9ybSgpIHtcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIikudmFsdWUgPSBcIlwiO1xyXG59XHJcblxyXG5sZXQgcHJvamVjdHMgPSBbXTtcclxuY29uc3QgcHJvamVjdE9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3Qtb3B0aW9uXCIpO1xyXG5jb25zdCBuZXdMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3TG9jYXRpb25cIik7XHJcblxyXG5sZXQgcHJvamVjdElkID0gMDtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdChwcm9qZWN0TmFtZSwgcHJvamVjdElkKTtcclxuICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBwcm9qZWN0T3B0aW9uLmlubmVySFRNTCA9IHByb2plY3ROYW1lO1xyXG4gICAgcHJvamVjdE9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBwcm9qZWN0TmFtZSk7XHJcblxyXG4gICAgY29uc3QgY2xvbmVPcHRpb24xID0gcHJvamVjdE9wdGlvbi5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICBjb25zdCBjbG9uZU9wdGlvbjIgPSBwcm9qZWN0T3B0aW9uLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICBwcm9qZWN0T3B0aW9ucy5hcHBlbmRDaGlsZChjbG9uZU9wdGlvbjEpO1xyXG4gICAgbmV3TG9jYXRpb24uYXBwZW5kQ2hpbGQoY2xvbmVPcHRpb24yKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0T3B0aW9uLnZhbHVlKTtcclxuICAgIHJlbW92ZUZvcm0oKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgIGNsZWFyUHJvamVjdEZvcm0oKTtcclxuICAgIGNvbnNvbGUudGFibGUobmV3UHJvamVjdCk7XHJcbiAgICBwcm9qZWN0SWQrKztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFByb2plY3QoZWxlbWVudCkge1xyXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzaWRlX191bFwiKTtcclxuICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgcHJvamVjdEVsZW1lbnQuaW5uZXJIVE1MID0gZWxlbWVudDtcclxuICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhc2lkZV9faXRlbVwiKTtcclxuICAgIHByb2plY3RFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBwcm9qZWN0LnByb2plY3RJZCk7XHJcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XHJcbiAgICBwcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1Byb2plY3QpO1xyXG59XHJcblxyXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9faDJcIik7XHJcblxyXG5mdW5jdGlvbiBzaG93UHJvamVjdCgpIHtcclxuICAgIGNvbnN0IHByb2plY3RJZCA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIpO1xyXG4gICAgLy9lbCBub21icmUgZGVsIHByb3llY3RvIHF1ZSBmdWUgY2xpY2Fkb1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSB0aGlzLmlubmVySFRNTDtcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IHByb2plY3ROYW1lO1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQocHJvID0+IHByby5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdE5hbWUpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRvZG9zKTtcclxuICAgIGNvbnN0IHRhc2tzID0gcHJvamVjdC50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8ucHJvamVjdElkID09PSBwcm9qZWN0SWQpO1xyXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgIGNyZWF0ZVRhc2tFbGVtZW50KHRhc2spO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmxldCB0YXNrSWQgPSAwO1xyXG5cclxuZnVuY3Rpb24gbmV3VGFzayhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWVcIikudmFsdWU7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXNjcmlwdGlvblwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWR1ZWRhdGVcIikudmFsdWU7XHJcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJpb3JpdHlcIikudmFsdWU7XHJcbiAgICBjb25zdCB0YXNrTG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3Qtb3B0aW9uXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQocHJvID0+IHByby5wcm9qZWN0TmFtZSA9PT0gdGFza0xvY2F0aW9uKTtcclxuICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgdG9kbyhuYW1lLCBkZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSwgdGFza0lkKTtcclxuICAgIHByb2plY3QudG9kb3MucHVzaChuZXdUb2RvKTtcclxuICAgIGNvbnNvbGUudGFibGUobmV3VG9kbyk7XHJcbiAgICBjb25zb2xlLnRhYmxlKHByb2plY3QudG9kb3MpO1xyXG4gICAgdGFza0lkKys7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tFbGVtZW50KHRvZG8pIHtcclxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbl9fY29udGFpbmVyLS10YXNrXCIpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG5cclxuICAgIGNvbnN0IGxhYmVsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsTmFtZS5pbm5lckhUTUwgPSB0b2RvLnRvZG9OYW1lO1xyXG4gICAgbGFiZWxOYW1lLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW5hbWVcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsTmFtZSk7XHJcblxyXG4gICAgY29uc3QgYnRuRWRpdFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuRWRpdFRhc2suc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuICAgIGJ0bkVkaXRUYXNrLmNsYXNzTGlzdC5hZGQoXCJtYWluX19idXR0b24tLWVkaXRcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkVkaXRUYXNrKTtcclxuXHJcbiAgICBjb25zdCBidG5EZWxUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ0bkRlbFRhc2suc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuICAgIGJ0bkRlbFRhc2suY2xhc3NMaXN0LmFkZChcIm1haW5fX2J1dHRvbi0tZGVsZXRlXCIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChidG5EZWxUYXNrKTtcclxuXHJcbiAgICBjb25zdCB0YXNrSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YXNrSW5mby5jbGFzc0xpc3QuYWRkKFwibWFpbl9fY29udGFpbmVyLS1pbmZvXCIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSW5mbyk7XHJcblxyXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbmFtZS5pbm5lckhUTUwgPSBcIk5hbWVcIjtcclxuICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcInRpdGxlLS1pbmZvXCIpO1xyXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQobmFtZSk7XHJcblxyXG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRhc2tOYW1lLmlubmVySFRNTCA9IHRvZG8udG9kb05hbWU7XHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XHJcbiAgICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gXCJEZXNjcmlwdGlvblwiO1xyXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRpdGxlLS1pbmZvXCIpO1xyXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG5cclxuICAgIGNvbnN0IHRhc2tEZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRhc2tEZXMuaW5uZXJIVE1MID0gdG9kby50b2RvRGVzY3JpcHQ7XHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrRGVzKTtcclxuICAgIHRhc2tEZXMuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XHJcblxyXG4gICAgY29uc3QgZHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZHVlZGF0ZS5pbm5lckhUTUwgPSBcIkR1ZS1kYXRlXCI7XHJcbiAgICBkdWVkYXRlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS0taW5mb1wiKTtcclxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKGR1ZWRhdGUpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICB0YXNrRGF0ZS5pbm5lckhUTUwgPSB0b2RvLnRvZG9EdWVEYXRlO1xyXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xyXG4gICAgdGFza0RhdGUuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XHJcblxyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHByaW9yaXR5LmlubmVySFRNTCA9IFwiUHJpb3JpdHlcIjtcclxuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS0taW5mb1wiKTtcclxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcclxuXHJcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRhc2tQcmlvcml0eS5pbm5lckhUTUwgPSB0b2RvLnRvZG9Qcmlvcml0eTtcclxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XHJcbiAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XHJcblxyXG4gICAgbGFiZWxOYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICAgIHRhc2tJbmZvLmNsYXNzTGlzdC50b2dnbGUoXCJtYWluX19jb250YWluZXItLWluZm8tLXZpc2libGVcIik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgc2hvd01lbnUsIGlzU2xpZGVPdXQsIHNob3dBZGRUYXNrRm9ybSwgcmVtb3ZlRm9ybSwgc2hvd0FkZFByb2plY3RGb3JtLCBzaG93RWRpdFRhc2tGb3JtLCBjcmVhdGVQcm9qZWN0LCBjbGVhclByb2plY3RGb3JtLCBuZXdUYXNrIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vLi4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCB7IHNob3dNZW51LCBzaG93QWRkVGFza0Zvcm0sIHJlbW92ZUZvcm0sIHNob3dBZGRQcm9qZWN0Rm9ybSwgc2hvd0VkaXRUYXNrRm9ybSwgY3JlYXRlUHJvamVjdCwgbmV3VGFza30gZnJvbSAnLi91aSc7XHJcbmltcG9ydCB7IHByb2plY3QsIHRvZG99IGZyb20gJy4vdG9kbyc7XHJcbmNvbnNvbGUubG9nKFwiaXQgc3RpbGwgd29ya3MgZG9uJ3Qgd29ycnlcIik7XHJcbmNvbnN0IGJ0bk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYnV0dG9uLS1tZW51XCIpO1xyXG5idG5NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TWVudSk7XHJcblxyXG5jb25zdCBidG5TaG93Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19idXR0b24tLWFkZHRhc2tcIik7XHJcblxyXG5idG5TaG93Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0FkZFRhc2tGb3JtKTtcclxuXHJcbmNvbnN0IGJ0bkV4aXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm1fX2J1dHRvbi0tZXhpdFwiKTtcclxuXHJcbmJ0bkV4aXQuZm9yRWFjaChidG5FeGl0ID0+IHtcclxuICAgIGJ0bkV4aXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUZvcm0pXHJcbn0pO1xyXG5cclxuY29uc3QgYnRuU2hvd1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hc2lkZV9fYnV0dG9uXCIpO1xyXG5cclxuYnRuU2hvd1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93QWRkUHJvamVjdEZvcm0pO1xyXG5cclxuY29uc3QgYnRuU2hvd0VkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbl9fYnV0dG9uLS1lZGl0XCIpO1xyXG5cclxuYnRuU2hvd0VkaXRUYXNrRm9ybS5mb3JFYWNoKGJ0blNob3dFZGl0VGFza0Zvcm0gPT4ge1xyXG4gICAgYnRuU2hvd0VkaXRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0VkaXRUYXNrRm9ybSk7XHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IHByb0ludm94ID0gbmV3IHByb2plY3QoXCJJbmJveFwiKTtcclxuXHJcbmNvbnN0IGJ0blN1YlByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdF9fcHJvamVjdFwiKTtcclxuXHJcbmJ0blN1YlByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVByb2plY3QpO1xyXG5cclxuY29uc3QgYnRuQ3JlYXRlVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLXRhc2tcIik7XHJcbmJ0bkNyZWF0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Rhc2spO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9