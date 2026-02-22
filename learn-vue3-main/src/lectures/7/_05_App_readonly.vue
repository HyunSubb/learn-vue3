<template>
  <div></div>
</template>

<script>
import { reactive, readonly } from "vue";

export default {
  setup() {
    const original = reactive({
      count: 0,
    });

    const copy = readonly(original);

    original.count++;
    // readonly로 지정된 타겟의 값을 바꾸려고 하면 콘솔에 경고창이 출력된다.
    // copy.count++;

    console.log(original.count);
    console.log(copy.count);
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
