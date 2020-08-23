// 55. 跳跃游戏
// 给定一个非负整数数组，你最初位于数组的第一个位置。
//
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
//
// 判断你是否能够到达最后一个位置。
//
// 示例 1:
//
// 输入: [2,3,1,1,4]
// 输出: true
// 解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
// 示例 2:
//
// 输入: [3,2,1,0,4]
// 输出: false
// 解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。

// 贪心法
// O(n)  O(1)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let size = nums.length;
    let right = 0;
    for (let i = 0; i < size; i++) {
        if (i > right) break; // 当前位置超过当前最右边界，跳出循环，当前点不可到达
        right = Math.max(right, i + nums[i]); // 比较大小，更新最右边界
        if (right >= size - 1) return true; // 最右边界位置大于等于数组最后一个元素的位置，说明最后位置可以达到
    }
    return false;
};


// public boolean flag;
// public boolean canJump(int[] nums) {
//     int len = nums.length;
//     flag = false;
//     if(len <= 1)        return true;
//
//     dfs(nums, 0);
//     return flag;
// }
//
// private void dfs(int[] nums, int start) {
//     if(start >= nums.length - 1)
//     {
//         flag = true;
//         return;
//     }
//
//     if(nums[start] == 0)        return;
//
//     for(int i = 1; i <= nums[start]; i++)
//     {
//         int nextStart = start + i;
//
//         dfs(nums, nextStart);
//     }
// }
// 方案二 动态规划

/*
	dp 优化过后
*/
var canJump = function(nums) {
    let size = nums.length;
    if (size <= 1) return true;
    
    let dp = new Array(size).fill(false);
    // base case
    dp[0] = true;
    
    for (let i = 1; i < size; i++) {
        for (let j = 0; j < i; j ++) {
            if (dp[j] && j + nums[j] >= i){
                dp[i] = true;
                break;
            }
        }
    }
    
    return dp[size - 1];
};

var canJump = function (nums) {
    let size = nums.length;
    let dist = 0;
    for (let i = 0; i < size; i++) {
        if (dist < i || dist >= size - 1) break;
        dist = Math.max(dist, i + nums[i]);
    }
    return dist >= size - 1;
}
