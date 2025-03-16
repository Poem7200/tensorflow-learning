const tf = require("@tensorflow/tfjs");

const t0 = tf.tensor(1);
t0.print();
console.log(t0);

const t1 = tf.tensor([1, 2]);
t1.print();
console.log(t1);

// tensor里面有个形状的问题shape，shape的length就是纬度，每一项表示该纬度下有多少项目
const t2 = tf.tensor([
  [1, 2],
  [3, 4, 5],
]);
t2.print();
console.log(t2);

const t3 = tf.tensor([
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
]);
t3.print();
console.log(t3);
