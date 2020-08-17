// 88. 合并两个有序数组
// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
//
//
//
// 说明:
//
//     初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
//
//
// 示例:
//
//     输入:
//         nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
//
// 输出: [1,2,2,3,5,6]

// 归并排序

var merge = function(nums1, m, nums2, n) {
    let left = 0;
    let right = 0;
    let tmp_nums1 = nums1.slice(0,m);
    let tmp_nums2 = nums2.slice(0,n);
    let result = [];
    while(left < m && right < n){
        if(tmp_nums1[left] < tmp_nums2[right]){
            result.push(tmp_nums1[left]);
            left++;
        }else{
            result.push(tmp_nums2[right]);
            right++;
        }
    }
    result = result.concat(tmp_nums1.slice(left)).concat(tmp_nums2.slice(right));
    for(let i = 0;i < result.length;i++){
        nums1[i] = result[i];
    }
};

// 时间复杂度 : O(n + m)
// 空间复杂度 : O(n + m)
