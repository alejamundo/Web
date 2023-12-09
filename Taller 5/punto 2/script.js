function calcular() {
    const x = document.getElementById("x").value;
    const m = document.getElementById("m").value;
    const d = document.getElementById("d").value;
    var result = document.getElementById("result");
    
    if (d) {
        result.textContent = "Norma estándar: " + (x - m) / d
    } else {
        result.textContent = "La desviacion estándar no puede ser cero"
    }
    document.getElementById("x").value=" ";
    document.getElementById("m").value=" ";
    document.getElementById("d").value=" ";

}