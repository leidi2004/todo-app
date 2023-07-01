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

export { todo, project};