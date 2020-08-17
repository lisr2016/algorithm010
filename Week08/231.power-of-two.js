// 231. 2的幂
// 给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
//
// 示例 1:
//
// 输入: 1
// 输出: true
// 解释: 20 = 1
// 示例 2:
//
// 输入: 16
// 输出: true
// 解释: 24 = 16
// 示例 3:
//
// 输入: 218
// 输出: false



// 方法一：去除二进制中最右边的 1

var isPowerOfTwo = function(n) {
    if (n < 1) return false;
    return (n & (n - 1)) === 0;
};

// 时间复杂度：O(1)
// 空间复杂度：O(1)

// 方法二：获取二进制中最右边的 1

var isPowerOfTwo = function(n) {
    if (n < 1) return false;
    return (n & (-n)) === n;
};

// 时间复杂度：O(1)
// 空间复杂度：O(1)