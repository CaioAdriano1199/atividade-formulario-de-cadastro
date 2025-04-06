window.onload = function () {
    let conttabela = document.getElementById("tabela");
    conttabela.innerHTML = "";

    let usuario = JSON.parse(localStorage.getItem("usuario")) || [];

    usuario.forEach((cadastro, index) => {
        let linha = document.createElement("tr");

        linha.innerHTML = `
        <td>${cadastro.nome}</td>
        <td>${cadastro.email}</td>
        <td>${cadastro.idade}</td>       
            `;
        conttabela.appendChild(linha);
    });
}