// 45. 跳跃游戏 II
// 给定一个非负整数数组，你最初位于数组的第一个位置。
//
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
//
// 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
//
// 示例:
//
//     输入: [2,3,1,1,4]
// 输出: 2
// 解释: 跳到最后一个位置的最小跳跃数是 2。
//      从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
// 说明:
//
//     假设你总是可以到达数组的最后一个位置。

// 同跳跃游戏 I 不同的是，这道题假设总是可以到达数组最后一个位置
// 使用跳跃 I 中的贪心算法每次更新可到达最远距离的方法,得到的结果就是最少跳跃次数

var jump = function(nums) {
    let size = nums.length;
    let right = 0;
    let end = 0;
    let step = 0;
    for (let i = 0; i < size - 1; i++) {
        right = Math.max(right, i + nums[i]);
        if (i === end) {
            end = right;
            step++;
        }
    }
    return step;
};