for (; ;) {
    var ran = (Math.round(Math.random() * 10 + 1));
    if (ran === 9) {
        console.log('Got ' + ran + ' & Random number match');
        break; /* Exit the loop when met condition */
        //  Without a break statement, it will be an infinity loop
    }
    else {
        console.log('Got ' + ran + ' and did not match');
    }
}