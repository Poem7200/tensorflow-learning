import * as tfvis from "@tensorflow/tfjs-vis";
import * as tf from "@tensorflow/tfjs";
import { getData } from "./data";

window.onload = async () => {
  const data = getData(400);

  tfvis.render.scatterplot(
    {
      name: "逻辑回归训练数据散点图",
    },
    {
      values: [
        data.filter((item) => item.label === 1),
        data.filter((item) => item.label === 0),
      ],
    }
  );

  // 初始化模型
  const model = tf.sequential();
  // 添加全链接层（因为需要激活函数）
  model.add(
    tf.layers.dense({
      units: 1,
      inputShape: [2],
      activation: "sigmoid",
    })
  );
  // 设置损失函数和优化器
  model.compile({
    loss: tf.losses.logLoss,
    optimizer: tf.train.adam(0.1),
  });

  // 把特征数量为2的数据转化为Tensor
  const inputs = tf.tensor(data.map((item) => [item.x, item.y]));
  const labels = tf.tensor(data.map((item) => item.label));

  // 训练数据
  await model.fit(inputs, labels, {
    batchSize: 40,
    epochs: 50,
    callbacks: tfvis.show.fitCallbacks({ name: "训练过程" }, ["loss"]),
  });
};
