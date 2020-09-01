class UsersAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/users'
    console.log('UsersAdapter.js is working')
  }

  getUsers() {
    return fetch(this.baseUrl).then(res => res.json())
        // return fetch(this.baseUrl).then(res => console.log(res.json()))
  }
}