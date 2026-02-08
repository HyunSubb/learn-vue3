<!-- App.vue는 루트 컴포넌트라고 보면 된다. -->
<!-- 처음에 웹 애플리케이션이 실행이 되면 index.html 파일을 렌더링할 거임. -->
<!-- main.js를 살펴보면 createApp이라는 메서드가 있는데 createApp은 실제 뷰 애플리케이션, 뷰 인스턴스를 생성하는 메서드이다. -->
<template>
  <div>
    <TheNav></TheNav>
    <TheView></TheView>
  </div>
</template>

<script>
import TheNav from "./components/TheNav.vue";
import TheView from "./components/TheView.vue";
export default {
  components: {
    TheNav,
    TheView,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
