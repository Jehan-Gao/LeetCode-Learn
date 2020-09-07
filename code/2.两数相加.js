/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


function ListNode(val) {
      this.val = val;
      this.next = null;
}

 let l1 = {
   val: 2,
   next: {
     val: 3,
     next: {
       val: 4,
       next: null
     }
   }
 }

 let l2 = {
   val: 5,
   next: {
     val: 6,
     next: {
       val: 4,
       next: null
     }
   }
 }
 let leftNum = rightNum = ''

function getVal (listNode) {
  if (!listNode.next) {
    return
  }
  if (listNode.next) {
      getVal(listNode.next)
  }
  leftNum = listNode.val
}

var addTwoNumbers = function(l1, l2) {
  leftNum = getVal(leftNum, l1)
  console.log(leftNum, '333')
  rightNum = getVal(rightNum, l2)
  let result = leftNum + rightNum
  let len = result.length - 1
  let l3 =  new ListNode(result[len])
  // {val: 7, next: null}
  while (len >= 0) {
      len--
      l3.next = new ListNode(result[len])
  }
  return l3
}

console.log(addTwoNumbers(l1, l2))

