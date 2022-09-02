function rot13(str) {
    const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let decodedStr = '';

    for (var i = 0; i < str.length; i++) {
        if (alphabet.indexOf(str[i]) == -1) {
            decodedStr += str[i];
        } else if (alphabet.indexOf(str[i]) == 0) {
            decodedStr += ' '
        } else if (alphabet.indexOf(str[i]) + 13 >= 27) {
            decodedStr += alphabet[alphabet.indexOf(str[i]) + 13 - 26];
        } else if (alphabet.indexOf(str[i]) + 13 < 27) {
            decodedStr += alphabet[alphabet.indexOf(str[i]) + 13];
        }


    }
    console.log(decodedStr)
    return decodedStr;
}
