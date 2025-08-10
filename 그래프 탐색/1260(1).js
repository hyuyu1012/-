const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const [N,M,V] = input[0].split(" ").map(Number);
const graph = new Array(N+1).fill(0).map(() => []);

const dfs = (V) => {
  const stack = [];
  stack.push(V);
  const visited = new Array(N+1).fill(false);
  const result = [];

  while(stack.length !==0) {
    const node = stack.pop();
    if(visited[node] === false) {
      visited[node] = true;
      result.push(node);

      graph[node].forEach(n => {
        if(visited[n] === false) {
          stack.push(n);
        }
      })    
    }
  }
  console.log(result.join(" "));
}

const bfs = (V) => {

}


for(let i = 1; i<=N; i++) {
  const [x,y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}


dfs(V);

