
/*
回文字符串：正着反着读都一样，并且从中间分开这个这个字符串，左右两边的子串在内容上是完全对称的
*/

let str = 'jehannahej'

function isPalindrome (str) {
  const len = str.length

  // 只遍历前半部分，判断和后半部分是否相等
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false
    }
  }
  return true
}

console.log(isPalindrome(str))

