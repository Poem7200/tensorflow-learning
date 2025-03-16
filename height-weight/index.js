import * as tfvis from "@tensorflow/tfjs-vis";
import * as tf from "@tensorflow/tfjs";

window.onload = async () => {
  const heights = [150, 160, 170];
  const weights = [40, 50, 60];

  tfvis.render.scatterplot(
    {
      name: "身高体重归一化",
    },
    {
      values: heights.map((item, i) => ({ x: item, y: weights[i] })),
    },
    {
      xAxisDomain: [140, 180],
      yAxisDomain: [30, 70],
    }
  );

  // 归一化
  const inputs = tf.tensor(heights).sub(150).div(20);

  const labels = tf.tensor(weights).sub(40).div(20);

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

  await model.fit(inputs, labels, {
    // 小批量大小
    batchSize: 3,
    // 迭代次数
    epochs: 200,
    callbacks: tfvis.show.fitCallbacks({ name: "训练过程" }, ["loss"]),
  });

  // 使用训练好的模型去预测，注意数据要归一化
  const output = model.predict(tf.tensor([180]).sub(150).div(20));
  // 返回的预测结果要反归一化
  alert(`如果身高是180，预测的体重是${output.mul(20).add(40).dataSync()[0]}`);
};
