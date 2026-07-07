import { createApp } from 'vue';
import App from './App.vue';
import AppNav from './components/AppNav.vue';
import AppHeader from './components/AppHeader.vue';
import AppView from './components/AppView.vue';
import BookComponent from './components/BookComponent.vue';

// Vue.createApp(App) 대신 createApp(App)으로 수정
const app = createApp(App);

app.component('AppNav', AppNav);
app.component('AppHeader', AppHeader);
app.component('AppView', AppView);
app.component('BookComponent', BookComponent);

app.mount('#app');

/*
    1. App.vue : 우리가 그린 그림(도화지)

    2. const app = createApp(App) : 우리가 그린 그림을 액자 틀에 끼울 수
    있도록 유리도 덮고 고리도 다는 작업, 그 결과물을 변수 app에 담아뒀다.

    3. 액자에 그림 끼워넣기 app.mount('#app') : 완성된 결과물(app)을
    벽에 걸린 액자 틀(#app)에 장착(mount)하는 행동이다.

    [코드의 흐름대로 다시 보기]
    index.html에는 원래 화면이 텅 비어 있습니다. 오직 뼈대만 존재합니다.

    <!-- index.html -->
    <div id="app">
    <!-- 여기에 Vue가 만든 화면이 조립되어 들어갈 예정입니다! -->
    </div>

    main.js에서 코드가 차례대로 실행됩니다.
    1. App.vue(그림)를 가져와서 조립할 준비를 합니다.
    이 준비된 Vue 애플리케이션의 이름을 변수 `myVueInstance`라고 해봅시다.
    const myVueInstance = createApp(App);
    2. 이 조립된 인스턴스를 진짜 브라우저 화면(HTML)의 특정 위치에 끼워 넣습니다.
    CSS 선택자인 '#app'을 인자로 줍니다. (id가 app인 div 태그를 찾으라는 뜻)
    myVueInstance.mount('#app');

    [요약하자면]
    app.mount의 app은 "App.vue" 자체가 아닙니다. createApp()을 통해 준비된 "Vue 시스템 엔진(인스턴스)"입니다.
    mount('#app')의 #app은 "index.html의 <div id="app">"을 가리킵니다.
    즉, "내가 조립해 둔 Vue 엔진(app)아, index.html의 #app 영역을 장악해서 화면을 그려라!" 하고 명령을 내리는 것입니다.
    만약 index.html에 <div id="my-root"></div>라고 적혀 있었다면, 코드도 app.mount('#my-root')가 되었을 것입니다.
*/