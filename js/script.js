// document.querySelector(".about").addEventListener('click', scrollTo)
// document.querySelector(".work").addEventListener('click', scrollTo)
// document.querySelector(".contact").addEventListener('click', scrollTo)

document.querySelectorAll(".listen").forEach((item) => {
    item.addEventListener('click', scrollTo )
})

function scrollTo() {
    if (document.querySelector('.work') ){
    document.querySelector('#myProjects').scrollIntoView({ behavior: "smooth"})
    } 
}
