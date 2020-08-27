class Tasks {
  constructor() {
    this.tasks = []
    this.adapter = new TasksAdapter()       
    // this.initiBindingsAndEventListeners()
    this.fetchAndLoadTasks()
    console.log('tasks.js is working')
  }
  fetchAndLoadTasks() {
    this.adapter
      .getTasks()
      .then(tasks => {
        tasks.sort((a, b) => a.project_id - b.project_id)
        // console.log(tasks)
        // for(const task of tasks)
        // console.log(tasks)
        .forEach(task => this.tasks.push(new Task(task)))
        // {
            // console.log(task)
            // this.tasks.push(new Task(task))
            // task => this.tasks.push(new Task(task)
            
        // )
    })
        // tasks_ready = 
        // tasks.sort((a, b) => a.id - b.id).forEach(task => this.tasks.push(new Task(task)))
        // return console.log(tasks)
    //   })
      .then(() => {
        //   console.log(this.tasks)
        this.render()
      })
  }
render() {
    // console.log(this.tasks.length)
    console.log("After Render in tasks.js")
    
    const tasksContainer = document.getElementById("tasks-container");
    const tasksString = this.tasks.map(task => `
    <li><input class="completed_false" type="checkbox">
    ${task.name} - ${task.body} Project ID = ${task.project_id}
    </li>`).join('');
tasksContainer.innerHTML = tasksString
    console.log(tasksString)
}}
    // console.log(tasksString.length)
    // console.log(typeof(this.tasks)) //object
    // console.log(this.tasks.entries(tasks))
// let box = Object.entries(this.tasks)
//     console.log(typeof(box))
    // console.log(typeof(this.tasks))
    // console.log("box")
    // console.log(box)
    // var taskObj = this.tasks
    // console.log(this.tasks[0])
    // console.log()
    // for( var atrs in taskObj[0]) {console.log(atrs)}
    // console.log(this.tasks[0])
// showTasks(obj){
//     for (var task in taskObj) {console.log(task)}
// }
// showTasks(taskObj)
    /*
// use this
    const tasksContainer = document.getElementById("tasks-container");
    tasksContainer.innerHTML = Object.keys(this.tasks).map(task => `<li>${this.tasks[task]}</li>`).join('');
*/
    // for (let task in this.tasks){
// {     `<li>${this.task[task].name}</li>`.join('')}
// {   taskContainer.innerHTML = task}
      // console.log(this.tasks[task]) //object
    // }
      // taskArray.forEach(([key, value]) => {

      //   console.log(key); // 'one'
      //   console.log(value); // 1
      // })

    // const tasksContainer = document.getElementById("tasks-container");
    // tasksContainer.innerHTML = "rendering from tasks.js"
    // tasksContainer.innerHTML = tasksString
    // tasksContainer.innerHTML = this.tasks.map(task => 
    // tasksContainer.innerHTML = for(var task in this.tasks){task => 
      // `<li>${task.name}</li>`.join('')}
      // `<li>${task.name}</li>`).join('')
// }
// ! convert object to an array Object.entries?
// }