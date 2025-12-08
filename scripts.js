function getbyid(id) {
    return document.getElementById(id);
}

getbyid("botaoAdc").addEventListener("click", adicionarLinha);
getbyid("selectTema").addEventListener("change", trocarTema);

//Add - linha
function adicionarLinha() {
    const nome = getbyid("nome").value;
    const genero = getbyid("genero").value;
    const ano = getbyid("ano").value;

    if (!nome || !genero || !ano) {
        alert("Preencha todos os campos!");
        return;
    }

    const tabela = document.querySelector("#tabelaJogos tbody");
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${nome}</td>
        <td>${genero}</td>
        <td>${ano}</td>
        <td button class="Destacar">Destacar</button></td>
        <td button class="Excluir">Excluir</button></td>
    `;

    tabela.appendChild(tr);

    getbyid("nome").value = "";
    getbyid("genero").value = "";
    getbyid("ano").value = "";

    tr.querySelector(".Excluir").addEventListener("click", () => {
        tr.remove();
    });

    tr.querySelector(".Destacar").addEventListener("click", () => {
        tr.classList.toggle("destacado");
    });
}

//tema 
function trocarTema() {
    const tema = getbyid("selectTema").value;
    document.body.className = tema;
}
