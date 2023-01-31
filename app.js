
let v = [];

alert("Ingrese tres numeros");
v.push(Number(prompt("Ingrese el #1:")));
v.push(Number(prompt("Ingrese el #2:")));
v.push(Number(prompt("Ingrese el #3:")));
console.log(v);

if(v[0]===v[1] && v[1]===v[2] && v[0]===v[1]){
    alert("Los valores ingresados, son los mismo numeros");
}else{
    alert(`Valor inicial: ${v[0]}`);
    alert(`Valor central: ${v[1]}`);
    alert(`Valor final: ${v[2]}`);
    alert(`Valores en orden ascendente: ${v.sort()}`);
    alert(`Valores en orden descendente: ${v.sort().reverse()}`);
}