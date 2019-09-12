let maxFrequencyLetter = (str, caseSensitive = false) => {
    !caseSensitive && (str = str.toLocaleLowerCase());
    let data = str.replace(/\W/g, '').split('');
    let maxCount = 0;
    let maxLetter = '';
    let lettersCounter = {};
    data.forEach(letter => {
        lettersCounter[letter] = (lettersCounter[letter] || 0 ) + 1;
        if(lettersCounter[letter] > maxCount) {
            maxCount = lettersCounter[letter];
            maxLetter = letter;
        }
    });
    return maxLetter;
};



console.log(maxFrequencyLetter('gfdfksflsdl sd sdpfsdkfs sgsf.sd,fs,fsfssfsdfsdfsd'));
