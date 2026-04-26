function ops(){
    let val = document.getElementById("org").value;

    let rev = "";
    for(let i=val.length - 1; i>=0; i--){
        rev += val[i];
    }
    document.getElementById("reverse").textContent = rev;
    document.getElementById("length").textContent = val.length;
    document.getElementById("lower").textContent = val.toLowerCase();
    document.getElementById("upper").textContent = val.toUpperCase();
}