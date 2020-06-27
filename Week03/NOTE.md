学习笔记
第三周： 泛型递归、树的递归;分治、回溯

递归代码模板

// Java
public void recur(int level, int param) {

  // terminator

  if (level > MAX_LEVEL) {
    // process result
    return;
  }

  // process current logic

  process(level, param);

  // drill down
  recur( level: level + 1, newParam);

  // restore current status

}


def recursion(level, param1, param2, ...):

    # recursion terminator
    if level > MAX_LEVEL:
	   process_result
	   return
    # process logic in current level
    process(level, data...)
    # drill down
    self.recursion(level + 1, p1, ...)
    # reverse the current level status if needed -->


写递归三个思维的要点:
1.抵制人肉递归的诱惑
2.找最近重复性
3.数学归纳法思维

分治代码模板


def divide_conquer(problem, param1, param2, ...):

  <!-- # recursion terminator -->
  if problem is None:
	print_result
	return
  <!-- # prepare data -->
  data = prepare_data(problem)
  subproblems = split_problem(problem, data)
  <!-- # conquer subproblems -->
  subresult1 = self.divide_conquer(subproblems[0], p1, ...)
  subresult2 = self.divide_conquer(subproblems[1], p1, ...)
  subresult3 = self.divide_conquer(subproblems[2], p1, ...)
  …
  <!-- # process and generate the final result -->
  result = process_result(subresult1, subresult2, subresult3, …)

  <!-- # revert the current level states -->

分治和递归模板的不同之处：最后把子结果组装成一个大的结果，最后返回。

回溯：
Backtracking
(一种递归的情况)


题目：
majority-element
众数
方法：分治/数学统计

letter-combinations-of-a-phone-number
分治回溯

class Solution {

    public List<String> letterCombinations(String digits) {
        if (digits == null || digits.length() == 0) {
            return new ArrayList();
        }
        Map<Character, String> map = new HashMap<Character, String>();
        map.put("2", "abc");
        map.put("3", "def");
        map.put("4", "ghi");
        map.put("5", "jkl");
        map.put("6", "mno");
        map.put("7", "pqrs");
        map.put("8", "tuv");
        map.put("9", "wxyz");
        List<String> res = new LinkedList<String>();
        search("", digits, 0, res, map);
        return res;
    }

    private void search(String s,
                          String digits,
                          int i,  // level
                          List<String> res,
                          Map<Character, String> map){
        // terminator
        if (i == digits.length()){
            res.add(s);
            return;;
        }

        // process
        String letters = map.get(digits.charAt(i));
        for (int j = 0; j < letters.length(); j++){
            // drill down
            search(s + letters.charAt(j), digits, i + 1, res, map);
        }

        //reverse
    }
}


