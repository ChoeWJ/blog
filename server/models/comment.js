import mongoose from "mongoose"; // Mongoose를 불러와 MongoDB 모델 정의에 사용
import moment from "moment"; // moment를 불러와 날짜 포맷을 간편하게 처리

const CommentSchema = new mongoose.Schema({ // 댓글 정보를 담는 스키마 정의
    contents: { // 댓글 내용 필드
        type: String, // 문자열 타입
        required: true, // 반드시 입력되어야 함
    },
    date: { // 댓글 작성 일시
        type: String, // 문자열 타입으로 저장
        default: moment().format("YYYY-MM-DD hh:mm:ss"), // 기본값은 현재 날짜와 시간 (moment 사용)
    },
    post: { // 어떤 게시글에 작성된 댓글인지 나타냄
        type: mongoose.Schema.Types.ObjectId, // 게시글의 ObjectId 참조
        ref: "post", // 참조 대상은 "post" 모델
    },
    creator: { // 댓글 작성자 정보
        type: mongoose.Schema.Types.ObjectId, // 작성자의 ObjectId 참조
        ref: "user", // 참조 대상은 "user" 모델
    },
});

const Comment = mongoose.model("comment", CommentSchema); // "comment"라는 이름으로 모델 생성 및 등록

export default Comment; // Comment 모델을 외부에서 사용할 수 있도록 export