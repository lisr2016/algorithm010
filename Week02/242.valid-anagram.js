// 哈希表

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

// 时间复杂度：O(n)
// 空间复杂度：O(1)