import * as tfvis from "@tensorflow/tfjs-vis";
import * as tf from "@tensorflow/tfjs";

window.onload = () => {
  const xs = [1, 2, 3, 4];
  const ys = [1, 3, 5, 7];

  tfvis.render.scatterplot(
    {
      name: "线性回归训练集",
    },
    {
      values: xs.map((x, i) => ({ x, y: ys[i] })),
    },
    {
      xAxisDomain: [0, 5],
      yAxisDomain: [0, 8],
    }
  );

  // 创建连续模型：下一层的输入一定是上一层的输出
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
};
