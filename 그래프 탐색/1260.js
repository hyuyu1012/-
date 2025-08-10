const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().split("\n");

const[N,M,V] = input[0].split(" ").map(Number);

const graph = new Array(N+1).fill(0).map(() => []);


const dfs = (V) => {
  const stack = [];
  const visited  = new Array(N+1).fill(false);
  const result = [];
  stack.push(V);
  
  while(true) {
    if(stack.length ===0) break;
    const node = stack.pop();
    if(visited[node] === false) {
      visited[node] = true;
      result.push(node);  
    }

    graph[node].forEach(n => {
      if(visited[n] === false) {
        stack.push(n);
      }
    })
  }
  console.log(result.join(" "));
}

const bfs = (V) => {
  const result = [];
  const queue = [];
  const visited = new Array(N+1).fill(false);
  queue.push(V);
  while(queue.length > 0) {
    const node = queue.shift();
    if(visited[node] === false) {
      visited[node] = true;
      result.push(node);

      graph[node].reverse().forEach(n => {
        if(visited[n] === false) {
          queue.push(n);
        }
      })
    }    
  } 
  console.log(result.join(" "));
}





for(let i = 1; i <=M; i++) {
  const[a,b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}
for(let i = 1; i <=N; i++) {
  graph[i].sort((a,b) => b-a);
}

dfs(V);
bfs(V);