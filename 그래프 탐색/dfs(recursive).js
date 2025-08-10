const visited = [];

const dfs = (R) => {
  visited[R] = true;

  for(let i = 0; i < graph[R].length ; i++ ) {
    if(visited[graph[R][i]] === false) {
      dfs(graph[R][i]);
    }
  }
}