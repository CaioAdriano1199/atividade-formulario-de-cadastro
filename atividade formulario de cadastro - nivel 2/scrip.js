
document.getElementById("cadastrar").addEventListener("click", function () {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;

    if (!nome || !email || !idade) {
        alert("Preencha todos os campos!");
        return;
    }

    let cadastro = {
        nome: nome,
        email: email,
        idade: idade
    };


    let usuarios = JSON.parse(localStorage.getItem("usuario"));

    if (!Array.isArray(usuarios)) {
        usuarios = [];
    }

    usuarios.push(cadastro);

    localStorage.setItem("usuario", JSON.stringify(usuarios));
    alert("Cadastro efetuado!");
    limpacampo();
});

document.getElementById("limpar").addEventListener("click", function () {
    limpacampo();
});

function limpacampo() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("idade").value = "";
}