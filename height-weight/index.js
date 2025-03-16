import * as tfvis from "@tensorflow/tfjs-vis";
import * as tf from "@tensorflow/tfjs";

window.onload = () => {
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
};
