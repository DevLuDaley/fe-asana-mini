class Users {
  constructor() {
    this.users = []
    this.adapter = new UsersAdapter()       
    // this.initiBindingsAndEventListeners()
    this.fetchAndLoadUsers()
    console.log('users.js is working')
  }
  fetchAndLoadUsers() {
    this.adapter
      .getUsers()
      .then(users => {
        users.sort((a, b) => a.id - b.id)
        .forEach(user => this.users.push(new User(user)))
    })

      .then(() => {
        //   console.log(this.users)
        this.render()
      })
  }
render() {
    // console.log(this.users.length)
    console.log("After Render in users.js")
    const usersContainer = document.getElementById("users-container");
    const usersString = this.users.map(user => `
    <li>
    ${user.name} - User ID = ${user.id} Workspace ID = ${user.workspace_id}
    </li>`).join('');
usersContainer.innerHTML = usersString
    // console.log(usersString)
}}
