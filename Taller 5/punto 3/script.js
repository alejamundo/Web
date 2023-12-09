function Convertir() {
    const c = document.getElementById("c").value;
    var f = document.getElementById("result");
    f.textContent = c + " grados Celsius (°C) equivalen a " + ((c * 1.8) + 32) + " Grados Fahrenheit (°F)";
    document.getElementById("c").value=" ";
} 