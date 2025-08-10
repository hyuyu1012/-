const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
const n = Number(input.shift());

for(let i = 0; i < input.length; i++) {
  input[i] = input[i].split(" ").map(Number);
}

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

while(true) {
  let SafeAreaCount = 0;
  let height = 1;
  for(let i = 0; i<n; i++) {
    for(let j = 0; j<n; j++) {
      const ny = dy + i;
      const nx = dx + j;
      
    }
  }

  height = height + 1;
  if(SafeAreaCount === 0) break;
}
