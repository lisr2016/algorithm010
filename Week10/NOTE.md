毕业总结

<================Linked List================>


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


<================Array================>

平均时间复杂度: 查找 O(n) 插入 O(n) 删除 O(n)

常见题:

rotate-array 旋转数组  暴力法/原地换位

plus one 加一 stack/数学方法

emove-duplicates-from-sorted-array 删除排序数组中的重复项 双指针

move-zeroes 移动零      

题目变种:  

        把零移动到最前面:  不等号改等号

        把零往两边放:     左边一次，右边一次

container-with-most-water 盛水最多的容器 暴力法，枚举/双指针

<================Stack================>

平均时间复杂度: 查找 O(n) 插入 O(1) 删除 O(1)

常见题:

valid-parentheses 有效的括号 对字符串遍历，遇到一个左括号时，右括号入展；遇到右括号如果栈为空，或栈顶元素不匹配 返回false. 最后栈应该为空 

trapping-rain-water 接雨水 暴力法/双指针/记忆化/stack

min-stack 最小栈  https://leetcode-cn.com/problems/min-stack/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-38

largest-rectangle-in-histogram 柱状图中的最大矩形  暴力1/暴力2/stack

<================Queue================>

平均时间复杂度: 查找 O(n) 插入 O(1) 删除 O(1)

常见题:

sliding-window-maximum 滑动窗口最大值  优先队列/如果新入值比tail大，tail出列/每次移动检查当前index是否在窗口，不在则出列

Hash:

平均时间复杂度: 查找 O(1) 插入 O(1) 删除 O(1)

valid-anagram 有效异位词 暴力,排序/Hash

group-anagrams 异位词分组 sliding window/hashMap

<================Heap & Binary Heap================>

常见题:

sliding-window-maximum 滑动窗口最大值 

top-k-frequent-elements 前k个高频元素

丑数

最小的 k 个数

<================Graph================>

知识：画一下有向有权图
     拓扑排序
     最短路径
     最小生成树

number-of-islands 岛屿数量

<================递归 & 分治、回溯================>

代码模板:
    
    递归
    // JavaScript
    const recursion = (level, params) =>{
       // recursion terminator
       if(level > MAX_LEVEL){
         process_result
         return 
       }
       // process current level
       process(level, params)
       //drill down
       recursion(level+1, params)
       //clean current level status if needed  
    }
    
    分治
    //Javascript
    const divide_conquer = (problem, params) => {
    
      // recursion terminator
    
      if (problem == null) {
    
        process_result
    
        return
    
      } 
    
      // process current problem
    
      subproblems = split_problem(problem, data)
    
      subresult1 = divide_conquer(subproblem[0], p1)
    
      subresult2 = divide_conquer(subproblem[1], p1)
    
      subresult3 = divide_conquer(subproblem[2], p1)
    
      ...
    
      // merge
    
      result = process_result(subresult1, subresult2, subresult3)
    
      // revert the current level status
    
    }
    
常见题:

   递归:
      
   爬楼梯
   
   括号生成
   
   翻转二叉树
   
   二叉树的最近公共祖先
   
   全排序
   
   全排序ii       
   
   
   分治、回溯:
   
   Pow(x,n)
   
   子集
   
   众数
   
   电话号码的字母组合
   
   N皇后


<================DFS & BFS================>

代码模版:
    
    DFS
    
    递归
    //JavaScript
    const visited = new Set()
    const dfs = node => {
      if (visited.has(node)) return
      visited.add(node)
      dfs(node.left)
      dfs(node.right)
    }
    
    迭代
    void dfs(Node* root) {
      map<int, int> visited;
      if(!root) return ;
    
      stack<Node*> stackNode;
      stackNode.push(root);
    
      while (!stackNode.empty()) {
        Node* node = stackNode.top();
        stackNode.pop();
        if (visited.count(node->val)) continue;
        visited[node->val] = 1;
    
    
        for (int i = node->children.size() - 1; i >= 0; --i) {
            stackNode.push(node->children[i]);
        }
      }
    
      return ;
    }
    
    BFS:
    //JavaScript
    const bfs = (root) => {
      let result = [], queue = [root]
      while (queue.length > 0) {
        let level = [], n = queue.length
        for (let i = 0; i < n; i++) {
          let node = queue.pop()
          level.push(node.val) 
          if (node.left) queue.unshift(node.left)
          if (node.right) queue.unshift(node.right)
        }
        result.push(level)
      }
      return result
    };
    
