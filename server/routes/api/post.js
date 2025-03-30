import express from "express"; // Express 모듈 불러오기

// Model
import Post from "../../models/post"; // Post 모델 불러오기

const router = express.Router(); // 라우터 인스턴스 생성

// GET /api/post - 모든 게시글 조회
router.get("/", async (req, res) => {
  const postFindResult = await Post.find(); // 모든 게시글 데이터 조회
  console.log(postFindResult, "All Post Get"); // 콘솔에 조회 결과 출력
  res.json(postFindResult); // 조회된 게시글을 JSON 형태로 응답
});

// POST /api/post - 새로운 게시글 생성
router.post("/", async (req, res, next) => {
  try {
    console.log(req, "req"); // 요청 객체 콘솔 출력 (디버깅용)
    const { title, contents, fileUrl, creator } = req.body; // 요청 본문에서 필드 추출

    const newPost = await Post.create({
      title,        // 게시글 제목
      contents,     // 게시글 내용
      fileUrl,      // 파일 URL
      creator,      // 작성자 정보
    });

    res.json(newPost); // 생성된 게시글 정보를 JSON 형태로 응답
  } catch (e) {
    console.log(e); // 에러 발생 시 콘솔에 출력
  }
});

export default router; // 라우터를 외부에서 사용할 수 있도록 내보내기