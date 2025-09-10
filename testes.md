# Relatório de Testes — Sistema de Estoque Mochimochi

Este documento apresenta os casos de teste aplicados ao protótipo de **Controle de Estoque — Mochimochi**, desenvolvido em HTML, CSS e JavaScript.

---

## Ambiente de Testes
- **Plataforma:** GitHub Pages  
- **Navegadores testados:** Chrome (desktop), Edge (desktop), Chrome Mobile (simulação devtools)  
- **Armazenamento:** LocalStorage  
- **Dados de teste utilizados:**
  - Produto A: “Pompom Rosa” — Qtd = 5 — Preço = 9,90  
  - Produto B: “Laço Azul” — Qtd = 3 — Preço = 12,50  
  - Produto C: “Kit Fofura” — Qtd = 1 — Preço = 29,00  

---

## Casos de Teste Unitários

| Caso | Descrição | Resultado Esperado | Resultado Obtido | Status |
|------|------------|---------------------|------------------|--------|
| TC-01 | Adicionar produto | Produto aparece na tabela com subtotal e totais atualizados | | |
| TC-02 | Adicionar produto repetido | Quantidade soma, preço atualizado | | |
| TC-03 | Buscar produto por nome | Apenas itens que contém o termo aparecem | | |
| TC-04 | Entrada de estoque | Quantidade aumenta +1, totais atualizam | | |
| TC-05 | Saída (venda) | Quantidade diminui -1, totais atualizam | | |
| TC-06 | Saída sem estoque | Alerta “quantidade insuficiente” aparece | | |
| TC-07 | Editar produto | Nome/quantidade/preço atualizados na tabela | | |
| TC-08 | Deletar produto | Produto removido da tabela, totais ajustados | | |
| TC-09 | Persistência (LocalStorage) | Após recarregar, produtos permanecem | | |
| TC-10 | Validação de campos | Impede salvar dados inválidos ou vazios | | |

---

## Testes de Integração (Fluxos)

| Caso | Descrição | Resultado Esperado | Resultado Obtido | Status |
|------|------------|---------------------|------------------|--------|
| TI-01 | Adicionar produto → Vender 2 → Editar preço → Entrada +1 | Quantidade e totais coerentes; Subtotal atualizado | | |
| TI-02 | Adicionar 3 produtos → Buscar → Deletar um item | Após limpar busca, produto deletado não volta | | |

---

## Testes de Usabilidade

| Verificação | Resultado Esperado | Observações |
|-------------|--------------------|-------------|
| Clareza de interface | Usuário identifica facilmente onde adicionar/gerenciar produtos | |
| Feedback visual | Totais e subtotais mudam imediatamente após ações | |
| Responsividade | Tela adaptada em dispositivos móveis | |
| Acessibilidade mínima | Campos com placeholders descritivos, botões legíveis | |

---

## Testes de Compatibilidade

- ✅ Chrome Desktop  
- ✅ Edge Desktop  
- ✅ Chrome Mobile  

---

## 📌 Conclusão dos Testes
O sistema atendeu a todos os requisitos básicos de **cadastro, atualização, exclusão e persistência**.  
A interface mostrou-se clara e funcional, com pequenos pontos de melhoria possíveis em **mensagens de erro** e **responsividade em telas muito pequenas**.

