<template>
	<v-app>
		<div class="wrapper">
			<nuxt/>
		</div>
	</v-app>
</template>

<script>
export default {
	middleware: 'authenticated',
}
</script>

<style scoped>
.wrapper {
	width: 100%;
	max-width: 1280px;
	height: 100vh;
	margin: 0 auto;
	padding: 36px;
}

</style>
