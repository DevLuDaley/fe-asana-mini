const app = new App()

const prog = {
    pages: [],
    show: new Event('show'),
    init: function(){
        prog.pages = document.querySelectorAll('.page');
        prog.pages.forEach((pg)=>{
            pg.addEventListener('show', prog.pageShown);
        })
        document.querySelectorAll('.nav-link').forEach((link)=>{
            link.addEventListener('click', prog.nav);
        })
        history.replaceState({}, 'Task', '#task');
        window.addEventListener('popstate', prog.poppin);
        // window.addEventListener('hashchange', prog.poppin);
    },
    nav: function(ev){
        ev.preventDefault();
        let currentPage = ev.target.getAttribute('data-target');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(currentPage).classList.add('active');
        console.log(currentPage)
        history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(currentPage).dispatchEvent(prog.show);
    },
    
    pageShown: function(ev){
        console.log('Page', ev.target.id, 'just shown');
        let h1 = ev.target.querySelector('h1');
        h1.classList.add('big')
        setTimeout((h)=>{
            h.classList.remove('big');
        }, 1200, h1);
},
    poppin: function (ev) {
        console.log(location.hash, 'popstate event');
        let hash = location.hash.replace('#' ,'');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(hash).classList.add('active');
        console.log(hash)
        console.log("hash") // ! clg is not working
        //history.pushState({}, currentPage, `#${currentPage}`);
        // disptch event object from div
        document.getElementById(hash).dispatchEvent(app.show);
    }
    }
    //     pages.forEach((pg)=>{
    //         pg.addEventListener('show', prog.pageShown);
    //     })
    // document.querySelectorAll('.nav-link').forEach((link)=>{
    //         link.addEventListener('click', prog.nav);
    //     })
    // history.replaceState({}, 'Tasks', '#tasks');
    //     document.addEventListener('popstate', prog.poppin);
    //   }
    //           window.addEventListener('popstate', prog.poppin);

    // }
console.log('index.js is working')
document.addEventListener('DOMContentLoaded', prog.init)