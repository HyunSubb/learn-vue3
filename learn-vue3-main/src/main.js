import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";

//  <!-- 그리고 이 안에는 루트 컴포넌트로 렌더링이 될 App.vue가 들어가게 된다. -->
const app = createApp(App);

// app.component('AppCard', AppCard);

app.provide("app-message", "app message 입니다");
//
app.config.globalProperties.msg = "hello";
app.provide("msg", "hello msg");
// <!-- 그런 다음 생성된 뷰 인스턴스를 마운트함. 결론적으로 이 안에 있는 루트 컴포넌트가 렌더링 된다고 보면 된다. -->
// #app은 index.html에 있는 id="app"을 의미.
// 결론적으로 index.html에 있는 id="app" 태그 안에 App.vue(=루트 컴포넌트)가 렌더링 된다고 보면 된다.
app.mount("#app");
import "bootstrap/dist/js/bootstrap.js";
