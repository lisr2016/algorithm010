学习笔记

第四周 深度优先搜索、广度优先搜索、贪心算法、二分查找

level-order-traversal：

广度优先：
标识一个层的结束，1）在queue里面加入一个特殊的点 2）按层遍历

var levelOrder = function(root) {
  if (!root) return [];
  let queue = [root];
  let result = [];
  while (queue.length > 0) {
      let currentLevel = [];
      let len = queue.length;
      while (len){
          let cur = queue.shift();
          currentLevel.push(cur.val);
          if (cur.left) queue.push(cur.left);
          if (cur.right) queue.push(cur.right);
          len--;
      }
      result.push(currentLevel);
  }
  return result;
};

深度优先遍历：
每次记录下当前在哪一层



二分查找前提：
1.目标函数的单调性
2.存在上下界
3.通过索引访问

模板：
left, right = 0, len(array) - 1
while left <= right:
    mid = (left + right) / 2
    if array[mid] == target:
        # find the target!!
        break or return result
    elid array[mid] < target:
        left = mid + 1
    else:
        right = mid - 1

x的平方根

/**
 * @param {number} x
 * @return {number}
 */
// 牛顿迭代法
var mySqrt = function(x) {
    var sqrts = function(x) {
        let result = (x + r / x) / 2;
        if (result === x) {
            return Math.floor(x);
        } else {
            return sqrts(result);
        }
    }

    let r = x;
    if (x===0) return 0;
    return sqrts(x);
};

// 二分法
// var mySqrt = function(x) {
//     if ( x=== 0 || x ===1 ) return x;

//     let left = 1, right = x;
//     let mid = 1;
//     while(left <= right) {
//         mid = left + ((right - left) >> 1);
//         if(mid * mid >x){
//             right = mid -1;
//         }else{
//             left = mid + 1;
//         }
//     }
//     return right;
// };


使用二分查找，寻找一个半有序数组 [4, 5, 6, 7, 0, 1, 2] 中间无序的地方
说明：同学们可以将自己的思路、代码写在第 4 周的学习总结中

思路:1.暴力法 循环一遍找出不符合升序/降序规律元素的位置，复杂度 O(n)，注意边界情况，
     2.二分法，复杂度O(log(N))

    先根据 nums[mid] 与 nums[lo] 的关系判断 mid 是在左段还是右段，
    接下来再判断 target 是在 mid 的左边还是右边，
    从而来调整左右边界 lo 和 hi。

     public int search(int[] nums, int target) {
         int lo = 0, hi = nums.length - 1, mid = 0;
         while (lo <= hi) {
             mid = lo + (hi - lo) / 2;
             if (nums[mid] == target) {
                 return mid;
             }
             // 先根据 nums[mid] 与 nums[lo] 的关系判断 mid 是在左段还是右段
             if (nums[mid] >= nums[lo]) {
                 // 再判断 target 是在 mid 的左边还是右边，从而调整左右边界 lo 和 hi
                 if (target >= nums[lo] && target < nums[mid]) {
                     hi = mid - 1;
                 } else {
                     lo = mid + 1;
                 }
             } else {
                 if (target > nums[mid] && target <= nums[hi]) {
                     lo = mid + 1;
                 } else {
                     hi = mid - 1;
                 }
             }
         }
         return -1;
     }
     
     
     
 模板：
 BFS
# Python
def BFS(graph, start, end):
    visited = set()
	queue = [] 
	queue.append([start]) 
	while queue: 
		node = queue.pop() 
		visited.add(node)
		process(node) 
		nodes = generate_related_nodes(node) 
		queue.push(nodes)
	# other processing work 
	...


Java
//Java
public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int x) {
        val = x;
    }
}

public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> allResults = new ArrayList<>();
    if (root == null) {
        return allResults;
    }
    Queue<TreeNode> nodes = new LinkedList<>();
    nodes.add(root);
    while (!nodes.isEmpty()) {
        int size = nodes.size();
        List<Integer> results = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            TreeNode node = nodes.poll();
            results.add(node.val);
            if (node.left != null) {
                nodes.add(node.left);
            }
            if (node.right != null) {
                nodes.add(node.right);
            }
        }
        allResults.add(results);
    }
    return allResults;
}


C++
// C/C++
void bfs(Node* root) {
  map<int, int> visited;
  if(!root) return ;

  queue<Node*> queueNode;
  queueNode.push(root);

  while (!queueNode.empty()) {
    Node* node = queueNode.top();
    queueNode.pop();
    if (visited.count(node->val)) continue;
    visited[node->val] = 1;

    for (int i = 0; i < node->children.size(); ++i) {
        queueNode.push(node->children[i]);
    }
  }

  return ;
}


JavaScript
//JavaScript
const bfs = (root) => {
  let result = [], queue = [root]
  while (queue.length > 0) {
    let level = [], n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.pop()
      level.push(node.val) 
      if (node.left) queue.unshift(node.left)
      if (node.right) queue.unshift(node.right)
    }
    result.push(level)
  }
  return result
};


DFS:
递归写法
Python
#Python
visited = set() 

def dfs(node, visited):
    if node in visited: # terminator
    	# already visited 
    	return 

	visited.add(node) 

	# process current node here. 
	...
	for next_node in node.children(): 
		if next_node not in visited: 
			dfs(next_node, visited)




C++
//C/C++
//递归写法：
map<int, int> visited;

void dfs(Node* root) {
  // terminator
  if (!root) return ;

  if (visited.count(root->val)) {
    // already visited
    return ;
  }

  visited[root->val] = 1;

  // process current node here. 
  // ...
  for (int i = 0; i < root->children.size(); ++i) {
    dfs(root->children[i]);
  }
  return ;
}




Java
//Java
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> allResults = new ArrayList<>();
        if(root==null){
            return allResults;
        }
        travel(root,0,allResults);
        return allResults;
    }


    private void travel(TreeNode root,int level,List<List<Integer>> results){
        if(results.size()==level){
            results.add(new ArrayList<>());
        }
        results.get(level).add(root.val);
        if(root.left!=null){
            travel(root.left,level+1,results);
        }
        if(root.right!=null){
            travel(root.right,level+1,results);
        }
    }




JavaScript
//JavaScript
const visited = new Set()
const dfs = node => {
  if (visited.has(node)) return
  visited.add(node)
  dfs(node.left)
  dfs(node.right)
}


非递归写法
Python
#Python
def DFS(self, tree): 

	if tree.root is None: 
		return [] 

	visited, stack = [], [tree.root]

	while stack: 
		node = stack.pop() 
		visited.add(node)

		process (node) 
		nodes = generate_related_nodes(node) 
		stack.push(nodes) 

	# other processing work 
	...




C++
//C/C++
//非递归写法：
void dfs(Node* root) {
  map<int, int> visited;
  if(!root) return ;

  stack<Node*> stackNode;
  stackNode.push(root);

  while (!stackNode.empty()) {
    Node* node = stackNode.top();
    stackNode.pop();
    if (visited.count(node->val)) continue;
    visited[node->val] = 1;


    for (int i = node->children.size() - 1; i >= 0; --i) {
        stackNode.push(node->children[i]);
    }
  }

  return ;
}