常见题：

二叉树的层序遍历

最小基因变化

括号生成

在每个树行中找最大值

单词接龙
单词接龙II

岛屿数量

扫雷游戏

<================贪心算法================>

常见题:

lemonade-change 柠檬水找零 贪心算法，模拟

assign-cookies 分发饼干

walking-robot-simulation模拟行走机器人

jump-game 跳跃游戏

jump-game-ii 跳跃游戏ii 

买卖股票系列问题

<================二分查找================>

代码模版:

    /* JavaScript */
    let left = 0, right = len(array) - 1
    while (left <= right) {
      let mid = (left + right) >> 1
      if (array[mid] === target) { /*find the target*/; return }
      else if (array[mid] < target) left = mid + 1
      else right = mid - 1
    }

常见题:

sqrtx x的平方根

valid-perfect-square 有效的完全平方数

<================动态规划================>

    MIT五步DP
    1. define subproblems
    2. guess(part of solution)
    3. relate subproblem solutions
    4. recurse & memorize
    5. solve original problem
    
常见题:

longest-valid-parentheses 最长有效括号

minimum-path-sum 最小路径和

edit-distance 编辑距离

burst-balloons 戳气球

<================前缀树================>

基本性质

    1.结点本身不存完整单词
    2.从根结点到某一结点，路径上经过的字符连接起来，为该结点对应的字符串
    3.每个结点的所有子结点路径代表的字符都不相同
    
    空间换时间；利用字符串的公共前缀来降低查询时间的开销以达到提高效率的目的
   
代码模板:
 
    //Java
    class Trie {
        private boolean isEnd;
        private Trie[] next;
        /** Initialize your data structure here. */
        public Trie() {
            isEnd = false;
            next = new Trie[26];
        }
    
        /** Inserts a word into the trie. */
        public void insert(String word) {
            if (word == null || word.length() == 0) return;
            Trie curr = this;
            char[] words = word.toCharArray();
            for (int i = 0;i < words.length;i++) {
                int n = words[i] - 'a';
                if (curr.next[n] == null) curr.next[n] = new Trie();
                curr = curr.next[n];
            }
            curr.isEnd = true;
        }
    
        /** Returns if the word is in the trie. */
        public boolean search(String word) {
            Trie node = searchPrefix(word);
            return node != null && node.isEnd;
        }
    
        /** Returns if there is any word in the trie that starts with the given prefix. */
        public boolean startsWith(String prefix) {
            Trie node = searchPrefix(prefix);
            return node != null;
        }
    
        private Trie searchPrefix(String word) {
            Trie node = this;
            char[] words = word.toCharArray();
            for (int i = 0;i < words.length;i++) {
                node = node.next[words[i] - 'a'];
                if (node == null) return null;
            }
            return node;
        }
    }
    
word-search 单词搜索
    
word-search-ii 单词搜索ii

friend-circles 朋友圈

<================并查集================>

disjoint set

使用场景:组团、配对；Group or not

需要很快的判断两个个体是不是在一个集合之中

基本操作:makeSet(s)、unionSet(x,y)、find(x)

代码模板:

    // JavaScript
    class unionFind {
      constructor(n) {
        this.count = n;
        this.parent = new Array(n);
        for (let i = 0; i < n; i++) {
          this.parent[i] = i;
        }
      }
    
      find(p) {
        let root = p;
        while (parent[root] !== root) {
          root = parent[root];
        }
        // 压缩路径
        while (parent[p] !== p) {
          let x = p;
          p = this.parent[p];
          this.parent[x] = root;
        }
        return root;
      }
    
      union(p, q) {
        let rootP = find(p);
        let rootQ = find(q);
        if (rootP === rootQ) return;
        this.parent[rootP] = rootQ;
        this.count--;
      }
    }

