
/**
 *         A 
 *      B    C
 *    D  E  F  G
 * 
 *   D E B F G C A
 * 
 * */ 

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


function postorder(root) {
    if (!root) return
    postorder(root.left)
    postorder(root.right)
    console.log(root.val)
}

// postorder(root)  // D E B F G C A



function postorder2(root) {
    const stack = []
    const stack2 = []
    stack.push(root)

    while (stack.length) {
        const top = stack.pop()
        stack2.push(top)

        if (top.left) {
            stack.push(top.left)
        }

        if (top.right) {
            stack.push(top.right);
        }
    }

    while (stack2.length) {
        console.log(stack2.pop().val)
    }
}

postorder2(root)