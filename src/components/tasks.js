class Tasks {
  constructor() {
    this.tasks = []
    this.adapter = new TasksAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadTasks()
    console.log('tasks.js is working')
  }
initBindingsAndEventListeners() {
  this.tasksContainer = document.getElementById('tasks-container')
  this.newTaskName = document.getElementById('new-task-name')
  this.newTaskBody = document.getElementById('new-task-body')
  this.newTaskUserId = document.getElementById('new-task-user-id')
  this.newTaskUserName = document.getElementById('new-task-user-name')
  this.newTaskProjectId = document.getElementById('new-task-project-id')
  this.taskForm = document.getElementById('new-task-form')
  this.taskForm.addEventListener('submit', this.createTask.bind(this))
  this.tasksContainer.addEventListener('dblclick', this.handleTaskClick.bind(this));
}

// updateTask() {

// }

  handleTaskClick(e) {
console.log(e.target)
let li = e.target

li.contentEditable = texitrue;
  }

createTask(e) {
  e.preventDefault()
  var taskParams =
{
  name: this.newTaskName.value,
  user_id: this.newTaskUserId.value,
  project_id: this.newTaskProjectId.value,
  body: this.newTaskBody.value

}
  this.adapter.createTask(taskParams)
  .then(task => {
    this.tasks.push(new Task(task))
console.log(task)
   this.taskForm.reset()
    this.render()
  })
}

  fetchAndLoadTasks() {
    this.adapter
      .getTasks()
      .then(tasks => {
        tasks.sort((a, b) => b.id - a.id)
        .forEach(task => this.tasks.push(new Task(task)))
    })
      .then(() => {
        this.render()
      })
  }
render() {
    console.log("After Render in tasks.js")
    
    const tasksContainer = document.getElementById("tasks-container");

    const tasksString = this.tasks.map(task => 
    task.renderLi()).join('');
    tasksContainer.innerHTML = tasksString
}}

