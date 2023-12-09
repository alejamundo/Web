function calcular() {
    const lleno = document.getElementById("lleno");
    //crear vector y llenar
    const vector = new Array(24);
    for (let i = 0; i < vector.length; i++) {
        vector[i] = Math.floor(Math.random() * 100 + 1);
    }

    //mostrar
    var salida = "";
    for (let i = 0; i < vector.length; i++) {
        salida += vector[i] + ", ";
    }
    lleno.textContent = salida;

    //ordenar vector de menor a mayor
    const ordenado = document.getElementById("ordenado");
    for (let i = 0; i < vector.length; i++) {
        for (let j = 0; j < vector.length - i; j++) {
            if (vector[j] > vector[j + 1]) {
            let aux;
                aux = vector[j];
                vector[j] = vector[j + 1];
                vector[j + 1] = aux;
            }
        }
    }
    //imprimo
    salida="";
    for (let i = 0; i < vector.length; i++) {
        salida += vector[i] + ", ";
    }
    ordenado.textContent = salida;

    //encontrar el numero menor y el mayor
    var menor = 100;
    var mayor = 0;
    var suma=0;
    var count=0;
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] > mayor) {
            mayor = vector[i];//almaceno el mayor
        } 
        if (vector[i] <menor) {
            menor = vector[i];//almaceno el mayor
        } 
        suma+=vector[i];//suma de todos los datos del vector
        //averigua cuantos numeros son multiplos de 4
        if (vector[i] % 4 == 0) {
           count++; 
        }
    }
    const menorr = document.getElementById("menor");
    const mayorr = document.getElementById("mayor");
    menorr.textContent = menor;
    mayorr.textContent = mayor;
    
    //promedio
    const media=document.getElementById("media");
    media.textContent=(suma/vector.length).toFixed(2);

    //cuantos son los multiplos de 4 del vector
    const m=document.getElementById("m");
    m.textContent=count;
}