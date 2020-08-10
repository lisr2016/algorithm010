// 589. N叉树的前序遍历
// 给定一个 N 叉树，返回其节点值的前序遍历。
//
// 例如，给定一个 3叉树 :
//
// 返回其前序遍历: [1,3,5,6,2,4]。
//
//
//
// 说明: 递归法很简单，你可以使用迭代法完成此题吗?

var preorder = function(root) {
    if (!root) return [];
    let list = [];
    recusion(root);
    return list;
    function recusion(root){
        if (!root) return;
        let len = root.children.length
        let index = 0
        list.push(root.val);
        while(index < len) {
            recusion(root.children[index]);
            index ++;
        }
    }
};