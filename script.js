// ===== Estado =====
const tabelaEl = document.getElementById("tabela");
const nomeEl = document.getElementById("nome");
const qtdEl = document.getElementById("quantidade");
const precoEl = document.getElementById("preco");
const btnAdd = document.getElementById("btnAdicionar");
const buscaEl = document.getElementById("busca");

const contagemProdutosEl = document.getElementById("contagemProdutos");
const quantidadeTotalEl  = document.getElementById("quantidadeTotal");
const valorTotalEl       = document.getElementById("valorTotal");

document.addEventListener("DOMContentLoaded", init);
btnAdd.addEventListener("click", adicionarProduto);
buscaEl.addEventListener("input", render);

// ===== Helpers de armazenamento =====
function ler()  { return JSON.parse(localStorage.getItem("produtos-mochimochi") || "[]"); }
function gravar(produtos) { localStorage.setItem("produtos-mochimochi", JSON.stringify(produtos)); }

// ===== Inicialização =====
function init() { render(); }

// ===== CRUD =====
function adicionarProduto() {
  const nome = (nomeEl.value || "").trim();
  const qtd  = parseInt(qtdEl.value, 10);
  const preco = parseFloat(precoEl.value);

  if (!nome || isNaN(qtd) || qtd < 0 || isNaN(preco) || preco < 0) {
    alert("Preencha nome, quantidade (>=0) e preço (>=0).");
    return;
  }

  const produtos = ler();

  // Se já existir produto com o mesmo nome (case-insensitive), só atualiza
  const idx = produtos.findIndex(p => p.nome.toLowerCase() === nome.toLowerCase());
  if (idx >= 0) {
    produtos[idx].quantidade += qtd;
    produtos[idx].preco = preco; // atualiza preço informado
  } else {
    produtos.push({ id: Date.now(), nome, quantidade: qtd, preco });
  }

  gravar(produtos);
  limparFormulario();
  render();
}

function editarProduto(id) {
  const produtos = ler();
  const p = produtos.find(x => x.id === id);
  if (!p) return;

  const novoNome = prompt("Nome do produto:", p.nome);
  if (novoNome === null) return;

  let novaQtd = prompt("Quantidade (número inteiro >= 0):", String(p.quantidade));
  if (novaQtd === null) return;

  let novoPreco = prompt("Preço (R$):", String(p.preco));
  if (novoPreco === null) return;

  novaQtd = parseInt(novaQtd, 10);
  novoPreco = parseFloat(novoPreco);

  if (!novoNome.trim() || isNaN(novaQtd) || novaQtd < 0 || isNaN(novoPreco) || novoPreco < 0) {
    alert("Valores inválidos.");
    return;
  }

  p.nome = novoNome.trim();
  p.quantidade = novaQtd;
  p.preco = novoPreco;

  gravar(produtos);
  render();
}

function deletarProduto(id) {
  if (!confirm("Tem certeza que deseja deletar este produto?")) return;
  const produtos = ler().filter(p => p.id !== id);
  gravar(produtos);
  render();
}

// ===== Movimentações =====
function entrada(id, qtd = 1) { // entrada de estoque
  const produtos = ler();
  const p = produtos.find(x => x.id === id);
  if (!p) return;

  p.quantidade += qtd;
  gravar(produtos);
  render();
}

function saida(id, qtd = 1) { // venda
  const produtos = ler();
  const p = produtos.find(x => x.id === id);
  if (!p) return;

  if (p.quantidade - qtd < 0) {
    alert("Quantidade insuficiente em estoque.");
    return;
  }
  p.quantidade -= qtd;
  gravar(produtos);
  render();
}

// ===== Renderização & Totais =====
function render() {
  const filtro = (buscaEl.value || "").toLowerCase();
  const produtos = ler().filter(p => p.nome.toLowerCase().includes(filtro));

  tabelaEl.innerHTML = "";
  let qtdTotal = 0;
  let valorTotal = 0;

  for (const p of produtos) {
    const subtotal = p.quantidade * p.preco;
    qtdTotal += p.quantidade;
    valorTotal += subtotal;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${escapeHTML(p.nome)}</td>
      <td>${p.quantidade}</td>
      <td>${formatBRL(p.preco)}</td>
      <td>${formatBRL(subtotal)}</td>
      <td class="actions">
        <button class="action in"  onclick="entrada(${p.id})">Entrada +1</button>
        <button class="action out" onclick="saida(${p.id})">Venda -1</button>
        <button class="action edt" onclick="editarProduto(${p.id})">Editar</button>
        <button class="action del" onclick="deletarProduto(${p.id})">Deletar</button>
      </td>
    `;
    tabelaEl.appendChild(tr);
  }

  contagemProdutosEl.textContent = String(produtos.length);
  quantidadeTotalEl.textContent  = String(qtdTotal);
  valorTotalEl.textContent       = formatBRL(valorTotal);
}

function limparFormulario() { nomeEl.value = ""; qtdEl.value = ""; precoEl.value = ""; }

// ===== Utilidades =====
function formatBRL(n) { return n.toLocaleString("pt-BR", { style:"currency", currency:"BRL" }); }
function escapeHTML(s){ return s.replace(/[&<>'"]/g, c=>({ "&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c])); }

// Expor funções que são chamadas por onclick no HTML
window.entrada = entrada;
window.saida = saida;
window.editarProduto = editarProduto;
window.deletarProduto = deletarProduto;
