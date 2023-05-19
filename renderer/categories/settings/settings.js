
const fs = require('fs')

let settings = [
    {database: {
        user: null,
        pass: null,
        database: null
    }},
    {
        administrator: {
            user: null,
            pass: null
        }
    }
]
fs.readFile('settings.json', (e, data) =>{
    if(e) throw e
    settings = JSON.parse(data)
   
})

document.getElementById('datacreds').addEventListener('click', e =>{

    fs.readFile('settings.json', (e, data) =>{
        if(e) throw e
        settings = JSON.parse(data)
       
    })
    if(settings[0].database.user === null && settings[0].database.pass === null && settings[0].database.database === null){
        settings[0].database.user = document.getElementById('username').value 
        settings[0].database.pass = document.getElementById('password').value 
        settings[0].database.database = document.getElementById('database').value
    } else if (settings[0].database.user !== null && settings[0].database.database !== null) {
        settings[0].database.pass = document.getElementById('password').value
    }

    let FileData = JSON.stringify(settings, null, 2)
    fs.writeFile('settings.json', FileData, (e) =>{
        if(e) throw e
        console.log('Data written to file')
    })
   
})

document.getElementById('administrator').addEventListener('click', e =>{
    const user = document.getElementById('admin-user').value
    const pass = document.getElementById('admin-pass').value
    const verify = document.getElementById('admin-verify').value
    //read settings.json for configuration informaiton
    fs.readFile('settings.json',(e, data) => {
        if(e) throw e
        settings = JSON.parse(data)
    })
    if(settings[1].administrator.user === null && settings[1].administrator.pass === null) {
        if(pass === verify){
            document.getElementById('admin-pass').style.border = 'none'
            document.getElementById('admin-verify').style.border = 'none'
            // add bcrypt logic
           settings[1].administrator.user = user
           settings[1].administrator.pass = pass
        } else{
            document.getElementById('admin-pass').style.border = '2px solid red'
            document.getElementById('admin-verify').style.border = '2px solid red'
            document.getElementById('pass-match').style.display = 'block'
            document.getElementById('pass-match').style.color = 'red'
        }
    } else {
        if(pass === verify){
            document.getElementById('admin-pass').style.border = 'none'
            document.getElementById('admin-verify').style.border = 'none'
            // add bcrypt logic
           settings[1].administrator.pass = pass
        } else{
            document.getElementById('admin-pass').style.border = '2px solid red'
            document.getElementById('admin-verify').style.border = '2px solid red'
            document.getElementById('pass-match').style.display = 'block'
            document.getElementById('pass-match').style.color = 'red'
        }
    }


  
    let fileData = JSON.stringify(settings, null, 2)
    fs.writeFile('settings.json',fileData, (e) => {
        if(e) throw e
        console.log('User name and password saved')
    } )

})



let result = objectFindByKey(settings, 'user', 'dallas')
console.log(result)