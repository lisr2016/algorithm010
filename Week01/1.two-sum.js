// 1. 两数之和
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
//
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
//
//
//
// 示例:
//
//     给定 nums = [2, 7, 11, 15], target = 9
//
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// 方法一：暴力法
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function ( nums, target ) {
    for ( let i = 0; i < nums.length; i++ ){
        for ( let j = i +1; j < nums.length; j++ ){
            if ( nums[j] === target - nums[i] ){
                return [ i,j ];
            }
        }
    }
};
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)

// 方法二：两次哈希表

var twoSum = function ( nums, target ) {
    const obj = {};
    for ( let i = 0; i < nums.length; i++ ){
        obj[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++ ){
        let complement = target - nums[i];
        if ( obj.hasOwnProperty(complement) && i !== obj[complement] ){
            return [i, obj[complement]];
        }
    }
};
// 时间复杂度：O(n)，
// 空间复杂度：O(n)

// 方法三： 一次哈希表

var twoSum = function ( nums, target ) {
    const obj = {};
    for (let i = 0; i < nums.length; i++ ){
        let complement = target - nums[i];
        if ( obj.hasOwnProperty(complement) ){
            return [obj[complement], i];
        }
        obj[nums[i]] = i;
    }
};
// 时间复杂度：O(n)，
// 空间复杂度：O(n)


