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

var moveZeroes = (nums) => {
    let i = 0, j = 0;
    for (; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            j++;
        }
    }
}
// 时间复杂度： O(n)
// 空间复杂度： O(1)