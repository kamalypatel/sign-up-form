const button = document.querySelector("submit-btn")

button.addEventListener("click", () => {
    const password = document.querySelector('#password')
    const confirmPassword = document.querySelector('#confirmPassword')

    password.textContent == confirmPassword ? clear() : error()
})

function clear() {
    const password = document.querySelector('#password')
    const confirmPassword = document.querySelector('#confirmPassword')

    password.innerHTML = ''
    confirmPassword.innerHTML = ''
}

function error() {
    const password = document.querySelector('#password')
    const confirmPassword = document.querySelector('#confirmPassword')

    password.setAttribute('class', 'error')
    confirmPassword.setAttribute('class', 'error')
}