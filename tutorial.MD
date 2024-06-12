### Guia de Explicação para o Código da Lista de Compras

#### Estrutura do Código: `index.html`

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do-List - Simples</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1 class="text-center t1">Lista de Compras</h1>
        <div class="input-group mb-3">
            <input type="text" id="item-input" class="form-control" placeholder="Adicionar novo item">
            <div class="input-group-append">
                <button class="btn btn-primary" id="add-item-btn" type="button">Adicionar</button>
            </div>
        </div>
        <ul id="shopping-list" class="list-group"></ul>
    </div>
    <script src="app.js"></script>
</body>
</html>
``` 

#### Explicação do `index.html`
```html
1.  **<!DOCTYPE html>**: Declaração do tipo de documento, especifica que o documento é HTML5.
2.  **<html lang="pt-br">**: Início do documento HTML e especifica que o idioma é Português do Brasil.
3.  **<head>**: Contém metadados sobre o documento, como título, codificação de caracteres, e links para estilos.
    -   **<meta charset="UTF-8">**: Define a codificação de caracteres como UTF-8.
    -   **<meta name="viewport" content="width=device-width, initial-scale=1.0">**: Faz a página ser responsiva em dispositivos móveis.
    -   **<title>To-Do-List - Simples</title>**: Define o título da página que aparece na aba do navegador.
    -   **<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">**: Inclui o CSS do Bootstrap para estilos pré-definidos.
    -   **<link rel="stylesheet" href="style.css">**: Inclui um arquivo CSS personalizado (style.css).
4.  **<body>**: Contém o conteúdo visível da página.
    -   **<div class="container">**: Um contêiner Bootstrap para centralizar o conteúdo.
        -   **<h1 class="text-center t1">Lista de Compras</h1>**: Título principal da página, centralizado com Bootstrap, e uma classe personalizada `t1` para possíveis estilos adicionais.
        -   **<div class="input-group mb-3">**: Grupo de entrada do Bootstrap para adicionar novos itens.
            -   **<input type="text" id="item-input" class="form-control" placeholder="Adicionar novo item">**: Campo de entrada de texto com placeholder.
            -   **<div class="input-group-append">**: Div para agrupar o botão de adicionar item ao lado do campo de entrada.
                -   **<button class="btn btn-primary" id="add-item-btn" type="button">Adicionar</button>**: Botão para adicionar itens, estilizado com Bootstrap.
        -   **<ul id="shopping-list" class="list-group"></ul>**: Lista não ordenada para mostrar os itens de compras, com a classe Bootstrap `list-group` para estilização.
    -   **<script src="app.js"></script>**: Inclui o arquivo JavaScript `app.js` que contém a lógica do aplicativo.
```


#### Estrutura do Código: `app.js`

```javascript
document.addEventListener('DOMContentLoaded', loadItems);
document.getElementById('add-item-btn').addEventListener('click', addItem);

function loadItems() {
    const items = JSON.parse(localStorage.getItem('shoppingList')) || [];
    items.forEach(item => addItemToDOM(item));
}

function addItem() {
    const itemInput = document.getElementById('item-input');
    const itemText = itemInput.value.trim();
    if (itemText === '') return;

    addItemToDOM(itemText);
    saveItem(itemText);
    itemInput.value = '';
}

function addItemToDOM(itemText) {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center t3';
    listItem.textContent = itemText;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm b1';
    deleteButton.textContent = 'Remover';
    deleteButton.onclick = () => {
        listItem.remove();
        removeItem(itemText);
    };

    listItem.appendChild(deleteButton);
    document.getElementById('shopping-list').appendChild(listItem);
}

function saveItem(item) {
    const items = JSON.parse(localStorage.getItem('shoppingList')) || [];
    items.push(item);
    localStorage.setItem('shoppingList', JSON.stringify(items));
}

