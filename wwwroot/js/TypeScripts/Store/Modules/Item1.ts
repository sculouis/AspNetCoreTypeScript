const item1 = {
    namespaced: true,
    state: {
        test: "Hello World"
    },
    getters: {
        doneTodos: function (state) {
            return state.test;
        }
    },
    mutations: {
        setTest(state, payLoad) {
            state.test = payLoad;
        }
    },
        actions: {
            setTest(context, payLoad) {
                context.commit('setTest', payLoad);
            }

        }
}
