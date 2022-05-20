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

function levelOrder(root) {
  const queue = [];
  queue.push(root);

  while (queue.length) {
    const top = queue.shift();
    console.log(top.val);

    if (top.left) {
      queue.push(top.left);
    }

    if (top.right) {
      queue.push(top.right);
    }
  }
}

levelOrder(root);  // A B C D E F G
