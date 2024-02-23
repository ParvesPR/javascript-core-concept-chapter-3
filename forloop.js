for (var x = 0; x < 100; x++) {
    console.log(x + 1, 'Parves');
}
//PRINT ODD NUMBER BETWEEN 1 TO 100
for (var x = 0; x <= 100; x++) {
    if (x % 2 === 1) {
        console.log(x);
    }
}
//PRINT EVEN NUMBER BETWEEN 1 TO 100
for (var x = 0; x <= 100; x++) {
    if (x % 2 === 0) {
        console.log(x);
    }
}
// SUMMATION
var sum = 0;
for (var x = 0; x <= 10; x++) {
    sum += x;
    console.log(sum);
}
var sum = 0;
for (var x = 1; x <= 10; x++) {
    console.log(sum + ' +', x + ' = ' + (sum + x));
    sum += x;
}
// ODD NUMBER SUMMATION BETWEEN 1 TO 10
var sum = 1;
for (var x = 0; x <= 10; x++) {
    if (x % 2 === 0) {
        console.log(sum + ' +', x + ' = ' + (sum + x));
        sum += x;
    }
}
console.log('Result ' + sum);

// EVEN NUMBER SUMMATION BETWEEN 1 TO 10
var sum = 0;
for (var x = 0; x <= 10; x++) {
    if (x % 2 === 0) {
        console.log(sum + ' +', x + ' = ' + (sum + x));
        sum += x;
    }

}
console.log('Result ' + sum);