function calcular() {
    const w=document.getElementById("w");
    const t=document.getElementById("t");
    const result=document.getElementById("result");
    result.textContent=w.value/t.value+" Newtons"

    w.value=" ";
    t.value=" ";
}