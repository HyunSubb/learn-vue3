<template>
  <div>
    <h2>1. 텍스트 보간법</h2>
    <!-- Vue는 템플릿 문법을 사용하여 렌더링된 DOM을 컴포넌트의 인스턴스 데이터에 선언적으로 바인딩할 수 있다. -->
    <p>{{ message }}</p>
    <!-- v-once 디렉티브를 사용하여 데이터가 변경되어도 갱신(반응)되지 않는 일회성 보간을 수행할 수 있다. -->
    <p v-once>{{ message }}</p>
    <button v-on:click="message = message + '!'">Click!</button>
    <hr />
    <h2>2. HTML</h2>
    <!-- 이중 중괄호는 HTML 속성에 사용할 수 없습니다. 실제 HTML을 출력하려면 [v-html]를 사용하세요. -->
    <p>{{ rawHtml }}</p>
    <p v-html="rawHtml"></p>
    <hr />
    <h2>3. 속성 바인딩</h2>
    <!-- ** v-bind는 매우 자주 사용하기 때문에 단축 문법(:)이 있습니다. ** -->
    <div v-bind:title="dynamicTitle">마우스를 올려보세요</div>
    <input type="text" value="홍길동" v-bind:disabled="isInputDisabled" />
    <!-- 다중 속성 바인딩 : 여러 속성을 한번에 바인딩할 수 있다. -->
    <input v-bind="attrs" />
    <h2>JavaScript</h2>
    <!-- 이중 괄호에서는 자바스크립트의 표현식도 사용할 수 있다. -->
    {{ message.split("").reverse().join("") }}<br />
    {{ isInputDisabled ? "예" : "아니오" }}
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const message = ref("안녕하세요!");
    const rawHtml = ref("<strong>안녕하세요</strong>");

    const dynamicTitle = ref("안녕하세요!@@@@@!!!");
    const isInputDisabled = ref(true);
    // const isInputDisabled = ref(false);
    const attrs = ref({
      type: "text",
      value: "12345678",
      disalbed: false,
    });

    return {
      message,
      rawHtml,
      dynamicTitle,
      isInputDisabled,
      attrs,
    };
  },
};
</script>

<style lang="scss" scoped></style>
