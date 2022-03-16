// ALL we have to do is change class from not active to active 
const panels = document.querySelectorAll('.panel') 
//querySelector to select css elements as a node or as an array 

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses() // we remove active on other classes which are active
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
// for(let i=0;i<panels.length;i++)
// {
//     panels[i].addEventListener('click',removeActiveClasses())
//     panels[i].classList.add('active');

// }
// function removeActiveClasses()
// {
// for(let i=0;i<panels.length;i++)
// {
//     panels[i].classList.remove('active');
// }
// }
