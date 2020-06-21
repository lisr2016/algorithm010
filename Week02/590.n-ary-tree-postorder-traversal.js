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