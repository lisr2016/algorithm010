毕业总结

Linked List:

平均时间复杂度: 查找 O(n) 插入 O(1) 删除 O(1)

常见题:

linked-list-cycle 判断链表是否有环 方法1:Hash 方法2:快慢指针

merge-two-sorted-lists 递归写法/迭代写法

reverse-linked-list 反转链表 方法1:栈 方法2:递归 方法3:双指针

reverse-nodes-in-k-Group k个一组反转链表 方法1:递归 方法2:双指针

swap-nodes-in-pairs 两两交换链表中的节点  递归写法/迭代写法

middle-of-the-linked-list 查找链表中间的结点 遍历获得长度，求中间点/双指针/

delete-node-in-a-linked-list 删除链表中的结点 node.val = node.next.val  node.next = node.next.next

remove-duplicate-from-sorted-list 移除有序链表重复结点 cur == cur.next ? cur.next = cur.next.next : cur = cur.next

remove-linked-list-elements 移除链表元素 虚拟头结点 dummyHead

intersection-of-two-linked-lists 相交链表 暴力/Hash/双指针

Array:

平均时间复杂度: 查找 O(n) 插入 O(n) 删除 O(n)

常见题:

rotate-array 旋转数组  暴力法/原地换位

plus one 加一 stack/数学方法

emove-duplicates-from-sorted-array 删除排序数组中的重复项 双指针

move-zeroes 移动零      
            题目变种:  把零移动到最前面  不等号改等号
                      把零往两边放      左边一次，右边一次

container-with-most-water 盛水最多的容器 暴力法，枚举/双指针

Stack:

平均时间复杂度: 查找 O(n) 插入 O(1) 删除 O(1)

常见题:

valid-parentheses 有效的括号 对字符串遍历，遇到一个左括号时，右括号入展；遇到右括号如果栈为空，或栈顶元素不匹配 返回false. 最后栈应该为空 

trapping-rain-water 接雨水 暴力法/双指针/记忆化/stack

min-stack 最小栈  https://leetcode-cn.com/problems/min-stack/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-38

largest-rectangle-in-histogram 柱状图中的最大矩形  暴力1/暴力2/stack

Queue:

平均时间复杂度: 查找 O(n) 插入 O(1) 删除 O(1)

常见题:

sliding-window-maximum 滑动窗口最大值  优先队列/如果新入值比tail大，tail出列/每次移动检查当前index是否在窗口，不在则出列

Hash:

平均时间复杂度: 查找 O(1) 插入 O(1) 删除 O(1)

valid-anagram 有效异位词 暴力,排序/Hash

group-anagrams 异位词分组 sliding window/hashMap

图:

知识：画一下有向有权图
     拓扑排序
     最短路径
     最小生成树

number-of-islands 岛屿数量

递归 & 分治:

DFS & BFS:

贪心算法:

二分查找:

DP:

Trie:

并查集:

AVL:

平均时间复杂度: 查找 O(log(n)) 插入 O(log(n)) 删除 O(log(n))

红黑树:

平均时间复杂度: 查找 O(log(n)) 插入 O(log(n)) 删除 O(log(n))

位运算:

布隆过滤器:

LRU Cache:

排序算法:

