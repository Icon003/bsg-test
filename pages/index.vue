<template>
	<div class="user-page">
		<header class="user-page__header">
			<v-parallax class="user-page__paralax-header" height="300" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"></v-parallax>
			<div class="user-page__content-header">
				<v-card class="user-page__card-avatar-header">
					<v-avatar size="180">
						<v-img :src="user.avatar" :alt="`Фото ${user.name} ${user.surname}`" aspect-ratio="1.7"></v-img>
					</v-avatar>
				</v-card>
				<div class="user-page__user-info-header">
					<h1 class="user-page__user-name">{{user.name}} {{user.surname}}</h1>
					<a class="user-page__email-user" rel="nofollow noopener" target="_blank" :href="`mailto:${user.email}`">{{user.email}}</a>
				</div>
			</div>
			<v-btn class="user-page__logout-button" icon color="white" @click="logoutUser">
            	<v-icon>mdi-logout</v-icon>
            </v-btn>
		</header>
		<main class="user-page__main">
			<v-card
			v-for="(item, index) of arrayPlugCart"
			:key="index"
			:class="[`user-page__plug-aditional-user-info`, index === arrayPlugCart.length-1 ? `user-page__plug-aditional-user-info--last-item` : '']"
			:elevation="1"></v-card>
		</main>
	</div>
</template>
<script>
export default {
	async asyncData({store}) {
		const userInfo = store.getters['user/GET_USER_INFO']
		return {
			user: userInfo,
		}
	},
	data() {
		return {
			arrayPlugCart: [1, 2, 3, 4, 5, 6],
		}
	},
	methods: {
		logoutUser() {
			this.$store.dispatch('user/logoutUser')
		},
	},
}
</script>

<style scoped>
	.user-page {
	}
	.user-page__header {
		width: 100%;
		margin-bottom: 90px;

		position: relative;
	}
	.user-page__paralax-header {
		border-top-left-radius: 50px;
		border-top-right-radius: 50px;
	}
	.user-page__content-header {
		display: flex;

		position: absolute;
		z-index: 99;
		bottom: -60px;
		left: 5%;
	}
	.user-page__card-avatar-header {
		width: auto;
		margin-right: 30px;
		padding: 15px;

		background-color: #ffffff;
	}
	.user-page__user-info-header {
	}
	.user-page__user-name {
		margin-bottom: 15px;

		font-size: 36px;

		color: #ffffff;
	}
	.user-page__email-user {
		color: #ffffff;

		text-decoration: none;
	}
	.user-page__logout-button {
		position: absolute;
		z-index: 99;
		top: 25px;
		right: 20px;
	}
	.user-page__main {
		width: 100%;
		padding-right: 5%;
		padding-bottom: 5%;
		padding-left: 5%;
	}
	.user-page__plug-aditional-user-info {
		width: 100%;
		height: 160px;
		margin-bottom: 25px;

		border-radius: 4px;
		background-color: #fcfaf6;
	}
	.user-page__plug-aditional-user-info--last-item {
		margin-bottom: 0;
	}

</style>
