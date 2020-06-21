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