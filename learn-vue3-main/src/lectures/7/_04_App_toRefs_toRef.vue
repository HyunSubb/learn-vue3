<template>
  <div>
    <p>author: {{ author }}</p>
    <p>title: {{ title }}</p>
  </div>
</template>

<script>
import { reactive, toRef, toRefs } from "vue";

export default {
  setup() {
    const book = reactive({
      author: "Vue Team",
      year: "2020",
      title: "Vue 3 Guide",
      description: "당신은 지금 바로 이 책을 읽습니다  ;)",
      price: "무료",
    });

    // 구조 분해 할당으로 가져온 속성들은 반응형을 잃게된다.
    // const { author, title } = book;

    // 반응형을 잃지않도록 하기 위해서는 toRef나 toRefs를 사용하여 반응형 객체의 속성과 동기화를 시켜주면 된다.
    // const { author, title } = toRefs(book);
    const author = toRef(book, "author");
    const title = toRef(book, "title");

    return { author, title, book };
  },
};
</script>

<style lang="scss" scoped></style>
