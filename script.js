let kk=document.getElementById("c5");
function clp() {
    setTimeout(()=>{
    var p = parseFloat(document.getElementById("c1").value);
    var r = parseFloat(document.getElementById("c2").value);
    var n = parseFloat(document.getElementById("c3").value);
    var t = parseFloat(document.getElementById("c4").value);
    var a = (1 + (r / n));
    var c = (n * t);
    var mul = 1;
    var k = 1;
    while (mul <= c) {
        k *= a;
        mul++;
    }
    gg=p*k;
    kk.innerText=`${gg}`;
    },100);
    

}
