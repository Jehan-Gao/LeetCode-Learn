// 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。


var s = 'abca'

function validPalindrome (s) {
  const len = s.length

  let i = 0
  let j = len - 1

  // 创建双指针，判断左右两个指针指向的元素是否相等，相等的话，继续移动指针
  while (i<j&&s[i]===s[j]) {
    i++
    j--
  }

  // 如果跳过(删除)做左指针元素后，字符串是否是回文字符串
  if (isPalindrome(i+1, j)) {
    return true
  } 

  // 如果跳过(删除)右指针元素后，字符串是否是回文字符串
  if (isPalindrome(i, j-1)) {
    return true
  }

  function isPalindrome (left, right) {
    // 当左指针 小于 右指针的话，继续对比的操作
    while (left<right) {
      // 如果左右两边不相等，则认为肯定不是回文字符串
      if (s[left] !== s[right]) {
        return false
      }
      // 否则，继续移动指针，直至两个指针相等
      left++
      right--
    }
    // 如果left === right 表示两个指针指向的是同一个元素，单字符串是回文字符串
    return true
  }

  // 默认返回false
  return false
}


console.log(validPalindrome(s))