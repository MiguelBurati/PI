let nome = document.getElementById('name')
let idade = document.getElementById('age')
let email = document.getElementById('email')
let button = document.getElementById('button')
button.addEventListener('click', clicar)

function clicar() {
    if (nome.value == '' || idade.value == '' || email.value == '') {
        window.alert('Preencha todos os dados!')
    } else if (idade.value < 15){
        window.alert('Idade não permitida!')
    } else {
        window.location = 'index.html'
    }
}
