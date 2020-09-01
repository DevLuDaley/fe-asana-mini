class User {
  constructor(userJSON) {
    // this.id = userJSON.id
    // this.body = userJSON.body
    // this.name = userJSON.name

    this.id = userJSON.id
    // this.user_id = userJSON.user_id
    this.name = userJSON.name
    this.workspace_id = userJSON.workspace_id
    // this.completed = userJSON.completed
    // this.color = userJSON.color
    // this.created_at = userJSON.created_at
    // this.due_on = userJSON.due_on
    // this.user_id = userJSON.user_id
    // this.updated_at = userJSON.updated_at
    // this.user_id = userJSON.user_id
  }

  renderLi() {
    return `<li data-id=${this.id}>${this.name}>${this.workspace_id}></li>`
  }
}
