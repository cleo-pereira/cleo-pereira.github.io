/*
    importando os módulos que serão usados no projeto
    por questão de simplificação, transformei os módulos em classes,
    que são mais simples de atualizar
*/
import Categories from './categories.js';
import Items from './items.js';
import Pedido from './pedido.js';
import IndexView from './view/indexView.js';

/*
 * neste ponto, estou criando os objetos
 * que serão usados ao longo do código
 * 
 * percebam que a view recebe um parâmetro (#main-content, no caso)
 * uso esse parâmetro para definir uma propriedade na view para não
 * ter que fazer referência ao html lá.
 */
let items = new Items();
let categories = new Categories();
let pedido = new Pedido();
let view = new IndexView("#main-content");

let mainContent = document.querySelector("#main-content");
let navContent = document.querySelector("#collapsable-nav");

window.onload = () => {    
    view.loadMain();
    pedido.readFromStorage();
}

navContent.addEventListener('click', (event)=>{
    console.log(event);
    if(event.target.matches("#linkmenu") || event.target.matches("#spanmenu")){
        loadMenuCategories();
    }
});



/**
 * Declaração dos eventos previstos na área principal
 */
mainContent.addEventListener('click', (event) => {
    // console.log(event);
    /* 
      programando o evento de clique no card de menu categoria
    */
    if(event.target.matches("#menu-tile")) {
        //carregar todas as categorias
        loadMenuCategories();
    }
    
    /* 
      programando o evento de detalhamento de uma categoria
      deverá apresentar todos os pratos da categoria
    */
    if (event.target.matches("img.categoria")) {  
        let categoria = event.target.classList[0];
        if (categoria) {
            loadMenuItems(categoria);
        }
    }


    /**
     * programando o evento de escolha de um prato
     */
    if(event.target.matches("button.pedir")){
        let selectedItem = items.getItem(event.target.id); 
        pedido.addProduto(selectedItem);
        view.listPedido(pedido);
    }


/**
 * >>>>>>>>>> 
 * 1 ATIVIDADE - Programar a funcionalidade Remover Item
 ***  a. escolha ou crie um evento para remover um item do pedido
*/
    if(event.target.matches("button.excluir")){
        let selectedItem = items.getItem(event.target.id); 
        pedido.removeProduto(selectedItem);
        view.listPedido(pedido);
    }

    mostraEsconde();
    
});

function mostraEsconde(){
    let mostrarpedido = document.querySelector("#pedidoList");
    let btnEsconde = document.querySelector("#btnEsconde");
    let btnmostra = document.querySelector("#btnMostra");

    if(event.target.matches("button.mostrar") || event.target.matches("button.excluir")){
        mostrarpedido.style.display= 'block';
        btnEsconde.style.display= 'block';
        btnmostra.style.display= 'none';

     }else{
        if(event.target.matches("button.esconder")){
            mostrarpedido.style.display= 'none';
            btnEsconde.style.display= 'none';
            btnmostra.style.display= 'block';

        }
        
    }
}


/*
 * Funções auxiliares
 */
function loadMenuCategories(){
    //pegar a lista de categorias no modelo
    let catList = categories.list(); //não passo parâmetro, logo lista todos
    //função da view para construir o "cabeçalho" da categorias de menu
    // e detalhar as categorias
    view.createCategories(catList);
}

function loadMenuItems(shortName){
    //atualizar o pedido a partir do storage
    pedido.readFromStorage();
    console.log(pedido);
    //ir no modelo de categorias para pegar o objeto 
    //correspondente ao código da categoria
    let selectedCat = categories.list(shortName);
    //ir no modeloo items para pegar todos os pratos 
    // correspondentes à categoria selecionada
    let selectedDishes = items.list(selectedCat.short_name);
    // criar a tela da categoria selecionada, com
    // todos os pratos da categoria
    view.createDishes(selectedCat, selectedDishes, pedido);
    
}

/*
ATIVIDADE 2
Organize seu CSS para que a apresentação do pedido fique mais interessante
Use sua criatividade!
- Tópicos importantes:
  >> aprimorar os elementos HTML que são renderizados no pedido
  a partir da view
  >> criar regras CSS para exibir/ocultar o pedido
  >> criar uma moldura para pedido que acompanhe todas as telas
  >> detalhar o preço e a quantidade de cada item pedido
*/