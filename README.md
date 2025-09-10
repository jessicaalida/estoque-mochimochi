# 📦 Controle de Estoque - Mochimochi

Este é um protótipo de **sistema de controle de estoque** desenvolvido como atividade prática da disciplina *Engenharia e Projeto de Software*.  
O sistema roda direto no navegador, permitindo gerenciar de forma simples os produtos da loja Mochimochi.

---

## 🚀 Funcionalidades
- Adicionar produtos (nome, quantidade e preço unitário).
- Listar todos os produtos em uma tabela.
- Atualizar estoque com **entrada** e **saída (venda)**.
- Editar informações de produtos já cadastrados.
- Deletar produtos do estoque.
- Cálculo automático de **subtotal por produto** e **valor total em estoque**.
- Pesquisa de produtos por nome.
- Armazenamento no **LocalStorage** (os dados ficam salvos mesmo fechando o navegador).

---

## 🛠️ Tecnologias Utilizadas
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **LocalStorage** para persistência de dados
- Hospedagem via **GitHub Pages**

---

## 📖 Como usar
1. Abra o sistema no navegador pelo link do GitHub Pages:  
   👉 [Clique aqui para acessar](https://jessicaalida.github.io/estoque-mochimochi/)  

2. Na tela principal, você pode:
   - Preencher nome, quantidade e preço → clicar em **Adicionar**.
   - Usar os botões de **Entrada**, **Venda**, **Editar** e **Deletar** para gerenciar os produtos.
   - Acompanhar os totais (itens, quantidade e valor em estoque) no topo.

---

## 🧪 Testes

### Testes Unitários (manuais)
- ✅ Adicionar produto → aparece corretamente na tabela.  
- ✅ Venda (saída) → reduz quantidade e recalcula totais.  
- ✅ Entrada → aumenta quantidade e recalcula totais.  
- ✅ Editar → atualiza nome, quantidade e preço do produto.  
- ✅ Deletar → remove o produto da tabela.  

### Testes de Integração
- ✅ Entrada + Venda em sequência → valores permanecem corretos.  
- ✅ Editar + Deletar → dados atualizam corretamente no LocalStorage.  
- ✅ Fechar e reabrir navegador → dados permanecem.  

### Testes de Usabilidade
- ✅ Interface simples e intuitiva, testada em desktop e mobile.  
- ✅ Campo de busca permite localizar rapidamente produtos.  

---

## 📌 Possíveis Melhorias Futuras
- Exportar estoque em planilha (CSV).  
- Criar login de usuários (estoquista / administrador).  
- Relatórios gráficos de vendas e estoque.  

---

## 👩‍💻 Autoria
Desenvolvido por **Jéssica Valença** como parte do curso de *Engenharia e Projeto de Software*.  
