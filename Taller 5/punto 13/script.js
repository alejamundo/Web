function calcular() {
    const monto = document.getElementById("monto");
    const g = document.getElementById("g");
    const t = document.getElementById("t");
    const p = document.getElementById("p");
    const total = document.getElementById("total");
    //saco los porcentajes
    const label=[g,t,p];
    for (let i = 0; i < label.length; i++) {
        label[0].textContent = monto.value * 0.4;
        label[i].textContent = monto.value * 0.3;
    }
    total.textContent=monto.value;
    monto.value=" ";
}