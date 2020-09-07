
let nums = [3, 4, 5, 6, 7, 0, 2]
let target = 10

function twoSum (nums, target) {
  let len = nums.length
  let map = new Map()
  for (let i = 0; i < len; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    }
    map.set(nums[i], i)
  }
}

console.log(twoSum(nums, target))