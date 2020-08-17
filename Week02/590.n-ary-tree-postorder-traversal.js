// 590. N叉树的后序遍历
// 给定一个 N 叉树，返回其节点值的后序遍历。
//
// 例如，给定一个 3叉树 :
//
//
// 返回其后序遍历: [5,6,3,2,4,1].
//
// 说明: 递归法很简单，你可以使用迭代法完成此题吗?

var postorder = function(root) {
    if (!root) return [];
    let list = [];
    recusion(root);
    function recusion(root) {
        if(!root) return;
        let len = root.children.length;
        let index = 0;
        while(index < len) {
            recusion(root.children[index]);
            index ++;
        }
        list.push(root.val);
    }
    return list;
};