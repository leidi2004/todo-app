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

    editTodo(newName, newDescript, newDueDate, newPriority) {
        this.todoName = newName;
        this.todoDescript = newDescript;
        this.todoDueDate = newDueDate;
        this.todoPriority = newPriority;
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
        } else {
            todo.todoState = "Not finsihed";
            labelName.classList.remove("finished-task");
        }
    });

    const btnEditTask = document.createElement("button");
    btnEditTask.setAttribute("type", "button");
    btnEditTask.classList.add("main__button--edit");
    taskContainer.appendChild(btnEditTask);

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

    btnEditTask.addEventListener("click", function () {
        EditTodo(todo, labelName, taskName, taskDes, taskDate, taskPriority)
    });

    function newTask(e) {
        e.preventDefault();
        const name = document.getElementById("task-name").value;
        const description = document.getElementById("task-description").value;
        const taskDueDate = document.getElementById("task-duedate").value;
        const taskPriority = document.getElementById("task-priority").value;
        const taskLocation = document.getElementById("project-option").value;
        const project = projects.find(pro => pro.projectName === taskLocation);
        const newTodo = new todo(name, description, taskDueDate, taskPriority, taskId);
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
}

function EditTodo(todo, labelName, taskName, taskDes, taskDate, taskPriority) {
    showEditTaskForm();
    const nameInput = document.getElementById("newName");
    const descriptInput = document.getElementById("newDescription");
    const dueDateInput = document.getElementById("newDueDate");
    const priorityInput = document.getElementById("newPriority");
  
    nameInput.value = todo.todoName;
    descriptInput.value = todo.todoDescript;
    dueDateInput.value = todo.todoDueDate;
    priorityInput.value = todo.todoPriority;
  
    const btnEditTask = document.querySelector(".edit-project");
    btnEditTask.addEventListener("click", handleEditClick);
  
    function handleEditClick(e) {
      e.preventDefault();
      const newName = nameInput.value;
      const newDescript = descriptInput.value;
      const newDueDate = dueDateInput.value;
      const newPriority = priorityInput.value;
  
      todo.editTodo(newName, newDescript, newDueDate, newPriority);
  
      labelName.textContent = newName;
      taskName.textContent = newName;
      taskDes.textContent = newDescript;
      taskDate.textContent = newDueDate;
      taskPriority.textContent = newPriority;
  
      removeForm();
      btnEditTask.removeEventListener("click", handleEditClick);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckdxQjtBQUNrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMENBQU87QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELDBDQUFPO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDBDQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELDBDQUFPO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1Q0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNsV0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOeUI7QUFDcUc7QUFDOUg7QUFDQTtBQUNBO0FBQ0EseURBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxrQ0FBa0MseUNBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGdEQUFlO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDJDQUFVO0FBQ2hELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsbURBQWtCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyw4Q0FBYTtBQUNyRDtBQUNBO0FBQ0Esd0NBQXdDLHdDQUFPO0FBQy9DO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5jc3MvYW5pbWF0ZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY2xhc3MgdG9kbyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodG9kb05hbWUsIHRvZG9EZXNjcmlwdCwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eSwgaWQsIHRvZG9TdGF0ZSkge1xyXG4gICAgICAgIHRoaXMudG9kb05hbWUgPSB0b2RvTmFtZTtcclxuICAgICAgICB0aGlzLnRvZG9EZXNjcmlwdCA9IHRvZG9EZXNjcmlwdDtcclxuICAgICAgICB0aGlzLnRvZG9EdWVEYXRlID0gdG9kb0R1ZURhdGU7XHJcbiAgICAgICAgdGhpcy50b2RvUHJpb3JpdHkgPSB0b2RvUHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMudG9kb1N0YXRlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHRvZG9OYW1lKG5ld05hbWUpIHtcclxuICAgICAgICB0aGlzLl90b2RvTmFtZSA9IG5ld05hbWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCB0b2RvTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9kb05hbWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCB0b2RvRGVzY3JpcHQobmV3RGVzY3JpcHQpIHtcclxuICAgICAgICB0aGlzLl90b2RvRGVzY3JpcHQgPSBuZXdEZXNjcmlwdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHRvZG9EZXNjcmlwdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9kb0Rlc2NyaXB0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgdG9kb0R1ZURhdGUobmV3RHVlRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuX3RvZG9EdWVEYXRlID0gbmV3RHVlRGF0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHRvZG9EdWVEYXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b2RvRHVlRGF0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IHRvZG9Qcmlvcml0eShuZXdQcmlvcml0eSkge1xyXG4gICAgICAgIHRoaXMuX3RvZG9Qcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgdG9kb1ByaW9yaXR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b2RvUHJpb3JpdHk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCB0b2RvU3RhdGUobmV3U3RhdGUpIHtcclxuICAgICAgICB0aGlzLl90b2RvU3RhdGUgPSBuZXdTdGF0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHRvZG9TdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9kb1N0YXRlO1xyXG4gICAgfSBcclxuXHJcbiAgICBnZXQgaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgaWQobmV3SWQpIHtcclxuICAgICAgICB0aGlzLl9pZCA9IG5ld0lkO1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXRUb2RvKG5ld05hbWUsIG5ld0Rlc2NyaXB0LCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSkge1xyXG4gICAgICAgIHRoaXMudG9kb05hbWUgPSBuZXdOYW1lO1xyXG4gICAgICAgIHRoaXMudG9kb0Rlc2NyaXB0ID0gbmV3RGVzY3JpcHQ7XHJcbiAgICAgICAgdGhpcy50b2RvRHVlRGF0ZSA9IG5ld0R1ZURhdGU7XHJcbiAgICAgICAgdGhpcy50b2RvUHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgcHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZSwgcHJvamVjdElEKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xyXG4gICAgICAgIHRoaXMucHJvamVjdElEID0gcHJvamVjdElEO1xyXG4gICAgICAgIHRoaXMudG9kb3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJvamVjdE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3ROYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwcm9qZWN0TmFtZShuZXdOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvamVjdE5hbWUgPSBuZXdOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9qZWN0SUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3RJRDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcHJvamVjdElEKG5ld1Byb2plY3RJRCkge1xyXG4gICAgICAgIHRoaXMuX3Byb2plY3RJRCA9IG5ld1Byb2plY3RJRDtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYXNrKHRvZG8pIHtcclxuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVGFzayh0b2RvKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnRvZG9zLmluZGV4T2YodG9kbyk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnRvZG9zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyB0b2RvLCBwcm9qZWN0fTsiLCJpbXBvcnQgJ2FuaW1hdGUuY3NzJztcclxuaW1wb3J0IHsgcHJvamVjdCwgdG9kbyB9IGZyb20gJy4vdG9kbyc7XHJcbi8vRWxlbWVudHMgZm9yIHRoZSBldmVudCBsaXN0ZW5lciBvZiB0aGUgbWVudVxyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFzaWRlXCIpO1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcblxyXG4vL1RvIGNvbnRyb2wgdGhlIHN0YXRlIG9mIHRoZSBtZW51XHJcbmxldCBpc1NsaWRlT3V0ID0gdHJ1ZTtcclxuXHJcbi8vRnVuY3Rpb24gZm9yIHRoZSBldmVudCBsaXN0ZW5lciBvZiB0aGUgbWVudVxyXG5mdW5jdGlvbiBzaG93TWVudSgpIHtcclxuICAgIGlmICghaXNTbGlkZU91dCkge1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGVfX3NsaWRlSW5MZWZ0XCIpO1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcImFuaW1hdGVfX2ZhZGVPdXRMZWZ0XCIsIFwiYW5pbWF0ZV9fZmFzdGVyXCIpO1xyXG4gICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVfX3NsaWRlSW5SaWdodFwiKTtcclxuICAgICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoXCJtYWluLS1jZW50ZXJcIiwgXCJhbmltYXRlX19zbGlkZUluTGVmdFwiKTtcclxuICAgICAgICBpc1NsaWRlT3V0ID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZV9fZmFkZU91dExlZnRcIiwgXCJhbmltYXRlX19mYXN0ZXJcIik7XHJcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZV9fc2xpZGVJblJpZ2h0XCIpO1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcImFzaWRlLWFjdGl2ZVwiKTtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlX19hbmltYXRlZFwiLCBcImFuaW1hdGVfX3NsaWRlSW5MZWZ0XCIsIFwiYW5pbWF0ZV9fZmFzdFwiKTtcclxuICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlX19hbmltYXRlZFwiLCBcIm1haW4tLWNlbnRlclwiLCBcImFuaW1hdGVfX3NsaWRlSW5MZWZ0XCIpO1xyXG4gICAgICAgIGlzU2xpZGVPdXQgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZm9ybUFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tLWFkZHRhc2tcIik7XHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dBZGRUYXNrRm9ybSgpIHtcclxuICAgIGZvcm1BZGRUYXNrLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXZpc2libGVcIik7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJsb3N0Zm9jdXNcIik7XHJcbn1cclxuXHJcbmNvbnN0IGZvcm1BZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLS1hZGRwcm9qZWN0XCIpO1xyXG5jb25zdCBidG5TaG93UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzaWRlX19idXR0b25cIik7XHJcblxyXG5mdW5jdGlvbiBzaG93QWRkUHJvamVjdEZvcm0oKSB7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJsb3N0Zm9jdXNcIik7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJsb3N0Zm9jdXNcIik7XHJcbiAgICBidG5TaG93UHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZChcImxvc3Rmb2N1c1wiKTtcclxuICAgIGZvcm1BZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJmb3JtLS1hZGRQcm9qZWN0LXZpc2libGVcIik7XHJcbn1cclxuXHJcbmNvbnN0IGZvcm1FZGl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS0tZWRpdHRhc2tcIik7XHJcblxyXG5mdW5jdGlvbiBzaG93RWRpdFRhc2tGb3JtKCkge1xyXG4gICAgZm9ybUVkaXRUYXNrLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXZpc2libGVcIik7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJsb3N0Zm9jdXNcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb3N0Zm9jdXNcIik7XHJcbiAgICBpZiAoZm9ybUFkZFRhc2suY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9ybS12aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgZm9ybUFkZFRhc2suY2xhc3NMaXN0LnJlbW92ZShcImZvcm0tdmlzaWJsZVwiKTtcclxuICAgICAgICBjbGVhckZvcm0oKTtcclxuICAgIH0gZWxzZSBpZiAoZm9ybUFkZFByb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9ybS0tYWRkUHJvamVjdC12aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibG9zdGZvY3VzXCIpO1xyXG4gICAgICAgIGJ0blNob3dQcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwibG9zdGZvY3VzXCIpO1xyXG4gICAgICAgIGZvcm1BZGRQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JtLS1hZGRQcm9qZWN0LXZpc2libGVcIik7XHJcbiAgICAgICAgY2xlYXJQcm9qZWN0Rm9ybSgpO1xyXG4gICAgfSBlbHNlIGlmIChmb3JtRWRpdFRhc2suY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9ybS12aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgZm9ybUVkaXRUYXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JtLXZpc2libGVcIik7XHJcbiAgICAgICAgY2xlYXJGb3JtKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyUHJvamVjdEZvcm0oKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpLnZhbHVlID0gXCJcIjtcclxufVxyXG5cclxubGV0IHByb2plY3RzID0gW107XHJcbmNvbnN0IHByb2plY3RPcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW9wdGlvblwiKTtcclxuY29uc3QgbmV3TG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0xvY2F0aW9uXCIpO1xyXG5cclxubGV0IHByb2plY3RJZCA9IDA7XHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19oMlwiKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRQcm9qZWN0KCkge1xyXG4gICAgY29uc3QgcHJvSW52b3ggPSBuZXcgcHJvamVjdChcIkluYm94XCIsIHByb2plY3RJZCk7XHJcbiAgICBwcm9qZWN0cy5wdXNoKHByb0ludm94KTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXNpZGVfX3VsXCIpO1xyXG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCA9IHByb0ludm94LnByb2plY3ROYW1lO1xyXG4gICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFzaWRlX19pdGVtXCIpO1xyXG4gICAgcHJvamVjdEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIHByb2plY3QucHJvamVjdElkKTtcclxuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcclxuICAgIHByb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93UHJvamVjdCk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBwcm9qZWN0T3B0aW9uLmlubmVySFRNTCA9IHByb0ludm94LnByb2plY3ROYW1lO1xyXG4gICAgcHJvamVjdE9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBwcm9JbnZveC5wcm9qZWN0TmFtZSk7XHJcblxyXG4gICAgY29uc3QgY2xvbmVPcHRpb24xID0gcHJvamVjdE9wdGlvbi5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICBjb25zdCBjbG9uZU9wdGlvbjIgPSBwcm9qZWN0T3B0aW9uLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICBwcm9qZWN0T3B0aW9ucy5hcHBlbmRDaGlsZChjbG9uZU9wdGlvbjEpO1xyXG4gICAgbmV3TG9jYXRpb24uYXBwZW5kQ2hpbGQoY2xvbmVPcHRpb24yKTtcclxuXHJcbiAgICBwcm9qZWN0SWQrKztcclxuXHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb0ludm94LnByb2plY3ROYW1lO1xyXG4gICAgcHJvSW52b3gudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xyXG4gICAgICAgIGNyZWF0ZVRhc2tFbGVtZW50KHRvZG8sIHByb0ludm94KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIikudmFsdWU7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IHByb2plY3QocHJvamVjdE5hbWUsIHByb2plY3RJZCk7XHJcbiAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgcHJvamVjdE9wdGlvbi5pbm5lckhUTUwgPSBwcm9qZWN0TmFtZTtcclxuICAgIHByb2plY3RPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgcHJvamVjdE5hbWUpO1xyXG5cclxuICAgIGNvbnN0IGNsb25lT3B0aW9uMSA9IHByb2plY3RPcHRpb24uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgY29uc3QgY2xvbmVPcHRpb24yID0gcHJvamVjdE9wdGlvbi5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG4gICAgcHJvamVjdE9wdGlvbnMuYXBwZW5kQ2hpbGQoY2xvbmVPcHRpb24xKTtcclxuICAgIG5ld0xvY2F0aW9uLmFwcGVuZENoaWxkKGNsb25lT3B0aW9uMik7XHJcblxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdE9wdGlvbi52YWx1ZSk7XHJcbiAgICByZW1vdmVGb3JtKCk7XHJcbiAgICBjcmVhdGVFbGVtZW50UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICBjbGVhclByb2plY3RGb3JtKCk7XHJcbiAgICBjb25zb2xlLnRhYmxlKG5ld1Byb2plY3QpO1xyXG4gICAgcHJvamVjdElkKys7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRQcm9qZWN0KGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hc2lkZV9fdWxcIik7XHJcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIHByb2plY3RFbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudDtcclxuICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhc2lkZV9faXRlbVwiKTtcclxuICAgIHByb2plY3RFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBwcm9qZWN0LnByb2plY3RJZCk7XHJcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XHJcbiAgICBwcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1Byb2plY3QpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2xlYW5NYWluKCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcclxuICAgIHdoaWxlIChtYWluLmxhc3RDaGlsZCAhPT0gdGl0bGUpIHtcclxuICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4ubGFzdENoaWxkKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1Byb2plY3QoKSB7XHJcbiAgICAvL2VsIG5vbWJyZSBkZWwgcHJveWVjdG8gcXVlIGZ1ZSBjbGljYWRvXHJcbiAgICBjbGVhbk1haW4oKTtcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gdGhpcy50ZXh0Q29udGVudDtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZChwcm8gPT4gcHJvLnByb2plY3ROYW1lID09PSBwcm9qZWN0TmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3QudG9kb3MpO1xyXG4gICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICAgICAgY3JlYXRlVGFza0VsZW1lbnQodG9kbywgcHJvamVjdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxubGV0IHRhc2tJZCA9IDA7XHJcblxyXG5mdW5jdGlvbiBuZXdUYXNrKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZHVlZGF0ZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1wcmlvcml0eVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHRhc2tMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1vcHRpb25cIikudmFsdWU7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZChwcm8gPT4gcHJvLnByb2plY3ROYW1lID09PSB0YXNrTG9jYXRpb24pO1xyXG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyB0b2RvKG5hbWUsIGRlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5LCB0YXNrSWQpO1xyXG4gICAgcHJvamVjdC50b2Rvcy5wdXNoKG5ld1RvZG8pO1xyXG4gICAgY29uc29sZS50YWJsZShuZXdUb2RvKTtcclxuICAgIGNvbnNvbGUudGFibGUocHJvamVjdC50b2Rvcyk7XHJcbiAgICB0YXNrSWQrKztcclxuXHJcbiAgICBjb25zdCBjdXJyZW50VGl0bGUgPSB0aXRsZS50ZXh0Q29udGVudDtcclxuXHJcbiAgICBpZiAodGFza0xvY2F0aW9uID09PSBjdXJyZW50VGl0bGUpIHtcclxuICAgICAgICBjcmVhdGVUYXNrRWxlbWVudChuZXdUb2RvLCBwcm9qZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckZvcm0oKTtcclxuICAgIHJlbW92ZUZvcm0oKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tFbGVtZW50KHRvZG8sIHByb2plY3QpIHtcclxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbl9fY29udGFpbmVyLS10YXNrXCIpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG5cclxuICAgIGNvbnN0IGxhYmVsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsTmFtZS5pbm5lckhUTUwgPSB0b2RvLnRvZG9OYW1lO1xyXG4gICAgbGFiZWxOYW1lLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW5hbWVcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsTmFtZSk7XHJcblxyXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgdG9kby50b2RvU3RhdGUgPSBcIkZpbnNpaGVkXCI7XHJcbiAgICAgICAgICAgIGxhYmVsTmFtZS5jbGFzc0xpc3QuYWRkKFwiZmluaXNoZWQtdGFza1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0b2RvLnRvZG9TdGF0ZSA9IFwiTm90IGZpbnNpaGVkXCI7XHJcbiAgICAgICAgICAgIGxhYmVsTmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiZmluaXNoZWQtdGFza1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBidG5FZGl0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidG5FZGl0VGFzay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuRWRpdFRhc2suY2xhc3NMaXN0LmFkZChcIm1haW5fX2J1dHRvbi0tZWRpdFwiKTtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuRWRpdFRhc2spO1xyXG5cclxuICAgIGNvbnN0IGJ0bkRlbFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuRGVsVGFzay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuRGVsVGFzay5jbGFzc0xpc3QuYWRkKFwibWFpbl9fYnV0dG9uLS1kZWxldGVcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkRlbFRhc2spO1xyXG5cclxuICAgIGJ0bkRlbFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkZWxldGVUYXNrKHByb2plY3QsIHRvZG8sIHRhc2tDb250YWluZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdGFza0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGFza0luZm8uY2xhc3NMaXN0LmFkZChcIm1haW5fX2NvbnRhaW5lci0taW5mb1wiKTtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0luZm8pO1xyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIG5hbWUuaW5uZXJIVE1MID0gXCJOYW1lXCI7XHJcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS0taW5mb1wiKTtcclxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKG5hbWUpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICB0YXNrTmFtZS5pbm5lckhUTUwgPSB0b2RvLnRvZG9OYW1lO1xyXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza05hbWUpO1xyXG4gICAgdGFza05hbWUuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiRGVzY3JpcHRpb25cIjtcclxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS0taW5mb1wiKTtcclxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuXHJcbiAgICBjb25zdCB0YXNrRGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICB0YXNrRGVzLmlubmVySFRNTCA9IHRvZG8udG9kb0Rlc2NyaXB0O1xyXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza0Rlcyk7XHJcbiAgICB0YXNrRGVzLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xyXG5cclxuICAgIGNvbnN0IGR1ZWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGR1ZWRhdGUuaW5uZXJIVE1MID0gXCJEdWUtZGF0ZVwiO1xyXG4gICAgZHVlZGF0ZS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtLWluZm9cIik7XHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZChkdWVkYXRlKTtcclxuXHJcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGFza0RhdGUuaW5uZXJIVE1MID0gdG9kby50b2RvRHVlRGF0ZTtcclxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcclxuICAgIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwcmlvcml0eS5pbm5lckhUTUwgPSBcIlByaW9yaXR5XCI7XHJcbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtLWluZm9cIik7XHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZChwcmlvcml0eSk7XHJcblxyXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICB0YXNrUHJpb3JpdHkuaW5uZXJIVE1MID0gdG9kby50b2RvUHJpb3JpdHk7XHJcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xyXG4gICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xyXG5cclxuICAgIGxhYmVsTmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRhc2tJbmZvLmNsYXNzTGlzdC50b2dnbGUoXCJtYWluX19jb250YWluZXItLWluZm8tLXZpc2libGVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBidG5FZGl0VGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIEVkaXRUb2RvKHRvZG8sIGxhYmVsTmFtZSwgdGFza05hbWUsIHRhc2tEZXMsIHRhc2tEYXRlLCB0YXNrUHJpb3JpdHkpXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBuZXdUYXNrKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lXCIpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWR1ZWRhdGVcIikudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5XCIpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRhc2tMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1vcHRpb25cIikudmFsdWU7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQocHJvID0+IHByby5wcm9qZWN0TmFtZSA9PT0gdGFza0xvY2F0aW9uKTtcclxuICAgICAgICBjb25zdCBuZXdUb2RvID0gbmV3IHRvZG8obmFtZSwgZGVzY3JpcHRpb24sIHRhc2tEdWVEYXRlLCB0YXNrUHJpb3JpdHksIHRhc2tJZCk7XHJcbiAgICAgICAgcHJvamVjdC50b2Rvcy5wdXNoKG5ld1RvZG8pO1xyXG4gICAgICAgIGNvbnNvbGUudGFibGUobmV3VG9kbyk7XHJcbiAgICAgICAgY29uc29sZS50YWJsZShwcm9qZWN0LnRvZG9zKTtcclxuICAgICAgICB0YXNrSWQrKztcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFRpdGxlID0gdGl0bGUudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgICAgIGlmICh0YXNrTG9jYXRpb24gPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgICAgICBjcmVhdGVUYXNrRWxlbWVudChuZXdUb2RvLCBwcm9qZWN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsZWFyRm9ybSgpO1xyXG4gICAgICAgIHJlbW92ZUZvcm0oKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEVkaXRUb2RvKHRvZG8sIGxhYmVsTmFtZSwgdGFza05hbWUsIHRhc2tEZXMsIHRhc2tEYXRlLCB0YXNrUHJpb3JpdHkpIHtcclxuICAgIHNob3dFZGl0VGFza0Zvcm0oKTtcclxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3TmFtZVwiKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0Rlc2NyaXB0aW9uXCIpO1xyXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdEdWVEYXRlXCIpO1xyXG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJpb3JpdHlcIik7XHJcbiAgXHJcbiAgICBuYW1lSW5wdXQudmFsdWUgPSB0b2RvLnRvZG9OYW1lO1xyXG4gICAgZGVzY3JpcHRJbnB1dC52YWx1ZSA9IHRvZG8udG9kb0Rlc2NyaXB0O1xyXG4gICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gdG9kby50b2RvRHVlRGF0ZTtcclxuICAgIHByaW9yaXR5SW5wdXQudmFsdWUgPSB0b2RvLnRvZG9Qcmlvcml0eTtcclxuICBcclxuICAgIGNvbnN0IGJ0bkVkaXRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXByb2plY3RcIik7XHJcbiAgICBidG5FZGl0VGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRWRpdENsaWNrKTtcclxuICBcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUVkaXRDbGljayhlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgbmV3TmFtZSA9IG5hbWVJbnB1dC52YWx1ZTtcclxuICAgICAgY29uc3QgbmV3RGVzY3JpcHQgPSBkZXNjcmlwdElucHV0LnZhbHVlO1xyXG4gICAgICBjb25zdCBuZXdEdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlO1xyXG4gICAgICBjb25zdCBuZXdQcmlvcml0eSA9IHByaW9yaXR5SW5wdXQudmFsdWU7XHJcbiAgXHJcbiAgICAgIHRvZG8uZWRpdFRvZG8obmV3TmFtZSwgbmV3RGVzY3JpcHQsIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5KTtcclxuICBcclxuICAgICAgbGFiZWxOYW1lLnRleHRDb250ZW50ID0gbmV3TmFtZTtcclxuICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSBuZXdOYW1lO1xyXG4gICAgICB0YXNrRGVzLnRleHRDb250ZW50ID0gbmV3RGVzY3JpcHQ7XHJcbiAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gbmV3RHVlRGF0ZTtcclxuICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gbmV3UHJpb3JpdHk7XHJcbiAgXHJcbiAgICAgIHJlbW92ZUZvcm0oKTtcclxuICAgICAgYnRuRWRpdFRhc2sucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUVkaXRDbGljayk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5cclxuZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xyXG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtX19pbnB1dFwiKTtcclxuICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVGFzayhwcm9qZWN0LCB0b2RvLCB0YXNrQ29udGFpbmVyKSB7XHJcbiAgICBwcm9qZWN0LnJlbW92ZVRhc2sodG9kbyk7XHJcbiAgICB0YXNrQ29udGFpbmVyLnJlbW92ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBzaG93TWVudSwgaXNTbGlkZU91dCwgc2hvd0FkZFRhc2tGb3JtLCByZW1vdmVGb3JtLCBzaG93QWRkUHJvamVjdEZvcm0sIGNyZWF0ZVByb2plY3QsIGNsZWFyUHJvamVjdEZvcm0sIG5ld1Rhc2ssIGNyZWF0ZURlZmF1bHRQcm9qZWN0IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vLi4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCB7IHNob3dNZW51LCBzaG93QWRkVGFza0Zvcm0sIHJlbW92ZUZvcm0sIHNob3dBZGRQcm9qZWN0Rm9ybSwgY3JlYXRlUHJvamVjdCwgbmV3VGFzaywgY3JlYXRlRGVmYXVsdFByb2plY3R9IGZyb20gJy4vdWknO1xyXG5cclxuY29uc29sZS5sb2coXCJpdCBzdGlsbCB3b3JrcyBkb24ndCB3b3JyeVwiKTtcclxuXHJcbmNyZWF0ZURlZmF1bHRQcm9qZWN0KCk7XHJcblxyXG5jb25zdCBidG5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2J1dHRvbi0tbWVudVwiKTtcclxuYnRuTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd01lbnUpO1xyXG5cclxuY29uc3QgYnRuU2hvd0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYnV0dG9uLS1hZGR0YXNrXCIpO1xyXG5cclxuYnRuU2hvd0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dBZGRUYXNrRm9ybSk7XHJcblxyXG5jb25zdCBidG5FeGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtX19idXR0b24tLWV4aXRcIik7XHJcblxyXG5idG5FeGl0LmZvckVhY2goYnRuRXhpdCA9PiB7XHJcbiAgICBidG5FeGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVGb3JtKVxyXG59KTtcclxuXHJcbmNvbnN0IGJ0blNob3dQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXNpZGVfX2J1dHRvblwiKTtcclxuXHJcbmJ0blNob3dQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0FkZFByb2plY3RGb3JtKTtcclxuXHJcbmNvbnN0IGJ0blN1YlByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdF9fcHJvamVjdFwiKTtcclxuXHJcbmJ0blN1YlByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVByb2plY3QpO1xyXG5cclxuY29uc3QgYnRuQ3JlYXRlVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLXRhc2tcIik7XHJcbmJ0bkNyZWF0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Rhc2spO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==