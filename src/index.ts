import express from "express";
import { logger } from "./middleware/logger";
import bodyParser from "body-parser";

import webhook from "./core/webhook";

// 实例化express app
const app = express();
const PORT = 3000;

// 配置静态目录
app.use(express.static("./assets"));

// 使用body解析中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 使用自定义中间件
app.use(logger);

// 使用自定义路由中间件
app.use("/webhook", webhook);

// 主页面路由
app.get("/", (_, res) => {
  res.send("<h1>Hello world</h1>");
});

// 404 路由
app.use("*", (_, res) => {
  res.status(404).send("404 not found");
});

// 启动express app监听
app.listen(PORT, () => {
  console.log(`Node.js Server is running at http://127.0.0.1:${PORT}`);
});
