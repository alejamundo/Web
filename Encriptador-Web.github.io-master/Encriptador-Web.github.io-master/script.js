
function encriptar(texto) {
    //separa daca letra
    let arrayLetras = [];

    for (let i = 0; i < texto.length; i++) {
        arrayLetras[i] = texto.charAt(i);
        switch (arrayLetras[i]) {
            case "a":
                arrayLetras[i] = "ai";
                break;
            case "e":
                arrayLetras[i] = "enter";
                break;
            case "i":
                arrayLetras[i] = "imes";
                break;
            case "o":
                arrayLetras[i] = "ober";
                break;
            case "u":
                arrayLetras[i] = "ufat";
                break;
        }
    }
    return arrayLetras.join("");
}

function desencriptar(texto) {
    //encontrar patron y cambiar
    for (let i = 0; i < texto.length; i++) {
        if (texto.includes("ai")) {
            texto = texto.replaceAll("ai", "a")
        } else if (texto.includes("enter")) {
            texto = texto.replaceAll("enter", "e")
        } else if (texto.includes("imes")) {
            texto = texto.replaceAll("imes", "i")
        } else if (texto.includes("ober")) {
            texto = texto.replaceAll("ober", "o")
        } else if (texto.includes("ufat")) {
            texto = texto.replaceAll("ufat", "u")
        }
    }
    return texto
}

function mostrarTexto(texto, tipo) {
    const seccion_mensaje = document.querySelector(".mensaje");
    seccion_mensaje.remove();
    const div = document.createElement("div");
    div.className = "card mensaje";
    seccion_mensaje.appendChild(div);
    div.style.height= '460px';
    div.innerHTML = `
    <img src="./img/encription.webp" class="card-img-top" alt="..." height="150px">
    <div class="card-body" >
        <h5 class="card-title alert alert-success">Mensaje ${tipo}</h5>
        <p class="card-text" id="copiar" >${texto}</p>
    </div>`
    const conten = document.querySelector("[data-section]");
    conten.appendChild(div);
}

function copiarAlPortapapeles() {
    var texto = document.getElementById("copiar");
    var inputFalso = document.createElement("input");
    inputFalso.setAttribute("value", texto.innerHTML);
    document.body.appendChild(inputFalso);
    inputFalso.select();
    document.execCommand("copy");
    document.body.removeChild(inputFalso);
    alert("Copiado al portapapeles!");
    
}

// Dom
//capturar el evento al presionar el boton
document.querySelector("[data-btn-encripta]").addEventListener("click", function (e) {
    // obtener contenido a encriptar o desencriptar
    const texto = document.querySelector("[data-text]");
    if (texto.value === "") {
        alert("Escribe el texto a Encriptar")
    } else {
        const textoEncriptado = encriptar(texto.value.toLowerCase());
        //mostrar texto encriptado.
        mostrarTexto(textoEncriptado, "Encriptado");
        texto.value = "";
    }
});
document.querySelector("[data-btn-desencripta]").addEventListener("click", function (e) {
    const texto = document.querySelector("[data-text]");
    if (texto.value === "") {
        alert("Escribe el texto a Desencriptar")
    } else {
        const textoDesencriptado = desencriptar(texto.value.toLowerCase());
        //mostrar texto encriptado.
        mostrarTexto(textoDesencriptado, "Desencriptado");
        texto.value = "";
    }
});


document.getElementById("boton").addEventListener("click", function () {
    copiarAlPortapapeles();
   
});

