# Relatório de Testes — Sistema de Estoque Mochimochi

Este documento apresenta os casos de teste aplicados ao protótipo de **Controle de Estoque — Mochimochi**, desenvolvido em HTML, CSS e JavaScript.

---

## Ambiente de Testes
- **Plataforma:** GitHub Pages  
- **Navegadores testados:** Chrome (desktop), Edge (desktop), Chrome Mobile 
- **Armazenamento:** LocalStorage  
- **Dados de teste utilizados:**
  - Produto A: “Pepero ao leite” — Qtd = 10 — Preço = 18,99  
  - Produto B: “Marshmellow Fluff pote” — Qtd = 3 — Preço = 39,00 
  - Produto C: “Chiclete Marukawa” — Qtd = 20 — Preço = 2,50 

---
## Casos de Teste Unitários

| Caso   | Descrição                         | Resultado Obtido                                                                 | Status     |
|--------|-----------------------------------|----------------------------------------------------------------------------------|------------|
| TC-01  | Adicionar produto                 | Adicionei **Pepero ao leite** (10 × 18,99). Apareceu na tabela com subtotal 189,90 e totais atualizados. | Aprovado ✅ |
| TC-02  | Adicionar produto repetido        | Adicionei novamente **Pepero ao leite** com Qtd 2. A quantidade passou para 12 e subtotal recalculado. | Aprovado ✅ |
| TC-03  | Buscar produto por nome           | Digitei “marsh” na busca. Só o **Marshmellow Fluff pote** apareceu na tabela.    | Aprovado ✅ |
| TC-04  | Entrada de estoque                | Cliquei em **Entrada +1** no Chiclete Marukawa. Quantidade passou de 20 para 21. | Aprovado ✅ |
| TC-05  | Saída (venda)                     | Cliquei em **Venda -1** no Pepero ao leite. Quantidade diminuiu para 11 e subtotal atualizou. | Aprovado ✅ |
| TC-06  | Saída sem estoque                 | Zerei o estoque do Marshmellow Fluff pote e tentei vender mais 1. Apareceu alerta “Quantidade insuficiente”. | Aprovado ✅ |
| TC-07  | Editar produto                    | Editei o **Chiclete Marukawa** para Qtd = 30 e Preço = 3,00. A tabela atualizou com subtotal 90,00. | Aprovado ✅ |
| TC-08  | Deletar produto                   | Deletei o **Pepero ao leite**. Ele sumiu da tabela e o valor total diminuiu.     | Aprovado ✅ |
| TC-09  | Persistência (LocalStorage)       | Recarreguei a página e os produtos adicionados continuaram salvos.               | Aprovado ✅ |
| TC-10  | Validação de campos               | Tentei adicionar sem nome e apareceu alerta pedindo para preencher corretamente. | Aprovado ✅ |

---

## Testes de Integração (Fluxos)

| Caso   | Descrição                         | Resultado Obtido                                                                 | Status     |
|--------|-----------------------------------|----------------------------------------------------------------------------------|------------|
| TI-01  | Adicionar produto → Vender 2 → Editar preço → Entrada +1 | Adicionei Marshmellow Fluff pote (3 un). Vendi 2, editei preço para 45,00 e dei entrada +1. No fim ficou Qtd = 2, Subtotal = 90,00. Persistiu após recarregar. | Aprovado ✅ |
| TI-02  | Adicionar 3 produtos → Buscar → Deletar um item | Cadastrei os 3 produtos. Busquei por “Pepero” e vi só ele. Depois limpei a busca e deletei o Chiclete Marukawa. Ele sumiu e não voltou após recarregar. | Aprovado ✅ |

---

## Testes de Usabilidade

| Verificação        | Resultado Obtido                                                   | Status     |
|--------------------|--------------------------------------------------------------------|------------|
| Clareza de interface | Consegui entender rápido onde adicionar os produtos e como usar os botões. | Aprovado ✅ |
| Feedback visual      | Sempre que clicava em Entrada/Venda, os totais mudavam na hora.   | Aprovado ✅ |
| Responsividade       | No celular, a tabela ficou legível, mas os botões ficaram pequenos em tela muito estreita. | Aprovado ✅ |
| Acessibilidade       | Os placeholders ajudaram, mas faltam mensagens visuais de erro (só aparece alerta). | Parcialmente aprovado ⚠️ |


---

## Testes de Compatibilidade

- ✅ Chrome Desktop  
- ✅ Edge Desktop  
- ✅ Chrome Mobile  

---

## 📌 Conclusão dos Testes
O sistema atendeu a todos os requisitos básicos de **cadastro, atualização, exclusão e persistência**.  
A interface mostrou-se clara e funcional, com pequenos pontos de melhoria possíveis em **mensagens de erro** e **responsividade em telas muito pequenas**.

