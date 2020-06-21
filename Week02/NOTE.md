学习笔记

哈希表 映射 集合

Average
Search O(1) Insertion O(1)  Deletion O(1)

Worst
Search O(n) Insertion O(n)  Deletion O(n)
// 拉链式解决冲突法，发生碰撞时，查询时遍历链表，效率从O(1)退化到O(n)

java code
抽象出来的哈希表
Map Set

HashMap的小总结：

实战题目: 242.anagram
(超哥的做题四件套：
    1.clarification
    2.possible solutions  --> optional (time & space)
    3.code
    4.test cases
)

讨论，确认："什么是anagram"，"大小写是不是敏感的"

1.暴力法，sort   O(nlogn)
2.hash 统计每个字符的频次

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] ? obj[s[i]]++ : (obj[s[i]] = 1)
    obj[t[i]] ? obj[t[i]]-- : (obj[t[i]] = -1)
  }
  return Object.keys(obj).every(item => obj[item] === 0);
};

49.group-anagrams

var groupAnagrams = function(strs) {
    let hash = new Map()

    for(let i = 0; i < strs.length; i++) {
        let str = strs[i].split('').sort().join()
        if(hash.has(str)) {
            let temp = hash.get(str)
            temp.push(strs[i])
            hash.set(str, temp)
        } else {
            hash.set(str, [strs[i]])
        }
    }

    return [...hash.values()]
};


树 二叉树 二叉搜索树

 (可以理解为Linked List 是特殊化的 Tree, Tree 是特殊化的 Graph )

 (递归的状态树，简称递归树，也是一种树结构)

 如果一个树是无序，查找一个结点就必须要遍历  (复杂度O(n)等同链表)
 前：根-左-右
 中：左-根-右
 后：左-右-根

  二叉搜索树:
1.左子树上所有结点的值均小于它的根结点的值；
2.右子树上所有结点的值均大于它的根结点的值；
3.以此类推：左、右子树也分别为二叉搜索树。

中序遍历：升序遍历

(莫里斯遍历)


堆 二叉堆 图

Operation	        find-min	delete-min	insert	    decrease-key	meld
Binary[8]	        O(1)	    O(log n)	O(log n)	O(log n)	    O(n)
Leftist	O(1)	    O(log n)	O(log n)	O(log n)	O(log n)	    O(log n)
Binomial[8][9]	    O(1)	    O(log n)	O(1)	    O(log n)	    O(log n)
Fibonacci[8][10]	O(1)	    O(log n)	O(1)	    O(1)	        O(1)
Pairing[11]	O(1)	O(log n)	O(1)	    o(log n)	O(1)	        O(1)
Brodal[14][e]	    O(1)	    O(log n)	O(1)	    O(1)	        O(1)
Rank-pairing[16]	O(1)	    O(log n)	O(1)	    O(1)	        O(1)
Strict Fibonacci[17]O(1)	    O(log n)	O(1)	    O(1)	        O(1)
2-3 heap[18]	    O(log n)	O(log n)	O(log n)	O(1)	        ?


heap : find-max O(1), delete-max O(logN)   insert(creat) O(logN) or O(1)

二叉堆
完全二叉树(注意：不是二叉搜索树)

二叉堆(大顶) 满足下列性质：
1.是一棵完全树
2.树中任意结点的值总是>=其子结点的值

二叉堆一般通过"数组"来实现
假设"第一个元素"在数组中的索引为0的话，则父结点和子结点的位置关系如下

(O1)索引为i的左孩子的索引是(2*i+1);
(O2)索引为i的左孩子的索引是(2*i+2);
(O3)索引为i的父结点的索引是floor((i-1/2);

Graph(V, E)

V - vertex: 点
1.度 - 入度和出度
2. 点与点之间：连通与否

E - edge： 边
1.有向和无向（单行线）
2.权重（边长）

邻接矩阵
邻接表
(都是二维的数据结构)、

DFS算法，BFS算法
(做题的时候，图要加visited集合，树里面不需要，因为树没有环路，不会重复)

图的高级算法：
    连通图个数、拓扑排序、最短路径、最小生成树
