class WorkspacesAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/workspaces'
    console.log('WorkspacesAdapter.js is working')
  }

  getWorkspaces() {
    return fetch(this.baseUrl).then(res => res.json())
        // return fetch(this.baseUrl).then(res => console.log(res.json()))
  }
}