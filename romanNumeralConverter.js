function convertToRoman(num) {
    let romanNum = '';
    const decimalNumArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanNumArr = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
    for (let i = 0; i < decimalNumArr.length; i ++) {
        let counter = (Math.floor(num/decimalNumArr[i]));
        while ((num/ decimalNumArr[i]) >= 1 && counter > 0) {
            romanNum += romanNumArr[i];
            counter --;
        }
        num -= decimalNumArr[i] * (Math.floor(num/decimalNumArr[i]));
    }
    
   
    
    console.log(romanNum)
    //console.log(romanNumArr)
   return romanNum;
}

