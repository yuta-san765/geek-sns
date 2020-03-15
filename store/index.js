export const state = () => ({
  user: null
})

export const mutations = {
  SET_USER_DATA(state, userData) {
    state.user = userData
    localStorage.setItem('user', JSON.stringify(userData))
    this.$axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
  }
}

export const actions = {
  register({ commit }, credentials) {
    return this.$axios
      .$post('sign_up', { sign_up_user_params: credentials })
      .then((res) => {
        console.log('user data is', res)
        // commit('SET_USER_DATA', data)
      })
  }
}
