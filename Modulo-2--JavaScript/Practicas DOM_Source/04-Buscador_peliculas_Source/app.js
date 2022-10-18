const formBusqueda = document.querySelector("#form-busqueda");
const inputNamne = document.querySelector("#inputName");
const inputModel = document.querySelector("#inputModel");
const inputMovie = document.querySelector("#inputMovie");

const content = document.querySelector("#box-transformers");

const datosBusqueda ={
    nombre:"",
    modelo:"",
    pelicula:""
}

document.addEventListener("DOMContentLoaded", ()=>{
    mostrarHTML(transformers);
});


// necesitamos recorer el array de objetos y mostrarlos en el html
function mostrarHTML(transformers){

    transformers.forEach(transformer => {

        const {modelo, nombre, peliculaId, peliculaName, descripcion, image} = transformer
        
        const cardTransformer = document.createElement("div");
        cardTransformer.classList.add("col", "mb-3");

        cardTransformer.innerHTML = `
            <div class="card bg-secondary flex-row rounded-3">
                <div class="w-50">
                    <img src="${image}" class="img-fluid object-fit" alt="">
                </div>
                <div class="card-body w-50">
                    <h5 class="card-title"></h5>
                    <h2 class="card-text mb-0 text-capitalize"><span>${nombre}</span>.</h2>
                    <p class="card-text mb-3 text-capitalize"><span>${modelo}</span>.</p>
                    <p class="card-text mb-3 text-capitalize"><b>Primera Aparición:</b> <span>${peliculaName}</span>.</p>
                    <p class="card-text mb-0"><b>Descripción:</b><br> <span>${descripcion}</span></p>
                </div>
            </div>    `;

        content.appendChild(cardTransformer);
        

    });
}

// crear el evento de envío del formulario

formBusqueda.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    datosBusqueda.nombre = inputName.value.toLowerCase();
    datosBusqueda.modelo = inputModel.value;
    datosBusqueda.pelicula = inputMovie.value;

    console.log("datos del formulario",datosBusqueda);

    const resultado = filtrarDatos(transformers);
    console.log("resultado proveniente del filtro", resultado);


    formBusqueda.reset();

})

// filtrar los datos

function filtrarDatos(transformers){
    const resultado = transformers.filter(transformer => transformer.nombre === datosBusqueda.nombre);
    return resultado;
}