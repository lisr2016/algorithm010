学习笔记
字典树和并查集

trie
基本性质
1.结点本身不存完整单词
2.从根结点到某一结点，路径上经过的字符连接起来，为该结点对应的字符串
3.每个结点的所有子结点路径代表的字符都不相同

空间换时间；利用字符串的公共前缀来降低查询时间的开销以达到提高效率的目的

代码模板

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


分析单词搜索 2 用 Tire 树方式实现的时间复杂度

board长度、宽度设为m,单词平均长度为k
每个字母遍历一次是m^2
第一次搜索可以是4个方向，后面的搜索是3个方向，4*3^(k-1)
所以时间复杂度O(m^2(4*3^(k-1)))

高级搜索

剪枝、双向搜索、启发式搜索


红黑树和AVL树

// (前面提过：树和链表没有本质区别，一个链表分出两个next，可以称为树)

// 平衡二叉树

查询的时间复杂度是基于树的深度的
AVL树

Balance Factor (平衡因子)
是它的左子树的高度减去它的右子树的高度(有时相反) balance factor = { -1, 0, 1 }

通过旋转操作进行平衡 (四种) 左旋 右旋 左右旋 右左旋

不足：结点需要存储额外信息、且调整次数频繁

(近似平衡二叉树，不需要每次非常严格地来平衡)

红黑树：
是一种近似平衡的二叉搜索树，确保任何一个结点的左右子树的高度差小于两倍

每个结点要么是红色，要么是黑色

根结点是黑色

每个叶结点(NIL结点，空结点)是黑色的

不能有相邻接的两个红色结点

从任一结点到其每个叶子的所有路径都包含相同数目的黑色结点

查询操作比较多选择AVL，插入操作也比较多或者插入查询一半一半选择红黑树