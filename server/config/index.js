import dotenv from "dotenv"; // dotenv 패키지를 불러와서 환경변수(.env) 파일을 사용할 수 있게 함
dotenv.config(); // .env 파일에 정의된 환경 변수를 process.env에 로드

export default {
  MONGO_URI: process.env.MONGO_URI, // .env에서 불러온 MONGO_URI 값을 MONGO_URI라는 이름으로 외부에 export
};