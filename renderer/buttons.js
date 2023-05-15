
const{ ipcRenderer } = require('electron')


exports.select = e => {

    // Remove currently selected item class
    document.getElementsByClassName('button-item selected')[0].classList.remove('selected')
  
    // Add to clicked item
   button = e.target.id
   
   if(button === 'settings'){
    document.getElementById('settings').classList.add('selected')
   } else if (button === 'quartermaster'){
    document.getElementById('quartermaster').classList.add('selected')
   } else if (button === 'treasury'){
    document.getElementById('treasury').classList.add('selected')
   } else if (button === 'secretary'){
    document.getElementById('secretary').classList.add('selected')
   } else{
    document.getElementById('members').classList.add('selected')
   }
  }

  exports.changeSelection = direction => {

    // Get selected item
    let currentItem = document.getElementsByClassName('button-item selected')[0]

    // currentItem.previousElementSibling
    // Handle up/down
    if (direction === 'ArrowUp') {
        if(currentItem.id === 'members'){
            return 
        }
        console.log(currentItem.id)
       currentItem.classList.remove('selected')
       currentItem.previousElementSibling.classList.add('selected')
      
    } else if (direction === 'ArrowDown' && currentItem.nextElementSibling) {
      if(currentItem.nextElementSibling === null){
        return
      }  
      currentItem.classList.remove('selected')
      currentItem.nextElementSibling.classList.add('selected')
    }
  }

  exports.categories = cat => {
    console.log(cat)
   ipcRenderer.send('category', cat)
      
      }

  