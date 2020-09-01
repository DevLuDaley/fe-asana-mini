class NotesAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/notes'
    // this.noteUrl = `http://localhost:3000/api/v1/notes/${note.id}`
    console.log('NotesAdapter.js is working')
  }

  getNotes() {
    return fetch(this.baseUrl).then(res => res.json())
    //     return fetch(this.baseUrl).then(res => console.log(res.json()))
  }
  // getSoloNote() {
  //   // return fetch(this.noteUrl).then(res => res.json())
  //       return fetch(this.noteUrl).then(res => console.log(res.json()))
  // }
}