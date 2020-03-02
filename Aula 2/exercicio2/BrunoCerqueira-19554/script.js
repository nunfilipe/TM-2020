var numbers=[];
function adicionarNumero() {
    let value = document.getElementById("number").value;
    numbers.push(parseInt(value));
    document.getElementById("valueInput").innerHTML = numbers.toString();
    document.getElementById("number").value = '';
    document.getElementById("calculate").disabled = numbers.length < 5;
}

function calculate() {
    var biggestNumber = Math.max.apply(Math, numbers);
    document.getElementById("maiorInput").innerText = biggestNumber;
}