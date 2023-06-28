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

    constructor(todoName, todoDescript, todoDueDate, todoPriority, todoNote, todoState) {
        this.todoName = todoName;
        this.todoDescript = todoDescript;
        this.todoDueDate = todoDueDate;
        this.todoPriority = todoPriority;
        this.todoNote = todoNote;
        this.todoState = false;
    }

    set todoName(newName) {
        this.todoName = newName;
    }

    get todoName() {
        return this.todoName;
    }

    set todoDescript(newDescript) {
        this.todoDescript = newDescript;
    }

    get todoDescript() {
        return this.todoDescript;
    }

    set todoDueDate(newDueDate) {
        this.todoDueDate = newDueDate;
    }

    get todoDueDate() {
        return this.todoDueDate;
    }

    set todoPriority(newPriority) {
        this.todoPriority = newPriority;
    }

    get todoPriority() {
        return this.todoPriority;
    }

    set todoNote(newNote) {
        this._todoNote = newNote;
    }

    get todoNote() {
        return this.todoNote;
    }

    set todoState(newState) {
        this.todoState = newState;
    }

    get todoState() {
        return this.todoState;
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

function createProject(e) {
    e.preventDefault();
    const projectName = document.getElementById("project-name").value;
    const pro = new _todo__WEBPACK_IMPORTED_MODULE_1__.project(projectName);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUdxQjtBQUNXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBDQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDckZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ055QjtBQUN3RjtBQUMzRTtBQUN0QztBQUNBO0FBQ0Esa0NBQWtDLHlDQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxnREFBZTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywyQ0FBVTtBQUNoRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLG1EQUFrQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxpREFBZ0I7QUFDbEUsQ0FBQztBQUNEO0FBQ0E7QUFDQSxxQkFBcUIsMENBQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDhDQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuY3NzL2FuaW1hdGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy91aS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNsYXNzIHRvZG8ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRvZG9OYW1lLCB0b2RvRGVzY3JpcHQsIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHksIHRvZG9Ob3RlLCB0b2RvU3RhdGUpIHtcclxuICAgICAgICB0aGlzLnRvZG9OYW1lID0gdG9kb05hbWU7XHJcbiAgICAgICAgdGhpcy50b2RvRGVzY3JpcHQgPSB0b2RvRGVzY3JpcHQ7XHJcbiAgICAgICAgdGhpcy50b2RvRHVlRGF0ZSA9IHRvZG9EdWVEYXRlO1xyXG4gICAgICAgIHRoaXMudG9kb1ByaW9yaXR5ID0gdG9kb1ByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMudG9kb05vdGUgPSB0b2RvTm90ZTtcclxuICAgICAgICB0aGlzLnRvZG9TdGF0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB0b2RvTmFtZShuZXdOYW1lKSB7XHJcbiAgICAgICAgdGhpcy50b2RvTmFtZSA9IG5ld05hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRvZG9OYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9OYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB0b2RvRGVzY3JpcHQobmV3RGVzY3JpcHQpIHtcclxuICAgICAgICB0aGlzLnRvZG9EZXNjcmlwdCA9IG5ld0Rlc2NyaXB0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0b2RvRGVzY3JpcHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb0Rlc2NyaXB0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB0b2RvRHVlRGF0ZShuZXdEdWVEYXRlKSB7XHJcbiAgICAgICAgdGhpcy50b2RvRHVlRGF0ZSA9IG5ld0R1ZURhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRvZG9EdWVEYXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9EdWVEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB0b2RvUHJpb3JpdHkobmV3UHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnRvZG9Qcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0b2RvUHJpb3JpdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb1ByaW9yaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB0b2RvTm90ZShuZXdOb3RlKSB7XHJcbiAgICAgICAgdGhpcy5fdG9kb05vdGUgPSBuZXdOb3RlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0b2RvTm90ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2RvTm90ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdG9kb1N0YXRlKG5ld1N0YXRlKSB7XHJcbiAgICAgICAgdGhpcy50b2RvU3RhdGUgPSBuZXdTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdG9kb1N0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9TdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBlZGl0VG9kbyhuZXdOYW1lLCBuZXdEZXNjcmlwdCwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHksIG5ld05vdGUsIG5ld1N0YXRlKSB7XHJcbiAgICAgICAgdGhpcy50b2RvTmFtZSA9IG5ld05hbWU7XHJcbiAgICAgICAgdGhpcy50b2RvRGVzY3JpcHQgPSBuZXdEZXNjcmlwdDtcclxuICAgICAgICB0aGlzLnRvZG9EdWVEYXRlID0gbmV3RHVlRGF0ZTtcclxuICAgICAgICB0aGlzLnRvZG9Qcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMudG9kb05vdGUgPSBuZXdOb3RlO1xyXG4gICAgICAgIHRoaXMudG9kb1N0YXRlID0gbmV3U3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIHByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IocHJvamVjdE5hbWUpIHtcclxuICAgICAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XHJcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9qZWN0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdE5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHByb2plY3ROYW1lKG5ld05hbWUpIHtcclxuICAgICAgICB0aGlzLl9wcm9qZWN0TmFtZSA9IG5ld05hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGFzayh0b2RvKSB7XHJcbiAgICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dUYXNrcygpIHtcclxuICAgICAgICB0aGlzLnRvZG9zLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVRhc2sodG9kbykge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy50b2Rvcy5pbmRleE9mKHRvZG8pO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy50b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVQcm9qZWN0KCkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBlZGl0UHJvamVjdE5hbWUobmV3TmFtZSkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBuZXdOYW1lO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyB0b2RvLCBwcm9qZWN0fTsiLCJpbXBvcnQgJ2FuaW1hdGUuY3NzJztcclxuaW1wb3J0IHsgcHJvamVjdH0gZnJvbSAnLi90b2RvJztcclxuLy9FbGVtZW50cyBmb3IgdGhlIGV2ZW50IGxpc3RlbmVyIG9mIHRoZSBtZW51XHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGVcIik7XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuXHJcbi8vVG8gY29udHJvbCB0aGUgc3RhdGUgb2YgdGhlIG1lbnVcclxubGV0IGlzU2xpZGVPdXQgPSB0cnVlO1xyXG5cclxuLy9GdW5jdGlvbiBmb3IgdGhlIGV2ZW50IGxpc3RlbmVyIG9mIHRoZSBtZW51XHJcbmZ1bmN0aW9uIHNob3dNZW51KCkge1xyXG4gICAgaWYgKCFpc1NsaWRlT3V0KSB7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZV9fc2xpZGVJbkxlZnRcIik7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZV9fZmFkZU91dExlZnRcIiwgXCJhbmltYXRlX19mYXN0ZXJcIik7XHJcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZV9fc2xpZGVJblJpZ2h0XCIpO1xyXG4gICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZShcIm1haW4tLWNlbnRlclwiLCBcImFuaW1hdGVfX3NsaWRlSW5MZWZ0XCIpO1xyXG4gICAgICAgIGlzU2xpZGVPdXQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlX19mYWRlT3V0TGVmdFwiLCBcImFuaW1hdGVfX2Zhc3RlclwiKTtcclxuICAgICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlX19zbGlkZUluUmlnaHRcIik7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwiYXNpZGUtYWN0aXZlXCIpO1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcImFuaW1hdGVfX2FuaW1hdGVkXCIsIFwiYW5pbWF0ZV9fc2xpZGVJbkxlZnRcIiwgXCJhbmltYXRlX19mYXN0XCIpO1xyXG4gICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVfX2FuaW1hdGVkXCIsIFwibWFpbi0tY2VudGVyXCIsIFwiYW5pbWF0ZV9fc2xpZGVJbkxlZnRcIik7XHJcbiAgICAgICAgaXNTbGlkZU91dCA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBmb3JtQWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS0tYWRkdGFza1wiKTtcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cclxuZnVuY3Rpb24gc2hvd0FkZFRhc2tGb3JtKCkge1xyXG4gICAgZm9ybUFkZFRhc2suY2xhc3NMaXN0LmFkZChcImZvcm0tdmlzaWJsZVwiKTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImxvc3Rmb2N1c1wiKTtcclxufVxyXG5cclxuY29uc3QgZm9ybUFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tLWFkZHByb2plY3RcIik7XHJcbmNvbnN0IGJ0blNob3dQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXNpZGVfX2J1dHRvblwiKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dBZGRQcm9qZWN0Rm9ybSgpIHtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImxvc3Rmb2N1c1wiKTtcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcImxvc3Rmb2N1c1wiKTtcclxuICAgIGJ0blNob3dQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwibG9zdGZvY3VzXCIpO1xyXG4gICAgZm9ybUFkZFByb2plY3QuY2xhc3NMaXN0LmFkZChcImZvcm0tLWFkZFByb2plY3QtdmlzaWJsZVwiKTtcclxufVxyXG5cclxuY29uc3QgZm9ybUVkaXRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLS1lZGl0dGFza1wiKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dFZGl0VGFza0Zvcm0oKSB7XHJcbiAgICBmb3JtRWRpdFRhc2suY2xhc3NMaXN0LmFkZChcImZvcm0tdmlzaWJsZVwiKTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImxvc3Rmb2N1c1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRm9ybSgpIHtcclxuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvc3Rmb2N1c1wiKTtcclxuICAgIGlmIChmb3JtQWRkVGFzay5jbGFzc0xpc3QuY29udGFpbnMoXCJmb3JtLXZpc2libGVcIikpIHtcclxuICAgICAgICBmb3JtQWRkVGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybS12aXNpYmxlXCIpO1xyXG4gICAgfSBlbHNlIGlmIChmb3JtQWRkUHJvamVjdC5jbGFzc0xpc3QuY29udGFpbnMoXCJmb3JtLS1hZGRQcm9qZWN0LXZpc2libGVcIikpIHtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJsb3N0Zm9jdXNcIik7XHJcbiAgICAgICAgYnRuU2hvd1Byb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJsb3N0Zm9jdXNcIik7XHJcbiAgICAgICAgZm9ybUFkZFByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImZvcm0tLWFkZFByb2plY3QtdmlzaWJsZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoZm9ybUVkaXRUYXNrLmNsYXNzTGlzdC5jb250YWlucyhcImZvcm0tdmlzaWJsZVwiKSkge1xyXG4gICAgICAgIGZvcm1FZGl0VGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybS12aXNpYmxlXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhclByb2plY3RGb3JtKCkge1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKS52YWx1ZSA9IFwiXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHBybyA9IG5ldyBwcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgIHJlbW92ZUZvcm0oKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgIGNsZWFyUHJvamVjdEZvcm0oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFByb2plY3QoZWxlbWVudCkge1xyXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzaWRlX191bFwiKTtcclxuICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgcHJvamVjdEVsZW1lbnQuaW5uZXJIVE1MID0gZWxlbWVudDtcclxuICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhc2lkZV9faXRlbVwiKTtcclxuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcclxufVxyXG5cclxuZXhwb3J0IHsgc2hvd01lbnUsIGlzU2xpZGVPdXQsIHNob3dBZGRUYXNrRm9ybSwgcmVtb3ZlRm9ybSwgc2hvd0FkZFByb2plY3RGb3JtLCBzaG93RWRpdFRhc2tGb3JtLCBjcmVhdGVQcm9qZWN0LCBjbGVhclByb2plY3RGb3JtIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vLi4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCB7IHNob3dNZW51LCBzaG93QWRkVGFza0Zvcm0sIHJlbW92ZUZvcm0sIHNob3dBZGRQcm9qZWN0Rm9ybSwgc2hvd0VkaXRUYXNrRm9ybSwgY3JlYXRlUHJvamVjdH0gZnJvbSAnLi91aSc7XHJcbmltcG9ydCB7IHByb2plY3QsIHRvZG99IGZyb20gJy4vdG9kbyc7XHJcbmNvbnNvbGUubG9nKFwiaXQgc3RpbGwgd29ya3MgZG9uJ3Qgd29ycnlcIik7XHJcbmNvbnN0IGJ0bk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYnV0dG9uLS1tZW51XCIpO1xyXG5idG5NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TWVudSk7XHJcblxyXG5jb25zdCBidG5TaG93Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19idXR0b24tLWFkZHRhc2tcIik7XHJcblxyXG5idG5TaG93Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0FkZFRhc2tGb3JtKTtcclxuXHJcbmNvbnN0IGJ0bkV4aXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm1fX2J1dHRvbi0tZXhpdFwiKTtcclxuXHJcbmJ0bkV4aXQuZm9yRWFjaChidG5FeGl0ID0+IHtcclxuICAgIGJ0bkV4aXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUZvcm0pXHJcbn0pO1xyXG5cclxuY29uc3QgYnRuU2hvd1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hc2lkZV9fYnV0dG9uXCIpO1xyXG5cclxuYnRuU2hvd1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93QWRkUHJvamVjdEZvcm0pO1xyXG5cclxuY29uc3QgYnRuU2hvd0VkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbl9fYnV0dG9uLS1lZGl0XCIpO1xyXG5cclxuYnRuU2hvd0VkaXRUYXNrRm9ybS5mb3JFYWNoKGJ0blNob3dFZGl0VGFza0Zvcm0gPT4ge1xyXG4gICAgYnRuU2hvd0VkaXRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0VkaXRUYXNrRm9ybSk7XHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IHByb0ludm94ID0gbmV3IHByb2plY3QoXCJJbmJveFwiKTtcclxuXHJcbmNvbnN0IGJ0blN1YlByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdF9fcHJvamVjdFwiKTtcclxuXHJcbmJ0blN1YlByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVByb2plY3QpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=