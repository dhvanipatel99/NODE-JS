//function calculate(x,y,op){
    console.log("1.Addition\n 2.Subtraction\n 3.Multiplication\n 4.Division\n 5.Modulus\n 6.Regex\n 7.Exit\n ENTER THE NUMBER OF OPERATION WHICH YOU WANT TO PERFORM");
/*if(op == '1'){
    return x + y;
}
else if(op == '2'){
    return x - y;
}
else if(op == '3'){
    return x * y;
}
else if(op == '4'){
    return x / y;
}
else if(op =='5'){
    return x % y;
}
else{
    return exit;
}
console.log("Enter the number");
}*/
//var output = calculate(Number(process.argv[3]),Number(process.argv[4]),Number(process.argv[2]));
//console.log(output);


//var val=console.log(process.argv[2]);
//const operation = require('./operation.js');
//console.log(operation.add(parseInt(process.argv[2]),parseInt(process.argv[3])));
//console.log(operation.sub(parseInt(process.argv[2]),parseInt(process.argv[3])));

const operation = require('./operation.js');
console.log(operation.add(parseInt(process.argv[2]),parseInt(process.argv[3])));
console.log(operation.sub(parseInt(process.argv[2]),parseInt(process.argv[3])));
console.log(operation.mul(parseInt(process.argv[2]),parseInt(process.argv[3])));
console.log(operation.div(parseInt(process.argv[2]),parseInt(process.argv[3])));
console.log(operation.mod(parseInt(process.argv[2]),parseInt(process.argv[3])));


//console.log(operation.add(5,6));