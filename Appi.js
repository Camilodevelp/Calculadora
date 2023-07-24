let mostrar_noticias = document.getElementById("Articulo")

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  console.log(getRandomInt(0, 20));

// c4e05b0bbf81466ca948c679ffe39007

fetch("https://newsapi.org/v2/top-headlines?country=mx&apiKey=c4e05b0bbf81466ca948c679ffe39007")
.then((response) =>{return response.json()})
.then((res) =>{
    let listaNoticias =(res.articles);
    console.log(listaNoticias)
    let numeroNoticia = getRandomInt(0, listaNoticias.length)
    let noticiaSeleccionada = listaNoticias[numeroNoticia]
    let titulo = noticiaSeleccionada.title
    let mensaje = document.getElementById("Articulo")
    mensaje.innerHTML = titulo
    
    
});
