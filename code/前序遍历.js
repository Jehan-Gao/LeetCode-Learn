const root = {
    val: 'A',
    left: {
        val: 'B',
        left: {
            val: 'D',
            left: null,
            right: null
        },
        right: {
            val: 'E',
            left: null,
            right: null
        },
    },
    right: {
        val: 'C', 
        left: {
            val: 'F',
            left: null,
            right: null
        },
        right: {
            val: 'G',
            left: null,
            right: null
        }
    }
}

// 递归遍历

function preorder(root) {
    if (!root) return 
    console.log(root.val)
    preorder(root.left)
    preorder(root.right)
}

// preorder(root)


function preorder2(root) {
    if (!root) return 
    const stack = []
    stack.push(root)

    while(stack.length) {
        const top = stack.pop()
        console.log(top.val)

        if (top.right) {
            stack.push(top.right)
        } 

        if (top.left) {
            stack.push(top.left)
        }
    }
}
preorder2(root)