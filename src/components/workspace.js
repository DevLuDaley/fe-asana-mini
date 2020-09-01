class Workspace {
  constructor(workspaceJSON) {
    // this.id = workspaceJSON.id
    // this.body = workspaceJSON.body
    // this.name = workspaceJSON.name

    this.id = workspaceJSON.id
    // this.user_id = workspaceJSON.user_id
    this.name = workspaceJSON.name
    this.description = workspaceJSON.description
    // this.completed = workspaceJSON.completed
    // this.color = workspaceJSON.color
    // this.created_at = workspaceJSON.created_at
    // this.due_on = workspaceJSON.due_on
    // this.workspace_id = workspaceJSON.workspace_id
    // this.updated_at = workspaceJSON.updated_at
    // this.user_id = workspaceJSON.user_id
  }

  renderLi() {
    return `<li data-id=${this.id}>${this.name}>${this.description}></li>`
  }
}
