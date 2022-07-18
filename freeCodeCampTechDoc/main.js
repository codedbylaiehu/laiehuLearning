const sections = document.querySelectorAll ('section');
const navLi = document.querySelectorAll ('nav .container ul li');

window.addEventListener('scroll', ()=> {
    let currentSection = '';

    sections.forEach( section => {
        //this will dynamically set the sectionTop to the distance between the top of the page and the sections while scrolling
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scrollY > sectionTop){
            currentSection = section.getAttribute('id');

        }
        })

    })
    