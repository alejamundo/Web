function calcular() {
    const horas=document.getElementById("hour");
    const result =document.getElementById("result");
    result.textContent=horas.value*3600 +" segundos";
    horas.value=" ";
}