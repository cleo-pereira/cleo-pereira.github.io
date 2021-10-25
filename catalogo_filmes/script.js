const http = new EasyAjax
http.get('https://rafaelescalfoni.github.io/desenv_web/filmes.json', function(status, response){
    if(status){
        console.log(status);
    } else {

        let Texto = '';
        let ages = [];

        const star = document.createElement("img");
        star.setAttribute("src","./img/estrela.png");
        const starHalf = document.createElement("img");
        starHalf.setAttribute("src","./img/meiaestrela.png");

        response.forEach(data => {
            const showRating = document.createElement("div");
            let castTexto = '<h3>Elenco</h3>';
            let generosTexto = '<h3>Gênero</h3>';
            let similarTexto = '<h3>Similares</h3>';
            let opinioesTexto = '';
            let media = 0;

            function eachForLoops() 
                {data.elenco.forEach(cast => {
                    const li = document.createElement("li");
                    li.appendChild(document.createTextNode(cast));
                    castTexto += li.outerHTML;
                });

                data.generos.forEach(genre => {
                    const li = document.createElement("li");
                    li.appendChild(document.createTextNode(genre));
                    generosTexto += li.outerHTML;
                });

                data.opinioes.forEach((opinion, k) => {
                    const starDiv = document.createElement("div");
                    starDiv.className = 'rating'
                    const span = document.createElement("span");
                    span.appendChild(document.createTextNode(opinion.descricao));
                    for(let i=0;i<opinion.rating;i++){
                        starDiv.appendChild(star.cloneNode(true)); 
                    }
                    media = (media + opinion.rating)/(k + 1);
                    span.appendChild(starDiv);
                    opinioesTexto += span.outerHTML;
                });

                data.titulosSemelhantes.forEach((similar, k) => {
                    response.forEach(test => {
                        if(test.id == similar) {
                            const li = document.createElement("li");
                            li.appendChild(document.createTextNode(test.titulo));
                            similarTexto += li.outerHTML;
                        }
                    });
                });

                for(let i = 0; i < media; i++){
                if(media % 1 !== 0 && i+1 >= media){
                    showRating.appendChild(starHalf.cloneNode(true));
                    break;
                }
                showRating.className = 'showRating';
                showRating.appendChild(star.cloneNode(true)); 
                }
            } eachForLoops();

            Texto += `<div class="card">
            <div class="movie">
                <div class="imageContainer">
                    <img src=${data.figura}>
                </div>
            <div class="description">
                <h2>${data.titulo}</h2>
                ${showRating.outerHTML}
                <h4>${data.resumo}</h4>
                
                <hr> 
                
                <div class="showInfo">
                <div class="cast">
                    <ul>
                        ${castTexto}
                    </ul>
                </div>
                <div class="similar">
                    <ul>
                        ${similarTexto}
                    </ul>
                </div>
                <div class ="genrers">
                    <ul>
                        ${generosTexto}
                    </ul>
                </div>
                <div class="reviews">
                ${opinioesTexto}
                </div>
            </div>
            </div>
            </div>
        </div>`; 

        document.querySelector('.movies').innerHTML = Texto;

        ages.push(data.classificacao);
        });
        const movie = document.querySelectorAll('.movie');
            movie.forEach((element,k) => {
                if(ages[k] == 0){
                    element.dataset.content = '\u00a0L';
                    console.log('h1')
                } else element.dataset.content = ages[k];

                if (ages[k] <= 14) element.classList.toggle('green');
                else if(ages[k] < 18) {
                    element.classList.toggle('yellow');
                    element.style.color='black'
                }
                else if (ages[k] = 18) element.classList.toggle('red');
                
            });
    }
});