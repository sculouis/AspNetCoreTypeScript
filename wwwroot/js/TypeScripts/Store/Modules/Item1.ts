enum ActionTypes {
    SET_TEST = 'SET_TEST',
}

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
        [ActionTypes.SET_TEST](context, payLoad) {
            context.commit('setTest', payLoad);
        }

    }
}
