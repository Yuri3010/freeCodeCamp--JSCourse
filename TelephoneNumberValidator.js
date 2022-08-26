function telephoneCheck(str) {
    let pattern = /^((?:[+]1[\s-]|1[\s-]|[1]))?(((?:[(]\d\d\d?[)][\s-]|[(]\d\d\d?[)]|\d\d\d[\s-]|\d\d\d))){2}?((?:\d\d\d[\s-]))?((?:\d\d\d\d)){1}$/;

    return pattern.test(str);
}


