class Workspaces {
  constructor() {
    this.workspaces = []
    this.adapter = new WorkspacesAdapter()       
    // this.initiBindingsAndEventListeners()
    this.fetchAndLoadWorkspaces()
    console.log('workspaces.js is working')
  }
  fetchAndLoadWorkspaces() {
    this.adapter
      .getWorkspaces()
      .then(workspaces => {
        workspaces.sort((a, b) => a.id - b.id)
  
        .forEach(workspace => this.workspaces.push(new Workspace(workspace)))
        // {
            // console.log(workspace)
            // this.workspaces.push(new Workspace(workspace))
            // workspace => this.workspaces.push(new Workspace(workspace)
            
        // )
    })
        // workspaces_ready = 
        // workspaces.sort((a, b) => a.id - b.id).forEach(workspace => this.workspaces.push(new Workspace(workspace)))
        // return console.log(workspaces)
    //   })
      .then(() => {
        //   console.log(this.workspaces)
        this.render()
      })
  }
render() {
    // console.log(this.workspaces.length)
    console.log("After Render in workspaces.js")
    
    const workspacesContainer = document.getElementById("workspaces-container");
    const workspacesString = this.workspaces.map(workspace => `
    <li>Workspace ID = ${workspace.id} ${workspace.name} - ${workspace.description} 
    </li>`).join('');
workspacesContainer.innerHTML = workspacesString
    // console.log(`This is the WORKSPACESSTRING ${workspacesString}`)
}}
    // console.log(workspacesString.length)
    // console.log(typeof(this.workspaces)) //object
    // console.log(this.workspaces.entries(workspaces))
// let box = Object.entries(this.workspaces)
//     console.log(typeof(box))
    // console.log(typeof(this.workspaces))
    // console.log("box")
    // console.log(box)
    // var workspaceObj = this.workspaces
    // console.log(this.workspaces[0])
    // console.log()
    // for( var atrs in workspaceObj[0]) {console.log(atrs)}
    // console.log(this.workspaces[0])
// showWorkspaces(obj){
//     for (var workspace in workspaceObj) {console.log(workspace)}
// }
// showWorkspaces(workspaceObj)
    /*
// use this
    const workspacesContainer = document.getElementById("workspaces-container");
    workspacesContainer.innerHTML = Object.keys(this.workspaces).map(workspace => `<li>${this.workspaces[workspace]}</li>`).join('');
*/
    // for (let workspace in this.workspaces){
// {     `<li>${this.workspace[workspace].name}</li>`.join('')}
// {   workspaceContainer.innerHTML = workspace}
      // console.log(this.workspaces[workspace]) //object
    // }
      // workspaceArray.forEach(([key, value]) => {

      //   console.log(key); // 'one'
      //   console.log(value); // 1
      // })

    // const workspacesContainer = document.getElementById("workspaces-container");
    // workspacesContainer.innerHTML = "rendering from workspaces.js"
    // workspacesContainer.innerHTML = workspacesString
    // workspacesContainer.innerHTML = this.workspaces.map(workspace => 
    // workspacesContainer.innerHTML = for(var workspace in this.workspaces){workspace => 
      // `<li>${workspace.name}</li>`.join('')}
      // `<li>${workspace.name}</li>`).join('')
// }
// ! convert object to an array Object.entries?
// }