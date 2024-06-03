function irlogin(){
    window.location.href = 'login.html'
}

function entrar(){
    let user = document.getElementById('user').value
    let senha = document.getElementById('senha').value

    if (user == '1234' && senha == '1234'){
        window.location.href = 'index.html'
    }
    else{
        alert('Usuário e/ou senha estão incorretas')
    }
}