## [LeetCode-剑指 Offer 24. 反转链表](https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/)


难度：简单

类型：链表


### 题目：
定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

示例：
```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

### 思路：
多指针遍历：
  - cur 代表当前链表。
  - pre 代表前一个结点，当cur.next = pre，说明cur的next指针指向了前一个结点，那么原来cur的next指针指向的数据域就被断开了。
  - next 用来保存cur.next后面被断开的链表


### 实现：


javascript: 

```js
var reverseList = function(head) {
    if (!head || !head.next) return head
    var cur = head
    var pre = null 
    while (cur) {
      // next 用来保存cur后面的结点
        const next = cur.next
      // 断开后续结点，反向的指向前一个结点
        cur.next = pre
      // pre 前进
        pre = cur
      // cur 前进
        cur = next
    }
    // 返回pre,最终就是排序完的链表
    return pre
};
```