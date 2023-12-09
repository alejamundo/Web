function calcular() {
    const a=document.getElementById("a").value;
    const p=document.getElementById("p").value;
    var result=document.getElementById("result");

    result.textContent=a-p;
}