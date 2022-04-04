const grabWork = document.getElementById('goToWork')
grabWork.addEventListener("click", scrollTo)


function scrollTo(){
    let goTo = document.getElementById('myProjects')
    goTo.scrollIntoView(true);
}



