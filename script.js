const form = document.getElementById('form')
const admin = document.getElementById('admin')
const user = document.getElementById('user')
let name = document.getElementById('username')
let pass = document.getElementById('password')

form.addEventListener('submit', (d) => {
    
    let messages = []
    let clearMessage = []
    if (username.value == 'user' && password.value == 'user') {
        messages.push('It works')

        if (messages.length > 0) {
            d.preventDefault()
            user.innerText = messages.join(', ')
            admin.innerText = clearMessage.join(', ')
            clear()

        }
    }
    else if (username.value == 'admin' && password.value == 'admin') {
        messages.push('It works')
        if (messages.length > 0) {
            d.preventDefault()
            admin.innerText = messages.join(', ')
            user.innerText = clearMessage.join(', ')
            clear()
        }
    }
    else {
        alert('Invalid Username or Password')
    }
})

function clear(){
    name.value = '';
    pass.value = '';
}
