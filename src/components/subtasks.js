class Subtasks {
  constructor() {
    this.subtasks = []
    this.adapter = new SubtasksAdapter()       
    // this.initiBindingsAndEventListeners()
    this.fetchAndLoadSubtasks()
    console.log('subtasks.js is working')
  }
  fetchAndLoadSubtasks() {
    this.adapter
      .getSubtasks()
      .then(subtasks => {
        subtasks.sort((a, b) => a.project_id - b.project_id)
        // console.log(subtasks)
        // for(const subtask of subtasks)
        // console.log(subtasks)
        .forEach(subtask => this.subtasks.push(new Subtask(subtask)))
        // {
            // console.log(subtask)
            // this.subtasks.push(new Subtask(subtask))
            // subtask => this.subtasks.push(new Subtask(subtask)
            
        // )
    })
        // subtasks_ready = 
        // subtasks.sort((a, b) => a.id - b.id).forEach(subtask => this.subtasks.push(new Subtask(subtask)))
        // return console.log(subtasks)
    //   })
      .then(() => {
        //   console.log(this.subtasks)
        this.render()
      })
  }
render() {
    // console.log(this.subtasks.length)
    console.log("After Render in subtasks.js")
    
    const subtasksContainer = document.getElementById("subtasks-container");
    const subtasksString = this.subtasks.map(subtask => `
    <li><input class="completed_false" type="checkbox">
    ${subtask.name} - ${subtask.body} Parent Task ID = ${subtask.task_id}
    </li>`).join('');
    subtasksContainer.innerHTML = subtasksString
    // console.log(subtasksString)
}}
    // console.log(subtasksString.length)
    // console.log(typeof(this.subtasks)) //object
    // console.log(this.subtasks.entries(subtasks))
// let box = Object.entries(this.subtasks)
//     console.log(typeof(box))
    // console.log(typeof(this.subtasks))
    // console.log("box")
    // console.log(box)
    // var subtaskObj = this.subtasks
    // console.log(this.subtasks[0])
    // console.log()
    // for( var atrs in subtaskObj[0]) {console.log(atrs)}
    // console.log(this.subtasks[0])
// showSubtask(obj){
//     for (var subtask in subtaskObj) {console.log(subtask)}
// }
// showSubtask(subtaskObj)
    /*
// use this
    const subtasksContainer = document.getElementById("subtasks-container");
    subtasksContainer.innerHTML = Object.keys(this.subtasks).map(subtask => `<li>${this.subtasks[subtask]}</li>`).join('');
*/
    // for (let subtask in this.subtasks){
// {     `<li>${this.subtask[subtask].name}</li>`.join('')}
// {   subtaskContainer.innerHTML = subtask}
      // console.log(this.subtasks[subtask]) //object
    // }
      // subtaskArray.forEach(([key, value]) => {

      //   console.log(key); // 'one'
      //   console.log(value); // 1
      // })

    // const subtasksContainer = document.getElementById("subtasks-container");
    // subtasksContainer.innerHTML = "rendering from subtasks.js"
    // subtasksContainer.innerHTML = subtasksString
    // subtasksContainer.innerHTML = this.subtasks.map(subtask => 
    // subtasksContainer.innerHTML = for(var subtask in this.subtasks){subtask => 
      // `<li>${subtask.name}</li>`.join('')}
      // `<li>${subtask.name}</li>`).join('')
// }
// ! convert object to an array Object.entries?
// }