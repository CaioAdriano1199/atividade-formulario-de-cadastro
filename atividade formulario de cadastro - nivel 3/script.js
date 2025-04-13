document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cadastrar").addEventListener("click", async () => {
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const idade = parseInt(document.getElementById("idade").value.trim());
  
      if (!nome || !email || !idade) {
        alert("Preencha todos os campos corretamente!");
        return;
      }
  
      try {
        const resposta = await fetch("http://localhost:3000/cadastros", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ nome, email, idade })
        });
  
        const resultado = await resposta.json();
        alert(resultado.mensagem || "Cadastrado com sucesso!");

        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("idade").value = "";
      } catch (erro) {
        alert("Erro ao cadastrar");
        console.error(erro);
      }
    });
    document.getElementById("limpar").addEventListener("click", async() =>{
      document.getElementById("nome").value = "";
      document.getElementById("email").value = "";
      document.getElementById("idade").value = "";
    })
  });
  document.addEventListener("DOMContentLoaded", async () => {
    if (window.location.pathname.includes("detalhes.html")) {
      const corpoTabela = document.getElementById("tabela");
  
      try {
        const resposta = await fetch("http://localhost:3000/cadastros");
        const dados = await resposta.json();
  
        dados.forEach(item => {
          const linha = document.createElement("tr");
  
          const tdNome = document.createElement("td");
          tdNome.textContent = item.nome;
  
          const tdEmail = document.createElement("td");
          tdEmail.textContent = item.email;
  
          const tdIdade = document.createElement("td");
          tdIdade.textContent = item.idade;
  
          linha.appendChild(tdNome);
          linha.appendChild(tdEmail);
          linha.appendChild(tdIdade);
  
          corpoTabela.appendChild(linha);
        });
  
      } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
      }
    }
  });
  