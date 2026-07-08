import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
// import App from './App.vue';

// --- Lecture App Imports (Uncomment to use) ---
// import App from './lectures/3/App_CompositionAPI.vue';
// import App from './lectures/3/App_OptionsAPI.vue';
// import App from "./lectures/4/App_CompositionAPI.vue";
// import App from './lectures/5/App_Setup.vue';
// import App from "./lectures/6/App_TemplateSyntax.vue";
// import App from "./lectures/7/_01_App_reactive.vue";
// import App from "./lectures/7/_02_App_ref.vue";
// import App from "./lectures/7/_03_App_ref_object_array.vue";
// import App from "./lectures/7/_04_App_toRefs_toRef.vue";
// import App from "./lectures/7/_05_App_readonly.vue";
// import App from "./lectures/8/App_computed.vue";
// import App from './lectures/9/App_class_binding.vue';
// import App from './lectures/9/App_style_binding.vue';
// import App from './lectures/10/App_v-if.vue';
import App from './lectures/11/App_v-for.vue';
// import App from './lectures/12/App_directives.vue';
// import App from './lectures/12/App_v-memo.vue';
// import App from './lectures/13/App_event.vue';
// import App from './lectures/13/App_keyboard.vue';
// import App from './lectures/13/App_mouse.vue';
// import App from './lectures/13/App.vue';
// import App from './lectures/14/App_two_way_binding.vue';
// import App from './lectures/15/App_immediate.vue';
// import App from './lectures/15/App_multiple_source_type.vue';
// import App from './lectures/15/App_watch.vue';
// import App from './lectures/15/App_watcheffect.vue';

//  <!-- 그리고 이 안에는 루트 컴포넌트로 렌더링이 될 App.vue가 들어가게 된다. -->
const app = createApp(App);

// app.component('AppCard', AppCard);

// app.provide("app-message", "app message 입니다");
//
// app.config.globalProperties.msg = "hello";
// app.provide("msg", "hello msg");
// <!-- 그런 다음 생성된 뷰 인스턴스를 마운트함. 결론적으로 이 안에 있는 루트 컴포넌트가 렌더링 된다고 보면 된다. -->
// #app은 index.html에 있는 id="app"을 의미.
// 결론적으로 index.html에 있는 id="app" 태그 안에 App.vue(=루트 컴포넌트)가 렌더링 된다고 보면 된다.
app.mount("#app");
import "bootstrap/dist/js/bootstrap.js";
