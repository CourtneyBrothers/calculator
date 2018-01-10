let field1 = document.getElementById("num1");
let field2 = document.getElementById("num2");
let output = document.getElementById("output")

document.getElementById("btn1").addEventListener("click", ()=>{ 
    let field1 = parseInt(document.getElementById("num1").value);
    let field2 = parseInt(document.getElementById("num2").value); 
    let output = document.getElementById("output");

    output.innerHTML = parseInt(field1+field2);
});
