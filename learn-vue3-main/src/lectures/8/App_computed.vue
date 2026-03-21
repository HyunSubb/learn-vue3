<template>
	<div>
		<h2>{{ teacher.name }}</h2>
		<h3>강의가 있습니까?</h3>
    <!-- 이렇게 밑에 처럼 사용하면 템플릿 표현식은 복잡해지고, 이러한 코드를 반복적으로 사용해야 한다면 비효율적이게 됨. -->
		<!-- <p>{{ teacher.lectures.length > 0 ? '있음 🙂' : '없음 🥲' }}</p> -->

    <!-- 이럴 때 사용하는 것이 계산된 속성(computed property)이다. 훨씬 코드가 깔끔해진다.-->
		<p>{{ hasLecture }}</p>
		<p>{{ hasLecture }}</p>


		<p>{{ existLecture() }}</p>
		<p>{{ existLecture() }}</p>
    <!-- 반응형 데이터가 변경되면 화면(templtae)을 다시 그리기 때문에 template에 적혀있는 메서드가 다시 실행이 된다. -->
    <!-- 그래서 counter를 증가시키니까 existLecture도 다시 실행이 되는거임. -->
		<button v-on:click="counter++">Counter: {{ counter }}</button>
		<h2>이름</h2>
		<p>{{ fullName }}</p>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
	setup() {
		const teacher = reactive({
			name: '짐코딩',
			lectures: ['HTML/CSS', 'JavaScript', 'Vue3'],
		});

    // method와 computed는 결과는 동일하게 나오지만 computed가 성능 면에서 비용이 더 적게든다.
    // computed는 안에서 계산된 값이 캐시되기 때문이다. -> computed 내부가 다시 실행되는 경우는 computed 내 반응형 데이터가 변경된 경우에만 다시 계산이 된다.
    // 캐시가 되는 것을 확인하기 위에 템플릿 문법에서 method와 computed를 두 번씩 찍어보면 method에서 적은 콘솔만 여러번 찍히는 것을 확인 가능.
    /*
      computed를 쓸 때: computed는 종속된 데이터가 변경될 때만 재계산되어 결과를 캐싱(저장)하는 데이터 기반 계산 속성 (읽기 전용, 캐싱 활용)\
      Computed: 데이터 기반으로 화면을 바꿀 때, 복잡한 연산을 반복해야 할 때

      method를 쓸 때: 렌더링될 때마다 매번 호출되어 계산하는 함수
      Methods: 특정 버튼 클릭 시 동작, API 호출, 계산이 매번 새로 필요할 때.
    */
		const hasLecture = computed(() => {
			console.log('computed');
			return teacher.lectures.length > 0 ? '있음 🙂' : '없음 🥲';
		});

		const existLecture = () => {
			console.log('method');
			return teacher.lectures.length > 0 ? '있음 🙂' : '없음 🥲';
		};

		const counter = ref(0);

		const firstName = ref('홍');
		const lastName = ref('길동');

		const fullName = computed({
			get() {
				return firstName.value + ' ' + lastName.value;
			},
			set(value) {
				[firstName.value, lastName.value] = value.split(' ');
			},
    });
    
		console.log('Console 출력: ', fullName.value);
		fullName.value = '짐 코딩';
		return {
			teacher,
			hasLecture,
			existLecture,
			counter,
			fullName,
		};
	},
};
</script>

<style lang="scss" scoped></style>
