const tf = require("@tensorflow/tfjs");

// 传统for循环
const input = [1, 2, 3, 4]; // 这个是得分
// 权重
const w = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [4, 5, 6, 7],
];
const output = [0, 0, 0, 0]; // 这个是匹配的满意度

for (let i = 0; i < w.length; i++) {
  for (let j = 0; j < input.length; j++) {
    output[i] += input[j] * w[i][j];
  }
}

console.log(output);

// tensor处理
tf.tensor(w).dot(tf.tensor(input)).print();
