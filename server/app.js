import express from "express"; // Express 프레임워크를 불러와서 서버를 구성할 수 있게 함
import mongoose from "mongoose"; // Mongoose를 불러와 MongoDB와 연결 및 데이터 모델링 기능 사용
import config from "./config"; // 설정 파일(config/index.js)에서 환경 변수(MONGO_URI)를 불러옴

const app = express(); // Express 애플리케이션 인스턴스를 생성

const { MONGO_URI } = config; // config 객체에서 MONGO_URI 값을 구조 분해 할당

mongoose
  .connect(MONGO_URI) // Mongoose를 통해 MongoDB에 연결 시도
  .then(() => console.log("MongoDB connecting Success!!")) // 연결 성공 시 메시지 출력
  .catch((e) => console.log(e)); // 연결 실패 시 에러 출력

app.get("/"); // 루트 경로에 대한 GET 요청 핸들러를 등록 (현재는 아무 동작도 정의되지 않음)

export default app; // app 객체를 외부에서 사용할 수 있도록 export