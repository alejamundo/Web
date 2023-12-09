function calcular() {
    const n1=Number(document.getElementById("n1").value);
    const n2=Number(document.getElementById("n2").value);
    const n3=Number(document.getElementById("n3").value);
    const media=document.getElementById("media");
    
    media.textContent=(n1+n2+n3)/3;
    //limpiar inputs
    document.getElementById("n1").value=" ";
    document.getElementById("n2").value=" ";
    document.getElementById("n3").value=" ";
}