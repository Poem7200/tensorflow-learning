import * as tfvis from "@tensorflow/tfjs-vis";
import * as tf from "@tensorflow/tfjs";

// 等页面加载完成之后再处理
window.onload = async () => {
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
  // dense是全链接层
  model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
  // 设置损失函数（使用MSE均方误差）
  // 设置优化器（使用SGD随机梯度下降，并设置学习率）
  model.compile({
    loss: tf.losses.meanSquaredError,
    optimizer: tf.train.sgd(0.1),
  });

  const inputs = tf.tensor(xs);
  const labels = tf.tensor(ys);
  await model.fit(inputs, labels, {
    // 小批量大小
    batchSize: 4,
    // 迭代次数
    epochs: 100,
    callbacks: tfvis.show.fitCallbacks({ name: "训练过程" }, ["loss"]),
  });
};
