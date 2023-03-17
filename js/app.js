function ejercicio1(){
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiempre", "Octubre", "Noviembre", "Diciembre"];
    meses.forEach(mes => {
        document.write(`${mes}<br>`);
    });
}

function ejercicio2(){;
    let paises = []
    let opc = true;
    let pais;
    do {
        let pais = prompt("Ingrese un país");
        opc = confirm("¿Agregar país?");
        paises.push(pais)
    } while (opc);
    paises.forEach(pais => {
        document.write(` ${pais} <br>`);
    });
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
        /* document.write(`<table class="table table-striped-columns">
	    <tbody>`);
        for (let i = 2; i <= 12; i++) {
            document.write(`<tr>`);//dibuja fila
            document.write(`<td>${i}</td>`);
            document.write(`<td>${contarOcurrencias(arr, i)}</td>`);
            document.write(`</tr>`);
        }
        document.write(`</tbody>
        </table>`); */
        let html_partial = (`<table class="table table-striped-columns">
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

