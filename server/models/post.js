import mongoose from "mongoose"; // Mongoose를 불러와 MongoDB 모델 정의에 사용
import moment from "moment"; // moment를 불러와 날짜와 시간 포맷을 간편하게 처리

const PostSchema = new mongoose.Schema({ // 게시글 정보를 담는 스키마 정의
    title: { // 게시글 제목
        type: String, // 문자열 타입
        required: true, // 필수 입력 항목
        index: true, // 검색 성능 향상을 위한 인덱스 설정
    },
    contents: { // 게시글 본문 내용
        type: String, // 문자열 타입
        required: true, // 필수 입력 항목
    },
    views: { // 조회 수
        type: Number, // 숫자 타입
        default: -2, // 기본값은 -2 (특정 로직 기반 초기값으로 추정)
    },
    fileUrl: { // 첨부 이미지 또는 파일 URL
        type: String, // 문자열 타입
        default: "https://source.unsplash.com/random/301x201", // 기본 이미지 URL (향후 블로그에서 수정 예정)
    },
    date: { // 게시글 작성 일시
        type: String, // 문자열 타입
        default: moment().format("YYYY-MM-DD hh:mm:ss"), // 현재 날짜와 시간으로 기본값 설정
    },
    category: { // 게시글이 속한 카테고리
        type: mongoose.Schema.Types.ObjectId, // 카테고리의 ObjectId 참조
        ref: "category", // 참조 대상은 "category" 모델
    },
    comments: [ // 게시글에 달린 댓글 목록
        {
            type: mongoose.Schema.Types.ObjectId, // 댓글의 ObjectId 참조
            ref: "comment", // 참조 대상은 "comment" 모델
        },
    ],
    creator: { // 게시글 작성자 정보
        type: mongoose.Schema.Types.ObjectId, // 작성자의 ObjectId 참조
        ref: "user", // 참조 대상은 "user" 모델
    },
});

const Post = mongoose.model("post", PostSchema); // "post"라는 이름으로 모델 생성 및 등록

export default Post; // Post 모델을 외부에서 사용할 수 있도록 export