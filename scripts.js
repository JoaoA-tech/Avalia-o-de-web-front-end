function getbyid(id) {
    return document.getElementById(id);
}

getbyid("botaoAdc").addEventListener("click", adicionarLinha);
getbyid("selectTema").addEventListener("change", trocarTema);
getbyid("limpar").addEventListener("click", limparTabela);

//Limpar tabela
function limparTabela() {
    const tabela = getbyid('tabela');
    tabela.innerHTML = "";
}

//Add - linha
function adicionarLinha() {
    const nome = getbyid("nome").value;
    const genero = getbyid("genero").value;
    const ano = getbyid("ano").value;
    const plataforma = getbyid("plataforma").value;

    if (!nome || !genero || !ano || !plataforma) {
        alert("Preencha todos os campos!");
        return;
    }

    const tabela = getbyid("tabela");
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${nome}</td>
        <td>${genero}</td>
        <td>${ano}</td>
        <td>${plataforma}</td>
        <td button class="Destacar">Destacar</button></td>
        <td button class="Excluir">Excluir</button></td>
    `;

    tabela.appendChild(tr);

    getbyid("nome").value = "";
    getbyid("genero").value = "";
    getbyid("ano").value = "";
    getbyid("plataforma").value = "";

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

