export default function ({ store, redirect }) {
	let authenticated = store.getters['user/GET_AUTHENTICATED']
	if (authenticated === false) {
		return redirect('/login')
	}
}
