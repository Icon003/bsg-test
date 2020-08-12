<template>
	<div class="login-page">
		<LoginForm/>
	</div>

</template>

<script>
import LoginForm from '~/components/LoginForm'
export default {
	layout: 'login',
	components: {
		LoginForm,
	}
}
</script>

<style scoped>
.login-page {
	display: flex;

	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100%;
}

</style>
