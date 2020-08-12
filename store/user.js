export const state = () => ({

	// Переменная которая хранит статус аунтификации пользователя
	authenticated: false,

	// Переменная которая хранит данные пользователя для входа
	userLoginInfo: {
		login: 'user',
		password: '1111'
	},

	// Переменная которая хранит данные пользователя
	userInfo: {
		name: 'Иван',
		surname: 'Бурбас',
		email: 'burbasivan@gmail.com',
		avatar: 'https://hhcdn.ru/photo/580555654.jpeg?t=1597331386&h=GQP_1vkFCeLIZmZ8G_K1Lg',
	},
})

export const mutations = {

	// Mutation который меняет переменную аунтификации на true
	loginUser(state) {
		state.authenticated = true
	},

	// Mutation который меняет переменную аунтификации на false
	logoutUser(state) {
		state.authenticated = false
	},
}

export const actions = {

	// Action который производит логин пользователя
	loginUser({ commit, getters }, objForm) {
		const loginInfoUser = getters['GET_LOGIN_INFO_USER']
		let objValide = {
			login: true,
			password: true,
		}
		if (loginInfoUser.login === objForm.login) {
			if (loginInfoUser.password === objForm.password) {
				commit('loginUser')
				return objValide
			} else {
				objValide.password = false
				return objValide
			}
		} else {
			objValide.login = false
			if (loginInfoUser.password != objForm.password) {
				objValide.password = false
			}
			return objValide
		}
	},

	// Action который производит разлогин пользователя
	logoutUser({ commit }) {
		commit('logoutUser')
		this.$router.push('/login')
	},
}

export const getters = {

	// Getter который возвращает статус аунтификации пользователя
	GET_AUTHENTICATED: state => state.authenticated,

	// Getter который возвращает данные пользователя для входа
	GET_LOGIN_INFO_USER: state => state.userLoginInfo,

	// Getter который возвращает данные пользователя
	GET_USER_INFO: state => state.userInfo,
}
