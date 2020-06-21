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

Hashmap 中的加载因子是默认为0.75

加载因子 loadfactor 是表示 Hsah 表中元素的填满的程度.若:加载因子越大,填满的元素越多,好处是,空间利用率高了,但:冲突的机会加大了.反之,加载因子越小,填满的元素越少,好处是:冲突的机会减小了,但:空间浪费多了.

冲突的机会越大,则查找的成本越高.反之,查找的成本越小.因而,查找时间就越小.

因此,必须在 “冲突的机会”与”空间利用率”之间寻找一种平衡与折衷. 这种平衡与折衷本质上是数据结构中有名的”时-空”矛盾的平衡与折衷.




put:
    transient int modCount;
    /**
     * Implements Map.put and related methods
     *
     * @param hash hash for key
     * @param key the key
     * @param value the value to put
     * @param onlyIfAbsent if true, don't change existing value
     * @param evict if false, the table is in creation mode.
     * @return previous value, or null if none
     */
    final V putVal(int hash, K key, V value, boolean onlyIfAbsent,
                   boolean evict) {
        Node<K,V>[] tab; Node<K,V> p; int n, i;
        if ((tab = table) == null || (n = tab.length) == 0)
            n = (tab = resize()).length;
        if ((p = tab[i = (n - 1) & hash]) == null)
            tab[i] = newNode(hash, key, value, null);
        else {
            Node<K,V> e; K k;
            if (p.hash == hash &&
                ((k = p.key) == key || (key != null && key.equals(k))))
                e = p;
            else if (p instanceof TreeNode)
                e = ((TreeNode<K,V>)p).putTreeVal(this, tab, hash, key, value);
            else {
                for (int binCount = 0; ; ++binCount) {
                    if ((e = p.next) == null) {
                        p.next = newNode(hash, key, value, null);
                        if (binCount >= TREEIFY_THRESHOLD - 1) // -1 for 1st
                            treeifyBin(tab, hash);
                        break;
                    }
                    if (e.hash == hash &&
                        ((k = e.key) == key || (key != null && key.equals(k))))
                        break;
                    p = e;
                }
            }
            if (e != null) { // existing mapping for key
                V oldValue = e.value;
                if (!onlyIfAbsent || oldValue == null)
                    e.value = value;
                afterNodeAccess(e);
                return oldValue;
            }
        }
        ++modCount;
        if (++size > threshold)
            resize();
        afterNodeInsertion(evict);
        return null;
    }


    /**
     * Initializes or doubles table size.  If null, allocates in
     * accord with initial capacity target held in field threshold.
     * Otherwise, because we are using power-of-two expansion, the
     * elements from each bin must either stay at same index, or move
     * with a power of two offset in the new table.
     *
     * @return the table
     */
    final Node<K,V>[] resize() {
        Node<K,V>[] oldTab = table;
        int oldCap = (oldTab == null) ? 0 : oldTab.length;
        int oldThr = threshold;
        int newCap, newThr = 0;
        if (oldCap > 0) {
            if (oldCap >= MAXIMUM_CAPACITY) {
                threshold = Integer.MAX_VALUE;
                return oldTab;
            }
            else if ((newCap = oldCap << 1) < MAXIMUM_CAPACITY &&
                     oldCap >= DEFAULT_INITIAL_CAPACITY)
                newThr = oldThr << 1; // double threshold
        }
        else if (oldThr > 0) // initial capacity was placed in threshold
            newCap = oldThr;
        else {               // zero initial threshold signifies using defaults
            newCap = DEFAULT_INITIAL_CAPACITY;
            newThr = (int)(DEFAULT_LOAD_FACTOR * DEFAULT_INITIAL_CAPACITY);
        }
        if (newThr == 0) {
            float ft = (float)newCap * loadFactor;
            newThr = (newCap < MAXIMUM_CAPACITY && ft < (float)MAXIMUM_CAPACITY ?
                      (int)ft : Integer.MAX_VALUE);
        }
        threshold = newThr;
        @SuppressWarnings({"rawtypes","unchecked"})
            Node<K,V>[] newTab = (Node<K,V>[])new Node[newCap];
        table = newTab;
        if (oldTab != null) {
            for (int j = 0; j < oldCap; ++j) {
                Node<K,V> e;
                if ((e = oldTab[j]) != null) {
                    oldTab[j] = null;
                    if (e.next == null)
                        newTab[e.hash & (newCap - 1)] = e;
                    else if (e instanceof TreeNode)
                        ((TreeNode<K,V>)e).split(this, newTab, j, oldCap);
                    else { // preserve order
                        Node<K,V> loHead = null, loTail = null;
                        Node<K,V> hiHead = null, hiTail = null;
                        Node<K,V> next;
                        do {
                            next = e.next;
                            if ((e.hash & oldCap) == 0) {
                                if (loTail == null)
                                    loHead = e;
                                else
                                    loTail.next = e;
                                loTail = e;
                            }
                            else {
                                if (hiTail == null)
                                    hiHead = e;
                                else
                                    hiTail.next = e;
                                hiTail = e;
                            }
                        } while ((e = next) != null);
                        if (loTail != null) {
                            loTail.next = null;
                            newTab[j] = loHead;
                        }
                        if (hiTail != null) {
                            hiTail.next = null;
                            newTab[j + oldCap] = hiHead;
                        }
                    }
                }
            }
        }
        return newTab;
    }

get:

    public V get(Object key) {
        Node<K,V> e;
        return (e = getNode(hash(key), key)) == null ? null : e.value;
    }

    /**
     * Implements Map.get and related methods
     *
     * @param hash hash for key
     * @param key the key
     * @return the node, or null if none
     */
    final Node<K,V> getNode(int hash, Object key) {
        Node<K,V>[] tab; Node<K,V> first, e; int n; K k;
        if ((tab = table) != null && (n = tab.length) > 0 &&
            (first = tab[(n - 1) & hash]) != null) {
            if (first.hash == hash && // always check first node
                ((k = first.key) == key || (key != null && key.equals(k))))
                return first;
            if ((e = first.next) != null) {
                if (first instanceof TreeNode)
                    return ((TreeNode<K,V>)first).getTreeNode(hash, key);
                do {
                    if (e.hash == hash &&
                        ((k = e.key) == key || (key != null && key.equals(k))))
                        return e;
                } while ((e = e.next) != null);
            }
        }
        return null;
    }






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
