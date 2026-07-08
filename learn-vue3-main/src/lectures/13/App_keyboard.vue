<template>
	<div>
		<div id="modifiers">
			<div @click="clickDiv">
				DIV 영역
				<p @click.self="clickP">
					P 영역
					<!-- <span @click.stop="clickSpan"> SPAN 영역 </span> -->
					<span @click="clickSpan"> SPAN 영역 </span>
					<a href="https://naver.com" @click.prevent.stop="clickA">a 영역</a>
				</p>
			</div>
		</div>
		<button @click.once="clickDiv">once</button>
	</div>
</template>

<script>
export default {
	setup() {
		const clickDiv = () => {
			console.log('clickDiv');
			// 이벤트 전파에 의해서 span을 클릭하면 div까지 이벤트 발생함.
			// location.href = 'https://naver.com';
		};
		const clickP = e => {
			e.stopPropagation();
			console.log('clickP');
		};
		const clickSpan = e => {
			// 이벤트 캡처링(위에서 아래로 이벤트 전파)
			// 이벤트 버블링(밑에서 위로 이벤트 전파)
			// e.stopPropagation() 을 사용하면 상위 태그로 이벤트가 전파되는 것을 막아준다.
			e.stopPropagation();
			console.log('clickSpan');
			alert('좋아요');
		};
		const clickA = e => {
			// 이벤트의 기본 동작을 막고싶으면 e.preventDefault()를 사용하면 된다.
			// e.preventDefault();
			alert('어떤기능~');
		};
		return {
			clickDiv,
			clickP,
			clickSpan,
			clickA,
		};
	},
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
	padding: 40px;
}
#modifiers div {
	background-color: #ccc;
}
#modifiers p {
	background-color: #999;
}
#modifiers span {
	background-color: #666;
	display: block;
}
</style>
