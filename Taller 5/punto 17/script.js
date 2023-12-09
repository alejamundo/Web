function calcular(e) {
    const lleno = document.getElementById("lleno");
    //crear Matriz
    const matriz = new Array(5);//5 filas
    for (let i = 0; i < matriz.length; i++) {
        matriz[i] = new Array(6);//6 columnas
    }
    //llenar matriz
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            matriz[i][j] = Math.floor(Math.random() * 100 + 1);
        }
    }
    //mostrar
    lleno.textContent = mostrar(matriz);
    //ordenar vector de menor a mayor
    const ordenado = document.getElementById("ordenado");
    matriz.forEach(fila => {
        fila.sort((a, b) => a - b);
    });
    matriz.sort((fila1, fila2) => fila1[0] - fila2[0]);
    //imprimo
    ordenado.textContent =mostrar(matriz);
    //encontrar el numero menor y el mayor
    var menor = 100;
    var mayor = 0;
    var suma = 0;
    var count = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            if (matriz[i][j] > mayor) {
                mayor = matriz[i][j];//almaceno el mayor
            }
            if (matriz[i][j] < menor) {
                menor = matriz[i][j];//almaceno el mayor
            }
            suma += matriz[i][j];//suma de todos los datos del vector
            //averigua cuantos numeros son multiplos de 4
            if (matriz[i][j] % 2 == 0) {
                count++;
            }
        }

    }
    const menorr = document.getElementById("menor");
    const mayorr = document.getElementById("mayor");
    menorr.textContent = menor;
    mayorr.textContent = mayor;

    //promedio
    const media = document.getElementById("media");
    media.textContent = (suma / 30).toFixed(2);

    //cuantos son los multiplos de 4 del vector
    const m = document.getElementById("m");
    m.textContent = count;

    //desabilitar boton para poder trabajar con los datos ya establecidos
    document.getElementById("btn").disabled = true;
    modificar(matriz);
}

//metodo para mostrar
function mostrar(matriz) {
    //mostrar
    var salida = "";
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            salida += matriz[i][j] + ", ";
        }
        salida += "\n";
    }
    return salida;
}

//metodo para modificar un dato dadas las posiciones
function modificar(matriz) {

    // creo campos para pedir dato
    const label1 = document.createElement('label');
    label1.textContent = 'Modifica un dato ingresando su posición';
    const br = document.createElement("br");

    //ingreso de pocisiones y dato
    const label2 = document.createElement('label');
    label2.textContent = 'Ingresa la posición de la Fila: (0-4)';
    const input1 = document.createElement('input');
    input1.setAttribute('type', 'number');
    input1.setAttribute('id', 'fila');
    const br1 = document.createElement("br");

    const label3 = document.createElement('label');
    label3.textContent = 'Ingresa la posición de la Columna: (0-5)';
    const input2 = document.createElement('input');
    input2.setAttribute('type', 'number');
    input2.setAttribute('id', 'colum');
    const br2 = document.createElement("br");

    const label4 = document.createElement('label');
    label4.textContent = 'Ingresa el Dato: ';
    const input3 = document.createElement('input');
    input3.setAttribute('type', 'number');
    input3.setAttribute('id', 'dato');

    const btn = document.createElement("button");
    btn.innerHTML = "Modificar Dato"

    const label5 = document.createElement('label');
    const br3 = document.createElement("br");

    //evento btn
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        const row = parseInt(document.getElementById("fila").value);
        const col = parseInt(document.getElementById("colum").value);
        const dat = document.getElementById("dato").value;
        const lleno=document.getElementById("lleno");
        const orden=document.getElementById("ordenado");
        
        //modificar el dato con esas referncias
        if (row >= 0 && row < matriz.length && col >= 0 && col < matriz[row].length) {
            // Modificar el valor en la matriz
            if (dat=="") {
                matriz[row][col] = 0; 
            }else{
                matriz[row][col] = dat;
            }
           
            lleno.textContent=mostrar(matriz);
            orden.textContent=mostrar(matriz);
            label5.textContent="Dato Modificado "
        } else {
            // Mostrar un mensaje de error si las posiciones son inválidas
            label5.textContent='Posiciones inválidas';
        }
        //limpio campos
        row.value=" ";
        col.value=" ";
        dat.value=" ";

    });
    //crear boton cambiar

    //Agregar elementos al DOM
    const contenedor = document.getElementById("contenedor");
    contenedor.appendChild(label1);
    contenedor.appendChild(br);
    contenedor.appendChild(label2);
    contenedor.appendChild(input1);
    contenedor.appendChild(br1);
    contenedor.appendChild(label3);
    contenedor.appendChild(input2);
    contenedor.appendChild(br2);
    contenedor.appendChild(label4);
    contenedor.appendChild(input3);
    contenedor.appendChild(btn);
    contenedor.appendChild(br3);
    contenedor.appendChild(label5);
}