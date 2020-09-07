

// 三个数相加为0 

let nums = [2, 4, 3, -1, -1, 10, 5, 5, -10]


function threeSum (nums) {
  // 首先从小到大排好顺序
  nums = nums.sort((a, b) => a - b)

  let res = []
  let len = nums.length

  // 这里只需要要遍历到倒数第三个数  因为两个指针会遍历到最后两个
  // 会有两个指针 一个前指针（j = i + 1） 一个后指针 （ k = len - 1）
  for (let i = 0; i < len - 2; i++) {
    // 定义一个前面的指针
    let j = i + 1
    // 定义一个后面的指针
    let k = len - 1

    // 这里还要考虑到循环的时候，基数改变的时候，需要前后两个基数相同，则跳过就可以
    // 因为在下面循环的过程中也是比较过了的，没必要再重复循环
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    // 当两个指针相遇的时候停止循环
    while (j < k) {
      // 如果三数相加大于0
      if (nums[i] + nums[j] + nums[k] < 0) {
        // 左指针向后移动 
        j++
      // 如果遇到当前指针和前面元素相同（因为基数和右指针不变，并且左指针又是指向的相同的元素，前一次已经比较过了，没必要再比一次），则左指针继续向后移动
       while (j < k && nums[j] === nums[j - 1]) {
        j++
       }
      } 
      // 如果三数相加大于0
      else if (nums[i] + nums[j] + nums[k] > 0) {
        // 右指针向前移动
        k--
        // 如果遇到当前指针和后面一个元素相同（因为基数和左指针没变，并且右指针又是指向相同的元素，前一次已经比较过了），右指针继续前进
        while ( j < k && nums[k] === nums[k + 1]) {
          k--
        }
      }
      // 如果三数相加等于0 等将对应下标的值的组合推入到数组中
      else {
        res.push([nums[i], nums[j], nums[k]])
        j++
        k--
        while (j < k && nums[j] === nums[j - 1]) {
          j++
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--
        }
      }
    }
  }

  return res
}

console.log(threeSum(nums))