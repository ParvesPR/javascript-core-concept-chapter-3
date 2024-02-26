/* NESTED LOOP
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/
var n = 5;
for (var x = 1; x <= n; x++) {
    var result = ''
    for (var y = 1; y <= x; y++) {
        result += y + ' ';
        console.log(result);
    }
}
