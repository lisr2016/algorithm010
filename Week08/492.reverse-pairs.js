// 493. 翻转对
// 给定一个数组 nums ，如果 i < j 且 nums[i] > 2*nums[j] 我们就将 (i, j) 称作一个重要翻转对。
//
// 你需要返回给定数组中的重要翻转对的数量。
//
// 示例 1:
//
// 输入: [1,3,2,3,1]
// 输出: 2
// 示例 2:
//
// 输入: [2,4,3,5,1]
// 输出: 3
// 注意:
//
//     给定数组的长度不会超过50000。
// 输入数组中的所有数字都在32位整数的表示范围内。

const search = (bit, i) => {
    let sum = 0;
    while (i < bit.length) {
        sum += bit[i];
        i += i & -i;
    }
    return sum;
}

const insert = (bit, i) => {
    while (i > 0) {
        bit[i] += 1;
        i -= i & -i;
    }
    return bit;
}

const indexed = (arr, val) => {
    let l = 0, r = arr.length - 1, m = 0;
    while (l <= r) {
        m = l + ((r - l) >> 1);
        if (arr[m] >= val) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return l + 1;
}

var reversePairs = function (nums) {
    let count = 0;
    let copy = nums.slice().sort((a, b) => a - b);
    let bit = new Array(nums.length + 1).fill(0);
    for (let num of nums) {
        count += search(bit, indexed(copy, 2 * num + 1));
        bit = insert(bit, indexed(copy, num));
    }

    return count;
};