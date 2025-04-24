let nome = 'Thiago';
console.log(nome);
console.log('resultado 1',(7 != 7) && (2 > 3));
console.log('resultado 2',(2 == 5) && (7 < 5));
console.log('resultado 3',(3 >= 1) && (10 < 2));
console.log('resultado 4',(5 == 5) && (2 == 2));
let saldo = parseInt(prompt("digite seu saldo:"));
if(saldo >= 50000){
    console.log('saldo surpreendente');
}if(saldo >= 5000 && saldo < 50000 ){
    console.log('saldo excelente');
}if(saldo >= 1000 && saldo < 5000){
    console.log('saldo bom');
}if(saldo <1000) {
    console.log('saldo baixo');
}