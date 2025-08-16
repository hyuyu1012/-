const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const n = Number(input.shift());
const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));

for(let i = 0; i < n; i++) {
  input[i] = input[i].split(" ");
}

dp[0][0] = input[0][0];

const cal = (c) => {

}



for(let i = 0; i < n; i + 1) {
  for(let j = 0; j < n; j + 2) {
    let current = input[i][j];
    let op;
    if(i-1 >= 0 && j-1 >=0) {
      const temp = input[i-1][x-1];          
    }
    if(j-2>=0) {
      const temp = Number(input[i][j-2]);
      op = input[i][j-1] 
      cal(current, temp, op);
    }
    if(i-2>=0) {
      const temp = Numbe(input[i-2][j]);
      op = input[i-1][j]
      cal(current, temp, op);
    }
  }
}
