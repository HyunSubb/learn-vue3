<template>
	<div>
		<button v-on:click="increment">Counter: {{ counter }}</button>
	</div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  setup() {
    // Composition API를 사용하면 동일한 논리적 관심사 코드가 그룹화 되어 코드를 분석하기도 쉽고 유지보수가 용이해진다.
		const counter = ref(0);
    const increment = () => counter.value++;

    const books = reactive([]);
    const addBook = (title, author) => {
      books.push({ title, author });
    };

		onMounted(() => {
			console.log('컴포넌트가 마운트 되었습니다!');
		});

		return {
			counter,
      increment,
      addBook,
		};
	},
};
</script>

<style lang="scss" scoped></style>
