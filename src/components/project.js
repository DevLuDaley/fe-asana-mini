class Project {
  constructor(projectJSON) {
    // this.id = projectJSON.id
    // this.body = projectJSON.body
    // this.name = projectJSON.name

    this.id = projectJSON.id
    this.user_id = projectJSON.user_id
    this.name = projectJSON.name
    this.body = projectJSON.body
    this.completed = projectJSON.completed
    this.color = projectJSON.color
    // this.created_at = projectJSON.created_at
    // this.due_on = projectJSON.due_on
    // this.project_id = projectJSON.project_id
    // this.updated_at = projectJSON.updated_at
    // this.user_id = projectJSON.user_id
  }

  renderLi() {
    return `<li data-id=${this.id}>${this.name}>${this.body}></li>`
  }
}
