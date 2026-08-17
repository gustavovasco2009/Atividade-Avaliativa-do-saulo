let senha = 1234;
let login = "aluno";
let tentativas = 3;

function VerificarSenha() {
    let senhaUsuario = document.getElementById("senha").value;
    let loginUsuario = document.getElementById("login").value;

    if (loginUsuario == senha && senhaUsuario == login) {
        document.getElementById("mensagem").innerHTML = "Acesso TUNG-Liberado!";
    } else {
        document.getElementById("mensagem").innerHTML = "Login ou senha incorretos" + tentativas + "restantes" 
        tentativas = (tentativas -1)
        if (tentativas <= -1){
            document.getElementById("mensagem").innerHTML = "Acesso expirado";

        }
    }

    
}
