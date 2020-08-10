// 42. 接雨水
// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
//
//
//
// 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。
//
// 示例:
//
//     输入: [0,1,0,2,1,0,1,3,2,1,2,1]
//     输出: 6

// 方法一： 暴力法

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let size = height.length;
    if( size === 0 ) return 0;
    let ans = 0;
    for ( let i = 1; i < size - 1; i++ ){
        let max_left = 0, max_right = 0;
        for ( let j = i; j >= 0; j-- ){
            max_left = Math.max( max_left, height[j]);
        }
        for ( let j = i; j < size; j++ ){
            max_right = Math.max( max_right, height[j]);
        }
        ans += Math.min(max_left, max_right) - height[i];
    }
    return ans
};

// 时间复杂度：O(n^2)
// 空间复杂度：O(1)

// 方法二： 备忘录解法

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let size = height.length;
    if( size === 0 ) return 0;
    let ans = 0;
    let l_max = [], r_max = [];
    l_max[0] = height[0];
    r_max[size - 1] = height[size - 1]
    for( let i = 1; i < size; i++ ){
        l_max[i] = height[i] >= l_max[i-1] ? height[i] : l_max[i-1];
    }
    for( let i = size - 2; i >= 0; i-- ){
        r_max[i] = height[i] >= r_max[i+1] ? height[i] : r_max[i+1];
    }
    for( let i = 1; i < size - 1; i++ ){
        ans += ( l_max[i] <= r_max[i] ? l_max[i] : r_max[i] ) - height[i];
    }
    return ans;
};


// 时间复杂度：O(n)
// 空间复杂度：O(1)

// 方法三： 双指针法
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let size = height.length;
    if( size === 0 ) return 0;
    let ans = 0;
    for ( let i = 1; i < size - 1; i++ ){
        let max_left = 0, max_right = 0;
        for ( let j = i; j >= 0; j-- ){
            max_left = max_left >= height[j] ? max_left : height[j];
        }
        for ( let j = i; j < size; j++ ){
            max_right = max_right >= height[j] ? max_right : height[j];
        }
        ans += ( max_left <= max_right ? max_left : max_right ) - height[i];
    }
    return ans
};

// 时间复杂度：O(n)
// 空间复杂度：O(1)