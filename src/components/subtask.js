class Subtask {
  constructor(subtaskJSON) {
    // this.id = subtaskJSON.id
    // this.body = subtaskJSON.body
    // this.name = subtaskJSON.name

    this.id = subtaskJSON.id
    this.name = subtaskJSON.name
    this.body = subtaskJSON.body
    this.completed = subtaskJSON.completed
    this.completed_at = subtaskJSON.completed_at
    this.created_at = subtaskJSON.created_at
    this.due_on = subtaskJSON.due_on
    this.project_id = subtaskJSON.project_id
    this.updated_at = subtaskJSON.updated_at
    this.task_id = subtaskJSON.task_id
  }

  renderLi() {
    return `<li data-id=${this.id}>${this.name}>${this.body}></li>`
  }
}
