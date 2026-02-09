<template>
  <div>
    <h2>반응형 메시지</h2>
    <p>{{ reactiveMessage }}</p>
    <button v-on:click="addReactiveMesssage">Add Message</button>
    <h2>일반 메시지</h2>
    <p>{{ normalMessage }}</p>
    <button v-on:click="addNormalMesssage">Add Message</button>
  </div>
</template>

<script>
import { isRef, onBeforeMount, onMounted, ref } from "vue";

export default {
  setup() {
    console.log("setup()");
    // 반응형
    const reactiveMessage = ref("Hello Reactive Message");
    const addReactiveMesssage = () => {
      reactiveMessage.value = reactiveMessage.value + "!";
    };
    console.log("isRef(reactiveMessage): ", isRef(reactiveMessage));

    // 일반
    let normalMessage = "Hello Normal Message";
    const addNormalMesssage = () => {
      normalMessage = normalMessage + "!";
    };
    console.log("isRef(normalMessage): ", isRef(normalMessage));

    // onMounted, onBeforeMount는 라이프 사이클 훅은 Vue 프레임워크가 자동으로 실행해 주는 함수들이다.
    // create → mount → update → destroy 대충 이런 흐름으로 라이프사이클이 진행됨.
    // Vue 인스턴스는 크게 생성(create)되고, DOM에 부착(mount)되고, 업데이트(update)되며, 없어지는(destroy) 4가지 과정을 거치게 된다.
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });

    return {
      reactiveMessage,
      normalMessage,
      addReactiveMesssage,
      addNormalMesssage,
    };
  },
};
</script>

<style lang="scss" scoped></style>
