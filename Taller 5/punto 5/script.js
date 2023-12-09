function calcular() {
    const t=document.getElementById("t").value;
    var result=document.getElementById("result");
    result.textContent=(1/t);
    document.getElementById("t").value="";
}