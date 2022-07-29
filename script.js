const panels = document.querySelectorAll(".panel");
panels.forEach( e => {
    e.addEventListener("click", () => {
        removeActiveClass();
        e.classList.add("active");
    })
})

const removeActiveClass = () => {
    panels.forEach(e => {
        e.classList.remove('active');
    })
}