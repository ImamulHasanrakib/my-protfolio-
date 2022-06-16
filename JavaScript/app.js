
let nav = document.querySelector('.navbar');

window.onscroll = function(){

    if(document.documentElement.scrollTop > 20){
        nav.classList.add('header_scrolled');
    }else{
        nav.classList.remove('header_scrolled');
    }

}

// nav hide 

let nav_links = document.querySelectorAll('.nav-link');

let navCollapse = document.querySelector('.collapse.navbar-collapse');

nav_links.forEach( function(a){
    a.addEventListener('click',function(){
        navCollapse.classList.remove('show');
    })
});