function removeItem(item) {
    const items = JSON.parse(localStorage.getItem('shoppingList')) || [];
    const filteredItems = items.filter(i => i !== item);
    localStorage.setItem('shoppingList', JSON.stringify(filteredItems));
}
``` 

#### Explicação do `app.js`

1.  **document.addEventListener('DOMContentLoaded', loadItems);**
    
    -   Adiciona um evento que dispara a função `loadItems` quando o conteúdo do DOM é totalmente carregado.
2.  **document.getElementById('add-item-btn').addEventListener('click', addItem);**
    
    -   Adiciona um evento ao botão de adicionar item, que dispara a função `addItem` quando clicado.
3.  **function loadItems() { ... }**
    
    -   Carrega itens da `localStorage` e adiciona cada um ao DOM.
    -   **const items = JSON.parse(localStorage.getItem('shoppingList')) || [];**: Recupera e converte os itens de compras armazenados no `localStorage`, ou inicia com uma lista vazia.
    -   **items.forEach(item => addItemToDOM(item));**: Para cada item, chama a função `addItemToDOM`.
4.  **function addItem() { ... }**
    
    -   Adiciona um novo item à lista de compras.
    -   **const itemInput = document.getElementById('item-input');**: Obtém o valor do campo de entrada.
    -   **const itemText = itemInput.value.trim();**: Remove espaços em branco do valor.
    -   **if (itemText === '') return;**: Se o texto do item estiver vazio, interrompe a função.
    -   **addItemToDOM(itemText);**: Adiciona o item ao DOM.
    -   **saveItem(itemText);**: Salva o item no `localStorage`.
    -   **itemInput.value = '';**: Limpa o campo de entrada.
5.  **function addItemToDOM(itemText) { ... }**
    
    -   Adiciona o item de compras ao DOM.
    -   **const listItem = document.createElement('li');**: Cria um novo elemento `li`.
    -   **listItem.className = 'list-group-item d-flex justify-content-between align-items-center t3';**: Define classes para o item da lista para estilização.
    -   **listItem.textContent = itemText;**: Define o texto do item.
    -   **const deleteButton = document.createElement('button');**: Cria um botão de exclusão.
    -   **deleteButton.className = 'btn btn-danger btn-sm b1';**: Define classes para o botão de exclusão.
    -   **deleteButton.textContent = 'Remover';**: Define o texto do botão.
    -   **deleteButton.onclick = () => { listItem.remove(); removeItem(itemText); };**: Adiciona funcionalidade de remover o item ao clicar no botão.
    -   **listItem.appendChild(deleteButton);**: Adiciona o botão ao item da lista.
    -   **document.getElementById('shopping-list').appendChild(listItem);**: Adiciona o item da lista ao DOM.
6.  **function saveItem(item) { ... }**
    
    -   Salva um item no `localStorage`.
    -   **const items = JSON.parse(localStorage.getItem('shoppingList')) || [];**: Recupera itens existentes do `localStorage` ou inicia com uma lista vazia.
    -   **items.push(item);**: Adiciona o novo item à lista.
    -   **localStorage.setItem('shoppingList', JSON.stringify(items));**: Converte a lista para uma string JSON e a salva no `localStorage`.
7.  **function removeItem(item) { ... }**
    
    -   Remove um item do `localStorage`.
    -   **const items = JSON.parse(localStorage.getItem('shoppingList')) || [];**: Recupera itens existentes do `localStorage` ou inicia com uma lista vazia.
    -   **const filteredItems = items.filter(i => i !== item);**: Filtra a lista para remover o item especificado.
    -   **localStorage.setItem('shoppingList', JSON.stringify(filteredItems));**: Converte a lista filtrada para uma string JSON e a salva no `localStorage`.

#### Adicionar Edição

#### `index.html`

```html
<input type="text" id="desc-input" class="form-control" placeholder="Adicionar descrição">
```

-   Adiciona um novo campo de entrada para a descrição do item.

#### `app.js`

1.  **loadItems()**
    
    -   Carrega itens da `localStorage` e adiciona cada um ao DOM.
2.  **addItem()**
    
    -   Lê o valor do campo de entrada para o item e para a descrição.
    -   Cria um objeto `item` contendo `text` e `description`.
    -   Adiciona o item ao DOM e ao `localStorage`.
3.  **addItemToDOM(item)**
    
    -   Cria elementos de texto e descrição para o item.
    -   Adiciona um botão "Editar" ao lado de cada item, que permite editar o texto e a descrição.
    -   Adiciona um botão "Remover" ao lado de cada item para remover o item da lista e do `localStorage`.
4.  **updateItem(updatedItem)**
    
    -   Atualiza o item no `localStorage`.
5.  **removeItem(item)**
    
    -   Remove o item do `localStorage`.
