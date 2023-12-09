function calcular() {
    const precio=document.getElementById("precio");
    const cantidad=document.getElementById("cantidad");
    var result=document.getElementById("result");
    result.textContent=precio.value *cantidad.value;
    precio.value=" ";
    cantidad.value=" ";
}