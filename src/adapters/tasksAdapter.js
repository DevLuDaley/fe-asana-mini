class TasksAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/tasks'
    console.log('adapter.js is working')
  }

  getTasks() {
    return fetch(this.baseUrl).then(res => res.json())
    //     return fetch(this.baseUrl).then(res => console.log(res.json()))
  }
}