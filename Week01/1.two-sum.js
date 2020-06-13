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


