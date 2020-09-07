

let nums1 = [7, 8, 9, 10, 0, 0, 0]
let m = 4
let nums2 = [1, 5, 9]
let n = 3

function merge (nums1, m, nums2, n) {

  // 双指针移动
  let i = m - 1, j = n - 1, k = nums1.length - 1

  while (i >=0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i]
      i--
      k--
    } else {
      nums1[k] = nums2[j]
      j--
      k-- 
    }
  }

  // 这种情况是 nums1 遍历完了 还剩 nums2 直接把nums2 放入 nums1 
  while (j >= 0) {
    nums1[k] = nums2[j]
    // 继续移动指针
    j--
    k--
  }
}

merge(nums1, m, nums2, n)

console.log(nums1)