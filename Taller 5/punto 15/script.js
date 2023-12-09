function calcular() {
    //primero saco el mcd de a y b
    const a = document.getElementById("a");
    const b = document.getElementById("b");
    const c = document.getElementById("c");
    const d= document.getElementById("d");
    function mcd(a, b) {
        let temporal; //Para no perder b
        while (b !== 0) {
            temporal = b;
            b = a % b;
            a = temporal;
        }
        return a;//mcd de a y b
    }
    var mcd1=mcd(a.value,b.value);
    var mcd2=mcd(c.value,d.value);
    //evaluo los valores finales de cada par
    var mcd12=mcd(mcd1,mcd2);

    const mcdd=document.getElementById("mcd");
    mcdd.textContent=mcd12;

    a.value=" ";
    b.value=" ";
    c.value=" ";
    d.value=" ";
}