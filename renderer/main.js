// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const buttons = require('./buttons')



document.addEventListener('click', e =>{
    buttons.select(e)
})



document.addEventListener('keydown', e => {
    if(e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        buttons.changeSelection(e.key)
    }
})

document.addEventListener('dblclick', e =>{
    buttons.categories(e.target.id)
})