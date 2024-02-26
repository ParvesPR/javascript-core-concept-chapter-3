var x = 0;
while (x < 10) {
    // console.log('Parves');
    x++
}
// RANDOM NUMBER GENERATE AND MATCH
var isRunning = true;
while (isRunning) {
    var ran = (Math.round(Math.random() * 10 + 1));
    if (ran === 9) {
        console.log('Got ' + ran + ' & Random number match');
        isRunning = false;
    }
    else {
        console.log('Got ' + ran + ' and did not match');
    }
}
