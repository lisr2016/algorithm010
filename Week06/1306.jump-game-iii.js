// 1306. 跳跃游戏 III
// 这里有一个非负整数数组 arr，你最开始位于该数组的起始下标 start 处。当你位于下标 i 处时，你可以跳到 i + arr[i] 或者 i - arr[i]。
//
// 请你判断自己是否能够跳到对应元素值为 0 的 任一 下标处。
//
// 注意，不管是什么情况下，你都无法跳到数组之外。
//
//
//
// 示例 1：
//
// 输入：arr = [4,2,3,0,3,1,2], start = 5
// 输出：true
// 解释：
// 到达值为 0 的下标 3 有以下可能方案：
// 下标 5 -> 下标 4 -> 下标 1 -> 下标 3
// 下标 5 -> 下标 6 -> 下标 4 -> 下标 1 -> 下标 3
// 示例 2：
//
// 输入：arr = [4,2,3,0,3,1,2], start = 0
// 输出：true
// 解释：
// 到达值为 0 的下标 3 有以下可能方案：
// 下标 0 -> 下标 4 -> 下标 1 -> 下标 3
// 示例 3：
//
// 输入：arr = [3,0,2,1,2], start = 2
// 输出：false
// 解释：无法到达值为 0 的下标 1 处。
//
//
// 提示：
//
// 1 <= arr.length <= 5 * 10^4
// 0 <= arr[i] < arr.length
// 0 <= start < arr.length

// DFS:

const canReach = (arr, start) => {
    const val = arr[start];
    if (val === 0) return true;
    if (val === -1) return false;
    arr[start] = -1;
    return (start - val >= 0 && canReach(arr, start - val)) || (start + val < arr.length && canReach(arr, start + val));
};

// BFS:

const canReach = (arr, start) => {
    const visited = new Set();
    const queue = [start];
    for (let len = 0, max = arr.length; len < queue.length; ++len) {
        const idx = queue[len];
        if (visited.has(idx)) continue;
        if (arr[idx] === 0) return true;
        visited.add(idx);
        idx + arr[idx] < max && queue.push(idx + arr[idx]);
        idx - arr[idx] >= 0 && queue.push(idx - arr[idx]);
    }
    return false;
};

const canReach = (arr, start) => {
    const queue = [start];
    for (let len = 0, max = arr.length; len < queue.length; ++len) {
        const idx = queue[len];
        if (arr[idx] === -1) continue;
        if (arr[idx] === 0) return true;
        idx + arr[idx] < max && queue.push(idx + arr[idx]);
        idx - arr[idx] >= 0 && queue.push(idx - arr[idx]);
        arr[idx] = -1;
    }
    return false;
};


var canReach = function(arr, start) {
    // initialize queue by an arry
    let queue = Array(arr.length)
    // initialize done set
    let done = new Set()
    
    // initialize head and tail pointer of queue
    let head = tail = 0
    // invariant before loop:
    // invariant 1. set head and tail of queue
    queue[head] = start
    // invariant 2. add enqueued position into done set
    done.add(start)
    
    while (queue[head] != null) {
        // invariant during loop
        // invariant 1. dequeue the head firstly, then increase head pointer by one
        let i = queue[head++]
        
        // check whether it is target
        if (arr[i] === 0) {
            // termination 1: the dequeued one is the target and we can break loop
            return true
        }
        
        // enqueue new valid postion
        for (let j of [i + arr[i], i - arr[i]]) {
            if (j >= 0 && j < arr.length && !done.has(j)) {
                // invariant 2. increase tail pointer by one firstly, then enqueue one
                queue[++tail] = j
                // invariant 3. add enqueued position into done set
                done.add(j)
            }
        }
    }
    
    // termination 2: every position we can reach from the start is not the target
    // loop invariant after the normal loop: queue[head] == null && head == tail
    console.assert(arr[head] == null && head == tail, "something wrong")
    return false
};
