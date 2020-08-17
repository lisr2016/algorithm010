// 189. 旋转数组
// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
//
// 示例 1:
//
// 输入: [1,2,3,4,5,6,7] 和 k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
//     向右旋转 1 步: [7,1,2,3,4,5,6]
// 向右旋转 2 步: [6,7,1,2,3,4,5]
// 向右旋转 3 步: [5,6,7,1,2,3,4]
// 示例 2:
//
// 输入: [-1,-100,3,99] 和 k = 2
// 输出: [3,99,-1,-100]
// 解释:
//     向右旋转 1 步: [99,-1,-100,3]
// 向右旋转 2 步: [3,99,-1,-100]
// 说明:
//
//     尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
// 要求使用空间复杂度为 O(1) 的 原地 算法。
// 通过次数151,188提交次数355,150


// 方法一：暴力法

var rotate = function(nums, k) {
    let temp, previous;
    for ( let i = 0; i < k; i++ ){
        previous = nums[nums.length - 1];
        for ( let j = 0; j < nums.length; j++ ){
            temp = nums[j];
            nums[j] = previous;
            previous = temp;
        }
    }
};
// 时间复杂度：O(n * k)
// 空间复杂度：O(1)

// 方法二：使用额外的数组

var rotate = function(nums, k) {
    let newNums = [];
    for ( let i = 0; i < nums.length; i++ ){
        newNums[(i + k) % nums.length] = nums[i];
    }
    for ( let i = 0; i < nums.length; i++){
        nums[i] = newNums[i];
    }
};
// 时间复杂度：O(n)，
// 空间复杂度：O(n)

// 方法三： 环状替换

// 假设，数组有n个元素，k是要求移动的次数。更进一步，假设n % k = 0。
// 第一轮中，所有移动数字的下标 i 满足i%k=0 。
// 这是因为我们每跳 k 步，我们只会到达相距为 k 个位置下标的数。
// 每一轮，我们都会移动 n/k 个元素。
// 下一轮中，我们会移动满足i%k=1 的位置的数。
// 这样的轮次会一直持续到我们再次遇到 i % k == 0 的地方为止。

var rotate = function(nums, k) {
    k = k % nums.length;
    let count = 0;
    for ( let start = 0; count < nums.length; start++ ){
        let current = start;
        let prev = nums[start];
        do {
            let next = ( current + k ) % nums.length;
            let temp = nums[next];
            nums[next] = prev;
            prev = temp;
            current = next;
            count++;
        } while ( start !== current );
    }
};
// 时间复杂度：O(n)，
// 空间复杂度：O(1)

// 方法四： 使用反转
// 当旋转数组k次， k % n 个尾部元素会被移动到头部， 剩下的元素会被向后移动。
// 首先将所有元素反转， 然后反转前k个元素， 再反转后面 n - k 个元素， 就能得到想要的结果

var rotate = function(nums, k) {
    k %= nums.length;
    reverse( nums, 0, nums.length -1 );
    reverse( nums, 0, k -1 );
    reverse( nums, k, nums.length -1 );

    function reverse(nums, start, end) {
        while ( start < end ){
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
};
// 时间复杂度：O(n)，
// 空间复杂度：O(1)


