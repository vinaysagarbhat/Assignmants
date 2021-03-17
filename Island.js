const numIslands = (grid) => {
    let counter = 0;
  
    const dfs = (i, j) => {
      if (
        i >= 0 &&
        j >= 0 &&
        i < grid.length &&
        j < grid[i].length &&
        grid[i][j] === 1
      ) {
        grid[i][j] = 0;
        dfs(i + 1, j); // bottom
        dfs(i, j + 1); // right
        dfs(i - 1, j); // top
        dfs(i, j - 1); // left
        dfs(i - 1, j-1); // top-left diag
        dfs(i - 1, j+1); // top-right diag
        dfs(i + 1, j-1); // bottom-left diag
        dfs(i + 1, j+1); // bottom-right diag
      }
    };
  
    for (let i = 0; i < grid.length; i += 1) {
      for (let j = 0; j < grid[i].length; j += 1) {
        if (grid[i][j] === 1) {
          counter += 1;
          dfs(i, j);
        }
      }
    }
  
    return counter;
  };
  
  console.log(numIslands([
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1]
    ]))