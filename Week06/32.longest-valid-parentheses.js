// 32. 最长有效括号
// 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
//
// 示例 1:
//
// 输入: "(()"
// 输出: 2
// 解释: 最长有效括号子串为 "()"
// 示例 2:
//
// 输入: ")()())"
// 输出: 4
// 解释: 最长有效括号子串为 "()()"

// 1.stack

var longestValidParentheses = function(s) {
    let maxns = 0;
    let stack = [-1];
    for (let i = 0; i<s.length; i++) {
        if (s.charAt(i) === '('){
            stack.push(i);
        }else{
            stack.pop();
            if(stack.length === 0) stack.push(i)
            else{
                maxns = Math.max(maxns, i - stack[stack.length - 1])
            }
        }
    }
    return maxns;
};

// 2.dp

var longestValidParentheses = function(s) {
    let maxns = 0;
    let dp = new Array(s.length).fill(0);
    for (let i = 1; i <s.length; i++) {
        if (s.charAt(i) === ')') {
            if(s.charAt(i - 1) === '(') {
                dp[i] = (i >= 2 ? dp[i - 2] :0) + 2;
            } else if( i - dp[i - 1] > 0 && s.charAt(i - dp[i - 1] - 1) === '(') {
                dp[i] = dp[i - 1] + ((i - dp[i - 1]) >= 2? dp[i - dp[i -1] - 2] : 0) + 2;
            }
            maxns = Math.max(maxns, dp[i]);
        }
    }
    return maxns;
};
