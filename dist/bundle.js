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
    const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_1__.todo(name, description, taskDueDate, taskPriority);
    project.todos.push(newTodo);
    console.log(newTodo);
    console.log(project.todos);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25HcUI7QUFDaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDBDQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUNBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2xJQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOeUI7QUFDaUc7QUFDcEY7QUFDdEM7QUFDQTtBQUNBLGtDQUFrQyx5Q0FBUTtBQUMxQztBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsZ0RBQWU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsMkNBQVU7QUFDaEQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxtREFBa0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsaURBQWdCO0FBQ2xFLENBQUM7QUFDRDtBQUNBO0FBQ0EscUJBQXFCLDBDQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyw4Q0FBYTtBQUNyRDtBQUNBO0FBQ0Esd0NBQXdDLHdDQUFPO0FBQy9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuY3NzL2FuaW1hdGUuY3NzP2E3ZTciLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/MTU1MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjbGFzcyB0b2RvIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0b2RvTmFtZSwgdG9kb0Rlc2NyaXB0LCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5LCB0b2RvU3RhdGUpIHtcclxuICAgICAgICB0aGlzLnRvZG9OYW1lID0gdG9kb05hbWU7XHJcbiAgICAgICAgdGhpcy50b2RvRGVzY3JpcHQgPSB0b2RvRGVzY3JpcHQ7XHJcbiAgICAgICAgdGhpcy50b2RvRHVlRGF0ZSA9IHRvZG9EdWVEYXRlO1xyXG4gICAgICAgIHRoaXMudG9kb1ByaW9yaXR5ID0gdG9kb1ByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMudG9kb1N0YXRlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHRvZG9OYW1lKG5ld05hbWUpIHtcclxuICAgICAgICB0aGlzLl90b2RvTmFtZSA9IG5ld05hbWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCB0b2RvTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9kb05hbWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCB0b2RvRGVzY3JpcHQobmV3RGVzY3JpcHQpIHtcclxuICAgICAgICB0aGlzLl90b2RvRGVzY3JpcHQgPSBuZXdEZXNjcmlwdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHRvZG9EZXNjcmlwdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9kb0Rlc2NyaXB0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgdG9kb0R1ZURhdGUobmV3RHVlRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuX3RvZG9EdWVEYXRlID0gbmV3RHVlRGF0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHRvZG9EdWVEYXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b2RvRHVlRGF0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IHRvZG9Qcmlvcml0eShuZXdQcmlvcml0eSkge1xyXG4gICAgICAgIHRoaXMuX3RvZG9Qcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgdG9kb1ByaW9yaXR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b2RvUHJpb3JpdHk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCB0b2RvU3RhdGUobmV3U3RhdGUpIHtcclxuICAgICAgICB0aGlzLl90b2RvU3RhdGUgPSBuZXdTdGF0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHRvZG9TdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9kb1N0YXRlO1xyXG4gICAgfSAgXHJcblxyXG4gICAgZWRpdFRvZG8obmV3TmFtZSwgbmV3RGVzY3JpcHQsIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5LCBuZXdOb3RlLCBuZXdTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMudG9kb05hbWUgPSBuZXdOYW1lO1xyXG4gICAgICAgIHRoaXMudG9kb0Rlc2NyaXB0ID0gbmV3RGVzY3JpcHQ7XHJcbiAgICAgICAgdGhpcy50b2RvRHVlRGF0ZSA9IG5ld0R1ZURhdGU7XHJcbiAgICAgICAgdGhpcy50b2RvUHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcclxuICAgICAgICB0aGlzLnRvZG9Ob3RlID0gbmV3Tm90ZTtcclxuICAgICAgICB0aGlzLnRvZG9TdGF0ZSA9IG5ld1N0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBwcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xyXG4gICAgICAgIHRoaXMudG9kb3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJvamVjdE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3ROYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwcm9qZWN0TmFtZShuZXdOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvamVjdE5hbWUgPSBuZXdOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhc2sodG9kbykge1xyXG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93VGFza3MoKSB7XHJcbiAgICAgICAgdGhpcy50b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVUYXNrKHRvZG8pIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudG9kb3MuaW5kZXhPZih0b2RvKTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlUHJvamVjdCgpIHtcclxuICAgICAgICB0aGlzLnByb2plY3ROYW1lID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdFByb2plY3ROYW1lKG5ld05hbWUpIHtcclxuICAgICAgICB0aGlzLnByb2plY3ROYW1lID0gbmV3TmFtZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgdG9kbywgcHJvamVjdH07IiwiaW1wb3J0ICdhbmltYXRlLmNzcyc7XHJcbmltcG9ydCB7IHByb2plY3QsIHRvZG99IGZyb20gJy4vdG9kbyc7XHJcbi8vRWxlbWVudHMgZm9yIHRoZSBldmVudCBsaXN0ZW5lciBvZiB0aGUgbWVudVxyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFzaWRlXCIpO1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcblxyXG4vL1RvIGNvbnRyb2wgdGhlIHN0YXRlIG9mIHRoZSBtZW51XHJcbmxldCBpc1NsaWRlT3V0ID0gdHJ1ZTtcclxuXHJcbi8vRnVuY3Rpb24gZm9yIHRoZSBldmVudCBsaXN0ZW5lciBvZiB0aGUgbWVudVxyXG5mdW5jdGlvbiBzaG93TWVudSgpIHtcclxuICAgIGlmICghaXNTbGlkZU91dCkge1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGVfX3NsaWRlSW5MZWZ0XCIpO1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcImFuaW1hdGVfX2ZhZGVPdXRMZWZ0XCIsIFwiYW5pbWF0ZV9fZmFzdGVyXCIpO1xyXG4gICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVfX3NsaWRlSW5SaWdodFwiKTtcclxuICAgICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoXCJtYWluLS1jZW50ZXJcIiwgXCJhbmltYXRlX19zbGlkZUluTGVmdFwiKTtcclxuICAgICAgICBpc1NsaWRlT3V0ID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZV9fZmFkZU91dExlZnRcIiwgXCJhbmltYXRlX19mYXN0ZXJcIik7XHJcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZV9fc2xpZGVJblJpZ2h0XCIpO1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcImFzaWRlLWFjdGl2ZVwiKTtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlX19hbmltYXRlZFwiLCBcImFuaW1hdGVfX3NsaWRlSW5MZWZ0XCIsIFwiYW5pbWF0ZV9fZmFzdFwiKTtcclxuICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlX19hbmltYXRlZFwiLCBcIm1haW4tLWNlbnRlclwiLCBcImFuaW1hdGVfX3NsaWRlSW5MZWZ0XCIpO1xyXG4gICAgICAgIGlzU2xpZGVPdXQgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZm9ybUFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tLWFkZHRhc2tcIik7XHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dBZGRUYXNrRm9ybSgpIHtcclxuICAgIGZvcm1BZGRUYXNrLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXZpc2libGVcIik7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJsb3N0Zm9jdXNcIik7XHJcbn1cclxuXHJcbmNvbnN0IGZvcm1BZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLS1hZGRwcm9qZWN0XCIpO1xyXG5jb25zdCBidG5TaG93UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzaWRlX19idXR0b25cIik7XHJcblxyXG5mdW5jdGlvbiBzaG93QWRkUHJvamVjdEZvcm0oKSB7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJsb3N0Zm9jdXNcIik7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJsb3N0Zm9jdXNcIik7XHJcbiAgICBidG5TaG93UHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZChcImxvc3Rmb2N1c1wiKTtcclxuICAgIGZvcm1BZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJmb3JtLS1hZGRQcm9qZWN0LXZpc2libGVcIik7XHJcbn1cclxuXHJcbmNvbnN0IGZvcm1FZGl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS0tZWRpdHRhc2tcIik7XHJcblxyXG5mdW5jdGlvbiBzaG93RWRpdFRhc2tGb3JtKCkge1xyXG4gICAgZm9ybUVkaXRUYXNrLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXZpc2libGVcIik7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJsb3N0Zm9jdXNcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb3N0Zm9jdXNcIik7XHJcbiAgICBpZiAoZm9ybUFkZFRhc2suY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9ybS12aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgZm9ybUFkZFRhc2suY2xhc3NMaXN0LnJlbW92ZShcImZvcm0tdmlzaWJsZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoZm9ybUFkZFByb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9ybS0tYWRkUHJvamVjdC12aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibG9zdGZvY3VzXCIpO1xyXG4gICAgICAgIGJ0blNob3dQcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwibG9zdGZvY3VzXCIpO1xyXG4gICAgICAgIGZvcm1BZGRQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JtLS1hZGRQcm9qZWN0LXZpc2libGVcIik7XHJcbiAgICB9IGVsc2UgaWYgKGZvcm1FZGl0VGFzay5jbGFzc0xpc3QuY29udGFpbnMoXCJmb3JtLXZpc2libGVcIikpIHtcclxuICAgICAgICBmb3JtRWRpdFRhc2suY2xhc3NMaXN0LnJlbW92ZShcImZvcm0tdmlzaWJsZVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0Rm9ybSgpIHtcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIikudmFsdWUgPSBcIlwiO1xyXG59XHJcblxyXG5sZXQgcHJvamVjdHMgPSBbXTtcclxuY29uc3QgcHJvamVjdE9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3Qtb3B0aW9uXCIpO1xyXG5jb25zdCBuZXdMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3TG9jYXRpb25cIik7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcblxyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgcHJvamVjdE9wdGlvbi5pbm5lckhUTUwgPSBwcm9qZWN0TmFtZTtcclxuICAgIHByb2plY3RPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgcHJvamVjdE5hbWUpO1xyXG5cclxuICAgIGNvbnN0IGNsb25lT3B0aW9uMSA9IHByb2plY3RPcHRpb24uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgY29uc3QgY2xvbmVPcHRpb24yID0gcHJvamVjdE9wdGlvbi5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG4gICAgcHJvamVjdE9wdGlvbnMuYXBwZW5kQ2hpbGQoY2xvbmVPcHRpb24xKTtcclxuICAgIG5ld0xvY2F0aW9uLmFwcGVuZENoaWxkKGNsb25lT3B0aW9uMik7XHJcblxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdE9wdGlvbi52YWx1ZSk7XHJcbiAgICByZW1vdmVGb3JtKCk7XHJcbiAgICBjcmVhdGVFbGVtZW50UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICBjbGVhclByb2plY3RGb3JtKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRQcm9qZWN0KGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hc2lkZV9fdWxcIik7XHJcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIHByb2plY3RFbGVtZW50LmlubmVySFRNTCA9IGVsZW1lbnQ7XHJcbiAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYXNpZGVfX2l0ZW1cIik7XHJcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XHJcblxyXG4gICAgcHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dQcm9qZWN0KTtcclxufVxyXG5cclxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fX2gyXCIpO1xyXG5cclxuZnVuY3Rpb24gc2hvd1Byb2plY3QoKXtcclxuICAgIC8vZWwgbm9tYnJlIGRlbCBwcm95ZWN0byBxdWUgZnVlIGNsaWNhZG9cclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gdGhpcy5pbm5lckhUTUw7XHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBwcm9qZWN0TmFtZTtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKHBybyA9PiBwcm8ucHJvamVjdE5hbWUgPT09IHByb2plY3ROYW1lKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdC50b2Rvcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld1Rhc2soZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWVcIikudmFsdWU7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXNjcmlwdGlvblwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWR1ZWRhdGVcIikudmFsdWU7XHJcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJpb3JpdHlcIikudmFsdWU7XHJcbiAgICBjb25zdCB0YXNrVWJpY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW9wdGlvblwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKHBybyA9PiBwcm8ucHJvamVjdE5hbWUgPT09IHRhc2tVYmljYXRpb24pO1xyXG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyB0b2RvKG5hbWUsIGRlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5KTtcclxuICAgIHByb2plY3QudG9kb3MucHVzaChuZXdUb2RvKTtcclxuICAgIGNvbnNvbGUubG9nKG5ld1RvZG8pO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdC50b2Rvcyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHNob3dNZW51LCBpc1NsaWRlT3V0LCBzaG93QWRkVGFza0Zvcm0sIHJlbW92ZUZvcm0sIHNob3dBZGRQcm9qZWN0Rm9ybSwgc2hvd0VkaXRUYXNrRm9ybSwgY3JlYXRlUHJvamVjdCwgY2xlYXJQcm9qZWN0Rm9ybSwgbmV3VGFza307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vLi4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCB7IHNob3dNZW51LCBzaG93QWRkVGFza0Zvcm0sIHJlbW92ZUZvcm0sIHNob3dBZGRQcm9qZWN0Rm9ybSwgc2hvd0VkaXRUYXNrRm9ybSwgY3JlYXRlUHJvamVjdCwgbmV3VGFza30gZnJvbSAnLi91aSc7XHJcbmltcG9ydCB7IHByb2plY3QsIHRvZG99IGZyb20gJy4vdG9kbyc7XHJcbmNvbnNvbGUubG9nKFwiaXQgc3RpbGwgd29ya3MgZG9uJ3Qgd29ycnlcIik7XHJcbmNvbnN0IGJ0bk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYnV0dG9uLS1tZW51XCIpO1xyXG5idG5NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TWVudSk7XHJcblxyXG5jb25zdCBidG5TaG93Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19idXR0b24tLWFkZHRhc2tcIik7XHJcblxyXG5idG5TaG93Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0FkZFRhc2tGb3JtKTtcclxuXHJcbmNvbnN0IGJ0bkV4aXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm1fX2J1dHRvbi0tZXhpdFwiKTtcclxuXHJcbmJ0bkV4aXQuZm9yRWFjaChidG5FeGl0ID0+IHtcclxuICAgIGJ0bkV4aXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUZvcm0pXHJcbn0pO1xyXG5cclxuY29uc3QgYnRuU2hvd1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hc2lkZV9fYnV0dG9uXCIpO1xyXG5cclxuYnRuU2hvd1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93QWRkUHJvamVjdEZvcm0pO1xyXG5cclxuY29uc3QgYnRuU2hvd0VkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbl9fYnV0dG9uLS1lZGl0XCIpO1xyXG5cclxuYnRuU2hvd0VkaXRUYXNrRm9ybS5mb3JFYWNoKGJ0blNob3dFZGl0VGFza0Zvcm0gPT4ge1xyXG4gICAgYnRuU2hvd0VkaXRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0VkaXRUYXNrRm9ybSk7XHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IHByb0ludm94ID0gbmV3IHByb2plY3QoXCJJbmJveFwiKTtcclxuXHJcbmNvbnN0IGJ0blN1YlByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdF9fcHJvamVjdFwiKTtcclxuXHJcbmJ0blN1YlByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVByb2plY3QpO1xyXG5cclxuY29uc3QgYnRuQ3JlYXRlVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLXRhc2tcIik7XHJcbmJ0bkNyZWF0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Rhc2spO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9