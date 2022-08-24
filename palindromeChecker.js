

function palindrome(str) {
  const newStr = str.replace(/[^a-z0-9]/gi, '');
  const newStrArr = newStr.toLowerCase().split('');
  const palindromeArr =[];

  /* You can use the reverse() java script function for this purpouse.
  const palindromeArr = newStrArr.reverse();*/

  for (let i = (newStrArr.length - 1); i >= 0; --i) {
    palindromeArr.push(newStrArr[i]);
  }
  
  const arrEquality = (a, b) => {
    if (a.length == b.length) {
      for (let j = 0; j < a.length; j ++) {
        if (a[j] === b[j]) {continue}
        else {return false}
      } return true;
    }
  }
  console.log(palindromeArr)
  console.log(newStrArr)
  return arrEquality(newStrArr, palindromeArr);
  
}
  


console.log(palindrome("A man, a plan, a canal. Panama"));
