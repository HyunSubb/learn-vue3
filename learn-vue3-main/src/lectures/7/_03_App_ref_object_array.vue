<template>
  <div></div>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  setup() {
    // ref -> Object
    const count = ref(0);
    const state = reactive({
      count,
    });
    count.value++;
    count.value++;

    console.log("count : " + count);
    console.log("count.value : " + count.value);
    // ref로 선언한 데이터를 반응형 객체의 속성으로 주입하게 되면 value(내부 값)가 언래핑이 되서 .value를 사용하지 않아도 된다.
    console.log("state.count: ", state.count);

    // ref -> Array
    const message = ref("Hello");
    const arr = reactive([message]);
    console.log("message : " + message);
    console.log("message.value : " + message.value);
    // 반응형 객체와 달리 ref가 반응형 배열 또는 Map과 같은 기본 컬렉션 타입의 요소로 접근될 때 수행되는 래핑 해제가 없다.
    console.log("arr[0]: ", arr[0].value);
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
