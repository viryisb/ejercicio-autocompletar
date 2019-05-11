//1 en el input, agregar el onkeyup
//2 obtener lo que escribimos en el input
// 3 generar la url
//https://api.themoviedb.org/3/search/movie?api_key=a70dbfe19b800809dfdd3e89e8532c9e&query=acá va lo que le pedimos en el input
//fetch () - devuelve una promesa/promise
// 4.1 - res.json
// 4.2 - hacer un for por todas las peliculas
// 4.3 - por cada pelicula que estamos iterando, creamos el LI
// 4.4agregar el LI que creamos dentro del UL 

 
const input= document.getElementById('autocomplete-input');
input.onkeyup=function () {
    const search= input.value
   
fetch ('https://api.themoviedb.org/3/search/movie?api_key=a70dbfe19b800809dfdd3e89e8532c9e&query='+search)
.then(res => res.json())
.then(data => {
    const ul = document.querySelector('ul#autocomplete-results');
    let lis = '';
    for (let i = 0; i < data.results.length; i++) {
        lis += `
          <li>
            ${data.results[i].title}
           </li>
           `;
          
    }

ul.innerHTML = lis;
})}
