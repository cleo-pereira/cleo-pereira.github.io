import dataset from '../model/dataset.js';
import foods from '../model/foods.js';
import view from '../view/indexView.js';

window.onload = () => {
    const foodList = foods.listFood(dataset);
    const formFood = document.getElementById("formFood");
    formFood.addEventListener("submit", saveFood);
    const btRecarregar = document.getElementById("recarregar");
    btRecarregar.onclick = reload;
    view.createItems(foodList);
}

function reload() {
    const foodList = foods.restart(dataset);
    view.createItems(foodList);
}

function saveFood(event) {
    event.preventDefault();
    const newFood = view.save();
    const foodList = foods.create(newFood);
    view.createItems(foodList);

}

document.addEventListener("click", (event) =>{
    if(event.target.matches("#menu .edit img")){
        let foodId = parseInt(event.target.parentNode.parentNode.id.substr(5));
        const newFood = view.save();
        if(newFood.name == "" || newFood.image == "") {
            if(newFood.name == "hi") {
                alert("vc podia ter me pedido ajuda antes :/")
            }
            else alert("Preencha os campos antes de editar.")
        }
        else foods.update(foodId, newFood)
    }
    if(event.target && 
        (event.target.matches("#menu img")
            || event.target.matches("#menu figcaption")
        )
    ) {
        let childFood = event.target;
        let figureFood = childFood.parentNode;
        let foodId = figureFood.id.substr(5);
        foods.destroy(foodId);

        view.createItems(foods.listFood(dataset));
    }
    
})

