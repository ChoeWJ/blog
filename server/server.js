import app from "./app"; // app.js에서 export한 Express 애플리케이션 인스턴스를 불러옴

app.listen("8000", () => { // 8000번 포트에서 서버를 시작하고 요청 대기
    console.log("hi"); // 서버가 정상적으로 실행되었음을 콘솔에 출력
});