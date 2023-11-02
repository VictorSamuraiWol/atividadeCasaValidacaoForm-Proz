let form = document.querySelector('form');
let labelName = document.querySelector('label[for="name"]');
let inputName = document.querySelector('input[class="name"]');
let labelEmail = document.querySelectorAll('label')[1];
let inputEmail = document.getElementById('email');
let labelIdade = document.querySelectorAll('label')[2];
let inputIdade = document.getElementById('idade');
let btnForm = document.querySelector('#btnForm');
let dadosForm = document.querySelector('#dadosForm');
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaInput = document.getElementById('senha')
let confirmarSenhaLabel = document.querySelector('label[for="confirmarSenha"]');
let confirmarSenhaInput = document.getElementById('confirmarSenha');
let msgSenha = document.getElementById('msgSenha');
let msgConfirmarSenha = document.getElementById('msgConfirmarSenha');
valoresCorretos = {
    name:  false,
    email: false,
    senha: false,
    confirmarSenha: false
}

dadosForm.classList.add('visible2');
divBtnForm.classList.add('visible3');

labelName.style.color = 'blue';
labelEmail.style.color = 'blue';
labelIdade.style.color = 'blue';

inputName.addEventListener('change', (e)=> {
    let valor = e.target.value
    if(valor.length < 3) {
        msgName.innerText = 'Digite um nome com mais de 3 letras';
        inputName.classList.add('error');
        inputName.classList.remove('correct');
        valoresCorretos.name = false;
    } 
    else {
        inputName.classList.add('correct');
        inputName.classList.remove('error');
        valoresCorretos.name = true;
    }
})

inputEmail.addEventListener('change', (e)=> {
    let valor = e.target.value;

    if (valor.length >= 6 && valor.includes('@') && valor.includes('.')){
        msgSpan.innerText = 'Dados corretos!';
        msgSpan.classList.add('correct');
        inputEmail.classList.add('correct');
        inputEmail.classList.remove('error');
        msgSpan.classList.remove('error');
        msgSpan.classList.add('visible');
        valoresCorretos.email = true;
    }
    else {
        msgSpan.innerText = 'Dados incorretos!';
        msgSpan.classList.add('error');
        inputEmail.classList.add('error');
        inputEmail.classList.remove('correct');
        msgSpan.classList.remove('correct');
        msgSpan.classList.add('visible');
        valoresCorretos.email = false;
    }
})

senhaInput.addEventListener('blur', (e)=> {
    let valor = e.target.value;

    if(valor == '') {
        msgSenha.innerText = 'Campo Vazio';
        console.log('campo vazio');
        senhaInput.classList.add('error');
        senhaInput.classList.remove('correct');
        valoresCorretos.senha = false;
    }
    else {
        msgSenha.innerText = 'Campo Preenchido'
        console.log('campo preenchido');
        senhaInput.classList.add('correct');
        senhaInput.classList.remove('error');
        valoresCorretos.senha = true;
    }
})

console.log(senhaInput.value)

confirmarSenhaInput.addEventListener('blur', (e)=> {
    let valor = e.target.value;
    console.log(senhaInput.value)
    console.log(confirmarSenhaInput.value)

    if (valor == senhaInput.value) {
        msgsSenha = 'Senha igual a confirmação!';
        confirmarSenhaInput.classList.add('correct');
        confirmarSenhaInput.classList.remove('error');
        senhaInput.classList.add('correct');
        senhaInput.classList.remove('error');
        valoresCorretos.confirmarSenha = true;
    }
    else {
        msgConfirmarSenha.innerText = 'Senha diferente da confirmação!';
        confirmarSenhaInput.classList.remove('correct');
        confirmarSenhaInput.classList.add('error');
        senhaInput.classList.add('error');
        senhaInput.classList.remove('correct');
        valoresCorretos.confirmarSenha = false;
    }
})

btnForm.addEventListener('click', (e)=> {
    if(valoresCorretos.name == false || valoresCorretos.email == false || valoresCorretos.senha == false || valoresCorretos.confirmarSenha == false){
        e.preventDefault();
        alert('Seus dados estão incorretos!!!')
    }
    else {
        alert('Formulário enviado com sucesso!!!')
    }
})
