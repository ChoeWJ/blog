import mongoose from "mongoose";
import moment from "moment";  // 시간을 기록하는 라이브러리

// Create Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,  // 필수 값
        unique: true,  // 고유 식별자
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["MainJuin", "SubJuin", "User"],  // DB에서 글 작성 권한 부여
        default: "User",
    },
    register_date: {  // 가입일자
        type: Date,
        default: moment().format("YYYY-MM-DD hh:mm:ss"),
    },
    comments: [
        {
        post_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post",
        },
        comment_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "comment",
        },
        },
    ],
    posts: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
        },
    ],
});

const User = mongoose.model("user", UserSchema);

export default User;  // User 모델 배포