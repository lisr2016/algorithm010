// 283. 移动零
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
//
// 示例:
//
//     输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 说明:
//
//     必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。

// 方法一：空间局部优化
var moveZeroes = function(nums) {
    let n = nums.length;
    let numZeroes = 0;
    for (let i = 0; i < n; i++){
        numZeroes += (nums[i] === 0);
    }

    let ans = [];
    for(let i = 0; i < n; i++){
        if (nums[i] !== 0){
            ans.push(nums[i]);
        }
    }

    while (numZeroes--){
        ans.push(0);
    }

    for(let i = 0; i < n; i++){
        nums[i] = ans[i];
    }
};

// 时间复杂度： O(n)
// 空间复杂度： O(n)

// 方法二：空间最优，操作局部优化（双指针）
var moveZeroes = function(nums) {
    let lastNonZeroFoundAt = 0;
    for (let i = 0 ; i < nums.length; i++){
        if (nums[i] !== 0){
            nums[lastNonZeroFoundAt++] = nums[i];
        }
    }

    for (let i = lastNonZeroFoundAt; i < nums.length; i++){
        nums[i] = 0
    }
};

// 时间复杂度： O(n)
// 空间复杂度： O(1)


// 方法三：swap
var moveZeroes = (nums) => {
    let i = 0, j = 0
    for (; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[j]
            nums[j] = nums[i]
            nums[i] = temp
            j++
        }
    }
}
// 时间复杂度： O(n)
// 空间复杂度： O(1)