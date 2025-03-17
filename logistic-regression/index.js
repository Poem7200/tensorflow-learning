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
};
