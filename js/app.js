function ejercicio1(){
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiempre", "Octubre", "Noviembre", "Diciembre"];
    document.getElementById("ejercicio1paragraph").innerHTML = `<h1>Lista de Meses</h1>
        <ul>`;
    meses.forEach(mes => {
        document.getElementById("ejercicio1paragraph").innerHTML += `<li>${mes}<br></li>`;
    });
    document.getElementById("ejercicio1paragraph").innerHTML += `</ul>`;
}

function ejercicio2(){
    let paises = [];
    let opc = true;
    let pais;
    do {
        let pais = prompt("Ingrese un país");
        opc = confirm("¿Agregar país?");
        paises.push(pais)
    } while (opc);
    //Añade en última posición la ciudad de París.
    paises.push("París");
    //Mostrar la longitud del arreglo.
    document.getElementById("ejercicio2paragraph").innerHTML = (`El arreglo de ciudades tiene ${paises.length} elementos`);
    //Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
    if(paises.length > 0){
        document.getElementById("ejercicio2paragraph").innerHTML += (`<p>Elemento 1ra posición: ${paises[0]}</p>`);
        if(paises.length > 2){
            document.getElementById("ejercicio2paragraph").innerHTML += (`<p>Elemento 3ra posición: ${paises[2]}</p>`);
            document.getElementById("ejercicio2paragraph").innerHTML += (`<p>Elemento última posición: ${paises[paises.length - 1]}</p>`);
        }
    }else{
        document.getElementById("ejercicio2paragraph").innerHTML += (`no hay paises que mostrar`);
    }
    //Escribe por pantalla el elemento que ocupa la segunda posición.

    //Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
    document.getElementById("ejercicio2paragraph").innerHTML += (`<h2>Arreglo de ciudades</h2><ul>`);
    paises.forEach(pais => {
        document.getElementById("ejercicio2paragraph").innerHTML += (`<li>${pais}</li>`);
    });
    document.getElementById("ejercicio2paragraph").innerHTML += (`</ul>`)
}

function ejercicio3(){
    let resultados =[];

    function lanzarDados(){
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;
        return dado1 + dado2;
    }
    
    function lanzarDadosNVeces(n){
        for(let i = 0; i < n; i++){
            resultados.push(lanzarDados());
        }
    }

    function contarOcurrencias(arr,n){
        let ocurrencias = 0;
        arr.forEach(element => {
            if(element === n){ocurrencias++};
        });
        return ocurrencias;
    }
    
    function graficarResultados(arr){
        let html_partial = (`<table class="table table-striped-columns">
            <thead>
                <tr>
                    <td>Suma🎲🎲</td>
                    <td>Apariciones</td>
                </tr>
            </thead>
            <tbody>`);
        for (let i = 2; i <= 12; i++) {
            html_partial += (`<tr>`);
            html_partial += (`<td>${i}</td>`);
            html_partial += (`<td>${contarOcurrencias(arr, i)}</td>`);
            html_partial += (`</tr>`);
            }
        html_partial += (`</tbody>
            </table>`);
        document.getElementById("ejercicio3paragraph").innerHTML = html_partial;
    }
    
    lanzarDadosNVeces(500);
    graficarResultados(resultados);
    console.log(resultados);

}

function ejercicio4(){
    let numero = parseInt(prompt("Ingrese un número"));
    esPar(numero)

    function esPar(numero){
        if(numero % 2 === 0){
            document.write(`${numero} es par`);
        }else{
            document.write(`${numero} no es par`);
        }
    }
}

function ejercicio5(){
    let cadena = prompt("Ingrese un cadena");
    mayusculas(cadena);
    function mayusculas(cadena){
        if(cadena === cadena.toUpperCase()){
            document.write(`"${cadena}" está formada sólo por letras mayúsculas.`)
        } else if(cadena === cadena.toLowerCase()){
            document.write(`"${cadena}" está formada sólo por letras minúsculas.`)
        }else{
            document.write(`"${cadena}" está formada por una mezcla de mayúsculas y minúsculas.`);
        }
    }
}

function ejercicio6(){
    let ladoA = parseInt(prompt("Ingrese el lado de un rectángulo"));
    let ladoB = parseInt(prompt("Ingrese el otro lado de un rectángulo"));
    document.write(`El perimétro del rectángulo es ${perimetro(ladoA, ladoB)}`);
    function perimetro(base, altura){
        return 2 * (base + altura);
    }
}

function ejercicio7(){
    let multiplicando = parseInt(prompt("Ingrese un número para obtener su tabla de multiplicación"));
    tablaMultiplicacion(multiplicando);
    function tablaMultiplicacion(multiplicando){
        let html_partial = (`<table class="table table-striped-columns">
                <tbody>`);
            for (let i = 1; i <= 10; i++) {
                html_partial += (`<tr>`);
                html_partial += (`<td>${multiplicando} X ${i}</td>`);
                html_partial += (`<td>${multiplicando * i}</td>`);
                html_partial += (`</tr>`);
                }
            html_partial += (`</tbody>
                </table>`);
            document.getElementById("ejercicio7paragraph").innerHTML = html_partial;
    }
}
