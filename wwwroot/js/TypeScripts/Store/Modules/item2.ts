const item2 = {
    namespaced: true,
    state: {
        test2: "Hello World"
    },
    getters: {
        doneTodos: function (state) {
            return state.test2;
        }
    },
    mutations: {
        setTest(state, payLoad) {
            state.test2 = payLoad;
        }
    },
    actions: {
        setTest(context, payLoad) {
            context.commit('setTest', payLoad);
        }

    }
}

