for (var x = 0; x <= 10; x++) {
    if (x === 2 || x === 4) {
        continue; /*When the condition is matched It will continue   */
    }
    else {
        console.log(x);
    }
}
for (var x = 0; x <= 10; x++) {
    if (x % 2 === 0 || x === 4) {
        continue; /*When the condition is matched It will continue   */
    }
    else {
        console.log(x);
    }
}