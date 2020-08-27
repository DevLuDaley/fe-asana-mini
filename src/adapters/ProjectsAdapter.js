class ProjectsAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/projects'
    console.log('ProjectsAdapter.js is working')
  }

  getProjects() {
    return fetch(this.baseUrl).then(res => res.json())
        // return fetch(this.baseUrl).then(res => console.log(res.json()))
  }
}