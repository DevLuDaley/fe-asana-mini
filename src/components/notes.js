class Notes {
  constructor() {
    this.notes = []
    this.adapter = new NotesAdapter()
    // this.initiBindingsAndEventListeners()
    this.fetchAndLoadNotes()
    console.log('notes.js is working')
  }
  fetchAndLoadNotes() {
    this.adapter
      .getNotes()
      .then(notes => {
        notes.sort((a, b) => a.id - b.id)
        .forEach(note => this.notes.push(new Note(note)))
    })
      .then(() => {
        this.render()
      })
  }
render() {
    console.log("After Render in notes.js")
    
    const notesContainer = document.getElementById("notes-container");
    const notesString = this.notes.map(note => `
    <li><input class="completed_false" type="checkbox">
    ${note.name} - ${note.body} Task ID = ${note.task_id}
    </li>`).join('');
    notesContainer.innerHTML = notesString
    // console.log(notesString)
}}
    // console.log(notesString.length)
    // console.log(typeof(this.notes)) //object
    // console.log(this.notes.entries(notes))