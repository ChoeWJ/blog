import express from "express";

const app = express();

app.get("/"); // 들어오는 신호를 모두 받아 들여라

export default app;  // app을 모듈화 시켜서 다른 곳에서 파일을 불러올 수 있음