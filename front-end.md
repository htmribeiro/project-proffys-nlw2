# Front-end

- Programação WEB  
    - O que é programação?  
        - Ensinar computador
            - Algoritmo  
                - Passo a passo  
                - Conjunto de Regras  
            - Lógica de Programação  
                - Maneira de Pensar  
            - Sintaxe  
                - Maneira correta de escreve  
    - Linguagem de programação  
        - JavaScript    
- Configurar o ambiente de desenvolvimenmto  
    - Ferramentas
        - Chrome/Edge - Navegador
        - VSCode - Para escrever códigos
- Front-end e Back-end  
    - Imagina que...
        - Cliente chama
        - Servidor escuta e responde
    - Como é feita essa comunicação?
        - HTTP (HyperText Transfer Protocol)
        - URL (Universal Resource Location)
        - Uma troca de dados  
    - Tecnologias do Front-end
        - HTML
        - CSS
        - JavaScript
    - Tecnologias do Back-end

## O Projeto

- [Layout ](https://www.figma.com/file/GHGS126t7WYjnPZdRKChJF/Proffy-Web/duplicate)
- Arquivos  
    [imagens.zip](https://bit.ly/assets-nlw)

## Introdução às tecnologias

- HTML  
    - tags
        - head
            - meta
            - title
            - link
            - style
        - body
            - div
            - h1
            - p
            - a
            - img
- CSS 
    - Responsivo
        - Mobile First
        - Unidades de medida: rem / em
    - Box Model
        - tamanho do conteúdo (width / height)
        - preenchimentos
        - bordas
        - espaçamentos
        - displays
        - cores
            - fundo
            - fonte
            - sombras
            - opacidade
    - Layout
        - posicionamento
            - displays
                - regras fora da caixa (block / inline)
                    - display: block
                        - elements: div / h1 / p
                    - display: inline
                        - elements: a / span / strong
                - regras para dentro da caixa (flex / grid)
            - position: relative / absolute
        - alinhamentos
    - Textos 
        - tamanho
        - tipo
        - espaçamento
        - alinhamento   
- JavaScript  

## Codes

>HTML
```html
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;700&amp;family=Poppins:wght@400;600&amp;display=swap" rel="stylesheet">
```

>CSS
```css
:root {
    --color-background: #f0f0f7;
    --color-primary-lighter: #9871F5;
    --color-primary-ligth: #916BEA;
    --color-primary: #8257e5;
    --color-primary-dark: #774dd6;
    --color-primary-darker: #6842c2;
    --color-secondary: #04d361; 
    --color-secondary-dark: #04bf58;
    --color-title-in-primary: #ffffff;
    --color-text-in-primary: #d4c2ff;
    --color-text-title: #32264d;
    --color-text-complement: #9c98a6;
    --color-text-base: #6a6180;
    --color-line-in-white: #e6e6f0;
    --color-input-background: #f8f8fc;
    --color-button-text: #ffffff;
    --color-box-base: #ffffff;
    --color-box-footer: #fafafc;
    --color-small-info: #c1bccc;
    font-size: 60%; /* controle das medidas rem */
}
```

## Dia 2

>HTML
```html
<form id="search-teachers">
    <div class="select-block">
        <label for="subject">Matéria</label>
        <select name="subject" id="subject">
            <option value="" disabled="" hidden="">Selecione uma opção</option>
            <option value="1">Artes</option>
            <option value="2">Biologia</option>
            <option value="3">Ciências</option>
            <option value="4">Educação física</option>
            <option value="5">Física</option>
            <option value="6">Geografia</option>
            <option value="7">História</option>
            <option value="8">Matemática</option>
            <option value="9">Português</option>
            <option value="10">Química</option>
        </select>
    </div>
    <div class="select-block">
        <label for="weekday">Dia da semana</label>
        <select name="weekday" id="weekday">
            <option value="" disabled="" hidden="">Selecione uma opção</option>
            <option value="0">Domingo</option>
            <option value="1">Segunda-feira</option>
            <option value="2">Terça-feira</option>
            <option value="3">Quarta-feira</option>
            <option value="4">Quinta-feira</option>
            <option value="5">Sexta-feira</option>
            <option value="6">Sábado</option>
        </select>
    </div>
    <div class="input-block">
        <label for="time">Hora</label>
        <input name="time" id="time" type="time" >
    </div>
    <button type="submit">Filtrar</button>
</form>
```
>HTML
```html
<article class="teacher-item">
    <header>
        <img 
            src="https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" 
            alt="Diego Fernandes">
        <div>
            <strong>Diego Fernandes</strong>
            <span>Química</span>
        </div>
    </header>

    <p>Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.</p>

    <footer>
        <p>Preço/hora<strong>R$ 20,00</strong>
        </p>
        <button type="button">
            <img src="/images/icons/whatsapp.svg" alt="Whatsapp">Entrar em contato
        </button>
    </footer>
</article>
```