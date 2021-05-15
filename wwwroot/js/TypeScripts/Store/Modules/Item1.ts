const item1 = {
    namespaced: true,
    state: {
        test: "Hello World"
    },
    getters: {
        doneTodos: function (state) {
            return state.test
        }
    }
}