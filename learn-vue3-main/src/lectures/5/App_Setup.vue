<template>
  <div>
    <p>
      {{ counter }}
    </p>
    <p>
      {{ message }}
    </p>
    <button @click="increment">click!</button>
  </div>
</template>

<!-- <script setup> -->
<script setup script>
// <script setup script>을 사용하면 기존에 있던 export default{}, setup() 등의 함수 껍데기는 제거해야한다.
import { ref } from "vue";

// export default {
  // setup() {
    // setup() 함수(hook)는 Composition API 사용을 위한 진입점 역할을 한다.
    // 그리고 setup 함수는 컴포넌트 인스턴스가 생성되기 전에 실행된다.
    const counter = ref(0);
    const message = ref("Hello Vue3");
    const increment = () => {
      counter.value++;
    };
  //   return {
  //     counter,
  //     message,
  //     increment,
  //   };
  // },
// };
</script>

<style lang="scss" scoped></style>
