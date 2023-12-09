function calcular() {
    const cantidad=document.getElementById("cantidad");
    const valor=document.getElementById("valor");
    const result=document.getElementById("result");
    result.textContent=cantidad.value*valor.value;
    cantidad.value=" ";
    valor.value=" ";
}