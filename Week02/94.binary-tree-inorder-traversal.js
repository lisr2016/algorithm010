// 94. 二叉树的中序遍历
// 给定一个二叉树，返回它的中序 遍历。
//
// 示例:
//
//     输入: [1,null,2,3]
//   1
//     \
//      2
//    /
//   3
//
// 输出: [1,3,2]
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？

//  方法一: 递归

// 时间复杂度: O(n)
// 空间复杂度：最坏O(n),平均O(logn)
var inorderTraversal = function(root) {
    let nums = [];
    let fun = (root) => {
        root.left && fun(root.left);
        nums.push(root.val);
        root.right && fun(root.right);
    }
    root && fun(root);
    return nums;
}
// 方法二：栈

var inorderTraversal = function(root) {
    let nums = [];
    let stack = [];
    while(root || stack.length){
        while(root){
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        nums.push(root.val);
        root = root.right;
    }
    return nums;
}

// 时间复杂度: O(n)
// 空间复杂度：O(n)

// 方法三：莫里斯遍历

// 莫里斯遍历不需要递归或者临时的栈空间就可以完成遍历，空间复杂度是常数。
// 但是为了解决从子节点找到父节点的问题，需要临时修改树的结构，在遍历完成之后复原成原来的树结构。

var inorderTraversal = function(root) {
    let nums = [];
    let cur = root;
    let pre = null;
    while(cur){
        //左子树为空，输出当前节点，将其右孩子作为当前节点
        if(!cur.left){
            nums.push(cur.val);
            cur = cur.right;
        }else{
            pre = cur.left;
            //找到前驱节点，即左子树中的最右节点
            while(pre.right && pre.right != cur){
                pre = pre.right;
            }
            //如果前驱节点的右孩子为空，将它的右孩子设置为当前节点。当前节点更新为当前节点的左孩子。
            if(!pre.right){
                pre.right = cur;
                cur = cur.left;
            }
            //如果前驱节点的右孩子为当前节点，将它的右孩子重新设为空（恢复树的形状）。
            //输出当前节点。当前节点更新为当前节点的右孩子。
            if(pre.right==cur){
                pre.right = null;
                nums.push(cur.val);
                cur = cur.right;
            }
        }
    }
    return nums;
};

// 时间复杂度: O(n)
// 空间复杂度：O(n)