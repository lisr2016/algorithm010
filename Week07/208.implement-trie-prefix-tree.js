// 208. 实现 Trie (前缀树)
// 实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。
//
// 示例:
//
//     Trie trie = new Trie();
//
// trie.insert("apple");
// trie.search("apple");   // 返回 true
// trie.search("app");     // 返回 false
// trie.startsWith("app"); // 返回 true
// trie.insert("app");
// trie.search("app");     // 返回 true
// 说明:
//
//     你可以假设所有的输入都是由小写字母 a-z 构成的。
// 保证所有输入均为非空字符串。

function Trie() {
    const root = {};
    return { insert, search, startsWith };

    function insert(word) {
        let curr = root;
        word.split('').forEach(ch => curr = curr[ch] = curr[ch] || {});
        curr.isWord = true;
    }

    function traverse(word) {
        let curr = root;
        for (var i = 0; i < word.length; i++) {
            if (!curr) return null;
            curr = curr[word[i]];
        }
        return curr;
    }

    function search(word) {
        let node = traverse(word);
        return !!node && !!node.isWord;
    }

    function startsWith(word) {
        return !!traverse(word);
    }
}