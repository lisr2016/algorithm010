// 141. 环形链表
// 给定一个链表，判断链表中是否有环。
//
// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
//
//
//
// 示例 1：
//
// 输入：head = [3,2,0,-4], pos = 1
// 输出：true
// 解释：链表中有一个环，其尾部连接到第二个节点。
//
//
// 示例 2：
//
// 输入：head = [1,2], pos = 0
// 输出：true
// 解释：链表中有一个环，其尾部连接到第一个节点。
//
//
// 示例 3：
//
// 输入：head = [1], pos = -1
// 输出：false
// 解释：链表中没有环。
//
//
//
//
// 进阶：
//
// 你能用 O(1)（即，常量）内存解决此问题吗？

var hasCycle = function (head) {
    // 链表长度小于2时直接return
    if (!head || !head.next) return false
    while (head) {
        if (head.tag) return true
        head.tag = true
        head = head.next
    }
    return false
};

// 标记法，(修改了链表) O(n)、 O(n)

var hasCycle = (head) => {
    if(!head || !head.next) return false
    let map = new Map()
    while (head) {
        if (map.has(head)) return true
        map.set(head, true)
        head = head.next
    }
    return false
}

// Hash O(n)、 O(n)

var hasCycle = function(head) {
    if(!head || !head.next) return false
    let slow = head
    let fast = head.next
    while(slow != fast){
        if(!fast || !fast.next) return false
        fast = fast.next.next
        slow = slow.next
    }
    return true
};

// 快慢指针 O(n)、 O(1)
