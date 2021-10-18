window.onload = function () {
    let Texto = '';
     
    receitas.forEach(recipe => {       
        let preparoTexto = '';
        let ingredientesTexto = '';

        recipe.preparo.forEach((preparo) =>{
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(preparo));
            preparoTexto += li.outerHTML;
        })
        recipe.ingredientes.forEach(function(ingrediente){
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(ingrediente));
            ingredientesTexto += li.outerHTML;
        })
    
      Texto += `
      <div>
        <h1>ID: ${recipe.id}</h1>
        <h1>${recipe.nome}</h1>
        <img src ="${recipe.foto}">
        <h3>${recipe.descricao}</h3>
        <h2>Preparo: </h2> <ol>${preparoTexto}</ol>
        <h2>Ingredientes: </h2> <ul>${ingredientesTexto}</ul>
    </div>`;
    });
    document.querySelector('body').innerHTML = Texto;
}