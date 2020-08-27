class Task {
  constructor(taskJSON) {
    // this.id = taskJSON.id
    // this.body = taskJSON.body
    // this.name = taskJSON.name

    this.id = taskJSON.id
    this.name = taskJSON.name
    this.body = taskJSON.body
    this.completed = taskJSON.completed
    this.completed_at = taskJSON.completed_at
    this.created_at = taskJSON.created_at
    this.due_on = taskJSON.due_on
    this.project_id = taskJSON.project_id
    this.updated_at = taskJSON.updated_at
    this.user_id = taskJSON.user_id
  }

  renderLi() {
    return `<li data-id=${this.id}>${this.name}>${this.body}></li>`
  }
}
