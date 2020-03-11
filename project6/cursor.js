let mouseCursor=document.querySelector(".cusor")
let navLinks=document.querySelectorAll('.nav-links li')

window.addEventListener('mousemove',cursor);

function cursor(e){
    console.log(e)
    mouseCursor.style.top=e.pageY+'px'
    mouseCursor.style.left=e.pageX+'px'
}

navLinks.forEach(link=>{
    link.addEventListener('mouseleave',()=>{
        mouseCursor.classList.remove('link-grow')
        link.classList.remove('hoverd-link')
    })
    link.addEventListener('mouseover',()=>{
        mouseCursor.classList.add('link-grow')
        link.classList.add('hoverd-link')
    });
})