import mongoose from "mongoose"; // Mongoose를 불러와 MongoDB 모델을 정의하고 사용할 수 있게 함

// Create Schema
const CategorySchema = new mongoose.Schema({ // 카테고리 정보를 정의하는 스키마 생성
    categoryName: { // 카테고리 이름 필드 정의
        type: String, // 문자열 타입
        default: "미분류", // 값이 없을 경우 기본값은 "미분류"
    },
    posts: [ // 해당 카테고리에 속한 게시글 목록 (ObjectId 배열)
        {
            type: mongoose.Schema.Types.ObjectId, // 게시글의 MongoDB ObjectId를 참조
            ref: "post", // 참조 대상은 "post" 모델 (다른 컬렉션과 관계 설정)
        },
    ],
});

const Category = mongoose.model("category", CategorySchema); // "category"라는 이름으로 모델 생성 및 등록

export default Category; // Category 모델을 외부에서 사용할 수 있도록 export