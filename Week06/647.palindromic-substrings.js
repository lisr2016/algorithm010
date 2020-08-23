// 647. 回文子串
// 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。
//
// 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被计为是不同的子串。
//
// 示例 1:
//
// 输入: "abc"
// 输出: 3
// 解释: 三个回文子串: "a", "b", "c".
//     示例 2:
//
// 输入: "aaa"
// 输出: 6
// 说明: 6个回文子串: "a", "a", "a", "aa", "aa", "aaa".
//     注意:
//
// 输入的字符串长度不会超过1000。
var countSubstrings = function (s) {
    var count1 = 0
    
    function count (left, right) {
        while (left > -1 && right < s.length && s[left] === s[right]) {
            count1++
            left--
            right++
        }
    }
    
    for (var i = 0; i < s.length; i++) {
        count(i, i);
        count(i, i + 1)
    }
    return count1
};

// 暴力法
const isPalindrome = (s) => {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) return false;
        i++;
        j--;
    }
    return true;
};

const countSubstrings = (s) => {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (isPalindrome(s.substring(i, j + 1))) {
                count++;
            }
        }
    }
    return count;
};

// DP
const countSubstrings = (s) => {
    let count = 0;
    const len = s.length;
    
    const dp = new Array(len);
    for (let i = 0; i < len; i++) {
        dp[i] = new Array(len).fill(false);
    }
    
    for (let j = 0; j < len; j++) {
        for (let i = 0; i <= j; i++) {
            if (i === j) { // 单个字符
                dp[i][j] = true;
                count++;
            } else if (j - i === 1 && s[i] === s[j]) { // 两个字符
                dp[i][j] = true;
                count++;
            } else if (j - i > 1 && s[i] === s[j] && dp[i + 1][j - 1]) { // 多于两个字符
                dp[i][j] = true;
                count++;
            }
        }
    }
    return count;
};

// DP or

const countSubstrings = (s) => {
    const len = s.length;
    let count = 0;
    const dp = new Array(len);
    
    for (let j = 0; j < len; j++) {
        for (let i = 0; i <= j; i++) {
            if (s[i] === s[j] && (j - i <= 1 || dp[i + 1])) {
                dp[i] = true;
                count++;
            } else {
                dp[i] = false;
            }
        }
    }
    return count;
};




