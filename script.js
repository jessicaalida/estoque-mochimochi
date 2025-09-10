let estoque = [];

function adicionarProduto() {
  let produto = document.getElementById("produto").value;
  let quantidade = document.getElementById("quantidade").value;

  if (produto && quantidade > 0) {
    estoque.push({ nome: produto, qtd: quantidade });
    atualizarLista();
    document.getElementById("produto").value = "";
    document.getElementById("quantidade").value = "";
  } else {
    alert("Preencha os campos corretamente!");
  }
}

function atualizarLista() {
  let lista = document.getElementById("listaEstoque");
  lista.innerHTML = "";
  estoque.forEach((item, index) => {
    lista.innerHTML += `<li>${item.nome} - ${item.qtd} unidades</li>`;
  });
}
