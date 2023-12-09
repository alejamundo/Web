function calcular() {
    const v=document.getElementById("v");
    const i=document.getElementById("i");
    var result=document.getElementById("result");
    result.textContent=v.value *i.value+" W";
    v.value=" ";
    i.value=" ";
}