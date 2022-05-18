/**
 * nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]
*/

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3

// 双指针+遍历
// function maxSlidingWindow (nums, k) {
//     const len = nums.length
//     const res = []
//     let left = 0
//     let right = k - 1
//     while (right < len ) {
//         const max = calcMax(nums, left, right)
//         res.push(max)
//         left++
//         right++
//     }
//     return res
// }

// function calcMax(arr, left, right) {
//     if (!arr || !arr.length) {
//         return 
//     }

//     let maxNum = arr[left]
//     // 在指定区间内计算最大值
//     for (let i = left; i <= right; i++) {
//         if (arr[i] > maxNum) {
//             maxNum = arr[i]
//         }
//     }
//     return maxNum
// }


// console.log(maxSlidingWindow(nums, k));

/**
 * 时间复杂度 为 O(kn): n 为数组的规模，在每一个窗口内，都需要遍历k次
 * 进一步优化：O(n) ==> 双端队列
 * */ 

// 双端队列：始终维护一个递减队列

function maxSlidingWindow (nums, k) {
    const len = nums.length
    const res = []
    // 双端队列
    const deque = []
    for (let i = 0; i<len; i++) {
      // 当队尾元素小于当前元素时，打破了递减规律，队尾的元素需要出栈，直到队尾元素大于等于当前元素
      while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
        // 队尾元素出队
        deque.pop();
      }
      // 记录索引
      deque.push(i);

      // 当队头元素的索引已经被排除在滑动窗口之外时
      while (deque.length && deque[0] <= i - k) {
        // 队头出队列 （队列内只维护滑动窗口内的元素）
        deque.shift();
      }
      //  判断滑动窗口的状态，只有在被遍历的元素个数大于 k 的时候，才更新结果数组 (队列头元素始终是滑动窗口内的最大值)
      if (i >= k - 1) {
          res.push(nums[deque[0]]);
      }
    }

    return res
}

console.log(maxSlidingWindow(nums, 3));

