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
import { isRef, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, ref } from "vue";

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

    // --- [2. 라이프사이클 훅] ---
    // 이 함수들은 우리가 호출(`onMounted()`)하는 코드를 직접 짜지 않았습니다.
    // Vue가 내부적으로 "자, 이제 마운트 끝났네? 내가 onMounted에 등록된 거 다 실행할게!" 하고 실행해 줍니다.

    // onMounted, onBeforeMount는 라이프 사이클 훅은 Vue 프레임워크가 자동으로 실행해 주는 함수들이다.
    // create → mount → update → destroy 대충 이런 흐름으로 라이프사이클이 진행됨.
    // Vue 인스턴스는 크게 생성(create)되고, DOM에 부착(mount)되고, 업데이트(update)되며, 없어지는(destroy) 4가지 과정을 거치게 된다.
    // 라이프사이클 단계에서 실행되는 함수를 라이프사이클 훅이라고 부른다.
    onMounted(() => {
      // 화면에 DOM이 딱 나타나면 자동으로 찍힘!
      console.log("onMounted()");
    });
    onBeforeMount(() => {
      // 화면에 그려지기 직전에 자동으로 찍힘!
      console.log("onBeforeMount()");
    });

    // vue에서 반응형인 값들이 update 될 때는 setup - mount 절차를 거치지 않고 update 훅만 실행됨.
    // setup - mount는 단 한번만 실행된다.
    onBeforeUpdate(() => {
      console.log("데이터 바뀌기 전! (화면 갱신 직전)");
    });

    onUpdated(() => {
      console.log("데이터 바뀌어서 화면도 새로 그려짐! (Update 완료)");
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
