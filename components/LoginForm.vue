<template>
	<div class="login-form">
		<v-card class="login-form__card-form">
			<h1 class="login-form__title-form">Авторизация</h1>
			<v-form ref="loginForm">
				<v-text-field
				v-model="objLoginForm.login"
				:rules="rules.login"
				label="Логин"
				required
				@input="resetValidate"></v-text-field>
				<v-text-field
				v-model="objLoginForm.password"
				:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
				:rules="rules.password"
				:type="showPassword ? 'text' : 'password'"
				label="Пароль"
				@click:append="showPassword = !showPassword"
				@input="resetValidate"></v-text-field>
				<div class="login-form__button-container">
					<v-btn class="login-form__submit-button" min-width="120" tile depressed color="primary" @click="login">Войти</v-btn>
				</div>
			</v-form>
		</v-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showPassword: false,
			objLoginForm: {
				login: '',
				password: '',
			},
			valid: {
				validLogin: true,
				validPassword: true,
			},
			rules: {
				login: [
					v => !!v || 'Введите логин',
					v => this.validLogin === false ? 'Неверный логин' : !!v,
				],
				password: [
					v => !!v || 'Введите пароль',
					v => this.validPassword === false ? 'Неверный пароль' : !!v,
				],
			}
		}
	},
	methods: {
		async login() {
			let loginResponse = await this.$store.dispatch('user/loginUser', this.objLoginForm)
			if(loginResponse.login === true && loginResponse.password === true) {
				this.$router.push('/')
			} else {
				if(loginResponse.login === false) {
					this.validLogin = false
					this.$refs['loginForm'].validate()
				} else if(loginResponse.password === false) {
					this.validPassword = false
					this.$refs['loginForm'].validate()
				} else if(loginResponse.login === false && loginResponse.password === false) {
					this.validLogin = false
					this.validPassword = false
					this.$refs['loginForm'].validate()
				}
			}
		},
		resetValidate() {
			this.validLogin = true,
			this.validPassword = true,
			this.$refs['loginForm'].resetValidation()
		},
	}
}
</script>

<style scoped>
	.login-form {
		width: 36%;
	}
	.login-form__card-form {
		padding: 35px;
	}
	.login-form__title-form {
		margin-bottom: 30px;
	}
	.login-form__button-container {
		display: flex;

		justify-content: flex-end;

		width: 100%;
		margin-top: 25px;
	}
	.login-form__submit-button {
	}

</style>
