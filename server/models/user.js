import mongoose from "mongoose"; // Mongoose를 불러와 MongoDB 모델 정의에 사용
import moment from "moment";  // 시간을 포맷팅하는 라이브러리

// Create Schema
const UserSchema = new mongoose.Schema({ // 사용자 정보를 담는 스키마 정의
    name: { // 사용자 이름
        type: String, // 문자열 타입
        required: true, // 필수 항목
    },
    email: { // 사용자 이메일
        type: String, // 문자열 타입
        required: true, // 필수 항목
        unique: true, // 고유값으로 설정 (중복 방지)
    },
    password: { // 사용자 비밀번호
        type: String, // 문자열 타입
        required: true, // 필수 항목
    },
    role: { // 사용자 역할 (권한 구분)
        type: String, // 문자열 타입
        enum: ["MainJuin", "SubJuin", "User"], // 지정된 값 중 하나만 허용
        default: "User", // 기본값은 일반 사용자
    },
    register_date: { // 가입 일자
        type: Date, // 날짜 타입
        default: moment().format("YYYY-MM-DD hh:mm:ss"), // 기본값은 현재 날짜와 시간 (moment 사용)
    },
    comments: [ // 사용자가 작성한 댓글 목록
        {
            post_id: { // 댓글이 달린 게시글 ID
                type: mongoose.Schema.Types.ObjectId, // ObjectId 타입
                ref: "post", // 참조 대상은 "post" 모델
            },
            comment_id: { // 댓글 ID
                type: mongoose.Schema.Types.ObjectId, // ObjectId 타입
                ref: "comment", // 참조 대상은 "comment" 모델
            },
        },
    ],
    posts: [ // 사용자가 작성한 게시글 목록
        {
            type: mongoose.Schema.Types.ObjectId, // 게시글의 ObjectId
            ref: "post", // 참조 대상은 "posts" 모델
        },
    ],
});

const User = mongoose.model("user", UserSchema); // "user"라는 이름으로 모델 생성 및 등록

export default User;  // User 모델을 외부에서 사용할 수 있도록 export