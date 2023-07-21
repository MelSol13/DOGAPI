async function mostrarPerrito1() {
    var respuesta = await fetch('https://dog.ceo/api/breeds/image/random');
    //console.log(respuesta);
    var data = await respuesta.json();
    //console.log(data);
    //console.log(data['message']);
    var imagen_perrito = `<img alt="perrito" src="${data['message']}">`;
    //<img alt="perrito" src"="https://dog.ceo/api/breeds/image/random">
    document.querySelector('.contenedorPerrito').innerHTML = imagen_perrito;
}

function mostrarPerrito2() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(respuesta => respuesta.json())
    .then(data => {
        var imagen_perrito = `<img alt="perrito" src="${data['message']}">`;
        document.querySelector('.contenedorPerrito').innerHTML = imagen_perrito;
    })
}

//function nuevaFunction(variable)