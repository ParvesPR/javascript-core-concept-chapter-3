while (true) {
    var ran = Math.round(Math.random() * 10 + 1)
    if (ran === 9) {
        console.log('Got ' + ran + ' and match'); /* Generate a random number between 0 and 9 */
        break; /* Exit the loop if the random number matches */
    } else {
        console.log('Got ' + ran + ' did not match');
    }
}