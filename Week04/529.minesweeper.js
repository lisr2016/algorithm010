// 529. 扫雷游戏
// 让我们一起来玩扫雷游戏！
//
// 给定一个代表游戏板的二维字符矩阵。 'M' 代表一个未挖出的地雷，'E' 代表一个未挖出的空方块，'B' 代表没有相邻（上，下，左，右，和所有4个对角线）地雷的已挖出的空白方块，数字（'1' 到 '8'）表示有多少地雷与这块已挖出的方块相邻，'X' 则表示一个已挖出的地雷。
//
// 现在给出在所有未挖出的方块中（'M'或者'E'）的下一个点击位置（行和列索引），根据以下规则，返回相应位置被点击后对应的面板：
//
// 如果一个地雷（'M'）被挖出，游戏就结束了- 把它改为 'X'。
// 如果一个没有相邻地雷的空方块（'E'）被挖出，修改它为（'B'），并且所有和其相邻的方块都应该被递归地揭露。
// 如果一个至少与一个地雷相邻的空方块（'E'）被挖出，修改它为数字（'1'到'8'），表示相邻地雷的数量。
// 如果在此次点击中，若无更多方块可被揭露，则返回面板。
//
//
// 示例 1：
//
// 输入:
//
//        [['E', 'E', 'E', 'E', 'E'],
//         ['E', 'E', 'M', 'E', 'E'],
//         ['E', 'E', 'E', 'E', 'E'],
//         ['E', 'E', 'E', 'E', 'E']]
//
// Click : [3,0]
//
// 输出:
//
//        [['B', '1', 'E', '1', 'B'],
//         ['B', '1', 'M', '1', 'B'],
//         ['B', '1', '1', '1', 'B'],
//         ['B', 'B', 'B', 'B', 'B']]
//
// 解释:
//
//     示例 2：
//
// 输入:
//
//        [['B', '1', 'E', '1', 'B'],
//         ['B', '1', 'M', '1', 'B'],
//         ['B', '1', '1', '1', 'B'],
//         ['B', 'B', 'B', 'B', 'B']]
//
// Click : [1,2]
//
// 输出:
//
//         [['B', '1', 'E', '1', 'B'],
//         ['B', '1', 'X', '1', 'B'],
//         ['B', '1', '1', '1', 'B'],
//         ['B', 'B', 'B', 'B', 'B']]
//
// 解释:
//
//
//
//     注意：
//
// 输入矩阵的宽和高的范围为 [1,50]。
// 点击的位置只能是未被挖出的方块 ('M' 或者 'E')，这也意味着面板至少包含一个可点击的方块。
// 输入面板不会是游戏结束的状态（即有地雷已被挖出）。
// 简单起见，未提及的规则在这个问题中可被忽略。例如，当游戏结束时你不需要挖出所有地雷，考虑所有你可能赢得游戏或标记方块的情况。


var updateBoard = function (board, click) {
    const rows = board.length;
    const cols = board[0].length;

    dfs(click[0], click[1]);
    return board;

    function dfs(i, j) {
        if (!board[i][j]) return;
        if (board[i][j] === 'M') {
            // 点中了雷，游戏结束，把它改为 'X'
            board[i][j] = 'X';
            return;
        }
        if (board[i][j] !== 'E') return;
        const mines = checkForMine(i, j); // 检查周围地雷数目

        if (mines) {
            board[i][j] = mines.toString();
            return;
        } else {
            // 如果一个没有相邻地雷的空方块（'E'）被挖出，修改它为（'B'），并且所有和其相邻的方块都应该被递归地揭露
            board[i][j] = 'B';
            for (let x = Math.max(i - 1, 0); x < Math.min(i + 2, rows); x++) {
                for (let y = Math.max(j - 1, 0); y < Math.min(j + 2, cols); y++) {
                    dfs(x, y);
                }
            }
        }
    }

    function checkForMine(x, y) {
        let mines = 0;
        for (let i = Math.max(x - 1, 0); i < Math.min(x + 2, rows); i++) {
            for (let j = Math.max(y - 1, 0); j < Math.min(y + 2, cols); j++) {
                if (board[i][j] === 'M') mines++;
            }
        }
        return mines;
    }
}


//===============================================

const updateBoard = (board, click) => {
    const m = board.length;
    const n = board[0].length;
    const dx = [1, 1, 1, -1, -1, -1, 0, 0];
    const dy = [1, 0, -1, 0, 1, -1, 1, -1];
    const inBound = (x, y) => x >= 0 && x < m && y >= 0 && y < n; // 辅助函数
    
    const update = (x, y) => {
        if (!inBound(x, y) || board[x][y] !== 'E') return; // 不在界内或不是E，直接返回
        let count = 0;
        for (let i = 0; i < 8; i++) { // 统计周围雷的个数
            const nX = x + dx[i];
            const nY = y + dy[i];
            if (inBound(nX, nY) && board[nX][nY] === 'M') {
                count++;
            }
        }
        if (count === 0) { // 如果周围没有雷，标记B，递归周围的点
            board[x][y] = 'B';
            for (let i = 0; i < 8; i++) {
                update(x + dx[i], y + dy[i]);
            }
        } else {
            board[x][y] = count + '';
        }
    };
    
    const [cX, cY] = click;
    if (board[cX][cY] === 'M') { // 第一下就踩雷了
        board[cX][cY] = 'X';
    } else {
        update(cX, cY); // 开启dfs
    }
    return board;
};



const updateBoard = (board, click) => {
    const m = board.length;
    const n = board[0].length;
    const dx = [1, 1, 1, -1, -1, -1, 0, 0];
    const dy = [1, 0, -1, 0, 1, -1, 1, -1];
    const inBound = (x, y) => x >= 0 && x < m && y >= 0 && y < n;
    
    const bfs = (x, y) => {
        const queue = [[x, y]];
        while (queue.length) {
            const [x, y] = queue.shift();
            let count = 0;
            for (let i = 0; i < 8; i++) {
                const nX = x + dx[i];
                const nY = y + dy[i];
                if (inBound(nX, nY) && board[nX][nY] === 'M') {
                    count++;
                }
            }
            if (count === 0) {
                board[x][y] = 'B';
                for (let i = 0; i < 8; i++) {
                    const nX = x + dx[i];
                    const nY = y + dy[i];
                    if (inBound(nX, nY) && board[nX][nY] === 'E') {
                        board[nX][nY] = 'B'; // 变成一个非E字符就行，标记这个节点访问过了
                        queue.push([nX, nY]);
                    }
                }
            } else {
                board[x][y] = count + '';
            }
        }
    };
    
    const [cX, cY] = click;
    if (board[cX][cY] === 'M') {
        board[cX][cY] = 'X';
    } else {
        bfs(cX, cY);
    }
    return board;
};
