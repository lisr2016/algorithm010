// 102. 二叉树的层序遍历
// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
//
//
//
// 示例：
// 二叉树：[3,9,20,null,null,15,7],
//
// 3
// / \
//   9  20
// /  \
//    15   7
// 返回其层次遍历结果：
//
// [
//     [3],
//     [9,20],
//     [15,7]
// ]

// BFS:
var levelOrder = function(root) {
    const ret = [];
    if (!root) return ret;
    const q = [root];
    while (q.length !== 0) {
        const currentLevelSize = q.length;
        ret.push([]);
        for (let i = 1; i <= currentLevelSize; ++i) {
            const node = q.shift();
            ret[ret.length - 1].push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
    }
    return ret;
};

// DFS:
var levelOrder = function(root) {
    const helper = function(ret, root, n){
        if(ret.length - 1 < n) ret.push([]);
        ret[n].push(root.val);
        if(root.left !== null) helper(ret, root.left, n + 1);
        if(root.right !== null) helper(ret, root.right, n + 1);
    }
    let ret = [];
    if(root !== null) {
        helper(ret, root, 0);
    }
    return ret;
};
