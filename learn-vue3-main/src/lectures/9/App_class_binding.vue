<!-- <template>
	<div>
		<div
			class="text"
			:class="[isActive ? 'active-class' : 'class', errorClass, classObject]"
		>
			텍스트 입니다.
		</div>
		<button v-on:click="toggle">toggle</button>
		<button v-on:click="hasError = !hasError">toggleError</button>
	</div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { reactive, ref } from 'vue';

export default {
	setup() {
		const isActive = ref(true);
		const hasError = ref(false);

		// const classObject = reactive({
		// 	active: true,
		// 	'text-danger': true,
		// });

		const classObject = computed(() => {
			return {
				active: true && true,
				'text-danger': true && true,
				'text-blue': true,
			};
		});

		const activeClass = ref('active');
		const errorClass = ref('error');

		const toggle = () => {
			isActive.value = !isActive.value;
		};
		return { isActive, toggle, hasError, classObject, activeClass, errorClass };
	},
};
</script>

<style scoped>
.active {
	font-weight: 900;
}
.text-danger {
	color: red;
}
</style> -->

<!-- 클래스 객체 바인딩 ------------------------------------------------------------------------------ -->

<!-- <script setup>
import { ref } from 'vue';

const hasError = ref(false); // 처음엔 에러 없음

const checkPassword = () => {
  // 비밀번호 검사 로직 (틀리면 true로 바뀜!)
  hasError.value = true; 
};
</script>

<template>
  <div>
      1. 일반 class="input-box"는 무조건 적용됩니다. (기본 디자인)
      2. hasError 값이 true가 되면 'text-danger' 클래스가 찰싹 달라붙습니다!
    <input 
      type="password" 
      class="input-box" 
      :class="{ 'text-danger': hasError }" 
    />
    <button @click="checkPassword">확인</button>
  </div>
</template>

<style scoped>
.input-box { border: 1px solid gray; }
.text-danger { border: 2px solid red; background-color: #ffe6e6; } 
</style> -->

<!-- [심화] 클래스 배열 바인딩 : 여러 조건 한 번에 섞어 쓰기 ------------------------------------------------------------------------------ -->

<script setup>
import { ref, computed } from 'vue';

const isActive = ref(true);
const errorClass = ref('error-style'); // 클래스 이름 자체를 변수에 저장

// 여러 클래스 조건을 묶어놓은 객체 
const classObject = computed(() => {
  return {
    'text-blue': true,
    'font-bold': true
  };
});
</script>

<template>
  <div>
    <!-- 
      배열([]) 안에는 뭐든 다 들어갑니다!
      1. 삼항 연산자: isActive가 true면 'active-class', 아니면 'normal-class'
      2. 일반 문자열 변수: errorClass 변수에 담긴 값('error-style') 적용
      3. 객체 덩어리: classObject에 정의된 모든 규칙 싹 다 적용
    -->
	  <!-- 삼항 연산자는 실무에서 밥 먹듯이 쓰기에 눈에 익혀두자. -->
    <div :class="[isActive ? 'active-class' : 'normal-class', errorClass, classObject]">
      텍스트 입니다.
    </div>

    <!-- 버튼을 누르면 활성화 상태가 토글(반전)됩니다. -->
    <button @click="isActive = !isActive">토글버튼</button>
  </div>
</template>

<style scoped>
.active-class {
  background-color: lightgreen;
}
.normal-class {
  background-color: lightcoral;
}
.error-style {
  font-size: 20px;
}
.text-blue {
  color: blue;
}
.font-bold {
  font-weight: bold;
}
</style>