// 206. 反转链表
// 反转一个单链表。
//
// 示例:
//
//     输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
// 进阶:
//     你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

var reverseList = function(head) {
    let nxt = head
    let pre = null
    while(nxt){
        let cc = nxt.next
        nxt.next = pre
        pre = nxt
        nxt = cc
        // 下面是上面4行代码的简写（es6的解构赋值，简化了多行的赋值代码）
        // [nxt.next, pre, nxt]=[pre, nxt, nxt.next]
    }
    return pre
};



var handleReverse = function(node,list){
    // 进行反转
    let next = list.next
    let pre = list
    pre.next = node
    // 如果链表遍历结束时return pre
    if(!next) return pre
    // 如果链表遍历未结束则继续反转链表的下一项
    return handleReverse(pre,next)
}
var reverseList = function(head) {
    if(!head || !head.next) return head
    return handleReverse(null,head)
};



var reverseList = function(head) {
    if(!head || !head.next) return head
    let next = head.next
    // 这里的next传入的是地址，而非值
    let res = reverseList(next)
    // 进行反转
    next.next = head
    head.next = null
    return res
};
