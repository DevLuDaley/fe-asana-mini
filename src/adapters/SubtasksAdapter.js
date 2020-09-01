class SubtasksAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/subtasks'
    console.log('SubtasksAdapter.js is working')
  }

  getSubtasks() {
    return fetch(this.baseUrl).then(res => res.json())
    //     return fetch(this.baseUrl).then(res => console.log(res.json()))
  }
}