<template>
  <div>
    <button v-on:click="increment">Click {{ state.count }}</button>
    <br />
    <button v-on:click="increment">Deep Click {{ state.deep.count }}</button>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    // JavaScript 객체에서 반응형 상태를 생성하기 위해서는 reactive() 함수를 사용
    // options api 에서는 data()에서 객체를 retrun 해서 선언하는데 그때 반환된 객체는 reactive로 감싸진다고 보면 된다.
    const state = reactive({
      count: 0,
      deep: {
        count: 0,
      },
    });
    const increment = () => {
      state.count++;
      state.deep.count++;
    };
    return {
      state,
      increment,
    };
  },
};
</script>

<style lang="scss" scoped></style>
