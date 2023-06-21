class todo {

    constructor(todoName, todoDescript, todoDueDate, todoPriority, todoNote) {
        this.todoName = todoName;
        this.todoDescript = todoDescript;
        this.todoDueDate = todoDueDate;
        this.todoPriority = todoPriority;
        this.todoNote = todoNote;
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

    editTodo(newName, newDescript, newDueDate, newPriority, newNote) {
        this.todoName = newName;
        this.todoDescript = newDescript;
        this.todoDueDate = newDueDate;
        this.todoPriority = newPriority;
        this.todoNote = newNote;
    }

    markAsComplited(todo, checkBoxStatus, compleatedToDo){
        if(checkBoxStatus.checked === true){
            compleatedToDo.push(todo)
        }
    }

    deleteTodo(){
        todo = null;
    }
}

class project {
    constructor(projectName) {
        this.projectName = projectName;
        projectName = [];
    }
 
    get projectName() {
        return this.projectName;
      }
    
      set projectName(newName) {
        this.projectName = newName;
    }

    deleteProject(){
        this.projectName = [];
    }

    editProjectName(newName){
        this.projectName = newName;
    }
}

export {todo, project};