// 221. 最大正方形
// 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。
//
// 示例:
//
//     输入:
//
//         1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0
//
// 输出: 4


let maximalSquare = (A, max = 0) => {
    let M = A.length,
        N = M ? A[0].length : 0;
    let m = [...Array(M + 1)].map(row => Array(N + 1).fill(-1));
    let go = (i, j) => {
        if (m[i][j] > -1)
            return m[i][j];
        if (!i || !j)
            return m[i][j] = 0;
        let best = 0;
        if (A[i - 1][j - 1] == '1')
            best = 1 + Math.min(go(i - 1, j - 1), go(i - 1, j), go(i, j - 1));
        max = Math.max(max, best * best);
        return m[i][j] = best;
    };
    for (let i = 1; i <= M; ++i)
        for (let j = 1; j <= N; ++j)
            go(i, j);
    return max;
};

let maximalSquare = (A, max = 0) => {
    let M = A.length,
        N = M ? A[0].length : 0;
    let dp = [...Array(M + 1)].map(row => Array(N + 1).fill(0));
    for (let i = 1; i <= M; ++i)
        for (let j = 1; j <= N; ++j)
            if (A[i - 1][j - 1] == '1')
                dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]),
                    max = Math.max(max, dp[i][j] * dp[i][j]);
    return max;
}

let maximalSquare = (A, max = 0) => {
    let M = A.length,
        N = M ? A[0].length : 0;
    let pre = Array(N + 1).fill(0),
        cur = Array(N + 1).fill(0);
    for (let i = 1; i <= M; ++i, [[pre, cur]] = [[cur, pre]])
        for (let j = 1; j <= N; ++j)
            if (A[i - 1][j - 1] == '1')
                cur[j] = 1 + Math.min(pre[j - 1], pre[j], cur[j - 1]),
                    max = Math.max(max, cur[j] * cur[j]);
            else
                cur[j] = 0;
    return max;
}