function convertir() {
    const min=document.getElementById("min").value;
    var result=document.getElementById("result");
    if (min>0) {
        const hora=Math.floor(min/60);
        const min_rest=min%60;
        result.textContent=hora+' horas y '+min_rest+" minutos";
    }else{
        result.textContent='Ingrese minutos mayores a 0';
    }
    document.getElementById("min").value=" ";
}