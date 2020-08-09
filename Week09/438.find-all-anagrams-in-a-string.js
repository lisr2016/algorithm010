// 438. 找到字符串中所有字母异位词
// 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。
//
// 字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。
//
// 说明：
//
// 字母异位词指字母相同，但排列不同的字符串。
// 不考虑答案输出的顺序。
// 示例 1:
//
// 输入:
//     s: "cbaebabacd" p: "abc"
//
// 输出:
//     [0, 6]
//
// 解释:
//     起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。
//  示例 2:
//
// 输入:
//     s: "abab" p: "ab"
//
// 输出:
//     [0, 1, 2]
//
// 解释:
//     起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。

var findAnagrams = function (s, p) {
    let hash = {}, uniqueChars = 0;
    for (let c of p) {
        if (hash[c] == null) {
            uniqueChars++;
            hash[c] = 1;
        } else {
            hash[c]++;
        }
    }

    let res = [];
    let left = 0, right = 0;
    for (right; right < s.length; right++) {
        if (hash[s[right]] != null) hash[s[right]]--;
        if (hash[s[right]] === 0) uniqueChars--;
        if (uniqueChars === 0) res.push(left);
        if (right - left + 1 === p.length) {
            if (hash[s[left]] != null) hash[s[left]]++;
            if (hash[s[left++]] === 1) uniqueChars++;
        }
    }
    return res;
};