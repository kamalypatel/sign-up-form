const button = document.querySelector(".submit-btn")

button.addEventListener("click", () => {
    const password = document.querySelector('#password').value
    const confirmPassword = document.querySelector('#confirmPassword').value

    password == confirmPassword ? clear() : error()
})

function clear() {
    const password = document.querySelector('#password')
    const confirmPassword = document.querySelector('#confirmPassword')

    password.value = ''
    confirmPassword.value = ''

    const errorMessage = document.querySelector('#errorMessage')
    if (errorMessage) {
        errorMessage.remove()
        password.classList.remove('error')
        confirmPassword.classList.remove('error')
    }

}

function error() {
    const bottomForm = document.querySelector('.bottom-form')
    const password = document.querySelector('#password')
    const confirmPassword = document.querySelector('#confirmPassword')

    const errorMessage = document.querySelector('#errorMessage')
    if (!errorMessage) {
        password.classList.add('error')
        confirmPassword.classList.add('error')
        const errorMessage = document.createElement("p")
        errorMessage.innerText = '* Passwords do not match'
        errorMessage.classList.add('error-message')
        errorMessage.setAttribute('id', 'errorMessage')

        bottomForm.appendChild(errorMessage);
    }

}