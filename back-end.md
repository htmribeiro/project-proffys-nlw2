# Back-end

- ### Responsabilidades  
    - Receber pedidos do cliente
    - Preparar os pedidos ( Regras de Negócios )
    - Enviar respostas
    - Lidar com dados da aplicação
- ### Tecnologias
    - Linguagem: JavaScript
    - Node.js (https://nodejs.org)
    - Git Bash (https://gitforwindows.org)
    - Banco de dados: SQL
    - SQLite

## Bora Codar!
- ### Estrutura de pastas do projeto
- ### Criação do servidor
    - Instalação dos módulos
        - Configuração do servidor
            - Criar e iniciar
            - Página inicial
            - Arquivos estáticos
        - Rotas da aplicação
            - Requisição e Resposta
            - O que são verbos HTTP
            - GET e POST
            - Tipos de envios de dados  
                - Query String / Body
                - Habilitar o express para utilizar o `req.body`
        - Template Engine
            - Instalar e configurar `nunjucks`
            - Renderizar
            - Enviar dados para o HTML
            - Usando Nunjucks
                - include
                - variables
                - extends
                - block
                - if
                - for
            - Instalar extensão `nunjucks-template` nas extensões VSCode
        - Dados


>`npm`  
(Node Package Manager)  
-> É responsável em fazer o gerenciamento de dependências de pacotes nuggets/subaplicações.

>`$ npm init -y`  
-> Comando responsável po iniciar um novo projeto no caminho apontado.  

>`$ node src/server.js`  
-> Comando para startar a aplicação no servidor Node.  

---
## Instalações NPM
>`$ npm install express`  
-> **Express** é uma coleção de estratégias que será agregado ao projeto.  

>`$ npm install nodemon -D`  
-> **nodemon** é um monitoramento do node  
-> **-D** - argumento para instalar em um lugar específico [DEV].  
Este fará com que todas vez que alguma alteração no **`server`** for salva, ele reiniciará o servidor node.  
<br>
`$ npm run dev`  
-> O script será executado com este comando  

>`$ npm instal nunjucks`  
-> A rich and powerful templating language for JavaScript.
---  
## > Terminal  
`CTRL+C` - Cancela execução