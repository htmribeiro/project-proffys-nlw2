# Banco de Dados

- ## Dados não devem ficar na aplicação
    - Perder/Corrompere
    - Segurança
    - Responsabilidades
- ## SQL
    - Structured Qyery Language
    - Linguagem para
        - Criar
        - Consultar
        - Atualizar
        - Deletar
        - Mais...
    - Tabelas - Entidades - Relações:
        - Colunas e linhas
- ## Tecnologia utilizada
    - SQLite
    - Open-source e fácil de configurar
    - Banco de dados que reside na própria aplicação
    - Excelente para que está começando no mundo SQL

## Bora Codar!

- Instalar o `sqlite-async`
- Criar arquivo de configuração do banco de dados `db.js`
- Criar o objeto que irá fazer operações no banco de dados
- Operações
    - Criar tabela no banco de dados
    - Inserir um dado na tabela
    - Consultar um dado na tabela
    - Apagar um dado na tabela
- Exportar o objeto para ser usado em outro local
- Importar o banco de dados no server.js
- Utilizar o banco de dados nas rotas  

## Desafios

## 01 - Página de sucesso
- Mostrar página de sucesso após o cadastro do proffy
        - utilizar a imagem ***`./images/success-background.svg`*** 
- Aguardar 2 segundos na página e redirecionar para a listagem dos proffys, com filtro
    - use **setTimeout** para aguardar os 2 segundos
    - location.href="" --> para redirecionar a página de sucesso

## 02 - Correção de bugs
    - Não permitir o usuário colocar um novo campo de **dia e horário**, se o dia e hora anterior estiver vazio.
    - Funcionalidade de deletar um campo de dia e hora.
    
---
>` `` `  
As *crases* no JavaScript é chamado de **Literal Templates**

>`${}`  
Utilizado para colocarmos uma *variável* dentro do texto (**Literal Templates**)
---
## Instalações NPM

>`$ npm install sqlite-async`  
Comando para fazer a instalação do banco de dados SQLite.  

---

## Terminal

>`$ node src/database/db.js`  
Comando para executar o banco de dados  

---

## Extensões VSCode
SQLite  
alexcvzz  
Explore and query SQLite databases.  

### Abrir o banco de dados:
1. Clicar no arquivo `database.sqlite` com o botão esquerdo do mouse
1. Clicar na opção `Open Database`
1. Após ele carregar a extensão, aparecerá na janela **EXPLORER** o submenu ***SQLITE EXPLORER***
1. Ao expandir o banco de dados
1. Posicionamos o mouse sobre uma das tabela e clicamos na opção **Show Table**, através do botão *play* a direita ou clicando com o botão esquerdo do mouse em cima da tabela desejada.


---