// 312. 戳气球
// 有 n 个气球，编号为0 到 n-1，每个气球上都标有一个数字，这些数字存在数组 nums 中。
//
// 现在要求你戳破所有的气球。如果你戳破气球 i ，就可以获得 nums[left] * nums[i] * nums[right] 个硬币。 这里的 left 和 right 代表和 i 相邻的两个气球的序号。注意当你戳破了气球 i 后，气球 left 和气球 right 就变成了相邻的气球。
//
// 求所能获得硬币的最大数量。
//
// 说明:
//
//     你可以假设 nums[-1] = nums[n] = 1，但注意它们不是真实存在的所以并不能被戳破。
// 0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100
// 示例:
//
//     输入: [3,1,5,8]
// 输出: 167
// 解释: nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
// coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167

var maxCoins = function (arr) {
    const nums = [];
    let n = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            nums[n++] = arr[i];
        }
    }
    nums[0] = nums[n++] = 1;

    let cache = [];
    for (let i = 0; i < n; i++) {
        cache[i] = [];
        for (let j = 0; j < n; j++) {
            cache[i][j] = 0;
        }
    }

    for (let k = 2; k < n; k++) {
        for (let left = 0; left < n - k; left++) {
            let right = left + k;
            for (let i = left + 1; i < right; i++) {
                let result = nums[left] * nums[i] * nums[right] + cache[left][i] + cache[i][right];
                cache[left][right] = Math.max(cache[left][right], result);
            }
        }
    }

    return cache[0][n - 1];
};