import express from "express"; // Express 프레임워크 불러오기
import mongoose from "mongoose"; // MongoDB ODM인 Mongoose 불러오기
import config from "./config"; // 환경 설정(config) 불러오기
import hpp from "hpp"; // HTTP Parameter Pollution 방지 미들웨어
import helmet from "helmet"; // 보안 관련 HTTP 헤더 설정 미들웨어
import cors from "cors"; // CORS(Cross-Origin Resource Sharing) 설정 미들웨어

// Routes
import postsRoutes from "./routes/api/post"; // 게시글 라우터 불러오기
import morgan from "morgan"; // HTTP 요청 로그 미들웨어

const app = express(); // Express 앱 인스턴스 생성
const { MONGO_URI } = config; // 환경 설정에서 MongoDB URI 추출

// 보안 관련 미들웨어 등록
app.use(hpp()); // 파라미터 오염 방지
app.use(helmet()); // 다양한 보안 헤더 설정

// CORS 설정 (모든 origin 허용, 인증 정보 포함)
app.use(cors({ origin: true, credentials: true }));

// HTTP 요청 로그 출력 (개발 환경용)
app.use(morgan("dev"));

// JSON 파싱 미들웨어 (req.body 사용 가능하게 함)
app.use(express.json());

// MongoDB 연결
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connecting Success!!")) // 연결 성공 시 메시지 출력
  .catch((e) => console.log(e)); // 연결 실패 시 에러 출력

// 기본 라우트 ("/"로 요청 시 아무 동작 안 함)
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// 게시글 API 라우터 등록 (/api/post로 시작하는 요청 처리)
app.use("/api/post", postsRoutes);

export default app; // 앱 인스턴스를 외부에서 사용할 수 있도록 내보내기