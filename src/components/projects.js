class Projects {
  constructor() {
    this.projects = []
    this.adapter = new ProjectsAdapter()       
    // this.initiBindingsAndEventListeners()
    this.fetchAndLoadProjects()
    console.log('projects.js is working')
  }
  fetchAndLoadProjects() {
    this.adapter
      .getProjects()
      .then(projects => {
        projects.sort((a, b) => a.id - b.id)
        // console.log(projects)
        // for(const project of projects)
        // console.log(projects)
        .forEach(project => this.projects.push(new Project(project)))
        // {
            // console.log(project)
            // this.projects.push(new Project(project))
            // project => this.projects.push(new Project(project)
            
        // )
    })
        // projects_ready = 
        // projects.sort((a, b) => a.id - b.id).forEach(project => this.projects.push(new Project(project)))
        // return console.log(projects)
    //   })
      .then(() => {
        //   console.log(this.projects)
        this.render()
      })
  }
render() {
    // console.log(this.projects.length)
    console.log("After Render in projects.js")
    
    const projectsContainer = document.getElementById("projects-container");
    const projectsString = this.projects.map(project => `
    <li><input class="completed_false" type="checkbox">
    ${project.name} - ${project.body} Project ID = ${project.project_id}
    </li>`).join('');
projectsContainer.innerHTML = projectsString
    console.log(projectsString)
}}
    // console.log(projectsString.length)
    // console.log(typeof(this.projects)) //object
    // console.log(this.projects.entries(projects))
// let box = Object.entries(this.projects)
//     console.log(typeof(box))
    // console.log(typeof(this.projects))
    // console.log("box")
    // console.log(box)
    // var projectObj = this.projects
    // console.log(this.projects[0])
    // console.log()
    // for( var atrs in projectObj[0]) {console.log(atrs)}
    // console.log(this.projects[0])
// showProjects(obj){
//     for (var project in projectObj) {console.log(project)}
// }
// showProjects(projectObj)
    /*
// use this
    const projectsContainer = document.getElementById("projects-container");
    projectsContainer.innerHTML = Object.keys(this.projects).map(project => `<li>${this.projects[project]}</li>`).join('');
*/
    // for (let project in this.projects){
// {     `<li>${this.project[project].name}</li>`.join('')}
// {   projectContainer.innerHTML = project}
      // console.log(this.projects[project]) //object
    // }
      // projectArray.forEach(([key, value]) => {

      //   console.log(key); // 'one'
      //   console.log(value); // 1
      // })

    // const projectsContainer = document.getElementById("projects-container");
    // projectsContainer.innerHTML = "rendering from projects.js"
    // projectsContainer.innerHTML = projectsString
    // projectsContainer.innerHTML = this.projects.map(project => 
    // projectsContainer.innerHTML = for(var project in this.projects){project => 
      // `<li>${project.name}</li>`.join('')}
      // `<li>${project.name}</li>`).join('')
// }
// ! convert object to an array Object.entries?
// }