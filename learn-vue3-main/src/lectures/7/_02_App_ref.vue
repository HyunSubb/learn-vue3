<template>
  <div>
    <p>{{ message }}</p>
    <button v-on:click="addMessage">add click</button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  setup() {
    // ref는 primitive 타입을 반응형으로 만들 때 사용한다.
    let message = ref("Hello Vue!");

    // 밑에 reactive로 선언된것은 반응형으로 동작하지 않는데 reactive() 함수는 객체타입에만 동작하기 때문.
    // let message = reactive("Hello Vue!");

    const addMessage = () => {
      message.value = message.value + "!";
    };
    
    console.log("message: ", message);
    console.log("message typeof: ", typeof message);
    console.log("message: ", message.value);
    console.log("message typeof: ", typeof message.value);
    return {
      message,
      addMessage,
    };
  },
};
</script>

<style lang="scss" scoped></style>
