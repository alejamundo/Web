function calcular() {
    const salario=document.getElementById("salario");
    const result=document.getElementById("result");
    //primero saco el 25 % de su anterior sueldo
    let incremento=salario.value*0.25;
    let nuevosalario=(salario.value*1+incremento)
    result.innerHTML=nuevosalario;

}