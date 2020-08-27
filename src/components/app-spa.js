class App {
  pages: [],
  show: new Event('show'),
  init: function(){
    app.pages = document.querySelectorAll('.page');
    app.pages.forEach((pg)=>{
            pg.addEventListener('show', app.pageShown);
        })
    document.querySelectorAll('.nav-link').forEach((link)=>{
            link.addEventListener('click', app.nav);
        })
    history.replaceState({}, 'Home', '#home');
        window.addEventListener('popstate', app.poppin);


  }
  constructor() {
    this.workspaces = new Workspaces()
    this.users = new Users()
    this.projects = new Projects()
    this.tasks = new Tasks()
    this.subtasks = new Subtasks()
    this.notes = new Notes()    
    console.log('app.js is working')
  }
}