常见题:

friend-circles 朋友圈

number-of-islands 岛屿数量

surrounded-regions 被围绕的岛屿

<================剪枝、双向BFS、启发式搜索================>

常见题:

valid-sudoku 有效的数独

sudoku-solver 解数独

<================二叉平衡树 & 红黑树================>

AVL:

平均时间复杂度: 查找 O(log(n)) 插入 O(log(n)) 删除 O(log(n))

4种旋转操作

红黑树:

平均时间复杂度: 查找 O(log(n)) 插入 O(log(n)) 删除 O(log(n))

查询操作比较多选择AVL，插入操作也比较多或者插入查询一半一半选择红黑树

C++、Java 中树的实现一般是红黑树  database一般是AVL

<================位运算================>
    
    将x最右边的n位清零： x & (~0<<n)
    
    获取x的第n位值(0或者1)： (x>>n) & 1
    
    获取x的第n位的幂值: x & (1<<n)
    
    仅将第n位置为1: x | (1<<n)
    
    仅将第n位置为0: x & (~(1<<n))
    
    将x最高位至第n位(含)清零: x & ((1<<n)-1)
    
    判断奇偶: x%2 == 1 --> (x&1) == 1, x%2 == 0 --> (x&1) == 0
    
    x>>1 --> x/2
    
    X=X&(X-1) 清零最地位的1
    
    X&-1=> 得到最低位的1
    
    X&~X=>0

常见题:

n-queens N皇后

reverse-bits 颠倒二进制位

number-of-1-bits 位1的个数

power-of-two 判断一个整数是否是 2 的幂次方

<================布隆过滤器================>

一个很长的二进制向量和一系列随机映射函数。布隆过滤器可以用于检索一个元素是否在一个集合中。

优点是空间效率和查询时间都远远超过一般的算法，

缺点是有一定的误识别率和删除困难

<================LRU Cache================>

代码模板:

    // JavaScript
      class LRUCache {
      constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
      }
    
      get(key) {
        if (!this.cache.has(key)) return -1;
        let value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
      }
    
      put(key, value) {
        if (this.cache.has(key)) {
          this.cache.delete(key);
        } else {
          if (this.cache.size >= this.capacity) {
            // Map 中新 set 的元素会放在后面
            let firstKey = this.cache.keys().next();
            this.cache.delete(firstKey.value);
          }
        }
        this.cache.set(key, value);
      }
    }

<================排序算法================>

如何分析一个排序算法 执行效率/内存消耗/稳定性

比较类排序:通过比较来决定元素间的相对次序，由于其时间复杂度不能突破O(nlogn),因此也称为非线性时间比较类排序。

      1)交换排序 a.冒泡排序 b.快速排序
      2)插入排序 a.简单插入排序 b.希尔排序
      3)选择排序 a.简单选择排序 b.堆排序
      4)归并排序

2.非比较类排序:不通过比较来决定元素间的相对次序，它可以突破基于比较排序的时间下界，以线性时间运行，因此也成为线性时间非比较类排序。

      1)计数排序
      2)桶排序
      3)基数排序
      
<================字符串匹配算法================>

    Boyer-Moore 算法
    Sunday 算法
    Rabin-Karp 代码示例
    KMP 算法
    
    暴力匹配方法模板
    // JavaScript
    function bf(text, pattern) {
      let n = text.length;
      let m = pattern.length;
      for (let i = 0; i < n - m + 1; i++) {
        let matched = true;
        for (let j = 0; j < m; j++) {
          if (source[i + j] !== pattern[j]) {
            matched = false;
            break;
          }
        }
        if (matched) return true;
      }
      return false;
    }
    console.log(bf("abcabcabx", "abcabx"));

