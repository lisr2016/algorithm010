学习笔记

动态规划、状态转移方程串讲

高级动态规划
(二维、三维、甚至需要压缩；状态方程更加复杂)
字符串算法

Java、C#、JavaScript、Python、Go strings are immutable
线程安全

Ruby、PHP、C 、C++ strings mutable

遍历字符串
Java
String x = "abbc":
for (int i = 0; i < x.size(); ++i){
    char ch = x.charAt(i);
}
for ch in x.toCharArray() {
    System.out.println(ch);
}

JavaScript
charAt
for ... of ...

高级字符串算法

最长子串、子序列(dp)


不同路径II 状态转移方程

dp[i][j] = dp[i - 1, j] + dp[i, j -`1]

字符串匹配算法

1.暴力法

2.Rabin-Karp 算法

3.KMP算法

(Boyer-Moore算法、 Sunday算法)

