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
        return this.projectName;
    }
    
    set projectName(newName) {
        this.projectName = newName;
    }

    addTask(todo){
        this.todos.push(todo);
    }

    removeTask(todo) {
        const index = this.todos.indexOf(todo);
        if (index !== -1) {
          this.todos.splice(index, 1);
        }
    }

    deleteProject(){
        this.projectName = [];
    }

    editProjectName(newName){
        this.projectName = newName;
    }
}

export {todo, project};