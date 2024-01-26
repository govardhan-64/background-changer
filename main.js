let r = document.querySelector('.red')
let b = document.querySelector('.blue')
let g = document.querySelector('.green')
let y = document.querySelector('.yellow')

//on click events

r.addEventListener('click',() => {
    document.body.style.backgroundColor = 'red'
})

b.addEventListener('click',() => {
    document.body.style.backgroundColor = 'blue'
})

g.addEventListener('click',() => {
    document.body.style.backgroundColor = 'green'
})

y.addEventListener('click',() => {
    document.body.style.backgroundColor = 'yellow'
})
