// 33. 搜索旋转排序数组
// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
//
// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
//
// 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
//
// 你可以假设数组中不存在重复的元素。
//
// 你的算法时间复杂度必须是 O(log n) 级别。
//
// 示例 1:
//
// 输入: nums = [4,5,6,7,0,1,2], target = 0
// 输出: 4
// 示例 2:
//
// 输入: nums = [4,5,6,7,0,1,2], target = 3
// 输出: -1


// 思路一：将 「旋转数组查找目标值」 转化成 「有序数组查找目标值」
// 暴力法，一遍循环，复杂度O(N)

// 思路二：直接对旋转数组进行二分查找。

var search = function(nums, target) {
    let lo = 0, hi = nums.length - 1, mid = 0;
    while (lo <= hi) {
        const mid = ((lo + hi) >> 1);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] >= nums[lo]) {
            if (target >= nums[lo] && target < nums[mid]) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[hi]) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
    }
    return - 1;
};