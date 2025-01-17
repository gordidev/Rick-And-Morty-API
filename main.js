let page = 1 //Variable pagina
const charactersDiv = document.querySelector("#characters") //Esto carga el div donde van los caracteres
document.addEventListener("DOMContentLoaded", ()=>{ //Esto se ejecuta al terminar de cargar el html
    const pageCounter = document.querySelector("#page") //Obtiene el h1 con el numero de pagina
})

const funcion = () => {//Funcion principal se llama al pulsar el boton de cambiar de pagina
const results = fetch(`https://rickandmortyapi.com/api/character?page=${page}`)//Obtiene los datos de la api

results
    .then(res => res.json())//Parsea la respuesta a json
    .then(data => {
        data.results.forEach(element => {//Recorre todos los caracteres de la api
            charactersDiv.innerHTML += `
            <div id=character>
            <h1>${element.name}</h1>
            <img src=${element.image}></img>
            </div>
            `//Crea una tarjeta con los datos del caracter
            //console.log(element)//Muestra por consola los datos completos del caracter
        });
        //console.log(data)//Muestra por consola la api
    })
    charactersDiv.innerHTML = ``//Reinicia las tarjetas de los caracteres solo se ejecuta una vez por que esta fuera de la funcion
}

const next = () => {//Funcion pagina siguiente
    if(page == 42){//Si la pagina es 42 se ejecuta esto
        page = 1;//Vuelve a la primera pagina
        pageCounter.innerHTML = page;//Recarga el page Counter
        funcion()//Vuelve a llamar a la funcion que se encarga de cargar las tarjetas
    }else{//Si no se cumple lo anterio se ejecuta esto otro
        page++;//Suma 1 a la pagina actual
        funcion()//Vuelve a llamar a la funcion que se encarga de cargar las tarjetas
        pageCounter.innerHTML = page;//Recarga el page Counter
    }
}

const prev = () => {//Funcion pagina anterior
    if(page == 1){//Si la pagina es 1 se ejecuta esto
        page = 42;//Cambia el valor de la pagina por la ultima -> 42
        pageCounter.innerHTML = page;//Reinicia el page Counter
        funcion()//Vuelve a llamar a la funcion que se encarga de cargar las tarjetas
    }else{//Si no se cumple lo anterior se ejecuta esto otro
        page--;//Resta 1 a la pagina
        funcion()//Vuelve a llamar a la funcion que se encarga de cargar las tarjetas
        pageCounter.innerHTML = page;//Reinicia el page Counter
    }
}

funcion()//Llama a la funcion una unica vez