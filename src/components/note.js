class Note {
  constructor(noteJSON) {
    // this.id = noteJSON.id
    // this.body = noteJSON.body
    // this.name = noteJSON.name

    this.id = noteJSON.id
    this.name = noteJSON.name
    this.body = noteJSON.body
    this.task_id = noteJSON.task_id
    // this.completed = noteJSON.completed
    // this.completed_at = noteJSON.completed_at
    // this.created_at = noteJSON.created_at
    // this.due_on = noteJSON.due_on
    // this.project_id = noteJSON.project_id
    // this.updated_at = noteJSON.updated_at
    // this.user_id = noteJSON.user_id
  }

  renderLi() {
    // return `<li data-id=${this.id}>${this.name}>${this.body} ${this.user_id}></li>`
    return `<li data-id=${this.id}>${this.name}>${this.body}></li>`
  }
}
