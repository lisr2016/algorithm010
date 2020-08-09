// 300. 最长上升子序列
// 给定一个无序的整数数组，找到其中最长上升子序列的长度。
//
// 示例:
//
//     输入: [10,9,2,5,3,7,101,18]
// 输出: 4
// 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
// 说明:
//
//     可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
// 你算法的时间复杂度应该为 O(n2) 。
// 进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?

//方法一.dp
var lengthOfLIS = function(nums) {
    if (nums.length === 0) return 0;
    let dp = [];
    dp[0] = 1;
    let maxans = 1;
    for (let i = 1; i< nums.length; i++){
        let maxval = 0;
        for (let j = 0; j< i; j++){
            if (nums[i] > nums[j]) {
                maxval = Math.max(maxval, dp[j]);
            }
        }
        dp[i] = maxval + 1;
        maxans = Math.max(maxans, dp[i]);
    }
    return maxans;
};
// 时间复杂度：O(n^2)
// 空间复杂度：O(n)


// 方法二：二分查找

var lengthOfLIS = function(nums) {
    let tails = [];
    nums.forEach((num) => {
        // 二分搜索：找到大于等于 num 的左侧边界，如果全小，则 left = tails.length
        let left = 0, right = tails.length - 1, mid;
        while(left <= right) {
            mid = left + parseInt((right - left) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else if (tails[mid] > num) {
                right = mid - 1;
            } else if (tails[mid] === num) {
                // 收缩左侧边界
                right = mid - 1;
            }
        }
        tails[left] = num;
    })
    return tails.length;
};

// 时间复杂度：O(n\log n)
// 空间复杂度：O(n)