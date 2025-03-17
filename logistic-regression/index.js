import * as tfvis from "@tensorflow/tfjs-vis";
import * as tf from "@tensorflow/tfjs";
import { getData } from "./data";

window.onload = () => {
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
};
