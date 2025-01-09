# Projeto: Emissor de Nota Fiscal de Serviço

Este projeto é uma aplicação simples para a emissão de Notas Fiscais de Serviço (NFS). Ele permite que o usuário insira dados de uma venda, como itens vendidos, valor e alíquotas de impostos, e calcula automaticamente os valores líquidos e os impostos. A interface é construída em HTML e estilizada com Bootstrap.

---

## Estrutura de Pastas

```bash
.
├── index.html       # Página principal da aplicação
├── README.md        # Documentação do projeto
└── scripts          # Scripts JavaScript usados na aplicação
    ├── emitirNotaFiscal.js  # Lógica de emissão da nota fiscal
    └── formatCoins.js       # Função para formatação de valores monetários
```

---

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3 (via Bootstrap)**: Estilização da interface.
- **JavaScript**: Cálculos e formatação de valores.
- **Bootstrap 5**: Framework para layout responsivo e estilização moderna.

---

## Funcionalidades

1. **Formulário de Entrada**:
   - Campo para o valor da venda, itens vendidos e alíquotas de impostos (IRPF, PIS, COFINS, INSS, ISSQN).

2. **Cálculo de Impostos**:
   - Baseado nas porcentagens inseridas pelo usuário, os valores de cada imposto são calculados.

3. **Formatação Monetária**:
   - O campo de valor da venda é formatado no padrão brasileiro (exemplo: `1.000,00`).

4. **Exibição da Nota Fiscal**:
   - Mostra os itens vendidos, valores de cada imposto, total de impostos e o valor líquido da venda.

---

## Como Executar

1. Clone o repositório ou copie os arquivos para o seu ambiente local:

```bash
git clone <git@github.com:KelvisDenis/saguitechTeste.git>
```

2. Abra o arquivo `index.html` em um navegador.

3. Insira os dados no formulário e clique em **Emitir Nota Fiscal**.

---

## Explicação dos Scripts

### `formatCoins.js`

Responsável pela formatação de valores monetários no padrão brasileiro (exemplo: `1.000,00`).

#### Função `formatCoins`

- **Parâmetros**:
  - `elementIDparm` (opcional): ID do campo de entrada para aplicar formatação automática.
  - `valueparm` (opcional): Valor numérico que será formatado.
- **Retorno**:
  - Se for passado um valor (em `valueparm`), retorna o valor formatado como string.

- **Uso no HTML**:
  - A formatação é aplicada no campo de entrada do valor da venda.

---

### `emitirNotaFiscal.js`

Realiza os cálculos dos impostos e exibe a nota fiscal.

#### Função `emitirNotaFiscal`

1. **Captura os dados do formulário**:
   - Valor da venda, itens vendidos e porcentagens de impostos.
2. **Valida os valores inseridos**:
   - Exibe alertas se algum campo estiver vazio ou inválido.
3. **Calcula os valores de impostos**:
   - IRPF, PIS, COFINS, INSS e ISSQN com base nas alíquotas fornecidas.
4. **Exibe a nota fiscal**:
   - Formata os valores e exibe os resultados no DOM.

---

## Exemplo de Uso

1. Preencha o formulário:
   - **Valor da Venda**: `1.000,00`
   - **Itens Vendidos**: `Serviço de Consultoria`
   - **IRPF**: `15%`
   - **PIS**: `1,65%`
   - **COFINS**: `3%`
   - **INSS**: `11%`
   - **ISSQN**: `5%`

2. Clique em **Emitir Nota Fiscal**.

3. Resultado exibido:
   ```
   Itens Vendidos: Serviço de Consultoria
   Valor da Venda: R$ 1.000,00
   Impostos Calculados:
       IRPF: R$ 150,00
       PIS: R$ 16,50
       COFINS: R$ 30,00
       INSS: R$ 110,00
       ISSQN: R$ 50,00
   Total de Impostos: R$ 356,50
   Valor Líquido: R$ 643,50
   ```

---


## Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usar e modificar.

