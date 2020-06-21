
// 给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。
//
// 返回其层序遍历:
//
//     [
//         [1],
//         [3,2,4],
//         [5,6]
//     ]

// 说明:
//
//     树的深度不会超过 1000。
// 树的节点总数不会超过 5000。


var levelOrder = function(root) {
    if(!root) return [];
    let queue = [root];
    let list=[];
    while(queue.length){
        let level=[];
        let len=queue.length;
        for(let i=0;i<len;i++){
            let current = queue.shift();
            level.push(current.val);
            if(current.children && current.children.length>0){
                queue.push(...current.children);
            }
        }
        list.push(level)
    }
    return list;
};
