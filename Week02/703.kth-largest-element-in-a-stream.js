// 703. 数据流中的第K大元素
// 设计一个找到数据流中第K大元素的类（class）。注意是排序后的第K大元素，不是第K个不同的元素。
//
// 你的 KthLargest 类需要一个同时接收整数 k 和整数数组nums 的构造器，它包含数据流中的初始元素。每次调用 KthLargest.add，返回当前数据流中第K大的元素。
//
// 示例:
//
//     int k = 3;
// int[] arr = [4,5,8,2];
// KthLargest kthLargest = new KthLargest(3, arr);
// kthLargest.add(3);   // returns 4
// kthLargest.add(5);   // returns 5
// kthLargest.add(10);  // returns 5
// kthLargest.add(9);   // returns 8
// kthLargest.add(4);   // returns 8
// 说明:
//     你可以假设 nums 的长度≥ k-1 且k ≥ 1。


/**
 * 交换数组元素
 * @param {number[]} arr 数组
 * @param {number} i1 元素1
 * @param {number} i2 元素2
 */
function swap(arr, i1, i2) {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    // 第一个元素空着
    this.minHeap = [null];
    this.k = k;
    // 所有元素都添加到最小堆
    for (let i = 0; i < nums.length; i++) {
        this.add(nums[i]);
    }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    if (this.minHeap.length <= this.k) {
        // 最小堆没满，放到最小堆
        this.minHeap.push(val);
        // 上浮最新的元素，维护堆的秩序
        this.up(this.minHeap.length - 1);
    } else {
        if (val > this.minHeap[1]) {
            // 新的元素比最小堆堆顶大，替换最小堆堆顶
            this.minHeap[1] = val;
            // 下沉这个元素，维护堆的秩序
            this.down(1);
        }
        // 否则直接丢弃这个元素
    }
    return this.minHeap[1];
};
/**
 * 最小堆的上浮操作
 * @param {number} idx 要上浮的元素下标
 */
KthLargest.prototype.up = function (idx) {
    let parent = Math.floor(idx / 2);
    if (parent >= 1 && this.minHeap[parent] > this.minHeap[idx]) {
        swap(this.minHeap, parent, idx);
        // 递归上浮
        this.up(parent);
    }
};
/**
 * 最小堆的下沉操作
 * @param {number} idx 要下沉的元素下标
 */
KthLargest.prototype.down = function (idx) {
    let to = idx;
    // 和左子元素比较
    let left = idx * 2;
    if (left < this.minHeap.length && this.minHeap[left] < this.minHeap[to]) {
        to = left;
    }
    // 和右子元素比较
    let right = idx * 2 + 1;
    if (right < this.minHeap.length && this.minHeap[right] < this.minHeap[to]) {
        to = right;
    }
    if (to !== idx) {
        swap(this.minHeap, to, idx);
        // 递归下沉
        this.down(to);
    }
};









// ====================================


/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.pq = new PriorityQueue(nums);
    this.k = k;
    
    // [4,5,8], k = 3
    while (this.pq.size() > k) {
        this.pq.poll();
    }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (this.pq.size() < this.k) {
        this.pq.offer(val);
    } else if (val > this.pq.peek()) {
        this.pq.poll();
        this.pq.offer(val);
    }
    
    return this.pq.peek();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

class PriorityQueue {
    constructor(data) {
        this.comparator = (a, b) => a - b;
        this.data = data;
        this.heapify();
    }
    
    heapify() {
        if (this.size < 2) return;
        
        for (let i = 1; i < this.size(); i++) {
            this.bubbleUp(i);
        }
    }
    
    peek() {
        if (this.size() === 0) return null;
        
        return this.data[0];
    }
    
    offer(value) {
        this.data.push(value);
        this.bubbleUp(this.size() - 1);
    }
    
    poll() {
        if (this.size() === 0) return null;
        
        const result = this.data[0];
        const last = this.data.pop();
        
        if (this.size() !== 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        
        return result;
    }
    
    bubbleDown(index) {
        const lastIndex = this.size() - 1;
        
        while (true) {
            let leftIndex = index * 2 + 1;
            let rightIndex = index * 2 + 2;
            let findIndex = index;
            
            if (leftIndex <= lastIndex && this.comparator(this.data[leftIndex], this.data[findIndex]) < 0){
                findIndex = leftIndex;
            }
            
            if (rightIndex <= lastIndex && this.comparator(this.data[rightIndex], this.data[findIndex]) < 0) {
                findIndex = rightIndex;
            }
            
            if (index !== findIndex) {
                this.swap(index, findIndex);
                index = findIndex;
            } else {
                break;
            }
        }
        
    }
    
    bubbleUp(index) {
        
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            
            if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
        
    }
    
    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
    }
    
    size() {
        return this.data.length;
    }
    
    
}


// =============================================

/**
 * @param {number} x
 */
const Node = function(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

/**
 * @param {number} x
 */
const BST = function(x) {
    this.root = new Node(x);
}

/**
 * @param {number} x
 */
BST.prototype.add = function(x) {
    let curr = this.root;
    if (x < curr.val) {
        curr.left
            ? curr.left.add(x)
            : curr.left = new BST(x);
    } else {
        curr.right
            ? curr.right.add(x)
            : curr.right = new BST(x);
    }
}

/**
 * @param {number} k
 */
BST.prototype.search = function(k) {
    const stack = [], inorder = [];
    let curr = this;
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.root ? curr.root.right : null;
        }
        curr = stack.pop();
        inorder.push(curr.root.val);
        curr = curr.root ? curr.root.left : null;
        if (inorder.length === k) {
            return inorder.pop();
        }
    }
    return null;
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.head = null;
    for (let i = 0; i < nums.length; i++) {
        this.head ? this.head.add(nums[i]) : this.head = new BST(nums[i]);
    }
    this.k = k;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.head ? this.head.add(val) : this.head = new BST(val);
    return this.head.search(this.k);
    
};


// ==============================================================

// public class KthLargest {
//
//     private PriorityQueue<Integer> queue;
//     private int limit;
//
//     public KthLargest(int k, int[] nums) {
//     limit = k;
//     queue = new PriorityQueue<>(k);
//     for (int num : nums) {
//     add(num);
//  }
// }
//
// public int add(int val) {
//     if (queue.size() < limit) {
//         queue.add(val);
//     } else if (val > queue.peek()) {
//         queue.poll();
//         queue.add(val);
//     }
//
//     return queue.peek();
//  }
// }
