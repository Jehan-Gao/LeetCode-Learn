const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D",
      left: null,
      right: null,
    },
    right: {
      val: "E",
      left: null,
      right: null,
    },
  },
  right: {
    val: "C",
    left: {
      val: "F",
      left: null,
      right: null,
    },
    right: {
      val: "G",
      left: null,
      right: null,
    },
  },
};

function inorder(root) {
  if (!root) return;
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
}

// inorder(root)  // D B E A F C G


// 非递归
// 利用栈
function inorder2(root) {
    const stack = []
    while (true) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        if (!stack.length) return
        const top = stack.pop()
        console.log(top.val)
        root = top.right
    }
}

inorder2(root)  // D B E A F C G