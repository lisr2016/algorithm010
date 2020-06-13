// 双指针法
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(!nums || nums.length === 0) return 0;
    let i = 0;
    for ( let j = 1; j < nums.length ; j++ ){
        if ( nums[j] !== nums[i] ){
            if ( j - i > 1 ){
                nums[i+1] = nums[j]
            }
            i++
        }
    }
    return i + 1;
};

// 时间复杂度：O(n)
// 空间复杂度：O(1)